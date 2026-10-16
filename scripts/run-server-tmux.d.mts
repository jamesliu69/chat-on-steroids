export type TmuxOptions = {
  dataDir: string;
  session: string;
  nodePath: string;
  projectDir: string;
  restart?: boolean;
};

export function buildTmuxArgs(options: TmuxOptions): string[];
export function parseTmuxArgs(argv: readonly string[], env?: NodeJS.ProcessEnv): TmuxOptions & { restart: boolean };
export function runServerInTmux(
  options: TmuxOptions,
  dependencies?: {
    execFileSync?: (file: string, args: readonly string[], options: { stdio: 'ignore' | 'inherit' }) => unknown;
  }
): { session: string; restarted: boolean };
