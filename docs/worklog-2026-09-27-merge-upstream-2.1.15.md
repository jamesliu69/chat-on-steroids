# Upstream v2.1.15 Merge Validation

Validation date: 2026-09-27 (Asia/Taipei)

Branch: `feat/raspberry-pi-headless-mcp-host` (merge commit `25e1e74`)

## Merge

- Merged `upstream/main` = `14c193fa38b281938229ba8cd235804ee1d2ac86` ("Merge pull request #388 from lavalava45/feat/editable-handoff-prompt", the v2.1.15 line, 143 commits) into the headless host branch at `bfa2c71` (12 commits).
- `git merge-tree --write-tree --name-only HEAD upstream/main` predicted exactly one conflict; the real merge matched. Only `.gitignore` conflicted; resolution kept both sides' additions (HEAD: `.server-live/*` staged-config entries; upstream: `/extension/build-stamp.txt` plus its explaining comment). No conflict markers remained anywhere (`git grep` verified).
- All 10 other doubly-modified files auto-merged: `AGENTS.md`, `docs/setup.md`, `package.json`, `src/main/{config,connection}.ts`, `src/main/mcp/{instructions,kernel,tools-core}.ts`, `test/{connection,mcp}.test.ts`. Spot checks confirmed both sides' intents survived (headless ownership row/section, runtime config override, `planToolsExposed` decoupling; upstream's command policy, sub-agent wait, editable prompts).
- Headless surface preserved on top of upstream: `src/server/*` (upstream has none), `electron.vite.config.ts` server entry, `package.json` server scripts (`server`, `server:init`, `server:check`, `server:endpoint`, `server:service:install`, `server:tmux`), `scripts/{install-server-service,run-server-tmux,server-launch-utils}.mjs`, `docs/setup.md` headless section.
- Upstream's new unknown config fields (`commandAllowlist`, `compaction.handoffPrompt`, `multiAgent.waitForSubAgents`) pass through `normalizeServerConfig()` untouched (spread-based); no headless policy change was made for them in this merge.
- No dependency changes (`package.json`/`package-lock.json` changed only the version line), so no `npm ci` was needed.

## Validation (Windows x64)

- `npm run typecheck` — passed, 0 errors.
- `npm run verify` — `npm run rg`, `verify:privacy`, `verify:notices`, typecheck and the Electron resolve step passed. First Vitest stage: 2 files failed / 231 passed / 5 skipped (238 files); 2 tests failed / 6,042 passed / 46 skipped (6,090 tests). The chain stopped there, so the second stage was rerun manually: `npx vitest run --maxWorkers=1 test/computer.test.ts test/mcp-shutdown.test.ts` — 2 files, 26 tests passed.
- Both failures are pre-existing on **both** parents, proven by running the two test files in detached worktrees at `bfa2c71` and at `upstream/main` (each with a `node_modules` junction): every tree fails identically, and the implicated files are byte-identical to upstream.
  - `test/windows-keys.test.ts` — the test writes its generated `keys.ps1` as UTF-8 without BOM; Windows PowerShell 5.1 decodes BOM-less files with the system ANSI codepage (CP950/Big5 here), so the `☃` sample corrupts the following `throw 'Accepted unsupported key'` line and PowerShell fails parsing its own script. Test file unchanged since `c6f2014`.
  - `test/mcp.test.ts` "scopes parser recovery to its failed batch command…" — the batch parser-recovery Note depends on the localized PowerShell parse-error shape; this machine emits Chinese text the detector in `src/main/exec-hints.ts` does not match. Upstream's own `docs/worklog-2026-09-22-i18n-coverage-gaps.md` records the same failure shape on its Turkish machine.
  - Baseline comparison: the pre-merge branch worklog recorded 4 failing suites (`computer-windows-accessibility`, `mcp`, `windows-apps`, `windows-keys`); the merged tree has only 2, and no new failing suite or failure type.
- `npm run build` — passed; emitted `out/main/server.js` (19,305 bytes, plain-Node CJS, no Electron import at the head).
- Windows plain-Node smoke: `node out/main/server.js check --data-dir …` exited 1 with the expected `win32/x64` platform rejection and the missing approved-root/tunnel prerequisites; the bundle loads and runs its check path without Electron resolution errors. The temporary data directory was removed after the run.

## Raspberry Pi acceptance

Not run: this validation host is Windows/x64 and no Raspberry Pi 5 / Linux ARM64 host is available. Linux ARM64 install, `server:init`/`server:check` readiness, live tunnel reachability, systemd restart/SIGTERM behavior and on-device logs remain unverified. This merge changed none of `src/server/*` or the deployment scripts, so the previous Pi acceptance record still describes that surface.

## Commits

- `25e1e74` — merge of `upstream/main` (`14c193f`) into the headless host branch.
- `feat/raspberry-pi-headless-mcp-host` fast-forwarded `bfa2c71..25e1e74` (109 files, +8,844/−516), then pushed to `origin` (the user's fork `jamesliu69/chat-on-steroids`) at the user's request; `git ls-remote` confirmed `25e1e74` on the remote. `upstream` was never touched.

## Follow-up fixes from code review

A two-axis review of `git diff upstream/main...HEAD` found four actionable defects; all four are fixed in the working tree:

- `scripts/run-server-tmux.mjs` — the default executor was a two-argument wrapper (`execTmux(args, stdio)`) while every call site and the tests use `execute(command, args, options)`, so the real launcher ran `execFileSync('tmux','tmux',…)` and failed with `ERR_INVALID_ARG_TYPE`. The wrapper is gone; the default is `dependencies.execFileSync ?? execFileSync`. `npx vitest run test/server-tmux.test.ts` — 4/4 passed.
- Data-directory policy now has one owner: `src/server/runtime.ts` imports `serverDataDirectory`/`validateServerLaunchPath` from `scripts/server-launch-utils.mjs` (new `scripts/server-launch-utils.d.mts` declaration for the no-`allowJs` tsconfig); `--data-dir` uses the launcher rule, while `--root` keeps the permissive absolute-path rule because approved project roots may contain spaces. `npx vitest run test/server-tmux.test.ts test/server-runtime.test.ts test/server-service.test.ts` — 15/15 passed.
- `test/windows-keys.test.ts` writes its generated `keys.ps1` with a UTF-8 BOM (`\uFEFF`), so Windows PowerShell 5.1 no longer decodes the `☃` sample through the ANSI codepage. `npx vitest run test/windows-keys.test.ts` — 1/1 passed.
- `src/main/exec-hints.ts` parser-failure detection no longer requires straight quotes around the never-translated `Create` method name; it keys on the bare `Create` plus the caret-underline line. A new Chinese-locale fixture in `test/exec-hints.test.ts` was red/green verified (fails with the old regex, passes with the new). `npx vitest run test/exec-hints.test.ts` — 125 passed; `npx vitest run test/mcp.test.ts -t "scopes parser recovery"` — passed.

Post-fix validation: `npm run typecheck` — 0 errors. `npm run build` — passed, `out/main/server.js` 19.81 kB with the shared launcher policy bundled. `npm run verify` — fully green: stage 1: 233 files passed / 5 skipped, 6,046 tests passed / 46 skipped (6,092); stage 2 (`computer.test.ts` + `mcp-shutdown.test.ts`): 2 files, 26 tests passed. The two previously failing tests now pass, so the canonical gate has zero failures on this machine.

These four fixes are currently uncommitted in the working tree; this worklog file remains untracked.
