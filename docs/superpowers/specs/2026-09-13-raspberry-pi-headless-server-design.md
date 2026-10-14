# Raspberry Pi Headless Server Design

## Goal

Add a Linux ARM64 headless Chat On Steroids runtime that can run continuously on Raspberry Pi under systemd without X11, Wayland, BrowserWindow, Tray, or Electron lifecycle ownership. Keep the existing Electron desktop application unchanged in behavior.

## Supported server surface

The first server runtime exposes the existing Core MCP tools: approved-root file access, search, patching, command execution, artifact saving, and configured external MCP plugins. Desktop automation is unavailable on Linux. Browser-dependent session recording, Goal/Loop, Compact & Resume, finish injection, and multi-agent browser workers are disabled in server mode because there is no companion browser on the server host.

Headless calls are explicitly allowed as unattributed calls. Approved roots and capability checks remain the security boundary; the MCP listener remains loopback-only and keeps its existing per-start secret path.

## Runtime architecture

- Add a Node-only server entry point alongside the existing Electron main entry point.
- Reuse the existing config, MCP server, connection/tunnel lifecycle, filesystem sandbox, command manager, session/durable stores, plugin manager, and logger.
- Do not fork or duplicate MCP tool implementations.
- Server mode uses a separate data directory from the desktop app.
- Server startup normalizes browser-only settings off and ensures `allowUnattributedCalls=true`.
- Graceful SIGINT/SIGTERM shutdown stops MCP/tunnel admission, terminates owned commands/plugins, flushes recorder/session/durable state, then flushes logs.

## Credentials

Desktop continues to use Electron `safeStorage` unchanged. The shared secret facade must no longer statically import Electron so that Node can load the Core graph.

Server mode installs a read-only secret provider. For the OpenAI tunnel key it reads, in priority order:

1. a systemd credential file under `$CREDENTIALS_DIRECTORY/openai-api-key`, then
2. `OPENAI_API_KEY` from the server process environment.

The server never writes these values into config or a plaintext file. Child commands already strip `OPENAI_API_KEY`, so MCP shell commands do not inherit the tunnel credential.

## Configuration and CLI

Provide a server CLI with:

- `init --root <absolute-path> [--name <virtual-name>] [--data-dir <path>] [--tunnel manual|cloudflared|openai] [--tunnel-id <id>]`
- `start [--data-dir <path>]`
- `check [--data-dir <path>]`

`init` writes the existing CoS config schema in the server data directory with the requested approved root and a Core-oriented capability set. It does not write API keys.

`start` loads and normalizes the server config, initializes stores/plugins, starts the existing connection/tunnel lifecycle, reports safe state transitions to stdout/journal, and stays alive until SIGINT/SIGTERM.

`check` validates architecture/OS, config, approved roots, tunnel prerequisites, and ripgrep availability without starting a public tunnel.

## Build and deployment

Use a second main-process Rollup entry so `electron-vite build` emits `out/main/server.js`. `node out/main/server.js ...` must run without an Electron process.

Provide a systemd user-service template and an installer helper that resolves the current Node executable/project path. The service must restart on failure, use a dedicated data directory, and never print secrets.

## Validation

- Unit tests for server secret resolution, argument/config normalization, and server-only settings.
- `npm run typecheck`.
- Focused new tests.
- `npm run build`, then verify `node out/main/server.js check` and a local-only `manual` start/stop on the Raspberry Pi.
- Full test suite; distinguish any pre-existing Pi-only baseline failures from regressions.
