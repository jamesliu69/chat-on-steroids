import { promises as fs } from 'node:fs';
import path from 'node:path';
import { connect, getStatus, onStatusChange, shutdownConnection } from '../main/connection.js';
import { initConfigPath, loadConfig, saveConfig } from '../main/config.js';
import { unifiedExecManager } from '../main/codex/manager.js';
import { initDurableStore, flushDurable } from '../main/durable.js';
import { flushLogBeforeExit, initLogFile, logError, logInfo } from '../main/logger.js';
import { pluginManager } from '../main/plugins/manager.js';
import { locateRipgrep } from '../main/ripgrep.js';
import { configureSecretProvider, getSecret, initSecretsPath } from '../main/secrets.js';
import { flushRecorder } from '../main/session/recorder.js';
import { flushSessions, initSessionStore } from '../main/session/store.js';
import { locateBinary } from '../main/tunnel/locate.js';
import { TUNNEL_ID_PATTERN } from '../main/tunnel/index.js';
import type { Config, ConnectionStatus } from '../shared/types.js';
import {
  applyServerEnvironment,
  createInitialServerConfig,
  loadServerEnvFile,
  normalizeServerConfig,
  parseServerArgs,
  type ServerArgs
} from './runtime.js';
import { createServerSecretProvider } from './secrets.js';

const TERMINAL_STATES = new Set<ConnectionStatus['state']>([
  'connected',
  'offline',
  'auth-failed',
  'tunnel-unavailable',
  'disconnected'
]);

let shuttingDown = false;
let initializedDataDir: string | null = null;

function line(message: string): void {
  process.stdout.write(`${message}\n`);
}

function errorText(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

async function initializeRuntime(dataDir: string): Promise<void> {
  if (initializedDataDir === dataDir) return;
  if (initializedDataDir !== null) throw new Error('Server runtime cannot switch data directories in one process');
  await fs.mkdir(dataDir, { recursive: true, mode: 0o700 });
  initLogFile(path.join(dataDir, 'server.log'));
  initConfigPath(dataDir);
  initSecretsPath(dataDir);
  initSessionStore(dataDir);
  initDurableStore(dataDir);
  configureSecretProvider(createServerSecretProvider());
  initializedDataDir = dataDir;
}

async function ensureDirectory(directory: string): Promise<void> {
  const stat = await fs.stat(directory).catch(() => null);
  if (!stat?.isDirectory()) throw new Error(`Approved root is not an existing directory: ${directory}`);
}

async function initServer(args: Extract<ServerArgs, { command: 'init' }> | ServerArgs): Promise<void> {
  if (!args.root || !args.name || !args.tunnel || args.tunnelId === undefined) {
    throw new Error('init requires --root and valid server initialization options');
  }
  await ensureDirectory(args.root);
  await initializeRuntime(args.dataDir);
  const config = createInitialServerConfig({
    root: args.root,
    name: args.name,
    tunnel: args.tunnel,
    tunnelId: args.tunnelId
  });
  await saveConfig(config);
  line(`Initialized CoS server configuration in ${args.dataDir}`);
  line(`Approved root: /${args.name} -> ${args.root}`);
  line(`Tunnel mode: ${args.tunnel}`);
}

async function loadServerConfig(dataDir: string, persistNormalization: boolean): Promise<Config> {
  await initializeRuntime(dataDir);
  const loaded = await loadConfig();
  const normalized = normalizeServerConfig(loaded);
  if (persistNormalization && JSON.stringify(normalized) !== JSON.stringify(loaded)) await saveConfig(normalized);
  return applyServerEnvironment(normalized);
}

async function validateConfig(config: Config): Promise<string[]> {
  const failures: string[] = [];
  if (process.platform !== 'linux') failures.push(`Unsupported OS: ${process.platform}; headless server currently requires Linux`);
  if (process.arch !== 'arm64') failures.push(`Unsupported architecture: ${process.arch}; Raspberry Pi server currently requires ARM64`);
  if (config.roots.length === 0) failures.push('No approved roots configured; run init --root <absolute-path>');
  for (const root of config.roots) {
    const stat = await fs.stat(root.path).catch(() => null);
    if (!stat?.isDirectory()) failures.push(`Approved root is unavailable: ${root.path}`);
  }
  if (!locateRipgrep()) failures.push('ripgrep is unavailable; run npm run rg from the CoS source tree');

  if (config.tunnel.kind === 'openai') {
    if (!TUNNEL_ID_PATTERN.test(config.tunnel.tunnelId)) failures.push('OpenAI tunnel ID is missing or invalid');
    if (!(await getSecret('openaiApiKey'))) failures.push('OpenAI tunnel API key is unavailable from systemd credentials or OPENAI_API_KEY');
    if (!locateBinary('tunnel-client', config.tunnel.binaryPath)) failures.push('tunnel-client is unavailable; run npm run tunnel from the CoS source tree');
  } else if (config.tunnel.kind === 'cloudflared') {
    if (!locateBinary('cloudflared', config.tunnel.binaryPath)) failures.push('cloudflared is unavailable; run npm run tunnel from the CoS source tree');
  }
  return failures;
}

async function checkServer(args: ServerArgs): Promise<void> {
  const config = await loadServerConfig(args.dataDir, false);
  const failures = await validateConfig(config);
  line(`OS: ${process.platform}/${process.arch}`);
  line(`Data directory: ${args.dataDir}`);
  line(`Approved roots: ${config.roots.length}`);
  line(`Tunnel mode: ${config.tunnel.kind}`);
  line(`ripgrep: ${locateRipgrep() ? 'ready' : 'missing'}`);
  if (failures.length > 0) {
    for (const failure of failures) process.stderr.write(`FAIL: ${failure}\n`);
    throw new Error(`Server check failed with ${failures.length} issue(s)`);
  }
  line('Server check: ready');
}

function statusSummary(status: ConnectionStatus): string {
  return status.detail ? `${status.state}: ${status.detail}` : status.state;
}

async function writeEndpointSnapshot(dataDir: string, status: ConnectionStatus, tunnelKind: Config['tunnel']['kind']): Promise<void> {
  const core = status.surfaces.find((surface) => surface.id === 'core');
  const snapshot = {
    state: status.state,
    connector: core?.connectorName ?? 'Chat On Steroids Core',
    tunnel: tunnelKind,
    ...(tunnelKind === 'manual' && status.localUrl ? { localUrl: status.localUrl } : {}),
    ...(tunnelKind !== 'openai' && status.publicUrl ? { publicUrl: status.publicUrl } : {})
  };
  const target = path.join(dataDir, 'endpoint.json');
  const temporary = `${target}.tmp`;
  await fs.writeFile(temporary, `${JSON.stringify(snapshot, null, 2)}\n`, { encoding: 'utf8', mode: 0o600 });
  await fs.rename(temporary, target);
}

async function waitForInitialConnection(): Promise<ConnectionStatus> {
  const current = getStatus();
  if (TERMINAL_STATES.has(current.state)) return current;
  return new Promise<ConnectionStatus>((resolve) => {
    const off = onStatusChange((status) => {
      if (!TERMINAL_STATES.has(status.state)) return;
      off();
      resolve(getStatus());
    });
  });
}

async function shutdownServer(signal: NodeJS.Signals | 'startup-failure'): Promise<void> {
  if (shuttingDown) return;
  shuttingDown = true;
  logInfo(`server shutdown requested (${signal})`);
  await shutdownConnection().catch((error) => logError(`server connection shutdown: ${errorText(error)}`));
  await Promise.allSettled([
    unifiedExecManager.terminateAllProcesses(),
    pluginManager.close()
  ]);
  await Promise.allSettled([flushRecorder(), flushSessions(), flushDurable()]);
  await flushLogBeforeExit();
}

async function startServer(args: ServerArgs): Promise<void> {
  const config = await loadServerConfig(args.dataDir, true);
  const failures = await validateConfig(config);
  if (failures.length > 0) throw new Error(failures.join('; '));

  await pluginManager.initialize(args.dataDir);
  let lastPrintedStatus = '';
  let endpointWrites: Promise<void> = Promise.resolve();
  const stopStatus = onStatusChange((status) => {
    const live = getStatus();
    endpointWrites = endpointWrites
      .then(() => writeEndpointSnapshot(args.dataDir, live, config.tunnel.kind))
      .catch((error) => logError(`endpoint snapshot: ${errorText(error)}`));
    if (status.state === 'connected' || status.state === 'offline' || status.state === 'auth-failed' || status.state === 'tunnel-unavailable') {
      const summary = statusSummary(status);
      if (summary !== lastPrintedStatus) {
        lastPrintedStatus = summary;
        line(summary);
      }
    }
  });

  const signalPromise = new Promise<NodeJS.Signals>((resolve) => {
    process.once('SIGINT', () => resolve('SIGINT'));
    process.once('SIGTERM', () => resolve('SIGTERM'));
  });

  try {
    logInfo('headless server starting');
    await connect();
    const initial = await waitForInitialConnection();
    if (initial.state === 'auth-failed' || initial.state === 'tunnel-unavailable' || initial.state === 'disconnected') {
      throw new Error(initial.detail || `Connection failed: ${initial.state}`);
    }
    line('CoS headless server is running. Core MCP is active; Desktop/browser-only features are disabled.');
    const signal = await signalPromise;
    await shutdownServer(signal);
    await endpointWrites;
  } finally {
    stopStatus();
  }
}

export async function main(argv: readonly string[] = process.argv.slice(2)): Promise<void> {
  loadServerEnvFile();
  const args = parseServerArgs(argv);
  switch (args.command) {
    case 'init':
      await initServer(args);
      return;
    case 'check':
      await checkServer(args);
      return;
    case 'start':
      try {
        await startServer(args);
      } catch (error) {
        await shutdownServer('startup-failure');
        throw error;
      }
      return;
  }
}

void main().catch(async (error) => {
  const message = errorText(error);
  try { logError(`headless server failed: ${message}`); } catch { /* logger may not be initialized */ }
  process.stderr.write(`CoS server error: ${message}\n`);
  await flushLogBeforeExit().catch(() => undefined);
  process.exitCode = 1;
});
