#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const defaultDataDir = path.join(os.homedir(), '.config', 'chat-on-steroids-server');

export const DEFAULT_TMUX_SESSION = 'chat-on-steroids';

/** Keep tmux invocation argument-based so paths and credentials never pass through a shell. */
export function buildTmuxArgs(options) {
  return [
    'new-session', '-d', '-s', options.session, '--',
    options.nodePath, options.entryPath, 'start', '--data-dir', options.dataDir
  ];
}

function run(file, args, options) {
  return execFileSync(file, [...args], options);
}

function missingSession(error) {
  return error && typeof error === 'object' && error.status === 1;
}

export function tmuxSessionExists(session, runner = run) {
  try {
    runner('tmux', ['has-session', '-t', session], { stdio: 'ignore' });
    return true;
  } catch (error) {
    if (missingSession(error)) return false;
    throw error;
  }
}

export function startTmuxServer(options, runner = run) {
  if (tmuxSessionExists(options.session, runner)) return false;
  runner('tmux', buildTmuxArgs(options), { stdio: 'ignore' });
  return true;
}

function requiredValue(argv, index, option) {
  const value = argv[index + 1];
  if (!value || value.startsWith('--')) throw new Error(`${option} requires a value`);
  return value;
}

function validateSession(session) {
  if (!/^[A-Za-z0-9][A-Za-z0-9._-]{0,63}$/.test(session)) {
    throw new Error('--session must be 1-64 letters, digits, dot, dash, or underscore');
  }
  return session;
}

export function parseTmuxArgs(argv) {
  let dataDir = defaultDataDir;
  let session = DEFAULT_TMUX_SESSION;
  for (let index = 0; index < argv.length; index += 1) {
    const option = argv[index];
    if (option === '--data-dir') {
      dataDir = requiredValue(argv, index, option);
      index += 1;
    } else if (option === '--session') {
      session = validateSession(requiredValue(argv, index, option));
      index += 1;
    } else {
      throw new Error(`Unknown option: ${option}`);
    }
  }
  return {
    dataDir: path.resolve(dataDir),
    session,
    nodePath: process.execPath,
    entryPath: path.join(root, 'out', 'main', 'server.js')
  };
}

function main(argv) {
  const options = parseTmuxArgs(argv);
  if (!existsSync(options.entryPath)) throw new Error(`Missing ${options.entryPath}. Run npm run build first.`);
  const started = startTmuxServer(options);
  process.stdout.write(`${started ? 'Started' : 'Already running'} tmux session ${options.session}.\n`);
  if (started) process.stdout.write(`Attach with: tmux attach -t ${options.session}\n`);
}

const invokedPath = process.argv[1] ? path.resolve(process.argv[1]) : '';
if (invokedPath === fileURLToPath(import.meta.url)) {
  try {
    main(process.argv.slice(2));
  } catch (error) {
    process.stderr.write(`Could not start tmux server: ${error instanceof Error ? error.message : String(error)}\n`);
    process.exitCode = 1;
  }
}
