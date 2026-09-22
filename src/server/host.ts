import { promises as fs } from 'node:fs';
import path from 'node:path';
import type { ConnectionStatus, TunnelKind } from '../shared/types.js';
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
  tunnelKind?: TunnelKind;
}

export interface HeadlessHost {
  start(args: Extract<ServerArgs, { command: 'start' }>): Promise<void>;
  shutdown(): Promise<void>;
}

function snapshot(status: ConnectionStatus, tunnelKind: TunnelKind): Record<string, string> {
  const core = status.surfaces.find((surface) => surface.id === 'core');
  return {
    state: status.state,
    connector: core?.connectorName ?? 'Chat On Steroids Core',
    tunnel: tunnelKind,
    ...(tunnelKind === 'manual' && status.localUrl ? { localUrl: status.localUrl } : {}),
    ...(tunnelKind !== 'openai' && status.publicUrl ? { publicUrl: status.publicUrl } : {})
  };
}

export async function writeEndpointSnapshot(
  dataDir: string,
  status: ConnectionStatus,
  tunnelKind: TunnelKind
): Promise<void> {
  await fs.mkdir(dataDir, { recursive: true, mode: 0o700 });
  const target = path.join(dataDir, 'endpoint.json');
  const temporary = `${target}.tmp`;
  await fs.writeFile(temporary, `${JSON.stringify(snapshot(status, tunnelKind), null, 2)}\n`, { encoding: 'utf8', mode: 0o600 });
  await fs.rename(temporary, target);
}

export function createHeadlessHost(deps: HeadlessHostDependencies): HeadlessHost {
  let shutdownPromise: Promise<void> | null = null;

  const shutdown = (): Promise<void> => {
    shutdownPromise ??= (async () => {
      const steps: Array<() => Promise<void>> = [
        deps.shutdownConnection,
        deps.terminateProcesses,
        deps.closePlugins,
        deps.flushRecorder,
        deps.flushSessions,
        deps.flushDurable,
        deps.flushLogs
      ];
      const failures: unknown[] = [];
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
      const stopStatus = deps.subscribeStatus((status) => {
        endpointWrites = endpointWrites.then(() => writeEndpointSnapshot(args.dataDir, status, deps.tunnelKind ?? 'manual'));
      });
      try {
        await deps.connect();
        await deps.waitForSignal();
      } finally {
        stopStatus();
        await shutdown();
        await endpointWrites;
      }
    },
    shutdown
  };
}
