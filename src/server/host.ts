import { promises as fs } from 'node:fs';
import { randomBytes } from 'node:crypto';
import path from 'node:path';
import type { ConnectionState, ConnectionStatus, TunnelKind } from '../shared/types.js';
import type { ServerArgs } from './runtime.js';

export interface HeadlessHostDependencies {
  connect(): Promise<void>;
  subscribeStatus(listener: (status: ConnectionStatus) => void): () => void;
  getStatus(): ConnectionStatus;
  waitForSignal(): Promise<NodeJS.Signals>;
  shutdownConnection(): Promise<void>;
  terminateProcesses(): Promise<void>;
  closePlugins(): Promise<void>;
  flushRecorder(): Promise<void>;
  flushSessions(): Promise<void>;
  flushDurable(): Promise<void>;
  flushLogs(): Promise<void>;
  tunnelKind?: TunnelKind | (() => TunnelKind);
  reportState?: (state: ConnectionState) => void;
}

export interface HeadlessHost {
  start(args: Extract<ServerArgs, { command: 'start' }>): Promise<void>;
  shutdown(): Promise<void>;
}

function snapshot(status: ConnectionStatus, tunnelKind: TunnelKind): Record<string, string> {
  const core = status.surfaces.find((surface) => surface.id === 'core');
  const localOrigin = safeOrigin(status.localUrl);
  const publicOrigin = safeOrigin(status.publicUrl);
  return {
    state: status.state,
    connector: core?.connectorName ?? 'Chat On Steroids Core',
    tunnel: tunnelKind,
    ...(tunnelKind === 'manual' && localOrigin ? { localUrl: localOrigin } : {}),
    ...(tunnelKind !== 'openai' && publicOrigin ? { publicUrl: publicOrigin } : {})
  };
}

function safeOrigin(value: string | null): string | null {
  if (!value) return null;
  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:' ? url.origin : null;
  } catch {
    return null;
  }
}

function safeCoreEndpoint(value: string | null): string | null {
  if (!value) return null;
  try {
    const url = new URL(value);
    const parts = url.pathname.split('/').filter(Boolean);
    if (
      (url.protocol !== 'http:' && url.protocol !== 'https:') ||
      url.username || url.password || url.search || url.hash ||
      parts.length !== 3 || parts[0] !== 'mcp' || parts[1] !== 'core' ||
      !/^[A-Za-z0-9_-]{32,128}$/.test(parts[2] ?? '')
    ) return null;
    return url.toString();
  } catch {
    return null;
  }
}

function tunnelKindOf(deps: HeadlessHostDependencies): TunnelKind {
  return typeof deps.tunnelKind === 'function' ? deps.tunnelKind() : deps.tunnelKind ?? 'manual';
}

export async function writeEndpointSnapshot(
  dataDir: string,
  status: ConnectionStatus,
  tunnelKind: TunnelKind
): Promise<void> {
  await fs.mkdir(dataDir, { recursive: true, mode: 0o700 });
  await writeAtomicJson(path.join(dataDir, 'endpoint.json'), snapshot(status, tunnelKind));
  const credentials = {
    ...(safeCoreEndpoint(status.localUrl) ? { localUrl: safeCoreEndpoint(status.localUrl)! } : {}),
    ...(safeCoreEndpoint(status.publicUrl) ? { publicUrl: safeCoreEndpoint(status.publicUrl)! } : {})
  };
  const privatePath = path.join(dataDir, 'endpoint-private.json');
  if (Object.keys(credentials).length > 0) await writeAtomicJson(privatePath, credentials);
  else await unlinkIfPresent(privatePath);
}

async function writeAtomicJson(target: string, value: Record<string, string>): Promise<void> {
  const temporary = `${target}.${randomBytes(8).toString('hex')}.tmp`;
  const handle = await fs.open(temporary, 'wx', 0o600);
  try {
    await handle.writeFile(`${JSON.stringify(value, null, 2)}\n`, 'utf8');
  } catch (error) {
    await fs.unlink(temporary).catch(() => {});
    throw error;
  } finally {
    await handle.close();
  }
  try {
    await fs.rename(temporary, target);
  } catch (error) {
    await fs.unlink(temporary).catch(() => {});
    throw error;
  }
}

async function unlinkIfPresent(target: string): Promise<void> {
  try {
    await fs.unlink(target);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== 'ENOENT') throw error;
  }
}

export async function clearEndpointSnapshots(dataDir: string): Promise<void> {
  await fs.mkdir(dataDir, { recursive: true, mode: 0o700 });
  for (const name of ['endpoint.json', 'endpoint-private.json']) {
    const target = path.join(dataDir, name);
    await unlinkIfPresent(target);
    const staleTemps = await fs.readdir(dataDir).then((names) => names.filter((entry) => entry.startsWith(`${name}.`) && entry.endsWith('.tmp')));
    await Promise.all(staleTemps.map((entry) => unlinkIfPresent(path.join(dataDir, entry))));
  }
}

export async function readPrivateEndpoint(dataDir: string): Promise<{ localUrl?: string; publicUrl?: string } | null> {
  let parsed: unknown;
  try {
    parsed = JSON.parse(await fs.readFile(path.join(dataDir, 'endpoint-private.json'), 'utf8'));
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') return null;
    throw new Error('Unable to read the private Core endpoint file');
  }
  if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) return null;
  const record = parsed as Record<string, unknown>;
  const localUrl = typeof record.localUrl === 'string' ? safeCoreEndpoint(record.localUrl) : null;
  const publicUrl = typeof record.publicUrl === 'string' ? safeCoreEndpoint(record.publicUrl) : null;
  if (!localUrl && !publicUrl) return null;
  return { ...(localUrl ? { localUrl } : {}), ...(publicUrl ? { publicUrl } : {}) };
}

export function createHeadlessHost(deps: HeadlessHostDependencies): HeadlessHost {
  let shutdownPromise: Promise<void> | null = null;
  let connectionAttempt: Promise<void> | null = null;

  const shutdown = (): Promise<void> => {
    shutdownPromise ??= (async () => {
      const steps: Array<() => Promise<void>> = [
        deps.terminateProcesses,
        deps.closePlugins,
        deps.flushRecorder,
        deps.flushSessions,
        deps.flushDurable,
        deps.flushLogs
      ];
      const failures: unknown[] = [];
      try {
        await deps.shutdownConnection();
      } catch (error) {
        failures.push(error);
      }
      // shutdownConnection invalidates an in-flight start; wait for its post-await
      // cancellation checks to retire any late endpoint/tunnel before flushing owners.
      try {
        await connectionAttempt;
      } catch (error) {
        failures.push(error);
      }
      for (const step of steps) {
        try {
          await step();
        } catch (error) {
          failures.push(error);
        }
      }
      if (failures.length > 0) throw new AggregateError(failures, 'Headless server shutdown failed');
    })();
    return shutdownPromise;
  };

  return {
    async start(args): Promise<void> {
      let endpointWrites = Promise.resolve();
      let previousState: ConnectionState | null = null;
      const recordStatus = (status: ConnectionStatus): void => {
        if (status.state !== previousState) {
          previousState = status.state;
          deps.reportState?.(status.state);
        }
        endpointWrites = endpointWrites
          .catch(() => undefined)
          .then(() => writeEndpointSnapshot(args.dataDir, status, tunnelKindOf(deps)));
      };
      const stopStatus = deps.subscribeStatus(recordStatus);
      recordStatus(deps.getStatus());
      try {
        const signal = deps.waitForSignal().then((received) => ({ kind: 'signal' as const, received }));
        const connection = Promise.resolve()
          .then(() => deps.connect())
          .then(
            () => ({ kind: 'connected' as const }),
            (error: unknown) => ({ kind: 'error' as const, error })
          );
        connectionAttempt = connection.then(() => undefined);
        const outcome = await Promise.race([signal, connection]);
        if (outcome.kind === 'error') throw outcome.error;
        if (outcome.kind === 'connected') await signal;
      } finally {
        try {
          await shutdown();
        } finally {
          recordStatus(deps.getStatus());
          try {
            await endpointWrites;
          } finally {
            stopStatus();
          }
        }
      }
    },
    shutdown
  };
}
