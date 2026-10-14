import { promises as fs } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { afterAll, afterEach, beforeAll, beforeEach, expect, it, vi } from 'vitest';

type AwaitFreshCallOrigin = (
  tool: string,
  after: number,
  within: number,
  options: { exact?: boolean; requestId?: string | null }
) => Promise<string | null>;

const gate = vi.hoisted(() => ({
  awaitFreshCallOrigin: vi.fn<AwaitFreshCallOrigin>(async () => null),
  recordToolCall: vi.fn(async () => null)
}));

vi.mock('electron', () => ({
  safeStorage: {
    isAsyncEncryptionAvailable: async () => true,
    getSelectedStorageBackend: () => 'test',
    encryptStringAsync: async (value: string) => Buffer.from(value, 'utf8'),
    decryptStringAsync: async (buffer: Buffer) => ({ result: buffer.toString('utf8'), shouldReEncrypt: false })
  },
  clipboard: { readText: () => '', writeText: () => undefined },
  shell: { openExternal: async () => undefined }
}));

vi.mock('../src/main/session/recorder.js', async importOriginal => {
  const actual = await importOriginal<typeof import('../src/main/session/recorder.js')>();
  return { ...actual, awaitFreshCallOrigin: gate.awaitFreshCallOrigin, recordToolCall: gate.recordToolCall };
});

const { defaultConfig, initConfigPath, saveConfig } = await import('../src/main/config.js');
const { initDurableStore, resetDurableForTests } = await import('../src/main/durable.js');
const { dispatch, ok } = await import('../src/main/mcp/kernel.js');
const { resetAgentsForTests } = await import('../src/main/agents.js');
const {
  abortContinuation,
  anyCompactingConversation,
  beginContinuationSourceSendNow,
  compactingConversation,
  dispatchContinuationSourceSendNow,
  openContinuationNow,
  resetContinuationsForTests
} = await import('../src/main/session/continuation.js');
const { observeRequestCorrelation } = await import('../src/main/session/correlation.js');
const { resetRecorderForTests } = await import('../src/main/session/recorder.js');
const { CONTINUATION_TTL_MS } = await import('../src/main/session/continuation.js');
const { createSession, initSessionStore, resetSessionStoreForTests } = await import('../src/main/session/store.js');
const { resetBlockedChatsForTests, setChatBlocked } = await import('../src/main/session/blocked-chats.js');

const SOURCE_CHAT = 'mcp-gate-source';
let dir = '';

beforeAll(async () => {
  dir = await fs.mkdtemp(path.join(os.tmpdir(), 'clf-mcp-continuation-gate-'));
  initConfigPath(dir);
  initDurableStore(dir);
  initSessionStore(dir);
  const config = defaultConfig();
  await saveConfig({
    ...config,
    multiAgent: { ...config.multiAgent, enabled: true, allowUnattributedCalls: true },
    sessions: { ...config.sessions, record: true }
  });
});

beforeEach(async () => {
  resetContinuationsForTests();
  resetAgentsForTests();
  resetRecorderForTests();
  resetBlockedChatsForTests();
  await resetSessionStoreForTests();
  resetDurableForTests();
  initDurableStore(dir);
  initSessionStore(dir);
  gate.awaitFreshCallOrigin.mockClear();
  gate.recordToolCall.mockClear();
});

afterEach(() => {
  vi.restoreAllMocks();
  vi.useRealTimers();
});

afterAll(async () => {
  resetContinuationsForTests();
  resetAgentsForTests();
  resetRecorderForTests();
  resetBlockedChatsForTests();
  await resetSessionStoreForTests();
  resetDurableForTests();
  if (dir) await fs.rm(dir, { recursive: true, force: true });
});

async function openSourceTicket() {
  const session = await createSession({ title: 'MCP continuation gate', conversationId: SOURCE_CHAT });
  const ticket = await openContinuationNow(session.id, SOURCE_CHAT);
  return { session, ticket };
}

async function runRead(requestId: string, proof?: { conversationId: string; sessionId: string }) {
  if (proof) {
    observeRequestCorrelation({
      requestId,
      conversationId: proof.conversationId,
      sessionId: proof.sessionId,
      messageId: `message-${requestId}`,
      tool: 'read',
      observedAt: Date.now()
    });
  }
  const handler = vi.fn(async () => ok('read handler ran'));
  const result = await dispatch(
    'read',
    { paths: ['/probe/self-contained.txt'] },
    null,
    requestId,
    'core',
    handler
  );
  return { handler, result };
}

it('lets an unrelated read through a filed but unasked continuation', async () => {
  const { ticket } = await openSourceTicket();

  expect(ticket.state).toBe('awaiting-summary');
  expect(ticket.sourceSend.state).toBe('not-attempted');
  expect(compactingConversation(SOURCE_CHAT)).toBeNull();
  expect(anyCompactingConversation()).toBe(false);

  const { handler, result } = await runRead('mcp-gate-unasked');

  expect(handler).toHaveBeenCalledOnce();
  expect(result.isError).not.toBe(true);
  expect(gate.awaitFreshCallOrigin).not.toHaveBeenCalled();
});

it('lets an unrelated read through an attempted-but-undispatched continuation', async () => {
  const { ticket } = await openSourceTicket();
  expect((await beginContinuationSourceSendNow(ticket.token))?.allowed).toBe(true);
  expect(compactingConversation(SOURCE_CHAT)).toBeNull();
  expect(anyCompactingConversation()).toBe(false);

  const { handler, result } = await runRead('mcp-gate-attempted');

  expect(handler).toHaveBeenCalledOnce();
  expect(result.isError).not.toBe(true);
  expect(gate.awaitFreshCallOrigin).not.toHaveBeenCalled();
});

it('keeps the source fenced after dispatch and permits an unrelated proven source', async () => {
  const { session, ticket } = await openSourceTicket();
  expect((await beginContinuationSourceSendNow(ticket.token))?.allowed).toBe(true);
  expect(await dispatchContinuationSourceSendNow(ticket.token)).toBe(true);
  expect(compactingConversation(SOURCE_CHAT)?.token).toBe(ticket.token);
  expect(anyCompactingConversation()).toBe(true);

  gate.awaitFreshCallOrigin.mockImplementationOnce(async (_tool, _after, _timeout, options) => {
    observeRequestCorrelation({
      requestId: options.requestId!,
      conversationId: SOURCE_CHAT,
      sessionId: session.id,
      messageId: 'late-source-message',
      tool: 'read',
      observedAt: Date.now()
    });
    return SOURCE_CHAT;
  });
  const sourceCall = await runRead('mcp-gate-late-source-proof');
  expect(sourceCall.handler).not.toHaveBeenCalled();
  expect(sourceCall.result.isError).toBe(true);
  expect(JSON.stringify(sourceCall.result)).toContain('COMPACTION_IN_PROGRESS');
  expect(gate.awaitFreshCallOrigin).toHaveBeenCalledOnce();

  gate.awaitFreshCallOrigin.mockClear();
  const otherSession = await createSession({ title: 'MCP unrelated proof', conversationId: 'other-chat' });
  const unrelatedCall = await runRead('mcp-gate-unrelated-proof', {
    conversationId: 'other-chat',
    sessionId: otherSession.id
  });
  expect(unrelatedCall.handler).toHaveBeenCalledOnce();
  expect(unrelatedCall.result.isError).not.toBe(true);
  expect(gate.awaitFreshCallOrigin).not.toHaveBeenCalled();
});

it('keeps the blocked-chat exact identity wait when no continuation is open', async () => {
  const blockedSession = await createSession({ title: 'MCP blocked proof', conversationId: SOURCE_CHAT });
  setChatBlocked(SOURCE_CHAT, true);
  gate.awaitFreshCallOrigin.mockImplementationOnce(async (_tool, _after, _timeout, options) => {
    observeRequestCorrelation({
      requestId: options.requestId!,
      conversationId: SOURCE_CHAT,
      sessionId: blockedSession.id,
      messageId: 'blocked-message',
      tool: 'read',
      observedAt: Date.now()
    });
    return SOURCE_CHAT;
  });

  const { handler, result } = await runRead('mcp-gate-blocked');

  expect(handler).not.toHaveBeenCalled();
  expect(result.isError).toBe(true);
  expect(JSON.stringify(result)).toContain('CHAT_BLOCKED');
  expect(gate.awaitFreshCallOrigin).toHaveBeenCalledOnce();
});

it.each([
  ['aborted', async (token: string) => abortContinuation(token, 'test aborted')],
  ['expired', async (_token: string) => {
    vi.useFakeTimers();
    vi.setSystemTime(Date.now() + CONTINUATION_TTL_MS + 1);
  }]
])('does not hold an unrelated read after a %s ticket is no longer open', async (_label, finish) => {
  const { ticket } = await openSourceTicket();
  await finish(ticket.token);

  expect(compactingConversation(SOURCE_CHAT)).toBeNull();
  expect(anyCompactingConversation()).toBe(false);
  const { handler, result } = await runRead(`mcp-gate-${_label}`);
  expect(handler).toHaveBeenCalledOnce();
  expect(result.isError).not.toBe(true);
  expect(gate.awaitFreshCallOrigin).not.toHaveBeenCalled();
});
