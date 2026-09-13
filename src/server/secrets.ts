import { promises as fs } from 'node:fs';
import path from 'node:path';
import type { SecretKey, SecretProvider } from '../main/secrets.js';

interface ServerSecretProviderOptions {
  env?: NodeJS.ProcessEnv;
}

const CREDENTIAL_FILES: Partial<Record<SecretKey, string>> = {
  openaiApiKey: 'openai-api-key',
  openRouterApiKey: 'openrouter-api-key',
  customProviderApiKey: 'custom-provider-api-key'
};

const ENV_KEYS: Partial<Record<SecretKey, string>> = {
  openaiApiKey: 'OPENAI_API_KEY',
  openRouterApiKey: 'OPENROUTER_API_KEY',
  customProviderApiKey: 'COS_CUSTOM_PROVIDER_API_KEY'
};

async function readCredential(directory: string | undefined, fileName: string | undefined): Promise<string | null> {
  if (!directory || !fileName) return null;
  try {
    const value = (await fs.readFile(path.join(directory, fileName), 'utf8')).trim();
    return value.length > 0 ? value : null;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') return null;
    throw error;
  }
}

/**
 * Server credentials are injected by systemd's credential directory or the service environment.
 * Nothing here persists a secret and unsupported secret classes fail closed as absent.
 */
export function createServerSecretProvider(options: ServerSecretProviderOptions = {}): SecretProvider {
  const env = options.env ?? process.env;
  return {
    async get(key: SecretKey): Promise<string | null> {
      const fromCredential = await readCredential(env.CREDENTIALS_DIRECTORY, CREDENTIAL_FILES[key]);
      if (fromCredential) return fromCredential;
      const envName = ENV_KEYS[key];
      if (!envName) return null;
      const value = env[envName]?.trim() ?? '';
      return value.length > 0 ? value : null;
    }
  };
}
