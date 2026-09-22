import { describe, expect, it } from 'vitest';
import { DESKTOP_CAPABILITIES } from '../src/shared/types.js';
import { getConfig, initConfigPath, loadConfig, saveConfig, setRuntimeConfigOverride } from '../src/main/config.js';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import {
  applyServerEnvironment,
  createInitialServerConfig,
  defaultServerDataDir,
  normalizeServerConfig,
  parseServerArgs
} from '../src/server/runtime.js';
import { makeTempDir, removeTempDir } from './helpers.js';

describe('headless server runtime', () => {
  it('creates a Core-capable config while disabling browser-dependent features', () => {
    const config = createInitialServerConfig({
      root: '/srv/repos', name: 'repos', tunnel: 'manual', tunnelId: ''
    });

    expect(config.roots).toEqual([{ name: 'repos', path: '/srv/repos' }]);
    expect(config.capabilities.command).toBe(true);
    expect(DESKTOP_CAPABILITIES.every((capability) => config.capabilities[capability] === false)).toBe(true);
    expect(config.sessions.record).toBe(false);
    expect(config.compaction.auto).toBe(false);
    expect(config.multiAgent).toMatchObject({ enabled: false, allowUnattributedCalls: true, recoverAgentTabs: false });
    expect(config.goal.enabled).toBe(false);
    expect(config.ui).toMatchObject({ browserOnly: true, finishTool: false, backgroundChats: false, autoConnect: false });
  });

  it('normalizes a desktop configuration without changing roots or Core permissions', () => {
    const source = createInitialServerConfig({
      root: '/srv/repos', name: 'repos', tunnel: 'manual', tunnelId: ''
    });
    const desktopLike = {
      ...source,
      capabilities: { ...source.capabilities, screen: true, control: true },
      sessions: { ...source.sessions, record: true },
      compaction: { ...source.compaction, auto: true },
      multiAgent: { ...source.multiAgent, enabled: true, allowUnattributedCalls: false, recoverAgentTabs: true },
      goal: { ...source.goal, enabled: true },
      ui: { ...source.ui, browserOnly: false, finishTool: true, backgroundChats: true, autoConnect: true }
    };

    const normalized = normalizeServerConfig(desktopLike);

    expect(normalized).not.toBe(desktopLike);
    expect(normalized.roots).toEqual([{ name: 'repos', path: '/srv/repos' }]);
    expect(normalized.capabilities.command).toBe(true);
    expect(DESKTOP_CAPABILITIES.every((capability) => normalized.capabilities[capability] === false)).toBe(true);
    expect(normalized.sessions.record).toBe(false);
    expect(normalized.compaction.auto).toBe(false);
    expect(normalized.multiAgent).toMatchObject({ enabled: false, allowUnattributedCalls: true, recoverAgentTabs: false });
    expect(normalized.goal.enabled).toBe(false);
    expect(normalized.ui).toMatchObject({ browserOnly: true, finishTool: false, backgroundChats: false, autoConnect: false });
  });

  it('uses bounded command-specific options and non-persistent environment overrides', () => {
    const env = {
      HOME: '/home/pi',
      COS_SERVER_DATA_DIR: '/var/lib/chat-on-steroids-server',
      COS_TUNNEL_ID: 'tunnel-from-env'
    };

    expect(defaultServerDataDir(env)).toBe('/var/lib/chat-on-steroids-server');
    expect(parseServerArgs(['init', '--root', '/srv/repos', '--name', 'repos'], env)).toEqual({
      command: 'init',
      dataDir: '/var/lib/chat-on-steroids-server',
      root: '/srv/repos',
      name: 'repos',
      tunnel: 'openai',
      tunnelId: 'tunnel-from-env'
    });
    expect(parseServerArgs(['check', '--data-dir', '/state/cos'], env)).toEqual({ command: 'check', dataDir: '/state/cos' });
    expect(parseServerArgs(['endpoint', '--data-dir', '/state/cos'], env)).toEqual({ command: 'endpoint', dataDir: '/state/cos' });

    const config = createInitialServerConfig({ root: '/srv/repos', name: 'repos', tunnel: 'manual', tunnelId: '' });
    expect(applyServerEnvironment(config, env).tunnel.tunnelId).toBe('tunnel-from-env');
    expect(config.tunnel.tunnelId).toBe('');
  });

  it('publishes the environment tunnel override to config consumers without persisting it', async () => {
    const directory = await makeTempDir('cos-server-runtime-config-');
    try {
      initConfigPath(directory);
      setRuntimeConfigOverride(null);
      const loaded = await loadConfig();
      await saveConfig({
        ...loaded,
        tunnel: { ...loaded.tunnel, kind: 'openai', tunnelId: 'stored-tunnel' }
      });

      setRuntimeConfigOverride(applyServerEnvironment(getConfig(), { COS_TUNNEL_ID: 'environment-tunnel' }));

      expect(getConfig().tunnel.tunnelId).toBe('environment-tunnel');
      const persisted = JSON.parse(await readFile(path.join(directory, 'config.json'), 'utf8'));
      expect(persisted.tunnel.tunnelId).toBe('stored-tunnel');
    } finally {
      setRuntimeConfigOverride(null);
      await removeTempDir(directory);
    }
  });

  it('keeps headless conversation recording disabled through normalize, save, load, and runtime override', async () => {
    const directory = await makeTempDir('cos-server-runtime-recording-');
    try {
      initConfigPath(directory, { preserveSessionRecordingOff: true });
      setRuntimeConfigOverride(null);
      const loaded = await loadConfig();
      const normalized = normalizeServerConfig(loaded);
      expect(normalized.sessions.record).toBe(false);

      const saved = await saveConfig(normalized);
      expect(saved.sessions.record).toBe(false);
      expect(JSON.parse(await readFile(path.join(directory, 'config.json'), 'utf8')).sessions.record).toBe(false);

      const reloaded = await loadConfig();
      expect(reloaded.sessions.record).toBe(false);
      setRuntimeConfigOverride(applyServerEnvironment(reloaded, { COS_TUNNEL_ID: 'environment-tunnel' }));
      expect(getConfig().sessions.record).toBe(false);
    } finally {
      setRuntimeConfigOverride(null);
      initConfigPath(directory);
      await removeTempDir(directory);
    }
  });

  it('rejects relative roots, reserved names, unknown values, and inappropriate options', () => {
    const env = { HOME: '/home/pi' };
    expect(() => parseServerArgs(['init', '--root', 'relative'], env)).toThrow(/absolute/i);
    expect(() => parseServerArgs(['init', '--root', '/srv/repos', '--name', 'skills'], env)).toThrow(/reserved/i);
    expect(() => parseServerArgs(['init', '--root', '/srv/repos', '--tunnel', 'unknown'], env)).toThrow(/tunnel/i);
    expect(() => parseServerArgs(['start', '--root', '/srv/repos'], env)).toThrow(/only valid with init/i);
    expect(() => parseServerArgs(['check', '--unknown'], env)).toThrow(/unknown option/i);
  });
});
