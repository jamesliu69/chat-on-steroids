# 2026-10-05 修復封存分支合併衝突

## 問題與處理

目前 `main` 的 `826840d4` 正在合併 `archive/worktree-staged-20260929`
（`2292051d`）。舊暫存快照的翻譯內容與已整合上游的 main 在 10 個語言檔案
產生衝突，殘留標記使 JSON 無法解析。畫面測試腳本的修改已自動合併並暫存。

逐一核對衝突雙方與目前使用的字串後，保留 main 的完整語言目錄：每個衝突
檔案仍有 1,847 個字串，解析後與合併前 main 完全一致。保留關閉視窗即退出的
翻譯；不重新加入已無使用者的舊 Local control API 標籤。

納入封存分支的 `scripts/verify-message-reactions.cjs` 修正：改變視窗大小與縮放
後先等待實際 viewport 寬度同步，並在穩定性比較中包含高度與 innerWidth。
應用程式的實際行為和版本宣告沒有變動。以正常雙親提交完成進行中的合併。

## 驗證

- 修復前：語系檢查因衝突標記而出現 JSON parse error，兩個測試檔案失敗。
- `npm run typecheck` 通過。
- `npm test -- test/renderer-i18n.test.ts test/renderer-i18n-source.test.ts`：
  2 個測試檔案、60 項測試全部通過。
- `npm run verify:ui -- message-reactions`：真實 Electron fixture 通過，
  涵蓋 3 種縮放與 2 種視窗寬度下訊息反應的幾何與節點穩定性。
- `git diff --cached --check` 通過，Git 未解決衝突清單為空。

此次只修復 Git 合併衝突並驗證被帶入的測試腳本；未重新發布、安裝或推送。
