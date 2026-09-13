import { afterEach, describe, expect, it } from 'vitest';
import { mkdtemp, mkdir, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { createServerSecretProvider } from '../src/server/secrets.js';

const dirs: string[] = [];
afterEach(async () => {
  await Promise.all(dirs.splice(0).map(dir => rm(dir, { recursive: true, force: true })));
});

describe('server secret provider', () => {
  it('prefers a systemd credential over the environment', async () => {
    const dir = await mkdtemp(path.join(tmpdir(), 'cos-credentials-'));
    dirs.push(dir);
    await writeFile(path.join(dir, 'openai-api-key'), '  sk-file-value\n', { mode: 0o600 });
    const provider = createServerSecretProvider({
      env: { CREDENTIALS_DIRECTORY: dir, OPENAI_API_KEY: 'sk-env-value' }
    });

    await expect(provider.get('openaiApiKey')).resolves.toBe('sk-file-value');
  });

  it('uses OPENAI_API_KEY when no systemd credential exists', async () => {
    const dir = await mkdtemp(path.join(tmpdir(), 'cos-credentials-'));
    dirs.push(dir);
    await mkdir(dir, { recursive: true });
    const provider = createServerSecretProvider({
      env: { CREDENTIALS_DIRECTORY: dir, OPENAI_API_KEY: '  sk-env-value  ' }
    });

    await expect(provider.get('openaiApiKey')).resolves.toBe('sk-env-value');
  });

  it('does not invent unsupported browser or plugin secrets', async () => {
    const provider = createServerSecretProvider({ env: {} });
    await expect(provider.get('bridgeToken')).resolves.toBeNull();
    await expect(provider.get('plugin:test')).resolves.toBeNull();
  });
});
