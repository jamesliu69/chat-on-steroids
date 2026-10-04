# 2026-10-05 個人 main 合併上游

## 範圍與來源

將個人 `main`（`74c7f18ce068bc10417d25ba9443ba0fcfa3efbe`）與上游
`main`（`9c2df5ff990690ab124b1d9567847dfca1ba42fc`）作一般雙親合併。
共同祖先為 `282b2c3c6f8ec0ffbaccde5d3a099a698e248d5c`；合併前各自獨有
91 與 744 筆提交。版本宣告沿用上游 2.1.26，這不是新的正式發行。

工作在獨立 worktree `D:\Github\chat-on-steroids-merge-20261005` 進行。
原工作目錄維持 `upstream-main`，其中既有 `THIRD-PARTY-NOTICES.txt` 修改和
`.worktrees/` 不動；沒有推送、安裝、取代正在運行的程式或發布套件。

## 整合決策

- 保留個人 Linux ARM64 無介面 Core 主機、服務與 tmux 啟動器、獨立 task plan、
  `download_artifact`、有界的本地 `session` 歷史搜尋／讀取，以及 portable 發布資產。
- 保留錄製關閉和保留期限的既有設定。合併上游 strict chat allowlist、全域 worker
  上限、Setup profile 的 endpoint provenance、晚到的確切 process ownership 與 Keychain gate。
- 上游更新的模型觀察、Skill、Goal／worker、續接、extension、語言和畫面功能依其
  現有擁有者整合；不保留被取代的語言測試和舊版實作分支。
- 獨立 session 工具不再依賴 kernel 已移除的 `expandStored`；用 bounded store owner
  讀取 overflow。artifact 變更紀錄使用上游批次 `noteChanges`。
- tunnel 路徑由桌面入口明確初始化；bridge 啟動時才載入桌面 extension owner。
  plain-Node Core 入口因此不會在 import 階段載入 Electron。
- Windows portable 檔名同步至上游 release target plan 與資產檢查；個人發布工作流程
  的 release metadata 檢查仍保留。版本說明補上預期資產及簽章狀態，不宣稱已產出。
- MCP JSON error 明確由 Node 使用 chunked framing，避免本機 MCP intermediary 移除
  Content-Length 後出現原始 JSON 被誤認 chunk 的 HTTP parse error。
- 修正空 pointer owner 與沒有 pointerId 的 pointerup 事件比較後誤解參考；補回個人
  關閉視窗選項需要的全部語言字串。
- worker wake 測試先提供新一輪工作證據再完成，保留「舊 finish 不取消新 wake」契約。
  Windows pet fixture 改驗證 click-through 與 hover 不取得焦點；focusable 已是上游為
  hide/show 後可靠點擊所採用的設計，不改回舊政策。
- MCP shutdown fixture 使用 recorder、session store 與 durable store 的既有 flush barrier，
  避免已排程寫入與測試暫存目錄刪除競爭。

## 驗證

- `npm run verify`：exit 0。一般組 295 套件通過、5 套件略過；7,317 項通過、
  48 項略過。Windows native／shutdown 組 2 套件、28 項通過；合計 7,345 項
  通過、48 項略過，無 failure 或 unhandled error。
- `npm run build`：exit 0，main、preload、renderer 和 plain-Node server 均產出。
- 最後 `npm run typecheck`、`git diff --check` 和個人 workflow 中的
  `Verify release metadata agrees` 實際腳本均通過。
- `npm run verify:ui`：42 項首次跑完，40 項通過。更新 Windows pet fixture 後
  單獨重跑通過；composer fixture 未改行為，單獨重跑通過，保留首次失敗為 timing
  flake 的證據。全部 42 項都有 passing evidence，不宣稱首次全數成功。
- Plain-Node bundle 使用攔截 `Module._load('electron')` 的 `server check` smoke：
  可進入設定檢查而未載入 Electron。當前主機是 Windows，檢查會拒絕受支援範圍
  以外的 OS，這不構成 Linux ARM64 實機驗收。
- 提交前 public-history privacy check 通過（808 commits、19 tags）；licenses、
  native sources、ripgrep 與型別檢查亦由完整 verify 通過。

驗證 logs 留在獨立 worktree 的 ignored `merged-verify-final.log`、`merged-build.log`、
`merged-ui.log`、`composer-recheck.log`、`pet-overlay-recheck.log`、
`merged-typecheck-final.log`、`merged-privacy-final.log`；初次失敗 logs 亦保留。
source、tests、build、package、installed runtime 與 provider 實際操作是不同證據層級；
此合併沒有產生或安裝 installer，沒有驗收真實 ChatGPT 長時間任務或實機 Pi。

CodeGraph 在獨立 worktree 回報 `database disk image is malformed`，因此使用當前來源
和既有測試追查。安裝依賴使用系統 CA；Electron 44.3.0 初次並行下載不完整後，
以原工作目錄同版本 runtime 補齊隔離環境，未改原環境或使用 TLS bypass。
