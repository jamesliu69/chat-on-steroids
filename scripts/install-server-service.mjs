#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { mkdir, rename, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const entry = path.join(root, 'out', 'main', 'server.js');
const defaultDataDir = path.join(os.homedir(), '.config', 'chat-on-steroids-server');
const unitDir = path.join(os.homedir(), '.config', 'systemd', 'user');
const unitPath = path.join(unitDir, 'chat-on-steroids-server.service');

function fail(message) {
  process.stderr.write(`${message}\n`);
  process.exit(1);
}

function parseArgs(argv) {
  let dataDir = defaultDataDir;
  let printOnly = false;
  let enableNow = false;
  for (let index = 0; index < argv.length; index += 1) {
    const option = argv[index];
    if (option === '--data-dir') {
      const value = argv[++index];
      if (!value || value.startsWith('--')) fail('--data-dir requires a path');
      dataDir = path.resolve(value);
    } else if (option === '--print') {
      printOnly = true;
    } else if (option === '--enable-now') {
      enableNow = true;
    } else {
      fail(`Unknown option: ${option}`);
    }
  }
  return { dataDir, printOnly, enableNow };
}

function serviceText(dataDir) {
  return `[Unit]\nDescription=Chat On Steroids headless Core server\nWants=network-online.target\nAfter=network-online.target\n\n[Service]\nType=simple\nWorkingDirectory=${root}\nExecStart=${process.execPath} ${entry} start --data-dir ${dataDir}\nRestart=on-failure\nRestartSec=5\nKillSignal=SIGTERM\nTimeoutStopSec=35\nUMask=0077\nNoNewPrivileges=true\nPrivateTmp=true\nEnvironment=NODE_ENV=production\n\n[Install]\nWantedBy=default.target\n`;
}

if (process.platform !== 'linux') fail('The headless systemd service installer requires Linux.');
if (!existsSync(entry)) fail(`Missing ${entry}. Run npm run build first.`);

const options = parseArgs(process.argv.slice(2));
const unit = serviceText(options.dataDir);
if (options.printOnly) {
  process.stdout.write(unit);
  process.exit(0);
}

await mkdir(unitDir, { recursive: true, mode: 0o700 });
const temporary = `${unitPath}.tmp`;
await writeFile(temporary, unit, { encoding: 'utf8', mode: 0o600 });
await rename(temporary, unitPath);
execFileSync('systemctl', ['--user', 'daemon-reload'], { stdio: 'inherit' });
process.stdout.write(`Installed ${unitPath}\n`);
process.stdout.write('Run `systemctl --user enable --now chat-on-steroids-server` after `server:check` reports ready.\n');

if (options.enableNow) {
  execFileSync('systemctl', ['--user', 'enable', '--now', 'chat-on-steroids-server'], { stdio: 'inherit' });
  process.stdout.write('Enabled and started chat-on-steroids-server.service\n');
}
