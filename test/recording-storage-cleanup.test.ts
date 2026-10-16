import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import { promises as fs } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import sharp from 'sharp';
import {
  appendEvent,
  clearImageStorage,
  createSession,
  getImageStorage,
  initSessionStore,
  MAX_GLOBAL_ASSET_BYTES,
  readAsset,
  readEvents,
  recordProcessCall,
  recordingStorageFull,
  resetSessionStoreForTests,
  setRecordingStorageLimit,
  upsertMessageEvent,
  writeAsset,
  writeOverflowText
} from '../src/main/session/store.js';
import * as logger from '../src/main/logger.js';
import type { NewSessionEvent, StoredText } from '../src/shared/session.js';

// #1406: the store held 2 GiB and could only shed images. Long texts (tool output, long answers)
// filled it just as well, so people with long runs had no way out short of losing everything.

const DAY = 24 * 60 * 60 * 1000;
const NOW = Date.UTC(2026, 9, 13, 12);
let directory: string;

beforeEach(async () => {
  directory = await fs.mkdtemp(path.join(os.tmpdir(), 'cos-recording-cleanup-'));
  initSessionStore(directory);
  vi.useFakeTimers({ toFake: ['Date'] });
  vi.setSystemTime(NOW);
});

afterEach(async () => {
  vi.useRealTimers();
  vi.restoreAllMocks();
  resetSessionStoreForTests();
  await fs.rm(directory, { recursive: true, force: true });
});

const plain = (value: string) => ({ text: value, chars: value.length, truncated: false });

/** What the recorder stores for text past the inline cap: a head, a note, and the full copy's id. */
async function longText(sessionId: string, full: string) {
  const asset = await writeAsset(sessionId, Buffer.from(full), 'text/plain');
  const head = full.slice(0, 10);
  return {
    asset,
    stored: { text: `${head}\n…[${full.length - 10} more characters stored in full as ${asset.id}]`, truncated: true, chars: full.length, assetId: asset.id }
  };
}

async function chatWithLongOutput(title: string, ageDays: number, output: string) {
  vi.setSystemTime(NOW - ageDays * DAY);
  const session = await createSession({ conversationId: `conv-${title}`, title });
  const result = await longText(session.id, output);
  await appendEvent(session.id, {
    time: Date.now(), source: 'mcp', kind: 'tool_call', call: {
      callId: `00000000-0000-4000-8000-${String(ageDays).padStart(12, '0')}`, tool: 'exec_command', requestId: `request-${title}`,
      conversationId: `conv-${title}`, attribution: 'request_id', attributionMethod: 'request_id',
      args: plain('{"cmd":"npm test"}'), result: result.stored, outcome: 'ok', durationMs: 1,
      summary: { kind: 'run', title: 'Ran npm test', tone: 'neutral' }
    }
  });
  vi.setSystemTime(NOW);
  return { session, asset: result.asset };
}

it('frees long texts and images from chats unused for a week, and leaves recent chats whole', async () => {
  const old = await chatWithLongOutput('old', 30, 'old build output '.repeat(200));
  vi.setSystemTime(NOW - 30 * DAY);
  const png = await sharp({ create: { width: 5, height: 4, channels: 3, background: '#113355' } }).png().toBuffer();
  const image = await writeAsset(old.session.id, png, 'image/png');
  const answer = await longText(old.session.id, 'a long answer '.repeat(300));
  await upsertMessageEvent(old.session.id, {
    time: Date.now(), source: 'extension', kind: 'assistant_message', messageId: 'old-answer', final: true, message: answer.stored
  });
  await upsertMessageEvent(old.session.id, {
    time: Date.now(), source: 'app', kind: 'user_message', messageId: 'old-question', message: plain('look at this'), assets: [image]
  });
  vi.setSystemTime(NOW);
  const recent = await chatWithLongOutput('recent', 2, 'recent build output '.repeat(200));

  const result = await clearImageStorage('old-chats-gib');

  expect(result.removedFiles).toBe(3);
  expect(await readAsset(old.session.id, old.asset.id)).toBeNull();
  expect(await readAsset(old.session.id, answer.asset.id)).toBeNull();
  expect(await readAsset(old.session.id, image.id)).toBeNull();
  // A chat used this week keeps everything.
  expect(await readAsset(recent.session.id, recent.asset.id)).not.toBeNull();

  const rows = await readEvents(old.session.id);
  const tool = rows.find(event => event.kind === 'tool_call');
  const said = rows.find(event => event.kind === 'assistant_message');
  const asked = rows.find(event => event.kind === 'user_message');
  // The head stays, and the entry says what happened instead of pointing at a missing file.
  expect(tool?.kind === 'tool_call' ? tool.call.result : null).toEqual({
    text: `old build \n…[${'old build output '.repeat(200).length - 10} more characters removed to free storage]`,
    truncated: true, chars: 'old build output '.repeat(200).length
  });
  expect(said?.kind === 'assistant_message' ? said.message : null).toMatchObject({ truncated: true });
  expect(said?.kind === 'assistant_message' ? said.message.assetId : 'missing').toBeUndefined();
  expect(said?.kind === 'assistant_message' ? said.message.text : '').toMatch(/more characters removed to free storage\]$/);
  expect(asked).toMatchObject({ assets: undefined, retiredImageAssetIds: [image.id] });
});

it('keeps a long text that a record it cannot rewrite still points to', async () => {
  const old = await chatWithLongOutput('noted', 30, 'shared output '.repeat(200));
  // A note has no stable key, so its reference cannot be retired; the file must stay.
  await appendEvent(old.session.id, {
    time: NOW - 30 * DAY, source: 'app', kind: 'note',
    message: { text: 'see output', truncated: true, chars: 3000, assetId: old.asset.id }
  });

  const result = await clearImageStorage('old-chats-gib');

  expect(result.removedFiles).toBe(0);
  expect(await readAsset(old.session.id, old.asset.id)).not.toBeNull();
  const tool = (await readEvents(old.session.id)).find(event => event.kind === 'tool_call');
  expect(tool?.kind === 'tool_call' ? tool.call.result.assetId : null).toBe(old.asset.id);
});

it('takes the oldest chats first and stops once about 1 GB is free', async () => {
  const oldest = await chatWithLongOutput('oldest', 90, 'oldest output '.repeat(200));
  const older = await chatWithLongOutput('older', 60, 'older output '.repeat(200));
  // The oldest chat's text alone covers the 1 GB target. A sparse file takes no real disk space.
  await fs.truncate(path.join(directory, 'sessions', oldest.session.id, 'assets', oldest.asset.id), 2 ** 30);

  await clearImageStorage('old-chats-gib');

  expect(await readAsset(oldest.session.id, oldest.asset.id)).toBeNull();
  expect(await readAsset(older.session.id, older.asset.id)).not.toBeNull();
});

it('uses the chosen storage limit, and a larger one ends a full store at once', async () => {
  const filler = await createSession({ title: 'Old recordings' });
  const current = await createSession({ title: 'Current chat' });
  await writeAsset(filler.id, Buffer.from('an old long text'), 'text/plain');
  resetSessionStoreForTests();
  initSessionStore(directory);
  vi.spyOn(logger, 'logWarn').mockImplementation(() => undefined);
  const realStat = fs.stat.bind(fs);
  vi.spyOn(fs, 'stat').mockImplementation(async (file, ...rest) => {
    const found = await (realStat as (...args: unknown[]) => Promise<Awaited<ReturnType<typeof fs.stat>>>)(file, ...rest);
    if (String(file).includes(path.join(filler.id, 'assets') + path.sep)) Object.defineProperty(found, 'size', { value: MAX_GLOBAL_ASSET_BYTES });
    return found;
  });
  await expect(writeAsset(current.id, Buffer.from('refused at 2 GB'), 'text/plain')).rejects.toThrow('Global session asset quota exceeded');
  expect(recordingStorageFull()).toBe(true);

  setRecordingStorageLimit(5);

  expect(recordingStorageFull()).toBe(false);
  expect((await getImageStorage()).limitBytes).toBe(5 * 2 ** 30);
  await writeAsset(current.id, Buffer.from('stored at 5 GB'), 'text/plain');

  // Back to 2 GB with 2 GB already used: full again, without waiting for the next refused write.
  setRecordingStorageLimit(2);
  expect(recordingStorageFull()).toBe(true);
  // Only the offered sizes are accepted.
  expect(() => setRecordingStorageLimit(3)).toThrow();
});

const textPublications = ['append-user', 'append-assistant', 'append-tool', 'upsert-user', 'upsert-assistant', 'process-tool', 'append-note', 'append-progress', 'append-chat-error', 'append-agent-message'] as const;
type TextPublication = typeof textPublications[number];

function textEvent(publication: TextPublication, stored: StoredText): NewSessionEvent {
  if (publication === 'append-note') return { time: NOW, source: 'app', kind: 'note', message: stored };
  if (publication === 'append-progress') return { time: NOW, source: 'extension', kind: 'progress', progressId: 'late-progress', message: stored };
  if (publication === 'append-chat-error') return { time: NOW, source: 'extension', kind: 'chat_error', recoverable: true, message: stored };
  if (publication === 'append-agent-message') return { time: NOW, source: 'mcp', kind: 'agent_message', messageId: 'late-agent-message', from: 'worker', to: 'prime', delivery: 'delivered', message: stored };
  if (publication.endsWith('tool')) return {
    time: NOW, source: 'mcp', kind: 'tool_call', call: {
      callId: '00000000-0000-4000-8000-000000000001', tool: 'exec_command', requestId: 'late-text-request',
      conversationId: 'late-text-chat', attribution: 'request_id', attributionMethod: 'request_id',
      args: stored, result: stored, outcome: 'ok', durationMs: 1,
      changes: [{ path: 'example.txt', added: 1, removed: 0, approximate: false, reviewAssetId: stored.assetId }],
      summary: { kind: 'run', title: 'Ran command', tone: 'neutral' }
    }
  };
  return publication.endsWith('assistant')
    ? { time: NOW, source: 'extension', kind: 'assistant_message', messageId: 'late-answer', final: true, message: stored, renderedHtml: stored }
    : { time: NOW, source: 'app', kind: 'user_message', messageId: 'late-question', message: stored };
}

async function publishText(sessionId: string, publication: TextPublication, stored: StoredText): Promise<void> {
  const event = textEvent(publication, stored);
  if (publication === 'process-tool' && event.kind === 'tool_call') await recordProcessCall(sessionId, event);
  else if (publication.startsWith('upsert') && (event.kind === 'user_message' || event.kind === 'assistant_message')) await upsertMessageEvent(sessionId, event);
  else await appendEvent(sessionId, event);
}

async function spilledText(sessionId: string, full: string): Promise<StoredText> {
  const assetId = await writeOverflowText(sessionId, full);
  expect(assetId).not.toBeNull();
  return { text: `head\n…[${full.length - 4} more characters stored in full as ${assetId}]`, chars: full.length, truncated: true, digest: 'original-digest', assetId: assetId! };
}

it.each(textPublications)('retires late overflow references after old-chat cleanup: %s', async publication => {
  vi.setSystemTime(NOW - 30 * DAY);
  const session = await createSession({ conversationId: 'late-text-chat', title: 'Paused recorder' });
  const stored = await spilledText(session.id, 'head overflow text '.repeat(100));
  vi.setSystemTime(NOW);
  let resume!: () => void;
  const paused = new Promise<void>(resolve => { resume = resolve; });
  // Spill completed, but the recorder has not published its event into either durable queue.
  const publicationDone = paused.then(() => publishText(session.id, publication, stored));
  const cleaned = await clearImageStorage('old-chats-gib');
  expect(cleaned.removedFiles).toBe(1);
  expect(await readAsset(session.id, stored.assetId!)).toBeNull();
  resume();
  await publicationDone;

  const rows = await readEvents(session.id);
  const event = rows.find(row => row.kind === textEvent(publication, stored).kind)!;
  const texts = event.kind === 'tool_call' ? [event.call.args, event.call.result]
    : event.kind === 'assistant_message' ? [event.message, event.renderedHtml!]
    : 'message' in event ? [event.message] : [];
  expect(texts.length).toBeGreaterThan(0);
  for (const text of texts) {
    expect(text).toEqual({ text: `head\n…[${stored.chars - 4} more characters removed to free storage]`, chars: stored.chars, truncated: true, digest: stored.digest });
  }
  if (event.kind === 'tool_call') expect(event.call.changes![0]).toEqual({ path: 'example.txt', added: 1, removed: 0, approximate: false });
  resetSessionStoreForTests();
  initSessionStore(directory);
  expect(await readEvents(session.id)).toEqual(rows);
});

it('admits a fresh same-hash overflow write after cleanup', async () => {
  vi.setSystemTime(NOW - 30 * DAY);
  const session = await createSession({ title: 'Rewritten overflow' });
  const full = 'head reusable text '.repeat(100);
  const old = await spilledText(session.id, full);
  vi.setSystemTime(NOW);
  expect((await clearImageStorage('old-chats-gib')).removedFiles).toBe(1);
  const fresh = await spilledText(session.id, full);
  expect(fresh.assetId).toBe(old.assetId);
  await publishText(session.id, 'upsert-assistant', fresh);
  const event = (await readEvents(session.id)).find(row => row.kind === 'assistant_message');
  expect(event).toMatchObject({ message: fresh, renderedHtml: fresh });
  expect(await readAsset(session.id, fresh.assetId!)).toEqual(Buffer.from(full));
});

it('keeps late references to a selected overflow file vetoed by an unkeyed record', async () => {
  const old = await chatWithLongOutput('kept-late', 30, 'head shared text '.repeat(100));
  await appendEvent(old.session.id, { time: NOW - 30 * DAY, source: 'app', kind: 'note', message: { ...plain('see text'), assetId: old.asset.id } });
  const stored: StoredText = { ...plain('head'), assetId: old.asset.id, truncated: true };
  expect((await clearImageStorage('old-chats-gib')).removedFiles).toBe(0);
  await publishText(old.session.id, 'upsert-assistant', stored);
  expect((await readEvents(old.session.id)).find(row => row.kind === 'assistant_message')).toMatchObject({ message: stored, renderedHtml: stored });
  expect(await readAsset(old.session.id, old.asset.id)).not.toBeNull();
});
