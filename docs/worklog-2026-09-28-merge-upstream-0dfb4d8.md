# 整合 upstream 0dfb4d8 至 fork

## 範圍與基準

- Fork：`jamesliu69/chat-on-steroids`。
- 基準：`main` / `origin/main` 的 `9c5fa9ba78aea794f5283b8d57ddce252ac056e5`。
- 指定上游：`0dfb4d85159ea65c605f8ccfe81fa3ffb536d934`，固定此提交，不追逐後續 upstream/main。
- 共同祖先：`e628ca697f9952b4eac6cabab72285d023eb67d1`。
- 整合分支：`merge/upstream-0dfb4d8-20260928`，在獨立 worktree 合併；原 main 保持原位。
- 保留一般 merge 的兩個 parent 與上游原始作者歷史；推送及 PR 的目的地僅限此 fork。
- 套件與 extension 維持 `2.1.16`。上游的 `2.1.17` 內容仍屬 Unreleased 草稿。

## 整合內容與衝突決策

吸收指定上游的 Workspace Dock、Git Review、Skills Library、Desktop Pets、Phosphor 圖示、Settings / Usage 改版、extension 自動重新載入、原生 Send listener 清理，以及 Goal / Loop / Worker、附件與模型識別修正。

12 個 Git 衝突集中於 renderer、語系及測試。處理方式如下：

- 保留 fork 的繁體中文初始語言與既有儲存偏好處理，加入上游德文與巴西葡萄牙文；app 與 companion 不提供簡體中文 catalog。語言選單、完整性測試及相關驗證腳本同步對齊。
- 採用上游新 Settings 結構、圖示與 Dock，保留 fork 的外觀初始化和完全結束程式選項。
- `storeSetupApiKeyDraft()` 同時保留上游 Connect 前儲存草稿的流程，以及 fork 對完成 promise 的清理與儲存失敗狀態。回傳該次實際 save promise，避免完成清理後回傳 nullable 共用欄位。
- 保留上游 Desktop Pets atlas 驗證，移除自動合併產生的重複 `setLanguage` import。
- 英文文案測試明確設定英文，不改變產品的繁中預設；新增語系的無儲存空間測試驗證繁中初始值。
- 補齊完全結束視窗提示在八個非英文 catalog 的翻譯；保留所有來源字串與參數完整性檢查。
- 手動更新連結測試改為驗證 fork 發布來源；下載程式仍使用 `jamesliu69/chat-on-steroids`，沒有改回 upstream。

Pi headless host、systemd / tmux launcher、MCP compaction / latency 修正、Windows portable CI 與 VS Code 設定均保留。初次合併後對這些檔案與基準 HEAD 的內容比對沒有差異。

## 已執行的前置與回歸驗證

環境：Windows x64、Node v24.21.0、npm 11.19.0。

- 基準 main：typecheck 通過；headless、部署、MCP、繁中及 packaging 共 7 個測試檔、64 項測試通過。
- 整合 worktree：`npm ci --no-audit --no-fund` 成功；首次衝突處理後 typecheck 發現重複 import，修正後通過。
- renderer、語系、Dock、檔案面板及 atlas 重點回歸：18 個測試檔、186 項測試通過。
- 第一輪完整 `npm run verify` 的第一階段：253 個測試檔通過，5 個測試檔依條件跳過；6 個測試檔共 10 項失敗、6,396 項通過、47 項跳過。失敗原因為新測試沿用上游英文初始語言或原作者發布網址，已依 fork 行為調整。
- 上述六個檔案重新執行：85 項測試全數通過。
- 隱私歷史檢查、152 個 production packages / 7 個 catalog entries 的授權聲明，以及 730 份固定原生來源封存檔／patch 驗證均通過。

這些結果只證明列出的本機驗證層級，不代表已部署、已安裝、登入中的 ChatGPT 接受新 extension，或已在 Raspberry Pi / macOS 上執行。

## 最終整合驗證

- `npm run verify`：exit 0。第一階段 259 個測試檔通過、5 個測試檔依條件跳過，6,406 項測試通過、47 項跳過；序列化原生測試階段再通過 2 個測試檔、26 項測試。合計 6,432 項通過。
- `npm run build`：exit 0，產生 desktop main、headless server、兩組 preload 與 renderer 產物。Vite 的既有靜態／動態 import 共用 chunk 提示未阻止建置。
- `scripts/verify-settings-layout.cjs`：隔離且隱藏的 Electron 視窗，使用建置後 markup / CSS 與 Usage renderer，通過六個頁面、兩個主題、兩種寬度、兩種縮放，以及長路徑與設定檔選單檢查；檢視兩張測試畫面，未見被檢查內容溢出。
- headless bundle smoke：純 Node 成功載入 `out/main/server.js` 並到達 Linux / ARM64 平台檢查；Windows x64 被正確拒絕，沒有啟動服務或連線。第一次以 Windows 資料夾語法呼叫先被 Linux 路徑規則拒絕，改用解析後仍位於隔離測試目錄的 POSIX 語法完成檢查。
- 獨立唯讀 review 比對合併結果與兩個 parent，未發現重要合併缺陷；檢查涵蓋 Setup、語系、extension 注入順序、headless、更新來源、MCP 與精確編輯 Review 資料。審查者另執行 121 項與 65 項重點測試，均通過；不與上述完整套件重複加總。
- `scripts/verify-workspace-terminal.cjs`：使用真實 Electron、PTY、preload / IPC 的隔離測試，最終 exit 0。驗證鍵盤輸入、無專案／專案工作目錄、變數及 cd 保留、左右／底部多分頁、隱藏後持續執行、Ctrl+C、退出碼 7、關閉釋放與縮放後的面板範圍；面板底緣與 viewport 同為 635px。

Terminal 驗證曾在上游新面板動畫開始時取得視窗外的點擊座標，並在縮放後量到尚未結束的 14px 動畫偏移。修正僅在 harness：取座標／尺寸前等待實際有限動畫完成、確認 native click 命中目標、以既有有界等待確認隱藏狀態，以及使用測試工作目錄完整 prompt 取代固定 `C:`。追蹤 review 指出的動畫等待缺少上限也已修正，加入 15 秒 wall-clock timeout 與 timer 清理；修正後重新執行整份 Electron / PTY 驗證通過。產品動畫、Terminal 執行邏輯與前述已完整驗證的 TypeScript 原始碼未變更。

測試輸出、畫面及測試資料目錄均保留在忽略的本機資料夾，不納入提交。此次建置未製作或發布安裝包，亦未替換正在執行的 Windows / Pi 程式。
