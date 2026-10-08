# SonarQube quality fixes — 2026-10-08

Branch: `sonarqube/fixes`; starting commit: `65d5e882`.

## Changes

- Addressed the ten previously reported SonarQube bugs in source:
  - `S905` (3): replace unused renderer layout reads with explicit layout-measurement calls while retaining forced reflow for animations.
  - `S3403` (4): make the string-comparison intent explicit in Extension Fiber, live preview and ChatGPT composer code; preserve strict equality semantics.
  - `S1143` (2): move image-quarantine restoration out of the `finally` block into a dedicated async function without changing cleanup and replacement protection.
  - `S5850` (1): separate unsafe YAML scalar-prefix and mapping-separator checks.
- Removed obsolete arguments and `void` expressions in MCP caller correlation and propagated the new signatures through the Kernel, Tools Core, Recorder and the affected test mocks.
- Added a regression check for ambiguous unquoted YAML scalar metadata.

## Actual validation

- `npm run typecheck`: passed after all source and test changes.
- `npm run build`: passed both before and after installing the missing test dependency.
- MCP regression selection: 8 suites, 531 passed and 6 skipped.
- Corrected all three outdated correlation mocks found by the full test pass; the three directly affected test files then passed (24/24).
- Final targeted selection: 8 suites, 356/356 passed, including Fiber, ChatGPT DOM input, image storage, Skills, sign-in and MCP identity suites.
- `npm run verify`: its original invocation did not pass (14 failed, 8060 passed, 48 skipped). The failures involved obsolete mocked correlation signatures; the affected suites were fixed and rerun, but the entire full suite was not rerun.
- UI checks: the initial accessibility check lacked the already-declared `axe-core@4.13.0` development dependency. After installing it locally, `npm run verify:ui -- accessibility` passed (1/1). The unfiltered UI suite was stopped before all checks completed.

## Outstanding verification

- SonarQube has **not** been rescanned against these working-tree edits. Do not claim the issue count or Quality Gate reflects this patch.
- Security hotspots have not been individually reviewed; no dependency audit remediation was performed in the first pass.
- The pre-existing modified `SONARQUBE_ISSUES.md` was deliberately left untouched.
- No commit, push, application installation or deployment was performed. Only the declared `axe-core` development dependency was installed locally for the Accessibility check; package manifests were not changed.

## Follow-up quality pass (same day)

- Eliminated the three reported **Blocker** patterns without suppressing rules:
  - `S3516` in `src/renderer/chat.ts`: recovery verdict renderer is a `void` side-effect operation; its caller preserves the prior `false` status return.
  - `S3516` in `extension/usage.js`: the fetch proxy returns the original downstream promise once while observer processing remains conditional on the active lifecycle.
  - `S2187` in `test/macos-window-matching.test.ts`: real `it` nested in `describe.skipIf` preserves the macOS-only skip on Windows.
- Moved the async fetch observer into its own named function in `extension/usage.js` to reduce nesting while preserving request and response receipt timing.
- Extracted skills update handling, timeline clipboard and queued-input editor handling out of deeply nested renderer callbacks (`S2004`).
- Removed the unused menu argument and `void` operator in `row-menu.ts`, gave `PluginManager` a named default authorization opener, and made page teardown and browser preview async rejection handling explicit (`S3735`, `S7059`).
- Refactored `src/main/search.ts` and `src/main/exec-hints.ts` to reduce targeted `S3776` complexities, preserving existing guardrails. The Search refactor includes a new binary/UTF-16 fallback regression.
- Reduced targeted `S3776` complexity in `src/main/session/store.ts` (completion/final checks, handoff parsing, session candidate lookup, image quarantine verification) and `src/main/fsops.ts` (PNG/JPEG validation, directory listing, transactional text edits). Added filesystem regression tests for symlink exclusion, rollback after an external replacement and JPEG end markers.
- Upgraded `@modelcontextprotocol/client` from 2.1.0 to 2.3.1, and indirect `http-cache-semantics` from 4.2.0 to 4.3.0 and `source-map-js` from 1.2.1 to 1.2.2 in the lockfile.
- A `sharp` 0.35.5 trial was **reverted to 0.35.4** because the package's native `@img/*` and libvips upgrades invalidate the reviewed 730-source native inventory. Do not ship the unreviewed native binary; updating the native review inventory, source builds and licenses is a separate release-critical step.

### Checks completed during follow-up

- Typecheck passed after the UI and Extension refactors (before the reproducible dependency reinstall).
- `test/search.test.ts`: 34/34 passed; `test/exec-hints.test.ts`: 126/126 passed.
- Browser setup, package management, usage observer and macOS test selection: 114 passed, 2 skipped.
- Skills library, managed Skills, GitHub and usage observer selection: 76 passed, 1 skipped.
- Timeline targeted recovery tests: 3 passed, 258 deliberately not selected; queued-input tests: 4 passed, 257 not selected.
- Content pagehide targeted tests: 2 passed, 850 not selected.
- `test/usage-observer.test.ts`: 49/49 passed after extracting the response observer.
- `test/session.test.ts` and `test/image-storage.test.ts`: 194/194 passed, plus 60 completion/response/recorder identity tests and 2 handoff bridge tests, after the Session Store extraction.
- `test/fsops.test.ts`: 43/43 passed; sandbox + portable tests: 68 passed, 10 skipped after the Filesystem extraction.
- With Sharp correctly reverted and the other locked updates preserved, `npm audit` reported **11 findings (3 High, 8 Moderate)**. The production-only audit contains 3 High: `sharp` (unreviewed-upgrade constraint) and `@anthropic-ai/mcpb` / `node-forge` (no remediated version identified by npm).
- `npm ci` with the final reviewed native lockfile completed, then `npm run verify:notices` **passed**: 155 production packages, 7 catalog entries and 730 pinned native source archives/patches validated.

### Final verification and outstanding work

- `npm run verify` against the reviewed lockfile ultimately **passed**: 315 ordinary test files passed, 5 skipped; 8,078 tests passed, 48 skipped. The separately serialized `computer.test.ts` and `mcp-shutdown.test.ts` both passed with 28/28 tests. Total: **8,106 passed, 48 skipped, 0 failed**.
- The first full-suite attempt on the restored dependency install had two timing-sensitive failures under parallel load: `code-mode-mcp` tested a real PTY after just one bounded output poll, and `exec` assumed PowerShell completed a cold launch within 3 seconds. Both passed in isolation (62 passed, 1 skipped). Tests now poll the **same owned process** for bounded completion and require the **actual PowerShell execution marker** with a wider bounded cold-start window; the complete suite passed after those changes. No production custody or command policy was relaxed.
- Following a final parameter-object cleanup to avoid creating a new over-parameterized helper, `npm run typecheck` and `npm run build` passed; 7 directly related queued-input/recovery timeline tests passed.
- Selected real-Electron UI verification passed **7/7**: accessibility, browser setup, CoS sign-in, input queue, recovery layout, tool scroll, and chat switching. The CoS sign-in fixture initially lacked `openssl` in PATH; reran with the already-installed Git OpenSSL added to that command's PATH, with no project change, and passed. The remaining 42 UI scripts were not run in this pass.
- Independent read-only code reviews of the changed Search, Session Store, Exec Hints, Filesystem, Usage Observer and Renderer diffs found **no concrete newly introduced regressions within their assigned scope**. That does not replace a whole-project security or Sonar review.
- `git diff --check` passed for source/test edits (apart from a benign Git CRLF notice for the previously modified report). No commit, push or production installation was performed.
- The local SonarQube server is UP, but `sonar-scanner-npm` returned HTTP **401 Unauthorized** for this branch; previous exported issue counts are historical. Do not fabricate a fresh analysis result or call newly modified findings resolved server-side.
- `var` declarations intentionally used for ESM cycle initialization (`src/main/session/correlation.ts`) and cross-script global binding (`extension/chatgpt-dom.js`) must not be blindly changed just to clear static warnings.
- The 8 remaining Moderate advisories are in the `electron-builder` development/packaging chain. npm's suggested fix is an incompatible downgrade to `26.5.0`; preserve verified packaging behavior until an appropriate upstream fix is available.
- The three remaining High findings are `sharp` (requires native-source compliance review for a safe upgrade), `@anthropic-ai/mcpb`, and its `node-forge` dependency (npm reports no remediated version for the latter two). No audited source inventory was weakened or security issue suppressed to achieve a green check.
- The 93 server-reported Security Hotspots and remaining inherited Sonar code smells have **not** been individually reviewed or verified cleared. The full 49-script UI suite was not performed, and no signed-in real ChatGPT browser acceptance was claimed.
