import os from 'node:os';
import path from 'node:path';
import { defaultConfig } from '../main/config.js';
import { RESERVED_ROOT_NAMES } from '../main/sandbox.js';
import { DESKTOP_CAPABILITIES, type Config, type TunnelKind } from '../shared/types.js';

export type ServerCommand = 'init' | 'start' | 'check';

export interface ServerArgs {
  command: ServerCommand;
  dataDir: string;
  root?: string;
  name?: string;
  tunnel?: TunnelKind;
  tunnelId?: string;
}

export interface ServerInitOptions {
  root: string;
  name: string;
  tunnel: TunnelKind;
  tunnelId: string;
}

const ROOT_NAME = /^[a-z0-9][a-z0-9._-]*$/;
const DEFAULT_ENV_FILE = path.resolve(__dirname, '..', '..', '.env');

/** Load repository-local server settings without requiring a dotenv dependency. */
export function loadServerEnvFile(file = DEFAULT_ENV_FILE): void {
  try {
    process.loadEnvFile(file);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== 'ENOENT') throw error;
  }
}

export function defaultServerDataDir(env: NodeJS.ProcessEnv = process.env): string {
  const configured = env.COS_SERVER_DATA_DIR?.trim();
  return path.resolve(configured || path.join(os.homedir(), '.config', 'chat-on-steroids-server'));
}

function requireValue(argv: readonly string[], index: number, option: string): string {
  const value = argv[index + 1];
  if (!value || value.startsWith('--')) throw new Error(`${option} requires a value`);
  return value;
}

function validateRoot(root: string): string {
  if (!path.isAbsolute(root)) throw new Error('Approved root must be an absolute path');
  return path.normalize(root);
}

function validateRootName(name: string): string {
  if (!ROOT_NAME.test(name) || name.length > 32 || RESERVED_ROOT_NAMES.has(name)) {
    throw new Error('Root name must be 1-32 lowercase letters, digits, dot, dash, or underscore and must not be reserved');
  }
  return name;
}

function validateTunnel(value: string): TunnelKind {
  if (value !== 'manual' && value !== 'cloudflared' && value !== 'openai') {
    throw new Error('Tunnel must be one of: manual, cloudflared, openai');
  }
  return value;
}

export function parseServerArgs(argv: readonly string[], env: NodeJS.ProcessEnv = process.env): ServerArgs {
  const command = argv[0] as ServerCommand | undefined;
  if (command !== 'init' && command !== 'start' && command !== 'check') {
    throw new Error('Usage: server <init|start|check> [options]');
  }

  let dataDir = defaultServerDataDir(env);
  let root: string | undefined;
  let name = 'repos';
  const environmentTunnelId = env.COS_TUNNEL_ID?.trim() ?? '';
  let tunnel: TunnelKind = environmentTunnelId ? 'openai' : 'manual';
  let tunnelId = environmentTunnelId;

  for (let index = 1; index < argv.length; index += 1) {
    const option = argv[index]!;
    switch (option) {
      case '--data-dir':
        dataDir = path.resolve(requireValue(argv, index, option));
        index += 1;
        break;
      case '--root':
        root = validateRoot(requireValue(argv, index, option));
        index += 1;
        break;
      case '--name':
        name = validateRootName(requireValue(argv, index, option));
        index += 1;
        break;
      case '--tunnel':
        tunnel = validateTunnel(requireValue(argv, index, option));
        index += 1;
        break;
      case '--tunnel-id':
        tunnelId = requireValue(argv, index, option).trim();
        index += 1;
        break;
      default:
        throw new Error(`Unknown server option: ${option}`);
    }
  }

  if (command === 'init') {
    if (!root) throw new Error('init requires --root with an absolute path');
    return { command, dataDir, root, name, tunnel, tunnelId };
  }
  if (root !== undefined) throw new Error('--root is only valid with init');
  return { command, dataDir };
}

/** Machine-local environment values override persisted transport settings without rewriting config.json. */
export function applyServerEnvironment(source: Config, env: NodeJS.ProcessEnv = process.env): Config {
  const tunnelId = env.COS_TUNNEL_ID?.trim() ?? '';
  if (!tunnelId) return source;
  return {
    ...source,
    tunnel: {
      ...source.tunnel,
      kind: 'openai',
      tunnelId
    }
  };
}

/** Keep all Core choices but remove features that require an Electron window or browser companion. */
export function normalizeServerConfig(source: Config): Config {
  const capabilities = { ...source.capabilities };
  for (const capability of DESKTOP_CAPABILITIES) capabilities[capability] = false;
  return {
    ...source,
    capabilities,
    ui: {
      ...source.ui,
      autoConnect: false,
      startAtLogin: false,
      minimizeToTray: false,
      backgroundChats: false,
      browserOnly: true,
      finishTool: false
    },
    sessions: { ...source.sessions, record: false },
    compaction: { ...source.compaction, auto: false },
    multiAgent: {
      ...source.multiAgent,
      enabled: false,
      allowUnattributedCalls: true,
      recoverAgentTabs: false
    },
    goal: {
      ...source.goal,
      enabled: false,
      impulseMinutes: 0
    }
  };
}

export function createInitialServerConfig(options: ServerInitOptions): Config {
  const config = defaultConfig('linux');
  config.roots = [{ name: validateRootName(options.name), path: validateRoot(options.root) }];
  config.tunnel = {
    ...config.tunnel,
    kind: options.tunnel,
    tunnelId: options.tunnelId,
    desktopTunnelId: '',
    pluginsTunnelId: ''
  };
  return normalizeServerConfig(config);
}
