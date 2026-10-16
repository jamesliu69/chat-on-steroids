# 2026-10-15：合併 upstream/main（e86c13be）並保留 Fork 契約

## 範圍與合併來源

使用者要求把上游 `upstream/main` 併入個人 Fork 的 `main`；不得推送、rebase，或使用
`git reset`、`git checkout .`、`git clean` 等破壞性指令。

- 本機分支：`main`。
- 合併前 `HEAD`：`3009db64fd0184187eff2a9df921327e88329a37`（分支 `main`，追蹤 `origin/main`
  = `jamesliu69/chat-on-steroids`）。
- 合併來源 `upstream/main`：`e86c13be305c4d06c61b7f47fa5a39e0fbefb214`
  （`upstream` = `totec448-spec/chat-on-steroids`）。
- 共同祖先（merge-base）：`2d1c86efed698ed759e17efded4e12ca2d78b28e`。
- 合併提交：`7e189ea9`（雙親 `3009db64` 與 `e86c13be`）。
- 上游 9 個提交：`e86c13be`（PR #1508 權限關閉文字的在地化）、`56044dd7`、
  `5d0611df`（PR #1505 自動 Continue 趣味題外話改為 opt-in）、`b98bec0d`、
  `ef2601ba`（PR #1503 文件：工作區成員設定）、`f01d3b0a`、`eba9b8d0`
  （PR #1500 修正 Windows UI 卡頓：避免產生畫面外 DOM 與重複專案掃描）、`65bd4b93`、`907e489a`。
- 本次沒有執行 push、fetch、pull、reset、rebase、clean 或中止合併。

## 衝突處理

`git merge --no-ff upstream/main` 由 `ort` 策略自動完成，**沒有任何衝突**。上游 27 個
新增／修改檔案全部落在一般產品程式碼與文件，未觸及 Fork 契約區域：

| 檔案／區域 | 上游變更 | 處理決策 |
| --- | --- | --- |
| `src/main/config.ts`、`src/main/ipc.ts`、`src/shared/types.ts`、`src/renderer/main.ts`、`src/renderer/index.html` | 新增 `ui.playfulContinue`（預設 Off） | 一般產品程式碼，直接採用上游。 |
| `src/shared/recovery.ts`、`src/main/session/input.ts` | `recoveryMessage()` 的趣味題外話改為只有 `ui.playfulContinue` 開啟時才附上 | 一般產品程式碼，採用上游。 |
| `src/renderer/chat.ts`、`src/renderer/styles.css`、`src/renderer/index.html` | PR #1500：避免產生畫面外專案 DOM、快取專案歸屬查詢 | 一般產品程式碼，採用上游。 |
| `src/renderer/locales/*.json` | 新增工作區成員說明與 `playfulContinue` 的翻譯鍵 | 採用上游（各語系翻譯齊全）。 |
| `docs/setup.md` | 新增 Business／Enterprise／Edu 工作區成員設定段落 | 一般文件，採用上游。 |
| `AGENTS.md` | Continue 文本組合的描述更新（趣味題外話 opt-in） | 自動合併保留 Fork 的中文文件與契約段；並更新開頭基準來源行（見下）。 |
| `test/ipc.test.ts`、`test/renderer-state.test.ts`、`test/renderer-timeline.test.ts` | 新增／更新對應迴歸測試 | 採用上游。 |
| `test/recovery-message.test.ts` | 新測試檔 | 採用上游。 |

沒有需要「保留 Fork、併入上游改進」的衝突，因為上游完全沒有更動 Fork 契約區域。

## Fork 契約檢查

依 `AGENTS.md`「Fork customizations that must survive upstream merges」逐項確認合併後仍在：

1. **Raspberry Pi／headless MCP host**：`src/server/index.ts` 存在，未受影響。
2. **headless 部署工具**：`package.json` 的 `server:*` scripts 與
   `scripts/run-server-tmux.mjs`、`scripts/install-server-service.mjs` 未被觸及。
3. **Windows portable 散布**：`package.json` 的 `dist:win:portable` 仍在。
4. **Fork 自有 release／update**：`package.json` 與 `src/main/update.ts` 仍指向
   `jamesliu69/chat-on-steroids`。
5. **產物下載**：`saveArtifact`／`download_artifact` 未被觸及。
6. **session history MCP tool**：`src/main/mcp/session-tool.ts` 存在。
7. **Fork 身分／安全修正**：`src/main/mcp/` 未被觸及。
8. **Fork 政策預設／生命週期**：`src/main/config.ts` 的
   `autoRefreshPlugins` 仍為 `default(false)`，錄製與其他預設未變。

同時確認 `src/main/config.ts` 的保守回復預設（`ui` 覆寫）保留 `autoRefreshPlugins: false`。

## 驗證時另外修正的問題

- `AGENTS.md`：更新開頭基準來源行為本機 `3009db64` 與 upstream `e86c13be`，並註明稍早同日
  另有本機 `0c4e05f2` 與 Fork `9de46290` 的合併。

## 驗證紀錄

- `git status --short --branch`：合併前 `## main...origin/main`，乾淨樹。
- `git merge --no-ff upstream/main -m "合併 upstream/main (e86c13be) 並保留 Fork 契約"`：
  `Merge made by the 'ort' strategy`，exit 0，無衝突。
- `npm run typecheck`：`tsc --noEmit -p tsconfig.json`，exit 0。
- `npm test -- --run test/feature-parity.test.ts test/renderer-state.test.ts test/renderer-timeline.test.ts test/recovery-message.test.ts test/ipc.test.ts test/renderer-i18n.test.ts test/renderer-i18n-source.test.ts`：
  **7 組、647 項全部通過**，exit 0（涵蓋 feature parity、renderer 狀態／時間軸、新的
  Continue 文本回歸、IPC 設定開關、i18n 來源與翻譯鍵）。

## 證據界線

本次處理原始碼合併與本機驗證，沒有發布、安裝或推送。建置與自動化測試不代表已安裝版本、
真實 ChatGPT 帳號／瀏覽器或 Raspberry Pi 硬體驗收。未執行 `npm run build`、`npm run verify`
或 `npm run verify:ui`；本次合併未觸及原生模組、封裝或 UI 版面路徑以外的產品行為。
