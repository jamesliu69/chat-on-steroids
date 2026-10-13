import { execFileSync } from 'node:child_process';
import { describe, it } from 'vitest';

describe.skipIf(process.platform !== 'win32')('native Windows dictation startup without audio', () => {
  it('bounds both production waits and preserves cancellation and native errors', () => {
    execFileSync(process.execPath, ['scripts/fixtures/dictation-startup-native.cjs', 'waits'], {
      encoding: 'utf8', timeout: 30_000
    });
  }, 35_000);

  it('checks the existing owner and Stop marker throughout actual startup and fallback', () => {
    execFileSync(process.execPath, ['scripts/fixtures/dictation-startup-native.cjs', 'startup'], {
      encoding: 'utf8', timeout: 90_000
    });
  }, 95_000);
});
