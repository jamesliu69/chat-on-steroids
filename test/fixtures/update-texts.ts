import { readFileSync } from 'node:fs';
import { expect } from 'vitest';

export const updateTextLocales = ['de', 'es', 'fr', 'ja', 'ko', 'pt-BR', 'pt-PT', 'ru', 'tr', 'vi', 'zh-CN', 'zh-TW'] as const;
const placeholders = (text: string): string[] => [...text.matchAll(/\{(\d+)\}/g)].map(match => match[1]!).sort((left, right) => left.localeCompare(right));

// The callers keep their independent authored key lists; share only the catalog invariants.
export function assertTranslatedUpdateTexts(locale: typeof updateTextLocales[number], keys: readonly string[]): void {
  const catalog = JSON.parse(readFileSync(`src/renderer/locales/${locale}.json`, 'utf8')) as Record<string, string>;
  for (const key of keys) {
    expect(typeof catalog[key], key).toBe('string');
    expect(catalog[key]!.trim(), key).not.toBe('');
    expect(catalog[key], key).not.toBe(key);
    expect(placeholders(catalog[key]!), key).toEqual(placeholders(key));
  }
}
