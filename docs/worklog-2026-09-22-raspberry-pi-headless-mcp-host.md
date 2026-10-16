# Raspberry Pi 5 Headless MCP Host Validation

Validation date: 2026-09-23 (Asia/Taipei)

Branch: `feat/raspberry-pi-headless-mcp-host`

Worktree: `D:\Repo\chat-on-steroids-worktrees\raspberry-pi-headless-mcp-host`

## Source and build evidence

- A reviewer found that the shared desktop settings schema could turn headless `sessions.record=false` back on during config validation. The server now opts into a narrow config profile that preserves the explicit off value across normalize, save, load, and runtime overrides; the desktop profile still enforces its existing behavior. A regression test exercises the whole sequence.
- After that fix, the focused server/config regression command passed: `npx vitest run test/server-secrets.test.ts test/server-runtime.test.ts test/server-host.test.ts test/server-signals.test.ts test/server-build.test.ts test/server-service.test.ts test/server-tmux.test.ts test/secrets.test.ts test/config.test.ts test/connection.test.ts test/tunnel-lifecycle.test.ts test/packaging.test.ts` — 12 files, 180 tests passed.
- MCP follow-up checks passed: `npx vitest run test/mcp-tool-declarations.test.ts` — 1 file, 4 tests; and a filtered run of `test/mcp.test.ts` — 4 relevant tests passed (178 skipped by the filter).
- `npm run typecheck` passed after the final source changes.
- `npm run build` passed after the final source changes and emitted `out/main/server.js` (19.28 kB) for plain Node. The build emitted existing Rollup warnings about mixed static/dynamic imports.
- Final plain-Node smoke command: `node out/main/server.js check --data-dir /Repo/chat-on-steroids-worktrees/raspberry-pi-headless-mcp-host/.codex-server-final-smoke4`. It exited 1 with the expected `win32/x64` platform rejection and missing approved-root/OpenAI-tunnel prerequisites. This confirms the bundled CLI loads without Electron module resolution errors; it does not validate Linux/ARM64 behavior. The temporary directory resolved inside this worktree, was verified not to be a reparse point, and was removed after the smoke test.

## Repository validation

- Final `npm test` after the endpoint, shutdown, and recording-policy fixes exited 1: 4 files failed / 227 passed / 5 skipped; 4 tests failed / 5,876 passed / 46 skipped (236 files / 5,926 tests). The failures remain in `computer-windows-accessibility`, `mcp`, `windows-apps`, and `windows-keys`, with Windows PowerShell/path-localization or expected diagnostic-text mismatches. These match the previously recorded baseline failure set from commit `3166de6` (7 files / 18 tests failed; 217 files / 5,829 passed; 5 files / 46 skipped); no new failing suite or failure type was observed. The new recording-policy regression test passed as part of this run.
- `npm run verify` was run before the final reviewer fixes and exited 1 at its first full Vitest stage with the same 4 failing suites: 4 files failed / 225 passed / 5 skipped; 4 tests failed / 5,846 passed / 46 skipped. The preceding steps passed: `npm run rg` verified/staged the local win32-x64 binary; public-history privacy check passed (215 commits, 11 tags); notices/native-source checks passed (151 production packages, 7 catalog entries, 730 pinned source archives/patches); typecheck passed; and `node -e "require('electron')"` passed. The final serial-only `test/computer.test.ts` / `test/mcp-shutdown.test.ts` stage was not reached because the first Vitest command failed.

## Raspberry Pi acceptance

Not run: this validation environment is Windows/x64 and no Raspberry Pi 5/Linux ARM64 host is available. Therefore Linux ARM64 resource installation, `server:init`/`server:check` readiness, Core reachability through a live tunnel, systemd restart/SIGTERM behavior, endpoint snapshot contents on-device, redacted live logs, and absence of Electron/Chrome processes on the Pi remain unverified. The Windows plain-Node smoke above is source/bundle evidence only and does not establish hardware, package-install, or provider behavior.

## Commits

- `7058d40` — read-only server secret provider
- `c4d0748` — server configuration and CLI
- `87a5240` — headless host lifecycle
- `51fd9f3` — Node bundle and resource resolution
- `d01aa89` — systemd/tmux deployment helpers and docs
- The review follow-up and final validation record are included in the local review-fix commit.
