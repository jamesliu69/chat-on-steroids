# MCP 壓縮交接前的額外等待

## 問題與範圍

尚未送出交接要求的 continuation ticket 會讓其他未識別的 MCP 請求進入身分等待。
例如已有 `awaiting-summary`／`not-attempted` ticket 時，自帶絕對路徑的 `read`
會多等生產設定的 20 秒，雖然 `compactingConversation()` 尚未將來源對話視為壓縮中。
`attempted-unresolved` 也有相同問題。

修正只處理此額外等待，不宣稱已重現或排除所有 ChatGPT「沒有反應」、網路或 tunnel 逾時。
沒有修改 provider 逾時、全域身分等待長度、HTTP drain、瀏覽器動作或重試規則。

## 修正

- 將全域 predicate 改為 `anyCompactingConversation()`，與精確對話判斷共用
  `isOpen(entry) && handoffAsked(entry)`，不新增 timer、狀態或持久化副作用。
- `kernel.ts` 的兩個 admission gate 使用同一 predicate。
- 已 dispatch 的交接仍等待精確身分，並拒絕來源對話繼續執行工具；封鎖對話的等待與拒絕保留。
- 更新 `AGENTS.md` 的身分等待契約。

## 驗證

新增 `test/mcp-continuation-gate.test.ts`。先在原實作得到 2 failed／3 passed：
未送出與準備送出的兩個案例均意外呼叫身分等待。修正後補齊負向案例，共 6 passed，
涵蓋晚到的來源身分、無關對話、封鎖對話及失效 ticket。

獨立本機計時探針使用真實 continuation、dispatch、`awaitFreshCallOrigin` 與 20 秒設定；
僅隔離 Electron 與錄製輸出。修正前 ticket 案例至少 19 秒、比無 ticket 多至少 18 秒；
修正後兩個案例皆低於 1 秒。正式回歸測試檢查是否進入等待，避免以機器速度作為判斷。

其他檢查結果：

- `npm run verify`：rg、隱私、授權／原生來源檢查、typecheck、Electron resolve 通過。
  完整測試階段為 218 suites passed、5 skipped、1 failed；5,827 tests passed、46 skipped、4 failed。
  失敗均在未修改的 `plugins-manager.test.ts`，涉及程序退出與非同步啟動時序，並非新增回歸案例。
- `npx vitest run --maxWorkers=1 test/plugins-manager.test.ts`：56 passed、1 skipped。
  這次獨立重跑通過，不將首輪失敗抹除，也不將並行負載視為已證實根因。
- `npm run build` 通過；既有 dynamic/static import 警告仍在。
- `npm audit --audit-level=high` 與 production-only audit 均為 0 vulnerabilities。
- 獨立 code/security review 無本次新增阻擋項；`git diff --check` 通過。

`npx vitest run --maxWorkers=1 test/computer.test.ts test/mcp-shutdown.test.ts`：26 passed。
綜合全套與失敗 suite 的獨立重跑，5,857 個不同案例已通過、46 個略過；
這不等於一次乾淨的 `npm run verify`。首次驗證程序未留下完成狀態，不計為通過。

## 證據界線

此記錄是原始碼、測試與建置層級的驗證。未產生安裝包、替換使用者安裝版本，
也未宣稱已在登入中的 ChatGPT 重現並消除原始錯誤。沒有測量整體測試覆蓋率。
