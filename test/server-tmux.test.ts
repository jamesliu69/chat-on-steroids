import { describe, expect, it } from 'vitest';
// @ts-ignore The launcher is an executable ESM script with tested exported helpers.
import { buildTmuxArgs, parseTmuxArgs, runServerInTmux } from '../scripts/run-server-tmux.mjs';

const options = {
  session: 'cos-pi',
  nodePath: '/usr/bin/node',
  projectDir: '/srv/cos',
  dataDir: '/srv/cos-data',
  restart: false
};

describe('headless tmux launcher', () => {
  it('builds literal argv for the server process', () => {
    expect(buildTmuxArgs(options)).toEqual([
      'new-session', '-d', '-s', 'cos-pi', '--', '/usr/bin/node',
      '/srv/cos/out/main/server.js', 'start', '--data-dir', '/srv/cos-data'
    ]);
  });

  it('parses explicit options and rejects unsafe session names', () => {
    expect(parseTmuxArgs([
      '--session', 'cos-pi', '--node', '/usr/bin/node', '--project-dir', '/srv/cos', '--data-dir', '/srv/cos-data'
    ])).toEqual(options);
    expect(() => parseTmuxArgs(['--session', 'bad;command'])).toThrow(/session/i);
  });

  it('refuses to create a duplicate session unless restart was requested', () => {
    const calls: Array<{ command: string; args: string[] }> = [];
    const execFileSync = (command: string, args: readonly string[]) => {
      calls.push({ command, args: [...args] });
      return Buffer.alloc(0);
    };

    expect(() => runServerInTmux(options, { execFileSync })).toThrow(/already exists/i);
    expect(calls).toEqual([{ command: 'tmux', args: ['has-session', '-t', '=cos-pi'] }]);
  });

  it('starts a missing session and restarts only the exact validated session', () => {
    const calls: Array<{ command: string; args: string[] }> = [];
    const missingSession = Object.assign(new Error('session missing'), { status: 1 });
    const execFileSync = (command: string, args: readonly string[]) => {
      calls.push({ command, args: [...args] });
      if (args[0] === 'has-session') throw missingSession;
      return Buffer.alloc(0);
    };

    runServerInTmux(options, { execFileSync });
    expect(calls).toEqual([
      { command: 'tmux', args: ['has-session', '-t', '=cos-pi'] },
      { command: 'tmux', args: buildTmuxArgs(options) }
    ]);

    calls.length = 0;
    const existingSession = (command: string, args: readonly string[]) => {
      calls.push({ command, args: [...args] });
      return Buffer.alloc(0);
    };
    runServerInTmux({ ...options, restart: true }, { execFileSync: existingSession });
    expect(calls).toEqual([
      { command: 'tmux', args: ['has-session', '-t', '=cos-pi'] },
      { command: 'tmux', args: ['kill-session', '-t', '=cos-pi'] },
      { command: 'tmux', args: buildTmuxArgs(options) }
    ]);
  });
});
