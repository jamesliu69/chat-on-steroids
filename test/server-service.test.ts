import { promises as fs } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
// @ts-ignore The installer is an executable ESM script with tested exported helpers.
import { installServerUserService, renderServerUserService } from '../scripts/install-server-service.mjs';

const homes: string[] = [];
const options = {
  projectDir: '/srv/cos',
  nodePath: '/usr/bin/node',
  dataDir: '/srv/cos-data'
};

afterEach(async () => {
  await Promise.all(homes.splice(0).map((home) => fs.rm(home, { recursive: true, force: true })));
});

describe('headless systemd user service', () => {
  it('renders a fixed, credential-safe Core server unit', () => {
    const unit = renderServerUserService(options);

    expect(unit).toContain('WorkingDirectory=/srv/cos');
    expect(unit).toContain(
      'ExecStart=/usr/bin/node /srv/cos/out/main/server.js start --data-dir /srv/cos-data'
    );
    expect(unit).toContain('Restart=on-failure');
    expect(unit).toContain('UMask=0077');
    expect(unit).toContain('NoNewPrivileges=true');
    expect(unit).not.toMatch(/OPENAI_API_KEY|sk-/);
  });

  it('rejects unit paths that could add directives or alter the command', () => {
    expect(() => renderServerUserService({ ...options, projectDir: '/srv/cos\nExecStart=/bin/sh' })).toThrow(/project/i);
    expect(() => renderServerUserService({ ...options, dataDir: 'relative/path' })).toThrow(/data directory/i);
  });

  it('atomically installs the unit and reloads systemd without enabling it', async () => {
    const home = await fs.mkdtemp(path.join(os.tmpdir(), 'cos-server-service-'));
    homes.push(home);
    const systemctlCalls: Array<{ command: string; args: string[] }> = [];

    const installed = await installServerUserService(options, {
      homeDirectory: home,
      execFileSync: (command: string, args: readonly string[]) => systemctlCalls.push({ command, args: [...args] })
    });

    expect(await fs.readFile(installed.unitPath, 'utf8')).toBe(renderServerUserService(options));
    expect(await fs.readdir(path.dirname(installed.unitPath))).toEqual(['chat-on-steroids.service']);
    if (process.platform !== 'win32') {
      expect((await fs.stat(installed.unitPath)).mode & 0o777).toBe(0o600);
    }
    expect(systemctlCalls).toEqual([
      { command: 'systemctl', args: ['--user', 'daemon-reload'] }
    ]);
  });

  it('enables and starts only when explicitly requested', async () => {
    const home = await fs.mkdtemp(path.join(os.tmpdir(), 'cos-server-service-enable-'));
    homes.push(home);
    const systemctlCalls: Array<{ command: string; args: string[] }> = [];

    await installServerUserService({ ...options, enable: true }, {
      homeDirectory: home,
      execFileSync: (command: string, args: readonly string[]) => systemctlCalls.push({ command, args: [...args] })
    });

    expect(systemctlCalls).toEqual([
      { command: 'systemctl', args: ['--user', 'daemon-reload'] },
      { command: 'systemctl', args: ['--user', 'enable', '--now', 'chat-on-steroids.service'] }
    ]);
  });
});
