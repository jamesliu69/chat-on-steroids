import { promises as fs } from 'node:fs';
import path from 'node:path';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import type { ConnectionStatus } from '../src/shared/types.js';
import { createHeadlessHost, writeEndpointSnapshot } from '../src/server/host.js';
import { makeTempDir, removeTempDir } from './helpers.js';

let dataDir: string;

beforeEach(async () => {
  dataDir = await makeTempDir('cos-server-host-');
});

afterEach(async () => {
  await removeTempDir(dataDir);
});

describe('headless server host', () => {
  it('stops admission before processes, plugins, and durable flush after SIGTERM', async () => {
    const events: string[] = [];
    let resolveSignal: ((signal: NodeJS.Signals) => void) | undefined;
    const host = createHeadlessHost({
      connect: async () => { events.push('connect'); },
      subscribeStatus: () => () => {},
      getStatus: () => disconnectedStatus,
      waitForSignal: () => new Promise((resolve) => { resolveSignal = resolve; }),
      shutdownConnection: async () => { events.push('shutdownConnection'); },
      terminateProcesses: async () => { events.push('terminateProcesses'); },
      closePlugins: async () => { events.push('closePlugins'); },
      flushRecorder: async () => { events.push('flushRecorder'); },
      flushSessions: async () => { events.push('flushSessions'); },
      flushDurable: async () => { events.push('flushDurable'); },
      flushLogs: async () => { events.push('flushLogs'); }
    });

    const running = host.start({ command: 'start', dataDir });
    await new Promise<void>((resolve) => setImmediate(resolve));
    resolveSignal?.('SIGTERM');
    await running;

    expect(events).toEqual([
      'connect', 'shutdownConnection', 'terminateProcesses', 'closePlugins',
      'flushRecorder', 'flushSessions', 'flushDurable', 'flushLogs'
    ]);
  });

  it('writes endpoint state without credentials or private configuration', async () => {
    await writeEndpointSnapshot(dataDir, connectedManualStatus, 'manual');

    expect(JSON.parse(await fs.readFile(path.join(dataDir, 'endpoint.json'), 'utf8'))).toEqual({
      state: 'connected', connector: 'Chat On Steroids Core',
      tunnel: 'manual', localUrl: 'http://127.0.0.1:8765/mcp'
    });
  });
});

const disconnectedStatus: ConnectionStatus = {
  state: 'disconnected', detail: '', publicUrl: null, localUrl: null,
  handshakeAt: null, lastRequestAt: null, lastToolCallAt: null, health: null, surfaces: []
};

const connectedManualStatus: ConnectionStatus = {
  ...disconnectedStatus,
  state: 'connected',
  localUrl: 'http://127.0.0.1:8765/mcp',
  surfaces: [{
    id: 'core', connectorName: 'Chat On Steroids Core', description: '', cardSummary: '', optional: false,
    available: true, localUrl: 'http://127.0.0.1:8765/mcp', publicUrl: null, tools: [], state: 'live', detail: '',
    lastRequestAt: null, lastToolCallAt: null
  }]
};
