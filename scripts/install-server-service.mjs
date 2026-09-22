import { execFileSync } from 'node:child_process';
import { randomUUID } from 'node:crypto';
import { constants as fsConstants, promises as fs } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { serverDataDirectory, validateServerLaunchPath } from './server-launch-utils.mjs';

const UNIT_NAME = 'chat-on-steroids.service';

function validateOptions(options) {
  return {
    projectDir: validateServerLaunchPath(options.projectDir, 'Project directory'),
    nodePath: validateServerLaunchPath(options.nodePath, 'Node executable'),
    dataDir: validateServerLaunchPath(options.dataDir, 'Data directory'),
    enable: options.enable === true
  };
}

export function renderServerUserService(options) {
  const { projectDir, nodePath, dataDir } = validateOptions(options);
  const entryPath = path.posix.join(projectDir, 'out', 'main', 'server.js');
  return [
    '[Unit]',
    'Description=Chat On Steroids headless MCP host',
    'Wants=network-online.target',
    'After=network-online.target',
    '',
    '[Service]',
    'Type=simple',
    `WorkingDirectory=${projectDir}`,
    `ExecStart=${nodePath} ${entryPath} start --data-dir ${dataDir}`,
    'Restart=on-failure',
    'RestartSec=5',
    'KillSignal=SIGTERM',
    'TimeoutStopSec=35',
    'UMask=0077',
    'NoNewPrivileges=true',
    'PrivateTmp=true',
    '',
    '[Install]',
    'WantedBy=default.target',
    ''
  ].join('\n');
}

export function parseServiceArgs(argv, env = process.env) {
  const defaults = {
    projectDir: process.cwd().replaceAll('\\', '/'),
    nodePath: process.execPath.replaceAll('\\', '/'),
    enable: false
  };
  const keys = new Map([
    ['--project-dir', 'projectDir'],
    ['--node', 'nodePath'],
    ['--data-dir', 'dataDir']
  ]);
  const values = new Map();
  let enable = false;
  for (let index = 0; index < argv.length; index += 1) {
    const option = argv[index];
    if (option === '--enable') {
      if (enable) throw new Error('--enable may be provided only once');
      enable = true;
      continue;
    }
    const key = keys.get(option);
    if (!key) throw new Error(`Unknown option: ${option}`);
    const value = argv[index + 1];
    if (!value || value.startsWith('--')) throw new Error(`${option} requires a value`);
    if (values.has(key)) throw new Error(`${option} may be provided only once`);
    values.set(key, value);
    index += 1;
  }
  return validateOptions({
    projectDir: values.get('projectDir') ?? defaults.projectDir,
    nodePath: values.get('nodePath') ?? defaults.nodePath,
    dataDir: values.get('dataDir') ?? serverDataDirectory(env),
    enable
  });
}

export async function installServerUserService(options, dependencies = {}) {
  const validated = validateOptions(options);
  const unit = renderServerUserService(validated);
  const homeDirectory = dependencies.homeDirectory ?? os.homedir();
  const execute = dependencies.execFileSync ?? execFileSync;
  const runSystemctl = (args) => execute('systemctl', ['--user', ...args], { stdio: 'inherit' });
  const unitDirectory = path.join(homeDirectory, '.config', 'systemd', 'user');
  const unitPath = path.join(unitDirectory, UNIT_NAME);
  const temporaryPath = path.join(unitDirectory, `.${UNIT_NAME}.${process.pid}.${randomUUID()}.tmp`);

  await fs.mkdir(unitDirectory, { recursive: true, mode: 0o700 });
  try {
    await fs.writeFile(temporaryPath, unit, { encoding: 'utf8', flag: 'wx', mode: 0o600 });
    await fs.rename(temporaryPath, unitPath);
  } catch (error) {
    await fs.rm(temporaryPath, { force: true }).catch(() => undefined);
    throw error;
  }

  runSystemctl(['daemon-reload']);
  if (validated.enable) runSystemctl(['enable', '--now', UNIT_NAME]);
  return { unitPath, enabled: validated.enable };
}

async function main(argv = process.argv.slice(2)) {
  if (process.platform !== 'linux') throw new Error('The user service installer requires Linux and systemd');
  const options = parseServiceArgs(argv);
  const entryPath = path.join(options.projectDir, 'out', 'main', 'server.js');
  await fs.access(options.nodePath, fsConstants.X_OK);
  await fs.access(entryPath, fsConstants.R_OK);
  const result = await installServerUserService(options);
  process.stdout.write(`Installed ${UNIT_NAME} at ${result.unitPath}\n`);
  process.stdout.write(result.enabled ? 'Enabled and started the user service\n' : 'Run systemctl --user enable --now chat-on-steroids.service to start it\n');
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  void main().catch((error) => {
    process.stderr.write(`CoS server service error: ${error instanceof Error ? error.message : String(error)}\n`);
    process.exitCode = 1;
  });
}
