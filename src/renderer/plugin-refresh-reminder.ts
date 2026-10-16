import type { SurfaceId, SurfaceStatus } from '../shared/types.js';
import { t, ui } from './i18n.js';

const ACKNOWLEDGED_SCHEMAS_KEY = 'cos.plugins.refreshReminder.acknowledgedSchemas';
const SURFACES: readonly SurfaceId[] = ['core', 'desktop', 'plugins'];
type ConnectorSchemas = Partial<Record<SurfaceId, string>>;

let acknowledgedSchemas: ConnectorSchemas = {};
try {
  const saved = JSON.parse(window.localStorage.getItem(ACKNOWLEDGED_SCHEMAS_KEY) ?? '{}') as unknown;
  if (saved && typeof saved === 'object' && !Array.isArray(saved)) {
    for (const surface of SURFACES) {
      const schemaId = (saved as Record<string, unknown>)[surface];
      if (typeof schemaId === 'string' && schemaId) acknowledgedSchemas[surface] = schemaId;
    }
  }
} catch { /* Acknowledgement still works for this window when storage is unavailable. */ }

function persistAcknowledgement(): void {
  try { window.localStorage.setItem(ACKNOWLEDGED_SCHEMAS_KEY, JSON.stringify(acknowledgedSchemas)); }
  catch { /* Keep the in-memory acknowledgement for this window. */ }
}

/**
 * A reminder belongs to an exact connector declaration, never to an app-version bump.
 *
 * The first schema observed after this behavior ships becomes a silent baseline. That avoids
 * telling an upgraded user to refresh merely because the app version changed. Once a surface has
 * a baseline, a different schema id is actionable until acknowledged. Dismissing remains only a
 * UI acknowledgement; it does not claim that ChatGPT actually refreshed its cached tools.
 * A schema ChatGPT itself confirmed (automatic plugin refresh, or a page already showing it)
 * needs nothing from the user, so it counts as acknowledged.
 */
export function paintPluginRefreshReminder(
  currentSchemas: ConnectorSchemas,
  confirmedSchemas: ConnectorSchemas = {},
  surfaces: readonly Pick<SurfaceStatus, 'id' | 'connectorName' | 'chatgptName'>[] = []
): void {
  const notice = document.getElementById('pluginRefreshReminder')!;
  const changed: string[] = [];
  let learnedBaseline = false;
  for (const surface of SURFACES) {
    const current = currentSchemas[surface];
    if (!current) continue;
    const acknowledged = acknowledgedSchemas[surface];
    if (confirmedSchemas[surface] === current) {
      if (acknowledged !== current) { acknowledgedSchemas[surface] = current; learnedBaseline = true; }
    } else if (!acknowledged) {
      acknowledgedSchemas[surface] = current;
      learnedBaseline = true;
    } else if (acknowledged !== current) {
      const status = surfaces.find(item => item.id === surface);
      changed.push(status?.chatgptName || status?.connectorName || `Chat On Steroids ${surface === 'core' ? 'Core' : surface === 'desktop' ? 'Desktop' : 'Plugins'}`);
    }
  }
  if (learnedBaseline) persistAcknowledgement();
  notice.hidden = changed.length === 0;
  ui(document.getElementById('pluginRefreshReminderTargets')!, 'textContent', () =>
    changed.length ? t('In ChatGPT Plugins, select {0}, then choose Refresh tools.', [changed.join(', ')]) : '');
  document.getElementById('dismissPluginRefreshReminder')!.onclick = () => {
    for (const surface of SURFACES) {
      const current = currentSchemas[surface];
      if (current) acknowledgedSchemas[surface] = current;
    }
    persistAcknowledgement();
    notice.hidden = true;
  };
}
