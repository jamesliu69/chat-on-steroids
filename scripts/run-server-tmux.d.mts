export const DEFAULT_TMUX_SESSION: string;
export function buildTmuxArgs(options: {
  dataDir: string;
  session: string;
  nodePath: string;
  entryPath: string;
}): string[];
export function parseTmuxArgs(argv: readonly string[]): {
  dataDir: string;
  session: string;
  restart: boolean;
  nodePath: string;
  entryPath: string;
};
export function startTmuxServer(
  options: { dataDir: string; session: string; nodePath: string; entryPath: string },
  runner?: (file: string, args: readonly string[], options?: { stdio: 'ignore' }) => unknown
): boolean;
export function restartTmuxServer(
  options: { dataDir: string; session: string; nodePath: string; entryPath: string },
  runner?: (file: string, args: readonly string[], options?: { stdio: 'ignore' }) => unknown
): boolean;
