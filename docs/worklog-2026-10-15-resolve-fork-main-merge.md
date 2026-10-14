# 2026-10-15：解決 main 與個人 Fork 的合併衝突

## 範圍與合併來源

使用者要求解決已開始的合併，目標是個人 Fork；不得對上游寫入。

- 本機分支：`main`。
- 合併前 `HEAD`：`0c4e05f2a7140fcdd6ad6e7108bddc65c031f465`。
- `MERGE_HEAD`／本機記錄的 `origin/main`：`9de46290abe893b02215a7621e0732a06ba686b6`。
- 共同祖先：`80c7bad26743e5a465534003b490b3d134a5e4f5`。
- `origin`：`https://github.com/jamesliu69/chat-on-steroids.git`。
- `totec448` 與 `upstream` 的推送網址均保留為 `https://invalid.invalid/no-push.git`。
- 本次沒有執行 push、fetch、pull、reset、clean 或中止合併；原有合併結果及提交歷史保留。

## 衝突處理

| 檔案 | 處理決策 |
| --- | --- |
| `AGENTS.md` | 保留 Fork 的 plugin refresh 預設 Off、錄製關閉時不發送完成通知；保留較新的每 30 分鐘換回合契約，並對齊 2.1.37。 |
| `THIRD-PARTY-NOTICES.txt` | 執行既有產生器，依目前 lockfile 與已安裝相依套件重新產生授權聲明。 |
| `scripts/verify-whats-new.cjs` | 保留 2.1.37 驗證，發布連結指向個人 Fork。 |
| `src/main/config.ts` | 保留較新的 UI 設定欄位，以及 Fork 的 `autoRefreshPlugins: false` 和原有設定／錄製權限。 |
| `src/main/connection.ts` | 同時保留啟動 callback 的有效性防護、headless `planTools` 選項、錄製控制、固定 MCP token 與伺服器識別隔離。 |
| `src/main/mcp/server.ts` | 統一為 `{ kept, serverNameScope }` 選項，將固定路徑 token 與伺服器識別範圍分開處理。 |
| `src/renderer/chat.ts` | 設定儲存事件同時涵蓋 `rotateTurnMinutes` 與 `minimizeToTray`。 |
| `test/packaging.test.ts` | 同時保留 Firefox 簽署測試及 Fork 的 Windows portable 發布測試。 |
| `test/session-markdown-export.test.ts` | 保留 ChatGPT link card 轉為 Markdown 連結的迴歸測試。 |

另更新 `test/connection.test.ts` 與 `test/mcp-persistent-paths.test.ts` 的呼叫介面，並以同一次 MCP 初始化驗證固定 token 與 scoped server identity 能同時生效。

## 驗證時另外修正的問題

- `src/renderer/styles.css`：Setup wizard 的 browser phases 在窄容器仍維持單行，俄文較長的文字撐寬整個面板。在原有 `@container (max-width: 440px)` 將步驟直排並隱藏裝飾分隔線，保留各步驟文字與可及性語意；寬版排列不變。
- `scripts/verify-update-readiness.cjs`：Fork 預設自動更新 Off，首次提示額外占用約 112.94px，使 600px 視窗下事件區在收合前後都只有 14px。此測試專門驗證更新卡片與事件區，因此將 fixture 明確設為 `autoRefreshPluginsAsked: true`，表示使用者先前已回覆首次提示。產品預設值、首次提示行為與既有高度斷言均保留。

## 驗證紀錄

- 對本次合併的 192 個新增／修改檔案執行 `sonar analyze secrets`，回報 `No secrets found`；掃描器另有認證失敗與 HTTPS 提示，沒有宣稱伺服器端 SonarQube 分析成功。
- `node scripts/generate-third-party-notices.mjs`：通過，驗證 158 個 production packages 與 7 個 catalog entries。
- `npm test -- --run test/packaging.test.ts test/session-markdown-export.test.ts test/whats-new.test.ts test/third-party-notices.test.ts`：4 組、51 項通過。
- `npx vitest run test/mcp-persistent-paths.test.ts test/connection.test.ts`：2 組、59 項通過。
- 第一次 `npm run typecheck` 發現 `test/mcp-persistent-paths.test.ts:53` 仍傳入舊版第二參數 `{ core }`，錯誤為 `TS2353`；更新為 `{ kept, serverNameScope }` 後重新執行通過。
- `git diff --check`：通過。
- 第一次 `npm run verify` 的非原生測試分段：361 組通過、5 組跳過、1 組失敗；9109 項通過、49 項跳過、1 項失敗。失敗案例為 `test/input-delivery-integration.test.ts` 的 `keeps Continue and its Stop deadline when reload re-observes the same question with different text (gpt-5.6-pro)`。先精準重跑 6 個變體通過，再重跑整組 290 項通過；沒有修改或略過該案例。
- 首次完整驗證透過 PowerShell 擷取 native stderr，產生 `Root element is missing`／`Data at the root level is invalid` 的 XML 解析錯誤，未保留完整斷言內容。最後重跑改由 `cmd.exe` 原樣擷取 stdout/stderr；保留首次失敗紀錄，不宣稱已確認其根因。
- `npm run verify:ui` 初次結果：52/55 通過。其餘三項及處理如下：
  - `cos-sign-in`：`openssl could not make the fixture certificate: undefined`。確認 PATH 找不到 OpenSSL，但 Git 附帶的 `C:\Program Files\Git\usr\bin\openssl.exe` 可用；只替該次測試程序加上 PATH，重跑 1/1 通過，未修改全域設定。
  - `setup-guide`：俄文、640px、zoom 1 出現面板 overflow；修正窄容器步驟排列後，重跑 1/1 通過（70 秒）。
  - `update-readiness`：`Collapsing details returns height to the event feed`。診斷資料為 `expandedFeedHeight=14, height=14, open=false, card=149.5, offer=112.9375`；調整 fixture 的首次提示回覆狀態後，重跑 1/1 通過（154 秒）。
- `npm run verify:ui -- browser-setup`：修正後額外檢查 1/1 通過。
- `npm run build`：最終原始碼重建通過，輸出包含 `out/main/index.js`、`out/main/server.js`、preload 與 renderer；Vite 有混用動態／靜態 import 的分塊提示，沒有建置錯誤。
- 獨立唯讀審查：衝突解法及後續兩項最小修正均未發現 blocker。審查範圍是衝突解法與直接相關變動，沒有宣稱逐行審查全部自動合併檔案。
- 最後一次 `npm run verify`：exit 0。一般分段 362 組、9110 項通過，5 組／49 項跳過；隔離的原生分段 2 組、28 項全部通過。合計 364 組、9138 項通過，沒有失敗。
- 提交前重新掃描 203 個暫存的新增／修改檔案及 Git 設定／HEAD，回報 `No secrets found`；未解決衝突、未暫存修改與未追蹤檔案均為零，`git diff --cached --check` 與 staged privacy gate 通過。
- 提交方式：保留合併前 `HEAD` 與 `MERGE_HEAD` 的雙親合併，沒有 squash、reset 或強制覆寫；實際提交識別以 Git 歷史為準。僅完成本機整合，未推送。

完整驗證紀錄位於本機暫存目錄：

- 首次完整驗證：`%TEMP%/cos-merge-20261015-verify-965f017c2859447f932b72c54ab661b9.log`。
- 整組 input delivery 重跑：`%TEMP%/cos-merge-20261015-input-894c1d74f35e4c1689a0a159f81c05e2.log`。
- 完整 UI：`%TEMP%/cos-merge-20261015-ui-308754a8290d4789aae486bd2da1d1e1.log`。
- 最終建置：`%TEMP%/cos-merge-20261015-build-3d49ed918bde4d5ba6e912764e67e87b.log`。
- 最後完整驗證：`%TEMP%/cos-merge-20261015-final-verify-7847fe66ce824194b18df7b46a057870.log`。

## 證據界線

本次處理原始碼合併與本機驗證，沒有發布、安裝或推送。建置與自動化測試不代表已安裝版本、真實 ChatGPT 帳號／瀏覽器或 Raspberry Pi 硬體驗收。
