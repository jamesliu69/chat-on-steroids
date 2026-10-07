import { GOAL_REASONING_LEVELS, type GoalReasoning } from './types.js';

export type GoalEffort = Exclude<GoalReasoning, 'default'>;
export interface GoalModelReasoning {
  /** Null means all gateway efforts; absent means no effort selection. */
  supportedEfforts?: GoalEffort[] | null;
  defaultEffort?: GoalEffort;
  mandatory: boolean;
}
export interface GoalModel {
  id: string;
  name: string;
  created: number;
  contextLength: number;
  reasoning?: GoalModelReasoning;
}
const isEffort = (value: unknown): value is GoalEffort => typeof value === 'string' && value !== 'default' &&
  (GOAL_REASONING_LEVELS as readonly string[]).includes(value);

/** Project only bounded, documented catalogue fields; model names never imply support. */
export function parseGoalModelReasoning(value: unknown): GoalModelReasoning | undefined {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return undefined;
  const raw = value as Record<string, unknown>;
  return {
    mandatory: raw.mandatory === true,
    ...supportedEffortsField(raw),
    ...(isEffort(raw.default_effort) ? { defaultEffort: raw.default_effort } : {})
  };
}

/** Null claims every gateway effort; a list claims its bounded members; absent claims none. */
function supportedEffortsField(raw: Record<string, unknown>): { supportedEfforts?: GoalEffort[] | null } {
  if (raw.supported_efforts === null) return { supportedEfforts: null };
  if (Array.isArray(raw.supported_efforts)) return { supportedEfforts: [...new Set(raw.supported_efforts.slice(0, 32).filter(isEffort))] };
  return {};
}

export function goalModelEfforts(model: GoalModel | undefined, custom = false): GoalEffort[] {
  const all = GOAL_REASONING_LEVELS.filter(isEffort).reverse();
  const efforts = custom || model?.reasoning?.supportedEfforts === null ? all : model?.reasoning?.supportedEfforts ?? [];
  return efforts.filter(effort => effort !== 'none' || !model?.reasoning?.mandatory);
}
