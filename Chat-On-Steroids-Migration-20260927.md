# Chat On Steroids 遷移資料

產生日期：2026-09-27

來源電腦：CosWin / Windows

來源設定目錄：

```text
C:\Users\fly20\AppData\Roaming\chat-on-steroids
```

## 目前連線設定

```json
{
  "roots": [
    {
      "name": "repo",
      "path": "D:\\Repo"
    }
  ],
  "capabilities": {
    "browse": true,
    "search": true,
    "read": true,
    "metadata": true,
    "create": true,
    "edit": true,
    "move": true,
    "deleteFile": true,
    "command": true,
    "screen": true,
    "control": true,
    "clipboardRead": true,
    "clipboardWrite": true
  },
  "readOnly": false,
  "tunnel": {
    "kind": "openai",
    "tunnelId": "tunnel_6aa5ebd7427c8191922894997adf9fdf",
    "desktopTunnelId": "",
    "pluginsTunnelId": "tunnel_6aa6055d5d308191a558b7ee376cf0ee",
    "binaryPath": ""
  },
  "ui": {
    "autoContinue": true,
    "chatBrowser": "chrome",
    "developerMode": true,
    "finishTool": true,
    "planBackend": "chatgpt",
    "finishAction": "notify",
    "finishLeadMinutes": 5,
    "backgroundChats": true,
    "browserBridgePort": "auto",
    "browserOnly": false,
    "autoRefreshPlugins": true,
    "minimizeToTray": true,
    "autoConnect": true,
    "startAtLogin": true,
    "privacyScreenshots": true,
    "theme": "dark"
  },
  "sessions": {
    "record": true,
    "retainDays": 0,
    "advisoryTokens": 250000,
    "limitTokens": 333333
  },
  "compaction": {
    "auto": true,
    "autoTokens": 250000
  },
  "multiAgent": {
    "enabled": true,
    "defaultModel": "5.6",
    "defaultReasoning": "xhigh",
    "maxWorkers": 1,
    "allowUnattributedCalls": true,
    "recoverAgentTabs": false
  },
  "goal": {
    "impulseMinutes": 0,
    "includeToolCalls": true,
    "enabled": false,
    "backend": "chatgpt",
    "loopBackend": "chatgpt",
    "helperModel": "5.6",
    "helperReasoning": "high",
    "mode": "goal",
    "provider": {
      "kind": "custom",
      "baseUrl": ""
    },
    "model": "z-ai/glm-5.3",
    "reasoning": "high"
  },
  "mcp": {
    "instructions": ""
  }
}
```

## 目前確認的資料目錄

```text
config.json
plugins\
skills\
sessions\
state\
extension\
input-attachments\
```

目前 `state\` 中確認存在：

```text
blocked-chats.json
bridge-commands.json
chat-models.json
chatgpt-permission-notice.json
continuations.json
goal-objectives.json
goal-replies.json
goal-switches.json
plugin-refresh.json
plugins.json
projects.json
request-correlations.json
request-plans.json
retired-workers.json
session-input.json
swarm.json
usage-cache.json
```

## 密鑰與憑證

這台電腦存在 Windows OS 加密的 credential store。

目前遠端工具的安全檢查阻擋了明文解密與匯出，因此本文件 **不包含實際 API Key、Bridge Token、Plugin credential 或 OAuth token 的明文值**。

原始加密 credential store 受 Windows DPAPI / Electron safeStorage 保護，直接複製到另一台 Windows 電腦通常無法解密，因此不能把它視為可攜式密鑰備份。

## 新電腦還原

1. 安裝 Chat On Steroids。
2. 完全關閉 Chat On Steroids。
3. 將上方設定套用到新電腦的 `%APPDATA%\chat-on-steroids\config.json`。
4. 若新電腦專案目錄不是 `D:\Repo`，修改 `roots[0].path`。
5. Core Tunnel ID 使用：
   `tunnel_6aa5ebd7427c8191922894997adf9fdf`
6. Plugins Tunnel ID 使用：
   `tunnel_6aa6055d5d308191a558b7ee376cf0ee`
7. Desktop Tunnel ID 目前沒有設定。
8. Browser 使用 Chrome，Bridge Port 使用 `auto`。
9. Auto Connect 與 Start At Login 均為啟用。
10. 明文密鑰必須從原始來源重新輸入，或使用 Chat On Steroids 未來提供的可攜式 credential export/import 功能。

## 注意

這份文件可以還原一般設定與連線識別資料，但因明文 credential 無法由目前遠端工具取得，還不能做到完全零設定跨機器還原。
