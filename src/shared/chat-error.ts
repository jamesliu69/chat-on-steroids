/** Equality only: retain the original provider text in the recording. */
export function chatErrorMessageKey(text: string, recoverable = false): string {
  const normalized = text.replaceAll(/\s+/g, ' ').trim();
  // The native alert sometimes includes its separate Retry button in textContent.
  // Only transport notices already classified recoverable use this normalization.
  return recoverable ? normalized.replace(/\s+Retry\.?$/i, '') : normalized;
}
