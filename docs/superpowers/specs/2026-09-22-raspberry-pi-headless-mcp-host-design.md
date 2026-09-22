# Raspberry Pi 5 Headless MCP Host Design

## Status

Approved design for implementation on `feat/raspberry-pi-headless-mcp-host`.

## Goal

Provide a low-power, screenless Linux ARM64 runtime for Raspberry Pi 5 that exposes the existing Chat On Steroids Core MCP surface through the existing connection and tunnel stack, without starting Electron, a `BrowserWindow`, a tray, X11, Wayland, or the browser companion extension.

The runtime is a server host for local files, approved-root search, patches, terminal processes, plans, and explicitly configured plugin tools. It is not a replacement for the desktop workspace or ChatGPT browser orchestration.

## Scope

The headless host must:

- run as plain Node.js on Linux ARM64;
- reuse the existing MCP declarations, kernel, capability checks, approved-root sandbox, terminal manager, tunnel lifecycle, plugin manager, durable store, and shutdown owners;
- keep its state in a dedicated server data directory rather than the Electron desktop user-data directory;
- provide `init`, `check`, and `start` commands;
- support systemd user services and an optional tmux launcher;
- read server credentials from systemd credentials or environment variables without persisting them in plaintext;
- disable features that require Electron, a renderer, a ChatGPT browser document, or native desktop control;
- expose clear status and failure evidence through stdout, stderr, logs, and an endpoint snapshot;
- fail closed when the host is not Linux ARM64, an approved root is missing, the bundled search binary is unavailable, or the configured tunnel credential/binary is unavailable.

The first release does not need to provide a browser, native screen/input control, session recording, Goal/Loop, Compact & Resume, browser recovery, or browser-backed multi-agent workers on the Pi.

## Non-goals

- Do not make Electron run in hidden, Xvfb, or Chromium headless mode.
- Do not fork the MCP tool implementations or create a second permission model.
- Do not make a public unauthenticated HTTP MCP listener.
- Do not silently reuse desktop encrypted credentials when the server is running outside Electron.
- Do not claim that server-side tool completion is a ChatGPT browser turn completion.
- Do not change the existing desktop startup, renderer, extension, or browser lifecycle behavior.

## Architecture

Add a Node-only entrypoint alongside the Electron main entrypoint:

```text
node out/main/server.js
  |
  +-- server CLI / lifecycle / signals
  |
  +-- existing config + durable/session stores
  +-- existing MCP connection and tunnel lifecycle
  +-- existing Core registrar/kernel/tool handlers
  +-- existing terminal/plugin owners
  |
  +-- dedicated server data directory
  +-- systemd credential or environment secret provider
```

The new entrypoint must not import Electron at module evaluation time. Shared secret code must load Electron `safeStorage` dynamically only for the desktop path, while server mode installs a read-only provider before any secret lookup. Shared modules must continue to expose one owner for each durable fact.

The server runtime owns startup and shutdown for resources it starts. It must initialize config, secrets path, session store, durable store, logging, and the read-only secret provider before loading configuration or starting the connection. It must initialize the plugin manager only after configuration validation succeeds. It must stop connection admission first, then terminate owned terminal/plugin work, flush recorder/session/durable state, flush logs, and exit with the signal's conventional success status.

## Server configuration and CLI

The CLI is:

```text
server init --root <absolute-path> [--name <virtual-name>]
             [--data-dir <path>]
             [--tunnel manual|cloudflared|openai]
             [--tunnel-id <id>]
server check [--data-dir <path>]
server start [--data-dir <path>]
```

`init` validates the absolute approved root, bounded virtual name, tunnel kind, and data directory; creates the existing config schema with a Core-oriented capability set; and never writes an API key.

`check` validates Linux ARM64 execution, approved roots, search binary availability, and tunnel prerequisites without starting a public tunnel or long-lived server. It prints only non-secret state.

`start` loads and normalizes the config, applies non-persistent environment overrides, validates prerequisites, starts the existing connection lifecycle, prints only deduplicated state transitions, and remains alive until `SIGINT` or `SIGTERM`.

The default server data directory is `~/.config/chat-on-steroids-server`, overridable through `COS_SERVER_DATA_DIR` or `--data-dir`. The service and tmux launchers must pass an explicit resolved data directory and a stable project/install working directory.

Server normalization must preserve approved roots and Core permissions while forcing these settings:

- all native Desktop capabilities off;
- browser-only mode on;
- Electron/browser startup, tray, login startup and background browser chats off;
- session recording and automatic compaction off;
- Goal/Loop and finish injection off;
- multi-agent browser workers off;
- unattributed Core calls explicitly allowed because there is no browser conversation identity to prove, while known blocked/retired ownership rules remain enforced by the existing kernel;
- external plugin settings remain subject to their existing explicit configuration and lifecycle.

## Credential handling

The server secret provider is read-only. For each supported server credential it checks:

1. the file under `$CREDENTIALS_DIRECTORY` (systemd credential injection);
2. the corresponding environment variable.

The file value wins, surrounding whitespace is removed, empty values are absent, and unexpected file errors are reported. The provider never writes a secret, and `setSecret`, `clearSecret`, and `deleteAllSecrets` must reject in server mode with an actionable message.

The OpenAI tunnel credential is supplied through `openai-api-key` or `OPENAI_API_KEY`. Other providers may use their existing explicit server environment names, but unsupported browser/plugin secret classes must fail closed rather than being invented. Child terminal processes must continue to scrub connector credentials from their environment.

## Transport and endpoint evidence

The server reuses `connection.ts` and the existing MCP server. A manual tunnel mode remains local-only and is intended for validation. Cloudflared/OpenAI modes use their existing verified binaries and credentials. The server writes an atomic `endpoint.json` in the server data directory containing only non-secret state: connection state, Core connector name, tunnel kind, and applicable local/public URL.

The listener remains bound according to the existing connection owner and is not widened to an arbitrary LAN address. Public reachability is provided only by the configured tunnel/authentication path. A successful process start or tunnel spawn is not reported as connected; the existing status transition remains the source of truth.

## Service and low-power operation

The generated systemd user unit must use:

- `Restart=on-failure` with a bounded restart delay;
- `KillSignal=SIGTERM` and a bounded stop timeout;
- `UMask=0077`, `NoNewPrivileges=true`, and `PrivateTmp=true`;
- a stable `WorkingDirectory` and absolute Node/server paths;
- no secret values embedded in the unit text;
- a documented systemd credential setup path.

The tmux launcher is an optional interactive fallback. It must pass arguments through `execFileSync` without a shell, refuse invalid session names, avoid duplicate sessions, and support an explicit restart operation.

## Build and packaging

`electron-vite` must emit both the existing Electron main bundle and `out/main/server.js`. The server bundle must be loadable by plain Node without resolving Electron during module evaluation. `npm run build` remains the source-level build gate.

The Linux ARM64 package path remains the release path for native resources. Development/source-tree startup must locate the target Linux ARM64 `rg` and tunnel binaries from an explicit working directory or packaged resources. The packaging scripts remain the authorities for pinned target checksums and native prebuild staging.

## Testing and acceptance

Add focused tests for:

- absolute root, bounded name, tunnel, data-directory, and unknown-option CLI validation;
- environment tunnel overrides and server normalization;
- systemd credential precedence, environment fallback, empty values, read-only mutation rejection, and unsupported secret keys;
- tmux argument safety, duplicate-session handling, and restart behavior;
- server entry build output and absence of an Electron static import in the Node entry path;
- Linux/ARM64 prerequisite failure messages and non-secret status output where practical.

Required validation sequence:

1. run the new focused tests and watch each new behavior fail before implementation;
2. run `npm run typecheck`;
3. run `npm run build`;
4. run `node out/main/server.js check` against an isolated manual-tunnel fixture/config;
5. run the full `npm test` suite and `npm run verify` where the host permits the repository's existing release checks;
6. on Raspberry Pi 5, perform a native `server init`, `server check`, manual local start/stop, and systemd start/stop smoke test;
7. distinguish source/build/package evidence from native Pi live evidence in the handoff.

The completion bar is a working Core-only server with tested negative paths, a reproducible ARM64 build path, and documentation that does not imply browser or native Desktop support in headless mode.
