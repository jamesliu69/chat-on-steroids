# 2026-09-22：2.1.14 工作目錄與連線等待檢查

## 範圍與證據

- 原始碼：`integration/upstream-7777e51`，HEAD `68c7342`，宣告版本 `2.1.14`；版本差異以 `v2.1.14...HEAD` 為參考。
- 聚焦 connection、tunnel、MCP 身分判定及送出訊息的啟動等待，並執行較廣的既有測試。這不是所有功能、作業系統與已安裝套件的完整認證。
- CodeGraph CLI 回報索引最新；本次環境沒有 codebase-memory MCP 或 `check_index_coverage`，因此重要結論另以目前原始碼與執行測試核對，不宣稱索引完整性。
- 保留原有 `.vscode/tasks.json`、`.omc/`、`.omo/`、`.vitest/` 工作。未修改產品程式、已安裝 App、extension 或執行中的狀態檔。

## 已重現：啟動等待不受 65 秒逾時涵蓋

`src/main/session/start-input.ts:12-34` 的 `ready()` 先 `await connect()`，然後才建立 65 秒計時器及 abort listener。`connect()` 本身尚未返回時，這個計時器不存在。

後果：若連線啟動或前方生命週期作業一直未結束，已接受訊息仍停在 `queued`，沒有預期的連線逾時錯誤；使用者也無法由該錯誤進入既有的明確重試流程。這不代表正常 accepted-response drain 應被強制中斷。

獨立診斷 fixture：`.vitest/connection-audit-20260922.test.ts`，不納入正式 `test/**/*.test.ts`。

```powershell
npx vitest run --config .vitest/connection-audit-20260922.config.ts --maxWorkers=1
```

最小對照測試使用實際 `sendDesktopInput()` / `ready()`：

1. `connect()` 返回、狀態仍在連線中：推進 65,001 毫秒後正確出現錯誤，通過。
2. `connect()` 持續 pending：推進同樣時間後仍是無錯誤的 `queued`，預期錯誤提示的斷言失敗。

結果：1 passed / 1 failed。fixture 的失敗刻意保留作診斷證據，不是正式測試套件新增的失敗。`v2.1.14` 的同一段原始碼也有此順序，屬既存缺口。

修正方向：讓送出操作的既有 deadline 及取消訊號涵蓋 `connect()` 等待，並在每個遲到結果進入 bridge／瀏覽器副作用前重新確認操作仍有效。訊息保留同一 outbox UUID；不能用逾時直接重送、猜測成功，或截斷其他已接受工具作業的回覆。

## 本機紀錄：網路逾時與身分等待是不同原因

本機 `app.log` 在臺灣時間 2026-09-22 11:33、13:19 記錄 OpenAI control-plane poll timeout，隨後記錄 client 自行重試。單次 poll timeout 不能證明 tunnel 永久卡住，也不能證明 App 的重啟策略有錯。

11:34 的一筆已完成 MCP 呼叫為 HTTP 200，總耗時 21,000 ms，其中 `identity_ms=20013`、`handler_ms=976`。它證明該筆主要等在本機身分判定，不是工具本身執行 21 秒，也不等於 ChatGPT 已收到或顯示回覆。

`src/main/mcp/kernel.ts:701-705` 在存在 blocked chat 或 open continuation 時，會對缺少 exact correlation 的請求等待身分。`src/main/session/recorder.ts:695` 的 production `REQUEST_ID_GRACE_MS` 是 20,000 ms，與上述計時相符。但只有彙總計時，無法還原當時究竟是 blocked chat 或哪一個 continuation 觸發，不能宣稱已定位使用者那次卡住的唯一原因。

## 身分等待判斷範圍過寬

`src/main/session/continuation.ts:557` 的 `anyContinuationOpen()` 只判斷 continuation 尚未結束；`compactingConversation()` 在第 546 行起還要求 `handoffAsked()`，也就是交接要求已送出或開始送出。兩者不一致。

因此，僅建立而尚未送出交接要求的 `awaiting-summary` 工作，即使所屬對話還允許正常工具執行，也會讓缺少 exact correlation 的 MCP 呼叫進入 20 秒身分等待。沒有對應證據時，等待到期後仍會執行。這個判斷與等待在版本標籤之前就已存在，不是本次整合新增。

獨立重現使用真實 `openContinuationNow()`、`compactingConversation()`、`dispatch()` 與身分等待流程；僅隔離 Electron 平台邊界及 `recordToolCall` 的錄製副作用，將 `CLF_EVIDENCE_MS` 設為 production 的 20,000 毫秒。

```powershell
npx vitest run --config .vitest/mcp-continuation-audit-20260922.config.ts --maxWorkers=1
```

結果：1 passed，主代理獨立重跑也通過。這個診斷測試斷言目前的錯誤行為存在：無 ticket 的匿名 read dispatch 少於 1 秒；建立未送出的 `awaiting-summary` ticket 後，同型 dispatch 至少 19 秒，差值超過 18 秒。期間 `compactingConversation(source) === null`，但 `anyContinuationOpen() === true`。因此已確認全域等待範圍與實際執行限制不一致；仍未證明本機那筆歷史請求當時恰好由此 ticket 觸發。

安全改善方向是讓 kernel 的全域等待前置判斷與實際 compacting 限制使用相同語義，同時保留真正 blocked／handoff 已開始時的 exact-identity 保護。不能只縮短 `REQUEST_ID_GRACE_MS` 後允許未知來源執行，也不能把最近活躍的對話當作身分證明。

## 驗證

- `npm run typecheck`：通過。
- `npm run build`：通過；有既有 mixed static/dynamic import 的打包提示。
- `npm run verify:privacy`：通過。
- `npm run verify:notices`：通過。
- `npm run rg` 與 Electron 模組解析：通過。
- `git diff --check`：通過。
- connection、tunnel、MCP timing／inflight 六套：85 passed / 1 skipped。
- MCP、入站、shutdown、bridge port、input startup、plugins manager 七套：265 passed / 7 skipped。
- `npm test -- --maxWorkers=4 --exclude test/computer.test.ts --exclude test/mcp-shutdown.test.ts`：218 套通過、5 套略過；5,825 passed / 46 skipped。
- `npm test -- --maxWorkers=1 test/computer.test.ts test/mcp-shutdown.test.ts`：2 套通過；26 passed。
- 全部正式測試合計：220 套通過、5 套略過；5,851 passed / 46 skipped。上面兩批針對性測試是重複驗證，不另外加總。略過測試不是通過證據。
- 因此已逐項完成 `verify:ci` 的檢查類別與正式測試分組，並另外建置；不是宣稱曾以單一 `npm run verify` 命令執行。

## 解決範圍

App 端可以修正無提示等待與不必要的身分等待；不能據此保證外部網路／OpenAI 永不逾時。改善完成仍需用原始觸發流程驗證，並另外建置、安裝、確認 extension 與實際瀏覽器行為。本次是檢查與診斷，尚未套用產品修正。
