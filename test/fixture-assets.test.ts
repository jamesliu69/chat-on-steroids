import fs from 'node:fs';
import http, { type RequestListener } from 'node:http';
import os from 'node:os';
import path from 'node:path';
import { createRequire } from 'node:module';
import { afterEach, beforeEach, expect, it } from 'vitest';

type Asset = { bytes: Buffer; type?: string };
type Helpers = {
  loadFixtureAssets(root: string): Map<string, Asset>;
  fixtureAssetHandler(assets: Map<string, Asset>): RequestListener;
};
const require = createRequire(import.meta.url);
function helpers(): Helpers {
  let loaded: Helpers | null = null;
  try { loaded = require('../scripts/fixtures/static-assets.cjs') as Helpers; }
  catch (error) { if ((error as NodeJS.ErrnoException).code !== 'MODULE_NOT_FOUND') throw error; }
  expect(loaded, 'fixture assets must be a snapshot, not a request-derived filesystem read').not.toBeNull();
  return loaded!;
}
let fixtureRoot: string;
let buildRoot: string;
let server: http.Server | undefined;
beforeEach(() => {
  fixtureRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'cos-fixture-assets-'));
  buildRoot = path.join(fixtureRoot, 'build');
  fs.mkdirSync(path.join(buildRoot, 'assets'), { recursive: true });
  fs.writeFileSync(path.join(buildRoot, 'index.html'), '<p>fixture</p>');
  fs.writeFileSync(path.join(buildRoot, 'assets', '中文 name.css'), 'body { color: red; }');
  fs.writeFileSync(path.join(fixtureRoot, 'external.txt'), 'external fixture secret');
});
afterEach(async () => {
  if (server) {
    server.closeIdleConnections();
    await new Promise<void>((resolve, reject) => server!.close(error => error ? reject(error) : resolve()));
    server = undefined;
  }
  const owned = path.resolve(fixtureRoot);
  if (path.dirname(owned) !== path.resolve(os.tmpdir()) || !path.basename(owned).startsWith('cos-fixture-assets-')) {
    throw new Error('Refuse cleanup outside the owned fixture directory');
  }
  fs.rmSync(owned, { recursive: true, force: true });
});
async function serve(assets: Map<string, Asset>): Promise<string> {
  server = http.createServer(helpers().fixtureAssetHandler(assets));
  await new Promise<void>(resolve => server!.listen(0, '127.0.0.1', resolve));
  return `http://127.0.0.1:${(server.address() as { port: number }).port}`;
}
it('serves only the trusted startup snapshot even after source files disappear', async () => {
  const assets = helpers().loadFixtureAssets(buildRoot);
  fs.unlinkSync(path.join(buildRoot, 'index.html'));
  fs.unlinkSync(path.join(buildRoot, 'assets', '中文 name.css'));
  const base = await serve(assets);
  const page = await fetch(`${base}/?lang=ja`);
  expect(page.status).toBe(200);
  expect(page.headers.get('content-type')).toBe('text/html');
  expect(await page.text()).toBe('<p>fixture</p>');
  const css = await fetch(`${base}/assets/${encodeURIComponent('中文 name.css')}?cache=1`);
  expect(css.status).toBe(200);
  expect(css.headers.get('content-type')).toBe('text/css');
  expect(await css.text()).toBe('body { color: red; }');
});
it.each(['/../external.txt', '/%2e%2e/external.txt', '/..%2fexternal.txt', '/..%5cexternal.txt',
  '/C:/external.txt', '/%5c%5cserver%5cshare%5cexternal.txt', '/assets/', '/absent.js'])
('never reads outside the startup map for %s', async route => {
  const base = await serve(helpers().loadFixtureAssets(buildRoot));
  const response = await fetch(`${base}${route}`);
  expect(response.status).toBe(404);
  expect(await response.text()).not.toContain('external fixture secret');
});
it('rejects a linked build root before any listener starts', () => {
  const linked = path.join(fixtureRoot, 'linked-root');
  fs.symlinkSync(buildRoot, linked, 'junction');
  expect(() => helpers().loadFixtureAssets(linked)).toThrow(/linked|directory/i);
});
it('rejects a junction inside the trusted build tree', () => {
  fs.symlinkSync(fixtureRoot, path.join(buildRoot, 'linked'), 'junction');
  expect(() => helpers().loadFixtureAssets(buildRoot)).toThrow(/linked/i);
});
