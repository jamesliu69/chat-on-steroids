import { readFileSync } from 'node:fs';
import { JSDOM } from 'jsdom';
import { afterEach, beforeEach, expect, it, vi } from 'vitest';

let dom: JSDOM;
beforeEach(() => {
  vi.resetModules();
  dom = new JSDOM(readFileSync('src/renderer/index.html', 'utf8'), { url: 'https://local.test/' });
  Object.assign(globalThis, { window: dom.window, document: dom.window.document });
});
afterEach(() => dom.window.close());

it('silently baselines connector schemas, persists a changed-schema reminder and rearms only for another schema', async () => {
  let { paintPluginRefreshReminder: paint } = await import('../src/renderer/plugin-refresh-reminder.js');
  const notice = document.getElementById('pluginRefreshReminder')!;
  const dismiss = document.getElementById('dismissPluginRefreshReminder')!;
  paint({ core: 'schema-a' });
  expect(notice.hidden).toBe(true);
  paint({ core: 'schema-b' });
  expect(notice.hidden).toBe(false);
  vi.resetModules();
  ({ paintPluginRefreshReminder: paint } = await import('../src/renderer/plugin-refresh-reminder.js'));
  paint({ core: 'schema-b' });
  expect(notice.hidden).toBe(false);
  dismiss.click();
  paint({ core: 'schema-b' });
  expect(notice.hidden).toBe(true);
  vi.resetModules();
  ({ paintPluginRefreshReminder: paint } = await import('../src/renderer/plugin-refresh-reminder.js'));
  paint({ core: 'schema-b' });
  expect(notice.hidden).toBe(true);
  paint({ core: 'schema-c' });
  expect(notice.hidden).toBe(false);
  dismiss.click();
  paint({ core: 'schema-c' });
  expect(notice.hidden).toBe(true);
});

it('does not invent refresh debt when a connector is first published or temporarily absent', async () => {
  const { paintPluginRefreshReminder } = await import('../src/renderer/plugin-refresh-reminder.js');
  const notice = document.getElementById('pluginRefreshReminder')!;
  paintPluginRefreshReminder({});
  expect(notice.hidden).toBe(true);
  paintPluginRefreshReminder({ core: 'core-a' });
  expect(notice.hidden).toBe(true);
  paintPluginRefreshReminder({});
  expect(notice.hidden).toBe(true);
  paintPluginRefreshReminder({ core: 'core-a', plugins: 'plugins-a' });
  expect(notice.hidden).toBe(true);
  paintPluginRefreshReminder({ core: 'core-a', plugins: 'plugins-b' });
  expect(notice.hidden).toBe(false);
});

it('dismisses only the reminder and leaves simultaneous extension or update notices visible', async () => {
  const { paintPluginRefreshReminder } = await import('../src/renderer/plugin-refresh-reminder.js');
  const update = document.getElementById('updateNotice')!;
  update.hidden = false;
  paintPluginRefreshReminder({ core: 'schema-a' });
  paintPluginRefreshReminder({ core: 'schema-b' });
  document.getElementById('dismissPluginRefreshReminder')!.click();
  expect(document.getElementById('pluginRefreshReminder')!.hidden).toBe(true);
  expect(update.hidden).toBe(false);
});

it('does not ask for a manual refresh once ChatGPT confirmed the new schema, and asks again for a later one', async () => {
  let { paintPluginRefreshReminder: paint } = await import('../src/renderer/plugin-refresh-reminder.js');
  const notice = document.getElementById('pluginRefreshReminder')!;
  paint({ core: 'schema-a' }, { core: 'schema-a' });
  paint({ core: 'schema-b' }, { core: 'schema-a' });
  expect(notice.hidden).toBe(false);
  // Automatic plugin refresh finished: ChatGPT now holds schema-b.
  paint({ core: 'schema-b' }, { core: 'schema-b' });
  expect(notice.hidden).toBe(true);
  vi.resetModules();
  ({ paintPluginRefreshReminder: paint } = await import('../src/renderer/plugin-refresh-reminder.js'));
  paint({ core: 'schema-b' }, {});
  expect(notice.hidden).toBe(true);
  paint({ core: 'schema-c' }, { core: 'schema-b' });
  expect(notice.hidden).toBe(false);
});

it('links to installed ChatGPT plugins without acknowledging the changed tools', async () => {
  const { paintPluginRefreshReminder: paint } = await import('../src/renderer/plugin-refresh-reminder.js');
  const notice = document.getElementById('pluginRefreshReminder')!;
  paint({ core: 'schema-a' });
  paint({ core: 'schema-b' });
  const acknowledged = window.localStorage.getItem('cos.plugins.refreshReminder.acknowledgedSchemas');
  const open = document.getElementById('openPluginRefreshReminder')!;
  expect(open.tagName).toBe('BUTTON');
  expect(open.getAttribute('data-link')).toBe('https://chatgpt.com/settings/plugins-settings');
  open.click();
  expect(notice.hidden).toBe(false);
  expect(window.localStorage.getItem('cos.plugins.refreshReminder.acknowledgedSchemas')).toBe(acknowledged);
  paint({ core: 'schema-b' });
  expect(notice.hidden).toBe(false);
});

it('names only affected connectors, prefers proven renamed names, and translates the instructions live', async () => {
  const { paintPluginRefreshReminder: paint } = await import('../src/renderer/plugin-refresh-reminder.js');
  const { setLanguage } = await import('../src/renderer/i18n.js');
  const surfaces = [
    { id: 'core' as const, connectorName: 'Chat On Steroids Core (PC)', chatgptName: 'CosPc' },
    { id: 'desktop' as const, connectorName: 'Chat On Steroids Desktop (PC)' },
    { id: 'plugins' as const, connectorName: 'Chat On Steroids Plugins (PC)' }
  ];
  paint({ core: 'core-a', desktop: 'desktop-a', plugins: 'plugins-a' }, {}, surfaces);
  paint({ core: 'core-b', desktop: 'desktop-b', plugins: 'plugins-b' }, { desktop: 'desktop-b' }, surfaces);
  const targets = document.getElementById('pluginRefreshReminderTargets')!;
  expect(targets.textContent).toBe('In ChatGPT Plugins, select CosPc, Chat On Steroids Plugins (PC), then choose Refresh tools.');
  setLanguage('zh-TW');
  expect(targets.textContent).toBe('在 ChatGPT「外掛程式」中選取 CosPc, Chat On Steroids Plugins (PC)，再按「重新整理工具」。');
  paint({ core: 'core-b', desktop: 'desktop-b', plugins: 'plugins-b' }, { core: 'core-b', desktop: 'desktop-b' }, surfaces);
  expect(targets.textContent).not.toContain('CosPc');
  expect(targets.textContent).toContain('Chat On Steroids Plugins (PC)');
});
