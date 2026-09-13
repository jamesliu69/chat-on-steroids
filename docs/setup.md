# Setup and reference

[Back to the overview](../README.md)

## Quick start

1. **Install and open CoS.** Choose the download for your operating system and CPU.
2. **Choose what ChatGPT may access.** In **Settings → Workspace**, approve a project folder and review the tool permissions.
3. **Connect the local tools.** Configure a tunnel in **Settings → Setup**, press **Connect**, then add the **Core** app in ChatGPT's Developer mode.
4. **Load the companion extension.** Press **Open extension folder**. In `chrome://extensions`, enable Developer mode, choose **Load unpacked** and select that folder. Pairing is automatic.
5. **Start a task.** Choose a project and model in CoS, write your request and send it.

Want screen and keyboard control? Enable **Desktop** permissions and connect its separate app. On macOS, also grant Screen Recording and Accessibility in System Settings.

**After an update:** reload the companion extension and refresh the CoS apps in ChatGPT when prompted. These are two separate steps.

## Tunnel setup

### OpenAI Secure MCP Tunnel

1. Create a tunnel in [Platform → Tunnels](https://platform.openai.com/settings/organization/tunnels), in the same workspace you use in ChatGPT.
2. Create a **Restricted** [API key](https://platform.openai.com/settings/organization/api-keys) with **Tunnels: Read** and **Tunnels: Use**.
3. Enter the tunnel ID and key in CoS and press **Connect**.
4. In ChatGPT, enable Developer mode under **Settings → Apps → Advanced settings**, then create a custom app of type **Tunnel**. Review and enable its actions.

Core, Desktop and Plugins are separate connectors. Configure each surface you enable. Release packages include the pinned, checksum-verified `tunnel-client`.

### Other tunnels

**Cloudflare quick tunnel:** connect in CoS and use the displayed public URL as the MCP server URL in ChatGPT. The random path is a secret and changes on restart.

**Your own HTTPS tunnel:** forward to the loopback URL shown by CoS and preserve its secret path. Treat the resulting URL like a password.

## Headless Linux ARM64 server

A Raspberry Pi or other Linux ARM64 host can run Core without Electron, X11, Wayland or a desktop session. The headless runtime reuses the normal MCP, approved-root sandbox, command runner, plugins and tunnel implementation, but disables features that require the companion browser: Desktop control, session recording, Compact & Resume, Goal/Loop, finish injection and browser workers.

Build the server on the ARM64 host:

```sh
npm ci
npm run rg
npm run tunnel
npm run build
```

Initialize a dedicated server configuration. This example exposes the repository parent as `/repos` and uses a local/manual tunnel:

```sh
npm run server:init -- --root /home/pi/github --name repos --tunnel manual
npm run server:check
npm run server -- start
```

If you want to keep the server in a detachable tmux session so leaving SSH does not stop it:

```sh
npm run server:tmux
tmux attach -t chat-on-steroids
```

To force a clean restart in the background later:

```sh
npm run server:tmux:restart
```

To start that detached session at boot, add this to the same user's crontab (`crontab -e`), using the absolute Node path from `command -v node`:

```cron
@reboot cd /home/pi/github/chat-on-steroids && /usr/bin/node scripts/run-server-tmux.mjs --restart
```

The launcher is idempotent: if `chat-on-steroids` already exists, it does not start a second server. Use `tmux attach -t chat-on-steroids` whenever you want to inspect its output. The existing systemd setup below remains the better choice when automatic restart and service supervision are more important than tmux access.

The MCP listener always binds to `127.0.0.1` and uses a new random secret path on each process start. Manual and Cloudflare modes write the current connector endpoint to `~/.config/chat-on-steroids-server/endpoint.json` with mode `0600`; the URL is deliberately not printed into long-lived service logs. Treat that file like a credential.

For a Cloudflare quick tunnel, initialize with `--tunnel cloudflared`. The bundled, checksum-verified `cloudflared` is prepared by `npm run tunnel`; after the server connects, read `endpoint.json` for the current public URL.

For OpenAI Secure MCP Tunnel, keep the machine-specific tunnel id in the repository-local `.env` file. The server automatically loads it for `init`, `check` and `start`; `.env` is ignored by Git:

```sh
cat > .env <<'EOF'
COS_TUNNEL_ID=tunnel_0123456789abcdef0123456789abcdef
EOF
npm run server:init -- --root /home/pi/github --name repos
```

`COS_TUNNEL_ID` switches the headless runtime to the OpenAI transport and overrides a tunnel id previously persisted in the server config. An explicit `--tunnel-id` supplied to `server:init` still wins for that initialization command.

For an interactive development run, `OPENAI_API_KEY` may be supplied in the server process environment. For systemd, use a systemd credential instead so the key is not stored in the unit or CoS config:

```sh
mkdir -p ~/.config/chat-on-steroids-server
systemd-ask-password "OpenAI tunnel API key" | \
  systemd-creds encrypt --name=openai-api-key - ~/.config/chat-on-steroids-server/openai-api-key.cred

mkdir -p ~/.config/systemd/user/chat-on-steroids-server.service.d
cat > ~/.config/systemd/user/chat-on-steroids-server.service.d/credentials.conf <<'EOF'
[Service]
LoadCredentialEncrypted=openai-api-key:%h/.config/chat-on-steroids-server/openai-api-key.cred
EOF
```

Install the user service after `npm run build`:

```sh
npm run server:install-service
systemctl --user daemon-reload
systemctl --user enable --now chat-on-steroids-server
systemctl --user status chat-on-steroids-server
```

Use `journalctl --user-unit chat-on-steroids-server -f` for service logs. If the service must remain up after the account logs out, enable user lingering for that account with `loginctl enable-linger`. The installer also accepts `--data-dir <path>`, `--print`, and `--enable-now`; it never writes an API key.

The server data directory defaults to `~/.config/chat-on-steroids-server`. Set `COS_SERVER_DATA_DIR` or pass `--data-dir` to use another location. Run `node out/main/server.js check --data-dir <path>` before service startup when using manual or Cloudflare mode; OpenAI credentials loaded by `LoadCredentialEncrypted` exist only inside the systemd service process.

## Permissions and connectors

| Connector | What it adds |
| --- | --- |
| **Core** | Local files, patches, terminals, generated-file downloads, session history, plans and workers. Available on all supported platforms. |
| **Desktop** | Screen inspection, mouse, keyboard and clipboard. Windows and macOS; macOS requires explicit enablement and OS permissions. |
| **Plugins** | External MCP tools such as Blender, Playwright and Memory, plus custom local or remote servers. [Plugin guide](plugins.md). |

You choose the approved folders and capabilities. File tools enforce those roots; shell commands run with your normal user privileges. Desktop access applies to the desktop, and external plugins have their own permissions. **Read-only mode** disables writes, command execution and desktop control.

History is stored locally, with recording on and 30-day retention by default. Credentials use the operating system's secure storage. Review permissions before connecting: fresh installs enable Core capabilities and two workers; Windows also starts with Desktop permissions enabled.

[Security policy](../SECURITY.md) · [Tool reference](tool-surface.md) · [Architecture](../AGENTS.md)

## Sessions, workers and Astra

**Session history** belongs to the local session, not a particular ChatGPT tab. The companion records messages and the actual local tool results so the app and the model can read earlier work.

**Compact & Resume** asks for a handoff, starts a fresh provider conversation and rebinds that same session. Task and worker history move with it. Automatic compaction uses configured local estimates and eligible live work; Pro models never auto-compact.

**Workers** keep their conversation when they finish. Send a follow-up to reuse one. The default is two simultaneous workers per family, configurable up to eight. Idle owned tabs can be reused or closed after fresh checks; the durable worker history remains. Drafts, active work and pins are protected.

**Goal** can decide the task is complete and send nothing. **Loop** continues within the brief until disabled. Both support ChatGPT helpers or an optional API backend.

**Astra's finish boundary** can receive queued instructions, plan checkpoints and automatic follow-ups through tools within the same working turn when Session finish is enabled. You can end the turn from the composer. This does not remove provider usage or context limits.

## Troubleshooting

- **Missing or stale tools:** refresh the relevant CoS app in ChatGPT. Reloading the Chrome extension is a separate action.
- **Extension version mismatch:** reload the unpacked companion after updating CoS, then reload the ChatGPT page.
- **Models missing:** use **Reload ChatGPT models**. The picker reflects availability in your signed-in account.
- **`UNIDENTIFIED_CALLER`:** use that conversation in the paired browser so the extension can prove its request identity. CoS does not guess from the active tab.
- **`COMPACTION_IN_PROGRESS`:** let the source chat finish its handoff. Work continues in the replacement conversation.
- **Linux credential storage unavailable:** unlock GNOME Keyring or KWallet, then restart CoS.
- **A chat will not stop:** **Block** revokes local tools for that exact conversation. It does not claim to cancel the provider's generation.

The MCP connector uses ChatGPT's Developer mode and tunnel interfaces. The companion also observes and automates the browser UI; this is not a public ChatGPT automation API. Your account's [terms and policies](https://openai.com/policies/) apply. Do not use it to evade limits or safety controls.

## Build from source and contribute

## Development

```sh
npm ci
npm run dev
npm run verify
```

Read [AGENTS.md](../AGENTS.md) before changing the app and [CONTRIBUTING.md](../CONTRIBUTING.md) before opening a PR.

## Building

```sh
npm run dist:x64          # Windows x64
npm run dist:arm64        # Windows ARM64
npm run dist:mac:x64      # macOS Intel
npm run dist:mac:arm64    # macOS Apple silicon
npm run dist:linux:x64    # Linux x64
npm run dist:linux:arm64  # Linux ARM64
```

Build on the target OS. The release workflow uses native runners for all six targets, checks the packaged runtimes and assembles the complete artifact set with checksums and corresponding native library sources.

---

[MIT licensed](../LICENSE). Not affiliated with or endorsed by OpenAI. ChatGPT and Codex are OpenAI trademarks.
