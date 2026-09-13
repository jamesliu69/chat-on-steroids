import { describe, expect, it } from 'vitest';
import { defaultConfig } from '../src/main/config.js';
import {
  applyServerEnvironment,
  createInitialServerConfig,
  normalizeServerConfig,
  parseServerArgs
} from '../src/server/runtime.js';

describe('headless server runtime', () => {
  it('parses init options without accepting a relative approved root', () => {
    expect(parseServerArgs(['init', '--root', '/home/pi/github', '--name', 'repos', '--tunnel', 'manual'])).toEqual({
      command: 'init',
      dataDir: expect.any(String),
      root: '/home/pi/github',
      name: 'repos',
      tunnel: 'manual',
      tunnelId: ''
    });
    expect(() => parseServerArgs(['init', '--root', 'relative'])).toThrow(/absolute/i);
  });

  it('uses COS_TUNNEL_ID from the environment and keeps explicit CLI values authoritative', () => {
    const env = { COS_TUNNEL_ID: 'tunnel_6aa5ebd7427c8191922894997adf9fdf' };
    expect(parseServerArgs(['init', '--root', '/home/pi/github'], env)).toMatchObject({
      tunnel: 'openai',
      tunnelId: 'tunnel_6aa5ebd7427c8191922894997adf9fdf'
    });
    expect(
      parseServerArgs(
        ['init', '--root', '/home/pi/github', '--tunnel', 'openai', '--tunnel-id', 'tunnel_11111111111111111111111111111111'],
        env
      )
    ).toMatchObject({
      tunnel: 'openai',
      tunnelId: 'tunnel_11111111111111111111111111111111'
    });
  });

  it('applies COS_TUNNEL_ID to a loaded server config without changing Core permissions', () => {
    const source = createInitialServerConfig({ root: '/home/pi/github', name: 'repos', tunnel: 'manual', tunnelId: '' });
    const applied = applyServerEnvironment(source, {
      COS_TUNNEL_ID: 'tunnel_6aa5ebd7427c8191922894997adf9fdf'
    });
    expect(applied.tunnel.kind).toBe('openai');
    expect(applied.tunnel.tunnelId).toBe('tunnel_6aa5ebd7427c8191922894997adf9fdf');
    expect(applied.roots).toEqual(source.roots);
    expect(applied.capabilities.command).toBe(source.capabilities.command);
  });

  it('creates a Core-capable config and disables browser-only features', () => {
    const config = createInitialServerConfig({ root: '/home/pi/github', name: 'repos', tunnel: 'manual', tunnelId: '' });
    expect(config.roots).toEqual([{ name: 'repos', path: '/home/pi/github' }]);
    expect(config.capabilities.command).toBe(true);
    expect(config.capabilities.edit).toBe(true);
    expect(config.capabilities.screen).toBe(false);
    expect(config.sessions.record).toBe(false);
    expect(config.multiAgent.enabled).toBe(false);
    expect(config.multiAgent.allowUnattributedCalls).toBe(true);
    expect(config.goal.enabled).toBe(false);
    expect(config.ui.finishTool).toBe(false);
    expect(config.ui.autoConnect).toBe(false);
  });

  it('normalizes a desktop-oriented config to safe server semantics without changing roots or Core permissions', () => {
    const source = defaultConfig('linux');
    source.roots = [{ name: 'repos', path: '/srv/repos' }];
    source.sessions.record = true;
    source.multiAgent.enabled = true;
    source.multiAgent.allowUnattributedCalls = false;
    source.goal.enabled = true;
    source.ui.finishTool = true;

    const normalized = normalizeServerConfig(source);
    expect(normalized.roots).toEqual(source.roots);
    expect(normalized.capabilities.command).toBe(source.capabilities.command);
    expect(normalized.sessions.record).toBe(false);
    expect(normalized.multiAgent.enabled).toBe(false);
    expect(normalized.multiAgent.allowUnattributedCalls).toBe(true);
    expect(normalized.goal.enabled).toBe(false);
    expect(normalized.ui.finishTool).toBe(false);
  });
});
