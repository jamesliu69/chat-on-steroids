# Raspberry Pi 5 Headless MCP Host Validation

Validation date: 2026-09-23 (Asia/Taipei)

Branch: `feat/raspberry-pi-headless-mcp-host`

Worktree: `D:\Repo\chat-on-steroids-worktrees\raspberry-pi-headless-mcp-host`

## Source and build evidence

- The focused server/regression command passed: `npx vitest run test/server-secrets.test.ts test/server-runtime.test.ts test/server-host.test.ts test/server-build.test.ts test/server-service.test.ts test/server-tmux.test.ts test/secrets.test.ts test/connection.test.ts test/tunnel-lifecycle.test.ts test/packaging.test.ts` — 10 files, 100 tests passed.
- `npm run typecheck` passed.
- `npm run build` passed and emitted `out/main/server.js` for plain Node. The build emitted existing Rollup warnings about mixed static/dynamic imports.
- Plain-Node smoke command: `node out/main/server.js check --data-dir /Repo/chat-on-steroids-worktrees/raspberry-pi-headless-mcp-host/.codex-server-check-fixture`. It exited 1 with the expected `win32/x64` platform rejection and missing approved-root/OpenAI-tunnel prerequisites. It loaded the bundle without an Electron module-resolution failure. The temporary directory resolved inside this worktree, was verified not to be a reparse point, and was removed after the smoke test.

## Repository validation

- `npm test` exited 1: 4 files failed / 226 passed / 5 skipped; 4 tests failed / 5,864 passed / 46 skipped. The failing suites were `computer-windows-accessibility`, `mcp`, `windows-apps`, and `windows-keys`. The observed failures were Windows PowerShell/path-localization or expected diagnostic-text mismatches. These suites are within the previously recorded baseline failure set from commit `3166de6` (7 files / 18 tests failed; 217 files / 5,829 passed; 5 files / 46 skipped). This run showed no failing suite outside that baseline set.
- `npm run verify` exited 1 at its first full Vitest stage with the same 4 failing suites: 4 files failed / 224 passed / 5 skipped; 4 tests failed / 5,838 passed / 46 skipped. The preceding steps passed: `npm run rg` verified/staged the local win32-x64 binary; public-history privacy check passed (213 commits, 11 tags); notices/native-source checks passed (151 production packages, 7 catalog entries, 730 pinned source archives/patches); typecheck passed; and `node -e "require('electron')"` passed. The final serial-only `test/computer.test.ts` / `test/mcp-shutdown.test.ts` stage was not reached because the first Vitest command failed.

## Raspberry Pi acceptance

Not run: this validation environment is Windows/x64 and no Raspberry Pi 5/Linux ARM64 host is available. Therefore Linux ARM64 resource installation, `server:init`/`server:check` readiness, Core reachability through a live tunnel, systemd restart/SIGTERM behavior, endpoint snapshot contents on-device, redacted live logs, and absence of Electron/Chrome processes on the Pi remain unverified. The Windows plain-Node smoke above is source/bundle evidence only and does not establish hardware, package-install, or provider behavior.

## Commits

- `7058d40` — read-only server secret provider
- `c4d0748` — server configuration and CLI
- `87a5240` — headless host lifecycle
- `51fd9f3` — Node bundle and resource resolution
- `d01aa89` — systemd/tmux deployment helpers and docs
- Task 6 validation record is committed separately after this worklog is complete.
