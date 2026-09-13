import { describe, expect, it } from 'vitest';
import {
  buildTmuxArgs,
  parseTmuxArgs,
  startTmuxServer
} from '../scripts/run-server-tmux.mjs';

const options = {
  dataDir: '/home/pi/.config/chat-on-steroids-server',
  session: 'chat-on-steroids',
  nodePath: '/usr/bin/node',
  entryPath: '/srv/chat-on-steroids/out/main/server.js'
};

describe('headless server tmux launcher', () => {
  it('builds a detached tmux command for the headless server', () => {
    expect(buildTmuxArgs(options)).toEqual([
      'new-session', '-d', '-s', 'chat-on-steroids', '--',
      '/usr/bin/node', '/srv/chat-on-steroids/out/main/server.js', 'start',
      '--data-dir', '/home/pi/.config/chat-on-steroids-server'
    ]);
  });

  it('does not create a second tmux session when one already exists', () => {
    const calls: string[][] = [];
    const run = (file: string, args: readonly string[]) => {
      calls.push([file, ...args]);
    };

    expect(startTmuxServer(options, run)).toBe(false);
    expect(calls).toEqual([['tmux', 'has-session', '-t', 'chat-on-steroids']]);
  });

  it('starts a detached session when the named session is absent', () => {
    const calls: string[][] = [];
    const run = (file: string, args: readonly string[]) => {
      calls.push([file, ...args]);
      if (args[0] === 'has-session') throw Object.assign(new Error('missing session'), { status: 1 });
    };

    expect(startTmuxServer(options, run)).toBe(true);
    expect(calls).toEqual([
      ['tmux', 'has-session', '-t', 'chat-on-steroids'],
      ['tmux', ...buildTmuxArgs(options)]
    ]);
  });

  it('parses a custom tmux session and data directory', () => {
    expect(parseTmuxArgs(['--session', 'cos-pi', '--data-dir', '/srv/cos-data'])).toMatchObject({
      session: 'cos-pi',
      dataDir: '/srv/cos-data'
    });
  });
});
