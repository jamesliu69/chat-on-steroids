# Upstream v2.1.13 integration — 2026-09-15

## Scope and ancestry

- Integrated upstream `20198dd2b086a4af7525e131ae2a0e82579d1840` into local
  `becb5522e8e363358bfaa5ae15d126a37e0e248f` from merge base
  `f51acbccdd734f524799ea92bb747be765fba1e4`.
- Work was performed on `integration/upstream-v2.1.13`; safety ref
  `safety/pre-upstream-v2.1.13` retains the original local head.
- The upstream remote was used only for fetch/read/compare. Nothing was pushed or published.
- The final merge retains upstream ancestry and the contributor credit already carried by the
  upstream commits and `CONTRIBUTORS.md`.

## Combined behavior

The merge brings in the empty managed Skills library, text import, slash completion, prompt
expansion, model-picker compatibility, request-attribution improvements, canonical-question
error handling, Goal/Loop recovery changes, worker revival and clearer process/plugin failures.

The resolution retains the fork's existing Raspberry Pi/Linux ARM64 headless server, tmux and
service helpers, complete-quit behavior, Windows portable packaging, Traditional Chinese default
locale and full catalog, tunnel-scoped MCP server identity, `allowUnattributedCalls` fences,
anonymous process custody, superseded-worker guards, fork URLs and current CI/release targets.
App, extension and main declarations now agree on version `2.1.13`; bridge protocol remains `13`.

## Corrections made during integration

- `skills:openFolder` now revalidates the canonical managed Skills root immediately before the OS
  open action. Replacing the directory with a link fails without opening the replacement target.
- Backend skill selection now ends at the first blank separator, matching the composer command
  block. Later slash-shaped task prose is not expanded as another skill.
- An eligible opening can no longer silently drop linked project instructions when even the
  AGENTS framing and truncation notice exceed the remaining delivery budget. Preparation reports
  an explicit error while keeping Core, selected Skills and authored text mandatory.
- Added the 25 missing `zh-TW` setup/Skills strings. Renderer and Chromium fixtures explicitly
  test language-independent behavior instead of assuming upstream's English default.
- Restored both x64 and ARM64 portable Windows artifacts to the 2.1.13 release notes so the fork's
  release workflow and reviewed artifact list remain aligned.

## Validation evidence

### Before the merge

`npm run verify` exited 1 after 174 test files passed and 4 skipped (4,366 tests passed, 42
skipped, 8 failed). The failures were one code-mode process-custody timing case, one Windows
capture case, five plugin-process timing/cleanup cases and one long recorder estimate case.
Privacy, notices and typecheck had passed. This is the comparison baseline, not evidence about
the integrated source.

### Integrated source and tests

- New safety/locale prompt set: 4 files, 103 tests passed.
- Changed test set: 24 of 26 files passed with 2,392 tests passed and 7 skipped. The two
  renderer failures were English-default fixture assumptions and passed 13/13 after correction;
  the five plugin-process failures were from the same baseline timing family and the file passed
  alone (50 passed, 1 skipped).
- First repository-wide `npm run verify`: 179 files passed, 4 skipped; 4,489 tests passed, 42
  skipped, 2 failed. One failure identified the missing portable artifacts in 2.1.13 notes and
  was fixed; the packaging file then passed 25/25. The other was a baseline plugin timing case.
- Second repository-wide `npm run verify`: privacy, notices, typecheck, packaging resource
  envelope and 179 test files passed; 4,487 tests passed and 42 skipped. Three plugin process
  cleanup cases plus one unchanged `codex-runtime-parity` pipe timing case failed only in the
  full parallel run. Running those two files together passed 67 tests with 4 skipped.
- `npm run build` passed for main, preload and renderer production bundles.
- `node scripts/verify-skills-layout.cjs` passed 8 responsive dialog cases, produced 12 Chromium
  screenshots and completed import/autocomplete keyboard flows. Desktop dark and mobile light
  captures were inspected.
- `npm run dist:dir:x64` produced the Windows x64 unpacked package.
- `node scripts/smoke-packaged-runtime.mjs --platform win32 --arch x64` verified version 2.1.13,
  Electron 44.3.0, Sharp/libvips, node-pty, tree-sitter, ripgrep and the tunnel executables.
- Independent merge review found no integration-blocking Critical, High or Medium issue. It noted
  a pre-existing systemd quoting risk in unchanged `scripts/install-server-service.mjs`; that
  unrelated headless-service repair was not mixed into this merge.
- `npm audit --audit-level=high` reported 0 vulnerabilities.
- `git diff --check`, JSON parsing, conflict-marker checks and focused Core/MCP/finish/workspace
  suites passed during resolution.

## Evidence boundary

This work verifies source, tests, production bundles and one Windows x64 unpacked runtime. It does
not claim an installer, Windows ARM64/macOS/Linux artifact, installed payload, signed-in ChatGPT
page or live provider/device flow was exercised.
