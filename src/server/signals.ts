export interface SignalLatch {
  wait(): Promise<NodeJS.Signals>;
  requested(): NodeJS.Signals | null;
  dispose(): void;
}

type SignalSource = Pick<NodeJS.Process, 'once' | 'removeListener'>;

export function createSignalLatch(source: SignalSource = process): SignalLatch {
  let received: NodeJS.Signals | null = null;
  let resolveSignal!: (signal: NodeJS.Signals) => void;
  const promise = new Promise<NodeJS.Signals>((resolve) => { resolveSignal = resolve; });
  const receive = (signal: NodeJS.Signals): void => {
    if (received) return;
    received = signal;
    dispose();
    resolveSignal(signal);
  };
  const onSigint = (): void => receive('SIGINT');
  const onSigterm = (): void => receive('SIGTERM');
  const dispose = (): void => {
    source.removeListener('SIGINT', onSigint);
    source.removeListener('SIGTERM', onSigterm);
  };
  source.once('SIGINT', onSigint);
  source.once('SIGTERM', onSigterm);
  return { wait: () => promise, requested: () => received, dispose };
}
