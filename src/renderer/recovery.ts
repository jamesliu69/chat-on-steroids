import type { RecoveryCountdown } from '../shared/recovery.js';
import { el, icon } from './dom.js';
import { t, ui } from './i18n.js';

/** Only the displayed seconds tick here. Main owns every deadline and cancellation. */
/** `actionFor` may add one control to a row, e.g. the user's cancel for an interrupted-response reload. */
export function renderRecoveryCountdowns(host: HTMLElement, countdowns: readonly RecoveryCountdown[], now = Date.now(),
  actionFor?: (countdown: RecoveryCountdown) => HTMLElement | null): boolean {
  const key = JSON.stringify(countdowns);
  if (!countdowns.length) { delete host.dataset.countdowns; return false; }
  if (host.dataset.countdowns !== key) {
    host.replaceChildren(...countdowns.map(countdown => {
      const row = el('div', 'recovery-notice');
      const label = el('span', 'queue-label', () => {
        if (countdown.next) {
          let reason: string;
          if (countdown.kind === 'pickup-stopped') reason = t('Recovery stopped');
          else if (countdown.kind === 'pickup') reason = t('Waiting for delivery');
          else if (countdown.kind === 'post-reload') {
            reason = countdown.generating ? t('Reloaded · turn still marked generating') : t('Reloaded');
          } else if (countdown.kind === 'thinking-failed') reason = t('Thinking failed');
          else reason = t('Turn still marked generating · extra wait');
          let next: string;
          if (countdown.next === 'continue') next = t('Automatic Continue');
          else if (countdown.next === 'queue') next = t('Queued message');
          else if (countdown.next === 'goal') next = t('Goal');
          else next = t('Loop');
          return t('{0} · next: {1}', [reason, next]);
        }
        let unattributedReason: string;
        if (countdown.kind === 'unattributed') unattributedReason = t('Unattributed call');
        else if (countdown.kind === 'unattributed-wait') unattributedReason = t('Unattributed activity · awaiting attribution');
        else if (countdown.kind === 'assistant-error') unattributedReason = t('Interrupted response');
        else if (countdown.kind === 'tab-recovery') unattributedReason = t('Browser tab recovery');
        else if (countdown.kind === 'silence') unattributedReason = t('No recent activity');
        else if (countdown.kind === 'post-reload') unattributedReason = t('Reloaded · waiting for activity');
        else if (countdown.kind === 'thinking-failed') unattributedReason = t('Thinking failed · waiting for activity');
        else unattributedReason = t('Turn still marked generating · extra wait');
        return unattributedReason;
      });
      ui(row, 'title', () => {
        if (countdown.kind === 'pickup-stopped') {
          return t('The browser did not collect the pending step after {0} automatic reload attempts. Its original queued input or Goal obligation remains saved. CoS will not reload this chat for this step again; open the chat to continue manually.', [String(countdown.attempts ?? 3)]);
        }
        if (countdown.kind === 'native-busy' || countdown.generating) {
          return t('Delivery was deferred because the turn is still marked generating. This is the remaining extra wait, not a new reload timer. Fresh work or a final answer cancels recovery.');
        }
        if (countdown.next === 'continue') {
          return t('New activity, a final answer or your Stop cancels automatic Continue. Stop is used only if ChatGPT is still generating.');
        }
        if (countdown.kind === 'unattributed-wait') {
          return t('An attributed MCP call clears this chat. The five-minute window starts with the first unattributed call.');
        }
        if (countdown.kind === 'unattributed') {
          return t('This chat is a possible source. An attributed MCP call cancels its reload.');
        }
        if (countdown.kind === 'silence') return t('New activity cancels this countdown.');
        if (countdown.kind === 'assistant-error') {
          return t("ChatGPT's page lost this answer's live stream. The answer may still be running: the reload reconnects the page without stopping it.");
        }
        return t('New activity cancels recovery. The countdown shows the next check or delivery attempt.');
      });
      const timer = el('span', 'recovery-countdown');
      timer.setAttribute('role', 'timer');
      timer.setAttribute('aria-live', 'off');
      row.append(icon('i-pulse'), label, timer);
      const action = actionFor?.(countdown);
      if (action) row.append(action);
      return row;
    }));
    host.dataset.countdowns = key;
  }
  host.hidden = countdowns.every(countdown => (countdown.visibleAt ?? 0) > now);
  host.querySelectorAll<HTMLElement>('.recovery-countdown').forEach((timer, index) => {
    const countdown = countdowns[index]!;
    timer.closest<HTMLElement>('.recovery-notice')!.hidden = (countdown.visibleAt ?? 0) > now;
    const seconds = Math.max(0, Math.ceil((countdown.deadline - now) / 1000));
    const time = `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
    let text: string;
    if (countdown.kind === 'pickup-stopped') {
      text = t('Stopped after {0} attempts', [String(countdown.attempts ?? 3)]);
    } else if (countdown.kind === 'pickup') {
      text = seconds ? t('Reload in {0}', [time]) : t('Reload pending…');
    } else if (countdown.next === 'continue') {
      text = seconds ? t('Continue in {0}', [time]) : t('Preparing Continue…');
    } else if (countdown.kind === 'tab-recovery') {
      text = seconds ? t('Recovery in {0}', [time]) : t('Recovery pending…');
    } else if (countdown.kind === 'unattributed' || countdown.kind === 'silence' || countdown.kind === 'assistant-error' || countdown.reload) {
      text = seconds ? t('Reload in {0}', [time]) : t('Reload pending…');
    } else {
      text = seconds ? t('Check in {0}', [time]) : t('Checking for activity…');
    }
    if (timer.textContent !== text) timer.textContent = text;
  });
  return true;
}
