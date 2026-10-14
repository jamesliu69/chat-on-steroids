# Raspberry Pi Headless Server Implementation Plan

1. Add failing tests for Node-only credentials and server config/CLI behavior.
2. Refactor `secrets.ts` behind a runtime provider so Electron is dynamically loaded only for desktop storage; add a read-only headless provider for systemd credentials/environment.
3. Add server option parsing, data-directory/config preparation, browser-feature normalization, environment checks, and status formatting.
4. Add `src/server/index.ts` lifecycle: init/check/start, Core connection, signal shutdown, process/plugin/store flush.
5. Add the server build entry and npm scripts; ensure the output runs under plain Node.
6. Add systemd user-service generation/install support and server setup documentation.
7. Fetch/prepare bundled Linux ARM64 ripgrep/tunnel resources as required, run focused tests/typecheck/build, run a local manual-tunnel smoke test, then run the full verification suite and compare against the recorded baseline.
