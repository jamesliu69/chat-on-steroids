# Upstream merge 05c5462 — 2026-09-28

Merged `upstream/main` at `05c54621abe0a7bbb6b08edad62bb83a52832db6`
into fork `main` at `a4ee0cb17d094868d416c0443f5a29f73632d70e`.
The common ancestor is `0dfb4d85159ea65c605f8ccfe81fa3ffb536d934`.
Git's direct merge had no file conflicts and retains the original upstream
commit history. The fork's portable target, headless server, homepage and
extension download URL remain in place.

The incoming changes prepare app and extension version 2.1.17, repair Windows
Pets pointer/focus handling, add app-created chat titles, and clarify the
finish-tool instruction. `CONTRIBUTORS.md` records the upstream authors and
`AGENTS.md` updates only the contracts affected by this merge.

## Validation

- `npm run typecheck` passed. Six focused suites covering MCP instructions,
  Pets focus/host/renderer, packaging and sessions passed (249 tests).
- `npm run verify` passed its preliminary checks and reached Vitest. The broad
  run had 6,414 passing, 47 skipped and 13 failing tests. Nine failures were
  child PowerShell scripts blocked by this host's execution policy; a
  process-scoped `PSExecutionPolicyPreference=Bypass` made the focused Windows
  coordinate suite pass without changing persistent policy. Two MCP endpoint
  tests failed with an HTTP chunk parse error and one bridge worker-wake test
  failed. All three also failed on the untouched pre-merge `a4ee0cb` in a
  temporary detached worktree, so they are not introduced by this merge.
- Native PowerShell `npm run dist:win:portable` passed. The produced Windows
  x64 `release/Chat On Steroids 2.1.17.exe` passed packaged runtime/resource
  smoke, including Koffi's Windows focus binding (`petFocus: true`). The
  package is unsigned. No installation or release publication occurred.
- The isolated Electron Pets fixture was attempted with native pointer,
  focus and external keyboard checks. The GPU child process first exited with
  `0xC0000135`; forcing in-process GPU avoided that exit but the renderer frame
  was disposed before the fixture could run, then the fixture timed out. Native
  Pets interaction on this merged build therefore remains unverified here.

The package smoke proves packaged files and native module loading, not an
installed app or live ChatGPT/extension behavior. Verification logs are under
ignored `release/merge-*.log` and `release/baseline-*.log` in this workspace.
