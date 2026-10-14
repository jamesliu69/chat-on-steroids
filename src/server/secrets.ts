import { promises as fs } from 'node:fs';
import path from 'node:path';
import type { SecretKey, SecretProvider } from '../main/secrets.js';

interface ServerSecretSource {
  credentialName: string;
  environmentName: string;
}

const SERVER_SECRET_SOURCES: Partial<Record<SecretKey, ServerSecretSource>> = {
  openaiApiKey: {
    credentialName: 'openai-api-key',
    environmentName: 'OPENAI_API_KEY'
  }
};

function present(value: string | undefined): string | null {
  const trimmed = value?.trim();
  return trimmed ? trimmed : null;
}

async function readCredential(
  directory: string | undefined,
  source: ServerSecretSource
): Promise<string | null> {
  const credentialDirectory = present(directory);
  if (!credentialDirectory) return null;
  try {
    return present(await fs.readFile(path.join(credentialDirectory, source.credentialName), 'utf8'));
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') return null;
    throw new Error(`Could not read systemd credential ${source.credentialName}: ${(error as Error).message}`);
  }
}

export function createServerSecretProvider(
  options: { env?: NodeJS.ProcessEnv } = {}
): SecretProvider {
  const env = options.env ?? process.env;
  return {
    async get(key: SecretKey): Promise<string | null> {
      const source = SERVER_SECRET_SOURCES[key];
      if (!source) return null;
      return (await readCredential(env.CREDENTIALS_DIRECTORY, source)) ?? present(env[source.environmentName]);
    }
  };
}
