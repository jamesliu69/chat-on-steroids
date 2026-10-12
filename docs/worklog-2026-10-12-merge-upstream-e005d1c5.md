# 接續合併上游至 e005d1c5

日期：2026-10-12

## 範圍與來源

- 使用者要求將 `e005d1c5d96744ac0e565912dd0ad25ee0e4dba8` 接續合併到自己的 fork。
- 合併前 fork `main`：`cd19053cca932254ed2deb1296f11e3067b05a3c`，工作目錄乾淨，與 `origin/main` 一致。
- 遠端 `origin`：`jamesliu69/chat-on-steroids`；`upstream`：`totec448-spec/chat-on-steroids`。只向 fork 推送。
- 共同祖先：`c8a050fa06b2983876292a1600ef9f27a7a5986b`；本次納入其後 13 個上游提交，保留原提交與作者。
- 整合分支：`merge/upstream-e005d1c5-20261012`。
- 執行 `git merge --no-ff --no-commit e005d1c5d96744ac0e565912dd0ad25ee0e4dba8`，待驗證後建立 merge commit。

## 實際新增的上游變更

- package、lockfile、main 與 extension 版本對齊 2.1.35；bridge protocol 仍為 14。
- 加入 2.1.35 changelog、release notes、What's New 內容及 12 種語言翻譯。Release notes 所描述的部分功能已在先前合併中存在，不代表本次新增了全部功能。
- 修正緊接一般文字或清單文字後的多行公式：開頭獨立成 Markdown 區塊，避免公式中的單獨 `=` 行被當作標題；保留 fenced code 與原始來源。
- 當只核准 repository 本身、沒有可容納旁邊 worker checkout 的核准父資料夾時，提供不含實際路徑的操作說明；權限邊界不擴大。
- 更新 held revival command 測試以使用預設 shell 與 Node，並強化 wake-finished 測試的前置狀態證明。

## 衝突處理

1. `scripts/verify-whats-new.cjs`：採用上游 2.1.35 fixture 與斷言，release notes 連結仍指向 `https://github.com/jamesliu69/chat-on-steroids/releases/tag/v2.1.35`。
2. `test/bridge.test.ts`：雙方修正都要求 worker 先真正恢復再 finish。採用上游直接向 owner 提供新 turn 證據的做法，明確斷言 `revived === true`，且讀取恢復前 `pendingWorkerRevivals()` 已為空；沒有修改 production worker 狀態機。

`AGENTS.md` 同步更新合併基準、版本、多行公式及 worktree 拒絕說明。

## Fork 合約複核

以合併前 `cd19053c` 為基準比較實際檔案差異；以下 owner 未被本次上游內容取代。

| 合約 | 本次檢查 |
| --- | --- |
| Raspberry Pi / headless MCP | `src/server/` 無差異；建置輸出包含 `out/main/server.js`。 |
| Headless 部署 | `server:*` scripts 保留；tmux、systemd 與共用 launcher 檔案無差異。 |
| Windows portable | `dist:win:portable` 保留；release workflows 與 packaging owner 無差異。 |
| Fork 更新來源 | package homepage、updater owner 不變；extension recovery URL 仍屬 fork；What's New 測試採 fork 的 2.1.35 連結。 |
| Artifact 下載 | MCP 區域只增加 worktree refusal hint，其餘 artifact 宣告與實作沒有差異。 |
| Session 工具 | `src/main/mcp/session-tool.ts` 及相關 MCP 宣告保留。 |
| 身分與安全邊界 | agents、workspace、connector identity、kernel、inbound、call-context、exec custody 與 extension/content.js 無差異。 |
| 預設值與 lifecycle | config、plugin refresh owner、shutdown、window lifecycle 無差異；使用者已儲存選擇未改動。 |
| 這次新增的提醒入口 | `cd19053c` 的 reminder、index.html、main.ts、styles.css 無差異；12 種語言中原有提醒翻譯保留。 |

## 驗證紀錄

- 修改前對相關來源、測試、腳本、workflow 與文件執行 `sonar analyze secrets`：均回報 No secrets found；CLI 另有伺服器認證與 HTTP 認證警告。
- `npm run typecheck`：通過。
- `npm test -- --run test/bridge.test.ts -t 'rechecks an absent worker wake after its session read yields'`：7 項通過；同檔其餘 667 項因名稱篩選略過。
- `npm run build`：通過，包含 main、plain-Node server、preload 與 renderer；Vite 有既有的靜態／動態匯入分塊警告。
- `npm run verify`：執行中，完成後補記實際結果。
- `npm run verify:ui`：待完整測試的 native 階段結束後執行，避免 Electron UI 與 Desktop 測試爭用前景。

本次範圍為來源合併、驗證與 fork 同步；不包含製作安裝包、安裝或已安裝程式／真實瀏覽器的端到端驗收。
