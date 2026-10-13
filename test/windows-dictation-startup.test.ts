import { execFileSync } from 'node:child_process';
import { describe, expect, it } from 'vitest';

describe.skipIf(process.platform !== 'win32')('native Windows dictation startup without audio', () => {
  it('bounds both production waits and preserves cancellation and native errors', () => {
    const output = execFileSync(process.execPath, ['scripts/fixtures/dictation-startup-native.cjs', 'waits'], {
      encoding: 'utf8', timeout: 30_000
    });
    expect(output).toContain('PASS: 8 actual C# wait outcomes');
  }, 35_000);

  it('checks the existing owner and Stop marker throughout actual startup and fallback', () => {
    const output = execFileSync(process.execPath, ['scripts/fixtures/dictation-startup-native.cjs', 'startup'], {
      encoding: 'utf8', timeout: 90_000
    });
    expect(output.match(/^PASS: actual startup /gm)).toHaveLength(20);
    expect(output).toContain('PASS: actual startup compile_timeout/authorized -> legacy, no audio');
    expect(output).toContain('PASS: actual startup start_timeout/authorized -> legacy, no audio');
  }, 95_000);
});
