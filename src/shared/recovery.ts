/** Read-only projection of an existing recovery deadline. Never authorizes an action. */
/** The existing silence clock gets one half-window only when the native page is busy. */
export const recoveryBusyMs = (pro: boolean): number => (pro ? 5 : 1) * 60_000;

export type RecoveryCountdown = {
  kind: 'unattributed' | 'unattributed-wait' | 'thinking-failed' | 'native-busy' | 'silence' | 'post-reload';
  deadline: number;
  /** The existing UI clock reveals this row without needing a new backend event. */
  visibleAt?: number;
  next?: 'queue' | 'goal' | 'loop';
};
