// Read the production fixture input as bounded string literals, never as executable JavaScript.
const fs = require('node:fs');
const path = require('node:path');

function decodeScriptLiteral(row) {
  const literal = row.trim().replace(/,$/, '');
  if (!/^(['"])(?:\\[^\r\n]|(?!\1)[^\\\r\n])*\1$/.test(literal)) {
    throw new Error('Recognizer SCRIPT rows must contain only string literals');
  }
  if (literal[0] === '"') return JSON.parse(literal);
  // The production single-quoted literals use JSON escapes plus escaped single quotes.
  const body = literal.slice(1, -1).replace(/\\(['"\\bfnrt/])|"/g, (match, escaped) => {
    if (escaped === "'") return "'";
    if (match === '"') return '\\"';
    return match;
  });
  return JSON.parse('"' + body + '"');
}

function readRecognizerScript() {
  const sourceFile = path.join(__dirname, '../../src/main/dictation.ts');
  if (fs.statSync(sourceFile).size > 128 * 1024) throw new Error('Recognizer source exceeds fixture bound');
  const source = fs.readFileSync(sourceFile, 'utf8');
  if (source.length > 128 * 1024) throw new Error('Recognizer source exceeds fixture bound');
  const embedded = source.match(/^const SCRIPT = \[\r?\n([\s\S]*?)\r?\n\]\.join\('\\r\\n'\);$/m);
  if (!embedded) throw new Error('Could not locate the literal production recognizer SCRIPT');
  const rows = embedded[1].split(/\r?\n/);
  if (rows.length > 512) throw new Error('Recognizer SCRIPT exceeds fixture line bound');
  return rows.map(decodeScriptLiteral).join('\r\n');
}

function windowsPowerShellPath() {
  const environment = Object.fromEntries(Object.entries(process.env).map(([name, value]) => [name.toLowerCase(), value]));
  const root = environment.systemroot || environment.windir || 'C:\\Windows';
  if (!path.isAbsolute(root)) throw new Error('Windows system directory must be absolute');
  const systemDirectory = fs.realpathSync(path.join(root, 'System32'));
  if (!fs.statSync(systemDirectory).isDirectory()) throw new Error('Windows System32 directory is unavailable');
  const executable = fs.realpathSync(path.join(systemDirectory, 'WindowsPowerShell', 'v1.0', 'powershell.exe'));
  const relative = path.relative(systemDirectory, executable);
  if (relative.startsWith('..') || path.isAbsolute(relative) || !fs.statSync(executable).isFile()) {
    throw new Error('Windows PowerShell must be a file within the verified system directory');
  }
  return executable;
}

module.exports = { decodeScriptLiteral, readRecognizerScript, windowsPowerShellPath };
