# 合併 upstream 7c2ddc8

日期：2026-10-06。使用者指定合併 `7c2ddc8ce1bc2d692f13eb596f12945507cd4a4c`。
目標分支：`merge/upstream-a9d2a83d-20261006`；原 HEAD：`1ea3264e2e4cf14c764dd792834ff4c1c6090d5d`。
此次只完成本機合併，沒有推送、安裝、部署或發布。

## 衝突處理

- `test/connection.test.ts`：保留 fork 的 headless plan 與 Core tunnel server identity 測試，同時加入上游 connection loss notification 測試。
- `scripts/verify-message-reactions.cjs`：保留本地 viewport、動畫等待與額外幾何欄位，加入上游連續 frame 幾何穩定讀取。

## Fork 保留核對

`package.json`、config、MCP、server、release workflows 與 Fiber 未受本次合併修改。
headless 與 tmux/systemd helpers、portable 發布、artifact/session 工具、plugin refresh Off、recording/retention 與 minimizeToTray 設定保留。
`update.ts` 新增 stale check，仍使用 `jamesliu69/chat-on-steroids`。
Fiber 仍要求 window source 與 same-origin；connection 的 headless override 與 serverNameScope 保留。
對應 server、packaging、artifact-download、plugin-refresh、update、Fiber、window-lifecycle 與 connection 測試通過；完整 MCP 套件有失敗，不能宣稱所有工具驗收通過。

## 實際驗證

- 依 lockfile 執行 `npm ci` 成功；第一次與建置同時執行遇 esbuild.exe EPERM，待建置結束重跑成功。
- `npm run build`、TypeScript、public-history privacy、license notices 與 native source archive checks 通過。
- `git diff --cached --check` 通過。
- `npm run verify` 失敗：308 個 test files 通過、5 個失敗、5 個跳過；8,021 tests 通過、15 失敗、48 跳過。因前段失敗，最後 computer/mcp-shutdown 指令沒有執行，另納入下列重跑。
- 單 worker 重跑 `mcp`、`code-mode-mcp`、`exec-completed-results`、`input-delivery-integration`、`tool-artifacts`、`computer`、`mcp-shutdown`：4 files 通過、3 失敗；534 tests 通過、11 失敗、6 跳過。失敗仍集中於前三個 MCP/process suites，尚未對原 HEAD 重現以判定是否為合併回歸。
- `npm run verify:ui`：41/48 通過。失敗腳本為 chat-stays-at-end、cos-sign-in（openssl fixture certificate）、follow-output、history-scroll、message-reactions（fixture 未就緒）、pet-overlay-electron、workspace-terminal（layout animation timeout）。尚未完成基線比較或修復。

完整執行日誌保留在本機 TEMP：`cos-merge-7c2ddc8-{verify,retest,build,ui}.log`。
目前證據僅涵蓋 source、tests、build 與離線 Electron fixtures；不代表已安裝版本、真實 Chrome/ChatGPT 或發布驗收。
