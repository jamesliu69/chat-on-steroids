import http from 'node:http';
import { logInfo } from './logger.js';
import { proxyForLog, proxyUrlFromResolution } from './tunnel/proxy.js';

/**
 * The proxy for the app's own requests: the update check, Skills from GitHub, Goal providers and
 * remote plugins (#1255 follow-up). The tunnel program got the system proxy in 2.1.36; these went
 * out directly and failed on networks whose only way out is that proxy.
 *
 * Node's built-in proxy support carries it, for `fetch()` and `http(s).request()` alike. It has no
 * SOCKS, so a SOCKS-only system proxy leaves app requests direct, as before. A proxy the person set
 * in HTTPS_PROXY or HTTP_PROXY wins over the system's, as it does for the tunnel.
 */

/**
 * Never through a proxy: the app's own servers and probes. NO_PROXY matches exact hosts and
 * domain suffixes only (no address ranges), so other direct endpoints are named one by one.
 */
const ALWAYS_DIRECT = ['localhost', '127.0.0.1', '::1', '.localhost'];
const USABLE = /^https?:\/\/\S+$/i;
const PROXY_LOOKUP_MS = 3_000;

export interface AppProxySettings {
  HTTP_PROXY: string;
  HTTPS_PROXY: string;
  NO_PROXY: string;
}

/** What the app's requests use, from the system's answer for the internet and the environment. */
export function appProxySettings(resolution: string, env: Record<string, string | undefined>, directHosts: readonly string[]): AppProxySettings | null {
  // Lower case wins, as in Node and curl; Windows spells names any way it likes.
  const value = (name: string): string => {
    const entries = Object.entries(env).filter(([key, entry]) => key.toUpperCase() === name && entry?.trim());
    return (entries.find(([key]) => key === name.toLowerCase()) ?? entries[0])?.[1]?.trim() ?? '';
  };
  const httpProxy = value('HTTP_PROXY');
  const httpsProxy = value('HTTPS_PROXY');
  const ownHttp = USABLE.test(httpProxy) ? httpProxy : '';
  const ownHttps = USABLE.test(httpsProxy) ? httpsProxy : '';
  const system = proxyUrlFromResolution(resolution);
  // Keep explicit protocol URLs distinct; leave an absent protocol to Node's native behavior.
  const own = Boolean(ownHttp || ownHttps);
  const fallback = !own && system && USABLE.test(system) ? system : '';
  if (!own && !fallback) return null;
  const exceptions = [...value('NO_PROXY').split(','), ...ALWAYS_DIRECT, ...(own ? [] : directHosts)].map(host => host.trim()).filter(Boolean);
  return { HTTP_PROXY: ownHttp || fallback, HTTPS_PROXY: ownHttps || fallback, NO_PROXY: [...new Set(exceptions)].join(',') };
}

/** PAC lookup failure is unknown; it cannot authorize a direct-endpoint exception. */
async function boundedResolution(resolve: (url: string) => Promise<string>, url: string, deadline: number): Promise<string | null> {
  let timer: ReturnType<typeof setTimeout> | undefined;
  try {
    return await Promise.race([
      Promise.resolve().then(() => resolve(url)),
      new Promise<null>(finish => { timer = setTimeout(() => finish(null), Math.max(0, deadline - Date.now())); })
    ]);
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

let applied = 'null';
let restore: (() => void) | null = null;

/**
 * Resolves the system proxy and applies it to every app request. Endpoints the system reaches
 * directly (a Goal provider or plugin on the LAN) stay direct. Only a real change resets Node's
 * agents, since that should not happen in the middle of requests.
 */
export async function applyAppProxy(
  resolve: (url: string) => Promise<string>,
  endpoints: readonly string[],
  env: Record<string, string | undefined> = process.env
): Promise<void> {
  if (typeof http.setGlobalProxyFromEnv !== 'function') return;
  const urls = endpoints.flatMap(endpoint => {
    try {
      const url = new URL(endpoint);
      return url.protocol === 'http:' || url.protocol === 'https:' ? [url] : [];
    } catch { return []; }
  });
  // Every lookup shares one startup budget, rather than adding a deadline per endpoint in series.
  const deadline = Date.now() + PROXY_LOOKUP_MS;
  const [resolution, ...answers] = await Promise.all([
    boundedResolution(resolve, 'https://github.com/', deadline),
    ...urls.map(url => boundedResolution(resolve, url.href, deadline))
  ]);
  const directHosts = answers.flatMap((answer, index) =>
    answer !== null && proxyUrlFromResolution(answer) === null && answer.split(';').some(entry => entry.trim().toUpperCase() === 'DIRECT')
      ? [urls[index]!.hostname.replace(/^\[|\]$/g, '')] : []);
  const settings = appProxySettings(resolution ?? 'DIRECT', env, directHosts);
  const key = JSON.stringify(settings);
  if (key === applied) return;
  restore?.();
  restore = settings ? http.setGlobalProxyFromEnv({ ...settings }) : null;
  applied = key;
  logInfo(settings ? `App requests go via proxy ${proxyForLog(settings.HTTPS_PROXY || settings.HTTP_PROXY)}` : 'App requests go direct');
}

let source: { resolve: (url: string) => Promise<string>; endpoints: () => readonly string[] } | null = null;
let refreshing: Promise<void> | null = null;

/** Where the system answers come from, and which configured endpoints to check. Set once at startup. */
export function configureAppProxy(resolve: (url: string) => Promise<string>, endpoints: () => readonly string[]): void {
  source = { resolve, endpoints };
}

/** Re-reads the system proxy; a proxy switched on or off applies within one refresh. */
export function refreshAppProxy(): Promise<void> {
  if (!source) return Promise.resolve();
  const { resolve, endpoints } = source;
  refreshing ??= applyAppProxy(resolve, endpoints()).catch(() => undefined).finally(() => { refreshing = null; });
  return refreshing;
}
