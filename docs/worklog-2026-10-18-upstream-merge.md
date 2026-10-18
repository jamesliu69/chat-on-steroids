# 2026-10-18 上游合併記錄

## 目標與來源

- 目標分支：隔離工作樹中的 `fork-main`，最後應更新 Fork `origin/main`。
- Fork：`origin` → `https://github.com/jamesliu69/chat-on-steroids.git`。
- 上游：`totec448` → `https://github.com/totec448-spec/chat-on-steroids.git`。
- Fork 起點：`fe9aa4f1`（`origin/main`，先快轉納入兩個 Fork 自有提交）。
- 上游初次合併目標：`18b24b5f`（`totec448/main`）。當時上游有 149 個 Fork 尚未包含的提交，Fork 有 134 個上游尚未包含的提交。驗證時上游前進至 `20a5c922`；又多 3 個提交，已納入後續合併。
- 原 checkout 留在 `totec448-main`；實作位於 `C:\Users\fly2000\.config\superpowers\worktrees\chat-on-steroids\merge-upstream-20261018`。

## 合併與保留項目

以 `git merge --no-commit --no-ff totec448/main` 合併，處理 15 個衝突：`AGENTS.md`、`scripts/verify-whats-new.cjs`、`src/main/codex/command-batch.ts`、`src/main/computer/windows-apps.ts`、`src/main/mcp/tools.ts`、`src/renderer/chat.ts`、7 個 locale、`test/config.test.ts`、`test/windows-apps.test.ts`。

保留 Fork 的 headless server、helper script、portable 發佈、檔案與 session 工具、身份驗證邊界、30 天紀錄策略、Plugin refresh 預設 Off 等契約；採納上游的 session/sidebar、MCP 空 catalog、Windows AppsFolder 身份、PowerShell batch exit code、locale 複數格式與最新功能。

初次合併提交 `1d577fe7` 的 parents 為 Fork `fe9aa4f1` 與上游 `18b24b5f`。上游更新至 `20a5c922` 的後續三個提交新增了 withdrawn-before-Send 診斷日誌，以及 Windows 減少動態效果時仍可辨識的靜態工作狀態標記；第二輪合併沒有衝突。

修正 Firefox companion 更新網址的 Fork 歸屬：`scripts/firefox-update-manifest.mjs` 產生 `https://github.com/jamesliu69/chat-on-steroids/releases/latest/download/firefox-updates.json`；`scripts/verify-release-assets.mjs` 與相關測試驗證該固定網址。`test/firefox-extension-package.test.ts` 的預期值也同步到 Fork URL，避免測試仍要求上游網址。

## 驗證紀錄

- Secret scan：210 個 staged 檔案皆無 secrets；第二輪上游變更的 `src/main/session/input.ts`、`src/renderer/styles.css`、`test/renderer-layout.test.ts` 也分別掃描為無 secrets。掃描器回報 HTTPS/authentication 警告，但結果為 `No secrets found`。
- `npm ci`：成功安裝 527 個套件。npm 顯示 14 個 audit advisories（8 moderate、6 high）、多個 deprecated 套件，並提示 7 個 package install scripts 尚未列入 allowScripts。
- `npm run verify:privacy`：初次檢查通過（2632 commits、38 tags）；初次 merge commit 後再檢查通過（2782 commits、40 tags）。
- 定向測試：13 檔 602 passed、2 skipped；Firefox companion package 8 passed；`plugins-manager.test.ts` 76 passed、1 skipped；`exec-result-delivery.test.ts` 3 passed；MCP Compact & Resume 個案 1 passed；bridge silence/recovery 個案 2 passed。
- `npm run verify`：執行 3 次，皆未全綠。第三次共 399 檔、9509 passed、99 skipped、4 failed；隱私、notices、typecheck 通過。執行過程中 bridge 701 項通過。失敗集中於 process/PTY 等待、跨 Resume exec 輸出與時間限制；已辨識的相關測試在單檔或單案例重跑通過。不能將完整 `verify` 記為通過。
- 受控並行完整測試：`vitest run --maxWorkers=4 --exclude test/mcp-shutdown.test.ts --exclude test/computer.test.ts` 共 399 檔、9512 項測試，387 檔通過、11 檔跳過、1 檔失敗；`computer-windows-accessibility.test.ts` 單檔重跑仍因 zero-bounds semantic invocation 失敗。該測試及 `src/main/computer/helper.ts`、`src/main/computer/index.ts` 在 `origin/main` 與 `totec448/main` 間沒有差異，也未由本次合併修改。另跑 `vitest run --maxWorkers=1 test/computer.test.ts test/mcp-shutdown.test.ts`，28 項通過。
- 後續上游定向測試：`test/renderer-layout.test.ts`、`test/session-input.test.ts`、`test/input-delivery-integration.test.ts` 共 574 項通過。
- `npm run build`：初次合併與第二輪上游變更後皆通過，產生 main、preload、renderer、extension、server 輸出；Vite 回報數個既有 dynamic-import chunk 警告。
- `npm run verify:ui`：首次因 renderer build 尚未存在而中止；build 後完整跑完，54/56 通過。`verify-cos-sign-in.cjs` 因 Git for Windows OpenSSL 不在原 PATH 而失敗，加入 `C:\Program Files\Git\usr\bin` 後單獨通過；`verify-workspace-terminal.cjs` 在整套執行時曾 timeout，之後以原始未修改腳本單獨通過。

## 記錄時間點

撰寫本記錄時尚未建立 merge commit 或推送；預設完整 `verify` 在這台 Windows 環境尚未取得全綠結果，因此當時沒有宣稱完整驗證通過的證據。當時尚未製作安裝程式或 portable 發行包，也未安裝或驗收真實 Chrome、Firefox 或 ChatGPT provider 行為。最後的 Git refs 與交付結果以實際完成狀態為準。

## 最終交付

- 最新上游 merge commit：`092ecf3bdda8b2fc1efe0128ab95daa05d91ee8a`，parents 為本地 Fork merge `1d577fe778b3d994b88104a4e84fc4d4cbee15ad` 與上游 `20a5c92204fb2929872fe4571a6c5ea161130ef8`。
- 以 `git push origin fork-main:main` 快轉推送 Fork，`origin/main` 從 `fe9aa4f1` 前進至 `092ecf3b`；推送後重新 fetch，遠端 SHA 與本地 SHA 相同。
- 上游 remote 僅 fetch；`totec448` 的 push URL 仍封鎖為 `https://invalid.invalid/no-push.git`。
