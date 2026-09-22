import { promises as fs } from 'node:fs';
import path from 'node:path';
import { connect, getStatus, onStatusChange, shutdownConnection } from '../main/connection.js';
import { initConfigPath, loadConfig, saveConfig, setRuntimeConfigOverride } from '../main/config.js';
import { unifiedExecManager } from '../main/codex/manager.js';
import { flushDurable, initDurableStore } from '../main/durable.js';
import { flushLogBeforeExit, initLogFile } from '../main/logger.js';
import { pluginManager } from '../main/plugins/manager.js';
import { locateRipgrep } from '../main/ripgrep.js';
import { configureSecretProvider, getSecret, initSecretsPath } from '../main/secrets.js';
import { flushRecorder } from '../main/session/recorder.js';
import { flushSessions, initSessionStore } from '../main/session/store.js';
import { locateBinary } from '../main/tunnel/locate.js';
import { TUNNEL_ID_PATTERN } from '../main/tunnel/index.js';
import type { Config } from '../shared/types.js';
import { clearEndpointSnapshots, createHeadlessHost, readPrivateEndpoint } from './host.js';
import { createSignalLatch } from './signals.js';
import {
  applyServerEnvironment,
  createInitialServerConfig,
  normalizeServerConfig,
  parseServerArgs,
  type ServerArgs
} from './runtime.js';
import { createServerSecretProvider } from './secrets.js';

let initializedDataDir: string | null = null;

function output(message: string): void {
  process.stdout.write(`${message}\n`);
}

function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

async function initializeRuntime(dataDir: string): Promise<void> {
  if (initializedDataDir === dataDir) return;
  if (initializedDataDir !== null) throw new Error('Server runtime cannot switch data directories in one process');
  await fs.mkdir(dataDir, { recursive: true, mode: 0o700 });
  initLogFile(path.join(dataDir, 'server.log'));
  initConfigPath(dataDir, { preserveSessionRecordingOff: true });
  initSecretsPath(dataDir);
  initSessionStore(dataDir);
  initDurableStore(dataDir);
  configureSecretProvider(createServerSecretProvider());
  initializedDataDir = dataDir;
}

async function loadServerConfig(dataDir: string, persist: boolean): Promise<Config> {
  await initializeRuntime(dataDir);
  const loaded = await loadConfig();
  const normalized = normalizeServerConfig(loaded);
  if (persist && JSON.stringify(loaded) !== JSON.stringify(normalized)) await saveConfig(normalized);
  const effective = applyServerEnvironment(normalized);
  if (persist) setRuntimeConfigOverride(effective);
  return effective;
}

async function validate(config: Config): Promise<string[]> {
  const failures: string[] = [];
  const serverRoot = process.cwd();
  if (process.platform !== 'linux') failures.push(`Unsupported OS: ${process.platform}; headless server requires Linux`);
  if (process.arch !== 'arm64') failures.push(`Unsupported architecture: ${process.arch}; headless server requires ARM64`);
  if (config.roots.length === 0) failures.push('No approved roots configured; run server init --root <absolute-path>');
  for (const root of config.roots) {
    if (!(await fs.stat(root.path).catch(() => null))?.isDirectory()) failures.push(`Approved root is unavailable: ${root.path}`);
  }
  if (!locateRipgrep(serverRoot)) failures.push('ripgrep is unavailable; run npm run rg from the CoS source tree');
  if (config.tunnel.kind === 'openai') {
    if (!TUNNEL_ID_PATTERN.test(config.tunnel.tunnelId)) failures.push('OpenAI tunnel ID is missing or invalid');
    if (!(await getSecret('openaiApiKey'))) failures.push('OpenAI tunnel API key is unavailable from systemd credentials or OPENAI_API_KEY');
    if (!locateBinary('tunnel-client', config.tunnel.binaryPath, serverRoot)) failures.push('tunnel-client is unavailable; run npm run tunnel');
  } else if (
    config.tunnel.kind === 'cloudflared' &&
    !locateBinary('cloudflared', config.tunnel.binaryPath, serverRoot)
  ) {
    failures.push('cloudflared is unavailable; configure a valid binary path');
  }
  return failures;
}

async function runInit(args: Extract<ServerArgs, { command: 'init' }>): Promise<void> {
  if (!(await fs.stat(args.root).catch(() => null))?.isDirectory()) throw new Error(`Approved root is not an existing directory: ${args.root}`);
  await initializeRuntime(args.dataDir);
  await saveConfig(createInitialServerConfig(args));
  output(`Initialized CoS server configuration in ${args.dataDir}`);
}

async function runCheck(args: Extract<ServerArgs, { command: 'check' }>): Promise<void> {
  const config = await loadServerConfig(args.dataDir, false);
  const failures = await validate(config);
  output(`OS: ${process.platform}/${process.arch}`);
  output(`Tunnel mode: ${config.tunnel.kind}`);
  if (failures.length > 0) throw new Error(failures.join('; '));
  output('Server check: ready');
}

async function runEndpoint(args: Extract<ServerArgs, { command: 'endpoint' }>): Promise<void> {
  const endpoint = await readPrivateEndpoint(args.dataDir);
  if (!endpoint) throw new Error(`No active Core endpoint is available in ${args.dataDir}; start the server first`);
  output(JSON.stringify(endpoint, null, 2));
}

async function runStart(args: Extract<ServerArgs, { command: 'start' }>): Promise<void> {
  const signals = createSignalLatch();
  let tunnelKind: Config['tunnel']['kind'] = 'manual';
  const host = createHeadlessHost({
    connect: () => connect({ planTools: true }),
    getStatus,
    subscribeStatus: onStatusChange,
    waitForSignal: signals.wait,
    shutdownConnection,
    terminateProcesses: () => unifiedExecManager.terminateAllProcesses(),
    closePlugins: () => pluginManager.close(),
    flushRecorder,
    flushSessions,
    flushDurable,
    flushLogs: () => flushLogBeforeExit(),
    tunnelKind: () => tunnelKind,
    reportState: (state) => output(`Connection state: ${state}`)
  });
  try {
    await initializeRuntime(args.dataDir);
    await clearEndpointSnapshots(args.dataDir);
    const config = await loadServerConfig(args.dataDir, true);
    if (signals.requested()) { await host.shutdown(); return; }
    const failures = await validate(config);
    if (signals.requested()) { await host.shutdown(); return; }
    if (failures.length > 0) throw new Error(failures.join('; '));
    tunnelKind = config.tunnel.kind;
    await pluginManager.initialize(args.dataDir);
    if (signals.requested()) { await host.shutdown(); return; }
    await host.start(args);
  } catch (error) {
    if (signals.requested()) { await host.shutdown(); return; }
    throw error;
  } finally {
    signals.dispose();
  }
}

export async function main(argv: readonly string[] = process.argv.slice(2)): Promise<void> {
  const args = parseServerArgs(argv);
  if (args.command === 'init') return runInit(args);
  if (args.command === 'check') return runCheck(args);
  if (args.command === 'endpoint') return runEndpoint(args);
  return runStart(args);
}

void main().catch(async (error) => {
  process.stderr.write(`CoS server error: ${errorMessage(error)}\n`);
  await flushLogBeforeExit().catch(() => undefined);
  process.exitCode = 1;
});
