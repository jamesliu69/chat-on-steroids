# 2026-10-12 合併上游 495848f（deleted-chat、tab groups、dictation、project create）

## 範圍與來源

將上游 `main`（`495848f4ed1beb4ebb42dde4519b8ad2ae8999f1`）併入個人主線
（`c80b64b5`），產生雙親合併 `ef055e8b`。此範圍自上游帶入 50 筆提交，
主要包括：

- **#1311 deleted-chat**：ChatGPT 以 HTTP 404 `conversation_deleted` 回應已刪除
  聊天的歷史請求與送出；頁面將該 turn 以失敗收尾、claimed message 以真實原因
  失敗，app 結束所有仍等待該聊天的訊息。
- **#1300/#128 tab-group placement**：背景分頁群組放置、keep-awake Web Lock。
- **#1302 Windows 語音聽寫**：`src/main/dictation.ts`、preload 固定 API 與
  renderer 控制。
- **#1292/#1176 ChatGPT Project 自動建立**：新 CoS project 的原生 Project 連結。
- **#1304/#1301** 送進執行中答案的訊息排序；**#1303** project files watcher
  resync；**#1306** first-turn link；**#1307** own Core 優先於名稱；
  **#1309** idle tab 說明文字；**#1298** macOS 區域網路隱私描述；
  **#1310** 文件正確性稽核。

版本宣告沿上游 **2.1.34**（`package.json`、`src/main/version.ts`、
`extension/manifest.json` 一致），`BRIDGE_PROTOCOL = 14` 未變。合併統計
84 檔案、+6000/−271。合併本體於 2026-10-12 06:43 完成，本 worklog 補記
後續分析整合與驗證。

## 分析整合（AGENTS.md）

- §7 的 deleted-chat 段落（404 `conversation_deleted`、turn 失敗、
  `CONVERSATION_DELETED` 結束等待訊息、renderer 命名「Chat deleted in
  ChatGPT」）由上游 commit `a922ef11` 自帶，隨合併進入，未另改寫。
- 表頭基準行為 fork 自有內容（上游 AGENTS.md 無此行），合併時未更新，
  本次補上：targeted merge updates 2026-10-05 → **2026-10-12**（標註上游
  `495848f4`、合併為 `ef055e8b`），App/extension 2.1.27 → **2.1.34**。

## 驗證（git 層級；文件變更依 §19 以文件檢查為準）

- `git log --right-only ef055e8b...495848f4` 為空：上游端無遺漏提交。
- 工作區乾淨；`HEAD` = `origin/main` = `ef055e8b`（合併已發布於遠端主線）。
- Fork 契約抽查（§「Fork customizations」清單）：
  - `src/main/update.ts`、`package.json` 的更新路由仍指向 `jamesliu69`。
  - `src/server/index.ts`（無介面 Core 主機）與 `src/main/mcp/session-tool.ts`
    （`session` 工具）在位。
  - `src/main/mcp/tools-core.ts` 的 `saveArtifact`／`download_artifact` 在位。
  - `package.json` `dist:win:portable` 腳本與 `.github/workflows/latest-main.yml`
    （portable 發布）在位。
  - `extension/content.js` Fiber `postMessage` 驗證在位。
- 未執行 `npm test`／`npm run verify`：本次後續變更僅含文件（AGENTS.md 表頭、
  本 worklog），不觸及程式碼；合併當時的測試證據屬合併當次工作，不在此重複
  宣稱。
