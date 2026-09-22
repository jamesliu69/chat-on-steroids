import { EventEmitter } from 'node:events';
import { describe, expect, it } from 'vitest';
import { createSignalLatch } from '../src/server/signals.js';

describe('headless server signal latch', () => {
  it('removes both process listeners after receiving the first termination signal', async () => {
    const source = new EventEmitter();
    const latch = createSignalLatch(source as unknown as Pick<NodeJS.Process, 'once' | 'removeListener'>);
    const received = latch.wait();

    source.emit('SIGTERM');

    await expect(received).resolves.toBe('SIGTERM');
    expect(latch.requested()).toBe('SIGTERM');
    expect(source.listenerCount('SIGINT')).toBe(0);
    expect(source.listenerCount('SIGTERM')).toBe(0);
  });

  it('disposes unused signal listeners when startup exits before a signal', () => {
    const source = new EventEmitter();
    const latch = createSignalLatch(source as unknown as Pick<NodeJS.Process, 'once' | 'removeListener'>);

    latch.dispose();

    expect(source.listenerCount('SIGINT')).toBe(0);
    expect(source.listenerCount('SIGTERM')).toBe(0);
    expect(latch.requested()).toBeNull();
  });
});
