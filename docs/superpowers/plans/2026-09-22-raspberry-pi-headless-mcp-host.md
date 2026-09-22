# Raspberry Pi 5 Headless MCP Host Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox ( `- [ ]` ) syntax for tracking.

**Goal:** Build a Linux ARM64 plain-Node Core MCP host for Raspberry Pi 5 that remains usable without Electron, a display server, or a browser companion.

**Architecture:** A Node server entrypoint composes existing configuration, Core MCP connection, plugin, process, durable-store, and shutdown owners. Dedicated server modules own parsing, secrets, lifecycle, and deployment; the Electron desktop startup is untouched.

**Tech Stack:** TypeScript, Node.js 22, electron-vite/Rollup, Electron 44 desktop bundle, Vitest, systemd user services, tmux, existing tunnel clients.

**Spec:** `docs/superpowers/specs/2026-09-22-raspberry-pi-headless-mcp-host-design.md`

## Global Constraints

- Support plain Node only on `linux/arm64` and fail closed on every other platform or architecture.
- The server dependency graph must not import Electron during module evaluation.
- Reuse existing Core registrar/kernel, sandbox, capability checks, connection/tunnel, terminal, plugin, durable-store, and shutdown owners; do not fork tools or create another permission model.
- Use `~/.config/chat-on-steroids-server` by default, or `COS_SERVER_DATA_DIR`/`--data-dir`. Never reuse desktop user data implicitly.
- Preserve roots and Core permissions; force Desktop, browser, recording, automatic compaction, Goal/Loop, finish injection, and browser workers off.
- Read secrets only from systemd credentials or environment. Never persist them in config, generated units, endpoint snapshots, logs, or child environments.
- Preserve existing listener/tunnel ownership. Do not add LAN binding or a public unauthenticated endpoint.
- Use `apply_patch`, preserve unrelated changes, and update `AGENTS.md`, setup docs, and tests.

## Review Focus

- Plain Node must not resolve Electron before reporting configuration failure — Tasks 1 and 4.
- Desktop config must not retain a browser/native feature after normalization — Task 2.
- Empty/unreadable systemd credentials must not fall through to desktop secret state — Task 1.
- Signal/startup failure must stop admission before process/plugin teardown and durable flush — Task 3.
- Root, data-dir, session, tunnel, and unit values must be validated fields or literal argv, never shell text — Tasks 2 and 5.

---

## File Structure

| File | Responsibility |
| --- | --- |
| `src/main/secrets.ts` | Desktop encrypted storage with a read-only external-provider seam. |
| `src/server/secrets.ts` | Systemd credential/environment secret resolver. |
| `src/server/runtime.ts` | Pure CLI parsing and Core-only server policy. |
| `src/server/host.ts` | Initialization, validation, status, endpoint snapshot, shutdown. |
| `src/server/index.ts` | Plain-Node dependency wiring and process handling. |
| `src/main/ripgrep.ts`, `src/main/tunnel/locate.ts` | Packaged and working-directory resource resolution. |
| `electron.vite.config.ts`, `package.json` | Node entry bundle and commands. |
| `scripts/install-server-service.mjs`, `scripts/run-server-tmux.mjs` | Safe deployment helpers. |
| `test/server-*.test.ts` | Headless policy, lifecycle, build, and deployment coverage. |

### Task 1: Add a read-only secret-provider seam

**Files:**

- Modify: `src/main/secrets.ts`
- Create: `src/server/secrets.ts`
- Modify: `test/secrets.test.ts`
- Create: `test/server-secrets.test.ts`

**Interfaces:**

- Consumes: `SecretKey`, `getSecret`, `setSecret`, `clearSecret`, `deleteAllSecrets`, and Electron `safeStorage`.
- Produces: `SecretProvider`, `configureSecretProvider(provider: SecretProvider | null): void`, and `createServerSecretProvider(options?: { env?: NodeJS.ProcessEnv }): SecretProvider`.

- [ ] **Step 1: Write the failing secret tests**

~~~ts
it('prefers a trimmed systemd credential to OPENAI_API_KEY', async () => {
  await writeFile(path.join(credentialDir, 'openai-api-key'), ' file-value\n');
  const provider = createServerSecretProvider({
    env: { CREDENTIALS_DIRECTORY: credentialDir, OPENAI_API_KEY: 'env-value' }
  });
  await expect(provider.get('openaiApiKey')).resolves.toBe('file-value');
});

it('rejects mutation through a configured read-only provider', async () => {
  configureSecretProvider(createServerSecretProvider({ env: { OPENAI_API_KEY: 'value' } }));
  await expect(setSecret('openaiApiKey', 'replacement')).rejects.toThrow(/read-only/i);
});
~~~

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run test/server-secrets.test.ts`

Expected: FAIL because the provider module and configuration seam do not exist.

- [ ] **Step 3: Implement the minimum provider boundary**

~~~ts
export interface SecretProvider {
  get(key: SecretKey): Promise<string | null>;
}

export function configureSecretProvider(provider: SecretProvider | null): void {
  externalProvider = provider;
  clearCachedSecretState();
}

export function createServerSecretProvider(
  options: { env?: NodeJS.ProcessEnv } = {}
): SecretProvider {
  return { get: (key) => readCredentialThenEnvironment(key, options.env ?? process.env) };
}
~~~

Replace the static Electron import with lazy `import('electron')` used only for desktop encrypted storage. Provider reads take priority; provider writes/deletes reject. Keep existing cache-generation race protections.

- [ ] **Step 4: Run focused secret regression tests**

Run: `npx vitest run test/secrets.test.ts test/server-secrets.test.ts`

Expected: PASS, including desktop encryption tests and server precedence, empty-value, unsupported-key, and mutation-refusal cases.

- [ ] **Step 5: Commit**

~~~bash
git add src/main/secrets.ts src/server/secrets.ts test/secrets.test.ts test/server-secrets.test.ts
git commit -m "feat: add read-only headless secret provider"
~~~

### Task 2: Define pure CLI and Core-only server configuration

**Files:**

- Create: `src/server/runtime.ts`
- Create: `test/server-runtime.test.ts`

**Interfaces:**

- Consumes: `defaultConfig('linux')`, `RESERVED_ROOT_NAMES`, `DESKTOP_CAPABILITIES`, `Config`, and `TunnelKind`.
- Produces: `parseServerArgs(argv, env): ServerArgs`, `defaultServerDataDir(env): string`, `createInitialServerConfig(options): Config`, `normalizeServerConfig(config): Config`, and `applyServerEnvironment(config, env): Config`.

- [ ] **Step 1: Write failing CLI and normalization tests**

~~~ts
it('creates a Core-capable config while disabling browser-dependent features', () => {
  const config = createInitialServerConfig({
    root: '/srv/repos', name: 'repos', tunnel: 'manual', tunnelId: ''
  });
  expect(config.roots).toEqual([{ name: 'repos', path: '/srv/repos' }]);
  expect(config.capabilities.command).toBe(true);
  expect(config.capabilities.screen).toBe(false);
  expect(config.sessions.record).toBe(false);
  expect(config.multiAgent).toMatchObject({ enabled: false, allowUnattributedCalls: true });
  expect(config.goal.enabled).toBe(false);
});

it('rejects relative roots, reserved names, and inappropriate options', () => {
  expect(() => parseServerArgs(['init', '--root', 'relative'])).toThrow(/absolute/i);
  expect(() => parseServerArgs(['init', '--root', '/srv/repos', '--name', 'skills'])).toThrow(/reserved/i);
  expect(() => parseServerArgs(['start', '--root', '/srv/repos'])).toThrow(/only valid with init/i);
});
~~~

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run test/server-runtime.test.ts`

Expected: FAIL because `src/server/runtime.ts` does not exist.

- [ ] **Step 3: Implement bounded parsing and immutable normalization**

~~~ts
export type ServerArgs =
  | { command: 'init'; dataDir: string; root: string; name: string; tunnel: TunnelKind; tunnelId: string }
  | { command: 'check' | 'start'; dataDir: string };

export function normalizeServerConfig(source: Config): Config {
  const capabilities = { ...source.capabilities };
  for (const capability of DESKTOP_CAPABILITIES) capabilities[capability] = false;
  return {
    ...source,
    capabilities,
    sessions: { ...source.sessions, record: false },
    compaction: { ...source.compaction, auto: false },
    multiAgent: { ...source.multiAgent, enabled: false, allowUnattributedCalls: true, recoverAgentTabs: false },
    goal: { ...source.goal, enabled: false, impulseMinutes: 0 },
    ui: { ...source.ui, browserOnly: true, finishTool: false, backgroundChats: false, autoConnect: false, startAtLogin: false, minimizeToTray: false }
  };
}
~~~

Require an absolute root, a 1–32 character lower-case non-reserved name, exact existing tunnel kinds, and command-specific option admission. Apply `COS_SERVER_DATA_DIR` and `COS_TUNNEL_ID` without rewriting config. An explicit `init` tunnel choice wins over the environment default.

- [ ] **Step 4: Run focused runtime tests**

Run: `npx vitest run test/server-runtime.test.ts`

Expected: PASS for parsing, default data dir, environment override, root/Core-permission preservation, and every forced server setting.

- [ ] **Step 5: Commit**

~~~bash
git add src/server/runtime.ts test/server-runtime.test.ts
git commit -m "feat: define headless server configuration"
~~~

### Task 3: Add testable lifecycle and Node entrypoint

**Files:**

- Create: `src/server/host.ts`
- Create: `src/server/index.ts`
- Create: `test/server-host.test.ts`

**Interfaces:**

- Consumes: Task 1 providers, Task 2 runtime functions, and existing connection/plugin/terminal/recorder/session/durable/logger/resource APIs.
- Produces: `createHeadlessHost(dependencies)`, `validateServerConfig(config, host): Promise<string[]>`, and `writeEndpointSnapshot(dataDir, status, tunnelKind): Promise<void>`.

- [ ] **Step 1: Write failing injected-lifecycle tests**

~~~ts
it('stops admission before processes, plugins, and durable flush after SIGTERM', async () => {
  const events: string[] = [];
  const host = createHeadlessHost(fakeDependencies(events));
  const running = host.start({ command: 'start', dataDir });
  await fakeConnection.emit({ state: 'connected', detail: null, surfaces: [] });
  fakeSignals.emit('SIGTERM');
  await running;
  expect(events).toEqual([
    'shutdownConnection', 'terminateProcesses', 'closePlugins',
    'flushRecorder', 'flushSessions', 'flushDurable', 'flushLogs'
  ]);
});

it('writes endpoint state without credentials or private configuration', async () => {
  await writeEndpointSnapshot(dataDir, connectedManualStatus, 'manual');
  expect(JSON.parse(await readFile(path.join(dataDir, 'endpoint.json'), 'utf8'))).toEqual({
    state: 'connected', connector: 'Chat On Steroids Core',
    tunnel: 'manual', localUrl: 'http://127.0.0.1:8765/mcp'
  });
});
~~~

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run test/server-host.test.ts`

Expected: FAIL because `src/server/host.ts` does not exist.

- [ ] **Step 3: Implement initialization, validation, and ordered shutdown**

~~~ts
export function createHeadlessHost(deps: HeadlessHostDependencies) {
  return {
    init: (args: Extract<ServerArgs, { command: 'init' }>) => initializeAndWriteConfig(args, deps),
    check: (args: Extract<ServerArgs, { command: 'check' }>) => validateWithoutConnection(args, deps),
    start: (args: Extract<ServerArgs, { command: 'start' }>) => validateConnectAwaitSignalAndShutdown(args, deps)
  };
}
~~~

Initialize a restrictive data directory, install the server provider before secret reads, then initialize config/session/durable/log paths. Validate `linux/arm64`, roots, ripgrep, and selected tunnel prerequisites. Reuse `connect`, `getStatus`, `onStatusChange`, and `shutdownConnection`; only their terminal status transitions prove connection. Publish endpoint state with temp-file/rename and non-secret fields. Use one idempotent shutdown promise.

`src/server/index.ts` wires production dependencies, optional environment-file loading, redacted stderr errors, `process.exitCode`, and `SIGINT`/`SIGTERM`. It must not import Electron.

- [ ] **Step 4: Run server and adjacent connection tests**

Run: `npx vitest run test/server-host.test.ts test/server-runtime.test.ts test/server-secrets.test.ts test/connection.test.ts test/tunnel-lifecycle.test.ts`

Expected: PASS; `check` never connects, startup failure cleans up identically, and snapshots exclude secrets.

- [ ] **Step 5: Commit**

~~~bash
git add src/server/host.ts src/server/index.ts test/server-host.test.ts
git commit -m "feat: add headless MCP host lifecycle"
~~~

### Task 4: Emit the Node bundle and resolve resources

**Files:**

- Modify: `electron.vite.config.ts`
- Modify: `package.json`
- Modify: `src/main/ripgrep.ts`
- Modify: `src/main/tunnel/locate.ts`
- Create: `test/server-build.test.ts`
- Modify: `test/packaging.test.ts`

**Interfaces:**

- Consumes: Task 3 server entrypoint and existing package/resource APIs.
- Produces: `out/main/server.js`, `npm run server`, `npm run server:init`, `npm run server:check`, and resource lookup from packaged bytes or the explicit server working directory.

- [ ] **Step 1: Write failing build and resource tests**

~~~ts
it('declares a second server output and Node scripts', () => {
  expect(readFileSync('electron.vite.config.ts', 'utf8')).toContain(
    "server: resolve(__dirname, 'src/server/index.ts')"
  );
  expect(pkg.scripts['server:check']).toBe('node out/main/server.js check');
});

it('uses the explicit server working directory before PATH fallback', () => {
  expect(locateRipgrep()).toBe(path.join(serverRoot, 'resources', 'rg', 'rg'));
  expect(locateBinary('tunnel-client')).toBe(
    path.join(serverRoot, 'resources', 'tunnel', 'tunnel-client')
  );
});
~~~

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run test/server-build.test.ts test/packaging.test.ts`

Expected: FAIL because server build output/scripts and working-directory resource anchor do not exist.

- [ ] **Step 3: Implement bundle and resource path**

~~~ts
rollupOptions: {
  input: {
    index: resolve(__dirname, 'src/main/index.ts'),
    server: resolve(__dirname, 'src/server/index.ts')
  }
}
~~~

Add Node-only server scripts. Search `process.resourcesPath`, then `process.cwd()/resources/<name>`, then existing development/PATH fallbacks. Keep an explicit invalid binary hint as a failure.

- [ ] **Step 4: Run tests, typecheck, build, and Node smoke**

Run: `npx vitest run test/server-build.test.ts test/packaging.test.ts && npm run typecheck && npm run build && node out/main/server.js check --data-dir .codex-server-check-fixture`

Expected: tests/typecheck/build pass; Node runs without Electron resolution and reports a clear platform/config prerequisite failure on this non-Pi host.

- [ ] **Step 5: Commit**

~~~bash
git add electron.vite.config.ts package.json src/main/ripgrep.ts src/main/tunnel/locate.ts test/server-build.test.ts test/packaging.test.ts
git commit -m "build: emit the headless MCP server"
~~~

### Task 5: Add safe systemd/tmux deployment and docs

**Files:**

- Create: `scripts/install-server-service.mjs`
- Create: `scripts/run-server-tmux.mjs`
- Create: `test/server-service.test.ts`
- Create: `test/server-tmux.test.ts`
- Modify: `README.md`
- Modify: `docs/setup.md`
- Modify: `AGENTS.md`

**Interfaces:**

- Consumes: Task 2 data-dir policy and Task 4 bundle/scripts.
- Produces: `renderServerUserService(options): string`, `buildTmuxArgs(options): string[]`, `parseTmuxArgs(argv): TmuxOptions`, and server service/tmux npm commands.

- [ ] **Step 1: Write failing deployment tests**

~~~ts
it('renders a credential-safe unit with a fixed working directory', () => {
  const unit = renderServerUserService({
    projectDir: '/srv/cos', nodePath: '/usr/bin/node', dataDir: '/srv/cos-data'
  });
  expect(unit).toContain('WorkingDirectory=/srv/cos');
  expect(unit).toContain(
    'ExecStart=/usr/bin/node /srv/cos/out/main/server.js start --data-dir /srv/cos-data'
  );
  expect(unit).toContain('UMask=0077');
  expect(unit).not.toMatch(/OPENAI_API_KEY|sk-/);
});

it('uses literal tmux argv and rejects unsafe session names', () => {
  expect(buildTmuxArgs(options)).toEqual([
    'new-session', '-d', '-s', 'cos-pi', '--', '/usr/bin/node',
    '/srv/cos/out/main/server.js', 'start', '--data-dir', '/srv/cos-data'
  ]);
  expect(() => parseTmuxArgs(['--session', 'bad;command'])).toThrow(/session/i);
});
~~~

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run test/server-service.test.ts test/server-tmux.test.ts`

Expected: FAIL because deployment helpers do not exist.

- [ ] **Step 3: Implement systemd and tmux helpers**

~~~js
export function buildTmuxArgs({ session, nodePath, entryPath, dataDir }) {
  return ['new-session', '-d', '-s', session, '--', nodePath, entryPath, 'start', '--data-dir', dataDir];
}

export function renderServerUserService({ projectDir, nodePath, dataDir }) {
  return '[Service]\nWorkingDirectory=' + projectDir + '\n' +
    'ExecStart=' + nodePath + ' ' + projectDir + '/out/main/server.js start --data-dir ' + dataDir + '\n' +
    'Restart=on-failure\nRestartSec=5\nKillSignal=SIGTERM\nTimeoutStopSec=35\nUMask=0077\nNoNewPrivileges=true\nPrivateTmp=true\n';
}
~~~

Write an atomic user unit below `~/.config/systemd/user`, then run `systemctl --user daemon-reload`. Enable/start only when requested. Use `execFileSync` for tmux, validate sessions, avoid duplicates, and allow restart only for the validated named session. Document `LoadCredential=` or a permission-restricted environment file, never a credential value.

- [ ] **Step 4: Update product and agent-facing docs**

Document `npm ci`, ARM64 resource preparation, `server init`, `server check`, credentials, systemd, logs, and tmux. Update `AGENTS.md` with the server entrypoint/data/secret owners, Core-only limits, and source-vs-Pi evidence boundary. State browser recording, Goal/Loop, Compact & Resume, native Desktop, and browser workers are unavailable.

- [ ] **Step 5: Run deployment/documentation tests**

Run: `npx vitest run test/server-service.test.ts test/server-tmux.test.ts test/server-build.test.ts && npm run typecheck`

Expected: PASS; generated units and tmux arguments contain no unvalidated session text or secret values.

- [ ] **Step 6: Commit**

~~~bash
git add scripts/install-server-service.mjs scripts/run-server-tmux.mjs test/server-service.test.ts test/server-tmux.test.ts README.md docs/setup.md AGENTS.md package.json
git commit -m "docs: add headless MCP host deployment"
~~~

### Task 6: Run layered validation and record Pi evidence

**Files:**

- Modify: `docs/superpowers/plans/2026-09-22-raspberry-pi-headless-mcp-host.md`
- Create: `docs/worklog-2026-09-22-raspberry-pi-headless-mcp-host.md`

**Interfaces:**

- Consumes: Tasks 1–5 source, tests, scripts, and build output.
- Produces: a worklog that separates local source/build evidence from Raspberry Pi live acceptance.

- [ ] **Step 1: Run server and adjacent regression suites**

Run: `npx vitest run test/server-secrets.test.ts test/server-runtime.test.ts test/server-host.test.ts test/server-build.test.ts test/server-service.test.ts test/server-tmux.test.ts test/secrets.test.ts test/connection.test.ts test/tunnel-lifecycle.test.ts test/packaging.test.ts`

Expected: PASS with no test failures.

- [ ] **Step 2: Run repository validation**

Run: `npm run typecheck && npm run build && npm test && npm run verify`

Expected: exit zero. Record any native-only baseline failure with exact suite, platform, output, and base-branch result; do not call the branch wholly green.

- [ ] **Step 3: Run native Raspberry Pi 5 acceptance**

~~~bash
npm ci
npm run rg -- --platform linux --arch arm64
npm run tunnel -- --platform linux --arch arm64
npm run build
npm run server:init -- --root /srv/repos --name repos --tunnel manual
npm run server:check
npm run server -- --data-dir ~/.config/chat-on-steroids-server
~~~

In another terminal send `SIGTERM`; verify exit, endpoint snapshot, redacted logs, no Electron/Chrome started by the host, and Core reachability through the local/manual or authenticated tunnel path. Install/start/stop the user unit and verify restart policy by terminating only the service process.

- [ ] **Step 4: Record actual evidence**

Write exact commands, OS/architecture, pass/fail results, and unavailable Pi-only checks in the worklog. Mark only completed checkboxes.

- [ ] **Step 5: Commit**

~~~bash
git add docs/superpowers/plans/2026-09-22-raspberry-pi-headless-mcp-host.md docs/worklog-2026-09-22-raspberry-pi-headless-mcp-host.md
git commit -m "test: record headless MCP host validation"
~~~

## Plan Self-Review

### Spec coverage

| Requirement | Task |
| --- | --- |
| Plain Node, dedicated data, Core-only policy | 1–4 |
| CLI and normalization | 2 |
| Credential precedence and read-only behavior | 1 |
| Connection reuse, state truth, endpoint snapshot, shutdown | 3 |
| ARM64 resources and build output | 4 |
| systemd/tmux and product contracts | 5 |
| source/build/package/Pi evidence | 6 |

No spec requirement is unassigned.

### Placeholder scan

The plan has no unresolved placeholder, deferred implementation marker, or unspecified test instruction. Each task names files, interfaces, test commands, expected results, and commit scope.

### Type consistency

`SecretProvider`, `ServerArgs`, `createServerSecretProvider`, `normalizeServerConfig`, `createHeadlessHost`, `writeEndpointSnapshot`, `renderServerUserService`, `buildTmuxArgs`, and `parseTmuxArgs` are introduced before use. The output remains `out/main/server.js`.

### Review-focus coverage

Tasks 1–5 each own a listed failure mode; Task 6 runs their suites together with existing secret, connection, tunnel, and packaging tests.
