import { it } from 'vitest';
import { assertTranslatedUpdateTexts, updateTextLocales } from './fixtures/update-texts.js';
const keys = [
  "Update all",
  "Restart to install the update?",
  "Chat On Steroids will close and restart. Running chats, agents and commands may be interrupted.",
  "Keep working",
  "Restart and install",
  "Update postponed. You can keep working.",
  "You will be asked before the app restarts. Finish active work before installing.",
  "After updating, the app connects once to finish plugin checks, even if automatic connection is off.",
  "Download link opened. Install the app to continue; your settings are kept.",
  "Plugin checks requested. Any remaining steps are shown in Update status.",
  "Update all could not finish: {0}",
  "Update check failed",
  "Downloading {0}",
  "Ready to install {0}",
  "Install {0} manually",
  "Up to date",
  "Not checked yet"
];
it.each(updateTextLocales)('publishes the translated update actions strings in %s', locale => {
  assertTranslatedUpdateTexts(locale, keys);
});
