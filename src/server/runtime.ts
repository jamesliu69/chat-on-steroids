import os from 'node:os';
import path from 'node:path';
import { defaultConfig } from '../main/config.js';
import { RESERVED_ROOT_NAMES } from '../main/sandbox.js';
import { DESKTOP_CAPABILITIES, type Config, type TunnelKind } from '../shared/types.js';

const TUNNEL_KINDS = new Set<TunnelKind>(['openai', 'cloudflared', 'manual']);
const DEFAULT_DATA_DIRECTORY_NAME = '.config/chat-on-steroids-server';
const ROOT_NAME_PATTERN = /^[a-z0-9][a-z0-9._-]{0,31}$/;

export type ServerArgs =
  | { command: 'init'; dataDir: string; root: string; name: string; tunnel: TunnelKind; tunnelId: string }
  | { command: 'check'; dataDir: string }
  | { command: 'start'; dataDir: string };

interface InitialServerConfigOptions {
  root: string;
  name: string;
  tunnel: TunnelKind;
  tunnelId: string;
}

interface ParsedOptions {
  dataDir?: string;
  root?: string;
  name?: string;
  tunnel?: string;
  tunnelId?: string;
}

function present(value: string | undefined): string | null {
  const trimmed = value?.trim();
  return trimmed ? trimmed : null;
}

function requireAbsolutePosixPath(value: string, label: string): string {
  const trimmed = value.trim();
  if (!path.posix.isAbsolute(trimmed)) throw new Error(`${label} must be an absolute Linux path`);
  if (trimmed.includes('\0')) throw new Error(`${label} must not contain a null byte`);
  return path.posix.normalize(trimmed);
}

function requireRootName(value: string): string {
  const trimmed = value.trim();
  if (!ROOT_NAME_PATTERN.test(trimmed)) {
    throw new Error('Root name must be 1–32 lower-case letters, digits, dots, dashes, or underscores');
  }
  if (RESERVED_ROOT_NAMES.has(trimmed)) throw new Error(`Root name ${trimmed} is reserved`);
  return trimmed;
}

function requireTunnelKind(value: string): TunnelKind {
  if (!TUNNEL_KINDS.has(value as TunnelKind)) throw new Error(`Unknown tunnel kind: ${value}`);
  return value as TunnelKind;
}

function parseOptions(argv: readonly string[]): ParsedOptions {
  const options: ParsedOptions = {};
  const optionNames: Record<string, keyof ParsedOptions> = {
    '--data-dir': 'dataDir',
    '--root': 'root',
    '--name': 'name',
    '--tunnel': 'tunnel',
    '--tunnel-id': 'tunnelId'
  };
  for (let index = 0; index < argv.length; index += 1) {
    const option = argv[index]!;
    const key = optionNames[option];
    if (!key) throw new Error(`Unknown option: ${option}`);
    const value = argv[index + 1];
    if (!value || value.startsWith('--')) throw new Error(`${option} requires a value`);
    if (options[key] !== undefined) throw new Error(`${option} may be provided only once`);
    options[key] = value;
    index += 1;
  }
  return options;
}

export function defaultServerDataDir(env: NodeJS.ProcessEnv = process.env): string {
  const configured = present(env.COS_SERVER_DATA_DIR);
  if (configured) return requireAbsolutePosixPath(configured, 'COS_SERVER_DATA_DIR');
  const home = present(env.HOME) ?? os.homedir().replaceAll('\\', '/');
  return requireAbsolutePosixPath(path.posix.join(home, DEFAULT_DATA_DIRECTORY_NAME), 'Home directory');
}

export function parseServerArgs(argv: readonly string[], env: NodeJS.ProcessEnv = process.env): ServerArgs {
  const [command, ...rest] = argv;
  if (command !== 'init' && command !== 'check' && command !== 'start') {
    throw new Error('Command must be init, check, or start');
  }
  const options = parseOptions(rest);
  const dataDir = options.dataDir
    ? requireAbsolutePosixPath(options.dataDir, '--data-dir')
    : defaultServerDataDir(env);

  if (command !== 'init') {
    if (options.root || options.name || options.tunnel || options.tunnelId) {
      throw new Error('--root, --name, --tunnel, and --tunnel-id are only valid with init');
    }
    return { command, dataDir };
  }

  if (!options.root) throw new Error('init requires --root');
  const root = requireAbsolutePosixPath(options.root, '--root');
  const name = requireRootName(options.name ?? path.posix.basename(root));
  const tunnel = requireTunnelKind(options.tunnel ?? 'openai');
  const tunnelId = present(options.tunnelId) ?? present(env.COS_TUNNEL_ID) ?? '';
  return { command, dataDir, root, name, tunnel, tunnelId };
}

export function normalizeServerConfig(source: Config): Config {
  const capabilities = { ...source.capabilities };
  for (const capability of DESKTOP_CAPABILITIES) capabilities[capability] = false;
  return {
    ...source,
    capabilities,
    sessions: { ...source.sessions, record: false },
    compaction: { ...source.compaction, auto: false },
    multiAgent: { ...source.multiAgent, enabled: false, allowUnattributedCalls: true, recoverAgentTabs: false },
    goal: { ...source.goal, enabled: false, impulseMinutes: 0 },
    ui: {
      ...source.ui,
      browserOnly: true,
      finishTool: false,
      backgroundChats: false,
      autoConnect: false,
      startAtLogin: false,
      minimizeToTray: false
    }
  };
}

export function createInitialServerConfig(options: InitialServerConfigOptions): Config {
  const root = requireAbsolutePosixPath(options.root, '--root');
  const name = requireRootName(options.name);
  const tunnel = requireTunnelKind(options.tunnel);
  const source = defaultConfig('linux');
  return normalizeServerConfig({
    ...source,
    roots: [{ name, path: root }],
    tunnel: { ...source.tunnel, kind: tunnel, tunnelId: options.tunnelId.trim() }
  });
}

export function applyServerEnvironment(source: Config, env: NodeJS.ProcessEnv = process.env): Config {
  const tunnelId = present(env.COS_TUNNEL_ID);
  return normalizeServerConfig({
    ...source,
    tunnel: tunnelId ? { ...source.tunnel, tunnelId } : { ...source.tunnel }
  });
}
