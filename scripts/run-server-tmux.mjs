import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { serverDataDirectory, validateServerLaunchPath } from './server-launch-utils.mjs';

const SESSION_NAME = /^[a-z0-9][a-z0-9_-]{0,31}$/;

function validateOptions(options) {
  const session = options.session.trim();
  if (!SESSION_NAME.test(session)) throw new Error('Session name must be 1–32 lower-case letters, digits, dashes, or underscores');
  return {
    session,
    nodePath: validateServerLaunchPath(options.nodePath, 'Node executable'),
    projectDir: validateServerLaunchPath(options.projectDir, 'Project directory'),
    dataDir: validateServerLaunchPath(options.dataDir, 'Data directory'),
    restart: options.restart === true
  };
}

export function buildTmuxArgs(options) {
  const validated = validateOptions(options);
  const entryPath = path.posix.join(validated.projectDir, 'out', 'main', 'server.js');
  return [
    'new-session', '-d', '-s', validated.session, '--', validated.nodePath,
    entryPath, 'start', '--data-dir', validated.dataDir
  ];
}

export function parseTmuxArgs(argv, env = process.env) {
  const defaults = {
    session: 'cos-server',
    nodePath: process.execPath.replaceAll('\\', '/'),
    projectDir: process.cwd().replaceAll('\\', '/'),
    restart: false
  };
  const keys = new Map([
    ['--session', 'session'],
    ['--node', 'nodePath'],
    ['--project-dir', 'projectDir'],
    ['--data-dir', 'dataDir']
  ]);
  const values = new Map();
  let restart = false;
  for (let index = 0; index < argv.length; index += 1) {
    const option = argv[index];
    if (option === '--restart') {
      if (restart) throw new Error('--restart may be provided only once');
      restart = true;
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
  const session = values.get('session') ?? defaults.session;
  if (!SESSION_NAME.test(session.trim())) {
    throw new Error('Session name must be 1–32 lower-case letters, digits, dashes, or underscores');
  }
  return validateOptions({
    session,
    nodePath: values.get('nodePath') ?? defaults.nodePath,
    projectDir: values.get('projectDir') ?? defaults.projectDir,
    dataDir: values.get('dataDir') ?? serverDataDirectory(env),
    restart
  });
}

function execTmux(args, stdio) {
  return execFileSync('tmux', args, { stdio });
}

function exitStatus(error) {
  return typeof error === 'object' && error !== null && 'status' in error
    ? error.status
    : null;
}

export function runServerInTmux(options, dependencies = {}) {
  const validated = validateOptions(options);
  const execute = dependencies.execFileSync ?? execTmux;
  const target = `=${validated.session}`;
  let exists = false;
  try {
    execute('tmux', ['has-session', '-t', target], { stdio: 'ignore' });
    exists = true;
  } catch (error) {
    if (exitStatus(error) !== 1) throw error;
  }

  if (exists && !validated.restart) {
    throw new Error(`tmux session ${validated.session} already exists; pass --restart to replace it`);
  }
  if (exists) execute('tmux', ['kill-session', '-t', target], { stdio: 'inherit' });
  execute('tmux', buildTmuxArgs(validated), { stdio: 'inherit' });
  return { session: validated.session, restarted: exists };
}

function main(argv = process.argv.slice(2)) {
  if (process.platform !== 'linux') throw new Error('The tmux launcher requires Linux');
  const result = runServerInTmux(parseTmuxArgs(argv));
  process.stdout.write(`${result.restarted ? 'Restarted' : 'Started'} CoS server in tmux session ${result.session}\n`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    main();
  } catch (error) {
    process.stderr.write(`CoS server tmux error: ${error instanceof Error ? error.message : String(error)}\n`);
    process.exitCode = 1;
  }
}
