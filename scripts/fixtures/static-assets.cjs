// Snapshot a trusted local build before the fixture listens. HTTP requests can select only these
// bytes; they never construct a filesystem path. This is a startup snapshot, not an OS race fence.
const fs = require('node:fs');
const path = require('node:path');

const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
  '.woff2': 'font/woff2', '.webp': 'image/webp' };
function loadFixtureAssets(root) {
  const assets = new Map();
  const walk = (directory, parts) => {
    const stat = fs.lstatSync(directory);
    if (stat.isSymbolicLink()) throw new Error('Linked fixture directories are not allowed');
    if (!stat.isDirectory()) throw new Error('Fixture root must be a directory');
    for (const name of fs.readdirSync(directory)) {
      const file = path.join(directory, name), entry = fs.lstatSync(file), segments = [...parts, name];
      if (entry.isSymbolicLink()) throw new Error('Linked fixture assets are not allowed');
      if (entry.isDirectory()) { walk(file, segments); continue; }
      if (!entry.isFile()) throw new Error('Fixture assets must be regular files');
      assets.set('/' + segments.map(encodeURIComponent).join('/'), {
        bytes: fs.readFileSync(file), type: types[path.extname(name)]
      });
    }
  };
  walk(root, []);
  return assets;
}
function fixtureAssetHandler(assets) {
  return (req, res) => {
    let pathname;
    try { pathname = new URL(req.url, 'http://127.0.0.1').pathname; }
    catch { res.writeHead(400); res.end(); return; }
    const asset = assets.get(pathname === '/' ? '/index.html' : pathname);
    if (!asset) { res.writeHead(404); res.end(); return; }
    if (asset.type) res.setHeader('Content-Type', asset.type);
    res.end(asset.bytes);
  };
}
module.exports = { loadFixtureAssets, fixtureAssetHandler };
