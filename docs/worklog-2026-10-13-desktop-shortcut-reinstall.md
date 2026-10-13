# 重裝時重新建立桌面捷徑

NSIS 的 `createDesktopShortcut` 已設為 `"always"`，讓重新安裝時即使先前桌面捷徑已被移除，也會再次建立捷徑。開始功能表捷徑設定維持原值。

驗證：YAML 解析確認 `nsis.createDesktopShortcut` 為 `always`；`npm.cmd run dist:x64` 與封裝後 runtime smoke 通過；7-Zip 確認 NSIS-3 Unicode 封裝完整。新安裝檔為 2.1.35，SHA-256 與封裝資訊記錄於 `release/receipt.json`。

未實際安裝測試桌面捷徑；electron-builder 26.17.0 將 `always` 解析為 `DesktopShortcutCreationPolicy.ALWAYS` 並定義 `RECREATE_DESKTOP_SHORTCUT`。現有安裝檔需使用本次重建的安裝檔重新安裝才會套用此設定。
