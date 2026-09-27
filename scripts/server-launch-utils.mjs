import os from 'node:os';
import path from 'node:path';

const DEFAULT_DATA_DIR = '.config/chat-on-steroids-server';
const SAFE_ABSOLUTE_PATH = /^\/[A-Za-z0-9._+/-]+$/;

export function validateServerLaunchPath(value, label) {
  const normalized = value.trim();
  if (
    !path.posix.isAbsolute(normalized) ||
    normalized === '/' ||
    path.posix.normalize(normalized) !== normalized ||
    !SAFE_ABSOLUTE_PATH.test(normalized)
  ) {
    throw new Error(`${label} must be a normalized absolute Linux path using letters, digits, dot, dash, underscore, or plus`);
  }
  return normalized;
}

export function serverDataDirectory(env = process.env) {
  const configured = env.COS_SERVER_DATA_DIR?.trim();
  if (configured) return validateServerLaunchPath(configured, 'COS_SERVER_DATA_DIR');
  const home = env.HOME?.trim() || os.homedir().replaceAll('\\', '/');
  return validateServerLaunchPath(path.posix.join(home, DEFAULT_DATA_DIR), 'Home directory');
}
