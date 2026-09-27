import { promises as fs } from 'node:fs';
import path from 'node:path';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('electron', () => ({
  safeStorage: {
    isAsyncEncryptionAvailable: vi.fn(async () => true),
    encryptStringAsync: vi.fn(async (value: string) => Buffer.from(value, 'utf8')),
    decryptStringAsync: vi.fn(async (buffer: Buffer) => ({ result: buffer.toString('utf8'), shouldReEncrypt: false }))
  }
}));

const { configureSecretProvider, deleteAllSecrets, getSecret, resetSecretsCacheForTests, setSecret } = await import('../src/main/secrets.js');
const { createServerSecretProvider } = await import('../src/server/secrets.js');
const { makeTempDir, removeTempDir } = await import('./helpers.js');

let credentialDir: string;

beforeEach(async () => {
  credentialDir = await makeTempDir('cos-server-credentials-');
  configureSecretProvider(null);
  resetSecretsCacheForTests();
});

afterEach(async () => {
  configureSecretProvider(null);
  resetSecretsCacheForTests();
  await removeTempDir(credentialDir);
});

describe('headless server secret provider', () => {
  it('prefers a trimmed systemd credential to OPENAI_API_KEY', async () => {
    await fs.writeFile(path.join(credentialDir, 'openai-api-key'), ' file-value\n');
    const provider = createServerSecretProvider({
      env: { CREDENTIALS_DIRECTORY: credentialDir, OPENAI_API_KEY: 'env-value' }
    });

    await expect(provider.get('openaiApiKey')).resolves.toBe('file-value');
  });

  it('uses a non-empty environment credential when the systemd credential is absent or blank', async () => {
    const env = { CREDENTIALS_DIRECTORY: credentialDir, OPENAI_API_KEY: 'env-value' };
    const provider = createServerSecretProvider({ env });

    await expect(provider.get('openaiApiKey')).resolves.toBe('env-value');
    await fs.writeFile(path.join(credentialDir, 'openai-api-key'), ' \n');
    await expect(provider.get('openaiApiKey')).resolves.toBe('env-value');
  });

  it('does not expose unsupported desktop secret keys', async () => {
    const provider = createServerSecretProvider({ env: { OPENAI_API_KEY: 'env-value' } });

    await expect(provider.get('bridgeToken')).resolves.toBeNull();
    await expect(provider.get('plugin:example')).resolves.toBeNull();
  });

  it('rejects mutation through a configured read-only provider', async () => {
    configureSecretProvider(createServerSecretProvider({ env: { OPENAI_API_KEY: 'value' } }));

    await expect(getSecret('openaiApiKey')).resolves.toBe('value');
    await expect(setSecret('openaiApiKey', 'replacement')).rejects.toThrow(/read-only/i);
    await expect(deleteAllSecrets()).rejects.toThrow(/read-only/i);
  });
});
