# 連接器工具更新提醒的操作入口

日期：2026-10-12

## 問題與行為

聊天頂端的連接器工具變更提醒原本只有說明文字和關閉按鈕，使用者不知道要前往哪個頁面、更新哪個連接器。

- 新增「開啟 ChatGPT 外掛」按鈕，沿用 renderer 的 `data-link` → 固定 preload `openLink` → 主程序連結開啟流程，前往 `https://chatgpt.com/settings/plugins-settings`。
- 提醒依既有 schema 比對結果列出受影響的連接器；已確認的 schema 不再列入。名稱優先採用已證實的 ChatGPT 名稱，再採用本機設定名稱。
- 說明選取對應連接器後，按「重新整理工具」。新增文字同步加入全部 12 份翻譯目錄，語言切換會立即更新說明。
- 按下開啟按鈕不會關閉或確認提醒、不會自行更新 ChatGPT 工具。原本 X 的 UI 確認，以及已觀察到 schema 更新時的消失行為維持原有責任。
- 直達已安裝的外掛清單；這次不新增 renderer 的連接器 App ID 投影，也不猜測某個 App ID 或自動按下更新。

## 實際觀察與驗證

在已登入的 ChatGPT 頁面確認已安裝外掛清單路徑為 `/settings/plugins-settings`，連接器詳細頁提供「重新整理工具」按鈕。只查看頁面與進入詳細頁，沒有手動執行重新整理、修改權限或重新安裝外掛。

- `npm test -- --run test/plugin-refresh-reminder.test.ts`：首次新增翻譯切換案例時，因新文字尚未加入翻譯目錄而失敗；補齊翻譯後通過。
- `npm test -- --run test/plugin-refresh-reminder.test.ts test/renderer-i18n-source.test.ts test/renderer-i18n.test.ts test/plugin-refresh.test.ts test/plugins-ui.test.ts`：5 個檔案、124 項測試通過。
- `npm run build`：通過；輸出在 `out/`。Vite 回報既有 main 模組同時被靜態與動態匯入的分塊警告。
- `npm run verify`：通過。第一階段 332 個測試檔案通過、5 個略過，8,528 項測試通過、48 項略過；獨立執行的 Desktop/shutdown 階段再通過 2 個檔案、28 項測試。合計 8,556 項通過、48 項略過。
- `npm run verify:ui -- plugin-refresh-reminder`：1 個 Electron UI 檢查通過；載入完整 production renderer，檢查真正的委派連結 handler、開啟不會誤確認、名稱與即時翻譯、窄版排版、Settings 隱藏及 schema 確認後消失。
- 首次查看 Electron 截圖時發現 quiet 樣式看起來像一般文字，改成有邊框與外開圖示的標準按鈕。也修正 fixture 的主題切換，改由設定 owner 發佈主題；只改 HTML 的 theme attribute 無法覆蓋 appearance 的 CSS 變數。
- 按鈕樣式調整後再次 `npm run build` 通過；`npm test -- --run test/plugin-refresh-reminder.test.ts test/renderer-html.test.ts test/icon-font.test.ts`：3 個檔案、42 項測試通過。
- `npm run verify:ui`：首次完整執行 49/51 通過、退出碼 1；兩項初次失敗的結果與重跑分開記錄：
  - `verify-cos-sign-in.cjs` 首次因 `openssl could not make the fixture certificate: undefined` 立即失敗；當前 PATH 沒有 `openssl`，但 `C:\Program Files\Git\usr\bin\openssl.exe` 存在。以 `$env:Path = $env:Path + ';C:\Program Files\Git\usr\bin'; npm run verify:ui -- cos-sign-in` 重跑，1/1 通過；只影響該次命令，未修改全域環境。
  - `verify-setup-access.cjs` 首次執行 360 秒後逾時。日誌包含 `[vite] (client) page reload index.html`，當時本次作業仍修改了按鈕 class；測試中途的熱重載可能打斷 fixture 初始化。此原因屬推論，沒有把失敗歸因為產品的初始化錯誤。固定來源後以 `npm run verify:ui -- setup-access` 重跑，20 秒完成、1/1 通過。
  - 結果：51 項檢查均已取得通過證據；首次整輪本身仍是 49/51、退出碼 1，另外兩項由以上獨立重跑取得通過結果。
- 最後按鈕採用專案既有 `btn btn-solid` 外觀，Electron 檢查另外確認可見邊框；`npm run verify:ui -- plugin-refresh-reminder` 再次 1/1 通過。最後來源的 `npm run build` 也再次通過。

Electron UI 證據使用隔離的預設設定衍生 fixture，攔截 `openLink` 並記錄參數，不會啟動真實連接器或接觸已安裝程式的 userData。已查看深色與淺色實際畫面，畫面輸出在 `outputs/plugin-refresh-reminder/`，包含 `960-zh-TW-dark.png` 與 `640-zh-TW-light.png`。

提交前再次執行 7 個相關測試檔案，共 160 項測試通過；`npm run typecheck`、`npm run verify:ui -- plugin-refresh-reminder` 與 `npm run verify:privacy` 均通過。隱私檢查涵蓋當時的 2,077 個提交與 34 個標籤。

本次完成來源、建置與 UI 驗證，沒有製作安裝包或安裝到目前桌面程式。已登入 ChatGPT 的頁面觀察不等於已安裝程式新按鈕的端到端驗收。
