import { promises as fs } from 'node:fs';
import path from 'node:path';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import type { ConnectionStatus } from '../src/shared/types.js';
import { clearEndpointSnapshots, createHeadlessHost, readPrivateEndpoint, writeEndpointSnapshot } from '../src/server/host.js';
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

  it('registers for SIGTERM before connect and shuts down while connect is pending', async () => {
    const events: string[] = [];
    let resolveSignal: ((signal: NodeJS.Signals) => void) | undefined;
    let resolveConnect: (() => void) | undefined;
    let connectPending = false;
    let signalWasRegisteredDuringConnect = false;
    const host = createHeadlessHost({
      connect: () => {
        events.push('connect');
        connectPending = true;
        return new Promise<void>((resolve) => { resolveConnect = () => { connectPending = false; resolve(); }; });
      },
      subscribeStatus: () => () => {},
      getStatus: () => disconnectedStatus,
      waitForSignal: () => {
        events.push('waitForSignal');
        return new Promise((resolve) => { resolveSignal = resolve; });
      },
      shutdownConnection: async () => {
        events.push('shutdownConnection');
        resolveConnect?.();
      },
      terminateProcesses: async () => { events.push('terminateProcesses'); },
      closePlugins: async () => { events.push('closePlugins'); },
      flushRecorder: async () => { events.push('flushRecorder'); },
      flushSessions: async () => { events.push('flushSessions'); },
      flushDurable: async () => { events.push('flushDurable'); },
      flushLogs: async () => { events.push('flushLogs'); }
    });

    const running = host.start({ command: 'start', dataDir });
    await Promise.resolve();
    signalWasRegisteredDuringConnect = events.indexOf('waitForSignal') < events.indexOf('connect') && connectPending;
    if (!resolveSignal) {
      resolveConnect?.();
      await new Promise<void>((resolve) => setImmediate(resolve));
    }
    resolveSignal?.('SIGTERM');
    await running;

    expect(signalWasRegisteredDuringConnect).toBe(true);
    expect(events.slice(-7)).toEqual([
      'shutdownConnection', 'terminateProcesses', 'closePlugins',
      'flushRecorder', 'flushSessions', 'flushDurable', 'flushLogs'
    ]);
  });

  it('waits for an interrupted connection attempt before flushing durable state', async () => {
    const events: string[] = [];
    let resolveSignal!: (signal: NodeJS.Signals) => void;
    let resolveConnect!: () => void;
    let shutdownResolved!: () => void;
    const shutdownStarted = new Promise<void>((resolve) => { shutdownResolved = resolve; });
    const host = createHeadlessHost({
      connect: () => new Promise<void>((resolve) => { resolveConnect = () => { events.push('connectSettled'); resolve(); }; }),
      subscribeStatus: () => () => {},
      getStatus: () => disconnectedStatus,
      waitForSignal: () => new Promise((resolve) => { resolveSignal = resolve; }),
      shutdownConnection: async () => { events.push('shutdownConnection'); shutdownResolved(); },
      terminateProcesses: async () => { events.push('terminateProcesses'); },
      closePlugins: async () => { events.push('closePlugins'); },
      flushRecorder: async () => { events.push('flushRecorder'); },
      flushSessions: async () => { events.push('flushSessions'); },
      flushDurable: async () => { events.push('flushDurable'); },
      flushLogs: async () => { events.push('flushLogs'); }
    });

    const running = host.start({ command: 'start', dataDir });
    try {
      await new Promise<void>((resolve) => setImmediate(resolve));
      expect(resolveConnect).toBeTypeOf('function');
      resolveSignal('SIGTERM');
      await shutdownStarted;
      await new Promise<void>((resolve) => setImmediate(resolve));
      expect(events).toEqual(['shutdownConnection']);
    } finally {
      resolveConnect?.();
      await running;
    }
    expect(events).toEqual([
      'shutdownConnection', 'connectSettled', 'terminateProcesses', 'closePlugins',
      'flushRecorder', 'flushSessions', 'flushDurable', 'flushLogs'
    ]);
  });

  it('reports deduplicated state transitions and persists the final disconnected status', async () => {
    let status: ConnectionStatus = connectedManualStatus;
    let listener: ((next: ConnectionStatus) => void) | undefined;
    let resolveSignal: ((signal: NodeJS.Signals) => void) | undefined;
    const states: string[] = [];
    const host = createHeadlessHost({
      connect: async () => {},
      subscribeStatus: (next) => { listener = next; return () => { listener = undefined; }; },
      getStatus: () => status,
      waitForSignal: () => new Promise((resolve) => { resolveSignal = resolve; }),
      shutdownConnection: async () => { status = disconnectedStatus; listener?.(status); },
      terminateProcesses: async () => {},
      closePlugins: async () => {},
      flushRecorder: async () => {},
      flushSessions: async () => {},
      flushDurable: async () => {},
      flushLogs: async () => {},
      reportState: (state) => states.push(state)
    });

    const running = host.start({ command: 'start', dataDir });
    await new Promise<void>((resolve) => setImmediate(resolve));
    listener?.({ ...status, state: 'connecting-tunnel' });
    listener?.({ ...status, state: 'connecting-tunnel' });
    status = { ...status, state: 'connected' };
    listener?.(status);
    listener?.(status);
    resolveSignal?.('SIGTERM');
    await running;

    const snapshot = JSON.parse(await fs.readFile(path.join(dataDir, 'endpoint.json'), 'utf8'));
    expect(states).toEqual(['connected', 'connecting-tunnel', 'connected', 'disconnected']);
    expect(snapshot).toMatchObject({ state: 'disconnected', tunnel: 'manual' });
    expect(snapshot).not.toHaveProperty('localUrl');
  });

  it('writes endpoint state without credentials or private configuration', async () => {
    await writeEndpointSnapshot(dataDir, connectedManualStatus, 'manual');

    expect(JSON.parse(await fs.readFile(path.join(dataDir, 'endpoint.json'), 'utf8'))).toEqual({
      state: 'connected', connector: 'Chat On Steroids Core',
      tunnel: 'manual', localUrl: 'http://127.0.0.1:8765'
    });
  });

  it('writes only endpoint origins and never persists MCP bearer paths', async () => {
    const localToken = 'local-bearer-token';
    const publicToken = 'public-bearer-token';
    await writeEndpointSnapshot(dataDir, {
      ...connectedManualStatus,
      localUrl: `http://127.0.0.1:8765/mcp/core/${localToken}`
    }, 'manual');
    const localSnapshot = await fs.readFile(path.join(dataDir, 'endpoint.json'), 'utf8');
    expect(localSnapshot).toContain('http://127.0.0.1:8765');
    expect(localSnapshot).not.toContain(localToken);

    await writeEndpointSnapshot(dataDir, {
      ...connectedManualStatus,
      localUrl: `http://127.0.0.1:8765/mcp/core/${localToken}`,
      publicUrl: `https://example.trycloudflare.com/mcp/core/${publicToken}`
    }, 'cloudflared');
    const publicSnapshot = await fs.readFile(path.join(dataDir, 'endpoint.json'), 'utf8');
    expect(publicSnapshot).toContain('https://example.trycloudflare.com');
    expect(publicSnapshot).not.toContain(localToken);
    expect(publicSnapshot).not.toContain(publicToken);
  });

  it('keeps full Core URLs in a private endpoint file for explicit retrieval', async () => {
    const token = 'C'.repeat(43);
    const localUrl = `http://127.0.0.1:8765/mcp/core/${token}`;
    const publicUrl = `https://example.trycloudflare.com/mcp/core/${token}`;
    await writeEndpointSnapshot(dataDir, {
      ...connectedManualStatus,
      localUrl,
      publicUrl
    }, 'cloudflared');

    const publicSnapshot = await fs.readFile(path.join(dataDir, 'endpoint.json'), 'utf8');
    const privatePath = path.join(dataDir, 'endpoint-private.json');
    const privateSnapshot = JSON.parse(await fs.readFile(privatePath, 'utf8'));
    expect(publicSnapshot).not.toContain(token);
    expect(privateSnapshot).toEqual({ localUrl, publicUrl });
    expect(await readPrivateEndpoint(dataDir)).toEqual({ localUrl, publicUrl });
    if (process.platform !== 'win32') expect((await fs.stat(privatePath)).mode & 0o777).toBe(0o600);
  });

  it('clears stale endpoint snapshots before a new server startup', async () => {
    await fs.writeFile(path.join(dataDir, 'endpoint.json'), '{"state":"connected"}');
    await fs.writeFile(path.join(dataDir, 'endpoint-private.json'), '{"localUrl":"secret"}');

    await clearEndpointSnapshots(dataDir);

    await expect(fs.access(path.join(dataDir, 'endpoint.json'))).rejects.toMatchObject({ code: 'ENOENT' });
    await expect(fs.access(path.join(dataDir, 'endpoint-private.json'))).rejects.toMatchObject({ code: 'ENOENT' });
  });
});

const disconnectedStatus: ConnectionStatus = {
  state: 'disconnected', detail: '', publicUrl: null, localUrl: null,
  handshakeAt: null, lastRequestAt: null, lastToolCallAt: null, health: null, surfaces: []
};

const connectedManualStatus: ConnectionStatus = {
  ...disconnectedStatus,
  state: 'connected',
  localUrl: 'http://127.0.0.1:8765/mcp/core/core-token',
  surfaces: [{
    id: 'core', connectorName: 'Chat On Steroids Core', description: '', cardSummary: '', optional: false,
    available: true, localUrl: 'http://127.0.0.1:8765/mcp/core/core-token', publicUrl: null, tools: [], state: 'live', detail: '',
    lastRequestAt: null, lastToolCallAt: null
  }]
};
