# Merge headless MCP host into main

- Target: `main` at `b9221a2`; source: `10ceedbbb81cda710f05824ae6c9473b305b758b`.
- The branches had 52 and 18 unique commits. The merge resolved conflicts in configuration, MCP exposure, headless startup, launch scripts, declarations, and checks.
- Preserved main's explicit recording privacy choice, feature dependencies, server name scope, session search tool, and secret reset behavior. Brought in the headless host's request-scoped task plans, runtime tunnel override, private endpoint file, and ordered shutdown.
- Kept the existing package command aliases and service install `--enable-now` flag alongside the new entrypoints. The new service unit name is `chat-on-steroids.service` as documented in `docs/setup.md`.
- Validation: `git diff --check` and `npm run typecheck` passed; `npm run build` emitted `out/main/server.js`. No test suite or Linux ARM64 device run was performed for this merge.
