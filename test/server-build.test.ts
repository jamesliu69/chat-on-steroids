import { chmod, mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises';
import { readFileSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import { locateRipgrep } from '../src/main/ripgrep.js';
import {
  locateBinary,
  resetTunnelLocatorCacheForTests
} from '../src/main/tunnel/locate.js';

const packageJson = JSON.parse(readFileSync('package.json', 'utf8')) as { scripts: Record<string, string> };
const roots: string[] = [];
const originalPath = process.env.PATH;
const originalResourcesPath = (process as NodeJS.Process & { resourcesPath?: string }).resourcesPath;

async function makeExecutable(file: string): Promise<void> {
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, 'fixture');
  if (process.platform !== 'win32') await chmod(file, 0o755);
}

async function makeResourceFixture(): Promise<{ serverRoot: string; rg: string; tunnel: string }> {
  const serverRoot = await mkdtemp(path.join(os.tmpdir(), 'cos-server-root-'));
  const pathRoot = await mkdtemp(path.join(os.tmpdir(), 'cos-server-path-'));
  const packagedRoot = await mkdtemp(path.join(os.tmpdir(), 'cos-packaged-resources-'));
  roots.push(serverRoot, pathRoot, packagedRoot);
  Object.defineProperty(process, 'resourcesPath', {
    configurable: true,
    writable: true,
    value: packagedRoot
  });
  process.env.PATH = pathRoot;

  const suffix = process.platform === 'win32' ? '.exe' : '';
  const rg = path.join(serverRoot, 'resources', 'rg', `rg${suffix}`);
  const tunnel = path.join(serverRoot, 'resources', 'tunnel', `tunnel-client${suffix}`);
  await Promise.all([
    makeExecutable(rg),
    makeExecutable(tunnel),
    makeExecutable(path.join(pathRoot, `rg${suffix}`)),
    makeExecutable(path.join(pathRoot, `tunnel-client${suffix}`))
  ]);
  resetTunnelLocatorCacheForTests();
  return { serverRoot, rg, tunnel };
}

afterEach(async () => {
  process.env.PATH = originalPath;
  Object.defineProperty(process, 'resourcesPath', {
    configurable: true,
    writable: true,
    value: originalResourcesPath
  });
  resetTunnelLocatorCacheForTests();
  await Promise.all(roots.splice(0).map((root) => rm(root, { recursive: true, force: true })));
});

describe('headless server build contract', () => {
  it('declares a second server output and Node scripts', () => {
    expect(readFileSync('electron.vite.config.ts', 'utf8')).toContain(
      "server: resolve(__dirname, 'src/server/index.ts')"
    );
    expect(packageJson.scripts['server:check']).toBe('node out/main/server.js check');
    expect(packageJson.scripts.server).toBe('node out/main/server.js start');
    expect(packageJson.scripts['server:service:install']).toBe('node scripts/install-server-service.mjs');
    expect(packageJson.scripts['server:tmux']).toBe('node scripts/run-server-tmux.mjs');
  });

  it('locates ripgrep from the server working directory before PATH', async () => {
    const { serverRoot, rg } = await makeResourceFixture();
    expect(locateRipgrep(serverRoot)).toBe(rg);
  });

  it('locates the tunnel client from the server working directory before PATH', async () => {
    const { serverRoot, tunnel } = await makeResourceFixture();
    expect(locateBinary('tunnel-client', undefined, serverRoot)).toBe(tunnel);
  });
});
