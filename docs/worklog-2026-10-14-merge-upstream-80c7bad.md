# Merge upstream 80c7bad into fork branch

## Scope

- Requested target: `80c7bad26743e5a465534003b490b3d134a5e4f5`; original fork HEAD: `0097f0686882f67781eedae51ee042a10a799fa0`.
- The common ancestor is upstream `4f8345d6000419286c486b56971366f3ae5f879f`, so this merge integrates the upstream main history from that baseline through `80c7bad`, not only PR #1452.
- That ancestry includes the one-time plugin refresh offer, configurable recording storage, app system-proxy support, send-queued-now/follow-up behavior, agent-admission extraction, keep-awake, final-answer residency and turn-done notifications.
- No push, package, installation or release is part of this merge.

## Conflict resolution and fork contracts

- The three textual conflicts were `AGENTS.md`, `src/main/config.ts` and `src/renderer/main.ts`.
- `src/main/config.ts` keeps the fork contract `autoRefreshPlugins: false` for fresh installs while accepting upstream `keepAwake: true`, `turnNotifications: true`, `followUp: 'steer'` and the one-time `autoRefreshPluginsAsked` offer state.
- `src/renderer/main.ts` keeps `minimizeToTray` in the settings change-save path and adds `keepAwake`, `followUp` and `turnNotifications`.
- The upstream `agent-admission.ts` extraction preserves the fork's worktree admission invariants: current capability checks, approved-root validation after asynchronous allocation and persistence, durable rollback, retained unaccepted worktrees, path-redacted model errors and workspace publication only after broker acceptance.
- `package.json`, `src/main/version.ts`, `src/main/update.ts`, `src/server/`, `extension/content.js` and release workflows are untouched by this integration. The headless server, portable build, fork update routing, artifact/session tools and extension security paths therefore retain their existing source.
- Turn-done notifications use the existing recorded-session owner for completion and answer evidence. With recording Off, no notification is produced; the merge does not create a second completion watcher or silently re-enable recording.

## Validation

- Conflict markers removed; staged `git diff --check` passed.
- Focused integration suite: 23 test files passed; 1,427 tests passed and 1 skipped. This included config/plugin-refresh, turn notifications, keep-awake, proxy, storage/final-answer, renderer, IPC, agents, request ownership and worktree suites.
- `npm run typecheck`: passed.
- `npm run verify`: passed. Main run: 350 test files passed, 5 skipped; 8,827 tests passed, 49 skipped. Serial native run: 2 test files passed; 28 tests passed.
- `npm run build`: passed. Vite reported existing dynamic/static import chunking warnings only.
- `npm run verify:ui`: the first pass completed 17 checks before `verify-cos-sign-in.cjs` could not find `openssl` on PATH. Git for Windows already supplied OpenSSL 3.5.8 at `C:\Program Files\Git\usr\bin\openssl.exe`; adding that directory only to the validation process PATH made `verify-cos-sign-in.cjs` pass. The remaining run passed 36/36 checks while skipping the 17 already proven checks, so all 53 UI checks were covered successfully without a global PATH change or new installation.
- Source/tests/build do not prove packaged or installed payload behavior, live ChatGPT provider behavior, or Raspberry Pi runtime behavior.
