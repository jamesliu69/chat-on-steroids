# Chat On Steroids — SonarQube 分析報告

- 分析分支：sonarqube/fixes
- 分析時間：2026-10-08 04:37:24 +08:00
- 匯出時間：2026-10-08 04:38:42 +08:00
- 匯出時本機 Git HEAD：65d5e882e9e14119561d302f6f1282cdbdce4420
- 本機工作目錄：乾淨
- Sonar 預設分支：main；最近分析：2026-10-07 21:45:23 +08:00
- [目前分支全部程式碼總覽](http://localhost:32769/dashboard?id=chat-on-steroids&branch=sonarqube%2Ffixes&codeScope=overall)
- [目前分支完整問題清單](http://localhost:32769/project/issues?id=chat-on-steroids&branch=sonarqube%2Ffixes&issueStatuses=OPEN%2CCONFIRMED)
- 本次 CE task：edfb1c4c-dbdf-4da5-82cd-719fe422427f；狀態：SUCCESS；analysis ID：20f9c206-c629-41dd-89c6-3c0d34494ebf
- 掃描開始時 Git HEAD：65d5e882e9e14119561d302f6f1282cdbdce4420；未提交變更：False
- 無法核對伺服器 revision；本機 HEAD 僅供參考。Sonar API api/project_analyses/search failed (HTTP 403).

專案列表顯示預設分支，可能與本報告不同。此報告只對應上方目前 checkout 的分支。
覆蓋率依伺服器已匯入的資料；本流程不執行測試。缺少覆盖率資料或 0.0% 不代表測試已通過。

## 指標

| 項目 | 數值 |
| --- | ---: |
| Quality Gate | OK |
| OPEN / CONFIRMED 問題 | 1899 |
| bugs | 10 |
| vulnerabilities | 0 |
| code_smells | 1889 |
| coverage | 未取得 |
| duplicated_lines_density | 0.7% |
| ncloc | 117790 |
| security_hotspots | 93 |
| security_hotspots_reviewed | 0.0% |

## 完整未解決問題清單

| # | 類型 | 嚴重程度 | 檔案:行 | 規則 | 問題 | Issue Key |
| ---: | --- | --- | --- | --- | --- | --- |
| 1 | CODE_SMELL | MINOR | src/main/browser-proof.ts:82 | typescript:S7735 | Unexpected negated condition. | 9a88fd17-160d-426f-9997-a628dd798887 |
| 2 | CODE_SMELL | MINOR | src/main/browser-proof.ts:97 | typescript:S7735 | Unexpected negated condition. | 27cfb4c4-cffa-4b82-bd34-f16013c3258a |
| 3 | CODE_SMELL | MINOR | src/main/fsops.ts:347 | typescript:S4323 | Replace this union type with a type alias. | 28d1ff5e-d57e-421e-bd37-6d7b3d2c9df4 |
| 4 | CODE_SMELL | MAJOR | src/main/project-git.ts:256 | typescript:S6557 | Use 'String#startsWith' method instead. | b63035e7-32cc-449a-a017-76c1338c38a9 |
| 5 | CODE_SMELL | MAJOR | src/main/project-git.ts:257 | typescript:S6557 | Use 'String#startsWith' method instead. | ac10ed74-fbcf-4f22-9eed-7ae99b62294b |
| 6 | CODE_SMELL | MINOR | src/main/tunnel/health.ts:111 | typescript:S7735 | Unexpected negated condition. | ecef56bb-dc04-4e55-b99e-46b3e6633903 |
| 7 | CODE_SMELL | MINOR | src/main/goal.ts:520 | typescript:S7744 | The empty object is useless. | 8d914456-b220-4f09-bec0-ea8d9f70858b |
| 8 | CODE_SMELL | MINOR | src/main/goal.ts:1830 | typescript:S7773 | Prefer `Number.NaN` over `NaN`. | a983f8a8-6d0e-4519-b013-6c839fa0b6e3 |
| 9 | CODE_SMELL | MAJOR | src/main/goal.ts:2411 | typescript:S2589 | This always evaluates to truthy. Consider refactoring this code. | c5c941f7-e2d4-43e5-9af1-0c5b0d1dc62a |
| 10 | CODE_SMELL | MAJOR | src/main/session/recorder.ts:1236 | typescript:S6660 | 'If' statement should not be the only statement in 'else' block | 273b3a1a-1d92-4048-99d6-a8e37b1a9b68 |
| 11 | CODE_SMELL | MAJOR | src/main/session/recorder.ts:1935 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 335b94ec-81a0-49cf-be07-5a58261dd3cf |
| 12 | CODE_SMELL | MINOR | src/main/session/recorder.ts:1944 | typescript:S7735 | Unexpected negated condition. | 9b2f0374-1763-4db9-9a82-e8c8e5543f14 |
| 13 | CODE_SMELL | MINOR | src/main/session/store.ts:1431 | typescript:S7744 | The empty object is useless. | 1022dd2f-261f-4653-b040-b4696aff41d1 |
| 14 | CODE_SMELL | MINOR | src/main/mcp/tools-core.ts:1447 | typescript:S7735 | Unexpected negated condition. | 5236341b-0052-4fac-8870-b54500fa783c |
| 15 | CODE_SMELL | MINOR | src/main/mcp/tools-core.ts:1661 | typescript:S7735 | Unexpected negated condition. | 0f9710e0-6ee7-451c-a200-4ec3dd83152d |
| 16 | CODE_SMELL | MINOR | src/main/mcp/tools-core.ts:2016 | typescript:S7735 | Unexpected negated condition. | cc468709-ffa0-4715-9752-cde80d38dcc1 |
| 17 | CODE_SMELL | MINOR | src/main/bridge.ts:1974 | typescript:S4323 | Replace this union type with a type alias. | 95ca8b1b-0471-42c9-a13f-7c5a82c77ebd |
| 18 | CODE_SMELL | MINOR | src/main/bridge.ts:6553 | typescript:S4323 | Replace this union type with a type alias. | 05454f9c-38ae-4544-98e9-76f093274102 |
| 19 | CODE_SMELL | CRITICAL | src/main/bridge.ts:10076 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | 46db56eb-b559-4057-9b0f-c443ff66e9e2 |
| 20 | CODE_SMELL | MINOR | src/renderer/chat.ts:1694 | typescript:S7735 | Unexpected negated condition. | 5c34ff49-8a66-48b6-b5e4-969816b08032 |
| 21 | CODE_SMELL | MAJOR | src/renderer/chat.ts:1966 | typescript:S7761 | Prefer `.dataset` over `hasAttribute(…)`. | 75608dd5-f5be-4d9b-a12b-e6eccfb0a7c1 |
| 22 | CODE_SMELL | CRITICAL | src/renderer/main.ts:1807 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | dd100698-3891-4fb9-83fe-a1f6bd6c8abb |
| 23 | CODE_SMELL | CRITICAL | extension/background.js:4456 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 30 to the 15 allowed. | cb5d99bc-89e2-48d6-8598-1ecc2234ea4d |
| 24 | CODE_SMELL | MINOR | extension/content.js:12326 | javascript:S7735 | Unexpected negated condition. | 8b61eaa6-37a7-4ea5-8ac6-339d32d42995 |
| 25 | CODE_SMELL | MINOR | extension/fiber.js:901 | javascript:S7773 | Prefer `Number.isFinite` over `isFinite`. | fe66e135-ebe2-4cdc-82a0-8d0cf3b861f5 |
| 26 | CODE_SMELL | MAJOR | scripts/verify-pet-performance.cjs:166 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 0754fd5e-03c3-4d6e-9462-a8f08758035f |
| 27 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:348 | javascript:S6325 | Use a regular expression literal instead of the 'RegExp' constructor. | e7e94d53-8c92-4e60-af05-64a9c005f553 |
| 28 | CODE_SMELL | MINOR | extension/content.js:3462 | javascript:S6325 | Use a regular expression literal instead of the 'RegExp' constructor. | d985f534-9810-463b-98c0-fece74cd5019 |
| 29 | CODE_SMELL | MINOR | scripts/pr-check.mjs:18 | javascript:S6325 | Use a regular expression literal instead of the 'RegExp' constructor. | aee9e1f4-7b89-4a51-94ab-feec7b123ba6 |
| 30 | CODE_SMELL | MINOR | src/main/browser.ts:59 | typescript:S6325 | Use a regular expression literal instead of the 'RegExp' constructor. | 143d504a-95b9-47a3-a3a9-3a5a75d6feb4 |
| 31 | CODE_SMELL | MAJOR | src/main/goal.ts:2801 | typescript:S5843 | Simplify this regular expression to reduce its complexity from 25 to the 20 allowed. | 1894631e-ebce-454a-a9d7-a3d57d1a8900 |
| 32 | CODE_SMELL | MINOR | src/main/goal.ts:2801 | typescript:S6325 | Use a regular expression literal instead of the 'RegExp' constructor. | 641757dc-3eaf-4edb-8bf5-aa6104687781 |
| 33 | CODE_SMELL | MINOR | src/main/report-scrub.ts:94 | typescript:S6325 | Use a regular expression literal instead of the 'RegExp' constructor. | ce569312-b7f6-4c77-b8cd-e7454f443373 |
| 34 | CODE_SMELL | MINOR | src/main/session/image-request.ts:97 | typescript:S6325 | Use a regular expression literal instead of the 'RegExp' constructor. | 158d6850-1693-4864-857d-9d7f18fd7c3a |
| 35 | CODE_SMELL | MINOR | src/main/session/image-request.ts:98 | typescript:S6325 | Use a regular expression literal instead of the 'RegExp' constructor. | 14909efd-2fed-46ba-a4d6-8d2487c506ad |
| 36 | CODE_SMELL | MINOR | src/main/session/image-request.ts:131 | typescript:S6325 | Use a regular expression literal instead of the 'RegExp' constructor. | ac2641f7-fbdb-44f9-8ecd-b73388ed2ba6 |
| 37 | CODE_SMELL | MINOR | src/main/session/image-request.ts:140 | typescript:S6325 | Use a regular expression literal instead of the 'RegExp' constructor. | 39b7b003-a609-429b-9963-f5f968a56e7a |
| 38 | CODE_SMELL | MINOR | src/main/session/image-request.ts:146 | typescript:S6325 | Use a regular expression literal instead of the 'RegExp' constructor. | f8916c2d-5a2e-4b60-801e-333a6406920d |
| 39 | CODE_SMELL | MINOR | src/main/session/image-request.ts:149 | typescript:S6325 | Use a regular expression literal instead of the 'RegExp' constructor. | 8f4cee6f-1883-444f-a1ed-74a8edb64807 |
| 40 | CODE_SMELL | MINOR | src/main/session/image-request.ts:152 | typescript:S6325 | Use a regular expression literal instead of the 'RegExp' constructor. | 0fb349c4-0324-4095-b169-635c0be145fd |
| 41 | CODE_SMELL | MINOR | src/main/session/image-request.ts:153 | typescript:S6325 | Use a regular expression literal instead of the 'RegExp' constructor. | ea781b9b-006f-45fa-a7cd-6d836791d417 |
| 42 | CODE_SMELL | MINOR | src/main/session/image-request.ts:158 | typescript:S6325 | Use a regular expression literal instead of the 'RegExp' constructor. | a853cccb-ff98-4bbb-95ff-668ea928ce24 |
| 43 | CODE_SMELL | MINOR | src/main/tunnel/index.ts:103 | typescript:S6325 | Use a regular expression literal instead of the 'RegExp' constructor. | a3caa1ca-e227-4449-9ae9-ff2347b2b15b |
| 44 | CODE_SMELL | MINOR | src/renderer/skills.ts:14 | typescript:S6325 | Use a regular expression literal instead of the 'RegExp' constructor. | 361c4ecb-7290-46f1-8770-f933a3356dd9 |
| 45 | CODE_SMELL | MINOR | src/renderer/plugins.ts:248 | typescript:S7764 | Prefer `globalThis` over `window`. | 578da97c-8709-4b50-9a91-5d7a77504158 |
| 46 | CODE_SMELL | MAJOR | extension/background.js:2182 | javascript:S6660 | 'If' statement should not be the only statement in 'else' block | 292b3084-3c93-4f69-8177-9acaf268efc5 |
| 47 | CODE_SMELL | MINOR | src/main/bridge.ts:9007 | typescript:S7735 | Unexpected negated condition. | 8941e9d1-d49e-4838-8794-bf08ae5aa206 |
| 48 | CODE_SMELL | MAJOR | src/main/codex/unified-exec.ts:951 | typescript:S6660 | 'If' statement should not be the only statement in 'else' block | fbbcb14e-daf0-47ce-8f45-abeaacb2c6c2 |
| 49 | CODE_SMELL | MINOR | src/renderer/setup-browser.ts:39 | typescript:S6606 | Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read. | f26b1592-0d82-44f2-a4fb-c08a3b7ef826 |
| 50 | CODE_SMELL | MAJOR | extension/content.js:8141 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | e47e3220-6bea-46ca-9132-6a729861419f |
| 51 | CODE_SMELL | MINOR | extension/content.js:9761 | javascript:S1199 | Nested block is redundant. | 88e739c2-4521-48ef-adb0-510312a7d248 |
| 52 | CODE_SMELL | MINOR | extension/content.js:9775 | javascript:S1199 | Nested block is redundant. | 65d254a9-3863-423b-92ee-ed9fdf201358 |
| 53 | CODE_SMELL | MINOR | extension/content.js:9798 | javascript:S1199 | Nested block is redundant. | e44926f1-7a36-4976-a8aa-3fb9f7db10ca |
| 54 | CODE_SMELL | MINOR | extension/content.js:9805 | javascript:S1199 | Nested block is redundant. | 07bf3168-2409-472c-bd1f-9f5b241898b0 |
| 55 | CODE_SMELL | MINOR | extension/content.js:9835 | javascript:S1199 | Nested block is redundant. | 29506346-61ec-4d6b-8741-bda131a0a1b2 |
| 56 | CODE_SMELL | CRITICAL | extension/content.js:11389 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 5dbaa96e-02fb-4f1c-b07e-65782bc95695 |
| 57 | CODE_SMELL | MINOR | extension/content.js:11456 | javascript:S1199 | Nested block is redundant. | de22aefe-74b2-44f5-9ecc-998e0b631e29 |
| 58 | CODE_SMELL | MINOR | extension/content.js:11467 | javascript:S1199 | Nested block is redundant. | 8ecde695-5cbb-4d0f-8f22-2e62e1a856c2 |
| 59 | CODE_SMELL | MINOR | extension/content.js:11480 | javascript:S1199 | Nested block is redundant. | 4a75755b-44d9-4c9a-a881-06b2d6a41d8e |
| 60 | CODE_SMELL | MINOR | extension/content.js:11493 | javascript:S1199 | Nested block is redundant. | 9ea8df2a-e630-4723-b433-73725d7648c0 |
| 61 | CODE_SMELL | MINOR | extension/content.js:11499 | javascript:S1199 | Nested block is redundant. | 590e51ee-4544-4973-87f4-51e8f7aaf579 |
| 62 | CODE_SMELL | MINOR | extension/content.js:11505 | javascript:S1199 | Nested block is redundant. | 276ac306-6aee-4611-a622-24bbc6bffa5c |
| 63 | CODE_SMELL | MINOR | extension/content.js:11552 | javascript:S1199 | Nested block is redundant. | ef01a577-72b8-490e-b69c-196c0f8054ab |
| 64 | CODE_SMELL | MINOR | extension/content.js:11565 | javascript:S1199 | Nested block is redundant. | a714b398-6aeb-480d-8fd0-1dfe6408bf64 |
| 65 | CODE_SMELL | MINOR | extension/content.js:11616 | javascript:S1199 | Nested block is redundant. | 06059ed9-1de8-4226-8040-57b8a10e94b9 |
| 66 | CODE_SMELL | MINOR | extension/content.js:11655 | javascript:S1199 | Nested block is redundant. | 6b28e6fb-4ec8-4b54-9647-1614ca4221c7 |
| 67 | CODE_SMELL | MINOR | extension/content.js:11665 | javascript:S1199 | Nested block is redundant. | 86a7fdf8-08bb-4dd9-b42a-8df658a89ae8 |
| 68 | CODE_SMELL | MINOR | extension/content.js:11711 | javascript:S1199 | Nested block is redundant. | 86d21270-4b4b-4981-943c-68d17c6755dd |
| 69 | CODE_SMELL | MINOR | extension/content.js:11761 | javascript:S1199 | Nested block is redundant. | f023cc99-6ace-4c8c-ad9a-263544d4cb77 |
| 70 | BUG | MAJOR | src/renderer/chat.ts:2446 | typescript:S905 | Expected an assignment or function call and instead saw an expression. | af0903dd-3fdb-425e-8011-5c6fbb8e4c37 |
| 71 | BUG | MAJOR | src/renderer/chat.ts:4202 | typescript:S905 | Expected an assignment or function call and instead saw an expression. | 737cea5c-62c1-4ef2-a60e-215504346fab |
| 72 | BUG | MAJOR | src/renderer/cos-browser-sign-in.ts:65 | typescript:S905 | Expected an assignment or function call and instead saw an expression. | 14daac60-c642-468f-861b-1d4fbf3535df |
| 73 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2521 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 98a7bc7d-6703-4769-b514-d2cca7edef3e |
| 74 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2868 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 6e6e9eec-f1f4-4e28-84a2-d3ebe497f318 |
| 75 | CODE_SMELL | MINOR | src/main/agents.ts:2670 | typescript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | 41b33cce-25dc-4176-9212-292914c37525 |
| 76 | CODE_SMELL | MINOR | src/renderer/plugins.ts:127 | typescript:S7764 | Prefer `globalThis` over `window`. | 84bb4e5e-8d33-4312-a29f-137148c75d90 |
| 77 | CODE_SMELL | MINOR | src/renderer/plugins.ts:291 | typescript:S7764 | Prefer `globalThis` over `window`. | 53f957a5-a364-46e5-99a9-4d540dbe794d |
| 78 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:244 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | fa26888c-1577-4fbd-a551-d2a04a12fae3 |
| 79 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:1117 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | ee70f9d0-8b62-4031-9aab-5e1c87151739 |
| 80 | CODE_SMELL | MAJOR | extension/content.js:8523 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 1bf4e13f-95f7-46c3-9e0c-a2d4c2284efc |
| 81 | BUG | MAJOR | extension/fiber.js:1438 | javascript:S3403 | Remove this "===" check; it will always be false. Did you mean to use "=="? | d2099a30-e556-4963-9b5f-075c684913eb |
| 82 | CODE_SMELL | MAJOR | extension/fiber.js:2105 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 91a505dc-1743-43f8-bd66-731525ae06e1 |
| 83 | CODE_SMELL | MAJOR | src/main/browser.ts:283 | typescript:S4624 | Refactor this code to not use nested template literals. | fbc48ecc-b048-4f92-b625-1c41a0cff692 |
| 84 | CODE_SMELL | MINOR | src/main/codex/command-batch.ts:24 | typescript:S7781 | This pattern can be replaced with '\''. | a5a50b03-ed63-4141-bf2a-a34c5fc3c68b |
| 85 | CODE_SMELL | MAJOR | src/main/codex/shell.ts:342 | typescript:S4624 | Refactor this code to not use nested template literals. | 0fa1923a-cc58-4f03-b224-e55ee6c3be44 |
| 86 | CODE_SMELL | MINOR | src/main/codex/shell.ts:342 | typescript:S7781 | This pattern can be replaced with '\''. | ea486cd2-97c4-4ebe-8887-880da8aaea34 |
| 87 | CODE_SMELL | MAJOR | src/main/codex/unified-exec.ts:255 | typescript:S4624 | Refactor this code to not use nested template literals. | 917776e6-af22-446c-aff8-7659192f04f6 |
| 88 | CODE_SMELL | MAJOR | src/main/cos-browser/match-pattern.ts:17 | typescript:S4624 | Refactor this code to not use nested template literals. | a82b26e7-4cbe-49af-bfac-26dd30fcf586 |
| 89 | CODE_SMELL | MINOR | src/main/exec-hints.ts:699 | typescript:S7781 | This pattern can be replaced with '\''. | 3561afe7-a99c-4157-90da-63be989e364e |
| 90 | CODE_SMELL | MINOR | src/main/exec-hints.ts:861 | typescript:S7781 | This pattern can be replaced with '\\"'. | 550fce25-794c-436c-a6b0-8ece50fa7d6b |
| 91 | CODE_SMELL | MINOR | src/main/exec-hints.ts:1239 | typescript:S7781 | This pattern can be replaced with '*'. | ed2b9642-941a-4854-84a3-ece74a0c2a79 |
| 92 | CODE_SMELL | MINOR | src/main/exec-hints.ts:1240 | typescript:S7781 | This pattern can be replaced with '?'. | 07e7d1cb-13d4-459e-9f1d-760050be6801 |
| 93 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:67 | javascript:S7781 | This pattern can be replaced with ' '. | 237dcd4c-b79d-4760-bad3-0b9c929f91ba |
| 94 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:106 | javascript:S7781 | This pattern can be replaced with '\\\n'. | f5b3b3f4-e1a8-4671-bf76-3ec3d3c9844d |
| 95 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:1503 | javascript:S7781 | This pattern can be replaced with '\u00a0'. | b59d163c-0de7-4a34-8297-2ddbac9033d6 |
| 96 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:1854 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 4f65fd62-eff7-4b7c-959a-1af70d3f51e3 |
| 97 | CODE_SMELL | MINOR | extension/content.js:5849 | javascript:S7781 | This pattern can be replaced with '_'. | 5db69b5e-0120-413f-9209-adb263126e99 |
| 98 | CODE_SMELL | MINOR | extension/fiber.js:846 | javascript:S7781 | This pattern can be replaced with '\u00a0'. | d9554392-067e-4334-a421-941bd7c43c8e |
| 99 | CODE_SMELL | MINOR | scripts/verify-cos-sign-in.cjs:101 | javascript:S7781 | This pattern can be replaced with '\\'. | eefdfdb7-3093-4a98-97f0-e0ff547621fe |
| 100 | CODE_SMELL | MINOR | scripts/verify-workspace-terminal.cjs:68 | javascript:S7781 | This pattern can be replaced with '\\'. | 7c5a44c8-5708-476f-9fb4-726d88c23257 |
| 101 | CODE_SMELL | MINOR | src/main/browser.ts:282 | typescript:S7781 | This pattern can be replaced with '\''. | aa1c9aa8-2508-4b8b-9d37-0afdacff99bc |
| 102 | CODE_SMELL | MINOR | src/main/exec-hints.ts:835 | typescript:S7781 | This pattern can be replaced with '\\"'. | 40f08da5-e3da-4b99-ad3c-522906dc9de1 |
| 103 | CODE_SMELL | MINOR | src/main/exec-hints.ts:864 | typescript:S7781 | This pattern can be replaced with '\''. | cbf50126-5d61-4585-888f-c4e3162b2dd2 |
| 104 | CODE_SMELL | MINOR | src/main/exec-hints.ts:1145 | typescript:S7781 | This pattern can be replaced with '\''. | dd59f4da-552a-4262-821c-23458f2eda3e |
| 105 | CODE_SMELL | MINOR | src/main/exec.ts:381 | typescript:S7781 | This pattern can be replaced with '&quot;'. | 1999628e-f14d-47f1-9cad-04d6385c31dd |
| 106 | CODE_SMELL | MINOR | src/main/exec.ts:382 | typescript:S7781 | This pattern can be replaced with '&apos;'. | 5563a689-cd71-4ac1-bafa-ac2130255fce |
| 107 | CODE_SMELL | MINOR | src/main/exec.ts:383 | typescript:S7781 | This pattern can be replaced with '&lt;'. | fa659428-a5eb-49d3-9d4f-0afb07069f84 |
| 108 | CODE_SMELL | MINOR | src/main/exec.ts:384 | typescript:S7781 | This pattern can be replaced with '&gt;'. | 17841469-db4f-4a7b-91b7-3303316ca02a |
| 109 | CODE_SMELL | MINOR | src/main/exec.ts:385 | typescript:S7781 | This pattern can be replaced with '&amp;'. | 429f9bf4-aca6-4b69-9083-f2ccadfebc3d |
| 110 | CODE_SMELL | MINOR | src/main/fsops.ts:332 | typescript:S7781 | This pattern can be replaced with '_'. | e7980c4f-208f-4058-be6f-6df9198731f9 |
| 111 | CODE_SMELL | MINOR | src/main/fsops.ts:332 | typescript:S7781 | This pattern can be replaced with '-'. | fb2a336f-859f-4ded-af25-0eb6d5b36473 |
| 112 | CODE_SMELL | MINOR | src/main/mcp/tools-core.ts:2258 | typescript:S7781 | This pattern can be replaced with '\\'. | 7d8b70f6-fe31-449c-bd53-e7f6efd45718 |
| 113 | CODE_SMELL | MINOR | src/main/sandbox.ts:435 | typescript:S7781 | This pattern can be replaced with '/'. | 51289da7-fb90-4e4d-95f3-d676469e8b46 |
| 114 | CODE_SMELL | MINOR | src/main/search.ts:274 | typescript:S7781 | This pattern can be replaced with '\\'. | ab42b527-51f5-4670-a96a-308a34cef694 |
| 115 | CODE_SMELL | MINOR | src/main/search.ts:280 | typescript:S7781 | This pattern can be replaced with '/./'. | 9353e08e-dd1c-4566-9efa-cadf568493dc |
| 116 | CODE_SMELL | MINOR | src/main/search.ts:498 | typescript:S7781 | This pattern can be replaced with '\\'. | bf82035f-9d91-46d7-8f97-d7bcb04ade86 |
| 117 | CODE_SMELL | MINOR | src/main/search.ts:514 | typescript:S7781 | This pattern can be replaced with '\\'. | 7e0509e4-8988-488a-9650-ad28334e92c7 |
| 118 | CODE_SMELL | MINOR | src/main/session/handoff.ts:113 | typescript:S7781 | This pattern can be replaced with '\u00c2\u00a0'. | 5828d2fb-e4a6-48b4-84dd-e48e20caeb06 |
| 119 | CODE_SMELL | MINOR | src/main/session/handoff.ts:113 | typescript:S7781 | This pattern can be replaced with '\u00a0'. | 920af8b5-37ce-4e75-b8a6-d200beffd7be |
| 120 | CODE_SMELL | MINOR | src/main/skill-access.ts:22 | typescript:S7781 | This pattern can be replaced with '\\'. | ed5cde5d-2c7c-4ef0-8e62-160e2453c932 |
| 121 | CODE_SMELL | MINOR | src/main/skill-access.ts:27 | typescript:S7781 | This pattern can be replaced with '\\'. | 9186a825-e120-412c-9bfb-6e3e97a45158 |
| 122 | CODE_SMELL | MINOR | src/main/skills.ts:131 | typescript:S7781 | This pattern can be replaced with '\'\''. | 288529d3-3572-4cbf-94f1-e12f53c4a818 |
| 123 | CODE_SMELL | MINOR | src/main/text-match.ts:14 | typescript:S7781 | This pattern can be replaced with '\r\n'. | d62e5e9c-154a-4eb8-9632-4f464cd55bbc |
| 124 | CODE_SMELL | MINOR | src/main/text-match.ts:170 | typescript:S7781 | This pattern can be replaced with '\t'. | 9f20af54-0de0-49bc-9b27-d846c66e7a9b |
| 125 | CODE_SMELL | MINOR | src/main/user-skills.ts:116 | typescript:S7781 | This pattern can be replaced with '\\'. | 7f9653d3-360f-4e83-93d1-7e6c05f7dd65 |
| 126 | CODE_SMELL | MINOR | src/main/user-skills.ts:141 | typescript:S7781 | This pattern can be replaced with '\\'. | 278bdde1-2692-4b6f-a9d0-c4ae6c1aff81 |
| 127 | CODE_SMELL | MINOR | src/main/user-skills.ts:151 | typescript:S7781 | This pattern can be replaced with '\\'. | eb2e11c1-1d63-4cb3-b885-fad74f3aa5e2 |
| 128 | CODE_SMELL | MINOR | src/shared/session.ts:552 | typescript:S7781 | This pattern can be replaced with '\\'. | 41bb9063-b31f-4387-b6e1-aa0933d23de5 |
| 129 | CODE_SMELL | MINOR | src/shared/user-prompt.ts:27 | typescript:S7781 | This pattern can be replaced with '\\\n'. | 7f7d104e-c0b1-472e-a2e8-94475f24b972 |
| 130 | CODE_SMELL | MAJOR | scripts/smoke-packaged-runtime.mjs:157 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | b05ee50b-cfdf-4362-bc68-107ba1a2ed98 |
| 131 | CODE_SMELL | MAJOR | src/main/bridge.ts:8190 | typescript:S4043 | Move this array "sort" operation to a separate statement or replace it with "toSorted". | cea2fdf7-16dd-4e78-ab7a-835818bd6c1e |
| 132 | CODE_SMELL | MAJOR | src/main/exec-hints.ts:1249 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 13653160-8c11-4927-b149-863785b609f8 |
| 133 | CODE_SMELL | MAJOR | src/main/plugin-refresh.ts:75 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 3136c2ea-5e09-4a0a-a5aa-63a6f5a6272e |
| 134 | CODE_SMELL | MAJOR | src/main/session/continuation.ts:590 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 31623cb3-333e-413a-bff2-a2e83b784f21 |
| 135 | CODE_SMELL | MINOR | src/main/session/input.ts:1115 | typescript:S7718 | The catch parameter `failure` should be named `error_`. | 234afe47-aa08-4761-9fd9-40ed25cca797 |
| 136 | BUG | CRITICAL | src/main/session/store.ts:3696 | typescript:S1143 | Unsafe usage of ThrowStatement. | ed1e9bfc-56c9-43ca-b3fb-67ad4a326e9e |
| 137 | BUG | CRITICAL | src/main/session/store.ts:3697 | typescript:S1143 | Unsafe usage of ThrowStatement. | 76e6d7c4-eb67-4451-ac23-78b6d0697f0a |
| 138 | CODE_SMELL | CRITICAL | extension/background.js:301 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 35 to the 15 allowed. | e1ec9404-385c-4030-9b2e-74eae7401b5c |
| 139 | CODE_SMELL | CRITICAL | extension/background.js:1976 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 155 to the 15 allowed. | 2f185474-6e20-47e8-abe6-89de2cff6d8e |
| 140 | CODE_SMELL | MINOR | extension/background.js:3221 | javascript:S1940 | Use the opposite operator (&gt;=) instead. | 6fcbfa88-79b6-4262-a960-962472b3f701 |
| 141 | CODE_SMELL | CRITICAL | scripts/verify-whats-new.cjs:13 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 26 to the 15 allowed. | 71797ec2-ccc9-4543-a5a5-759c296709cd |
| 142 | CODE_SMELL | MINOR | src/renderer/whats-new.ts:77 | typescript:S7764 | Prefer `globalThis` over `window`. | 9d381694-e093-4e85-bdf4-aa9d9b151548 |
| 143 | CODE_SMELL | MINOR | src/renderer/whats-new.ts:76 | typescript:S7764 | Prefer `globalThis` over `window`. | ec4b7e78-e473-44a0-a1b8-d21a82c84301 |
| 144 | CODE_SMELL | MINOR | src/renderer/whats-new.ts:82 | typescript:S7764 | Prefer `globalThis` over `window`. | d3c6fa3b-b8ec-41f2-b7b0-a2fe4b0a0d18 |
| 145 | CODE_SMELL | MINOR | src/renderer/whats-new.ts:99 | typescript:S7764 | Prefer `globalThis` over `window`. | 44598d14-b99b-4a0f-b0d3-e51426c45e97 |
| 146 | CODE_SMELL | MINOR | src/renderer/whats-new.ts:104 | typescript:S7764 | Prefer `globalThis` over `window`. | ec6a5adf-8e61-481f-93ab-91f2ba04df6f |
| 147 | CODE_SMELL | MINOR | src/renderer/whats-new.ts:110 | typescript:S7764 | Prefer `globalThis` over `window`. | 05918651-5145-4552-86ec-fb9bfc1a4c75 |
| 148 | CODE_SMELL | MAJOR | extension/background.js:1320 | javascript:S107 | Function 'commandAckPayload' has too many parameters (8). Maximum allowed is 7. | 1356f4d9-df6c-48f0-81ac-a310e77eec35 |
| 149 | CODE_SMELL | MAJOR | extension/background.js:1411 | javascript:S107 | Async function 'ackCommand' has too many parameters (9). Maximum allowed is 7. | 987ea1a0-148f-45b2-b6d4-a98731ddb9c5 |
| 150 | CODE_SMELL | MAJOR | extension/background.js:1411 | javascript:S1788 | Default parameters should be last. | df54402c-b18f-4c61-801a-7a8344eec44e |
| 151 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:3155 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | 7977f5ef-1ff1-4b01-828c-1fd5cb1c511e |
| 152 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:3167 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | f221586a-e0dc-49c9-8e5e-a7b33929d34a |
| 153 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:3195 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 78068a4b-ceb7-41d7-8850-15616b0136c3 |
| 154 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:3210 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 07003f77-d6f2-44f5-a56c-8c08fc046907 |
| 155 | CODE_SMELL | CRITICAL | extension/content.js:11323 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 90 to the 15 allowed. | 84f97b0e-a991-41a9-b051-60977c34f245 |
| 156 | CODE_SMELL | CRITICAL | src/main/bridge.ts:2119 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 1486 to the 15 allowed. | 1f05cdc1-fcb1-451d-bb36-c81e6fd1034a |
| 157 | CODE_SMELL | CRITICAL | src/main/goal.ts:1865 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 18 to the 15 allowed. | 0a691731-0393-48b5-b3ea-2b473ca39810 |
| 158 | CODE_SMELL | MINOR | src/renderer/chat.ts:6153 | typescript:S7764 | Prefer `globalThis` over `window`. | c206970e-83e9-4d7b-b552-6c178877cbed |
| 159 | CODE_SMELL | MINOR | src/renderer/chat.ts:6157 | typescript:S7764 | Prefer `globalThis` over `window`. | f7d91034-47a9-4b06-9b61-995b16461df6 |
| 160 | CODE_SMELL | CRITICAL | scripts/verify-recovery-layout.cjs:18 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 44 to the 15 allowed. | 9181e8ac-085c-4e30-8ec3-7e5a3fd5e368 |
| 161 | CODE_SMELL | CRITICAL | src/main/bridge.ts:7137 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 87 to the 15 allowed. | 28753011-d4b4-47f1-985e-d841591e25a9 |
| 162 | CODE_SMELL | CRITICAL | src/main/bridge.ts:8538 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 31 to the 15 allowed. | 1b4d3c32-8aae-4fc8-a580-09c72b55611d |
| 163 | CODE_SMELL | CRITICAL | src/main/bridge.ts:8591 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 65 to the 15 allowed. | 25abeff7-7798-45df-ac2c-59e6824a63d4 |
| 164 | CODE_SMELL | CRITICAL | src/main/goal.ts:484 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 29 to the 15 allowed. | c437db70-8569-4735-9e17-3857a33ee8d5 |
| 165 | CODE_SMELL | CRITICAL | src/main/goal.ts:559 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | 71aab452-56d2-4f2c-a19e-ee32c6ae5e39 |
| 166 | CODE_SMELL | MAJOR | src/main/goal.ts:611 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | d0b152aa-a1be-40e6-9d73-d5bb010a22c6 |
| 167 | CODE_SMELL | MAJOR | src/main/goal.ts:635 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | c244f9e4-7979-4760-8ce4-6562fb77838d |
| 168 | CODE_SMELL | CRITICAL | src/main/goal.ts:660 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 30 to the 15 allowed. | a71ca9cd-0e7b-4e1c-9e41-aaf4a02eb5cb |
| 169 | CODE_SMELL | MAJOR | src/main/session/input.ts:550 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | ee62df14-e23d-4a1b-b2ff-15005026c2aa |
| 170 | CODE_SMELL | MAJOR | src/main/session/input.ts:561 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 69ba1d86-c8df-4fbf-b3bd-81be04272491 |
| 171 | CODE_SMELL | MAJOR | src/main/session/input.ts:904 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 1265bb07-65d2-480b-8951-10924f643e2c |
| 172 | CODE_SMELL | MAJOR | src/main/session/input.ts:907 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 6961e898-307a-4cf7-9f45-f24d56298745 |
| 173 | CODE_SMELL | CRITICAL | src/main/session/input.ts:1186 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 26 to the 15 allowed. | c1eb038a-64e8-48da-b3ad-b997c41d9328 |
| 174 | CODE_SMELL | CRITICAL | src/renderer/recovery.ts:14 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 23 to the 15 allowed. | 6ea9ace8-aa27-4578-a442-e5ce35d1ff0d |
| 175 | CODE_SMELL | CRITICAL | src/renderer/recovery.ts:74 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | 7ca78acf-dbc1-4925-b51c-7ce4cc2c980d |
| 176 | CODE_SMELL | CRITICAL | extension/content.js:2517 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 132 to the 15 allowed. | f15b6fc4-a477-4a98-ab7c-f1e40ab81a7d |
| 177 | CODE_SMELL | CRITICAL | src/main/bridge.ts:8243 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 67 to the 15 allowed. | 5421f3da-efff-4b13-8e59-13de0e395b0c |
| 178 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:2771 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 48 to the 15 allowed. | cb25b87f-4c3c-4fe5-a3f1-6907da7f804d |
| 179 | CODE_SMELL | CRITICAL | src/renderer/chat-models.ts:89 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | 9b4a490f-8c9e-4d61-aa57-c0b3aad85154 |
| 180 | CODE_SMELL | CRITICAL | scripts/verify-sidebar-setup.cjs:17 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 31 to the 15 allowed. | d13dac6f-31eb-4287-ad1e-6815c8ad285d |
| 181 | CODE_SMELL | CRITICAL | scripts/fixtures/ink.cjs:5 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | c0840734-975e-4150-99d8-2a0ec964dfa4 |
| 182 | CODE_SMELL | MINOR | scripts/fixtures/ink.cjs:16 | javascript:S1481 | Remove the declaration of the unused 'height' variable. | 0757ac7d-7ef6-4308-bf06-e60793344bcb |
| 183 | CODE_SMELL | MAJOR | scripts/fixtures/ink.cjs:16 | javascript:S1854 | Remove this useless assignment to variable "height". | a2d6b07b-312a-43cc-a932-2f08db9708d4 |
| 184 | CODE_SMELL | CRITICAL | scripts/verify-composer-ui.cjs:12 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 31 to the 15 allowed. | 65e6692d-4896-46a8-80b0-8fff903a6f36 |
| 185 | CODE_SMELL | CRITICAL | src/main/bridge.ts:6910 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 36 to the 15 allowed. | 29ee2031-bd74-4a97-a3ef-9e00783e90cc |
| 186 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:909 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 52 to the 15 allowed. | 67b5128a-6b97-4bae-8651-0a28ac64bb94 |
| 187 | CODE_SMELL | CRITICAL | src/renderer/settings-search.ts:49 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 36 to the 15 allowed. | fa8253c9-8008-4c0e-b4de-faf683c9eade |
| 188 | CODE_SMELL | MAJOR | src/renderer/settings-search.ts:102 | typescript:S4043 | Move this array "sort" operation to a separate statement or replace it with "toSorted". | 1c4d96b6-2959-4bf5-9378-c99c81025ece |
| 189 | CODE_SMELL | MINOR | src/renderer/settings-search.ts:149 | typescript:S7764 | Prefer `globalThis` over `window`. | 6647db42-2848-48cc-9540-c13537c78b46 |
| 190 | CODE_SMELL | MINOR | src/renderer/settings-search.ts:151 | typescript:S7764 | Prefer `globalThis` over `window`. | 5b132d7c-4efb-4815-a28a-bd048e79174d |
| 191 | CODE_SMELL | MINOR | src/renderer/settings-search.ts:155 | typescript:S7764 | Prefer `globalThis` over `window`. | 1b26fec7-3610-416d-809d-d512008777cd |
| 192 | CODE_SMELL | CRITICAL | scripts/verify-settings-layout.cjs:12 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 84 to the 15 allowed. | 6eccadd2-62eb-414a-b9c8-f5705c9d8bcf |
| 193 | CODE_SMELL | MINOR | src/renderer/main.ts:1279 | typescript:S7764 | Prefer `globalThis` over `window`. | 0b12de51-9335-46e0-a906-47ca64f4a402 |
| 194 | CODE_SMELL | MINOR | src/renderer/main.ts:1280 | typescript:S7764 | Prefer `globalThis` over `window`. | 5e61d185-da02-4a8d-bf4e-c6708bf985d7 |
| 195 | CODE_SMELL | CRITICAL | src/renderer/main.ts:1288 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 95 to the 15 allowed. | d9b97382-c1fc-4883-b200-7b055a3fee45 |
| 196 | CODE_SMELL | MINOR | src/renderer/main.ts:1343 | typescript:S7764 | Prefer `globalThis` over `window`. | 35b69079-7b85-4335-922a-22aa97b4ce47 |
| 197 | CODE_SMELL | MINOR | src/renderer/main.ts:1356 | typescript:S7764 | Prefer `globalThis` over `window`. | 47fac4e8-83ee-4e4d-a58a-157a9264a5f4 |
| 198 | CODE_SMELL | MINOR | src/renderer/main.ts:1390 | typescript:S7764 | Prefer `globalThis` over `window`. | 888931e3-a15d-4aba-97a8-ca7dcefcddd0 |
| 199 | CODE_SMELL | MINOR | src/renderer/main.ts:1431 | typescript:S7764 | Prefer `globalThis` over `window`. | 901c44b9-b921-41b5-9acb-64e525946c28 |
| 200 | CODE_SMELL | CRITICAL | src/renderer/chat-models.ts:154 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | 57cd1599-754c-429b-9025-03765ec6616d |
| 201 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:3642 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 73 to the 15 allowed. | a8c6edc1-9d2a-4185-b6a7-2532214d9b8b |
| 202 | CODE_SMELL | MINOR | src/main/connection.ts:184 | typescript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | 7f1c5e62-0658-49ee-8ff7-210de6cb6274 |
| 203 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:512 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 51 to the 15 allowed. | baaf842a-6b40-440e-b31a-fc99a17344fb |
| 204 | CODE_SMELL | MINOR | src/renderer/row-menu.ts:72 | typescript:S7764 | Prefer `globalThis` over `window`. | d649fa4c-94be-4a7a-a9a9-9614e3260f2e |
| 205 | CODE_SMELL | MINOR | src/renderer/row-menu.ts:118 | typescript:S7764 | Prefer `globalThis` over `window`. | b477b2c5-896f-424a-8601-9fb506690bdd |
| 206 | CODE_SMELL | MINOR | src/renderer/row-menu.ts:121 | typescript:S7764 | Prefer `globalThis` over `window`. | 229b0dc6-2780-450d-a559-67dbf3a4f466 |
| 207 | CODE_SMELL | MINOR | src/renderer/row-menu.ts:182 | typescript:S7764 | Prefer `globalThis` over `window`. | 0646d73a-9adc-4288-8607-7ad7b2579de2 |
| 208 | CODE_SMELL | MINOR | src/renderer/row-menu.ts:183 | typescript:S7764 | Prefer `globalThis` over `window`. | 27f9f7e7-8090-4395-af3b-b12bf97bba71 |
| 209 | CODE_SMELL | MINOR | src/renderer/row-menu.ts:198 | typescript:S7764 | Prefer `globalThis` over `window`. | 0cbae6f5-287a-4dbe-b9d9-b9ced524f851 |
| 210 | CODE_SMELL | CRITICAL | src/renderer/row-menu.ts:203 | typescript:S3735 | Remove this use of the "void" operator. | 3867c0ad-acc3-4d19-aa02-1f199c0f039b |
| 211 | CODE_SMELL | MINOR | src/renderer/row-menu.ts:209 | typescript:S7764 | Prefer `globalThis` over `window`. | 16416a71-c719-4383-8e8e-cb53d2f76af4 |
| 212 | CODE_SMELL | CRITICAL | extension/content.js:3591 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 157 to the 15 allowed. | 6e52a950-87fb-4047-bfee-514e1eb4f4f9 |
| 213 | CODE_SMELL | CRITICAL | extension/fiber.js:663 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 25 to the 15 allowed. | d65b3100-1d0a-4685-aff5-6d081c574944 |
| 214 | CODE_SMELL | CRITICAL | extension/fiber.js:917 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 111 to the 15 allowed. | 103f4307-e0f3-4400-ad25-55f4cef3cb27 |
| 215 | CODE_SMELL | MINOR | extension/fiber.js:1043 | javascript:S4138 | Expected a `for-of` loop instead of a `for` loop with this simple iteration. | 2f76cf23-fe07-4567-be6c-ce1f10a76150 |
| 216 | CODE_SMELL | CRITICAL | src/main/bridge.ts:9360 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 60 to the 15 allowed. | da3c22e7-367f-4fb1-aafa-8f389f4cdc7d |
| 217 | CODE_SMELL | MINOR | src/renderer/sidebar-pins.ts:18 | typescript:S7764 | Prefer `globalThis` over `window`. | a6a0a41f-717b-4211-836f-101bbf302cd5 |
| 218 | CODE_SMELL | MINOR | src/renderer/sidebar-pins.ts:29 | typescript:S7764 | Prefer `globalThis` over `window`. | 99cc934d-d2ca-4ff2-a802-f237c87b17a0 |
| 219 | CODE_SMELL | MINOR | src/preload/index.ts:15 | typescript:S3863 | '../shared/session.js' imported multiple times. | 18ce17eb-c715-4e7b-bf79-1ec344b53e33 |
| 220 | CODE_SMELL | MINOR | src/renderer/chat-search.ts:64 | typescript:S7764 | Prefer `globalThis` over `window`. | ab8470e7-ce08-4a1a-a36f-4395111a3a83 |
| 221 | CODE_SMELL | MINOR | src/renderer/chat-search.ts:72 | typescript:S7764 | Prefer `globalThis` over `window`. | bddbd59a-59fd-4097-9b14-9f1e4cc77cf5 |
| 222 | CODE_SMELL | MINOR | src/renderer/chat-search.ts:207 | typescript:S7764 | Prefer `globalThis` over `window`. | c8bf3f1c-7408-40a5-8fed-34e0cd9fd48a |
| 223 | CODE_SMELL | MINOR | src/renderer/chat-search.ts:208 | typescript:S7764 | Prefer `globalThis` over `window`. | d33a7056-4598-4cfe-b482-f3637a972452 |
| 224 | CODE_SMELL | MINOR | src/renderer/chat.ts:2420 | typescript:S7764 | Prefer `globalThis` over `window`. | 1047d853-fa41-4871-868b-4f521275d258 |
| 225 | CODE_SMELL | MINOR | src/renderer/chat.ts:2448 | typescript:S7764 | Prefer `globalThis` over `window`. | bfcde97b-bd0c-48f0-8380-0f2a24abb731 |
| 226 | CODE_SMELL | CRITICAL | src/main/session/continuation.ts:1573 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 147 to the 15 allowed. | 083d64d8-fbf5-4b51-a569-1d8248c6e283 |
| 227 | CODE_SMELL | CRITICAL | extension/content.js:9703 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 31 to the 15 allowed. | 5a4c98e2-bf1a-4ebd-87a1-269f5eca630d |
| 228 | CODE_SMELL | CRITICAL | src/main/mcp/tools-core.ts:512 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 18 to the 15 allowed. | a1967579-7e90-4ecc-8537-35dc2bf4ced0 |
| 229 | CODE_SMELL | CRITICAL | src/main/session/image-request.ts:165 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 27 to the 15 allowed. | b4c43c88-42df-4a29-ad71-73fec739b79b |
| 230 | CODE_SMELL | CRITICAL | src/main/skill-library.ts:578 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 23 to the 15 allowed. | cf976ab0-5ed4-4863-9509-9f110e922d38 |
| 231 | CODE_SMELL | MAJOR | src/main/session/image-request.ts:134 | typescript:S6397 | Replace this character class by the character itself. | b45d65da-f063-4d8b-82b3-488affc52b88 |
| 232 | CODE_SMELL | CRITICAL | src/main/session/input.ts:1516 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 52 to the 15 allowed. | 399526f8-b721-4fe3-b95c-8613bcee1bb6 |
| 233 | CODE_SMELL | CRITICAL | src/main/user-skills.ts:112 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 26 to the 15 allowed. | 7fd2ca0b-6013-40c8-9802-f9a9c022bcab |
| 234 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:1173 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 43 to the 15 allowed. | fb7260fd-e66a-401c-a110-99f18172bd88 |
| 235 | CODE_SMELL | MINOR | src/main/session/search.ts:35 | typescript:S7758 | Prefer `String#codePointAt()` over `String#charCodeAt()`. | b12429e1-0196-4bb7-b65a-ba12c0b851fe |
| 236 | CODE_SMELL | CRITICAL | src/main/session/search.ts:172 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | 66deea02-9fa0-4ed9-8754-fa0d901a7f33 |
| 237 | CODE_SMELL | MINOR | src/renderer/shortcuts.ts:11 | typescript:S1874 | 'platform' is deprecated. | 237c22c6-eb76-4549-a210-f88fa0a2b0b4 |
| 238 | CODE_SMELL | MAJOR | src/renderer/shortcuts.ts:11 | typescript:S6557 | Use 'String#startsWith' method instead. | 676b97ec-f50d-4c5a-be8c-b286121ebc5e |
| 239 | CODE_SMELL | CRITICAL | src/main/session/store.ts:1808 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | 9a0fed0f-733a-4556-b8f9-2eab43ed234c |
| 240 | CODE_SMELL | CRITICAL | src/main/session/store.ts:1854 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | 560ef54b-277b-4834-9ab8-06b076b55100 |
| 241 | CODE_SMELL | CRITICAL | src/main/bridge.ts:1833 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 25 to the 15 allowed. | 7ca4c596-a3ea-4f8b-99e2-03872bc2c9ef |
| 242 | CODE_SMELL | MINOR | src/main/session/search.ts:128 | typescript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | 6e43cf83-5410-40d7-aaae-1662d6f486ee |
| 243 | CODE_SMELL | MINOR | src/renderer/chat-search.ts:16 | typescript:S7764 | Prefer `globalThis` over `window`. | 70bb161d-a798-483b-9324-2dc276059004 |
| 244 | CODE_SMELL | MINOR | src/renderer/chat-search.ts:138 | typescript:S7764 | Prefer `globalThis` over `window`. | 0eed8f25-d552-4f35-b605-1d66aabc90f0 |
| 245 | CODE_SMELL | MINOR | src/renderer/chat-search.ts:149 | typescript:S7764 | Prefer `globalThis` over `window`. | 049d8be1-605f-4973-a2f7-c38999c92d03 |
| 246 | CODE_SMELL | MINOR | src/renderer/chat-search.ts:153 | typescript:S7764 | Prefer `globalThis` over `window`. | fdfc7871-8f3e-4397-8630-d67da5fff45f |
| 247 | CODE_SMELL | MINOR | src/renderer/chat-search.ts:154 | typescript:S7764 | Prefer `globalThis` over `window`. | 76967ca0-abcf-466d-ae5f-8471353b3916 |
| 248 | CODE_SMELL | MINOR | src/main/cos-browser/host.ts:151 | typescript:S6594 | Use the "RegExp.exec()" method instead. | e51d30df-5fb3-43ce-b79f-2e5ccd10e00a |
| 249 | CODE_SMELL | MINOR | src/main/ipc.ts:118 | typescript:S3863 | './session/recorder.js' imported multiple times. | a736ab59-33ca-40ae-9d17-ba2c06ab15f1 |
| 250 | CODE_SMELL | CRITICAL | src/main/session/store.ts:2386 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 34 to the 15 allowed. | b13900f6-3b46-4cee-86ea-bc4128d4c590 |
| 251 | CODE_SMELL | CRITICAL | src/main/session/store.ts:3171 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 35 to the 15 allowed. | adf7d286-5929-4aeb-8d26-33aff4877b3d |
| 252 | CODE_SMELL | CRITICAL | extension/content.js:4267 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 348 to the 15 allowed. | 28a23b40-e2cc-451c-a1e6-66bb7149ef0d |
| 253 | CODE_SMELL | CRITICAL | extension/content.js:4567 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | acaf14b6-f00c-4b8c-a096-3b475742607e |
| 254 | CODE_SMELL | MINOR | extension/content.js:3891 | javascript:S1940 | Use the opposite operator (&lt;=) instead. | 2afa965e-c804-4d58-a396-f0647b3a4d18 |
| 255 | CODE_SMELL | MAJOR | extension/content.js:3891 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 4e11b169-15ea-4dba-8ef8-725ae260888d |
| 256 | CODE_SMELL | MAJOR | extension/content.js:3898 | javascript:S6557 | Use 'String#startsWith' method instead. | 977bdf58-45f2-42a6-b5a7-5d0c8bcef3f8 |
| 257 | CODE_SMELL | MINOR | extension/content.js:3903 | javascript:S7758 | Prefer `String.fromCodePoint()` over `String.fromCharCode()`. | ff3c02db-f965-4d01-8076-220855052ea5 |
| 258 | CODE_SMELL | CRITICAL | extension/content.js:13013 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 50 to the 15 allowed. | 31e50477-5deb-413f-89e2-58dcbb0f29a4 |
| 259 | CODE_SMELL | MINOR | src/main/image-export.ts:64 | typescript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | bc5ab033-1021-49ad-9a19-c8caa9ce37db |
| 260 | CODE_SMELL | MINOR | src/main/image-export.ts:160 | typescript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | b658c990-041a-462d-89b0-3761fdea3fa6 |
| 261 | CODE_SMELL | MINOR | src/main/mcp/tools-core.ts:9 | typescript:S3863 | '../session/correlation.js' imported multiple times. | fddfff07-7ece-4df6-96b6-9f4d72cbb356 |
| 262 | CODE_SMELL | CRITICAL | src/main/skill-library.ts:163 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 25 to the 15 allowed. | 672d6853-e4ec-419e-b575-32916159ac66 |
| 263 | CODE_SMELL | MINOR | src/main/skill-library.ts:193 | typescript:S7778 | Do not call `Array#push()` multiple times. | 0398b646-f2f1-4c8a-8921-8d892c9be839 |
| 264 | CODE_SMELL | CRITICAL | src/main/skill-library.ts:331 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 28 to the 15 allowed. | 184b0dd3-2298-4ab0-a2b9-9eed563aacf2 |
| 265 | CODE_SMELL | CRITICAL | src/main/skill-library.ts:399 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 169 to the 15 allowed. | ca706d55-ad89-4e99-88ca-180cb829674c |
| 266 | CODE_SMELL | CRITICAL | src/main/bridge.ts:5331 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | ea3c70e3-482d-49d4-a2a9-b0c6369cd428 |
| 267 | CODE_SMELL | CRITICAL | src/main/mcp/instructions.ts:74 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 46 to the 15 allowed. | df923aa4-9231-49c8-a76a-1dd0b3b24e81 |
| 268 | CODE_SMELL | CRITICAL | src/main/mcp/kernel.ts:694 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 166 to the 15 allowed. | e63febf8-7c68-476d-a4e2-9ac73541e96c |
| 269 | CODE_SMELL | CRITICAL | src/main/tunnel/locate.ts:93 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 21 to the 15 allowed. | ad3ef68c-0671-450e-be53-41b6ed4b98fc |
| 270 | CODE_SMELL | MAJOR | src/renderer/chat.ts:6180 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 51d0db88-78b8-47be-94cd-116d89634a36 |
| 271 | CODE_SMELL | CRITICAL | scripts/verify-pet-overlay-electron.cjs:87 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 31 to the 15 allowed. | 5a8e2bf5-68b3-44c3-b7cd-22f57aeea3ef |
| 272 | CODE_SMELL | CRITICAL | scripts/verify-pet-overlay-electron.cjs:163 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 70101233-5097-4988-938d-2b923da026e2 |
| 273 | CODE_SMELL | CRITICAL | scripts/verify-pet-overlay-electron.cjs:191 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 65be5d45-46c6-4a7d-a85a-2a41a282974e |
| 274 | CODE_SMELL | CRITICAL | src/main/pet-overlay.ts:138 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 33 to the 15 allowed. | e0a26490-76e9-4628-a2e7-e3d42e66f9b9 |
| 275 | CODE_SMELL | CRITICAL | extension/background.js:1085 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 29 to the 15 allowed. | b8183c8c-e474-4b10-9b11-0ab2e45d4f14 |
| 276 | CODE_SMELL | CRITICAL | extension/background.js:2753 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 73 to the 15 allowed. | 86843f1b-1e94-4a8d-a113-2a3c7344cdb6 |
| 277 | CODE_SMELL | MAJOR | extension/background.js:5101 | javascript:S6557 | Use 'String#startsWith' method instead. | a48362db-e548-493f-8870-37c297a7e1a7 |
| 278 | CODE_SMELL | CRITICAL | extension/popup.js:414 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 34 to the 15 allowed. | a66933cb-bd6b-477d-a296-86c00ccdb29d |
| 279 | CODE_SMELL | MINOR | scripts/fixtures/setup-preview.cjs:6 | javascript:S7726 | The arrow function should be named. | 14498181-5eb1-4050-8628-432374d0f5ea |
| 280 | CODE_SMELL | CRITICAL | scripts/verify-browser-setup.cjs:59 | javascript:S3735 | Remove this use of the "void" operator. | 117e8390-74c4-4c66-bc66-dbd02f956be7 |
| 281 | CODE_SMELL | CRITICAL | scripts/verify-browser-setup.cjs:61 | javascript:S3735 | Remove this use of the "void" operator. | 2e2666e8-95db-4c0f-a7ef-f802a03f3792 |
| 282 | CODE_SMELL | CRITICAL | scripts/verify-browser-setup.cjs:66 | javascript:S3735 | Remove this use of the "void" operator. | 6239c84e-9ab0-4134-8b19-b76a890ed00e |
| 283 | CODE_SMELL | CRITICAL | scripts/verify-browser-setup.cjs:67 | javascript:S3735 | Remove this use of the "void" operator. | d8df302e-fa6f-4de0-9381-dc0da9752335 |
| 284 | CODE_SMELL | CRITICAL | scripts/verify-browser-setup.cjs:68 | javascript:S3735 | Remove this use of the "void" operator. | 0f062007-7c75-4c8d-8009-94b7d2531b72 |
| 285 | CODE_SMELL | CRITICAL | scripts/verify-browser-setup.cjs:69 | javascript:S3735 | Remove this use of the "void" operator. | 02e6866f-6222-4f94-9f2b-12e0469fe6bb |
| 286 | CODE_SMELL | CRITICAL | scripts/verify-setup-guide.cjs:10 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 18 to the 15 allowed. | 808bdd25-105b-47ae-9b83-586480446578 |
| 287 | CODE_SMELL | MAJOR | src/main/bridge.ts:1033 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 863742a5-f6ab-4102-93af-8642a02d4e4c |
| 288 | CODE_SMELL | MAJOR | src/main/browser-proof.ts:79 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | fa985155-99f0-4dce-a976-9436847e5102 |
| 289 | CODE_SMELL | CRITICAL | src/main/browser.ts:42 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | 1f77a125-7a9c-4fab-953b-be6d3ecc1fbf |
| 290 | CODE_SMELL | CRITICAL | src/main/browser.ts:245 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 24 to the 15 allowed. | 278f5c69-9422-4089-bac0-0da3051c99cd |
| 291 | CODE_SMELL | MINOR | src/main/cos-browser/host.ts:321 | typescript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | dad15f3f-e62d-4559-aa1a-26926af30674 |
| 292 | CODE_SMELL | MAJOR | src/main/cos-browser/host.ts:740 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 10f6b619-9395-4c19-96e8-da7e7288bf84 |
| 293 | CODE_SMELL | MAJOR | src/main/cos-browser/host.ts:809 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 65d7355c-7384-40d7-8fa8-b84353a51df9 |
| 294 | CODE_SMELL | MINOR | src/main/cos-browser/host.ts:819 | typescript:S3626 | Remove this redundant jump. | 9bfb30c0-9b11-48a3-b1f0-17734b724def |
| 295 | CODE_SMELL | CRITICAL | src/main/cos-browser/host.ts:845 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 25 to the 15 allowed. | 0528d378-cc07-4d73-817b-b419b35783e8 |
| 296 | CODE_SMELL | MINOR | src/main/cos-browser/sign-in-transfer.ts:12 | typescript:S1874 | '(params?: unknown): ZodNumber' is deprecated. | a076cd25-41fa-400b-8207-930c5ceaa6d3 |
| 297 | CODE_SMELL | MAJOR | src/main/cos-browser/sign-in-transfer.ts:89 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | e59fbfa4-955b-4d3b-a6b0-6df904f6bf4d |
| 298 | CODE_SMELL | CRITICAL | src/main/index.ts:391 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 34 to the 15 allowed. | d5af23b2-88cd-4860-bdd9-d2c1bd8ef5b6 |
| 299 | CODE_SMELL | CRITICAL | src/main/ipc.ts:608 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 33 to the 15 allowed. | 675c26e1-c4c6-49c7-8d29-bfdd668630ce |
| 300 | CODE_SMELL | MAJOR | src/renderer/cos-browser-sign-in.html:13 | Web:S6819 | Use &lt;dialog&gt; instead of the dialog role to ensure accessibility across all devices. | 3280468e-6223-40f5-a0a4-791f2455127f |
| 301 | CODE_SMELL | MAJOR | src/renderer/cos-browser-sign-in.html:21 | Web:S6850 | Headings must have content and the content must be accessible by a screen reader. | 02e13fca-ff27-4446-8efb-d0139aca87a8 |
| 302 | CODE_SMELL | MAJOR | src/renderer/cos-browser-sign-in.html:24 | Web:S6819 | Use &lt;address&gt; or &lt;details&gt; or &lt;fieldset&gt; or &lt;optgroup&gt; instead of the group role to ensure accessibility across all devices. | be79d64e-2480-4b7e-a8ed-68a4916eb2f0 |
| 303 | CODE_SMELL | MINOR | src/renderer/cos-browser-sign-in.ts:17 | typescript:S7764 | Prefer `globalThis` over `window`. | 2309ca51-008f-4358-b990-989f7d77ae81 |
| 304 | CODE_SMELL | CRITICAL | src/renderer/cos-browser-sign-in.ts:51 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | 6a46cbd3-a51f-4473-b33c-cea17aca2f8a |
| 305 | CODE_SMELL | MINOR | src/renderer/cos-browser.ts:13 | typescript:S7764 | Prefer `globalThis` over `window`. | 967a5182-d402-4be7-9174-c476202bd383 |
| 306 | CODE_SMELL | MINOR | src/renderer/cos-browser.ts:94 | typescript:S1874 | 'webkitMaskImage' is deprecated. | be299366-42e4-43b3-a0b2-4e66b0916350 |
| 307 | CODE_SMELL | MAJOR | src/renderer/index.html:578 | Web:S6819 | Use &lt;input&gt; instead of the radio role to ensure accessibility across all devices. | fd4d6436-b4f6-47d4-8bfc-95011afa0ac8 |
| 308 | CODE_SMELL | MAJOR | src/renderer/index.html:579 | Web:S6819 | Use &lt;input&gt; instead of the radio role to ensure accessibility across all devices. | d0fa741b-63bf-4740-ab74-8a37bee67971 |
| 309 | CODE_SMELL | MAJOR | src/renderer/index.html:580 | Web:S6819 | Use &lt;input&gt; instead of the radio role to ensure accessibility across all devices. | a40dcef2-3830-4e82-8838-8048633e1f28 |
| 310 | CODE_SMELL | MAJOR | src/renderer/index.html:613 | Web:S6819 | Use &lt;input&gt; instead of the radio role to ensure accessibility across all devices. | 931fed4f-be32-4b41-bcb3-1e3f33d54685 |
| 311 | CODE_SMELL | MAJOR | src/renderer/index.html:613 | Web:S6807 | The attribute "aria-checked" is required by the role "radio". | ed2f76d8-1406-4465-9615-df872be02e4b |
| 312 | CODE_SMELL | MAJOR | src/renderer/index.html:614 | Web:S6819 | Use &lt;input&gt; instead of the radio role to ensure accessibility across all devices. | 11cb6a56-86ba-4935-af07-a9c3eac2e3c9 |
| 313 | CODE_SMELL | MAJOR | src/renderer/index.html:614 | Web:S6807 | The attribute "aria-checked" is required by the role "radio". | e547edf0-7258-4600-a227-976ff9c2a03a |
| 314 | CODE_SMELL | MAJOR | src/renderer/index.html:618 | Web:S6819 | Use &lt;output&gt; instead of the status role to ensure accessibility across all devices. | 506cd3d8-79fc-469b-a287-900219a01e30 |
| 315 | CODE_SMELL | CRITICAL | src/renderer/setup-browser.ts:65 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 36 to the 15 allowed. | 46799a51-b112-4fa4-bf9c-a2d55859d95c |
| 316 | CODE_SMELL | MINOR | src/renderer/setup-browser.ts:188 | typescript:S7764 | Prefer `globalThis` over `window`. | 304be44c-85f2-4679-b505-398cc28f5442 |
| 317 | CODE_SMELL | MINOR | src/renderer/setup-browser.ts:188 | typescript:S7764 | Prefer `globalThis` over `window`. | 59e54176-4abe-4285-bf5d-00a15db5c041 |
| 318 | CODE_SMELL | MINOR | src/main/cos-browser/chrome-api.ts:108 | typescript:S6551 | 'value' may use Object's default stringification format ('[object Object]') when stringified. | 8a8683ca-7dcb-4c77-b1df-fa260d104b72 |
| 319 | CODE_SMELL | MAJOR | src/main/cos-browser/chrome-api.ts:183 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 98643360-8308-4a06-90d6-181d5d596fb6 |
| 320 | CODE_SMELL | MINOR | src/preload/cos-browser-worker.ts:72 | typescript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | 5d49ce73-4fc0-4027-bb74-0ae6fb8e5641 |
| 321 | CODE_SMELL | CRITICAL | src/main/cos-browser/tab-model.ts:186 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 48 to the 15 allowed. | 08d2a77a-44c2-4f8c-aae1-8d83a01918c6 |
| 322 | CODE_SMELL | CRITICAL | src/main/mcp/tools-core.ts:2389 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 45 to the 15 allowed. | 4c865dc7-6a8c-4561-9e15-21ba9afbe5c2 |
| 323 | CODE_SMELL | CRITICAL | extension/usage.js:107 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 22 to the 15 allowed. | b364ad32-ab75-4821-9e7b-cbd13ceee650 |
| 324 | CODE_SMELL | MAJOR | src/main/connector-proof.ts:133 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | b1d64bb5-d7b5-4883-8a3e-0e9aa3c4180c |
| 325 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:3527 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 40 to the 15 allowed. | 6336fe3f-1618-4be9-a3e2-d6a1dc487ad5 |
| 326 | CODE_SMELL | MAJOR | src/renderer/chat-models.ts:34 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 83f9fe99-af70-4a7c-a4da-ad929ec20757 |
| 327 | CODE_SMELL | CRITICAL | src/renderer/chat-models.ts:225 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 33 to the 15 allowed. | 6e47bd4d-a444-47c0-aaea-07a5730049cd |
| 328 | CODE_SMELL | CRITICAL | extension/background.js:2973 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 130 to the 15 allowed. | 9ebed352-d7a1-42bd-ab21-165ffaea7def |
| 329 | CODE_SMELL | CRITICAL | extension/content.js:6693 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 136 to the 15 allowed. | 0d33de1b-c444-47f5-b6f4-169f7b42fc0e |
| 330 | CODE_SMELL | CRITICAL | src/main/bridge.ts:9515 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 46 to the 15 allowed. | 6e1ff9dd-bae1-4886-9aea-9971e05592cd |
| 331 | CODE_SMELL | MINOR | extension/content.js:6122 | javascript:S7776 | `LEGACY_CONNECTORS` should be a `Set`, and use `LEGACY_CONNECTORS.has()` to check existence or non-existence. | 46cde66e-e558-4843-b765-a88a045a1dd6 |
| 332 | CODE_SMELL | MINOR | src/main/mcp/surfaces.ts:41 | typescript:S7763 | Use `export…from` to re-export `CONNECTOR_BRAND`. | 8a74036c-dd57-43bf-ad41-1bd5da6c9423 |
| 333 | CODE_SMELL | CRITICAL | scripts/verify-plan-collapse.cjs:11 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | a4dfcaad-0943-447f-995f-627d07f084a2 |
| 334 | CODE_SMELL | MAJOR | src/renderer/tool-artifacts.ts:30 | typescript:S7721 | Move function 'unavailable' to the outer scope. | 8f93c82b-feec-409f-9a22-d726cdbe71d4 |
| 335 | CODE_SMELL | MINOR | src/renderer/agent-communication.ts:9 | typescript:S7758 | Prefer `String#codePointAt()` over `String#charCodeAt()`. | c3041cff-783f-4ff9-b620-05addd49b048 |
| 336 | CODE_SMELL | CRITICAL | src/renderer/agent-communication.ts:15 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | 1db1fef5-cfa1-4120-bcd6-ee798404201f |
| 337 | CODE_SMELL | MINOR | scripts/verify-chat-opening-scroll.cjs:28 | javascript:S7776 | `iconFiles` should be a `Set`, and use `iconFiles.has()` to check existence or non-existence. | f8ea255a-aaa0-4a4b-b586-6cbd827bdb2f |
| 338 | CODE_SMELL | MINOR | src/renderer/chat.ts:6136 | typescript:S7764 | Prefer `globalThis` over `window`. | 6471f1d0-4dca-418e-b96b-5bd6db517a40 |
| 339 | CODE_SMELL | MINOR | src/renderer/chat.ts:6143 | typescript:S7764 | Prefer `globalThis` over `window`. | 79288ad6-1023-4e63-99c6-67d1790ddfd6 |
| 340 | CODE_SMELL | MINOR | src/renderer/chat.ts:6191 | typescript:S7764 | Prefer `globalThis` over `window`. | e416349e-b1a9-4aeb-be56-b74f02ceb859 |
| 341 | CODE_SMELL | MINOR | src/renderer/chat.ts:6192 | typescript:S7764 | Prefer `globalThis` over `window`. | 168edac5-774a-4929-8e36-792e409801b7 |
| 342 | CODE_SMELL | MINOR | src/renderer/chat.ts:6194 | typescript:S7764 | Prefer `globalThis` over `window`. | c2e0b220-6eb9-4e3c-b8fe-ab27ea518fbe |
| 343 | CODE_SMELL | MINOR | src/renderer/chat.ts:6197 | typescript:S7764 | Prefer `globalThis` over `window`. | b00a2630-6779-4f04-899b-c0ed5be38649 |
| 344 | CODE_SMELL | CRITICAL | src/main/bridge.ts:9830 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | ec9f054c-aa9f-4fcc-9f25-aff8a07d5cea |
| 345 | CODE_SMELL | CRITICAL | extension/content.js:12336 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 130 to the 15 allowed. | 6c2384e2-a14a-4889-b282-8d18390b4995 |
| 346 | CODE_SMELL | MINOR | extension/content.js:12358 | javascript:S7750 | Prefer `.findLast(…)` over `.filter(…).at(-1)`. | 1bda4878-525f-4d9f-8a0a-240ef06bfb6c |
| 347 | CODE_SMELL | CRITICAL | extension/content.js:12622 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 7765beb9-5c00-448a-8a1c-bab9681bb235 |
| 348 | CODE_SMELL | CRITICAL | extension/content.js:12627 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 4237a82b-6ac1-4f96-8c44-49dfc52b7f68 |
| 349 | CODE_SMELL | CRITICAL | scripts/verify-overwrite-layout.cjs:14 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 25 to the 15 allowed. | a18a8f1a-7ea0-46be-aae9-e3f7c653bcb0 |
| 350 | CODE_SMELL | MINOR | src/renderer/i18n.ts:41 | typescript:S7764 | Prefer `globalThis` over `window`. | 1c2661cc-495f-4f5b-8b87-1e9e6232c1c6 |
| 351 | CODE_SMELL | MINOR | src/renderer/i18n.ts:41 | typescript:S7764 | Prefer `globalThis` over `window`. | 45fc2600-0941-4f00-99ea-5ee5b9729347 |
| 352 | CODE_SMELL | MINOR | src/renderer/i18n.ts:41 | typescript:S7764 | Prefer `globalThis` over `window`. | 96207bdf-f522-489d-990d-8c2049e16a0d |
| 353 | CODE_SMELL | MINOR | src/renderer/i18n.ts:47 | typescript:S7764 | Prefer `globalThis` over `window`. | eebbf457-228f-488f-be1a-bff399c8cace |
| 354 | CODE_SMELL | CRITICAL | scripts/verify-accessibility.cjs:31 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 22 to the 15 allowed. | 5afe35b0-1c71-428f-9efa-bd1dd5d5a9cd |
| 355 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:5185 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | 4c44e043-9095-440e-b85d-e2a3b2186295 |
| 356 | CODE_SMELL | CRITICAL | extension/content.js:11138 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 55513c93-152e-495f-aebc-9229c2dbe5ff |
| 357 | CODE_SMELL | CRITICAL | extension/content.js:11141 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 69ef5191-5182-4182-8074-0a3d393b435f |
| 358 | CODE_SMELL | CRITICAL | extension/content.js:11156 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 5928e3a5-425f-4154-98e6-b9cb25f8c5ce |
| 359 | CODE_SMELL | CRITICAL | extension/content.js:11161 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 4c17ce9a-6165-444f-a4fc-4655343ed61d |
| 360 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:2649 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | 53c2503a-509d-4dd2-ba5e-bcfee4dd587c |
| 361 | CODE_SMELL | MINOR | src/renderer/tool-artifacts.ts:43 | typescript:S7764 | Prefer `globalThis` over `window`. | 06c55ce1-b020-42e3-a21b-4e5d953e801f |
| 362 | CODE_SMELL | MAJOR | src/renderer/tool-artifacts.ts:45 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 822c9047-5444-44e0-b83b-c7f57a58731e |
| 363 | CODE_SMELL | MINOR | src/renderer/tool-artifacts.ts:52 | typescript:S7764 | Prefer `globalThis` over `window`. | 9743f041-4e77-4fb0-b1a1-b9d581046710 |
| 364 | CODE_SMELL | CRITICAL | src/renderer/unified-diff.ts:11 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | 8f4c983f-6d44-481a-9e98-e75c5f6f0d1a |
| 365 | CODE_SMELL | CRITICAL | src/renderer/unified-diff.ts:42 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | 2a1db7d7-1f51-4bf3-942c-dba7410d9203 |
| 366 | CODE_SMELL | MAJOR | src/renderer/index.html:560 | Web:S6819 | Use &lt;progress&gt; instead of the progressbar role to ensure accessibility across all devices. | 7502a346-a5e8-41b8-932d-c5a79116b300 |
| 367 | CODE_SMELL | CRITICAL | src/main/codex/apply-patch/streaming-parser.ts:219 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 28 to the 15 allowed. | 8e68f050-7277-4e25-878a-4b7c2a6ec98d |
| 368 | CODE_SMELL | MINOR | src/main/ipc.ts:76 | typescript:S3863 | './session/store.js' imported multiple times. | 4d980d25-e837-46a2-b583-1ad4a0867ba5 |
| 369 | CODE_SMELL | MINOR | src/main/report-scrub.ts:86 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 23a66a9a-9733-4af7-989b-2efed218fad6 |
| 370 | CODE_SMELL | MINOR | src/main/report-scrub.ts:90 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 6661af83-dc4f-42cf-b2f2-ceb441d547b4 |
| 371 | CODE_SMELL | MAJOR | src/main/report-scrub.ts:94 | typescript:S5843 | Simplify this regular expression to reduce its complexity from 42 to the 20 allowed. | 01d1b0d3-3fec-496a-bd77-318565bc6cf8 |
| 372 | CODE_SMELL | MINOR | src/main/report-scrub.ts:94 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 987f7ffb-b2cb-47e2-a7d8-120e03675acf |
| 373 | CODE_SMELL | MINOR | src/main/report-scrub.ts:96 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | d01285ab-3645-442d-96da-af947e8ccc17 |
| 374 | CODE_SMELL | MINOR | src/main/report-scrub.ts:102 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | d0cca3a8-0fbc-4b81-bdf6-80f7f8fb0b16 |
| 375 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:1860 | javascript:S1874 | The signature '(commandId: string, showUI?: boolean \| undefined, value?: string \| undefined): boolean' of 'document.execCommand' is deprecated. | 367d0219-5522-45e9-8bba-aa829bba4875 |
| 376 | CODE_SMELL | MAJOR | extension/content.js:11082 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | efe1c1f9-9d42-46b2-a478-51dd77ed548b |
| 377 | CODE_SMELL | CRITICAL | scripts/verify-release-assets.mjs:38 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | e40431da-47c7-4795-89da-dd7c47acba2a |
| 378 | CODE_SMELL | MINOR | src/main/projects.ts:12 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | d2b75f44-47a1-4790-a480-bb54ecd303ad |
| 379 | CODE_SMELL | CRITICAL | src/main/session/prompt.ts:25 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 21 to the 15 allowed. | 5f83259c-9f15-4606-a78e-560bbbdffe7b |
| 380 | CODE_SMELL | CRITICAL | src/main/agents.ts:4861 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 109 to the 15 allowed. | a3b74949-7d7e-4c1d-8b2b-b2602a2fb115 |
| 381 | CODE_SMELL | CRITICAL | src/main/session/correlation.ts:62 | typescript:S3504 | Unexpected var, use let or const instead. | 90925ed4-b824-4256-a9f0-551ba53680de |
| 382 | CODE_SMELL | MAJOR | src/main/session/correlation.ts:120 | typescript:S1121 | Extract the assignment of "correlationListeners" from this expression. | fa06d740-dde7-423d-8300-78ed6f73287b |
| 383 | CODE_SMELL | MAJOR | src/renderer/chat.ts:3938 | typescript:S2301 | Provide multiple methods instead of using "visible" to determine which action to take. | 8b7090c1-98d1-4f52-9d7f-3f3efeb96b66 |
| 384 | CODE_SMELL | MINOR | src/renderer/chat.ts:3939 | typescript:S7764 | Prefer `globalThis` over `window`. | 82f71351-70c8-4165-89a9-dbaf4b37494b |
| 385 | CODE_SMELL | MINOR | src/renderer/chat.ts:3941 | typescript:S7764 | Prefer `globalThis` over `window`. | ee35359c-417e-4683-80f2-a589875a0e67 |
| 386 | CODE_SMELL | MAJOR | src/renderer/index.html:1195 | Web:S6819 | Use &lt;menu&gt; or &lt;ol&gt; or &lt;ul&gt; instead of the list role to ensure accessibility across all devices. | 2b9c724d-3bda-4044-a9e7-eddb128686e0 |
| 387 | CODE_SMELL | CRITICAL | src/main/codex-plugin-runtime.ts:61 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 22 to the 15 allowed. | 764c1b80-ee96-43ec-9765-34e9fd315459 |
| 388 | CODE_SMELL | CRITICAL | src/main/skill-library.ts:276 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 24 to the 15 allowed. | 6bc00d4e-a971-4f86-a17b-c379074453d6 |
| 389 | CODE_SMELL | CRITICAL | src/main/mcp/tools-core.ts:1423 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 87 to the 15 allowed. | 16b4ae5d-739b-4674-9a82-7b0cb710687b |
| 390 | CODE_SMELL | MAJOR | src/main/bridge.ts:7465 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 492f8236-9371-47e9-809e-c8e8db7660fc |
| 391 | CODE_SMELL | CRITICAL | src/main/bridge.ts:7577 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 26 to the 15 allowed. | 16632fe2-920d-4e75-b64a-70cdd9e0629a |
| 392 | CODE_SMELL | CRITICAL | src/main/session/store.ts:1019 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 44 to the 15 allowed. | 14407549-b5cf-4dc0-85ee-3fd11f645f04 |
| 393 | CODE_SMELL | CRITICAL | src/renderer/agent-panel.ts:46 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 33 to the 15 allowed. | 6fcf4fb6-deb8-4bed-97be-78bd13b846d2 |
| 394 | CODE_SMELL | MINOR | src/main/ipc.ts:878 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | 5eb85e8d-1331-4b6a-b398-4746dfd3767d |
| 395 | CODE_SMELL | MINOR | src/main/projects.ts:56 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | 04d2ac9b-abb5-41a8-8a32-69e744f43b46 |
| 396 | CODE_SMELL | MAJOR | src/main/agents.ts:3981 | typescript:S2301 | Provide multiple methods instead of using "generating" to determine which action to take. | 457f68c2-b44d-41d8-ac17-a33007c7ff08 |
| 397 | CODE_SMELL | CRITICAL | src/main/agents.ts:3990 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 29 to the 15 allowed. | 16a9f7c8-f451-4493-9bc8-5af7d8bb04ab |
| 398 | CODE_SMELL | CRITICAL | src/main/session/input.ts:714 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 83 to the 15 allowed. | 8670c7eb-8a85-432a-ac13-7ab9dcc26768 |
| 399 | CODE_SMELL | CRITICAL | src/main/skill-library.ts:224 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | 2026a6ed-61e7-49b5-8640-c56b16f6dd35 |
| 400 | CODE_SMELL | MINOR | src/renderer/chat.ts:6361 | typescript:S7764 | Prefer `globalThis` over `window`. | 4b1b16a1-ca17-4cff-b581-28fa13bfe423 |
| 401 | CODE_SMELL | CRITICAL | src/main/agents.ts:1814 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 53 to the 15 allowed. | 2530011b-4200-4260-97a0-39517512cf35 |
| 402 | CODE_SMELL | CRITICAL | src/main/agents.ts:2308 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 50 to the 15 allowed. | 212d396c-834f-43fb-b05b-003fa706e636 |
| 403 | CODE_SMELL | MAJOR | src/main/keychain-notice.ts:88 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 46ae69ec-7bd6-4f2c-bd8b-f963a8a45135 |
| 404 | CODE_SMELL | MAJOR | src/main/keychain-notice.ts:89 | typescript:S1121 | Extract the assignment of "gate" from this expression. | c0245ad6-9add-4d49-8ab9-a34801f078d4 |
| 405 | CODE_SMELL | MAJOR | src/main/keychain-notice.ts:117 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | efdabe93-0011-4d2b-96d3-a03733b724d3 |
| 406 | CODE_SMELL | MINOR | src/main/projects.ts:14 | typescript:S1874 | '(params?: unknown): ZodNumber' is deprecated. | a591c056-04b7-478b-8708-afd4165bc87d |
| 407 | CODE_SMELL | MAJOR | src/main/session/trusted-chats.ts:36 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | d310e119-8deb-47ec-8481-716debad64ff |
| 408 | CODE_SMELL | MINOR | src/renderer/chat-models.ts:549 | typescript:S7764 | Prefer `globalThis` over `window`. | b7374089-0f7c-4498-aa46-9a33d738539a |
| 409 | CODE_SMELL | MINOR | src/renderer/chat-models.ts:551 | typescript:S7764 | Prefer `globalThis` over `window`. | aa11b55f-3227-43f3-b35f-ec38e720638c |
| 410 | CODE_SMELL | CRITICAL | extension/fiber.js:202 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 32 to the 15 allowed. | 7f18776e-0054-49a1-a9e8-6840443d6eb9 |
| 411 | CODE_SMELL | CRITICAL | scripts/verify-connection-compact.cjs:9 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 26 to the 15 allowed. | 067927d0-15bd-47f9-94c5-d8e9c53b061d |
| 412 | CODE_SMELL | CRITICAL | scripts/verify-navigation-motion.cjs:11 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | a0291665-24c1-4591-8d51-ee6d7047d12f |
| 413 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2461 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 26 to the 15 allowed. | 6eda52cf-6102-4917-b5df-6c1929bceb80 |
| 414 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2512 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 554537f0-11ca-49f0-920d-f9d761e85895 |
| 415 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2539 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | cf0add80-8955-4719-ae5d-406eeff4d804 |
| 416 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2570 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 41686141-305f-4b1b-9765-2a6025a57dd7 |
| 417 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2615 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 04403064-4d74-465b-8cc2-596a09580d2e |
| 418 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2615 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | a625d966-a53b-4660-881f-98d1e9402faf |
| 419 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2615 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | dd39b771-420a-43e9-9b4c-b79ed93f8a9f |
| 420 | CODE_SMELL | MINOR | extension/content.js:12073 | javascript:S7764 | Prefer `globalThis` over `window`. | 42725d70-e4d2-486a-8932-7cceeb236b94 |
| 421 | CODE_SMELL | CRITICAL | extension/content.js:12082 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | 01586faf-2ede-4a54-b2e5-0577e15acf1e |
| 422 | CODE_SMELL | CRITICAL | extension/content.js:3514 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 40 to the 15 allowed. | 68eb0072-32e4-4d0c-b2ca-5171b01e40fe |
| 423 | CODE_SMELL | CRITICAL | extension/fiber.js:870 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 87 to the 15 allowed. | c9729e58-7b1f-42b4-ae3a-0e381f7a8fec |
| 424 | CODE_SMELL | MINOR | extension/fiber.js:872 | javascript:S4138 | Expected a `for-of` loop instead of a `for` loop with this simple iteration. | 4aa3808b-739a-439f-9173-d8ebbb6f938f |
| 425 | CODE_SMELL | CRITICAL | src/shared/session.ts:267 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 33 to the 15 allowed. | 0461732d-24f2-422d-9176-91f81da780e8 |
| 426 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:3036 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 31 to the 15 allowed. | af2d9b89-ac21-4670-ae1f-30369526fbdd |
| 427 | CODE_SMELL | MAJOR | src/renderer/index.html:1265 | Web:S6819 | Use &lt;address&gt; or &lt;details&gt; or &lt;fieldset&gt; or &lt;optgroup&gt; instead of the group role to ensure accessibility across all devices. | f5cfeeac-e59c-42c6-a3a1-b29f55e0ec94 |
| 428 | CODE_SMELL | CRITICAL | src/main/bridge.ts:9187 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 86 to the 15 allowed. | 3ddbc531-edc3-4bea-83aa-e0056910496f |
| 429 | CODE_SMELL | CRITICAL | extension/content.js:8139 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 33 to the 15 allowed. | 06555b9a-5ff1-49ae-99cb-b647c7f7e130 |
| 430 | BUG | MAJOR | extension/content.js:4264 | javascript:S3403 | Remove this "===" check; it will always be false. Did you mean to use "=="? | b9e0419f-1466-450c-8ad4-270cbdf17ea9 |
| 431 | CODE_SMELL | CRITICAL | extension/fiber.js:2028 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 220 to the 15 allowed. | 890cd5aa-d68b-402a-865d-f15383f940a6 |
| 432 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:4166 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | ccc425a2-0544-4ee6-9b45-1362d6c089d1 |
| 433 | CODE_SMELL | MINOR | src/renderer/chat.ts:2122 | typescript:S6594 | Use the "RegExp.exec()" method instead. | 56d23c8b-7374-4eda-abf1-d36a464828fa |
| 434 | CODE_SMELL | CRITICAL | extension/content.js:24 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 45 to the 15 allowed. | d849efbe-bb76-43af-abdd-65e97f1e5fd7 |
| 435 | CODE_SMELL | MINOR | extension/i18n.js:94 | javascript:S6653 | Use 'Object.hasOwn()' instead of 'Object.prototype.hasOwnProperty.call()'. | a522b62e-f725-4710-a322-9218c5eec11a |
| 436 | CODE_SMELL | CRITICAL | extension/content.js:2302 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 59 to the 15 allowed. | 9fb2b622-0f89-4142-a8f7-12fa177d401d |
| 437 | CODE_SMELL | CRITICAL | extension/content.js:12174 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | 94110b5e-f588-4962-b5a4-45409eb0ba03 |
| 438 | CODE_SMELL | CRITICAL | src/renderer/usage.ts:144 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 31 to the 15 allowed. | 8408370f-7574-4cc9-94ba-b88d578d419a |
| 439 | CODE_SMELL | CRITICAL | src/main/session/usage.ts:54 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 105 to the 15 allowed. | e37a419a-0e7a-45f5-b59f-32b63d83906d |
| 440 | CODE_SMELL | MINOR | extension/content.js:3174 | javascript:S7764 | Prefer `globalThis` over `window`. | 5a619a35-876c-436e-aafa-8c2b309fd946 |
| 441 | CODE_SMELL | MINOR | extension/content.js:3175 | javascript:S7764 | Prefer `globalThis` over `window`. | 8271bf66-3fc6-4fc7-be35-800d514116b4 |
| 442 | CODE_SMELL | MINOR | extension/content.js:3176 | javascript:S7764 | Prefer `globalThis` over `window`. | 6699dac7-bd70-4e64-a1ce-184cb1807f83 |
| 443 | CODE_SMELL | MINOR | extension/content.js:3179 | javascript:S7764 | Prefer `globalThis` over `window`. | c0bbaab1-92b7-4678-bab1-168ae4e12f7e |
| 444 | CODE_SMELL | MINOR | extension/content.js:3180 | javascript:S7764 | Prefer `globalThis` over `window`. | cefd7092-3768-4114-bc89-963eadf8f9fe |
| 445 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:5546 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 70 to the 15 allowed. | 728e248c-f466-4a1c-bcaf-ea7991b659b3 |
| 446 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:617 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 27 to the 15 allowed. | 999a1e4e-eda4-492a-a0dd-c02e320dca22 |
| 447 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:713 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 37 to the 15 allowed. | ddc3e3d7-4ed0-42be-ad1e-6547f39e251c |
| 448 | CODE_SMELL | MAJOR | extension/fiber.js:2188 | javascript:S6557 | Use the 'String#endsWith' method instead. | 14d06913-c73f-48ed-a522-3c97fabba64b |
| 449 | CODE_SMELL | MAJOR | extension/fiber.js:2188 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 88e0b6f9-06a0-4b44-bbb9-3de137957d78 |
| 450 | CODE_SMELL | MAJOR | extension/fiber.js:2275 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 7c0c1156-81a1-4559-a3e3-f3d661f46bdd |
| 451 | CODE_SMELL | MAJOR | extension/fiber.js:2277 | javascript:S7761 | Prefer `.dataset` over `removeAttribute(…)`. | 45751701-b29a-4a0f-82cb-b62652d43ce6 |
| 452 | CODE_SMELL | MAJOR | extension/fiber.js:2278 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | 62aad867-8f2a-4536-8668-d7175050e381 |
| 453 | CODE_SMELL | CRITICAL | src/main/runtime-gc.ts:153 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 26 to the 15 allowed. | 35f33b03-a3ce-468e-884b-232ba28abd4c |
| 454 | CODE_SMELL | MAJOR | src/main/runtime-gc.ts:98 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 6ee2fd28-d5a7-4cb5-a46b-c87d787daacf |
| 455 | CODE_SMELL | MAJOR | src/main/runtime-gc.ts:122 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 4b431dcf-c399-4633-b490-1ddbca8ab760 |
| 456 | CODE_SMELL | MAJOR | src/main/runtime-gc.ts:186 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 4106363a-e275-43c0-91f4-eb06693d1ce2 |
| 457 | CODE_SMELL | CRITICAL | extension/background.js:3450 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 62 to the 15 allowed. | 55a1fcc0-c46d-4fde-82ef-44cb016e3d23 |
| 458 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2428 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 59a77b7d-a8b9-4dd5-810f-a77473c4f092 |
| 459 | CODE_SMELL | CRITICAL | extension/content.js:12262 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 26 to the 15 allowed. | a48e3a01-4e7f-43f5-b40b-6cbd4b1cf7b5 |
| 460 | CODE_SMELL | CRITICAL | src/main/session/input.ts:1869 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 24 to the 15 allowed. | 5236ef16-eb95-496d-a4f5-d44dd3fb7d25 |
| 461 | CODE_SMELL | CRITICAL | src/main/bridge.ts:7723 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 174 to the 15 allowed. | 01a8d7df-2c88-4660-ab1f-87a21c36c1ba |
| 462 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:362 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 26 to the 15 allowed. | 7e774e2c-4e16-437d-abfc-cd77f44be201 |
| 463 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:232 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | 39380f81-729f-4094-ab1e-e5d2afa6584f |
| 464 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2395 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | 0e0e4316-0734-4224-89bb-dcf4ee54e38c |
| 465 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2396 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | 44d60d19-102f-4721-9865-618121ca87b7 |
| 466 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:2408 | javascript:S1874 | The signature '(commandId: string, showUI?: boolean \| undefined, value?: string \| undefined): boolean' of 'document.execCommand' is deprecated. | affa4ad2-8829-4c0c-a5a9-6adf6251dfa1 |
| 467 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:2413 | javascript:S1874 | The signature '(commandId: string, showUI?: boolean \| undefined, value?: string \| undefined): boolean' of 'document.execCommand' is deprecated. | 4af02441-520e-4a33-ab74-017e62a76896 |
| 468 | CODE_SMELL | MINOR | extension/content.js:929 | javascript:S7764 | Prefer `globalThis` over `window`. | be1a4b10-2abe-4304-b32d-96bfc5e3f6fb |
| 469 | CODE_SMELL | MINOR | extension/fiber.js:493 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 9fb6f661-94fc-4c88-b7ca-b16f6c163bbf |
| 470 | CODE_SMELL | CRITICAL | extension/usage.js:444 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | b969fe9a-1a3e-4167-9aaf-95f187623411 |
| 471 | CODE_SMELL | CRITICAL | extension/background.js:1874 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | 03acdfc3-870d-4b9f-9dbd-7bc8e8bcbcf2 |
| 472 | CODE_SMELL | MAJOR | extension/content.js:9614 | javascript:S6660 | 'If' statement should not be the only statement in 'else' block | ac98a5bb-aaec-4af5-97cb-4c8e5846cc7a |
| 473 | CODE_SMELL | MINOR | extension/content.js:625 | javascript:S7750 | Prefer `.findLast(…)` over `.filter(…).at(-1)`. | e9ad38d7-7d7b-45a4-b5a0-603b7db43c00 |
| 474 | CODE_SMELL | CRITICAL | extension/content.js:11996 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | 06ab586f-25fc-4c63-9c51-10da7f10cc18 |
| 475 | CODE_SMELL | MINOR | extension/content.js:11997 | javascript:S7764 | Prefer `globalThis` over `window`. | f4abe926-76d4-4794-bfce-0f75e40f9c26 |
| 476 | CODE_SMELL | MINOR | extension/usage.js:411 | javascript:S7764 | Prefer `globalThis` over `window`. | 2e8569be-879e-4a24-b59d-7a35c68f74dd |
| 477 | CODE_SMELL | MINOR | extension/usage.js:411 | javascript:S7764 | Prefer `globalThis` over `window`. | 5895f783-12a3-46ea-8755-f840c0ccb31b |
| 478 | CODE_SMELL | CRITICAL | extension/usage.js:428 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 18 to the 15 allowed. | 56c18c60-9bf7-4057-8953-58c104e6dff8 |
| 479 | CODE_SMELL | CRITICAL | src/main/bridge.ts:1405 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 166 to the 15 allowed. | c4c539bc-1b10-44ae-85ee-d033ff6190f6 |
| 480 | CODE_SMELL | CRITICAL | src/main/session/recorder.ts:2110 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 247 to the 15 allowed. | 93d67758-c406-4409-806e-f27cea8fb1db |
| 481 | CODE_SMELL | CRITICAL | src/main/sandbox.ts:179 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | aa867701-1c71-47b0-9dd1-c44b71924e06 |
| 482 | CODE_SMELL | MINOR | src/main/sandbox.ts:191 | typescript:S7718 | The catch parameter `probe` should be named `error_`. | e21da87d-59d7-43a9-aab8-eaf5b5e2d373 |
| 483 | CODE_SMELL | CRITICAL | src/main/sandbox.ts:282 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | ac5d2204-8855-4332-ab02-2a1c17f41406 |
| 484 | CODE_SMELL | CRITICAL | src/main/sandbox.ts:429 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | bc0de6a3-4eef-4688-a716-02844ada4cec |
| 485 | CODE_SMELL | MINOR | scripts/pr-triage.mjs:59 | javascript:S7744 | The empty object is useless. | 6578f7f6-6bf1-4fbe-940f-84e20f785164 |
| 486 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:106 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 8f34c6fc-7962-4d21-aab3-42d7aacc2b5a |
| 487 | CODE_SMELL | MINOR | src/shared/session.ts:543 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 8393abd7-57ee-4ad6-9b72-7b02ea1b2802 |
| 488 | CODE_SMELL | MINOR | src/shared/user-prompt.ts:27 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 72c426b1-bfc4-49c4-be8c-36f1c5e9745b |
| 489 | CODE_SMELL | MINOR | scripts/weekly-digest.mjs:30 | javascript:S7744 | The empty object is useless. | 25f8449f-87dc-48ac-a687-c566f725c784 |
| 490 | CODE_SMELL | CRITICAL | scripts/weekly-digest.mjs:35 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 24 to the 15 allowed. | 0a89fd1c-900a-4cff-ba15-e15a57ebf0c3 |
| 491 | CODE_SMELL | MINOR | scripts/waiting-prs.mjs:33 | javascript:S7744 | The empty object is useless. | 96104ca3-e48b-404b-8e4a-4a81d5fe5557 |
| 492 | CODE_SMELL | MINOR | scripts/similar-issues.mjs:44 | javascript:S7744 | The empty object is useless. | 6d67cb17-1dc1-4c5c-b160-e48c5c8b5e3d |
| 493 | CODE_SMELL | MAJOR | scripts/draft-release-notes.mjs:19 | javascript:S6557 | Use the 'String#endsWith' method instead. | 7c139104-56e9-415b-ae2a-f11be1c0998d |
| 494 | CODE_SMELL | MAJOR | extension/content.js:6002 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | ec86cc1a-1f7d-404d-b8f2-66a1b2483096 |
| 495 | CODE_SMELL | CRITICAL | extension/fiber.js:2435 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | e0c21659-3cb9-4584-93b8-899058a524d0 |
| 496 | CODE_SMELL | MINOR | src/renderer/chat.ts:3558 | typescript:S7755 | Prefer `.at(…)` over `[….length - index]`. | fda801ff-7efb-4ccd-b852-27ba56377e77 |
| 497 | CODE_SMELL | MAJOR | src/renderer/chat.ts:4312 | typescript:S2301 | Provide multiple methods instead of using "working" to determine which action to take. | 0a5dc464-070c-4e47-bc85-d7fd2aef8c8b |
| 498 | CODE_SMELL | CRITICAL | extension/background.js:4605 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 40 to the 15 allowed. | 433b85df-b127-4ec6-9cc3-8bc600ddd5b7 |
| 499 | CODE_SMELL | CRITICAL | scripts/pr-check.mjs:48 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | 714f91ad-8941-424d-85c9-bfbc3ef3f19f |
| 500 | CODE_SMELL | CRITICAL | src/main/session/recorder.ts:882 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 113 to the 15 allowed. | 80ea1328-ea0f-4e32-90a1-785a836f6233 |
| 501 | CODE_SMELL | CRITICAL | src/main/session/recorder.ts:2052 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 38 to the 15 allowed. | 01916a23-d6c5-407a-afae-cfec32582e80 |
| 502 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:1663 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 46 to the 15 allowed. | f65f585a-0c64-42c8-884b-8a80bf61ac26 |
| 503 | CODE_SMELL | CRITICAL | extension/content.js:9994 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 23 to the 15 allowed. | a34a3f22-e206-4641-8049-fd00ed7f9126 |
| 504 | CODE_SMELL | MINOR | src/main/bridge.ts:223 | typescript:S3863 | './session/store.js' imported multiple times. | 8e624207-cbf9-41eb-97be-97f26a9f9344 |
| 505 | CODE_SMELL | MAJOR | src/main/bridge.ts:6467 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 86c22110-016b-4be4-a571-3254add72d18 |
| 506 | CODE_SMELL | MAJOR | src/main/bridge.ts:6479 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 88c81e0f-7f49-49d1-a3b6-5e458d07c270 |
| 507 | CODE_SMELL | CRITICAL | src/main/bridge.ts:8670 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 59 to the 15 allowed. | 92ee61af-e7d9-4c31-9867-f1e77a9505f6 |
| 508 | CODE_SMELL | CRITICAL | src/main/session/store.ts:1893 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | c97a0d98-621b-4651-a915-bbbba2b711d5 |
| 509 | CODE_SMELL | MINOR | src/main/session/store.ts:1919 | typescript:S7750 | Prefer `.findLast(…)` over `.filter(…).at(-1)`. | 1bbddf6f-78cd-402e-a04a-bd625c9ed7a9 |
| 510 | CODE_SMELL | MINOR | extension/fiber.js:1028 | javascript:S4138 | Expected a `for-of` loop instead of a `for` loop with this simple iteration. | 37d2b380-707e-4f88-bf6e-dd97f9426068 |
| 511 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:1954 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | 4bc2e132-4011-4700-8aaa-099ce4551c55 |
| 512 | CODE_SMELL | MINOR | src/renderer/chat.ts:1975 | typescript:S6594 | Use the "RegExp.exec()" method instead. | 5798f820-8f8f-44e0-8941-df24a42e9f47 |
| 513 | CODE_SMELL | MINOR | src/renderer/chat.ts:1977 | typescript:S6594 | Use the "RegExp.exec()" method instead. | 5dab45c3-6966-43e2-bdd2-c6a7498d2110 |
| 514 | CODE_SMELL | MINOR | src/renderer/chat.ts:1977 | typescript:S6594 | Use the "RegExp.exec()" method instead. | e8c3ec78-149a-4ade-918d-188c754cae26 |
| 515 | CODE_SMELL | MINOR | src/renderer/chat.ts:2003 | typescript:S4325 | This assertion is unnecessary since it does not change the type of the expression. | d2e44ced-0c07-4dcb-b2ea-d969f18379f9 |
| 516 | CODE_SMELL | MINOR | src/renderer/chat.ts:2070 | typescript:S7764 | Prefer `globalThis` over `window`. | 025a1533-b5c9-4b2a-9335-4876385c2419 |
| 517 | CODE_SMELL | MINOR | src/renderer/chat.ts:2079 | typescript:S7764 | Prefer `globalThis` over `window`. | 37277bef-45dd-4ef2-8e85-781447998dc7 |
| 518 | CODE_SMELL | MINOR | src/renderer/chat.ts:2080 | typescript:S7764 | Prefer `globalThis` over `window`. | 3d1246f0-2f42-46b2-b3df-fbf2085af63b |
| 519 | CODE_SMELL | MINOR | src/renderer/chat.ts:2082 | typescript:S7764 | Prefer `globalThis` over `window`. | be381a9f-8c5c-4e29-9199-f1d6fad86bfc |
| 520 | CODE_SMELL | MINOR | src/renderer/chat.ts:2082 | typescript:S7764 | Prefer `globalThis` over `window`. | c46d6306-b80b-4aef-bd82-2ddde3b72e5f |
| 521 | CODE_SMELL | MINOR | src/renderer/chat.ts:2153 | typescript:S6594 | Use the "RegExp.exec()" method instead. | a77aca3b-bc66-4a7f-8d64-60545391b8d7 |
| 522 | CODE_SMELL | MINOR | src/renderer/chat.ts:2157 | typescript:S6594 | Use the "RegExp.exec()" method instead. | 94863abf-f8c9-4620-a33e-f445ab29e899 |
| 523 | CODE_SMELL | MINOR | src/renderer/chat.ts:2188 | typescript:S6594 | Use the "RegExp.exec()" method instead. | dada7a8f-3b6b-427e-9d86-d38445152ce6 |
| 524 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:2330 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | afb703f8-aa6e-47df-9425-8458e4fd928e |
| 525 | CODE_SMELL | MAJOR | src/renderer/chat.ts:2347 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | af2fef96-7a0e-45d1-a7a6-3ee6e1246fa4 |
| 526 | CODE_SMELL | CRITICAL | extension/content.js:12639 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 38be2939-396f-4d3d-bed7-95489f0adaa9 |
| 527 | CODE_SMELL | CRITICAL | extension/content.js:8845 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 40 to the 15 allowed. | 3fc1a045-731c-43c7-8deb-cc03030710e1 |
| 528 | CODE_SMELL | MAJOR | extension/content.js:10858 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 155161fe-3701-4ab2-9fc3-1764d0cdc5ea |
| 529 | CODE_SMELL | CRITICAL | src/main/control-api.ts:358 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 27 to the 15 allowed. | c2a4ecab-ba09-43d3-852a-f4c11a8b0a9c |
| 530 | CODE_SMELL | MINOR | src/main/control-actions.ts:36 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | 7caa27b3-e61b-4c90-98ad-6697dc833b36 |
| 531 | CODE_SMELL | CRITICAL | src/renderer/main.ts:723 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | 43fcd562-965d-41c3-8074-075573a07b26 |
| 532 | CODE_SMELL | CRITICAL | src/main/session/title.ts:62 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | 4e46fbc5-0c61-475f-a34c-8bef2ed528c4 |
| 533 | CODE_SMELL | MINOR | scripts/verify-context-dialog.cjs:42 | javascript:S1481 | Remove the declaration of the unused 'click' variable. | 9a33b1f3-9431-4454-9417-91669ef201cc |
| 534 | CODE_SMELL | MAJOR | scripts/verify-context-dialog.cjs:42 | javascript:S1854 | Remove this useless assignment to variable "click". | ed354165-9edf-4126-a42e-0eb706ceb978 |
| 535 | CODE_SMELL | MINOR | scripts/verify-context-dialog.cjs:44 | javascript:S1481 | Remove the declaration of the unused 'mouse' variable. | 25268a60-e099-4a92-9644-1cd94d317b7c |
| 536 | CODE_SMELL | MAJOR | scripts/verify-context-dialog.cjs:44 | javascript:S1854 | Remove this useless assignment to variable "mouse". | 45b45077-857e-410e-9e39-4e53dd378310 |
| 537 | CODE_SMELL | MINOR | scripts/verify-context-dialog.cjs:45 | javascript:S1481 | Remove the declaration of the unused 'key' variable. | 03cdf35d-ff42-43b9-82a7-80d4caf1e52d |
| 538 | CODE_SMELL | MAJOR | scripts/verify-context-dialog.cjs:45 | javascript:S1854 | Remove this useless assignment to variable "key". | 9e00f4c2-9e93-44c1-a83a-3656a6f5e9e7 |
| 539 | CODE_SMELL | MINOR | scripts/verify-context-dialog.cjs:46 | javascript:S1481 | Remove the declaration of the unused 'state' variable. | 2f9e723c-d6b4-46a2-9d54-6acad9b982ff |
| 540 | CODE_SMELL | MAJOR | scripts/verify-context-dialog.cjs:46 | javascript:S1854 | Remove this useless assignment to variable "state". | a130adc6-8646-4d2f-ac3e-c854a3d80172 |
| 541 | CODE_SMELL | MINOR | src/renderer/chat-models.ts:306 | typescript:S6571 | "pro" \| "none" \| "minimal" \| "low" \| "medium" \| "high" \| "xhigh" \| "max" \| "ultra" is overridden by string in this union type. | 07f9fcd0-8c8f-4b26-9b58-f42fc08b0227 |
| 542 | CODE_SMELL | MINOR | src/renderer/chat.ts:2998 | typescript:S7764 | Prefer `globalThis` over `window`. | 2a120d06-ee25-4f53-848c-803b92b02f81 |
| 543 | CODE_SMELL | MINOR | src/renderer/chat.ts:2999 | typescript:S7764 | Prefer `globalThis` over `window`. | 13e84d62-b8f0-4a9f-b39e-c461dec5b9c0 |
| 544 | CODE_SMELL | MINOR | src/shared/markdown-export.ts:76 | typescript:S7737 | Do not use an object literal as default for parameter `labels`. | 01810442-6726-4331-930b-2496713d5228 |
| 545 | CODE_SMELL | MINOR | src/shared/markdown-export.ts:87 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 58db34a3-44a7-4063-82ed-7bd1334b5688 |
| 546 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:4399 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 46 to the 15 allowed. | a607b05f-4f07-4d8f-a33f-c90fdaa406bc |
| 547 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:1603 | typescript:S7764 | Prefer `globalThis` over `window`. | 96fafbd2-8131-4b55-a367-e3d80784287c |
| 548 | CODE_SMELL | CRITICAL | src/renderer/panel-motion.ts:33 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | 69a7e11d-71eb-485f-89a6-ff7908e46482 |
| 549 | CODE_SMELL | MAJOR | src/renderer/tab-reorder.ts:28 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | f817cfbd-b1ad-4c75-a101-13e8a3a8bf74 |
| 550 | CODE_SMELL | CRITICAL | src/renderer/tab-reorder.ts:31 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | 4960aeba-8425-4cc9-a30d-3adf7c53124f |
| 551 | CODE_SMELL | CRITICAL | src/renderer/workspace-docks.ts:128 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 51 to the 15 allowed. | 7bc55957-00e0-44ef-9f8a-ec4812c7799e |
| 552 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:2500 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | f4c5ad32-6ef9-46e3-ad0a-803d9d80e811 |
| 553 | CODE_SMELL | MINOR | src/main/control-reads.ts:80 | typescript:S7758 | Prefer `String#codePointAt()` over `String#charCodeAt()`. | e5005fb6-f914-4a8a-bc0f-30980475a5b7 |
| 554 | CODE_SMELL | MINOR | src/main/control-reads.ts:517 | typescript:S6571 | 'unknown' overrides all other types in this union type. | 4e05120c-18bb-4353-849a-d5f882fa832f |
| 555 | CODE_SMELL | MINOR | scripts/fixtures/composer-ui.js:62 | javascript:S7764 | Prefer `globalThis` over `window`. | 8cb536bc-c0f3-43af-838f-d1c86745d40c |
| 556 | CODE_SMELL | MINOR | scripts/fixtures/composer-ui.js:67 | javascript:S7764 | Prefer `globalThis` over `window`. | 72edfe64-3392-4128-b7fb-b5a1d0fc6744 |
| 557 | CODE_SMELL | MINOR | src/renderer/chat-models.ts:291 | typescript:S7764 | Prefer `globalThis` over `window`. | 43396797-e760-45e5-9dbc-54ad3873d7dd |
| 558 | CODE_SMELL | MINOR | src/renderer/chat-models.ts:296 | typescript:S7753 | Use `.indexOf()` instead of `.findIndex()` when looking for the index of an item. | b5e64aec-438e-4d00-8c0e-2da60bf55350 |
| 559 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:1583 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 21 to the 15 allowed. | 29284053-eb90-4534-a4b9-cfdf19ede7d2 |
| 560 | CODE_SMELL | MAJOR | src/renderer/index.html:1218 | Web:S6819 | Use &lt;input&gt; instead of the radio role to ensure accessibility across all devices. | b1c158b2-d5e3-4d01-b87d-c1c6d79f2f72 |
| 561 | CODE_SMELL | MAJOR | src/renderer/index.html:1219 | Web:S6819 | Use &lt;input&gt; instead of the radio role to ensure accessibility across all devices. | da4ca916-d45a-4daa-9e58-730837b24657 |
| 562 | CODE_SMELL | MAJOR | src/renderer/index.html:1220 | Web:S6819 | Use &lt;input&gt; instead of the radio role to ensure accessibility across all devices. | e778fffd-d735-4416-8df9-4d525e519609 |
| 563 | CODE_SMELL | MAJOR | src/renderer/index.html:1240 | Web:S6819 | Use &lt;dialog&gt; instead of the dialog role to ensure accessibility across all devices. | fc58ffd3-a191-47fc-bc91-216503cee526 |
| 564 | CODE_SMELL | MAJOR | src/renderer/index.html:1242 | Web:S6819 | Use &lt;progress&gt; instead of the progressbar role to ensure accessibility across all devices. | cc0ed430-3c77-4879-82d4-006d05b6986b |
| 565 | CODE_SMELL | MAJOR | src/renderer/index.html:1263 | Web:S6819 | Use &lt;address&gt; or &lt;details&gt; or &lt;fieldset&gt; or &lt;optgroup&gt; instead of the group role to ensure accessibility across all devices. | 799b2496-e52f-4674-8491-9be22032c828 |
| 566 | CODE_SMELL | MINOR | src/shared/content-reference.ts:25 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 16ac4abe-0312-45d2-a769-a469393fd81a |
| 567 | CODE_SMELL | CRITICAL | src/main/goal.ts:2564 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 92 to the 15 allowed. | 054e812f-6ad3-4932-8ed1-b102459135e0 |
| 568 | CODE_SMELL | MINOR | src/shared/content-reference.ts:48 | typescript:S7773 | Prefer `Number.parseInt` over `parseInt`. | e497ab30-e3f2-4547-9897-3fbd26083f44 |
| 569 | CODE_SMELL | MINOR | src/main/secrets.ts:313 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 39e421e9-57ad-4579-8072-35ec3b6a11cd |
| 570 | CODE_SMELL | MAJOR | extension/background.js:2608 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 982f3b86-9893-44c3-a365-bbfba128393c |
| 571 | CODE_SMELL | CRITICAL | src/main/session/recorder.ts:1291 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 79 to the 15 allowed. | 885705ba-7658-4c1e-82c4-e575cc31a8bb |
| 572 | CODE_SMELL | CRITICAL | extension/content.js:2035 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 23 to the 15 allowed. | 833881c1-05a1-4df2-a054-39abc00ad2f0 |
| 573 | CODE_SMELL | CRITICAL | extension/content.js:4169 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 31 to the 15 allowed. | 992263ad-066a-4e46-a3fa-811eeb0c51f8 |
| 574 | CODE_SMELL | CRITICAL | scripts/verify-settings-focus.cjs:10 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 40 to the 15 allowed. | 58f10889-ba0e-42dd-bbf3-ef082eade3b9 |
| 575 | CODE_SMELL | MINOR | scripts/verify-settings-layout.cjs:162 | javascript:S7773 | Prefer `Number.parseFloat` over `parseFloat`. | 1688c73a-8dcf-4b4b-8e4c-6a60efd83054 |
| 576 | CODE_SMELL | MINOR | scripts/verify-settings-layout.cjs:162 | javascript:S7773 | Prefer `Number.parseFloat` over `parseFloat`. | 25c554a8-aac5-4ab0-8519-ce8dceb2c2a3 |
| 577 | CODE_SMELL | MINOR | extension/content.js:12083 | javascript:S7764 | Prefer `globalThis` over `window`. | 53621f3c-f13a-4b0f-abaf-4438dfa8611c |
| 578 | CODE_SMELL | MAJOR | scripts/generate-third-party-notices.mjs:71 | javascript:S4043 | Move this array "sort" operation to a separate statement or replace it with "toSorted". | 1dc351ff-6860-4630-a148-6c96ff314beb |
| 579 | CODE_SMELL | MINOR | scripts/prepare-packaging-native.mjs:93 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 4b45d2ac-dfb3-4d8e-a152-d6a0a1083d74 |
| 580 | CODE_SMELL | MAJOR | src/main/pet-window-focus.ts:51 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | bb4129a2-392a-4be4-96ae-7ddeba710d7e |
| 581 | CODE_SMELL | CRITICAL | src/renderer/file-panel.ts:648 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | 5732ca76-689f-4cf9-96df-75b51eca7a6e |
| 582 | CODE_SMELL | MAJOR | src/renderer/index.html:1272 | Web:S6819 | Use &lt;input&gt; instead of the radio role to ensure accessibility across all devices. | 36b32764-d09b-4c8d-af41-7a4a03996fa1 |
| 583 | CODE_SMELL | MAJOR | src/renderer/index.html:1273 | Web:S6819 | Use &lt;input&gt; instead of the radio role to ensure accessibility across all devices. | 05625dad-4c8a-4897-bb6e-1c2bd286371a |
| 584 | CODE_SMELL | MAJOR | src/renderer/index.html:1274 | Web:S6819 | Use &lt;input&gt; instead of the radio role to ensure accessibility across all devices. | cb5e154c-e626-4c50-b68f-efe2fc5c101b |
| 585 | CODE_SMELL | CRITICAL | src/main/session/correlation.ts:235 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 21 to the 15 allowed. | 9af93a1c-b1e9-41a4-b1a6-64f566bd6ec4 |
| 586 | CODE_SMELL | CRITICAL | src/main/session/store.ts:640 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 37 to the 15 allowed. | 1348cd3b-75c2-4eaa-9698-360fc683fa72 |
| 587 | CODE_SMELL | MINOR | src/renderer/chat.ts:2118 | typescript:S6594 | Use the "RegExp.exec()" method instead. | f78c5a97-eb62-4a09-a759-5358ab47a6d8 |
| 588 | CODE_SMELL | CRITICAL | src/renderer/workspace-docks.ts:113 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | ef5e8391-1105-4095-a7d5-6b70da4653d4 |
| 589 | CODE_SMELL | MINOR | scripts/generate-third-party-notices.mjs:33 | javascript:S7778 | Do not call `Array#push()` multiple times. | 95ba5881-f74f-473c-8e7e-865fd19d107c |
| 590 | CODE_SMELL | MINOR | src/renderer/usage.ts:231 | typescript:S7755 | Prefer `.at(…)` over `[….length - index]`. | d29559f8-7aee-4d59-aa83-6f4a39362f76 |
| 591 | CODE_SMELL | CRITICAL | extension/fiber.js:560 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 68 to the 15 allowed. | 99a50ef0-f979-49fd-ab81-eeea32f60637 |
| 592 | CODE_SMELL | MINOR | src/main/plugins/uv-runtime.ts:51 | typescript:S7773 | Prefer `Number.parseInt` over `parseInt`. | 2001c037-b0ed-4978-89b8-32a98adf199c |
| 593 | CODE_SMELL | MINOR | src/main/plugins/uv-runtime.ts:53 | typescript:S7758 | Prefer `String.fromCodePoint()` over `String.fromCharCode()`. | 278d2d7b-6c6c-4206-b4c9-10d1b75b46a9 |
| 594 | CODE_SMELL | MINOR | src/main/plugins/uv-runtime.ts:54 | typescript:S7750 | Prefer `.findLast(…)` over `.filter(…).at(-1)`. | cd219d87-f7ee-491a-9930-365a14ac392d |
| 595 | CODE_SMELL | MINOR | src/renderer/chat.ts:4391 | typescript:S7758 | Prefer `String#codePointAt()` over `String#charCodeAt()`. | 1b7a6302-7092-4783-8231-de9c5e6ad6eb |
| 596 | CODE_SMELL | CRITICAL | src/main/skill-github.ts:31 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 18 to the 15 allowed. | 1fcd955a-3795-471c-a949-d8e2a22b1b89 |
| 597 | CODE_SMELL | CRITICAL | src/main/skill-github.ts:68 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 30 to the 15 allowed. | ef7c65cb-bafd-4a45-9298-82073a7f5b15 |
| 598 | CODE_SMELL | CRITICAL | src/main/skill-github.ts:112 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 22 to the 15 allowed. | 01c18e32-a436-4858-b8c7-b79580cf2cb6 |
| 599 | CODE_SMELL | MAJOR | src/main/skill-github.ts:173 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 123d932f-843c-47ed-9719-8d76ea404dae |
| 600 | CODE_SMELL | MINOR | src/main/skill-github.ts:202 | typescript:S7750 | Prefer `.findLast(…)` over `.filter(…).at(-1)`. | e915eb6a-3024-457b-a2ad-730825e7f6c4 |
| 601 | CODE_SMELL | CRITICAL | src/main/skill-package.ts:15 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 25 to the 15 allowed. | 78735cba-87ee-4369-8816-163f701c2488 |
| 602 | CODE_SMELL | CRITICAL | src/main/skill-package.ts:56 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 18 to the 15 allowed. | f3c0b446-1503-47a0-bc5f-d5e93cee5315 |
| 603 | CODE_SMELL | MINOR | src/main/skills.ts:537 | typescript:S7750 | Prefer `.findLast(…)` over `.filter(…).at(-1)`. | 6d5896e2-1a58-48e2-a9dd-db4412c6d69e |
| 604 | CODE_SMELL | CRITICAL | src/main/skills.ts:549 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 27 to the 15 allowed. | 552bf7a7-69e5-4e36-b0f7-d535f8c783cd |
| 605 | CODE_SMELL | MAJOR | src/main/skills.ts:590 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 10adad5f-8763-4c68-a414-446704fac284 |
| 606 | CODE_SMELL | CRITICAL | src/main/skills.ts:642 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 30 to the 15 allowed. | 03760a68-2790-4ea9-bd4a-94dab1cfd980 |
| 607 | CODE_SMELL | MAJOR | src/main/skills.ts:653 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 9c234aa3-8e9c-4cd2-8bb6-4c5c8299a777 |
| 608 | CODE_SMELL | MAJOR | src/main/skills.ts:671 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 57aea4f0-57cd-462e-afbb-20450856056c |
| 609 | CODE_SMELL | MAJOR | src/main/skills.ts:671 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | bb9378b1-9ba4-4241-b605-dc2f6428fb9c |
| 610 | CODE_SMELL | MAJOR | src/main/skills.ts:679 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | e59215c5-d86e-40da-a1d1-7738878df80c |
| 611 | CODE_SMELL | CRITICAL | src/renderer/skills-library.ts:223 | typescript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 671ccac5-2904-4928-b3ba-ca17594a7596 |
| 612 | CODE_SMELL | CRITICAL | src/renderer/skills-library.ts:231 | typescript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 297aa515-d5e9-465a-a400-bc7d6bc5ecfb |
| 613 | CODE_SMELL | CRITICAL | src/renderer/skills-library.ts:249 | typescript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | a3206a9d-3a8e-43ee-810a-734c1ec0bf0a |
| 614 | CODE_SMELL | CRITICAL | src/renderer/skills.ts:116 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 23 to the 15 allowed. | a33f38bf-e414-4d9c-88df-3311fd510c28 |
| 615 | CODE_SMELL | CRITICAL | src/renderer/skills.ts:145 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 35 to the 15 allowed. | 1feb0b40-11c2-40d8-be05-07d3553a0ab7 |
| 616 | CODE_SMELL | CRITICAL | scripts/verify-pet-performance.cjs:83 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 23 to the 15 allowed. | 7cdbe783-dfc5-4870-8bf6-1ffa455214c1 |
| 617 | CODE_SMELL | MAJOR | src/main/pet-overlay.ts:82 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 313e5aaf-45da-4b7f-aaa5-fc05892eb943 |
| 618 | CODE_SMELL | MAJOR | src/renderer/pet-machine.ts:71 | typescript:S2933 | Member 'random: ()=&gt;number' is never reassigned; mark it as `readonly`. | 985c4679-ce80-4ae4-b011-27246021ae21 |
| 619 | CODE_SMELL | CRITICAL | src/renderer/pet-machine.ts:140 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 32 to the 15 allowed. | 134a3bb5-5db1-4a9b-815f-8c8369b66d7f |
| 620 | CODE_SMELL | MINOR | src/renderer/pet-overlay.ts:33 | typescript:S7764 | Prefer `globalThis` over `window`. | baaa31c5-3339-410a-9cab-8a4902366d4e |
| 621 | CODE_SMELL | MINOR | src/renderer/pet-overlay.ts:39 | typescript:S7764 | Prefer `globalThis` over `window`. | fe92eeeb-4050-41c7-ac98-b41ba3129890 |
| 622 | CODE_SMELL | CRITICAL | src/renderer/pet-overlay.ts:114 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 33 to the 15 allowed. | bba50045-b8d2-4793-a825-045d7baf94c8 |
| 623 | CODE_SMELL | MINOR | src/renderer/pet-overlay.ts:203 | typescript:S7764 | Prefer `globalThis` over `window`. | 2727410d-d664-48c3-a6d5-33f449591a14 |
| 624 | CODE_SMELL | MINOR | src/renderer/pet-overlay.ts:242 | typescript:S7764 | Prefer `globalThis` over `window`. | 6153bc64-299c-4e22-8e5d-a4ac09e3c4c6 |
| 625 | CODE_SMELL | CRITICAL | src/renderer/pet-overlay.ts:493 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | be8bf056-2ca1-47bc-bd1e-213d5ca182cd |
| 626 | CODE_SMELL | CRITICAL | src/shared/pet-activity.ts:39 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | 604ee2d0-e3fc-4229-b9b4-92ef521ec9c1 |
| 627 | CODE_SMELL | CRITICAL | extension/content.js:2456 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | 7adcefaa-666e-4b40-9829-a33c10c253ab |
| 628 | CODE_SMELL | MAJOR | extension/content.js:3830 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 75508614-df38-4a59-975d-a13f99f22b17 |
| 629 | CODE_SMELL | CRITICAL | extension/fiber.js:712 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 96 to the 15 allowed. | 135b3368-15ba-4cd0-aa5c-064e261ec7bf |
| 630 | CODE_SMELL | CRITICAL | extension/fiber.js:1938 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 97 to the 15 allowed. | d0cdbc9b-06d7-43a0-9ff3-66683650e62c |
| 631 | CODE_SMELL | MAJOR | extension/fiber.js:2266 | javascript:S7761 | Prefer `.dataset` over `removeAttribute(…)`. | 20e897eb-aa88-41a7-acbe-a10d57d494d1 |
| 632 | CODE_SMELL | MAJOR | extension/fiber.js:2267 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | cf1324d5-15e9-4be2-9f61-499c711cbd33 |
| 633 | CODE_SMELL | MAJOR | extension/fiber.js:2268 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | 4748bbe9-c799-4598-b4b9-fd289aa82c6d |
| 634 | CODE_SMELL | MINOR | src/main/project-git.ts:3 | typescript:S3863 | 'node:fs' imported multiple times. | 0e2e3411-1f41-47ae-9e0f-bce610137745 |
| 635 | CODE_SMELL | CRITICAL | src/main/project-git.ts:91 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | 272aaa1a-3525-43ad-ade7-988ec09457c3 |
| 636 | CODE_SMELL | MINOR | src/renderer/main.ts:822 | typescript:S7737 | Do not use an object literal as default for parameter `values`. | 5537e44a-9110-409e-9f71-6c16e71e11f5 |
| 637 | CODE_SMELL | MAJOR | src/renderer/main.ts:2492 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 71378145-ee75-4626-80eb-0dd1fc48c722 |
| 638 | CODE_SMELL | CRITICAL | extension/background.js:2530 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 38 to the 15 allowed. | b7944a2f-edbe-46fb-bb29-caec4c16bfa2 |
| 639 | CODE_SMELL | CRITICAL | src/main/session/input.ts:458 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 46 to the 15 allowed. | fe64c980-3f86-4848-9fff-0d1c72640109 |
| 640 | CODE_SMELL | MINOR | src/main/ipc.ts:965 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | 2edbe44c-1d95-453c-80f0-cdbb3377599c |
| 641 | CODE_SMELL | CRITICAL | src/main/mcp/tools-core.ts:1922 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 29 to the 15 allowed. | db423cb7-619a-4e4b-8693-4cb0082591b1 |
| 642 | CODE_SMELL | MINOR | src/main/project-git.ts:4 | typescript:S3863 | 'node:fs' imported multiple times. | 15d3f09a-45ef-4f7a-b3e1-ea276e5e7fcf |
| 643 | CODE_SMELL | CRITICAL | src/main/project-git.ts:238 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 25 to the 15 allowed. | cc57e793-5181-4349-a228-b0c84590d1bb |
| 644 | CODE_SMELL | MAJOR | src/main/project-git.ts:244 | typescript:S6557 | Use 'String#startsWith' method instead. | 1372593f-34a3-4b35-8903-bf78e480e707 |
| 645 | CODE_SMELL | MAJOR | src/main/project-git.ts:244 | typescript:S6557 | Use 'String#startsWith' method instead. | b78bc114-bc8f-4a68-8f69-8b2beea858ab |
| 646 | CODE_SMELL | CRITICAL | src/main/project-git.ts:302 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | 2d920530-28d4-4a98-9718-07b4c1a4c43e |
| 647 | CODE_SMELL | CRITICAL | src/main/project-git.ts:354 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 36 to the 15 allowed. | bc124e67-d249-45ab-9ca0-06a66b25fa6a |
| 648 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:499 | typescript:S7764 | Prefer `globalThis` over `window`. | a1b7c513-7cd5-487d-acb0-558ca876d29a |
| 649 | CODE_SMELL | MAJOR | src/renderer/file-panel.ts:644 | typescript:S7721 | Move function 'folderGitStatus' to the outer scope. | 971a0e7a-cf32-4281-b9ae-785ffd7658d9 |
| 650 | CODE_SMELL | CRITICAL | src/renderer/file-panel.ts:1050 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 24 to the 15 allowed. | 30193bad-2c2b-4db0-ae96-c2d46dc051b7 |
| 651 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:1145 | typescript:S7764 | Prefer `globalThis` over `window`. | 37053ac2-3126-4635-8778-661c5f8d6e9a |
| 652 | CODE_SMELL | CRITICAL | src/renderer/file-panel.ts:1169 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | 50c870ce-fac2-43a2-a7ef-9930f516ecc3 |
| 653 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:1245 | typescript:S7764 | Prefer `globalThis` over `window`. | c4eeaf9d-e7d4-4718-8775-54ebfa06a541 |
| 654 | CODE_SMELL | CRITICAL | src/renderer/file-panel.ts:1256 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | 254ab65d-1bd5-4c74-8ac9-91a697a74039 |
| 655 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:1265 | typescript:S7764 | Prefer `globalThis` over `window`. | 067e533f-4fa8-4c01-ba43-afc07f3a0b3b |
| 656 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:1288 | typescript:S7764 | Prefer `globalThis` over `window`. | 6f5a22d0-bdb2-49bd-85c2-debf64257688 |
| 657 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:1291 | typescript:S7764 | Prefer `globalThis` over `window`. | 8067d44b-f39b-49de-bcbe-6b20d1fc1df5 |
| 658 | CODE_SMELL | CRITICAL | src/renderer/file-panel.ts:1341 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | 8487da78-0da5-485d-b747-e2d8016ff65d |
| 659 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:1582 | typescript:S7764 | Prefer `globalThis` over `window`. | 9b06f4f3-e5aa-45c5-9fd0-9b980da9a3db |
| 660 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:1689 | typescript:S7764 | Prefer `globalThis` over `window`. | c33c68d8-3b41-4687-be8a-152467a0aa6e |
| 661 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:1690 | typescript:S7764 | Prefer `globalThis` over `window`. | 0bc310a4-8195-45aa-bdaa-16266e99dc9d |
| 662 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:1723 | typescript:S7764 | Prefer `globalThis` over `window`. | 3b1197b1-5e9d-427c-be9a-9505168d443e |
| 663 | CODE_SMELL | MINOR | src/main/workspace-terminal-ipc.ts:11 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | 0b742337-094f-498b-9523-213bc0f279d7 |
| 664 | CODE_SMELL | MINOR | src/main/workspace-terminal-ipc.ts:11 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | d3d879b1-93aa-4936-a9ab-1754596defc3 |
| 665 | CODE_SMELL | MINOR | src/renderer/workspace-terminal.ts:67 | typescript:S7764 | Prefer `globalThis` over `window`. | 0eeaeb95-cf89-4200-b64b-ab07f49cfa73 |
| 666 | CODE_SMELL | MINOR | src/renderer/workspace-terminal.ts:131 | typescript:S7764 | Prefer `globalThis` over `window`. | b64d58a0-7b81-4bb2-a813-5a5291099f9e |
| 667 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:2659 | typescript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 55ab6768-a2b6-4613-827e-7f87fa1f849d |
| 668 | CODE_SMELL | MAJOR | src/renderer/styles.css:3533 | css:S7924 | Text does not meet the minimal contrast requirement with its background. | 9ec5f993-f3fa-4e1d-8e1a-a4bb3466c7ec |
| 669 | CODE_SMELL | CRITICAL | extension/content.js:12777 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 32 to the 15 allowed. | d3ef31cf-8087-4454-818c-c013b0fe827e |
| 670 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2128 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 31 to the 15 allowed. | 7b124e73-798b-4517-857f-9164da7a9774 |
| 671 | CODE_SMELL | CRITICAL | extension/content.js:5623 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 29 to the 15 allowed. | 15540082-ba65-4c6c-81fe-1447167ade08 |
| 672 | CODE_SMELL | CRITICAL | extension/content.js:5803 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 36 to the 15 allowed. | 956dd0b0-2bdd-4659-becd-47ab0e9e5919 |
| 673 | CODE_SMELL | CRITICAL | extension/content.js:6973 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 24 to the 15 allowed. | 818196e6-151d-47e4-a235-07ecba15e980 |
| 674 | CODE_SMELL | CRITICAL | extension/content.js:7115 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 74 to the 15 allowed. | aaf92426-6fe9-458e-9683-8a56ecbab5fa |
| 675 | CODE_SMELL | MAJOR | extension/content.js:7689 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | d933bd38-4a91-4bd3-901d-75c3aaf69cf7 |
| 676 | CODE_SMELL | CRITICAL | extension/content.js:8330 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 25 to the 15 allowed. | 88272446-ae84-45ae-8e78-c597fe43621c |
| 677 | CODE_SMELL | MAJOR | extension/content.js:8454 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | 76640cb7-9735-4e59-95a5-1a821688fa7c |
| 678 | CODE_SMELL | CRITICAL | extension/content.js:8601 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | 7f56869a-f024-42bd-b9ea-c70de9881793 |
| 679 | CODE_SMELL | CRITICAL | extension/content.js:8679 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 26 to the 15 allowed. | c0133f41-f581-4c40-b76c-234190f23542 |
| 680 | CODE_SMELL | CRITICAL | extension/content.js:8726 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 27 to the 15 allowed. | e4caa3af-f8d5-4395-b897-cb2086b2275a |
| 681 | CODE_SMELL | CRITICAL | extension/content.js:9221 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 61 to the 15 allowed. | 420ac18b-2c52-476c-8e00-c3e1686a5c59 |
| 682 | CODE_SMELL | CRITICAL | extension/content.js:9539 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | 06341a4d-9111-4f0e-b113-cb7e29fcd6a6 |
| 683 | CODE_SMELL | CRITICAL | extension/content.js:10601 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 43 to the 15 allowed. | 6945b3dd-b23a-4939-8b57-b6d5680af568 |
| 684 | CODE_SMELL | MAJOR | extension/content.js:10848 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 12232925-50b1-425f-bd4f-94779d812c12 |
| 685 | CODE_SMELL | MINOR | extension/i18n.js:10 | javascript:S7770 | arrow function is equivalent to `String`. Use `String` directly. | 0e66fa22-ad5b-4344-8ee7-b4895190b91b |
| 686 | CODE_SMELL | CRITICAL | extension/popup.js:82 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 30 to the 15 allowed. | 6ca5c573-6ed7-4b05-af65-0b4c2a90e9e4 |
| 687 | CODE_SMELL | CRITICAL | extension/popup.js:203 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | c0a9c5e5-d6d4-434e-8a72-e9b3d98ce2c3 |
| 688 | CODE_SMELL | CRITICAL | extension/popup.js:329 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 21 to the 15 allowed. | e35f25a7-8e41-4181-9e2f-a47acf6b3398 |
| 689 | CODE_SMELL | CRITICAL | src/main/exec-hints.ts:1437 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 38 to the 15 allowed. | 616fa492-251c-405a-ae7b-c45038b92684 |
| 690 | CODE_SMELL | CRITICAL | extension/fiber.js:2588 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 46 to the 15 allowed. | ae6e04e8-e8fd-4d5b-90c2-d26c94bc7307 |
| 691 | CODE_SMELL | MINOR | src/main/plugin-refresh.ts:14 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | 2173f3b8-3ee5-492f-b2dc-32f3fc9aafbb |
| 692 | CODE_SMELL | CRITICAL | extension/background.js:2251 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 28 to the 15 allowed. | d8d270ca-5f63-4803-b37b-3dfa2696c40e |
| 693 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2724 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | ed252b8d-f470-485f-af54-0ce83026dea4 |
| 694 | CODE_SMELL | MAJOR | extension/fiber.js:2619 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | b68f40e3-2828-41d6-9fe1-ab193ec1fd48 |
| 695 | CODE_SMELL | MAJOR | extension/fiber.js:2621 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 47b31ae0-a506-43ac-a465-e5b9e9c7e0d5 |
| 696 | CODE_SMELL | MAJOR | extension/fiber.js:2621 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | 654b324a-36e6-4a38-8599-b537a03a06d5 |
| 697 | CODE_SMELL | CRITICAL | extension/fiber.js:2628 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 52 to the 15 allowed. | b5ff77d5-1393-4bb9-a316-f4e3431ed8cf |
| 698 | CODE_SMELL | CRITICAL | src/main/goal.ts:814 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 26 to the 15 allowed. | ba33d963-4777-47a9-8e5e-049bfe12b28b |
| 699 | CODE_SMELL | CRITICAL | src/main/session/input-attachments.ts:53 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 32 to the 15 allowed. | e5b7bc4c-23c6-4e6b-8985-e0109ec1348c |
| 700 | CODE_SMELL | CRITICAL | src/preload/index.ts:166 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 22 to the 15 allowed. | cab69efa-f02a-4a82-aafa-7a516c0f587c |
| 701 | CODE_SMELL | MINOR | src/renderer/plugin-refresh-reminder.ts:9 | typescript:S7764 | Prefer `globalThis` over `window`. | f933adec-f07a-4430-96c6-49baf59fa21d |
| 702 | CODE_SMELL | MINOR | src/renderer/plugin-refresh-reminder.ts:19 | typescript:S7764 | Prefer `globalThis` over `window`. | 8ad6c78e-5017-40ad-9aa8-db9ce947a6c2 |
| 703 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:1853 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 27 to the 15 allowed. | 7ade0f2b-94ab-4329-a1b1-72c3737188a6 |
| 704 | CODE_SMELL | MAJOR | src/renderer/chat.ts:1866 | typescript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 7f613359-a906-4a70-99bb-9219ffa76647 |
| 705 | CODE_SMELL | MAJOR | src/renderer/chat.ts:1866 | typescript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | be2347f1-3fb0-4e2a-85e5-caabb6864173 |
| 706 | CODE_SMELL | MAJOR | src/renderer/chat.ts:1866 | typescript:S7761 | Prefer `.dataset` over `hasAttribute(…)`. | e1b6fb88-d1da-4d70-9f78-9a5df67f5a60 |
| 707 | CODE_SMELL | MINOR | src/renderer/chat.ts:1876 | typescript:S6594 | Use the "RegExp.exec()" method instead. | 2ffa0fa3-242b-48d3-8cf3-0e3620719865 |
| 708 | CODE_SMELL | MAJOR | src/renderer/chat.ts:1904 | typescript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 1bd937f3-6fa3-473a-8e8c-006a31a66821 |
| 709 | CODE_SMELL | MAJOR | src/renderer/chat.ts:1904 | typescript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | f5e71b82-10a7-4735-9ce5-79b8b7a03aa1 |
| 710 | CODE_SMELL | MAJOR | src/renderer/chat.ts:1913 | typescript:S7761 | Prefer `.dataset` over `hasAttribute(…)`. | 3b493c20-8a9b-49bc-9151-10edd9a19d86 |
| 711 | CODE_SMELL | CRITICAL | src/renderer/sanitize-html.ts:17 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 43 to the 15 allowed. | 8e66e830-a48a-4527-9e23-c61be5013ef8 |
| 712 | CODE_SMELL | MINOR | src/renderer/sanitize-html.ts:18 | typescript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | 74591ba5-f65a-485c-9d3a-5f4d38e5c4bc |
| 713 | CODE_SMELL | MINOR | src/renderer/sanitize-html.ts:48 | typescript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | e50439f6-a536-45c2-9ed9-292f389ecc4e |
| 714 | CODE_SMELL | CRITICAL | src/main/extension-path.ts:201 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 29 to the 15 allowed. | b83e2b82-4393-40b4-851d-3f41a3b54e11 |
| 715 | CODE_SMELL | CRITICAL | src/main/bridge.ts:1343 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 32 to the 15 allowed. | 6bbe3a1a-44e6-4d4b-9643-47bb2f3f1ce0 |
| 716 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:539 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 9d424200-c23a-4d38-afe5-f3516a8dee16 |
| 717 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:641 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | fe4ad7ce-3fef-4460-bcc4-261f33d4ff58 |
| 718 | CODE_SMELL | CRITICAL | extension/fiber.js:1645 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 32 to the 15 allowed. | 1e83a27d-68b2-41b3-ab05-15b5b11c86c4 |
| 719 | CODE_SMELL | CRITICAL | extension/fiber.js:1690 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | 6612643e-fd06-4892-9e10-b3ad07e3499c |
| 720 | CODE_SMELL | MINOR | extension/fiber.js:2052 | javascript:S4138 | Expected a `for-of` loop instead of a `for` loop with this simple iteration. | a1ba749d-a944-46a1-bf1d-e7971cd6ef38 |
| 721 | CODE_SMELL | MAJOR | extension/fiber.js:2056 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 671f268c-da1a-489e-85a6-65b3b596cb96 |
| 722 | CODE_SMELL | CRITICAL | src/renderer/plugins.ts:324 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | a65a7191-4c09-444f-8647-dc82a64377bd |
| 723 | CODE_SMELL | MINOR | src/renderer/plugins.ts:331 | typescript:S7764 | Prefer `globalThis` over `window`. | 016a2ded-51be-4101-98d0-37732e299c86 |
| 724 | CODE_SMELL | BLOCKER | src/renderer/chat.ts:3860 | typescript:S3516 | Refactor this function to not always return the same value. | eb40f120-78cc-46ec-9f14-e266be0a9121 |
| 725 | CODE_SMELL | CRITICAL | extension/background.js:3225 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | 1ba986cc-cad2-4778-a71e-53d33781b71d |
| 726 | CODE_SMELL | CRITICAL | src/main/session/input.ts:1279 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 18 to the 15 allowed. | 7060b035-af81-480e-8c5c-ad714e5408ff |
| 727 | CODE_SMELL | MINOR | extension/background.js:4957 | javascript:S7764 | Prefer `globalThis` over `window`. | 87b35e91-b287-46de-bad4-d56968b20863 |
| 728 | CODE_SMELL | MINOR | extension/usage.js:21 | javascript:S7764 | Prefer `globalThis` over `window`. | ab264d70-b0a5-48ea-bf1e-4c2207b10ad7 |
| 729 | CODE_SMELL | MINOR | extension/usage.js:22 | javascript:S7764 | Prefer `globalThis` over `window`. | 3c7cdd08-a28d-4190-8137-585faf61b943 |
| 730 | CODE_SMELL | MINOR | extension/usage.js:22 | javascript:S7764 | Prefer `globalThis` over `window`. | 4da8f3b9-332b-46ec-8e38-f114a6cf1aff |
| 731 | CODE_SMELL | MINOR | extension/usage.js:29 | javascript:S7764 | Prefer `globalThis` over `window`. | 8413b66e-bb19-48f2-bded-3a4bf6bbd167 |
| 732 | CODE_SMELL | MINOR | extension/usage.js:29 | javascript:S7764 | Prefer `globalThis` over `window`. | d68fb27f-2fbd-40dc-a236-3c76198dcb57 |
| 733 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:3287 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 3c8807dd-d51c-470c-9fa9-efafad74e57f |
| 734 | CODE_SMELL | MAJOR | extension/fiber.js:2376 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | 8757ac41-76b9-4c15-8dce-591dbc607edd |
| 735 | CODE_SMELL | MAJOR | extension/fiber.js:2376 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | a9d60e66-6460-4cfc-b35e-9351a8e0ba19 |
| 736 | CODE_SMELL | MAJOR | extension/fiber.js:2377 | javascript:S7761 | Prefer `.dataset` over `removeAttribute(…)`. | bac2bea8-a3d8-45f6-8ed0-909f69ffe3f1 |
| 737 | CODE_SMELL | MAJOR | extension/content.js:887 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 4f2d70ff-2631-475f-a60e-e41921db7a57 |
| 738 | CODE_SMELL | CRITICAL | extension/content.js:11385 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | e305b9c0-a4c1-4621-af9b-e4dd051a60db |
| 739 | CODE_SMELL | CRITICAL | extension/content.js:11388 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | d1e3405a-9f71-4c45-9806-bf8888d15e72 |
| 740 | CODE_SMELL | CRITICAL | src/main/session/store.ts:1266 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 70 to the 15 allowed. | 1b23b0d7-b9b5-453c-94d9-972e192e4428 |
| 741 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2291 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 22 to the 15 allowed. | e3e74efb-11ab-4ed6-96cf-8e853d7ca11b |
| 742 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:584 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 72fe3c41-6563-427f-a762-f5eb8ebbbfcb |
| 743 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:586 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 04ff002e-53c2-4679-8f3a-4c5f5eaa3cdb |
| 744 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:905 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | d205e2b7-74ba-4f2d-a04d-c6682885bc12 |
| 745 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:962 | javascript:S7761 | Prefer `.dataset` over `hasAttribute(…)`. | 9f0b2959-ba43-4b74-9384-45e5bba629e9 |
| 746 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:1007 | javascript:S7761 | Prefer `.dataset` over `hasAttribute(…)`. | dfae08b6-2209-4a87-a9ab-dd3132bd0f00 |
| 747 | CODE_SMELL | CRITICAL | extension/usage.js:173 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 39 to the 15 allowed. | b115b9ac-2f16-4afe-9e66-652abf3e92ea |
| 748 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:3285 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | da16537e-58d5-4165-9217-66892fcb7584 |
| 749 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:3298 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 361fce37-99b6-4ba1-840a-4a554830f2bb |
| 750 | CODE_SMELL | MAJOR | extension/fiber.js:2212 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | d5c26d46-8988-4f34-b460-1e023b8f3d1f |
| 751 | CODE_SMELL | MAJOR | extension/fiber.js:2212 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | f7b50227-8715-4d6e-8e17-acb363ac65e8 |
| 752 | CODE_SMELL | MAJOR | extension/fiber.js:2213 | javascript:S7761 | Prefer `.dataset` over `removeAttribute(…)`. | 9cb12c7b-9a77-4903-8598-96fe7f389697 |
| 753 | CODE_SMELL | MAJOR | extension/fiber.js:2271 | javascript:S7761 | Prefer `.dataset` over `removeAttribute(…)`. | 1f6ed6f8-6859-4b61-81c9-0ca61b36fa45 |
| 754 | CODE_SMELL | MAJOR | extension/fiber.js:2272 | javascript:S7761 | Prefer `.dataset` over `removeAttribute(…)`. | 745f5988-4af0-4d80-82d1-0937b773a317 |
| 755 | CODE_SMELL | CRITICAL | src/main/session/store.ts:2701 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | 81d3f689-b4f6-43d0-a8aa-897ab83427af |
| 756 | CODE_SMELL | CRITICAL | src/main/session/store.ts:2917 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 18 to the 15 allowed. | 11a8ffe5-81d0-4100-bd08-0786ce3649ef |
| 757 | CODE_SMELL | CRITICAL | extension/content.js:11571 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | bd2b8343-3501-43e7-aa18-0c25de7c5f1a |
| 758 | CODE_SMELL | MAJOR | src/main/agents.ts:980 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | ea7ede55-bef3-40f5-bed6-be0b2bce1dba |
| 759 | CODE_SMELL | MAJOR | src/main/agents.ts:1002 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 2d1a1a90-e10a-4ada-9bd6-d4c81d0b0688 |
| 760 | CODE_SMELL | MAJOR | src/main/agents.ts:1038 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | a3af317d-8fc4-4234-8d06-23c35690a1f3 |
| 761 | CODE_SMELL | MAJOR | src/main/agents.ts:1088 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 414ee10a-7484-4420-8007-8b0448d5e95f |
| 762 | CODE_SMELL | MAJOR | src/main/agents.ts:1110 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | f00d6a77-3082-407e-973f-21a923c90869 |
| 763 | CODE_SMELL | MAJOR | src/main/agents.ts:3010 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | cf70bf2d-0535-49f0-8d81-116a568d5912 |
| 764 | CODE_SMELL | CRITICAL | src/main/agents.ts:4556 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 28 to the 15 allowed. | 54cc18ae-4720-4f17-943c-d0f883059a69 |
| 765 | CODE_SMELL | CRITICAL | src/main/agents.ts:5043 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 40 to the 15 allowed. | b0e2c18c-5339-4f19-9795-ed259d3096e7 |
| 766 | CODE_SMELL | CRITICAL | src/main/bridge.ts:1608 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 21 to the 15 allowed. | 96e61050-60eb-444f-870b-1d66f5be7b7e |
| 767 | CODE_SMELL | CRITICAL | src/main/bridge.ts:4884 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | 51a9c28c-efb7-45c6-92d1-7a9a19d59581 |
| 768 | CODE_SMELL | MAJOR | src/main/bridge.ts:4928 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 66a99ea2-d14f-4437-a1d0-a6dabbf7b074 |
| 769 | CODE_SMELL | CRITICAL | src/main/bridge.ts:5017 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 34 to the 15 allowed. | d7eab356-919e-4f32-a372-5100b4e29fee |
| 770 | CODE_SMELL | MAJOR | src/main/session/store.ts:1957 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 7ef09ead-9ae2-49aa-9263-d3c5b4cb9d94 |
| 771 | CODE_SMELL | CRITICAL | src/main/mcp/tools-core.ts:785 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 51 to the 15 allowed. | f92e284f-c95a-4a50-8fff-f212a7c1d34d |
| 772 | CODE_SMELL | CRITICAL | src/shared/command-allowlist.ts:166 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 18 to the 15 allowed. | a3c3a640-c4f7-4162-8597-ef77c9f0c827 |
| 773 | CODE_SMELL | CRITICAL | src/main/bridge.ts:6871 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | e9fd38df-4a25-45e7-82c3-9601bebf5f47 |
| 774 | CODE_SMELL | MAJOR | src/main/bridge.ts:6887 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 5a45d83d-1a95-4ada-a981-f39beb3e9cf1 |
| 775 | CODE_SMELL | MAJOR | src/main/bridge.ts:6892 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 824aea8e-4ab2-4d1c-b3a0-050d42ff2e7c |
| 776 | CODE_SMELL | CRITICAL | src/shared/command-allowlist.ts:34 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 100 to the 15 allowed. | 13d6d2e3-2a85-4240-8dcd-7ae4eed5b475 |
| 777 | CODE_SMELL | CRITICAL | src/main/session/finish.ts:64 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 43 to the 15 allowed. | 2d85fe56-6a48-448b-aa8a-6f31392243d6 |
| 778 | CODE_SMELL | MAJOR | scripts/install-server-service.mjs:119 | javascript:S7785 | Prefer top-level await over using a promise chain. | d3b08df8-a6c3-4803-98cf-494810dd2640 |
| 779 | CODE_SMELL | CRITICAL | src/server/index.ts:62 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | 8e1b4fa6-8365-4a8a-955d-0177c89fbff3 |
| 780 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:5897 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 40 to the 15 allowed. | 2d823495-5c42-418b-8310-9fc9fd3d9010 |
| 781 | CODE_SMELL | MINOR | src/server/runtime.ts:33 | typescript:S6644 | Unnecessary use of conditional expression for default assignment. | 8011f1dc-2cf1-49f2-b06a-8e1df787981b |
| 782 | CODE_SMELL | MINOR | src/server/secrets.ts:19 | typescript:S6644 | Unnecessary use of conditional expression for default assignment. | 5a8cd5cc-9798-43df-9db4-b0a5046939a0 |
| 783 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:454 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | 668ba906-3591-4104-9520-260bec9c9bbb |
| 784 | CODE_SMELL | CRITICAL | src/renderer/sidebar-completion.ts:27 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | aa9e93cc-8bd8-4845-91ce-a8fc4c4b0f9e |
| 785 | CODE_SMELL | MINOR | src/renderer/sidebar-completion.ts:32 | typescript:S7764 | Prefer `globalThis` over `window`. | bbbca40c-142b-4f1f-a58b-6b54f85bbcb7 |
| 786 | CODE_SMELL | MINOR | src/renderer/sidebar-completion.ts:63 | typescript:S7764 | Prefer `globalThis` over `window`. | 1f0d6b9b-3e35-4e10-be03-d115599cce79 |
| 787 | CODE_SMELL | MAJOR | src/main/bridge.ts:9739 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 1d8d3118-121c-4b60-8bd8-d1ee8896cad4 |
| 788 | CODE_SMELL | MAJOR | src/main/plugin-refresh.ts:149 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 58d09f98-2079-465e-9977-c0cea7159aa9 |
| 789 | CODE_SMELL | CRITICAL | src/main/session/input.ts:162 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | 5c221310-43e4-402a-a170-6baed8126793 |
| 790 | CODE_SMELL | MINOR | src/renderer/plugins.ts:124 | typescript:S7764 | Prefer `globalThis` over `window`. | 1b5b8d2d-4f5e-43bf-b5a2-b1d6ca73b67b |
| 791 | CODE_SMELL | MINOR | src/renderer/plugins.ts:343 | typescript:S7764 | Prefer `globalThis` over `window`. | 57d64007-4f29-4ffe-8f05-952902384985 |
| 792 | CODE_SMELL | MINOR | extension/content.js:6415 | javascript:S4138 | Expected a `for-of` loop instead of a `for` loop with this simple iteration. | 6cb9a6b8-3981-4d9e-83b4-3d79f9deec9f |
| 793 | CODE_SMELL | MINOR | scripts/fixtures/shell-react-runtime.js:54 | javascript:S7764 | Prefer `globalThis` over `window`. | 567fbe73-b3c6-46a8-a43b-3a5e0139ceb9 |
| 794 | CODE_SMELL | CRITICAL | src/main/session/store.ts:3662 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | 8d6bab3c-bdab-4d6c-a857-54bb5de357b0 |
| 795 | CODE_SMELL | CRITICAL | src/main/bridge.ts:4986 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 21 to the 15 allowed. | fa367a36-b86e-4783-9d37-d0e52fa30d56 |
| 796 | CODE_SMELL | MINOR | scripts/fixtures/shell-react-runtime.js:7 | javascript:S7764 | Prefer `globalThis` over `window`. | 183929d6-174a-4d06-aa09-e3b233c55b98 |
| 797 | CODE_SMELL | MINOR | scripts/fixtures/shell-react-runtime.js:14 | javascript:S7764 | Prefer `globalThis` over `window`. | 5d8af403-0bea-42a0-b1ba-7d6d42bb06fe |
| 798 | CODE_SMELL | MINOR | scripts/fixtures/shell-react-runtime.js:14 | javascript:S7764 | Prefer `globalThis` over `window`. | 80cd2c46-2ddb-4f87-898e-963637b1c1bb |
| 799 | CODE_SMELL | MINOR | scripts/fixtures/shell-react-runtime.js:52 | javascript:S7723 | Use `new Error()` instead of `Error()`. | cdb54719-2144-4890-892d-b93aa1b8048a |
| 800 | CODE_SMELL | MINOR | scripts/fixtures/shell-react-runtime.js:64 | javascript:S7723 | Use `new Error()` instead of `Error()`. | 5ca7012e-8b78-4b41-be28-b67edbfbbe34 |
| 801 | CODE_SMELL | MINOR | scripts/fixtures/shell-react-runtime.js:77 | javascript:S7723 | Use `new Error()` instead of `Error()`. | bca72ac4-7e4a-45f2-b3ad-40276c8a4916 |
| 802 | CODE_SMELL | MINOR | scripts/fixtures/shell-react-runtime.js:96 | javascript:S7723 | Use `new Error()` instead of `Error()`. | 07b3709f-7ed0-4f8e-9e9a-1c6d7c0c534c |
| 803 | CODE_SMELL | MINOR | scripts/fixtures/shell-react-runtime.js:97 | javascript:S7723 | Use `new Error()` instead of `Error()`. | 33b5f630-4d25-40c7-8a21-6079696b7880 |
| 804 | CODE_SMELL | MAJOR | extension/content.js:829 | javascript:S7761 | Prefer `.dataset` over `hasAttribute(…)`. | c3ce8803-e4bd-4ff7-b1e3-ab685c110ddc |
| 805 | CODE_SMELL | MAJOR | extension/fiber.js:252 | javascript:S6557 | Use 'String#startsWith' method instead. | 1cba61ee-c9f8-44cb-81e4-ebc7339afc65 |
| 806 | CODE_SMELL | MINOR | extension/fiber.js:252 | javascript:S7758 | Prefer `String#codePointAt()` over `String#charCodeAt()`. | 2a9b8183-d331-47e2-b376-31b90b339e04 |
| 807 | CODE_SMELL | CRITICAL | src/main/bridge.ts:8947 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 77 to the 15 allowed. | 4face568-e558-489f-a08c-011067fd083e |
| 808 | CODE_SMELL | CRITICAL | src/main/connection.ts:371 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 21 to the 15 allowed. | a0d1ea07-28db-48a2-b43e-5fa5319dbd49 |
| 809 | CODE_SMELL | MAJOR | src/main/connection.ts:640 | typescript:S1121 | Extract the assignment of "pendingTeardown" from this expression. | 60463160-f276-4261-a20c-d9754a166428 |
| 810 | CODE_SMELL | MINOR | src/renderer/usage.ts:63 | typescript:S7764 | Prefer `globalThis` over `window`. | 96d1f8f6-3d25-4147-9a0b-262100db1412 |
| 811 | CODE_SMELL | BLOCKER | test/macos-window-matching.test.ts | typescript:S2187 | Add some tests to this file or delete it. | c940837f-a7ee-4c6a-b7d5-c77d4815bfc6 |
| 812 | CODE_SMELL | MINOR | extension/content.js:2879 | javascript:S7750 | Prefer `.findLast(…)` over `.filter(…).at(-1)`. | 092ec014-5242-4bf8-a98e-203a144dcd85 |
| 813 | CODE_SMELL | CRITICAL | extension/fiber.js:1319 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 32 to the 15 allowed. | 29d87f5c-bb62-4486-baf8-dc354dae053e |
| 814 | CODE_SMELL | MINOR | extension/fiber.js:1371 | javascript:S4138 | Expected a `for-of` loop instead of a `for` loop with this simple iteration. | afba3ddb-61bc-4abe-8796-74657bf671c0 |
| 815 | CODE_SMELL | CRITICAL | extension/fiber.js:1401 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 24 to the 15 allowed. | 200b7157-e102-4139-b4d3-44de5c20d9a2 |
| 816 | CODE_SMELL | CRITICAL | extension/fiber.js:1796 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 58 to the 15 allowed. | a6c02eca-a6af-4d90-acdb-ce736fac50e9 |
| 817 | CODE_SMELL | CRITICAL | src/main/agents.ts:755 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 82 to the 15 allowed. | 67cc5309-229c-440b-a5e9-54593e8aec1d |
| 818 | CODE_SMELL | MINOR | extension/content.js:9252 | javascript:S7750 | Prefer `.findLast(…)` over `.filter(…).at(-1)`. | d1c6f609-7e18-47d9-a315-804392919612 |
| 819 | CODE_SMELL | MINOR | extension/content.js:9347 | javascript:S7750 | Prefer `.findLast(…)` over `.filter(…).at(-1)`. | e91d1061-615a-4e05-a17b-ec80c9a646fe |
| 820 | CODE_SMELL | MINOR | extension/content.js:9350 | javascript:S7750 | Prefer `.findLast(…)` over `.filter(…).at(-1)`. | dc35ae76-93cf-4934-9111-f0afdcc4596b |
| 821 | CODE_SMELL | MINOR | extension/content.js:9382 | javascript:S7750 | Prefer `.findLast(…)` over `.filter(…).at(-1)`. | 1a57e5f8-96e5-4de0-a860-a1d1bb359517 |
| 822 | CODE_SMELL | MAJOR | extension/content.js:9746 | javascript:S4144 | Update this function so that its implementation is not identical to the one on line 9340. | 79a268c4-db74-4d59-b7c7-d4d1f7f6a3a0 |
| 823 | CODE_SMELL | MINOR | scripts/fixtures/browser-bridge-port.ts:120 | typescript:S6551 | 'raw' may use Object's default stringification format ('[object Object]') when stringified. | e147c6d2-f412-4e96-8e28-ec4978b6acb5 |
| 824 | CODE_SMELL | MINOR | src/main/bridge.ts:62 | typescript:S3863 | '../shared/types.js' imported multiple times. | 292c1943-f62a-4830-8bce-5debd135cc88 |
| 825 | CODE_SMELL | MINOR | src/main/bridge.ts:233 | typescript:S7763 | Use `export…from` to re-export `DEFAULT_PORTS`. | 54f909c2-29cd-49b5-b9cd-d57e68450f64 |
| 826 | CODE_SMELL | CRITICAL | src/main/bridge.ts:5243 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 18 to the 15 allowed. | 91453924-c950-4ce5-9cd9-fe7f71212c64 |
| 827 | CODE_SMELL | CRITICAL | src/main/skill-access.ts:26 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | eec9034a-34e3-4234-ad0e-859a8e9aea14 |
| 828 | CODE_SMELL | CRITICAL | src/main/skill-library.ts:109 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 29 to the 15 allowed. | e6d31492-c43c-49e3-bcd1-db6a5f4d343b |
| 829 | CODE_SMELL | CRITICAL | src/main/skills.ts:241 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 25 to the 15 allowed. | e8c648a1-f235-487f-8bee-7cef21176e8f |
| 830 | CODE_SMELL | CRITICAL | extension/background.js:1689 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | 725430a1-ab67-4557-9b7c-14f982de4a59 |
| 831 | CODE_SMELL | MINOR | extension/background.js:2807 | javascript:S6653 | Use 'Object.hasOwn()' instead of 'Object.prototype.hasOwnProperty.call()'. | 92b45e7a-6cb1-4c0a-a8a3-ad189456484f |
| 832 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2249 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 40 to the 15 allowed. | 6d3cb3fb-cbc1-4ac7-8d67-1b043718353b |
| 833 | CODE_SMELL | CRITICAL | extension/fiber.js:1736 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 26 to the 15 allowed. | af1f7012-53dd-4134-b032-1ec11bef7242 |
| 834 | CODE_SMELL | CRITICAL | extension/fiber.js:1882 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 31 to the 15 allowed. | d46cac83-b196-4adf-9890-aa9a592ec805 |
| 835 | CODE_SMELL | MINOR | extension/usage.js:15 | javascript:S7764 | Prefer `globalThis` over `window`. | b3f66da7-b0d0-4568-a2a4-bdcb85908ff9 |
| 836 | CODE_SMELL | MINOR | extension/usage.js:26 | javascript:S7764 | Prefer `globalThis` over `window`. | 68692fec-602b-4aca-871c-ac416dd62ebc |
| 837 | CODE_SMELL | MINOR | extension/usage.js:33 | javascript:S7764 | Prefer `globalThis` over `window`. | 2497ec4a-d39d-4400-a881-73ca485093aa |
| 838 | CODE_SMELL | CRITICAL | extension/usage.js:246 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 30 to the 15 allowed. | a2c8d790-73f5-4640-a152-241a790f863f |
| 839 | CODE_SMELL | CRITICAL | extension/usage.js:298 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 55 to the 15 allowed. | 67fec73f-5b26-4d9b-8c00-a7aaf8bcf1e2 |
| 840 | CODE_SMELL | MINOR | extension/usage.js:342 | javascript:S7764 | Prefer `globalThis` over `window`. | 56747a3e-8c06-41f2-88d2-f24f087b1595 |
| 841 | CODE_SMELL | MINOR | extension/usage.js:342 | javascript:S7764 | Prefer `globalThis` over `window`. | d20c26fe-4ae8-4008-9827-9320078f3b5e |
| 842 | CODE_SMELL | MINOR | extension/usage.js:417 | javascript:S7764 | Prefer `globalThis` over `window`. | 1119e860-74f9-4c3e-bbca-c3f5572285dc |
| 843 | CODE_SMELL | MINOR | extension/usage.js:417 | javascript:S7764 | Prefer `globalThis` over `window`. | 3b5ec325-15bc-409f-b10c-558c7a1b8821 |
| 844 | CODE_SMELL | BLOCKER | extension/usage.js:421 | javascript:S3516 | Refactor this function to not always return the same value. | be59dc86-26b0-42b9-9ca9-deab3813907d |
| 845 | CODE_SMELL | MINOR | extension/usage.js:470 | javascript:S7764 | Prefer `globalThis` over `window`. | c36c5e2d-dea0-47f0-8c93-194d05e1ae03 |
| 846 | CODE_SMELL | MINOR | extension/usage.js:484 | javascript:S7764 | Prefer `globalThis` over `window`. | 68990507-d86b-4537-aee1-861621268d38 |
| 847 | CODE_SMELL | MINOR | extension/usage.js:487 | javascript:S7764 | Prefer `globalThis` over `window`. | 0ba5b956-0c09-48cd-84e3-7eb793114f2a |
| 848 | CODE_SMELL | MINOR | extension/usage.js:487 | javascript:S7764 | Prefer `globalThis` over `window`. | 60f9228a-c5c5-4826-8b3f-f0cc5b2fab84 |
| 849 | CODE_SMELL | MINOR | extension/usage.js:493 | javascript:S7764 | Prefer `globalThis` over `window`. | ba36816b-0afb-4640-a1b1-2c3271ebc790 |
| 850 | CODE_SMELL | MINOR | extension/usage.js:494 | javascript:S7764 | Prefer `globalThis` over `window`. | 83d427ff-41e0-4234-9e45-4cbadb8d02b6 |
| 851 | CODE_SMELL | CRITICAL | src/main/bridge.ts:2971 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | 6b1f8236-e3cb-4e06-9cc8-74eaada6dc5f |
| 852 | CODE_SMELL | CRITICAL | src/main/session/input.ts:1125 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 36 to the 15 allowed. | 433b0c2c-5172-43c2-aeca-46d0fcbb714a |
| 853 | CODE_SMELL | MINOR | src/main/session/usage.ts:28 | typescript:S1874 | '(params?: unknown): ZodNumber' is deprecated. | 4e542c90-361e-4bff-94fc-8f9439fdb226 |
| 854 | CODE_SMELL | MAJOR | src/main/session/usage.ts:155 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | c89ce66a-2bb2-4ca7-a5f3-bcc245a7be66 |
| 855 | CODE_SMELL | CRITICAL | src/main/tunnel/index.ts:563 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 21 to the 15 allowed. | 8cfe86a2-d449-4c30-9d6c-a6e36e0e9bcd |
| 856 | CODE_SMELL | MAJOR | extension/background.js:1976 | javascript:S1788 | Default parameters should be last. | 07e7f04c-9e55-4257-92fe-c26364637eb9 |
| 857 | CODE_SMELL | MINOR | extension/background.js:2824 | javascript:S6653 | Use 'Object.hasOwn()' instead of 'Object.prototype.hasOwnProperty.call()'. | d94482e7-7ded-4e94-988e-a460217516ca |
| 858 | CODE_SMELL | CRITICAL | src/renderer/i18n.ts:133 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | c53124c7-d9c3-483a-b8b4-aa9eb5b79f5f |
| 859 | CODE_SMELL | MINOR | extension/usage.js:176 | javascript:S7750 | Prefer `.findLast(…)` over `.filter(…).at(-1)`. | ba9d27c4-3660-4729-8e40-d5ed14958373 |
| 860 | CODE_SMELL | MINOR | extension/usage.js:200 | javascript:S6653 | Use 'Object.hasOwn()' instead of 'Object.prototype.hasOwnProperty.call()'. | 189e56af-8012-45c2-8a97-ad3fba486106 |
| 861 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:123 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 21 to the 15 allowed. | 0a98c5f4-96f3-4364-afd1-b889d79dca1f |
| 862 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:902 | javascript:S7750 | Prefer `.findLast(…)` over `.filter(…).at(-1)`. | 5772561b-801e-4001-9bbf-67ddaf10b8b2 |
| 863 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2333 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | dd9e4bdf-c085-4229-8d9d-7ec9af25b16f |
| 864 | CODE_SMELL | CRITICAL | extension/background.js:2342 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 30 to the 15 allowed. | 9e45c664-ff48-4826-acf4-61e1c33e82fd |
| 865 | CODE_SMELL | MINOR | extension/background.js:2366 | javascript:S7776 | `blocked` should be a `Set`, and use `blocked.has()` to check existence or non-existence. | 0cdec14e-5e59-40d6-ae70-fd17a57c459a |
| 866 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:599 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 15b089d0-23bc-4dc4-b152-e84d78864dab |
| 867 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:601 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 24c0471b-7ecd-43af-9da8-74174d9f0d91 |
| 868 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:1966 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 18 to the 15 allowed. | 405e9c6d-3501-414c-8f61-fc07ffd67688 |
| 869 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2814 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 06c95acb-6c48-4933-b58c-80d2a56789c1 |
| 870 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2838 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 35bee682-2fc3-452a-a331-3ea802377ad5 |
| 871 | CODE_SMELL | MAJOR | extension/content.js:3073 | javascript:S1854 | Remove this useless assignment to variable "turnIdOf". | 186e4b22-e5ce-412f-ac70-8602847a0802 |
| 872 | CODE_SMELL | MINOR | extension/content.js:3073 | javascript:S1481 | Remove the declaration of the unused 'turnIdOf' variable. | 58645f94-fd07-4b2d-a593-67f8134f9320 |
| 873 | CODE_SMELL | MAJOR | extension/content.js:12110 | javascript:S5869 | Remove duplicates in this character class. | a6277249-0680-4e73-9979-0c5acf8b180d |
| 874 | CODE_SMELL | CRITICAL | extension/fiber.js:308 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 34 to the 15 allowed. | d2c8aebb-8c08-4734-98db-5d34a0c68ce5 |
| 875 | CODE_SMELL | MINOR | extension/fiber.js:332 | javascript:S4138 | Expected a `for-of` loop instead of a `for` loop with this simple iteration. | ad14a7c3-496a-4c09-981f-5ba365b6178c |
| 876 | CODE_SMELL | CRITICAL | extension/fiber.js:343 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 35 to the 15 allowed. | c461405a-cc97-4219-b2d8-44bd31aaa4f9 |
| 877 | CODE_SMELL | MAJOR | extension/fiber.js:1967 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 58c0c8d2-d586-4106-b9f7-4a498de68ca8 |
| 878 | CODE_SMELL | MAJOR | extension/fiber.js:2063 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 24fdd0a3-d38d-49ed-b4c6-4e321f3f2697 |
| 879 | CODE_SMELL | MAJOR | extension/fiber.js:2063 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 88390eea-9df3-4077-8611-12839ae14608 |
| 880 | CODE_SMELL | MAJOR | extension/fiber.js:2194 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | e3a3dde8-3e3b-493f-8673-4ece2d18b465 |
| 881 | CODE_SMELL | MAJOR | extension/fiber.js:2194 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | f3ef58ad-072e-459a-ac51-6daf9725d954 |
| 882 | CODE_SMELL | MAJOR | extension/fiber.js:2195 | javascript:S7761 | Prefer `.dataset` over `removeAttribute(…)`. | 310210b3-350b-4123-8bf6-c2496d6e534f |
| 883 | CODE_SMELL | MAJOR | extension/fiber.js:2281 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 9694d17a-8b37-49be-973e-8a223d11f8aa |
| 884 | CODE_SMELL | MAJOR | extension/fiber.js:2283 | javascript:S7761 | Prefer `.dataset` over `removeAttribute(…)`. | 221dcedd-86b9-4826-b95b-4ee0eda6308f |
| 885 | CODE_SMELL | MAJOR | extension/fiber.js:2285 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | af5f7c56-6804-4bc2-81e0-f45ba34b646f |
| 886 | CODE_SMELL | CRITICAL | extension/fiber.js:2382 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 36 to the 15 allowed. | 5c79ab91-df2f-4837-bec0-7a77028961e0 |
| 887 | CODE_SMELL | MAJOR | extension/fiber.js:2416 | javascript:S7761 | Prefer `.dataset` over `removeAttribute(…)`. | 450799de-a2fc-4918-9d01-f06a2858e634 |
| 888 | CODE_SMELL | MAJOR | extension/fiber.js:2417 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 0ce15c4f-113f-4b17-944f-cba90edc63bd |
| 889 | CODE_SMELL | MAJOR | extension/fiber.js:2417 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | 97dd73ad-bb89-455f-babf-37c609efb4ee |
| 890 | CODE_SMELL | MAJOR | extension/fiber.js:2436 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | c5883669-c1b9-410b-8c4e-61d546578a49 |
| 891 | CODE_SMELL | MAJOR | extension/usage.js:39 | javascript:S5869 | Remove duplicates in this character class. | 5c1d44a4-b455-4844-a261-7c451de17124 |
| 892 | CODE_SMELL | MINOR | src/main/chat-models.ts:20 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | c664bbef-feb2-4562-8161-1a88312a0809 |
| 893 | CODE_SMELL | CRITICAL | src/main/chat-models.ts:142 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | edc36ba7-b6d5-4ab1-aedf-35d807cc4ef8 |
| 894 | CODE_SMELL | MAJOR | src/main/chat-models.ts:146 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | b499bafd-767d-4a65-b3fa-15e59d763a29 |
| 895 | CODE_SMELL | MAJOR | src/main/bridge.ts:6137 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 6614d377-e97b-44fe-84b4-46b07006f12c |
| 896 | CODE_SMELL | CRITICAL | src/main/bridge.ts:8036 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 22 to the 15 allowed. | 2e411f16-6ea8-491b-9c10-ee22656bc6ab |
| 897 | CODE_SMELL | MAJOR | src/main/bridge.ts:8043 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | f88a61b5-3572-460d-85f7-cb2abca4dcf2 |
| 898 | CODE_SMELL | CRITICAL | src/main/bridge.ts:8810 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | b77afe8f-f8b3-4388-9015-ba0288f25796 |
| 899 | CODE_SMELL | CRITICAL | extension/content.js:9557 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 28 to the 15 allowed. | fb046657-8d3a-4dc9-a30c-2eb313305d6e |
| 900 | CODE_SMELL | CRITICAL | extension/fiber.js:1502 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | 2d57b95a-b21d-4d2b-b769-34a3ca505f73 |
| 901 | CODE_SMELL | CRITICAL | extension/fiber.js:1515 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 21 to the 15 allowed. | 97045808-06ae-4448-a875-3b12a274a7af |
| 902 | CODE_SMELL | MAJOR | extension/fiber.js:1544 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 52d4948a-6558-4e5b-ac0d-1ae1306b70bd |
| 903 | CODE_SMELL | CRITICAL | extension/fiber.js:1558 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 27 to the 15 allowed. | 7a2582bf-bd47-4f73-9ee9-686c57cb1f61 |
| 904 | CODE_SMELL | CRITICAL | extension/browser-control-page.js:2 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 299 to the 15 allowed. | bbac3877-6137-4928-ab4f-c2261a31c162 |
| 905 | CODE_SMELL | MAJOR | extension/browser-control-page.js:2 | javascript:S3800 | Refactor this function to always return the same type. | e1961aca-9efe-45e7-b56b-4c1cd44f76f3 |
| 906 | CODE_SMELL | CRITICAL | extension/browser-control.js:210 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 18 to the 15 allowed. | 133f4181-5826-4303-ac1b-c2412ea2a290 |
| 907 | CODE_SMELL | CRITICAL | extension/browser-control.js:248 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 0108adb2-9037-4d25-a1d5-25a7aff0af2e |
| 908 | CODE_SMELL | MINOR | extension/browser-control.js:476 | javascript:S1481 | Remove the declaration of the unused '_refs' variable. | 93f7b69c-fb2c-4ff4-acb4-b9c5eb5ab091 |
| 909 | CODE_SMELL | CRITICAL | extension/browser-control.js:481 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 83 to the 15 allowed. | 799c852a-97bb-4f5f-aa2a-e91f24550b3c |
| 910 | CODE_SMELL | CRITICAL | src/main/bridge.ts:10199 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 21 to the 15 allowed. | 189b10b7-d269-4e72-97c1-5434cd90b710 |
| 911 | CODE_SMELL | CRITICAL | src/main/computer/index.ts:1093 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 42 to the 15 allowed. | e72e9129-83a9-444f-9f0f-eed4468f4fd1 |
| 912 | CODE_SMELL | CRITICAL | src/main/computer/windows-api.ts:125 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 31 to the 15 allowed. | f98a50ea-e669-4cd3-bad2-fbb75c5175a0 |
| 913 | CODE_SMELL | MAJOR | src/main/session/input.ts:1291 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | c2c58693-ae9a-468f-a013-41aee10d63c2 |
| 914 | CODE_SMELL | CRITICAL | src/shared/chronology.ts:199 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | c3d52617-c2d4-423b-b3af-3989a30a9329 |
| 915 | CODE_SMELL | MINOR | extension/content.js:817 | javascript:S6594 | Use the "RegExp.exec()" method instead. | 145aa715-d52e-421b-92bd-98a269eea19b |
| 916 | CODE_SMELL | MINOR | extension/content.js:817 | javascript:S6594 | Use the "RegExp.exec()" method instead. | a62c99cf-114a-4ccc-9ac0-30b197970d46 |
| 917 | CODE_SMELL | CRITICAL | src/main/session/store.ts:747 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 29 to the 15 allowed. | d93869c5-4fd8-49a1-a4f5-39b5fe9a7a12 |
| 918 | CODE_SMELL | MAJOR | src/main/session/store.ts:846 | typescript:S4043 | Move this array "sort" operation to a separate statement or replace it with "toSorted". | be01f20d-b832-49c9-beba-c01e0ecf543f |
| 919 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:5362 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 18 to the 15 allowed. | 98b991b3-cae7-42e8-aade-3c9ca995e43a |
| 920 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:5451 | typescript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 15d8fe56-8e9d-4fe8-b67a-c12100b9d6cf |
| 921 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:5470 | typescript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 7a85eef0-9e98-418d-890a-8577e44ea707 |
| 922 | CODE_SMELL | MAJOR | extension/content.js:2342 | javascript:S6660 | 'If' statement should not be the only statement in 'else' block | 523d89d7-f941-41fc-b707-86a4726c25d0 |
| 923 | CODE_SMELL | MINOR | extension/content.js:2591 | javascript:S7750 | Prefer `.findLast(…)` over `.filter(…).at(-1)`. | 2a274207-e9f3-4544-a84d-ad22e91a2b78 |
| 924 | CODE_SMELL | CRITICAL | extension/content.js:5041 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 35 to the 15 allowed. | b8ec276e-4e71-45fb-abd1-33286cd1268d |
| 925 | CODE_SMELL | CRITICAL | extension/content.js:6367 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 162 to the 15 allowed. | 3f91d8fa-e6f4-4e51-9ed0-f78e5cde5d05 |
| 926 | CODE_SMELL | CRITICAL | extension/fiber.js:1101 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 68 to the 15 allowed. | b2cedfc4-5ddb-4ff0-8244-730860f4c35d |
| 927 | CODE_SMELL | MINOR | extension/fiber.js:1116 | javascript:S4138 | Expected a `for-of` loop instead of a `for` loop with this simple iteration. | 7af837b5-a3f7-488d-8f21-4310ab13acea |
| 928 | CODE_SMELL | MINOR | extension/fiber.js:1139 | javascript:S4138 | Expected a `for-of` loop instead of a `for` loop with this simple iteration. | e039ea2a-fb72-4f96-ad84-fd80180e4ac9 |
| 929 | CODE_SMELL | CRITICAL | scripts/verify-history-scroll.cjs:15 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 30 to the 15 allowed. | 307ed45b-37b0-4968-a94a-bebd2c266b85 |
| 930 | CODE_SMELL | CRITICAL | src/main/agents.ts:3798 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 30 to the 15 allowed. | f7b3a247-be13-43a6-97fa-657f71171ff5 |
| 931 | CODE_SMELL | CRITICAL | src/main/session/input.ts:1766 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 29 to the 15 allowed. | 7d0fc6e1-6a10-4b4b-b9cb-d06da25b8e87 |
| 932 | CODE_SMELL | CRITICAL | src/shared/chronology.ts:99 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 27 to the 15 allowed. | 45beb443-f3cd-4039-ac8c-cd633c313599 |
| 933 | CODE_SMELL | MAJOR | src/shared/chronology.ts:132 | typescript:S1854 | Remove this useless assignment to variable "turns". | b6da0a7a-59fe-4b05-aad3-aac5ffd03309 |
| 934 | CODE_SMELL | CRITICAL | src/shared/chronology.ts:270 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 35 to the 15 allowed. | 21cbf96b-2c21-4208-ba6b-097d6102b13c |
| 935 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2183 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 7323f75e-c03a-4e82-b5b3-10e9a71d44c3 |
| 936 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2190 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 41 to the 15 allowed. | 257880ca-f0ab-410c-8e3f-cf04656efac0 |
| 937 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2226 | javascript:S7761 | Prefer `.dataset` over `removeAttribute(…)`. | ddfbc54b-0f19-46f0-8752-224007de6375 |
| 938 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2230 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | 6940981f-38f4-4769-bcea-2c2583eaa7df |
| 939 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2230 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | a8504e58-6735-48f7-9a44-5a4fdfc6ea1f |
| 940 | CODE_SMELL | MINOR | extension/content.js:867 | javascript:S6594 | Use the "RegExp.exec()" method instead. | 283181b5-ed41-4243-ab9c-8382a09f3e50 |
| 941 | CODE_SMELL | MAJOR | extension/content.js:981 | javascript:S107 | Function 'sendSubmittedText' has too many parameters (9). Maximum allowed is 7. | d0b6c41e-880f-4780-b038-2cdcb6ccaffd |
| 942 | CODE_SMELL | MINOR | extension/content.js:12308 | javascript:S7750 | Prefer `.findLast(…)` over `.filter(…).at(-1)`. | c6c8f656-c15f-4fe7-a4b2-7090ce0e7341 |
| 943 | CODE_SMELL | CRITICAL | src/main/session/input.ts:205 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 27 to the 15 allowed. | aeb1f91f-13f5-4d18-963d-693a124146f9 |
| 944 | CODE_SMELL | CRITICAL | extension/content.js:5158 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 32 to the 15 allowed. | a972e58f-6f2f-469b-91e8-cdbdf7f82eed |
| 945 | CODE_SMELL | CRITICAL | extension/content.js:6316 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 18 to the 15 allowed. | 0126f9c8-a878-4ae2-826e-bcff3161ad91 |
| 946 | CODE_SMELL | MAJOR | extension/content.js:9852 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | de784016-3b42-4c19-b11d-5238bed3b4b7 |
| 947 | CODE_SMELL | MINOR | src/main/agents.ts:3693 | typescript:S7770 | arrow function is equivalent to `Boolean`. Use `Boolean` directly. | d689dc4e-fa92-4317-b116-f43b07960e83 |
| 948 | CODE_SMELL | CRITICAL | src/main/agents.ts:4886 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | 0dc20dc2-9556-43be-a251-c1623c3f2f51 |
| 949 | CODE_SMELL | CRITICAL | src/main/bridge.ts:6014 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 25 to the 15 allowed. | e686dd36-fead-466b-b9dd-3d703f645c63 |
| 950 | CODE_SMELL | MAJOR | src/main/bridge.ts:7539 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | e446db4a-99a6-4d55-834c-1618a825c28b |
| 951 | CODE_SMELL | MAJOR | src/main/bridge.ts:8689 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 3b7433f8-d27d-4ce0-af3e-9977b8c4571e |
| 952 | CODE_SMELL | MINOR | src/main/mcp/tools-core.ts:149 | typescript:S3863 | '../session/correlation.js' imported multiple times. | 93e21a83-40c8-425e-a4b6-95561fa01cab |
| 953 | CODE_SMELL | CRITICAL | src/main/mcp/tools-core.ts:735 | typescript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 8ea5e242-d715-4729-b639-35aad24b545b |
| 954 | CODE_SMELL | MINOR | src/main/mcp/tools-core.ts:1322 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | 486ffc2f-286d-456f-9c05-8343882c5cf1 |
| 955 | CODE_SMELL | CRITICAL | src/main/mcp/tools-core.ts:1729 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | 56fe8c5d-60d4-400b-af2e-5c8222e2b10b |
| 956 | CODE_SMELL | CRITICAL | src/main/mcp/tools-desktop-windows.ts:24 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 25 to the 15 allowed. | ea67d15c-aa78-4b4f-a1f8-565ad67d60eb |
| 957 | CODE_SMELL | CRITICAL | src/main/workspace.ts:103 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 28 to the 15 allowed. | e0d73597-bec4-49b9-a230-ca8153c2788e |
| 958 | CODE_SMELL | CRITICAL | src/renderer/chat-error.ts:24 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 50 to the 15 allowed. | ccf96bea-9fc0-488c-81fa-fbb281031771 |
| 959 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:1115 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | 2fb6bce2-de9c-4419-90ee-ca46b2ceac0d |
| 960 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:2591 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 43 to the 15 allowed. | f44c7ed3-722d-4a56-bce1-466b19ea075b |
| 961 | CODE_SMELL | MINOR | src/renderer/chat.ts:2638 | typescript:S7764 | Prefer `globalThis` over `window`. | 7a1ae34b-058c-4d8f-ae4b-214dcf4dfc79 |
| 962 | CODE_SMELL | CRITICAL | extension/browser-control-page.js:228 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 27 to the 15 allowed. | 4d6e7c55-027d-429e-8a36-75ed33e42ce2 |
| 963 | CODE_SMELL | MINOR | extension/content.js:12318 | javascript:S7750 | Prefer `.findLast(…)` over `.filter(…).at(-1)`. | 4b88cc4f-ca11-4f64-9019-d3e988a86103 |
| 964 | CODE_SMELL | CRITICAL | src/main/session/store.ts:2071 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 30 to the 15 allowed. | 24569fde-6814-49c2-9ad0-ace5cb28bb3d |
| 965 | CODE_SMELL | MAJOR | src/main/bridge.ts:3827 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 4d70cbd7-45b3-4176-b65f-dea43afa1304 |
| 966 | CODE_SMELL | CRITICAL | src/main/bridge.ts:6733 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | 8294c62f-7382-4f93-b245-432cb0aa3a7a |
| 967 | CODE_SMELL | MAJOR | src/main/bridge.ts:6861 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | abb9ce8d-d85d-4109-a67a-5930eb2cf812 |
| 968 | CODE_SMELL | CRITICAL | src/main/connection.ts:593 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | 6c6c6562-9028-4566-8bb7-d8acbf8e7d3c |
| 969 | CODE_SMELL | MAJOR | src/main/goal.ts:1516 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | d36d5258-903c-4792-af85-61de3a81a80b |
| 970 | CODE_SMELL | MAJOR | src/main/goal.ts:1541 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | a0f8b9eb-64a3-478b-abed-ca24716a0dfc |
| 971 | CODE_SMELL | CRITICAL | extension/background.js:3684 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 27 to the 15 allowed. | 56629d22-8245-4835-9fab-81411778a4fa |
| 972 | CODE_SMELL | CRITICAL | extension/background.js:4788 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 36 to the 15 allowed. | cefe7a22-3056-4fca-8d6b-60806ff97ce6 |
| 973 | CODE_SMELL | MAJOR | scripts/verify-active-tabs.mjs:62 | javascript:S1788 | Default parameters should be last. | f7b0bf8e-1589-4ad4-bfb8-2eadd32573da |
| 974 | CODE_SMELL | MINOR | scripts/verify-connection-compact.cjs:16 | javascript:S6594 | Use the "RegExp.exec()" method instead. | 3a3ff423-1684-497e-b245-fa4470dd6a40 |
| 975 | CODE_SMELL | MINOR | scripts/verify-connection-layer.cjs:16 | javascript:S6594 | Use the "RegExp.exec()" method instead. | df0804ee-7df2-40a1-a0d2-79d9df9c16b2 |
| 976 | CODE_SMELL | MINOR | src/main/bridge.ts:53 | typescript:S3863 | '../shared/types.js' imported multiple times. | 2698b0bd-d1bd-43d2-9cec-90ad2e950f34 |
| 977 | CODE_SMELL | CRITICAL | src/main/codex/apply-patch/file-update.ts:74 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | 91979acc-fe75-4571-807b-e12881301895 |
| 978 | CODE_SMELL | CRITICAL | src/main/codex/unified-exec.ts:786 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 23 to the 15 allowed. | 3e723ed5-7d2d-4f9d-911d-22d67dfb562f |
| 979 | CODE_SMELL | CRITICAL | src/main/codex/unified-exec.ts:905 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 36 to the 15 allowed. | a416d930-e620-46e2-907d-d1ecf9a0391d |
| 980 | CODE_SMELL | CRITICAL | src/main/exec-hints.ts:818 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | 91e7d0ee-b24d-40d5-a09a-70fd5d150a37 |
| 981 | CODE_SMELL | MINOR | src/main/ipc.ts:844 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | f1ccc0eb-57b7-4205-87a9-05a672be6d9a |
| 982 | CODE_SMELL | MINOR | src/main/ipc.ts:926 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | ef8493b4-a7e2-4156-81af-fdf92b13deec |
| 983 | CODE_SMELL | CRITICAL | src/main/mcp/tools-core.ts:946 | typescript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | de7e57c9-8edd-4042-bd93-dc1612a70a1d |
| 984 | CODE_SMELL | CRITICAL | src/main/mcp/tools-core.ts:948 | typescript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 3ff45cf7-945c-4948-99e9-8d80feefb9e5 |
| 985 | CODE_SMELL | CRITICAL | src/main/project-file-watcher.ts:37 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 28 to the 15 allowed. | 0e92232f-7887-41d6-8d62-38825808f39e |
| 986 | CODE_SMELL | CRITICAL | src/main/project-files.ts:248 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 49 to the 15 allowed. | 102abb71-9b93-420f-9077-268c8e8e1b2a |
| 987 | CODE_SMELL | CRITICAL | src/main/session/input-history.ts:11 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 22 to the 15 allowed. | 17f563c9-2913-4a34-8f77-cbf446529dfb |
| 988 | CODE_SMELL | CRITICAL | src/main/session/input.ts:1489 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 31 to the 15 allowed. | c8a49cdb-e1cb-4d10-a281-e851644a590a |
| 989 | CODE_SMELL | CRITICAL | src/main/session/store.ts:2040 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 48 to the 15 allowed. | 77c781a1-c4d2-4018-9cd8-1437a4d2d9e2 |
| 990 | CODE_SMELL | CRITICAL | src/main/session/summarize.ts:253 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 145 to the 15 allowed. | be55075c-efc7-4747-a869-c13292f531a3 |
| 991 | CODE_SMELL | MAJOR | src/main/skill-library.ts:187 | typescript:S4043 | Move this array "reverse" operation to a separate statement or replace it with "toReversed". | 11440eef-18ad-4421-a516-aac91d85270b |
| 992 | CODE_SMELL | MAJOR | src/main/skill-package.ts:105 | typescript:S4043 | Move this array "reverse" operation to a separate statement or replace it with "toReversed". | 19bd5d1b-f452-4020-a7e0-e7b6945a4733 |
| 993 | CODE_SMELL | MAJOR | src/main/skill-package.ts:111 | typescript:S4043 | Move this array "reverse" operation to a separate statement or replace it with "toReversed". | 861c6a15-dfab-420b-8824-d1a507907ab3 |
| 994 | CODE_SMELL | MAJOR | src/main/skills.ts:716 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | c2218684-b4a8-4376-b103-cc553a479444 |
| 995 | CODE_SMELL | MINOR | src/main/workspace-terminal-ipc.ts:12 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | 9fdcf30e-2c41-4224-b52c-22b320efdfdf |
| 996 | CODE_SMELL | MINOR | src/main/workspace-terminal-ipc.ts:13 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | 3f6e8559-eb74-4bcf-959e-82e90b320173 |
| 997 | CODE_SMELL | MINOR | src/main/workspace-terminal-ipc.ts:14 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | 1f9bf34d-0542-4990-941b-308daa71e2aa |
| 998 | CODE_SMELL | MINOR | src/main/workspace-terminal-ipc.ts:15 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | 8e80e56b-9553-48ed-ac6c-3cae0c04c13d |
| 999 | CODE_SMELL | MAJOR | src/main/workspace-terminal.ts:11 | typescript:S2933 | Member 'entries' is never reassigned; mark it as `readonly`. | 4eca47c7-0e57-421c-9996-2b889ede6b9f |
| 1000 | CODE_SMELL | MAJOR | src/main/workspace-terminal.ts:12 | typescript:S2933 | Member 'pending' is never reassigned; mark it as `readonly`. | 8cd702d3-50de-4846-838d-ad3ecad7a0a4 |
| 1001 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:1240 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 33 to the 15 allowed. | 471303d7-33f1-4e5c-94b9-9c5bc4b8adc7 |
| 1002 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:1400 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | 3247ad6d-fd28-4abf-82f0-6c7357b34010 |
| 1003 | CODE_SMELL | MAJOR | src/renderer/chat.ts:1737 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 386c6e1e-099a-4a01-8a9e-872301eb3db6 |
| 1004 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:96 | typescript:S7764 | Prefer `globalThis` over `window`. | 871d1cd4-511e-4b19-bd86-ceec4be98408 |
| 1005 | CODE_SMELL | MAJOR | src/renderer/file-panel.ts:185 | typescript:S4144 | Update this function so that its implementation is not identical to the one on line 139. | 6f2d536e-9d7c-4179-a506-9446079a70bd |
| 1006 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:326 | typescript:S7764 | Prefer `globalThis` over `window`. | a816528d-313f-4697-9481-d490ed43f6de |
| 1007 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:350 | typescript:S7764 | Prefer `globalThis` over `window`. | 0c3483b0-ebaa-4657-a18b-d983ac9f6e0e |
| 1008 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:357 | typescript:S7764 | Prefer `globalThis` over `window`. | 7c8d0566-a6c9-441c-af32-8a5120631340 |
| 1009 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:556 | typescript:S7764 | Prefer `globalThis` over `window`. | 3f00d808-b91e-4803-8aef-5b7b14a9818b |
| 1010 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:597 | typescript:S7764 | Prefer `globalThis` over `window`. | af2714fc-b24d-47c4-a485-56cb0ebcd7f4 |
| 1011 | CODE_SMELL | CRITICAL | src/renderer/file-panel.ts:736 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | c709dfc0-97dc-448f-8738-1f0340361a44 |
| 1012 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:796 | typescript:S7764 | Prefer `globalThis` over `window`. | f99c27f2-7843-4a44-b2dc-5f865e6c2109 |
| 1013 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:801 | typescript:S7764 | Prefer `globalThis` over `window`. | 8201799e-a2e4-4edc-a7ce-401aaaa9ccc0 |
| 1014 | CODE_SMELL | MAJOR | src/renderer/file-panel.ts:816 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 82665665-186b-4cb2-b253-8b0404367e4a |
| 1015 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:821 | typescript:S7764 | Prefer `globalThis` over `window`. | 8614834d-bee5-4241-9e0a-b3bb70c04b02 |
| 1016 | CODE_SMELL | CRITICAL | src/renderer/file-panel.ts:945 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 18 to the 15 allowed. | 7f66b769-3714-4b4a-ac56-57f5407c1bd8 |
| 1017 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:1432 | typescript:S7764 | Prefer `globalThis` over `window`. | 8c613c26-715d-45b6-9371-8d450a486832 |
| 1018 | CODE_SMELL | MAJOR | src/renderer/file-panel.ts:1437 | typescript:S7721 | Move function 'firstChildWithin' to the outer scope. | 43bb3fa7-02c3-4b4f-a9ac-11faca964dc3 |
| 1019 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:1449 | typescript:S7764 | Prefer `globalThis` over `window`. | a0b35467-0f26-45a3-9b6a-59f97a07acdd |
| 1020 | CODE_SMELL | MAJOR | src/renderer/file-panel.ts:1467 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | c0b715aa-9048-4860-a788-46e0e397bda3 |
| 1021 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:1470 | typescript:S7764 | Prefer `globalThis` over `window`. | c0183139-d2fc-49ff-9700-380a6ffcbab0 |
| 1022 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:1493 | typescript:S7764 | Prefer `globalThis` over `window`. | 07653a23-8400-4fa1-96ce-239cc17a5e12 |
| 1023 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:1516 | typescript:S7764 | Prefer `globalThis` over `window`. | 3e697d8f-0bde-4418-abc2-d7715e1e7b5f |
| 1024 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:1544 | typescript:S7764 | Prefer `globalThis` over `window`. | b6da01cb-0e72-4632-8283-eab9fc31c197 |
| 1025 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:1571 | typescript:S7764 | Prefer `globalThis` over `window`. | ff6d8458-ba45-4866-9e50-00f917249e9a |
| 1026 | CODE_SMELL | MINOR | src/renderer/file-pdf-viewer.ts:25 | typescript:S7758 | Prefer `String#codePointAt()` over `String#charCodeAt()`. | 501af8fc-a0e8-4c40-8390-ef246541d558 |
| 1027 | CODE_SMELL | CRITICAL | src/renderer/file-pdf-viewer.ts:101 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | c2e22e04-996c-478c-9cbd-6cec31ee5024 |
| 1028 | CODE_SMELL | MINOR | src/renderer/file-pdf-viewer.ts:214 | typescript:S7764 | Prefer `globalThis` over `window`. | 67051bc1-8208-4f3f-abea-76f9f42c93e7 |
| 1029 | CODE_SMELL | MINOR | src/renderer/file-pdf-viewer.ts:215 | typescript:S7764 | Prefer `globalThis` over `window`. | 4fac5f24-959d-467a-be1d-18aaa09ce5f1 |
| 1030 | CODE_SMELL | MINOR | src/renderer/file-pdf-viewer.ts:229 | typescript:S7764 | Prefer `globalThis` over `window`. | 0eff54c3-322c-47d3-a86f-81961f77a2e8 |
| 1031 | CODE_SMELL | MAJOR | src/renderer/index.html:116 | Web:S6819 | Use &lt;dialog&gt; instead of the dialog role to ensure accessibility across all devices. | e87ec3c6-447f-4f88-bbcd-e71db63218ed |
| 1032 | CODE_SMELL | MINOR | src/renderer/skills.ts:210 | typescript:S7718 | The catch parameter `failure` should be named `error_`. | 83b681f7-d29a-4f8a-a42c-c55233c14188 |
| 1033 | CODE_SMELL | MINOR | src/renderer/workspace-terminal.ts:59 | typescript:S7764 | Prefer `globalThis` over `window`. | a6517682-8f1a-4b1f-8da1-22e902ded04c |
| 1034 | CODE_SMELL | MINOR | src/renderer/workspace-terminal.ts:118 | typescript:S7764 | Prefer `globalThis` over `window`. | 0808ea5c-6021-48d5-ae33-b1f810c063d6 |
| 1035 | CODE_SMELL | MINOR | src/renderer/workspace-terminal.ts:126 | typescript:S7764 | Prefer `globalThis` over `window`. | 695b7529-a465-4a00-9882-5fe9ad9a9e31 |
| 1036 | CODE_SMELL | MINOR | src/renderer/workspace-terminal.ts:132 | typescript:S7764 | Prefer `globalThis` over `window`. | 7c99e3c6-b231-4ab1-96f9-e9a6f70fa9cb |
| 1037 | CODE_SMELL | MINOR | src/renderer/workspace-terminal.ts:138 | typescript:S7764 | Prefer `globalThis` over `window`. | d4ade1ac-3761-4b81-bab1-8a4e2c061b7a |
| 1038 | CODE_SMELL | MINOR | src/renderer/workspace-terminal.ts:140 | typescript:S7764 | Prefer `globalThis` over `window`. | 6fc72571-4dc8-4c1c-b519-973067e88c29 |
| 1039 | CODE_SMELL | MINOR | src/shared/appearance.ts:43 | typescript:S7773 | Prefer `Number.parseInt` over `parseInt`. | 607d9e8d-3e68-4650-98fe-c94d7601a6ac |
| 1040 | CODE_SMELL | CRITICAL | extension/browser-control.js:345 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 43 to the 15 allowed. | d161d846-2a0c-48b3-acd4-7531ab1fc418 |
| 1041 | CODE_SMELL | CRITICAL | extension/browser-control.js:416 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 27 to the 15 allowed. | 9fe4bea9-abb1-4c0b-a007-7f5f6d94d2ac |
| 1042 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2864 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | c1f05ad9-5d30-4d3b-aab4-fca9e10200db |
| 1043 | CODE_SMELL | CRITICAL | scripts/verify-browser-control-entry.mjs:31 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 22 to the 15 allowed. | 77825cf2-df6a-4773-bc4e-967c4dc636a0 |
| 1044 | CODE_SMELL | MINOR | src/main/mcp/tools-browser.ts:17 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | 581d8b6e-2113-453a-a4bf-a781c758555f |
| 1045 | CODE_SMELL | CRITICAL | src/main/session/store.ts:3590 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 43 to the 15 allowed. | ff9de77b-4058-4540-9642-1a4f0f12fad8 |
| 1046 | CODE_SMELL | MINOR | src/renderer/image-storage.ts:51 | typescript:S7764 | Prefer `globalThis` over `window`. | 6a5c67f9-be01-4d6c-97e1-edb51c756208 |
| 1047 | CODE_SMELL | MINOR | src/renderer/image-storage.ts:65 | typescript:S7764 | Prefer `globalThis` over `window`. | 842a3d08-1ea4-435b-aabf-9928c455a0ee |
| 1048 | CODE_SMELL | MAJOR | extension/browser-control-page.js:46 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | 6d3d736c-5e0b-491a-b4ab-a7804e78f276 |
| 1049 | CODE_SMELL | MINOR | extension/browser-control-page.js:240 | javascript:S6653 | Use 'Object.hasOwn()' instead of 'Object.prototype.hasOwnProperty.call()'. | 62c87911-b8a4-4ca9-9d3e-fa3b20ea4425 |
| 1050 | CODE_SMELL | MAJOR | extension/browser-control-page.js:256 | javascript:S3800 | Refactor this function to always return the same type. | 15626c5a-699a-4194-b726-591a5be83a84 |
| 1051 | CODE_SMELL | MAJOR | extension/browser-control.js:22 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | a7611e1d-7a1d-4b6d-ac76-5ddef7f143af |
| 1052 | CODE_SMELL | MAJOR | extension/browser-control.js:66 | javascript:S1788 | Default parameters should be last. | cfece196-c80f-4951-9082-5f174d1028eb |
| 1053 | CODE_SMELL | CRITICAL | extension/browser-control.js:81 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | c50ea6e2-bcf6-4d06-a337-78539153c785 |
| 1054 | CODE_SMELL | CRITICAL | extension/browser-control.js:82 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 02bf917d-793c-45d6-9785-7d77b65683c9 |
| 1055 | CODE_SMELL | CRITICAL | extension/browser-control.js:83 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | f653ba0e-396a-4695-902f-6f71083c4b4c |
| 1056 | CODE_SMELL | MAJOR | extension/browser-control.js:191 | javascript:S1788 | Default parameters should be last. | 57583744-d70c-46da-9718-0003c5c7fb13 |
| 1057 | CODE_SMELL | CRITICAL | extension/browser-control.js:275 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 28 to the 15 allowed. | 94b178a3-f4b6-46f7-a237-46ad1c40b06e |
| 1058 | CODE_SMELL | MINOR | extension/browser-control.js:341 | javascript:S7758 | Prefer `String#codePointAt()` over `String#charCodeAt()`. | ed1bc2b0-b019-4673-8b55-e4b38f189426 |
| 1059 | CODE_SMELL | MINOR | extension/browser-control.js:357 | javascript:S1481 | Remove the declaration of the unused '_text' variable. | a86b1309-7388-453f-a0d7-641987e90ba4 |
| 1060 | CODE_SMELL | MINOR | extension/browser-control.js:429 | javascript:S1481 | Remove the declaration of the unused '_native' variable. | 21627d50-ead6-4a1d-9ab6-e7c4ac7d8b48 |
| 1061 | CODE_SMELL | MINOR | extension/browser-control.js:429 | javascript:S1481 | Remove the declaration of the unused '_session' variable. | b6a610c3-d3ec-436c-8b35-1116a37913bb |
| 1062 | CODE_SMELL | MINOR | extension/browser-control.js:439 | javascript:S1481 | Remove the declaration of the unused '_rq' variable. | 037cd7ec-fe38-47fa-89f8-ca0c1fa57407 |
| 1063 | CODE_SMELL | MINOR | extension/browser-control.js:439 | javascript:S1481 | Remove the declaration of the unused '_native' variable. | 0805662e-99be-4e5b-bc90-81d95d4fb8d0 |
| 1064 | CODE_SMELL | MINOR | extension/browser-control.js:439 | javascript:S1481 | Remove the declaration of the unused '_session' variable. | 2661f8b5-d111-46b1-aaa7-a527b5aaf84a |
| 1065 | CODE_SMELL | MINOR | extension/browser-control.js:439 | javascript:S1481 | Remove the declaration of the unused '_post' variable. | 47879fcd-ce98-4743-b0fc-2f77e54af41c |
| 1066 | CODE_SMELL | MINOR | extension/browser-control.js:439 | javascript:S1481 | Remove the declaration of the unused '_rs' variable. | 556853a8-a2f0-49f0-a4c7-3db912632031 |
| 1067 | CODE_SMELL | CRITICAL | extension/browser-control.js:591 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 56 to the 15 allowed. | 4edec1a2-bffe-403c-8f99-2b80266bdf39 |
| 1068 | CODE_SMELL | CRITICAL | extension/browser-control.js:644 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | 047a1606-fc39-40ca-8217-7fc232869a09 |
| 1069 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:677 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | bd9483a8-b3d6-4f59-be6f-6e7f9ac8017e |
| 1070 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2003 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | 75e003e0-1dc5-480f-818d-e61a9295b75f |
| 1071 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2060 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 5b7991e4-b4ea-41da-adc8-bf1a965a09a5 |
| 1072 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2109 | javascript:S7761 | Prefer `.dataset` over `removeAttribute(…)`. | 68dc3808-2954-47cb-a711-4243e9f0b2eb |
| 1073 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2110 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | 5405e749-2187-4405-b90f-d7fc8fbd3fc2 |
| 1074 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2173 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 52a22b42-e26d-46aa-8d0e-c2a34c34ebe8 |
| 1075 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2940 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 4781aa76-52b1-4712-a7c4-5b3bccf812a8 |
| 1076 | CODE_SMELL | CRITICAL | extension/content.js:3303 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 4073027d-71c8-43d7-a059-b6be3bb65ef1 |
| 1077 | CODE_SMELL | MAJOR | extension/content.js:3821 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 4dc22748-9831-4188-a753-203bf38fc18c |
| 1078 | CODE_SMELL | CRITICAL | extension/content.js:3908 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 30 to the 15 allowed. | b0bab4ea-90d6-4564-9e95-250feb6b4d7e |
| 1079 | CODE_SMELL | MINOR | extension/content.js:3957 | javascript:S7758 | Prefer `String.fromCodePoint()` over `String.fromCharCode()`. | 910a4f2d-a227-4bcf-a986-d4e97d759745 |
| 1080 | CODE_SMELL | CRITICAL | extension/content.js:5394 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | 3f544755-9247-4e7d-a858-705035aa4a64 |
| 1081 | CODE_SMELL | CRITICAL | extension/content.js:5465 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 38 to the 15 allowed. | c6021271-7eb8-43a9-b934-a7a7f02972c3 |
| 1082 | CODE_SMELL | CRITICAL | extension/content.js:5527 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 43 to the 15 allowed. | 3b174b19-a598-4efa-b17d-bab351bbbeb3 |
| 1083 | CODE_SMELL | CRITICAL | extension/content.js:5736 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | dddd1b4b-8ac3-4002-bfa3-fde301352c1a |
| 1084 | CODE_SMELL | MAJOR | extension/content.js:5763 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | ee7a6bab-a94e-405a-b431-cbeb83deeecb |
| 1085 | CODE_SMELL | MINOR | extension/content.js:5907 | javascript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | afc7e9c0-de6f-48f2-b36b-47c72902d97d |
| 1086 | CODE_SMELL | MAJOR | extension/content.js:5928 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 500ba7c9-c10e-4e7a-9da4-24170acb6419 |
| 1087 | CODE_SMELL | CRITICAL | extension/content.js:6207 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | 68cfb872-b09d-45c0-9af7-ebf8bba9d45a |
| 1088 | CODE_SMELL | MAJOR | extension/content.js:6221 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 34ca2514-88f6-4046-9ef4-3aa8c37ece6e |
| 1089 | CODE_SMELL | MAJOR | extension/content.js:6224 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 52bb44d4-d095-4117-acbb-c52de9b7c3b1 |
| 1090 | CODE_SMELL | MAJOR | extension/content.js:6342 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | bf924b58-82db-4d5d-aaed-1bfa4bbc06f0 |
| 1091 | CODE_SMELL | MINOR | extension/fiber.js:944 | javascript:S4138 | Expected a `for-of` loop instead of a `for` loop with this simple iteration. | 22f5e692-3606-4f62-88a5-137b1a6e7795 |
| 1092 | CODE_SMELL | MAJOR | extension/fiber.js:2246 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 8d9c4478-73a7-4c59-93a0-718e2e70240a |
| 1093 | CODE_SMELL | MAJOR | extension/fiber.js:2248 | javascript:S7761 | Prefer `.dataset` over `removeAttribute(…)`. | 45bc546f-5423-488e-87ef-908ca6a54a2e |
| 1094 | CODE_SMELL | MAJOR | extension/fiber.js:2249 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | edde4a25-1ce2-4715-abcf-a68763ddbd90 |
| 1095 | CODE_SMELL | MAJOR | extension/fiber.js:2253 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | e60f0fb3-fb38-407d-9c61-0bbbd574af6d |
| 1096 | CODE_SMELL | MAJOR | extension/fiber.js:2255 | javascript:S7761 | Prefer `.dataset` over `removeAttribute(…)`. | e6f5630e-b889-47e9-8e52-336d1a05494f |
| 1097 | CODE_SMELL | MAJOR | extension/fiber.js:2256 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | 2ab9be38-2a45-4707-a16c-bfe8ea480c9a |
| 1098 | CODE_SMELL | MAJOR | extension/fiber.js:2260 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 2c943fca-ccd0-4727-88cb-c9557d359303 |
| 1099 | CODE_SMELL | MAJOR | extension/fiber.js:2262 | javascript:S7761 | Prefer `.dataset` over `removeAttribute(…)`. | 3352f628-06a2-46c4-9277-ac3ab7eddf8e |
| 1100 | CODE_SMELL | MAJOR | extension/fiber.js:2263 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | 545b99cf-725f-4e9b-821b-1dc8a63b088f |
| 1101 | CODE_SMELL | CRITICAL | scripts/package-native-sources.mjs:42 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 22 to the 15 allowed. | 3b2931be-6981-426e-a52b-7e5de8cfc368 |
| 1102 | CODE_SMELL | MINOR | scripts/verify-browser-control-entry.mjs:52 | javascript:S6551 | 'bytes' may use Object's default stringification format ('[object Object]') when stringified. | 2c85bbfc-bae6-440d-afd2-2ae395ad51b6 |
| 1103 | CODE_SMELL | MAJOR | scripts/verify-browser-control-entry.mjs:63 | javascript:S1788 | Default parameters should be last. | 617f27ed-cd49-48a5-9e21-0b1dd4943894 |
| 1104 | CODE_SMELL | MAJOR | scripts/verify-browser-control.mjs:69 | javascript:S1788 | Default parameters should be last. | 87722b5f-a037-4a25-b061-9e0b3d320a21 |
| 1105 | CODE_SMELL | MINOR | scripts/verify-message-reactions.cjs:51 | javascript:S7723 | Use `new Error()` instead of `Error()`. | bbdfab4f-d3ef-43cf-a6f1-dc58a5da209c |
| 1106 | CODE_SMELL | MINOR | src/main/bridge.ts:56 | typescript:S3863 | '../shared/session.js' imported multiple times. | 8a9dde2c-44f7-4e50-946a-05e37eb800cd |
| 1107 | CODE_SMELL | MINOR | src/main/bridge.ts:1708 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 00ceb2c6-be6e-45c1-afb7-e54105699d5f |
| 1108 | CODE_SMELL | MINOR | src/main/bridge.ts:1714 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 6c9bd71e-e1fb-40a6-9f5d-4d95f9440365 |
| 1109 | CODE_SMELL | CRITICAL | src/main/bridge.ts:1718 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | 84995269-a4f5-4a9d-8619-0420af8347b3 |
| 1110 | CODE_SMELL | MINOR | src/main/bridge.ts:1731 | typescript:S6551 | 'block.type ?? ''' will use Object's default stringification format ('[object Object]') when stringified. | a0a7ab38-8139-4897-b25e-ac6a0d319aa1 |
| 1111 | CODE_SMELL | CRITICAL | src/main/bridge.ts:6818 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | 3aeb0279-0d14-46da-becc-749aa7cb775c |
| 1112 | CODE_SMELL | CRITICAL | src/main/bridge.ts:8084 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 49 to the 15 allowed. | efe2b234-cf5d-434c-b1c0-4a3766887e73 |
| 1113 | CODE_SMELL | MAJOR | src/main/browser-control.ts:19 | typescript:S2933 | Member 'clients' is never reassigned; mark it as `readonly`. | 7cd46ba3-e8ca-4529-82bf-583a5a46a039 |
| 1114 | CODE_SMELL | MAJOR | src/main/browser-control.ts:20 | typescript:S2933 | Member 'pending' is never reassigned; mark it as `readonly`. | d05d9b15-16fb-4073-8acc-69d4354fe05b |
| 1115 | CODE_SMELL | MAJOR | src/main/browser-control.ts:22 | typescript:S2933 | Member 'wake' is never reassigned; mark it as `readonly`. | 2e752d07-adcb-4e57-b744-909cb4f51797 |
| 1116 | CODE_SMELL | MAJOR | src/main/browser-control.ts:42 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | e7d1950f-b0a9-44c7-8535-e29ee7218b66 |
| 1117 | CODE_SMELL | MAJOR | src/main/browser-control.ts:60 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | daae96c5-af2d-436a-80aa-097ffe0b230e |
| 1118 | CODE_SMELL | MAJOR | src/main/browser-control.ts:69 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | cbb17192-8848-4b0d-ad62-93b5b78f246a |
| 1119 | CODE_SMELL | CRITICAL | src/main/browser-control.ts:74 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 18 to the 15 allowed. | 27ee5fa7-a98f-4f19-b5ba-816f8e65f776 |
| 1120 | CODE_SMELL | CRITICAL | src/main/diagnostics.ts:300 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 52 to the 15 allowed. | 0b9be774-85b2-4276-a4f7-beaa3865b754 |
| 1121 | CODE_SMELL | MINOR | src/main/diagnostics.ts:422 | typescript:S7778 | Do not call `Array#push()` multiple times. | c9db93fc-6ea8-4a1d-a6ca-33862a06a76a |
| 1122 | CODE_SMELL | MINOR | src/main/mcp/tools-browser.ts:20 | typescript:S1874 | '(params?: unknown): ZodNumber' is deprecated. | 75b6fabe-bc1c-41ae-aefd-56f5f78bd76a |
| 1123 | CODE_SMELL | MINOR | src/main/mcp/tools-browser.ts:20 | typescript:S1874 | '(params?: unknown): ZodNumber' is deprecated. | cfe88d31-9254-4d31-9734-5f8586d0d83f |
| 1124 | CODE_SMELL | MINOR | src/main/mcp/tools-browser.ts:26 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | cae72c9d-e844-4bee-86d1-283249f9169b |
| 1125 | CODE_SMELL | MINOR | src/main/mcp/tools-browser.ts:49 | typescript:S1874 | '(params?: unknown): ZodNumber' is deprecated. | 42597f3a-aa31-4886-b528-ac12d34c794e |
| 1126 | CODE_SMELL | MINOR | src/main/mcp/tools-browser.ts:49 | typescript:S1874 | '(params?: unknown): ZodNumber' is deprecated. | d7a0ef1f-0aad-47d2-affc-39de338df7d3 |
| 1127 | CODE_SMELL | MINOR | src/main/mcp/tools-browser.ts:50 | typescript:S1874 | '(params?: unknown): ZodNumber' is deprecated. | 188d2432-4459-4f13-9f7a-39f292abe509 |
| 1128 | CODE_SMELL | MINOR | src/main/mcp/tools-browser.ts:50 | typescript:S1874 | '(params?: unknown): ZodNumber' is deprecated. | ffb55e4e-af14-4a5a-8553-ec4cb05229f9 |
| 1129 | CODE_SMELL | CRITICAL | src/main/plugins/manager.ts:798 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 48 to the 15 allowed. | ea73426e-82e5-49f6-bf88-3fa8292d9fcf |
| 1130 | CODE_SMELL | CRITICAL | src/main/session/input.ts:255 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 18 to the 15 allowed. | 63f60eab-e16e-4d07-b2e0-8fe2650327e4 |
| 1131 | CODE_SMELL | CRITICAL | src/main/session/input.ts:331 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 27 to the 15 allowed. | 3ad3d3bf-f3a3-4d0c-96cf-f210c0c749b8 |
| 1132 | CODE_SMELL | CRITICAL | src/main/session/input.ts:377 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 38 to the 15 allowed. | b40eebb7-5963-4677-935e-82dac0789982 |
| 1133 | CODE_SMELL | MAJOR | src/main/session/input.ts:486 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 8e1f0142-af35-4d3f-8363-27abb85d90bf |
| 1134 | CODE_SMELL | CRITICAL | src/main/session/input.ts:1672 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 40 to the 15 allowed. | 86a688f9-d03d-4fcd-a2ed-d179d12b3a14 |
| 1135 | CODE_SMELL | MAJOR | src/main/session/recorder.ts:1629 | typescript:S107 | Function has too many parameters (9). Maximum allowed is 7. | 4ac6de9d-a508-4a6b-bc7b-84a827faf2a9 |
| 1136 | CODE_SMELL | MAJOR | src/main/session/recorder.ts:1644 | typescript:S107 | Function has too many parameters (9). Maximum allowed is 7. | 377799ad-d7e6-4f93-b7b5-68d4cd5aeb34 |
| 1137 | CODE_SMELL | CRITICAL | src/main/session/recorder.ts:1820 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 31 to the 15 allowed. | 28fa24d0-f59a-455b-8a9a-6b6dfa70ebd6 |
| 1138 | CODE_SMELL | CRITICAL | src/main/session/store.ts:1496 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 29 to the 15 allowed. | 45ecf31e-21eb-43f4-bf66-7300a79f2b81 |
| 1139 | BUG | MAJOR | src/main/skills.ts:40 | typescript:S5850 | Group parts of the regex together to make the intended operator precedence explicit. | 293ded3b-ad75-454e-891c-641cdb800177 |
| 1140 | CODE_SMELL | MINOR | src/main/skills.ts:110 | typescript:S7755 | Prefer `.at(…)` over `[….length - index]`. | a22821b1-7d94-4b05-9700-52c14069eb45 |
| 1141 | CODE_SMELL | CRITICAL | src/main/skills.ts:136 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | 6ffa9b35-ef9f-4395-bcb3-92e41b700a0d |
| 1142 | CODE_SMELL | MAJOR | src/main/skills.ts:489 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | f78838d1-bbe2-4978-893e-e45b9d20f826 |
| 1143 | CODE_SMELL | MINOR | src/renderer/chat.ts:2826 | typescript:S4325 | This assertion is unnecessary since it does not change the type of the expression. | a37a6e73-61c0-4760-9e33-845ca20f1b1e |
| 1144 | CODE_SMELL | MINOR | src/renderer/chat.ts:3425 | typescript:S7778 | Do not call `Array#push()` multiple times. | 52556d71-0ac3-45d8-b098-12513a9e5886 |
| 1145 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:3613 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 18 to the 15 allowed. | e120c9de-9273-491e-8ed5-315b35e4e3dc |
| 1146 | CODE_SMELL | MAJOR | src/renderer/chat.ts:5275 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 520ca628-4db7-40cc-874b-771313590736 |
| 1147 | CODE_SMELL | MINOR | src/renderer/chat.ts:5277 | typescript:S6606 | Prefer using nullish coalescing operator (`??=`) instead of an assignment expression, as it is simpler to read. | 6401cb8d-f670-4beb-bcdb-8bd045e16f5e |
| 1148 | CODE_SMELL | MAJOR | src/renderer/chat.ts:5335 | typescript:S4144 | Update this function so that its implementation is not identical to the one on line 5291. | 95065d81-489e-4a60-b3f7-d2f62a5ef899 |
| 1149 | CODE_SMELL | MINOR | src/renderer/chat.ts:6046 | typescript:S7765 | Use `.includes()` instead of `.some()` when checking value existence. | 58a6d69b-4feb-4ecb-8a4a-79d34644bb1e |
| 1150 | CODE_SMELL | MINOR | src/renderer/chat.ts:6050 | typescript:S7765 | Use `.includes()` instead of `.some()` when checking value existence. | 79f50466-b0a7-4008-8f61-edb7a846cc75 |
| 1151 | CODE_SMELL | MINOR | src/renderer/chat.ts:6055 | typescript:S7764 | Prefer `globalThis` over `window`. | 27619c02-1a43-4302-81e8-ecd419cff74e |
| 1152 | CODE_SMELL | MINOR | src/renderer/chat.ts:6063 | typescript:S7764 | Prefer `globalThis` over `window`. | 63452663-d682-43ba-8946-172e50f8889d |
| 1153 | CODE_SMELL | MINOR | src/renderer/chat.ts:6067 | typescript:S7764 | Prefer `globalThis` over `window`. | 1fe6ab67-c207-442b-8528-ca34023bc657 |
| 1154 | CODE_SMELL | MINOR | src/renderer/image-storage.ts:45 | typescript:S7764 | Prefer `globalThis` over `window`. | dbd24a0b-38b0-4286-a35d-9dd8d4b7d325 |
| 1155 | CODE_SMELL | MINOR | src/renderer/setup-guide.ts:166 | typescript:S7764 | Prefer `globalThis` over `window`. | b04e9534-d411-4ad2-8f15-30d661b4e9f3 |
| 1156 | CODE_SMELL | MINOR | src/renderer/tool-approval.ts:29 | typescript:S7764 | Prefer `globalThis` over `window`. | 6bf3b99d-70db-4135-9154-006e3cc3c517 |
| 1157 | CODE_SMELL | MINOR | src/renderer/tool-approval.ts:33 | typescript:S7764 | Prefer `globalThis` over `window`. | 18426009-b130-400f-b97f-3a717740c5c0 |
| 1158 | CODE_SMELL | CRITICAL | extension/content.js:1492 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | c079db9b-d661-4fae-949e-fd7a289e25f6 |
| 1159 | CODE_SMELL | CRITICAL | extension/content.js:3198 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | dd815589-5563-4246-81ac-1cd6241059af |
| 1160 | CODE_SMELL | MINOR | extension/usage.js:343 | javascript:S7764 | Prefer `globalThis` over `window`. | abc282b5-808c-4905-b1ea-e9a681da30df |
| 1161 | CODE_SMELL | MINOR | extension/usage.js:359 | javascript:S7764 | Prefer `globalThis` over `window`. | a38ac87b-6144-4171-aa1a-c35f367ccc38 |
| 1162 | CODE_SMELL | MINOR | extension/usage.js:467 | javascript:S7764 | Prefer `globalThis` over `window`. | e5084cac-64cb-44d0-a7d4-9f1c892a5b3b |
| 1163 | CODE_SMELL | MAJOR | src/main/bridge.ts:1592 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | e701c3d5-38a8-4ad1-908a-238ad4258f78 |
| 1164 | CODE_SMELL | CRITICAL | src/main/goal.ts:2929 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 45 to the 15 allowed. | 87c18fcf-7ffd-4cc8-b353-df3ef31d0240 |
| 1165 | CODE_SMELL | CRITICAL | src/main/mcp/kernel.ts:285 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | 04035c66-dde5-4f7c-9d13-95e82fb5648f |
| 1166 | CODE_SMELL | MINOR | scripts/verify-goal-status-layout.cjs:13 | javascript:S6594 | Use the "RegExp.exec()" method instead. | 9106615e-35f4-419e-998f-dbd5fc6a4c66 |
| 1167 | CODE_SMELL | MAJOR | src/main/bridge.ts:3936 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 92b553ff-1d8e-4fe4-b389-4c9d33d94956 |
| 1168 | CODE_SMELL | MAJOR | src/main/bridge.ts:7207 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | a73ff42e-a44f-4c18-befc-9ddcdee64daf |
| 1169 | CODE_SMELL | MAJOR | src/main/bridge.ts:7216 | typescript:S4043 | Move this array "sort" operation to a separate statement or replace it with "toSorted". | 241e5b06-b4d2-4443-852f-f5323b0ff56f |
| 1170 | CODE_SMELL | CRITICAL | src/main/bridge.ts:9128 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 37 to the 15 allowed. | a65f0368-34cb-422b-b071-87cde6b55537 |
| 1171 | CODE_SMELL | MINOR | src/main/connection.ts:85 | typescript:S4323 | Replace this union type with a type alias. | fef9e4fd-61be-4567-8f57-83398d946fe5 |
| 1172 | CODE_SMELL | MAJOR | src/main/goal.ts:1519 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 6738ec23-4904-4303-b772-909491c64dd2 |
| 1173 | CODE_SMELL | CRITICAL | src/main/goal.ts:1730 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 40 to the 15 allowed. | 1455c57e-6789-4e57-b768-9b17bf20061a |
| 1174 | CODE_SMELL | CRITICAL | src/main/session/store.ts:1670 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 39 to the 15 allowed. | ddd23f23-c205-4973-ba57-bd02c526fa38 |
| 1175 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:3117 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | 3c795786-f053-4fdc-81f2-62e8cc7b6d7b |
| 1176 | CODE_SMELL | MINOR | src/renderer/chat.ts:4343 | typescript:S7764 | Prefer `globalThis` over `window`. | 5ba59c21-f24a-43b4-8f8e-705d0629e961 |
| 1177 | CODE_SMELL | MINOR | src/renderer/sidebar-order.ts:10 | typescript:S7764 | Prefer `globalThis` over `window`. | fc973f59-1ff0-4d8c-b5c4-0a82df4a18a0 |
| 1178 | CODE_SMELL | MINOR | src/renderer/sidebar-order.ts:49 | typescript:S7764 | Prefer `globalThis` over `window`. | 1e6d55a5-7ea8-4617-bbd5-b77229ae053a |
| 1179 | CODE_SMELL | MINOR | src/renderer/sidebar-order.ts:74 | typescript:S7764 | Prefer `globalThis` over `window`. | edb6bc30-54c2-4c3c-ab26-852811b6ef50 |
| 1180 | CODE_SMELL | MAJOR | src/renderer/sidebar-order.ts:86 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 304f61fc-590d-47fd-ad74-d5653d91ee45 |
| 1181 | CODE_SMELL | MINOR | src/renderer/sidebar-order.ts:108 | typescript:S7764 | Prefer `globalThis` over `window`. | 04676088-ac64-4dba-8337-bbff6551db94 |
| 1182 | CODE_SMELL | MINOR | src/renderer/sidebar-order.ts:109 | typescript:S7764 | Prefer `globalThis` over `window`. | 19ec1fb6-8326-4e46-a4d4-0a40b5ce24d9 |
| 1183 | CODE_SMELL | MINOR | src/renderer/sidebar-order.ts:112 | typescript:S7764 | Prefer `globalThis` over `window`. | 0e6f2d6f-4c56-4009-9171-5ae081c846cc |
| 1184 | CODE_SMELL | CRITICAL | src/shared/session.ts:1169 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 23 to the 15 allowed. | ffc20e5e-e7db-441e-bc12-6e74977f5c8a |
| 1185 | CODE_SMELL | MAJOR | src/main/bridge.ts:9080 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | e51ef1b0-444c-4663-a50d-4bc2bf38d178 |
| 1186 | CODE_SMELL | MAJOR | src/main/bridge.ts:9147 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 85787477-b438-4a05-ba22-7505379851c0 |
| 1187 | CODE_SMELL | MAJOR | src/main/bridge.ts:9385 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 890a47a7-2590-4777-8e00-0863e8e0f812 |
| 1188 | CODE_SMELL | CRITICAL | src/main/goal.ts:1431 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 39 to the 15 allowed. | 640715e8-07a9-4a6f-8dd4-67c44cc98df2 |
| 1189 | CODE_SMELL | CRITICAL | src/main/goal.ts:1914 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 34 to the 15 allowed. | 5649ee2b-1976-4cd2-adeb-3c2cee22b8f7 |
| 1190 | CODE_SMELL | CRITICAL | src/main/goal.ts:2039 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 26 to the 15 allowed. | 918dd4fe-9eeb-4bf3-974b-d34b51c10807 |
| 1191 | CODE_SMELL | CRITICAL | extension/content.js:4022 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 23 to the 15 allowed. | 8b9fdbf4-efd6-4c52-b99b-7b484f43d18f |
| 1192 | CODE_SMELL | MINOR | extension/content.js:4024 | javascript:S7764 | Prefer `globalThis` over `window`. | 5edce92d-0e0c-4960-9dae-fd54ab92471a |
| 1193 | CODE_SMELL | MINOR | extension/fiber.js:2678 | javascript:S7764 | Prefer `globalThis` over `window`. | 87bdc5b8-8c54-41f8-b290-c9a331b57ed7 |
| 1194 | CODE_SMELL | MINOR | src/main/ipc.ts:1355 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | d49ffcf4-f4dc-4efb-bf41-f0f4f641ba72 |
| 1195 | CODE_SMELL | MINOR | src/main/session/input.ts:82 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | 9cf5639b-b085-4820-b935-6477ef99080f |
| 1196 | CODE_SMELL | MAJOR | src/main/session/input.ts:1402 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | fe804255-d163-4c51-9709-44b4619c512d |
| 1197 | CODE_SMELL | MAJOR | src/main/session/input.ts:1552 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | d6511b2b-f521-4309-aca3-809a81f1948e |
| 1198 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:246 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | f782daaa-55bf-4554-827e-e468dd560441 |
| 1199 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2817 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 979aa074-6a38-46b5-b5aa-034b1e9f7373 |
| 1200 | CODE_SMELL | MAJOR | src/main/bridge.ts:6723 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 7fdb36b7-0d02-4b5f-9746-ae862c45cdb9 |
| 1201 | CODE_SMELL | MAJOR | src/main/bridge.ts:8621 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | b09d2e43-fddd-4bfa-966f-c8af81bebd49 |
| 1202 | CODE_SMELL | MAJOR | src/main/goal.ts:743 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 13b4863e-400f-46f3-9445-180b5881b227 |
| 1203 | CODE_SMELL | CRITICAL | src/main/mcp/code-mode-runtime.ts:44 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 26 to the 15 allowed. | deeb187b-c19c-4135-b0ef-2f7ce931b270 |
| 1204 | CODE_SMELL | CRITICAL | src/main/mcp/code-mode-runtime.ts:78 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 31 to the 15 allowed. | db87a72b-665f-4e49-ada2-a6c54f08069e |
| 1205 | CODE_SMELL | CRITICAL | src/main/mcp/tools-core.ts:334 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 36 to the 15 allowed. | 079f95c0-c982-4c47-8e49-7fb24230c231 |
| 1206 | CODE_SMELL | MAJOR | src/main/session/input.ts:1240 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 342a56ab-5666-44cb-b132-1dfb3bc97bef |
| 1207 | CODE_SMELL | CRITICAL | src/main/session/recorder.ts:530 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 37 to the 15 allowed. | b2025b58-0149-42a7-91af-2845c6883b80 |
| 1208 | CODE_SMELL | MAJOR | src/main/session/usage.ts:36 | typescript:S1121 | Extract the assignment of "overviewFlight" from this expression. | 42f6a5b0-6f4f-474a-8e9b-22f2ed48eca8 |
| 1209 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:1667 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 62 to the 15 allowed. | 6ed0a051-0ac5-468f-8460-b83dbed45b4f |
| 1210 | CODE_SMELL | MINOR | extension/content.js:12349 | javascript:S7750 | Prefer `.findLast(…)` over `.filter(…).at(-1)`. | 8c3a8a74-34c1-44c4-b510-b4967a0a5cd7 |
| 1211 | CODE_SMELL | MAJOR | src/main/bridge.ts:6749 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 8ec5be0d-9f59-41ca-b580-98d050f506e3 |
| 1212 | CODE_SMELL | CRITICAL | src/main/fsops.ts:242 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 27 to the 15 allowed. | 5f88df1b-eab9-4d58-bcfe-a09f3bd46ab7 |
| 1213 | CODE_SMELL | CRITICAL | src/main/goal.ts:1053 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 23 to the 15 allowed. | f5e616f3-e054-49c4-ab6c-d449a0247b01 |
| 1214 | CODE_SMELL | MINOR | src/main/ipc.ts:1352 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | 67dbcbc8-332d-4bd3-b474-c0b936a7fad9 |
| 1215 | CODE_SMELL | MAJOR | src/main/session/input.ts:1397 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 38470d79-fabf-4de0-997c-fe2ae90d1493 |
| 1216 | CODE_SMELL | MINOR | extension/content.js:12102 | javascript:S7764 | Prefer `globalThis` over `window`. | edda06c7-e815-497a-9814-4d3deeae79dd |
| 1217 | CODE_SMELL | MAJOR | extension/usage.js:213 | javascript:S1121 | Extract the assignment of "match" from this expression. | 4e4f7d0b-7a96-492d-be92-3a7f44c3efe9 |
| 1218 | CODE_SMELL | MINOR | extension/usage.js:420 | javascript:S7764 | Prefer `globalThis` over `window`. | 5db934b4-2f8b-4d64-8620-0ca805b367c3 |
| 1219 | CODE_SMELL | CRITICAL | extension/usage.js:443 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 618adc84-a773-4cf2-b04c-12ca747ce3a4 |
| 1220 | CODE_SMELL | MAJOR | extension/usage.js:445 | javascript:S1854 | Remove this useless assignment to variable "method". | babf31e4-bf00-4f91-9608-4c84c698f15b |
| 1221 | CODE_SMELL | CRITICAL | extension/usage.js:451 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 411a501e-d73d-4382-920d-d08ac20694ba |
| 1222 | CODE_SMELL | MINOR | extension/usage.js:461 | javascript:S7764 | Prefer `globalThis` over `window`. | b5652395-f1d1-4db2-b4f0-2239d83aa108 |
| 1223 | CODE_SMELL | MINOR | extension/usage.js:466 | javascript:S7764 | Prefer `globalThis` over `window`. | 439dc1a2-a97f-4f41-a3cc-d99cc093bd53 |
| 1224 | CODE_SMELL | CRITICAL | extension/background.js:740 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | bf87ff1d-0ba9-4002-aac1-1b41c7912f5e |
| 1225 | CODE_SMELL | CRITICAL | extension/background.js:911 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | e5ee3e08-c74b-4d8f-ade0-fbd183d7e83f |
| 1226 | CODE_SMELL | CRITICAL | extension/background.js:2156 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 24 to the 15 allowed. | 9c5fb683-ea75-4693-94a6-1f050d268fca |
| 1227 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:140 | javascript:S7761 | Prefer `.dataset` over `removeAttribute(…)`. | 30a3d80d-0fca-4d31-9ce3-1c48533f453f |
| 1228 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:144 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | 0647b066-7eee-473b-8e6c-36cddcef49ad |
| 1229 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:150 | javascript:S7761 | Prefer `.dataset` over `hasAttribute(…)`. | 04449163-aa03-4f21-9895-d452fa2578c3 |
| 1230 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:150 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | bb92d72c-fdd7-495c-9872-b7f30b1e8bb4 |
| 1231 | BUG | MAJOR | extension/chatgpt-dom.js:2314 | javascript:S3403 | Remove this "===" check; it will always be false. Did you mean to use "=="? | 704708e5-f74d-48bc-8d47-c9bf2ab3ebc6 |
| 1232 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:2341 | javascript:S1874 | The signature '(commandId: string, showUI?: boolean \| undefined, value?: string \| undefined): boolean' of 'document.execCommand' is deprecated. | cde84116-8a4c-4d55-8027-74c72c7f227d |
| 1233 | BUG | MAJOR | extension/chatgpt-dom.js:2343 | javascript:S3403 | Remove this "===" check; it will always be false. Did you mean to use "=="? | ec16e71e-556b-417d-8ab3-f65397ccade9 |
| 1234 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2837 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | df3b9ba2-b09c-46fc-ad8c-32e2da234d17 |
| 1235 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2966 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 8873a3e9-f6c1-4cd0-8f89-a2d9574d6ec5 |
| 1236 | CODE_SMELL | MAJOR | extension/content.js:2332 | javascript:S3800 | Refactor this function to always return the same type. | 6292f16e-dfb0-4ff8-8d1e-e00ee7dfc57d |
| 1237 | CODE_SMELL | MINOR | extension/content.js:9255 | javascript:S7750 | Prefer `.findLast(…)` over `.filter(…).at(-1)`. | c6f5b215-b6f0-49d4-aef8-86b2de83146c |
| 1238 | CODE_SMELL | MINOR | extension/content.js:12344 | javascript:S7750 | Prefer `.findLast(…)` over `.filter(…).at(-1)`. | 2356d8b3-cba2-4955-b2af-3c53c6dc05ed |
| 1239 | CODE_SMELL | MINOR | extension/content.js:12350 | javascript:S7750 | Prefer `.findLast(…)` over `.filter(…).at(-1)`. | 213e0b79-9ff7-4dcb-a4dd-08a47a2d0bcd |
| 1240 | CODE_SMELL | MAJOR | extension/fiber.js:2389 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | c0e20867-5d3a-4712-bc2f-fd01b95f2d9a |
| 1241 | CODE_SMELL | MAJOR | scripts/benchmark-mcp-latency.mjs:50 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 44ff7a38-b8b9-4138-8a5f-74df0ebb2638 |
| 1242 | CODE_SMELL | CRITICAL | scripts/benchmark-mcp-latency.mjs:133 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 21 to the 15 allowed. | 228ede80-7abe-4672-bda7-bcb9e05c2f6a |
| 1243 | CODE_SMELL | MAJOR | scripts/benchmark-mcp-latency.mjs:178 | javascript:S7785 | Prefer top-level await over using a promise chain. | a0505b12-8f73-418d-97f7-98b580aed062 |
| 1244 | CODE_SMELL | MINOR | scripts/verify-windows-capture-border.mjs:68 | javascript:S6594 | Use the "RegExp.exec()" method instead. | bc15b7f6-af10-4e1b-9b1f-e34e8f71da90 |
| 1245 | CODE_SMELL | CRITICAL | src/main/bridge.ts:10386 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 34 to the 15 allowed. | 039e5f13-14b0-4c18-a4b3-150cecdca82f |
| 1246 | CODE_SMELL | CRITICAL | src/main/codex/unified-exec.ts:1099 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | a456dbc7-9651-433c-9371-1360381bbaa5 |
| 1247 | CODE_SMELL | CRITICAL | src/main/codex/unified-exec.ts:1200 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 32 to the 15 allowed. | cf3c7a77-1065-414c-ad1e-2c313eb41f88 |
| 1248 | CODE_SMELL | MAJOR | src/main/computer/index.ts:313 | typescript:S1121 | Extract the assignment of "runtime.scriptCleanup" from this expression. | 186c43c8-c03a-4af2-8226-90b99fc44efd |
| 1249 | CODE_SMELL | CRITICAL | src/main/computer/index.ts:1318 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 22 to the 15 allowed. | e169fc90-c2a8-42e4-9d63-f8cdfefd4ec7 |
| 1250 | CODE_SMELL | CRITICAL | src/main/computer/index.ts:1452 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | 0c2c0439-2a6b-4a58-ad57-71ef51c38d92 |
| 1251 | CODE_SMELL | CRITICAL | src/main/computer/index.ts:1576 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 92 to the 15 allowed. | 7e36e0ee-937c-4c90-8d67-71e138cf366e |
| 1252 | CODE_SMELL | CRITICAL | src/main/computer/index.ts:1688 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | 04be982f-428c-4ee6-97c5-88635c7b9f17 |
| 1253 | CODE_SMELL | CRITICAL | src/main/computer/index.ts:1774 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 36 to the 15 allowed. | 9b9e4c54-2f20-4188-8cf4-fcc5db38f65f |
| 1254 | CODE_SMELL | MINOR | src/main/computer/windows-api.ts:7 | typescript:S1874 | '(params?: unknown): ZodNumber' is deprecated. | 0e419d1f-430e-4566-a831-7c1647404246 |
| 1255 | CODE_SMELL | MINOR | src/main/computer/windows-api.ts:7 | typescript:S1874 | '(params?: unknown): ZodNumber' is deprecated. | bfe762c6-ebcd-46bf-be7f-ad64189fce21 |
| 1256 | CODE_SMELL | MINOR | src/main/computer/windows-api.ts:8 | typescript:S1874 | '(params?: unknown): ZodNumber' is deprecated. | bafd5229-cec5-4a6e-af46-92226dcd6a3d |
| 1257 | CODE_SMELL | MINOR | src/main/computer/windows-api.ts:25 | typescript:S7763 | Use `export…from` to re-export `WINDOWS_API_METHODS`. | 1bffddcf-a359-4f09-af63-860dc528dc46 |
| 1258 | CODE_SMELL | MINOR | src/main/computer/windows-api.ts:65 | typescript:S7737 | Do not use an object literal as default for parameter `backend`. | 6f49da4a-bddc-492a-9be1-87671e27c3e2 |
| 1259 | CODE_SMELL | MAJOR | src/main/computer/windows-api.ts:75 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 298f1d31-02a6-43c1-8ccc-7cc6c182c442 |
| 1260 | CODE_SMELL | MAJOR | src/main/computer/windows-api.ts:86 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | b5809cad-89a6-45a1-92ba-732474f6cbed |
| 1261 | CODE_SMELL | MINOR | src/main/ipc.ts:856 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | d0503cf4-34bc-438a-a3f2-90f862097434 |
| 1262 | CODE_SMELL | MINOR | src/main/mcp/instructions.ts:225 | typescript:S7778 | Do not call `Array#push()` multiple times. | c4f7dd7a-ea84-4d57-8c01-3b6b9f805bf2 |
| 1263 | CODE_SMELL | MAJOR | src/main/mcp/tool-declarations.ts:24 | typescript:S1121 | Extract the assignment of "converted" from this expression. | 7db3aec0-de2a-4129-8100-8d7b885b0a3f |
| 1264 | CODE_SMELL | MAJOR | src/main/mcp/tool-declarations.ts:25 | typescript:S1121 | Extract the assignment of "converted[io]" from this expression. | 74558dc6-618a-4650-93f5-8d91ff1d8a94 |
| 1265 | CODE_SMELL | MAJOR | src/main/mcp/tool-declarations.ts:49 | typescript:S1121 | Extract the assignment of "adapter" from this expression. | 52087b4d-ffdf-4da2-98cc-a2f90d1e0ba8 |
| 1266 | CODE_SMELL | CRITICAL | src/main/mcp/tools-desktop-macos.ts:242 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 43 to the 15 allowed. | 599e4fa9-ff89-495d-927a-844621661feb |
| 1267 | CODE_SMELL | CRITICAL | src/main/mcp/tools-desktop-macos.ts:414 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 25 to the 15 allowed. | a93f8997-2b4a-44fc-b93e-577bef42ce20 |
| 1268 | CODE_SMELL | CRITICAL | src/main/mcp/tools-desktop-macos.ts:462 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 32 to the 15 allowed. | 0b4e911b-b634-4055-88b6-bb2982d08d1e |
| 1269 | CODE_SMELL | MINOR | src/main/mcp/tools-desktop-windows.ts:57 | typescript:S6606 | Prefer using nullish coalescing operator (`??=`) instead of an assignment expression, as it is simpler to read. | 506ed76d-94ea-48e6-958b-91c0d90fc538 |
| 1270 | CODE_SMELL | MAJOR | src/main/plugins/manager.ts:117 | typescript:S1121 | Extract the assignment of "this.exposureCache" from this expression. | 49e64d43-4777-47d1-aa11-d0b283921578 |
| 1271 | CODE_SMELL | CRITICAL | src/main/plugins/manager.ts:614 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 68 to the 15 allowed. | a0ff152e-62b4-4d3c-ac10-f13775dc4e60 |
| 1272 | CODE_SMELL | MINOR | src/main/projects.ts:75 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | 86e76c87-7078-464d-86d0-8464c74c9f96 |
| 1273 | CODE_SMELL | MAJOR | src/main/session/input.ts:233 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | b14cc2e2-2dd3-4d64-8dfd-d390b83f7a25 |
| 1274 | CODE_SMELL | MAJOR | src/main/session/input.ts:1562 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 1f1a92ec-ca77-4c46-b6fd-7a1e11261a43 |
| 1275 | CODE_SMELL | MAJOR | src/main/session/prompt.ts:54 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | c86bd578-0bd3-463a-b7ed-489f6b83f135 |
| 1276 | CODE_SMELL | MAJOR | src/main/session/recorder.ts:429 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 3981523c-16ef-4a64-85d6-69039c563d52 |
| 1277 | CODE_SMELL | MAJOR | src/main/session/recorder.ts:547 | typescript:S4043 | Move this array "sort" operation to a separate statement or replace it with "toSorted". | 284ce4a7-8c54-4ef2-b61d-7e7bbf38fa3b |
| 1278 | CODE_SMELL | MINOR | src/main/session/store.ts:1234 | typescript:S7755 | Prefer `.at(…)` over `[….length - index]`. | f188989f-1479-4a96-b5b5-e5a76f239f9e |
| 1279 | CODE_SMELL | CRITICAL | src/main/session/store.ts:2285 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | c3d17d0d-1d7c-46bc-9c05-fb1c5b3cf349 |
| 1280 | CODE_SMELL | CRITICAL | src/renderer/agent-plan.ts:6 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 23 to the 15 allowed. | 8cc9e0bb-359f-4f5e-971b-bbf6594c6242 |
| 1281 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:3206 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 56 to the 15 allowed. | ff326d54-d82e-4d43-8ca2-08f8825e9d72 |
| 1282 | CODE_SMELL | MAJOR | src/renderer/i18n.ts:86 | typescript:S1121 | Extract the assignment of "properties" from this expression. | a2cabb78-f499-421c-bddb-2693a9ca49c3 |
| 1283 | CODE_SMELL | MINOR | src/renderer/i18n.ts:100 | typescript:S7764 | Prefer `globalThis` over `window`. | 04f8de5d-4441-4a76-8497-728b3533c403 |
| 1284 | CODE_SMELL | MAJOR | src/renderer/index.html:488 | Web:S6819 | Use &lt;address&gt; or &lt;details&gt; or &lt;fieldset&gt; or &lt;optgroup&gt; instead of the group role to ensure accessibility across all devices. | 99a65ff5-f79a-4236-9e18-d79ecccdcba8 |
| 1285 | CODE_SMELL | CRITICAL | src/renderer/main.ts:1062 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 26 to the 15 allowed. | 5302531f-4e3a-4594-b3cc-1376b6538a1b |
| 1286 | CODE_SMELL | MINOR | src/renderer/main.ts:1905 | typescript:S7778 | Do not call `Array#push()` multiple times. | 20df55a8-bf91-4363-9bf7-fe977192af82 |
| 1287 | CODE_SMELL | MINOR | src/renderer/plugins.ts:104 | typescript:S7764 | Prefer `globalThis` over `window`. | e2671d9c-0ed7-429c-b776-1ca89324ac8e |
| 1288 | CODE_SMELL | MINOR | src/renderer/plugins.ts:109 | typescript:S7764 | Prefer `globalThis` over `window`. | 3715c751-9c60-4ef0-b93f-ea36685c272e |
| 1289 | CODE_SMELL | CRITICAL | src/renderer/plugins.ts:139 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | e63d21b5-a4f6-4147-84fb-0abd802e1f8b |
| 1290 | CODE_SMELL | MINOR | src/renderer/plugins.ts:181 | typescript:S7764 | Prefer `globalThis` over `window`. | 647a866d-a32d-4499-a9e2-e80a025c5b0b |
| 1291 | CODE_SMELL | MINOR | src/renderer/plugins.ts:181 | typescript:S7764 | Prefer `globalThis` over `window`. | 8ca46093-aa68-4986-844e-6c756059539a |
| 1292 | CODE_SMELL | MINOR | src/renderer/plugins.ts:181 | typescript:S7764 | Prefer `globalThis` over `window`. | be0ef022-83ef-4dc9-8802-7a9cc4218be8 |
| 1293 | CODE_SMELL | MINOR | src/renderer/plugins.ts:221 | typescript:S7764 | Prefer `globalThis` over `window`. | 0c13f036-733f-4b23-8269-cf46c8089455 |
| 1294 | CODE_SMELL | MINOR | src/renderer/plugins.ts:222 | typescript:S7764 | Prefer `globalThis` over `window`. | 16042ca4-59d0-4866-bc0e-5b97c228284f |
| 1295 | CODE_SMELL | MINOR | src/renderer/plugins.ts:253 | typescript:S7764 | Prefer `globalThis` over `window`. | ab502fde-b96d-488e-84e6-810877c6714b |
| 1296 | CODE_SMELL | MINOR | src/renderer/plugins.ts:280 | typescript:S7764 | Prefer `globalThis` over `window`. | 8cfed43a-fd4d-4f53-8b8a-fe673ea458dc |
| 1297 | CODE_SMELL | MINOR | src/shared/agent-plan.ts:16 | typescript:S1874 | '(params?: unknown): ZodNumber' is deprecated. | 00e380fb-6ca2-4042-ab52-b8542fc9885c |
| 1298 | CODE_SMELL | MAJOR | src/main/bridge.ts:3503 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | ae02af18-4f0f-4c80-88e6-88897a51202e |
| 1299 | CODE_SMELL | MINOR | extension/background.js:317 | javascript:S7744 | The empty object is useless. | e372b465-57bd-4e7a-bc63-d39265299e16 |
| 1300 | CODE_SMELL | MINOR | extension/background.js:317 | javascript:S7744 | The empty object is useless. | f6aea2bb-2887-4f2f-8f85-4699da8d42db |
| 1301 | CODE_SMELL | CRITICAL | extension/background.js:1341 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 31 to the 15 allowed. | 751e9ba4-7c0a-4ce3-bca6-ba386b7d78f8 |
| 1302 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2781 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 34eab8f3-410a-4180-b4b3-93659d5994d6 |
| 1303 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2791 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | a97775d4-a816-45e5-90cd-944ab02a268e |
| 1304 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2977 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 8cc39f27-2fab-424d-aa18-3c681411d989 |
| 1305 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2978 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | a9501d88-aa1c-4f7f-9860-30359ee96bea |
| 1306 | CODE_SMELL | MAJOR | scripts/generate-third-party-notices.mjs:45 | javascript:S7721 | Move async function 'walk' to the outer scope. | 95aa622b-2d76-47af-82d6-b3704062d968 |
| 1307 | CODE_SMELL | MAJOR | src/main/browser.ts:57 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | dfa22536-cfc3-4b49-b779-2ceacfedbb74 |
| 1308 | CODE_SMELL | MINOR | src/main/chat-models.ts:47 | typescript:S1874 | '(params?: unknown): ZodNumber' is deprecated. | 5bf630dd-355c-4eed-847d-46789a9e0333 |
| 1309 | CODE_SMELL | MAJOR | src/main/mcp/kernel.ts:636 | typescript:S107 | Async function 'dispatch' has too many parameters (8). Maximum allowed is 7. | fcf9730a-9d82-4675-90bb-c37d98c9856a |
| 1310 | CODE_SMELL | CRITICAL | src/main/plugins/exposure.ts:17 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | 13acfdc0-48cb-4002-ad21-2066d5db0559 |
| 1311 | CODE_SMELL | MAJOR | src/main/plugins/exposure.ts:26 | typescript:S1121 | Extract the assignment of "row" from this expression. | 73ada145-8cae-47a4-a526-6b465e8d420a |
| 1312 | CODE_SMELL | CRITICAL | src/main/plugins/installer.ts:56 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 31 to the 15 allowed. | 81fda8d8-c263-47c0-beb6-782b24f2b452 |
| 1313 | CODE_SMELL | MAJOR | src/main/plugins/installer.ts:113 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | bb4c2334-afb9-4b69-b221-1ba848f86dc8 |
| 1314 | CODE_SMELL | CRITICAL | src/main/plugins/installer.ts:181 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 42 to the 15 allowed. | e0c6649d-42f2-42d6-bae8-ab1cbafcd63d |
| 1315 | CODE_SMELL | MAJOR | src/main/plugins/manager.ts:63 | typescript:S2933 | Member 'openAuthorization: (url: URL) =&gt; Promise&lt;void&gt;' is never reassigned; mark it as `readonly`. | 26adef34-bdb8-4b44-97dd-f371db658737 |
| 1316 | CODE_SMELL | CRITICAL | src/main/plugins/manager.ts:64 | typescript:S7059 | Refactor this asynchronous operation outside of the constructor. | e1048848-a746-43d9-a583-f7889d2ac188 |
| 1317 | CODE_SMELL | MAJOR | src/main/plugins/manager.ts:68 | typescript:S2933 | Member 'live' is never reassigned; mark it as `readonly`. | f41dbf00-ea77-4deb-b5dd-ac7abfec7c25 |
| 1318 | CODE_SMELL | MAJOR | src/main/plugins/manager.ts:69 | typescript:S2933 | Member 'listeners' is never reassigned; mark it as `readonly`. | bd3b2f17-218d-49b6-a771-4e5dfe3ea497 |
| 1319 | CODE_SMELL | MAJOR | src/main/plugins/manager.ts:70 | typescript:S2933 | Member 'queues' is never reassigned; mark it as `readonly`. | a9f3091c-999c-4ffc-8d7e-878c4c07e0ac |
| 1320 | CODE_SMELL | MAJOR | src/main/plugins/manager.ts:71 | typescript:S2933 | Member 'starting' is never reassigned; mark it as `readonly`. | 58b006b4-3ee7-4d6f-af55-65f3d7e8d452 |
| 1321 | CODE_SMELL | MAJOR | src/main/plugins/manager.ts:72 | typescript:S2933 | Member 'secretValues' is never reassigned; mark it as `readonly`. | cb8b844b-f46a-421f-b0c6-07f579874da1 |
| 1322 | CODE_SMELL | MAJOR | src/main/plugins/manager.ts:76 | typescript:S2933 | Member 'connecting' is never reassigned; mark it as `readonly`. | 62bfb100-333e-40eb-914e-6917ec6de420 |
| 1323 | CODE_SMELL | MAJOR | src/main/plugins/manager.ts:77 | typescript:S2933 | Member 'authenticating' is never reassigned; mark it as `readonly`. | 02d81cae-a428-476e-8cf1-5e63cabc6609 |
| 1324 | CODE_SMELL | CRITICAL | src/main/plugins/manager.ts:273 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | 3fc2e598-e8dc-427c-a55e-4bad1bc44636 |
| 1325 | CODE_SMELL | MINOR | src/main/plugins/manager.ts:599 | typescript:S3626 | Remove this redundant jump. | e469fd4b-f9a6-4261-ac36-f59fe7b34c8b |
| 1326 | CODE_SMELL | MAJOR | src/main/plugins/oauth.ts:34 | typescript:S2933 | Member 'controller' is never reassigned; mark it as `readonly`. | d33925d2-bac5-44c0-8312-2db68c112f46 |
| 1327 | CODE_SMELL | MAJOR | src/main/plugins/oauth.ts:35 | typescript:S2933 | Member 'unlink' is never reassigned; mark it as `readonly`. | ba9767b7-54b0-41be-b8c0-a1a55a85022f |
| 1328 | CODE_SMELL | MAJOR | src/main/plugins/oauth.ts:38 | typescript:S2933 | Member 'id: string' is never reassigned; mark it as `readonly`. | 452472cb-4e5a-4167-9fff-81109c00552c |
| 1329 | CODE_SMELL | MAJOR | src/main/plugins/oauth.ts:38 | typescript:S2933 | Member 'endpoint: URL' is never reassigned; mark it as `readonly`. | 9e126e8f-343e-4517-a5da-9f4f7d574ed6 |
| 1330 | CODE_SMELL | MAJOR | src/main/plugins/oauth.ts:39 | typescript:S2933 | Member 'secret: (value: string) =&gt; void' is never reassigned; mark it as `readonly`. | 0cb5ea51-4fd6-4866-998b-33aac800d206 |
| 1331 | CODE_SMELL | CRITICAL | src/main/plugins/oauth.ts:58 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | 2e769b96-959b-44ad-975c-53208e29e9cd |
| 1332 | CODE_SMELL | MAJOR | src/main/plugins/oauth.ts:119 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 9e247304-59f4-4077-9520-1f590a4d346b |
| 1333 | CODE_SMELL | MINOR | src/renderer/chat-models.ts:461 | typescript:S7764 | Prefer `globalThis` over `window`. | b8dd95ed-dafb-4fc2-91a0-09bc0459a1e0 |
| 1334 | CODE_SMELL | MINOR | src/renderer/chat-models.ts:513 | typescript:S7764 | Prefer `globalThis` over `window`. | 627ebea0-85a9-423c-b50c-48762f59d073 |
| 1335 | CODE_SMELL | MINOR | src/renderer/chat-models.ts:515 | typescript:S7764 | Prefer `globalThis` over `window`. | ee345c45-6f6c-4605-9633-6695bcf2ad7d |
| 1336 | CODE_SMELL | MAJOR | src/renderer/chat.ts:1898 | typescript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | c96b7c0f-a33f-4024-90d6-817f192539ef |
| 1337 | CODE_SMELL | MAJOR | src/renderer/chat.ts:1899 | typescript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 18ec854a-ed85-4876-a4c2-f3a6b4277f9b |
| 1338 | CODE_SMELL | MINOR | src/renderer/chat.ts:1903 | typescript:S6594 | Use the "RegExp.exec()" method instead. | 30772e84-acbb-446d-b604-59588cb9f548 |
| 1339 | CODE_SMELL | MINOR | src/renderer/chat.ts:2166 | typescript:S6594 | Use the "RegExp.exec()" method instead. | b1cba137-2731-4e1b-bf40-1f6ecb872789 |
| 1340 | CODE_SMELL | MINOR | src/renderer/chat.ts:2166 | typescript:S6594 | Use the "RegExp.exec()" method instead. | e840afe1-862f-4e55-abec-e03019812a64 |
| 1341 | CODE_SMELL | MINOR | src/renderer/chat.ts:2168 | typescript:S6594 | Use the "RegExp.exec()" method instead. | d0c3e600-318d-4a64-9319-4321082bf519 |
| 1342 | CODE_SMELL | MINOR | src/renderer/chat.ts:6276 | typescript:S7764 | Prefer `globalThis` over `window`. | 6cd4a2d4-7f83-436b-b94f-06cc20015ff9 |
| 1343 | CODE_SMELL | MAJOR | src/renderer/index.html:42 | Web:S6845 | "tabIndex" should only be declared on interactive elements. | 29312d3e-b40b-4dcf-8cfc-57f46d98b5f6 |
| 1344 | CODE_SMELL | MAJOR | src/renderer/index.html:42 | Web:S6819 | Use &lt;hr&gt; instead of the separator role to ensure accessibility across all devices. | ed525231-7041-4a3a-b31b-113639dac2ee |
| 1345 | CODE_SMELL | MINOR | src/renderer/plugins.ts:49 | typescript:S7764 | Prefer `globalThis` over `window`. | 9c824edd-8d76-41cf-ab08-d6a9821d8c71 |
| 1346 | CODE_SMELL | MINOR | src/renderer/plugins.ts:60 | typescript:S7764 | Prefer `globalThis` over `window`. | ee91aa8a-5027-47d1-bde4-95f1faea8005 |
| 1347 | CODE_SMELL | MINOR | src/renderer/plugins.ts:131 | typescript:S7764 | Prefer `globalThis` over `window`. | 4b7ea1fb-3f6c-44a6-a424-1f0b07a24f5d |
| 1348 | CODE_SMELL | MINOR | src/renderer/plugins.ts:134 | typescript:S7764 | Prefer `globalThis` over `window`. | e4405b44-d1a0-495b-9d21-2a08c03633eb |
| 1349 | CODE_SMELL | MINOR | src/renderer/plugins.ts:230 | typescript:S7764 | Prefer `globalThis` over `window`. | 434d8998-9823-4ee8-85c4-8ffc74e9fef1 |
| 1350 | CODE_SMELL | MINOR | src/renderer/plugins.ts:271 | typescript:S7764 | Prefer `globalThis` over `window`. | a3fcb13e-044b-4744-b331-de30599c2ee0 |
| 1351 | CODE_SMELL | MINOR | src/renderer/plugins.ts:302 | typescript:S7764 | Prefer `globalThis` over `window`. | 02f4ff2e-21e7-4b03-9777-19cf4e60d094 |
| 1352 | CODE_SMELL | MINOR | src/renderer/plugins.ts:344 | typescript:S7764 | Prefer `globalThis` over `window`. | 98728b52-1a1e-4724-85a9-0e02f63d76d2 |
| 1353 | CODE_SMELL | MINOR | src/renderer/plugins.ts:345 | typescript:S7764 | Prefer `globalThis` over `window`. | 9b5a55af-8fd7-4a0c-8134-1a3a3add922e |
| 1354 | CODE_SMELL | MAJOR | src/shared/external-link.ts:3 | typescript:S5869 | Remove duplicates in this character class. | 5de6c208-5e89-4188-8f14-72307015084b |
| 1355 | CODE_SMELL | MAJOR | src/main/browser.ts:64 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | e4fda6be-a9bd-4855-8407-cbafaf1fdb39 |
| 1356 | CODE_SMELL | CRITICAL | src/main/browser.ts:114 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 30 to the 15 allowed. | 81072736-69d9-4baf-b6c4-edf32a236bdc |
| 1357 | CODE_SMELL | MAJOR | src/main/browser.ts:124 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 42905b7e-64ae-4627-9718-e6f499347d49 |
| 1358 | CODE_SMELL | MAJOR | src/main/browser.ts:140 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 07e87a42-94cb-43d0-8f50-3112f954f79e |
| 1359 | CODE_SMELL | MAJOR | src/main/browser.ts:161 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | e71940f2-8ad0-496a-8eab-51a547738b3b |
| 1360 | CODE_SMELL | MAJOR | src/main/browser.ts:260 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 63b28a3a-ccd4-4e71-ad54-4d288ed7a07c |
| 1361 | CODE_SMELL | CRITICAL | extension/background.js:2394 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 0bf69af5-6905-4d25-9d0e-2393f1c7c9f6 |
| 1362 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:1934 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | ae31921c-f1a1-4153-a232-382d6f9e3084 |
| 1363 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:2698 | javascript:S7764 | Prefer `globalThis` over `window`. | 0de6d96d-d670-4431-af82-845bfaa74192 |
| 1364 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2709 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | f8051352-7b1b-4cec-97ba-98fa6e7049e7 |
| 1365 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2775 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | cf1b30b6-725c-4e57-a30a-ad28c973e549 |
| 1366 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:2812 | javascript:S7764 | Prefer `globalThis` over `window`. | 4a568d3e-f7a4-4ea4-a41e-a8963f4816d9 |
| 1367 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2819 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 9c3d04e7-5a7e-4239-8808-10d3aa72b1e5 |
| 1368 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2822 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | bea2ed3c-37a9-4a9b-ac39-fe3ba0df7953 |
| 1369 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2822 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | f09e15e0-1348-4168-ad22-4b8e0a734f02 |
| 1370 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2823 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 419aefb8-a1dc-4e78-8945-1394e44f5b85 |
| 1371 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2823 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 5d6dc1a9-ffe8-4d60-aefc-3e7daaa15b9c |
| 1372 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2869 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | abf022c7-0180-485c-a662-7fe6a21a6b9b |
| 1373 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2880 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | e8b6dcf9-adb8-4267-badc-ea8ca43f1922 |
| 1374 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2967 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 0976045b-8a43-4e0b-bee2-debed531d32f |
| 1375 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2967 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 3ee44927-eab0-4da1-b1c4-eb6a0e07e5a9 |
| 1376 | CODE_SMELL | MAJOR | extension/content.js:823 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 6233915b-ab29-483a-b4f3-2165cd35285d |
| 1377 | CODE_SMELL | CRITICAL | extension/content.js:9140 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 30 to the 15 allowed. | d4782d65-b810-4e88-b2ef-ab6231b26fc4 |
| 1378 | CODE_SMELL | MAJOR | extension/content.js:10031 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 1031de3e-e8bf-492a-9886-3357cb8e4b28 |
| 1379 | CODE_SMELL | MINOR | extension/content.js:11628 | javascript:S7750 | Prefer `.findLast(…)` over `.filter(…).at(-1)`. | fa17294f-13eb-43f4-9ebd-9d24aabdf67b |
| 1380 | CODE_SMELL | CRITICAL | extension/content.js:11632 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 4a9fc8a0-8ee1-4cf4-abfc-67d7c2fd6fab |
| 1381 | CODE_SMELL | MINOR | extension/content.js:11632 | javascript:S7750 | Prefer `.findLast(…)` over `.filter(…).at(-1)`. | cc438a2d-0809-4795-a743-e03e8634f440 |
| 1382 | CODE_SMELL | MINOR | extension/content.js:12578 | javascript:S7758 | Prefer `String#codePointAt()` over `String#charCodeAt()`. | 0e8a2898-e117-4c86-89aa-66d7d798b21a |
| 1383 | CODE_SMELL | MINOR | extension/content.js:12596 | javascript:S7750 | Prefer `.findLast(…)` over `.filter(…).at(-1)`. | 18db6e62-aed7-4e1e-8eaa-680f20eb750d |
| 1384 | CODE_SMELL | MINOR | extension/content.js:12700 | javascript:S7750 | Prefer `.findLast(…)` over `.filter(…).at(-1)`. | af4ecd8d-3833-4ccd-b9e6-c105b34f5161 |
| 1385 | CODE_SMELL | MAJOR | extension/fiber.js:2320 | javascript:S7761 | Prefer `.dataset` over `removeAttribute(…)`. | c628158d-a75d-4876-8d17-5f7e04396812 |
| 1386 | CODE_SMELL | MAJOR | extension/fiber.js:2335 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | f556fced-0ccb-4d5d-9a40-5e52241ff442 |
| 1387 | CODE_SMELL | MAJOR | extension/fiber.js:2663 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | fb2483f2-a0e2-484f-9223-b1a0f4f68cc3 |
| 1388 | CODE_SMELL | MAJOR | extension/fiber.js:2672 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 9533af8b-3779-406e-81ce-fc5049b6436f |
| 1389 | CODE_SMELL | MAJOR | extension/fiber.js:2672 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | bff93c1e-6049-459c-8332-9f6d8d186811 |
| 1390 | CODE_SMELL | MAJOR | src/main/bridge.ts:4265 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | f034be47-296c-40f6-b8bd-b449793e0790 |
| 1391 | CODE_SMELL | MAJOR | src/main/bridge.ts:4268 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 63bf3f0e-e501-49f1-8c9b-ec4466cabfc5 |
| 1392 | CODE_SMELL | MAJOR | src/main/browser.ts:67 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | d7e35f1c-36bb-4224-8424-be6ee51d9460 |
| 1393 | CODE_SMELL | MAJOR | src/main/chat-models.ts:98 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | cf8d8e18-9807-4676-9e81-612618368a9f |
| 1394 | CODE_SMELL | MINOR | src/main/goal.ts:89 | typescript:S3863 | '../shared/types.js' imported multiple times. | 3706eb26-447d-4cfa-b054-1c29bac08f52 |
| 1395 | CODE_SMELL | CRITICAL | src/main/mcp/artifact-fetch.ts:90 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | 85e71bbd-6922-482b-9334-4b65a890f647 |
| 1396 | CODE_SMELL | MINOR | src/main/session/input-attachments.ts:13 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | 3d14c5bc-0277-48ec-9312-baa1aa2b9d53 |
| 1397 | CODE_SMELL | MINOR | src/main/session/input-attachments.ts:21 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | 6e9c6cad-f551-4204-b7f2-7e3dc7732418 |
| 1398 | CODE_SMELL | MINOR | src/main/task-request.ts:31 | typescript:S7737 | Do not use an object literal as default for parameter `limits`. | f160c795-cf83-4849-b05f-21a14d6a464a |
| 1399 | CODE_SMELL | MINOR | src/renderer/chat.ts:5170 | typescript:S7764 | Prefer `globalThis` over `window`. | def36d7b-87ca-47f0-886a-32bb6e88540c |
| 1400 | CODE_SMELL | CRITICAL | extension/background.js:1144 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 21 to the 15 allowed. | 7ab500c4-adfd-4a56-a79c-4eaa885a1b92 |
| 1401 | CODE_SMELL | MINOR | extension/background.js:1503 | javascript:S7776 | `COMMAND_REASONING_EFFORTS` should be a `Set`, and use `COMMAND_REASONING_EFFORTS.has()` to check existence or non-existence. | 260337a8-e580-4afc-913a-70057fb4ffb4 |
| 1402 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:818 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 03907f72-c034-46bc-8094-9a6f4c77f204 |
| 1403 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:819 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 4b0ba00b-945c-44d7-b5c9-f2fdcbd21ed1 |
| 1404 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:1031 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 720962be-c06b-4339-b22e-3ec2911cac65 |
| 1405 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2735 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 67def384-c35f-4cab-9fcb-a252cc2fa155 |
| 1406 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:2759 | javascript:S7758 | Prefer `String#codePointAt()` over `String#charCodeAt()`. | 58b24aff-7460-4ad2-b092-ec21af904559 |
| 1407 | CODE_SMELL | CRITICAL | extension/content.js:1368 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | fb7405c5-3bc4-40cf-8940-ef706e9020bf |
| 1408 | CODE_SMELL | CRITICAL | extension/content.js:8041 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 22 to the 15 allowed. | 7fa949d3-fa83-496d-9562-07dc901db7a2 |
| 1409 | CODE_SMELL | MINOR | extension/content.js:12033 | javascript:S7764 | Prefer `globalThis` over `window`. | d268c237-76f8-444d-bd6b-8e606ffcb032 |
| 1410 | CODE_SMELL | MINOR | extension/content.js:12154 | javascript:S7764 | Prefer `globalThis` over `window`. | 27b90de1-6b01-4a67-b524-6d255f7eaba1 |
| 1411 | CODE_SMELL | MAJOR | extension/content.js:13003 | javascript:S2681 | This line will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | 8541c871-e391-45d6-8a04-c04e3d37d518 |
| 1412 | CODE_SMELL | CRITICAL | extension/usage.js:58 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 39 to the 15 allowed. | 55b89655-6faf-40a4-8676-f5fe68fd0798 |
| 1413 | CODE_SMELL | MINOR | extension/usage.js:69 | javascript:S7773 | Prefer `Number.NaN` over `NaN`. | 6f42cfae-296a-4f26-a932-c4ac1d5e6d2b |
| 1414 | CODE_SMELL | MINOR | extension/usage.js:76 | javascript:S7773 | Prefer `Number.NaN` over `NaN`. | ef67a5f7-aa94-4121-9c64-7edf650f5363 |
| 1415 | CODE_SMELL | MINOR | scripts/verify-composer-context.cjs:15 | javascript:S6594 | Use the "RegExp.exec()" method instead. | 1890c57f-0542-4a4d-b86a-b45ef60de207 |
| 1416 | CODE_SMELL | MAJOR | src/main/agents.ts:1885 | typescript:S1121 | Extract the assignment of "run" from this expression. | c21dc7c4-d848-4723-8677-169d5680434a |
| 1417 | CODE_SMELL | MAJOR | src/main/agents.ts:2291 | typescript:S1121 | Extract the assignment of "run" from this expression. | 4154fb27-dd09-4b77-a267-5b60ac435af0 |
| 1418 | CODE_SMELL | MINOR | src/main/agents.ts:4523 | typescript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | 02d7dd16-44c3-4784-a592-091a6c80454e |
| 1419 | CODE_SMELL | MINOR | src/main/agents.ts:4557 | typescript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | 4373017e-d212-41e8-834b-6414662b179e |
| 1420 | CODE_SMELL | MINOR | src/main/agents.ts:4561 | typescript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | ef5ad905-7395-492b-bbfd-72cdceea6d2f |
| 1421 | CODE_SMELL | MINOR | src/main/agents.ts:5020 | typescript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | 738e0ab7-e374-4ccb-b14c-856d93ed7252 |
| 1422 | CODE_SMELL | MINOR | src/main/bridge.ts:16 | typescript:S3863 | '../shared/session.js' imported multiple times. | e02c473b-f8e6-4016-ada3-cb02320a9952 |
| 1423 | CODE_SMELL | MINOR | src/main/bridge.ts:1952 | typescript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | 9a1180c2-546d-47da-96c3-4b4b608dc613 |
| 1424 | CODE_SMELL | CRITICAL | src/main/bridge.ts:5695 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 25 to the 15 allowed. | 64548ae6-7b3d-45cd-8d40-004121b13146 |
| 1425 | CODE_SMELL | MAJOR | src/main/bridge.ts:6735 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 7dd79f72-505f-4a09-8953-069e8c8ee519 |
| 1426 | CODE_SMELL | MINOR | src/main/browser-preferences.ts:8 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | 6dd36e47-dfc4-4ee0-948d-e29e99556718 |
| 1427 | CODE_SMELL | MAJOR | src/main/browser-preferences.ts:33 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | bced82b0-c2be-4957-84c7-d1c88de0985f |
| 1428 | CODE_SMELL | MINOR | src/main/browser-wake.ts:41 | typescript:S6551 | 'bytes' may use Object's default stringification format ('[object Object]') when stringified. | 01235f8f-56b4-4939-9b10-37a716a40297 |
| 1429 | CODE_SMELL | CRITICAL | src/main/browser-wake.ts:49 | typescript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 577162e2-5489-4d2a-b022-21fba9c42465 |
| 1430 | CODE_SMELL | CRITICAL | src/main/browser-wake.ts:58 | typescript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 6d6cef16-b565-4e4f-ac92-4b99f2756e60 |
| 1431 | CODE_SMELL | MINOR | src/main/chat-models.ts:10 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | c629a92b-5aee-41dd-8d0c-79aac9e09217 |
| 1432 | CODE_SMELL | MAJOR | src/main/chat-models.ts:157 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 72288f01-865d-42ab-8d7d-7a4f0f4164c3 |
| 1433 | CODE_SMELL | MINOR | src/main/goal.ts:51 | typescript:S3863 | '../shared/types.js' imported multiple times. | 92410eb9-9803-493c-9aa7-11c84d75044d |
| 1434 | CODE_SMELL | MAJOR | src/main/goal.ts:1497 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 57f9ae53-c6be-4716-9f82-e4f41b609f48 |
| 1435 | CODE_SMELL | MINOR | src/main/goal.ts:1956 | typescript:S7750 | Prefer `.findLast(…)` over `.filter(…).at(-1)`. | c20c59d8-b988-4c7b-9baf-578c4dc95dde |
| 1436 | CODE_SMELL | MINOR | src/main/goal.ts:2069 | typescript:S7750 | Prefer `.findLast(…)` over `.filter(…).at(-1)`. | 9d5d7380-d3e7-4f6f-a8a8-bb1f1084f1a3 |
| 1437 | CODE_SMELL | CRITICAL | src/main/goal.ts:2329 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 24 to the 15 allowed. | ee4ee3e0-28fb-4eca-b332-813b556938e3 |
| 1438 | CODE_SMELL | MINOR | src/main/ipc.ts:15 | typescript:S3863 | './session/recorder.js' imported multiple times. | c7162f93-3054-46de-8ff6-7447625f01a1 |
| 1439 | CODE_SMELL | MINOR | src/main/ipc.ts:28 | typescript:S3863 | './goal.js' imported multiple times. | 9d174eb9-f427-43cd-8193-dc04e397157b |
| 1440 | CODE_SMELL | MINOR | src/main/ipc.ts:31 | typescript:S3863 | './goal.js' imported multiple times. | d46f0349-d881-4dd3-b392-bb3e8ace900c |
| 1441 | CODE_SMELL | MINOR | src/main/ipc.ts:68 | typescript:S3863 | './goal.js' imported multiple times. | dafec7e9-7e8e-4c8a-9f2f-04d5b70399a9 |
| 1442 | CODE_SMELL | MINOR | src/main/ipc.ts:1303 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | 5f59b662-9b71-4217-beeb-61196af4d7fb |
| 1443 | CODE_SMELL | MINOR | src/main/ipc.ts:1317 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | 30efba66-d0d4-4bfc-99a6-b3df5a8a72f1 |
| 1444 | CODE_SMELL | MINOR | src/main/ipc.ts:1320 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | dbc6e83d-ddfe-446f-8430-25f9bc8f2e69 |
| 1445 | CODE_SMELL | MINOR | src/main/ipc.ts:1349 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | b98d66e2-7e5b-4d1a-a38e-1f8bf91355c2 |
| 1446 | CODE_SMELL | MINOR | src/main/ipc.ts:1353 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | e1856954-c305-4f74-afe2-b4f1520bdcf6 |
| 1447 | CODE_SMELL | MINOR | src/main/ipc.ts:1711 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | 85f649f0-dffe-4ffc-9513-f0432b4c7788 |
| 1448 | CODE_SMELL | MINOR | src/main/ipc.ts:1714 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | e45b7386-8b5c-466e-9f95-db6881ec4065 |
| 1449 | CODE_SMELL | CRITICAL | src/main/mcp/tools-core.ts:1028 | typescript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | d6e2c6d3-9970-4e3a-8a64-7943e6b26901 |
| 1450 | CODE_SMELL | MAJOR | src/main/session/finish.ts:47 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | ac6e9886-68d8-4378-ba51-92b405583bcd |
| 1451 | CODE_SMELL | MAJOR | src/main/session/finish.ts:230 | typescript:S6671 | Expected the Promise rejection reason to be an Error. | 6dc826c7-3d4b-4a86-9b74-07ad880c9289 |
| 1452 | CODE_SMELL | MINOR | src/main/session/input.ts:33 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | 14a09833-8171-4fe2-ad0c-f9f132a54d3b |
| 1453 | CODE_SMELL | MINOR | src/main/session/input.ts:45 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | 14681c3f-7b10-44f5-a349-181c58507a84 |
| 1454 | CODE_SMELL | MINOR | src/main/session/input.ts:849 | typescript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | b8db74c6-c74d-4c15-a9d9-5526cf69a64c |
| 1455 | CODE_SMELL | MAJOR | src/main/session/input.ts:1664 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 10499c97-64f5-447b-acdc-bcd5e8bd02f0 |
| 1456 | CODE_SMELL | CRITICAL | src/main/session/recorder.ts:279 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 33 to the 15 allowed. | c652adfb-19e8-4f53-b0cf-9b61085e78e9 |
| 1457 | CODE_SMELL | CRITICAL | src/main/session/store.ts:2839 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 23 to the 15 allowed. | 92ea675f-4dab-478b-a5b2-867638054f94 |
| 1458 | CODE_SMELL | MINOR | src/main/session/usage.ts:10 | typescript:S1874 | '(params?: unknown): ZodNumber' is deprecated. | 951d0d16-4702-427c-bce3-15a651193b0d |
| 1459 | CODE_SMELL | MINOR | src/main/session/usage.ts:10 | typescript:S1874 | '(params?: unknown): ZodNumber' is deprecated. | a47b73ad-9e29-455c-a4e8-62684ea277a3 |
| 1460 | CODE_SMELL | MINOR | src/main/session/usage.ts:10 | typescript:S1874 | '(params?: unknown): ZodNumber' is deprecated. | ad3c2cb3-f276-45b9-8cc8-057ba9d64d2e |
| 1461 | CODE_SMELL | MINOR | src/main/session/usage.ts:27 | typescript:S1874 | '(params?: unknown): ZodNumber' is deprecated. | b894d61f-8b02-45a6-bc2a-3b4ddd688731 |
| 1462 | CODE_SMELL | MINOR | src/renderer/browser-preferences.ts:23 | typescript:S7764 | Prefer `globalThis` over `window`. | da8cffa6-c61a-49fb-b7f9-c68f6dc99f00 |
| 1463 | CODE_SMELL | MAJOR | src/renderer/chat-models.ts:73 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 24d1493d-9395-4dfc-a433-bc49a90c43b1 |
| 1464 | CODE_SMELL | MAJOR | src/renderer/chat-models.ts:108 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 241de653-3e9e-4d14-ae0f-da5dd5636f45 |
| 1465 | CODE_SMELL | MINOR | src/renderer/chat-models.ts:502 | typescript:S7764 | Prefer `globalThis` over `window`. | c8fc009d-698e-4395-bc24-a388c9b5c07d |
| 1466 | CODE_SMELL | MINOR | src/renderer/chat.ts:288 | typescript:S7764 | Prefer `globalThis` over `window`. | de8ea19e-f91a-442d-836f-afb28f85e8ae |
| 1467 | CODE_SMELL | MINOR | src/renderer/chat.ts:294 | typescript:S7764 | Prefer `globalThis` over `window`. | fd498242-465e-4268-a52a-f7a484c5934f |
| 1468 | CODE_SMELL | MINOR | src/renderer/chat.ts:3482 | typescript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | 9d62fb76-5d17-4234-b250-2a1a33a1cd84 |
| 1469 | CODE_SMELL | MAJOR | src/renderer/chat.ts:3485 | typescript:S7768 | Prefer `cursor.before(child)` over `parent.insertBefore(child, cursor)`. | cbf1e0af-4b70-4948-98fe-4de3adbf8dd8 |
| 1470 | CODE_SMELL | MINOR | src/renderer/chat.ts:4325 | typescript:S7764 | Prefer `globalThis` over `window`. | 08422423-6389-4a58-a54e-f9082c1386c5 |
| 1471 | CODE_SMELL | MINOR | src/renderer/chat.ts:5151 | typescript:S7764 | Prefer `globalThis` over `window`. | c77e0066-6898-4408-93a1-b37904ad51dc |
| 1472 | CODE_SMELL | MINOR | src/renderer/chat.ts:5761 | typescript:S7764 | Prefer `globalThis` over `window`. | 8d4fd50b-7a00-4788-af1e-47537b67cffe |
| 1473 | CODE_SMELL | MAJOR | src/renderer/chat.ts:6404 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 076377c7-1e59-49a7-84fe-9520778fc4fc |
| 1474 | CODE_SMELL | MINOR | src/renderer/context-meter.ts:3 | typescript:S3863 | '../shared/session.js' imported multiple times. | 4a5946db-ad0a-4f6f-a107-0e9e5df10675 |
| 1475 | CODE_SMELL | MINOR | src/renderer/context-meter.ts:4 | typescript:S3863 | '../shared/session.js' imported multiple times. | 4fee7062-84fa-43f4-82b4-ccf6263fc857 |
| 1476 | CODE_SMELL | MAJOR | src/renderer/index.html:1025 | Web:S6819 | Use &lt;output&gt; instead of the status role to ensure accessibility across all devices. | 5d9bd26c-0dd8-412f-967f-e63b07d1a58a |
| 1477 | CODE_SMELL | CRITICAL | src/shared/task-progress.ts:13 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 22 to the 15 allowed. | 85823828-d614-4098-a13c-1f8548d7b461 |
| 1478 | CODE_SMELL | MINOR | src/shared/task-progress.ts:19 | typescript:S7758 | Prefer `String#codePointAt()` over `String#charCodeAt()`. | bb472741-ce9e-4189-a2c8-e188b0cc638e |
| 1479 | CODE_SMELL | MINOR | src/shared/task-progress.ts:27 | typescript:S7758 | Prefer `String.fromCodePoint()` over `String.fromCharCode()`. | b28b9d31-1376-47f5-b68f-d965f0ef7e1c |
| 1480 | CODE_SMELL | MINOR | src/shared/task-progress.ts:27 | typescript:S7773 | Prefer `Number.parseInt` over `parseInt`. | fb2fbc5a-0200-4a03-aa86-08f823f286eb |
| 1481 | CODE_SMELL | CRITICAL | src/shared/task-progress.ts:41 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 33 to the 15 allowed. | 52aba099-a4eb-4768-8ca9-abdcac170c6d |
| 1482 | CODE_SMELL | MAJOR | src/shared/task-progress.ts:44 | typescript:S6557 | Use 'String#startsWith' method instead. | 27020e4b-051e-4941-b5f3-cea229cac4cf |
| 1483 | CODE_SMELL | MAJOR | src/shared/task-progress.ts:64 | typescript:S6557 | Use 'String#startsWith' method instead. | bf40d639-7a5b-4775-a201-2026438a1adf |
| 1484 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:377 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 6495edf3-19fb-4a83-8934-dd452a566ade |
| 1485 | CODE_SMELL | CRITICAL | src/main/mcp/session-tool.ts:191 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 34 to the 15 allowed. | 98105d17-13c7-4db1-b690-2fe98f6bfad9 |
| 1486 | CODE_SMELL | CRITICAL | src/main/mcp/session-tool.ts:335 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | 2b62b631-dba4-4f7c-aa9b-dbedae424ac1 |
| 1487 | CODE_SMELL | CRITICAL | src/main/mcp/session-tool.ts:647 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 33 to the 15 allowed. | 082d1e7e-b598-441d-9135-d78f8f69f153 |
| 1488 | CODE_SMELL | CRITICAL | src/main/mcp/session-tool.ts:950 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 36 to the 15 allowed. | 577d44b6-347a-421f-a1a4-e4797c04f0de |
| 1489 | CODE_SMELL | CRITICAL | src/main/mcp/tools-core.ts:2353 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | efb1ef4b-4e1b-49ef-b0fc-a4ecbb68c9c6 |
| 1490 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:553 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 5141c3ba-a315-4254-b127-c61c6c36b78e |
| 1491 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:554 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 284c9e88-32cf-48d8-a41d-eb2359ab4dcd |
| 1492 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:555 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | eb3390b3-4cc3-46bd-9f12-cd90eba6f77b |
| 1493 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:557 | javascript:S7755 | Prefer `.at(…)` over `[….length - index]`. | e805c373-252e-415e-a5ee-457b79f741ac |
| 1494 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:755 | javascript:S7755 | Prefer `.at(…)` over `[….length - index]`. | 3451376c-b684-4222-a61b-662022a1a50d |
| 1495 | CODE_SMELL | MINOR | extension/content.js:1749 | javascript:S7765 | Use `.includes()`, rather than `.indexOf()`, when checking for existence. | 09a54320-274b-443b-a23f-a1e498326adf |
| 1496 | CODE_SMELL | MAJOR | src/main/bridge.ts:8500 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 1ba16f0c-353d-4618-a112-420feb70a83b |
| 1497 | CODE_SMELL | MINOR | src/main/goal.ts:2304 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 7d315b3d-c4c4-490c-9e88-fbe71cef5411 |
| 1498 | CODE_SMELL | MINOR | src/main/goal.ts:2305 | typescript:S6594 | Use the "RegExp.exec()" method instead. | 46707572-859d-4226-b356-26df6b772d02 |
| 1499 | CODE_SMELL | MAJOR | src/main/session/recorder.ts:1549 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 22fa642e-86ea-4282-8a5d-bbdb20188fc5 |
| 1500 | CODE_SMELL | MAJOR | extension/overlay.css:620 | css:S7924 | Text does not meet the minimal contrast requirement with its background. | 3f407d84-d2d1-4e2b-97b5-bc5440942a47 |
| 1501 | CODE_SMELL | MAJOR | scripts/verify-current-tunnel.mjs:57 | javascript:S7785 | Prefer top-level await over using a promise chain. | 96d032b4-868f-475a-aebb-7359957c8e87 |
| 1502 | CODE_SMELL | MINOR | src/renderer/chat.ts:3240 | typescript:S7755 | Prefer `.at(…)` over `[….length - index]`. | 8f074042-8689-411a-81d4-ddac88b0752e |
| 1503 | CODE_SMELL | MINOR | src/renderer/chat.ts:3247 | typescript:S7771 | Prefer negative index over length minus index for `splice`. | 70d779e7-72b7-4ef2-9006-2f6b6d026f7c |
| 1504 | CODE_SMELL | MAJOR | extension/content.js:5993 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 91398610-6992-476f-b064-c3baef2a8c07 |
| 1505 | CODE_SMELL | CRITICAL | extension/content.js:6030 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 33 to the 15 allowed. | 80fc0162-acdb-44ab-bac2-9d04509739aa |
| 1506 | CODE_SMELL | MAJOR | extension/content.js:6042 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 72aca287-2b91-463d-979d-3f6175657d65 |
| 1507 | CODE_SMELL | MAJOR | extension/content.js:8542 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 8e75703c-8563-4a02-aaee-8b1191f96b98 |
| 1508 | CODE_SMELL | MAJOR | extension/content.js:10004 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 4a05063c-d029-40d1-a63b-2fedf2b16629 |
| 1509 | CODE_SMELL | MAJOR | src/main/agents.ts:3001 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 594d8501-fe38-4f4a-9b02-5b6c51e5dc50 |
| 1510 | CODE_SMELL | MINOR | src/main/bridge.ts:219 | typescript:S3863 | './session/continuation.js' imported multiple times. | 9a55860c-67d3-4e88-b4e4-cd1ca0f25863 |
| 1511 | CODE_SMELL | MAJOR | src/main/bridge.ts:6925 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 82d16f71-ac5d-41b4-a27b-ee05089e49c5 |
| 1512 | CODE_SMELL | MAJOR | src/main/codex/unified-exec.ts:1060 | typescript:S4043 | Move this array "sort" operation to a separate statement or replace it with "toSorted". | cc343078-b95a-4d40-842c-55211c3882f1 |
| 1513 | CODE_SMELL | MAJOR | src/main/codex/unified-exec.ts:1061 | typescript:S4043 | Move this array "sort" operation to a separate statement or replace it with "toSorted". | 0e2d5d82-b6be-4932-a3fa-98af58d89124 |
| 1514 | CODE_SMELL | MAJOR | src/main/session/blocked-chats.ts:89 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 44903a5e-513f-4284-8316-a79cad03e29f |
| 1515 | CODE_SMELL | MINOR | src/main/session/correlation.ts:187 | typescript:S4323 | Replace this union type with a type alias. | 7566d3d3-2a29-490f-bbc0-8c0f68fcdde1 |
| 1516 | CODE_SMELL | MINOR | src/main/session/store.ts:2439 | typescript:S6653 | Use 'Object.hasOwn()' instead of 'Object.prototype.hasOwnProperty.call()'. | 6ef1bd0c-8769-4964-b267-59a40862c012 |
| 1517 | CODE_SMELL | MAJOR | src/main/session/store.ts:3020 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 0a71e1ec-9fc2-4b63-86c7-6bbf43a87405 |
| 1518 | CODE_SMELL | MAJOR | src/main/tunnel/index.ts:65 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 0a4bfb58-e8da-491c-ae67-f1f4eb17b27a |
| 1519 | CODE_SMELL | CRITICAL | src/main/tunnel/index.ts:507 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 33 to the 15 allowed. | a41059c7-ddb6-4e5b-9c40-30abb49050b1 |
| 1520 | CODE_SMELL | MINOR | src/renderer/chat.ts:1089 | typescript:S7764 | Prefer `globalThis` over `window`. | 57a7d682-adeb-4484-9c4c-c0a4210c13aa |
| 1521 | CODE_SMELL | MINOR | src/renderer/chat.ts:1102 | typescript:S7764 | Prefer `globalThis` over `window`. | d05d8264-710f-44d0-9cd3-69e546653591 |
| 1522 | CODE_SMELL | MINOR | src/renderer/chat.ts:5150 | typescript:S7764 | Prefer `globalThis` over `window`. | d1fd200b-81f8-46b7-aaa6-df3b7ec7658b |
| 1523 | CODE_SMELL | MINOR | src/renderer/main.ts:2370 | typescript:S7764 | Prefer `globalThis` over `window`. | 2b23a505-d92f-4d85-9066-756c86e790cf |
| 1524 | CODE_SMELL | MINOR | src/renderer/main.ts:2371 | typescript:S7764 | Prefer `globalThis` over `window`. | b6613e4b-1028-4c7b-ae61-43c5d5361b36 |
| 1525 | CODE_SMELL | MAJOR | src/main/agents.ts:957 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | fa6c562e-7706-473b-b432-c9e8aa84b201 |
| 1526 | CODE_SMELL | CRITICAL | src/main/bridge.ts:10483 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 54 to the 15 allowed. | d3b210dc-2782-4a17-8e52-c5843bd40ef7 |
| 1527 | CODE_SMELL | MAJOR | src/main/session/continuation.ts:1023 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 0ebba18c-1d2e-4d93-bb35-883289816e7c |
| 1528 | CODE_SMELL | MAJOR | extension/content.js:10046 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | dab28b69-4c6e-467f-a3c6-dbcd4451a433 |
| 1529 | CODE_SMELL | MINOR | src/main/bridge.ts:9210 | typescript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | 3341c868-5aac-4ca4-8ccc-be6105c7412a |
| 1530 | CODE_SMELL | MINOR | extension/content.js:7151 | javascript:S1481 | Remove the declaration of the unused 'running' variable. | 0b1957fc-3381-4987-9e68-dd5badcd4a7d |
| 1531 | CODE_SMELL | MAJOR | extension/content.js:7151 | javascript:S1854 | Remove this useless assignment to variable "running". | 7accfe65-e45c-4f8c-8b28-9e798033d4cf |
| 1532 | CODE_SMELL | MAJOR | extension/content.js:8303 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | 2ff7906c-7c9c-42bc-ac2f-51347489b1b6 |
| 1533 | CODE_SMELL | MAJOR | extension/content.js:8375 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | 95fa69ed-c558-40e6-87e9-992abe1dca13 |
| 1534 | CODE_SMELL | MAJOR | extension/content.js:8376 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | 8adc5207-7e82-4dae-af37-0855a2061bf5 |
| 1535 | CODE_SMELL | MINOR | extension/content.js:2632 | javascript:S7744 | The empty object is useless. | 11665513-88d7-4fa5-9369-56b46a2d67d4 |
| 1536 | CODE_SMELL | MINOR | extension/content.js:2632 | javascript:S7744 | The empty object is useless. | 3e4d7710-ca02-4ade-9639-58cb0d76ed67 |
| 1537 | CODE_SMELL | MINOR | extension/content.js:7979 | javascript:S7744 | The empty object is useless. | 4632b801-2cd3-4e4d-b0b7-0e8c98550509 |
| 1538 | CODE_SMELL | MINOR | extension/content.js:7979 | javascript:S7744 | The empty object is useless. | 4c2aa6d4-ef69-4ae7-90e7-fd8347166d08 |
| 1539 | CODE_SMELL | MAJOR | extension/content.js:9304 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 72c7ee17-4693-4fd8-bbd4-ebca3b7a5821 |
| 1540 | CODE_SMELL | MINOR | src/main/exec-hints.ts:540 | typescript:S7755 | Prefer `.at(…)` over `[….length - index]`. | ca2027d8-5a32-407b-b70e-8d6a8de78e96 |
| 1541 | CODE_SMELL | MINOR | src/main/exec-hints.ts:572 | typescript:S7755 | Prefer `.at(…)` over `[….length - index]`. | 283105f6-7582-47f4-982e-6e94b30e3780 |
| 1542 | CODE_SMELL | MAJOR | src/main/goal.ts:1056 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 1497ee56-95e8-4b8a-b9f8-691d84c85cc2 |
| 1543 | CODE_SMELL | CRITICAL | src/main/session/continuation.ts:617 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 39 to the 15 allowed. | e58a5460-b911-4d34-bc98-29c4dd108a2b |
| 1544 | CODE_SMELL | MAJOR | src/main/goal.ts:680 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 472cb3db-b635-4e5a-83b0-6d5cdea90ce9 |
| 1545 | CODE_SMELL | MAJOR | src/main/goal.ts:1647 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 15c90f2e-2c8b-4039-b671-a7be6a5097a3 |
| 1546 | CODE_SMELL | MAJOR | src/main/goal.ts:1657 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 143fb786-3835-43cc-bb5f-07d53fd5fc03 |
| 1547 | CODE_SMELL | MAJOR | src/main/bridge.ts:8947 | typescript:S107 | Function 'noteCallAttribution' has too many parameters (9). Maximum allowed is 7. | 7e1d6afa-d380-4940-96a4-9009735f10bf |
| 1548 | CODE_SMELL | MAJOR | extension/background.js:4557 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 28b23182-8c1d-4aa6-ba34-e1e30c80f24d |
| 1549 | CODE_SMELL | MAJOR | extension/content.js:6818 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 26a9840b-158c-4505-9b9e-6ebdb37fd250 |
| 1550 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:2359 | javascript:S1874 | The signature '(commandId: string, showUI?: boolean \| undefined, value?: string \| undefined): boolean' of 'document.execCommand' is deprecated. | 8f56af4f-797f-42c1-99be-ce5d6f5d00c7 |
| 1551 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:2360 | javascript:S1874 | The signature '(commandId: string, showUI?: boolean \| undefined, value?: string \| undefined): boolean' of 'document.execCommand' is deprecated. | 36776995-3c01-45a1-acb4-b302096be98f |
| 1552 | CODE_SMELL | MAJOR | extension/content.js:9817 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 1e8190da-a6b2-4916-b135-c14e2cca2f7a |
| 1553 | CODE_SMELL | MAJOR | extension/content.js:9817 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | cd391a43-be02-4b12-9614-72304ce22763 |
| 1554 | CODE_SMELL | MAJOR | extension/content.js:10060 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | a2002add-a028-48ed-b13a-a315c2246701 |
| 1555 | CODE_SMELL | CRITICAL | extension/content.js:10279 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | 32df78dc-2806-493a-800f-d43686b62f8b |
| 1556 | CODE_SMELL | MAJOR | extension/content.js:10342 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 86af0bf4-566b-468f-9cfa-d34d350174e6 |
| 1557 | CODE_SMELL | CRITICAL | extension/content.js:10398 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | 2564eb37-47ff-4d5e-8880-b11257569784 |
| 1558 | CODE_SMELL | MINOR | extension/content.js:11671 | javascript:S6594 | Use the "RegExp.exec()" method instead. | 352c2819-ed07-4ec6-bd11-07a340c26093 |
| 1559 | CODE_SMELL | MAJOR | extension/content.js:11710 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 61be2c37-696d-406a-b7d8-39e0390c7176 |
| 1560 | CODE_SMELL | MAJOR | extension/content.js:11719 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 1bd22a8a-84e3-47b2-b3ac-132c3c03d4ce |
| 1561 | CODE_SMELL | MAJOR | extension/content.js:11719 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | fb05910e-8af0-48c4-a558-c9e96555eb8c |
| 1562 | CODE_SMELL | MAJOR | extension/content.js:11727 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 1cf3a7be-9f63-428d-a019-eba5a8374039 |
| 1563 | CODE_SMELL | MAJOR | extension/content.js:11727 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | f8731dc0-a328-4c23-bb92-c341392676b2 |
| 1564 | CODE_SMELL | MAJOR | src/main/bridge.ts:3477 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | a669f9d8-a181-44a0-aded-2b00d0c35522 |
| 1565 | CODE_SMELL | MAJOR | src/main/bridge.ts:3509 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 48c38dff-e7e8-4330-9233-49e332b31ca1 |
| 1566 | CODE_SMELL | MAJOR | src/main/bridge.ts:3523 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 61a5e17f-b0be-46d8-9392-8c579ce273dd |
| 1567 | CODE_SMELL | MAJOR | src/main/goal.ts:486 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 28f2a256-53ae-4d44-a22b-e5e7c60a925b |
| 1568 | CODE_SMELL | MAJOR | src/main/goal.ts:734 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | efb6a437-54e4-40b5-bf25-8eaf38c01197 |
| 1569 | CODE_SMELL | MINOR | src/main/bridge.ts:9243 | typescript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | 53ca38fe-4672-4b7f-8326-d7c4c53bfb2b |
| 1570 | CODE_SMELL | CRITICAL | src/main/computer/index.ts:407 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 26 to the 15 allowed. | 6b21e4b9-7fba-475d-9a8a-16e7ef3a8814 |
| 1571 | CODE_SMELL | CRITICAL | src/main/exec-hints.ts:219 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | e382b624-6ddb-4160-95f5-159d47ac3ba6 |
| 1572 | CODE_SMELL | MINOR | src/main/computer/index.ts:1127 | typescript:S6551 | '(unavailableValue as Record&lt;string, unknown&gt;)['code'] ?? 'UI_UNAVAILABLE'' will use Object's default stringification format ('[object Object]') when stringified. | d238b21a-72eb-4e95-a320-e9a26468115c |
| 1573 | CODE_SMELL | MINOR | src/main/computer/index.ts:1128 | typescript:S6551 | '(unavailableValue as Record&lt;string, unknown&gt;)['message'] ?? 'UI controls are unavailable'' will use Object's default stringification format ('[object Object]') when stringified. | da61eaa6-6267-4cde-9eab-ac17758ab5bc |
| 1574 | CODE_SMELL | MAJOR | scripts/prepare-macos-desktop-helper.mjs:130 | javascript:S7785 | Prefer top-level await over using a promise chain. | 09e0fd23-3888-4681-ae11-ec26e50a3f9a |
| 1575 | CODE_SMELL | MINOR | extension/background.js:4530 | javascript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | eefdb723-9959-4dee-a1e5-fff208aa2d79 |
| 1576 | CODE_SMELL | MINOR | extension/background.js:4809 | javascript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | 24e1543a-3c56-41af-aead-f0214a4122b4 |
| 1577 | CODE_SMELL | MAJOR | extension/content.js:10316 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 4d125334-14f7-4a2f-b481-4f579576dbbb |
| 1578 | CODE_SMELL | MINOR | extension/content.js:10986 | javascript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | 1df60f61-4a3d-4ec4-ab42-bea0be6c5181 |
| 1579 | CODE_SMELL | MAJOR | scripts/check-release-absent.mjs:12 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | ef160115-c6e1-4e65-a697-a096fcf2ba23 |
| 1580 | CODE_SMELL | MAJOR | scripts/check-release-absent.mjs:49 | javascript:S7785 | Prefer top-level await over using a promise chain. | 105ca429-a796-4e62-ad89-7a2ae901a843 |
| 1581 | CODE_SMELL | CRITICAL | scripts/macos-audit-utils.mjs:42 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | aaaecb8e-0cf2-4275-a61f-8dad65ef9a7b |
| 1582 | CODE_SMELL | MINOR | scripts/macos-audit-utils.mjs:48 | javascript:S6594 | Use the "RegExp.exec()" method instead. | 5186137f-5252-43c6-a381-df8ec45cf9bf |
| 1583 | CODE_SMELL | MINOR | scripts/macos-audit-utils.mjs:56 | javascript:S6594 | Use the "RegExp.exec()" method instead. | d79f8826-9363-45c5-9098-769dd71b928b |
| 1584 | CODE_SMELL | MINOR | scripts/macos-audit-utils.mjs:61 | javascript:S6594 | Use the "RegExp.exec()" method instead. | 653a040c-c876-4257-b52c-03632af59bd2 |
| 1585 | CODE_SMELL | MINOR | scripts/macos-audit-utils.mjs:70 | javascript:S6594 | Use the "RegExp.exec()" method instead. | e5c3fdd4-8fe1-419f-9442-b41cedd2182c |
| 1586 | CODE_SMELL | MINOR | scripts/macos-audit-utils.mjs:125 | javascript:S6594 | Use the "RegExp.exec()" method instead. | b6493e56-2f35-4396-9dbd-1732459ae440 |
| 1587 | CODE_SMELL | MINOR | scripts/packaging-versions.mjs:3 | javascript:S7763 | Use `export…from` to re-export `SUPPORTED_ARCHES`. | a3117143-73ed-49e7-bcfe-563c731c991c |
| 1588 | CODE_SMELL | MINOR | scripts/packaging-versions.mjs:3 | javascript:S7763 | Use `export…from` to re-export `SUPPORTED_PLATFORMS`. | e2ef871f-f6f0-4c7b-916c-6fe799fc35b9 |
| 1589 | CODE_SMELL | MAJOR | src/main/agents.ts:4182 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | ad269f29-d2ae-4d57-885f-7b1972258e4e |
| 1590 | CODE_SMELL | MAJOR | src/main/agents.ts:4888 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 6d207a34-baed-401f-a1bc-2894c2a79c3d |
| 1591 | CODE_SMELL | MINOR | src/main/env.ts:32 | typescript:S6653 | Use 'Object.hasOwn()' instead of 'Object.prototype.hasOwnProperty.call()'. | a5191a4f-eef9-4b18-8c63-13f6f365467a |
| 1592 | CODE_SMELL | MAJOR | src/main/exec-hints.ts:699 | typescript:S4624 | Refactor this code to not use nested template literals. | 64731bc2-4a94-48bb-bf93-4b5b051b1213 |
| 1593 | CODE_SMELL | MAJOR | src/main/goal.ts:885 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 6132bc0c-f631-4259-89cf-ccd7d43ba86b |
| 1594 | CODE_SMELL | CRITICAL | src/main/goal.ts:2519 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 21 to the 15 allowed. | c3294154-8487-442e-8f44-50be0449a9cc |
| 1595 | CODE_SMELL | MAJOR | src/main/goal.ts:2540 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 4adc37db-3b6f-48c8-a901-4ab907706116 |
| 1596 | CODE_SMELL | CRITICAL | src/main/session/continuation.ts:1297 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 71 to the 15 allowed. | 751f53ec-9fdf-4d94-a9c1-9231d11c2ba7 |
| 1597 | CODE_SMELL | CRITICAL | src/main/session/continuation.ts:1420 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 25 to the 15 allowed. | d270ac27-e4f4-491a-ba1e-4b4f29c282bf |
| 1598 | CODE_SMELL | MINOR | extension/background.js:449 | javascript:S2486 | Handle this exception or don't catch it at all. | 9a4bb97c-93a5-4a0b-b708-300b28b47f82 |
| 1599 | CODE_SMELL | MINOR | extension/background.js:454 | javascript:S7755 | Prefer `.at(…)` over `[….length - index]`. | 66c597dc-def7-4b5b-8e0f-ee0713cf0165 |
| 1600 | CODE_SMELL | CRITICAL | extension/background.js:564 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 24 to the 15 allowed. | ddcd3be8-ef2f-4d73-a841-725a8c87a4d7 |
| 1601 | CODE_SMELL | MAJOR | extension/content.js:4937 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | a169030e-f8d1-426c-b027-5bcc6b31c580 |
| 1602 | CODE_SMELL | MAJOR | extension/content.js:4938 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 38cd5b2e-a494-43dd-b6a4-6ec2b13dfc18 |
| 1603 | CODE_SMELL | MAJOR | extension/content.js:5228 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 6f8634e5-67b5-4bb9-8d91-35b4abdc60da |
| 1604 | CODE_SMELL | MINOR | extension/content.js:7491 | javascript:S7764 | Prefer `globalThis` over `window`. | e1b9a75d-4c59-4fe5-aa74-dc5af6f0db68 |
| 1605 | CODE_SMELL | MINOR | extension/content.js:8529 | javascript:S7764 | Prefer `globalThis` over `window`. | 3bb839e0-9042-492b-ad63-e82b6f888d41 |
| 1606 | CODE_SMELL | MINOR | extension/content.js:8530 | javascript:S7764 | Prefer `globalThis` over `window`. | b583ccd1-c994-4007-ae65-07c11a17219c |
| 1607 | CODE_SMELL | MINOR | extension/content.js:11834 | javascript:S7764 | Prefer `globalThis` over `window`. | d9c10592-dde7-4e8c-9582-ba02cb03de75 |
| 1608 | CODE_SMELL | MINOR | extension/fiber.js:932 | javascript:S4138 | Expected a `for-of` loop instead of a `for` loop with this simple iteration. | e31ad74a-1740-44d3-b3c2-226374d85f2c |
| 1609 | CODE_SMELL | MAJOR | src/main/agents.ts:3203 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | e6f928f2-54cf-4687-a4c5-a87b3ca14f0c |
| 1610 | CODE_SMELL | MAJOR | src/main/agents.ts:3214 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 9be6d90d-189a-458b-b1c5-48fcf2869675 |
| 1611 | CODE_SMELL | MAJOR | src/main/agents.ts:3452 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | db5af94f-b1f9-467a-bd42-f066c7568b17 |
| 1612 | CODE_SMELL | MAJOR | src/main/agents.ts:3566 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 766b968a-9b35-4d31-9a59-b0f9d421bcf3 |
| 1613 | CODE_SMELL | MAJOR | src/main/agents.ts:4441 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 43b144e0-1a2a-4b06-93e8-1feb26e2174c |
| 1614 | CODE_SMELL | MAJOR | src/main/agents.ts:4836 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | e8a77c24-a507-48c3-9fab-8ec4c91abd6d |
| 1615 | CODE_SMELL | MAJOR | src/main/bridge.ts:5717 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 5d2ce934-f9d0-46a1-810e-f6665f3e145d |
| 1616 | CODE_SMELL | MAJOR | src/main/bridge.ts:10454 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | ed85dcd2-92d0-4e6f-bf0e-04ba6ec4fcec |
| 1617 | CODE_SMELL | CRITICAL | src/main/bridge.ts:10612 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 29 to the 15 allowed. | fc0e18c0-d0cd-4002-ab8b-80cbc453f011 |
| 1618 | CODE_SMELL | CRITICAL | src/main/codex/apply-patch/index.ts:233 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 47 to the 15 allowed. | a953ffde-5cc7-4897-88aa-4f3e27215413 |
| 1619 | CODE_SMELL | MAJOR | src/main/codex/command-batch.ts:24 | typescript:S4624 | Refactor this code to not use nested template literals. | 7084ef41-876e-4c61-895e-91008aab1bbb |
| 1620 | CODE_SMELL | CRITICAL | src/main/codex/read-backend.ts:247 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 30 to the 15 allowed. | 731c16b0-7c30-4630-bf77-784789217369 |
| 1621 | CODE_SMELL | CRITICAL | src/main/computer/index.ts:1502 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 37 to the 15 allowed. | ea5ad345-dbb6-4520-8a7d-52a22880f3d2 |
| 1622 | CODE_SMELL | MINOR | src/main/mcp/tools-core.ts:196 | typescript:S7765 | Use `.includes()`, rather than `.indexOf()`, when checking for existence. | 6f1fc400-e3c0-43ff-abba-1f8de34c6bc3 |
| 1623 | CODE_SMELL | CRITICAL | src/main/mcp/tools-core.ts:843 | typescript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | bf1e8f8a-c7a0-4842-b7a5-f187ff12061a |
| 1624 | CODE_SMELL | CRITICAL | src/main/mcp/tools-core.ts:847 | typescript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 2ef7772e-041a-487e-8b06-f409fa095189 |
| 1625 | CODE_SMELL | CRITICAL | src/main/mcp/tools-core.ts:1868 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 24 to the 15 allowed. | 2bb603cb-9b06-42a8-b552-b0f1c0f1cd71 |
| 1626 | CODE_SMELL | CRITICAL | src/main/search.ts:462 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | 5df3b666-b0a8-4ba1-b708-6940e5c44110 |
| 1627 | CODE_SMELL | MAJOR | src/main/session/store.ts:1693 | typescript:S4043 | Move this array "sort" operation to a separate statement or replace it with "toSorted". | 9d03e7af-b1cc-45f1-9de0-18baebe4a5f0 |
| 1628 | CODE_SMELL | MAJOR | src/main/session/store.ts:1744 | typescript:S4043 | Move this array "sort" operation to a separate statement or replace it with "toSorted". | 46ff4d88-1ba1-44e9-869e-b23cf4ac53a2 |
| 1629 | CODE_SMELL | MINOR | src/renderer/chat.ts:1759 | typescript:S7764 | Prefer `globalThis` over `window`. | 699c98aa-40e2-408e-adc9-90005a0baa32 |
| 1630 | CODE_SMELL | MAJOR | extension/content.js:154 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | ec50e6d1-9de2-4b36-b0d6-65d6773c272f |
| 1631 | CODE_SMELL | MAJOR | extension/content.js:158 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | bc107d81-f588-4991-88f1-b5ed481b2e50 |
| 1632 | CODE_SMELL | CRITICAL | extension/content.js:6158 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 30 to the 15 allowed. | 2e3cdd2d-e936-466c-9205-8160f02c4978 |
| 1633 | CODE_SMELL | MAJOR | extension/content.js:6163 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | ea4281f2-5b05-42ee-a8d6-bcfc2c291c00 |
| 1634 | CODE_SMELL | MAJOR | extension/content.js:6188 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | d2d2ff3f-17ff-4dd4-931b-0653a253fe48 |
| 1635 | CODE_SMELL | MAJOR | extension/content.js:6672 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 1b157e09-76fe-4e92-9f54-0c93f66073b0 |
| 1636 | CODE_SMELL | MAJOR | extension/content.js:7966 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | cb1a6dba-4dfd-4440-b948-fbbc478a8755 |
| 1637 | CODE_SMELL | MAJOR | extension/content.js:8095 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 76e7d40c-f567-4aba-ada2-207633c3abdb |
| 1638 | CODE_SMELL | MAJOR | extension/content.js:9055 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | d25d847c-9668-4914-ba6b-e6f5d923964c |
| 1639 | CODE_SMELL | MAJOR | extension/overlay.css:1434 | css:S7924 | Text does not meet the minimal contrast requirement with its background. | a9bd2f77-ed45-4ad8-8566-2186de1cb656 |
| 1640 | CODE_SMELL | CRITICAL | src/main/goal.ts:2235 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | 1bc85df4-3b61-4a73-9981-39f194f5076a |
| 1641 | CODE_SMELL | MINOR | src/main/goal.ts:2275 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 2106b6ea-adea-4c95-bdc9-146a5ea9fdb1 |
| 1642 | CODE_SMELL | MAJOR | extension/background.js:658 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | a6c4fae4-b729-4880-9e4e-6714b9e4a2dd |
| 1643 | CODE_SMELL | MINOR | extension/background.js:1350 | javascript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | f2d7c3c3-c2f2-4762-ab74-d0e0d247f992 |
| 1644 | CODE_SMELL | MINOR | extension/background.js:1661 | javascript:S6653 | Use 'Object.hasOwn()' instead of 'Object.prototype.hasOwnProperty.call()'. | e7dc7b59-2db9-4c19-a461-b7a8f7ab450c |
| 1645 | CODE_SMELL | MINOR | extension/background.js:1700 | javascript:S6653 | Use 'Object.hasOwn()' instead of 'Object.prototype.hasOwnProperty.call()'. | 6a9448cf-d6f4-4c36-ac74-112d04bf020e |
| 1646 | CODE_SMELL | MINOR | extension/background.js:1739 | javascript:S6653 | Use 'Object.hasOwn()' instead of 'Object.prototype.hasOwnProperty.call()'. | 09e13d4e-64f6-448b-973d-71d3a3a45d02 |
| 1647 | CODE_SMELL | MINOR | extension/background.js:1765 | javascript:S6653 | Use 'Object.hasOwn()' instead of 'Object.prototype.hasOwnProperty.call()'. | 9b6cd483-8ee9-4c8a-b770-621d252385f2 |
| 1648 | CODE_SMELL | MINOR | extension/background.js:3148 | javascript:S7765 | Use `.includes()` instead of `.some()` when checking value existence. | cac2e334-c9bc-4d7c-a3a2-302cba2bffa4 |
| 1649 | CODE_SMELL | MINOR | extension/background.js:3176 | javascript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | 4639507f-9fb9-4e45-9728-d76514993654 |
| 1650 | CODE_SMELL | MINOR | extension/background.js:3644 | javascript:S7770 | arrow function is equivalent to `Number`. Use `Number` directly. | e3ec579b-f065-4c39-8e6f-811d87a3d754 |
| 1651 | CODE_SMELL | MINOR | extension/background.js:3661 | javascript:S7773 | Prefer `Number.NaN` over `NaN`. | 8a601e6d-bc63-4ec6-8c81-a049e4631574 |
| 1652 | CODE_SMELL | MINOR | extension/background.js:3700 | javascript:S6653 | Use 'Object.hasOwn()' instead of 'Object.prototype.hasOwnProperty.call()'. | 85d5f47f-8411-4c93-b766-d8ab51f55020 |
| 1653 | CODE_SMELL | CRITICAL | extension/background.js:4365 | javascript:S3735 | Remove this use of the "void" operator. | 1f904933-2545-4b32-9833-c5ada5db2046 |
| 1654 | CODE_SMELL | MAJOR | extension/background.js:5005 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | e41e7233-a3ba-4114-9b11-7f21d62aa662 |
| 1655 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:25 | javascript:S3504 | Unexpected var, use let or const instead. | 6afeb9a8-6b08-43ac-99db-b0c48d2877dc |
| 1656 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:255 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 480dc4c3-415e-44f6-b3c9-cc6614da9dca |
| 1657 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:256 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 4cf27d89-ce98-4807-a148-bb67bffc2b69 |
| 1658 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:320 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | ef184008-3fe9-4bfd-8630-8ab061326ba1 |
| 1659 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:766 | javascript:S7755 | Prefer `.at(…)` over `[….length - index]`. | 3a83f7fd-2e59-4476-b746-873bb17d910d |
| 1660 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:1104 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 064dc5f0-e92c-4e99-ab6f-1bc23a5d0e48 |
| 1661 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:1107 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | b89862ba-051d-4dee-9569-f662a8716c24 |
| 1662 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:1223 | javascript:S7765 | Use `.includes()`, rather than `.indexOf()`, when checking for existence. | dc5f3a94-268f-4ccb-8d91-e374cdb502c2 |
| 1663 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:1244 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 22 to the 15 allowed. | f1059a51-e5bc-4b8f-8fd4-f691b4cc2ef9 |
| 1664 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:1275 | javascript:S7755 | Prefer `.at(…)` over `[….length - index]`. | 162ee453-cb78-4c44-87d0-c6bfecb6435b |
| 1665 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:1301 | javascript:S7765 | Use `.includes()`, rather than `.indexOf()`, when checking for existence. | 7b7ba189-f54d-4ed9-9775-697fdeac9800 |
| 1666 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:1305 | javascript:S7765 | Use `.includes()`, rather than `.indexOf()`, when checking for existence. | 8da93bab-2cce-446a-a9bc-2cd616aad556 |
| 1667 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:1365 | javascript:S7761 | Prefer `.dataset` over `hasAttribute(…)`. | 3caeb207-6c0e-485e-ad94-9e9fd725b4dd |
| 1668 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:1366 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | f5ad4498-e14d-4408-8c8e-ca7e4cd8b0ea |
| 1669 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:1386 | javascript:S7761 | Prefer `.dataset` over `hasAttribute(…)`. | 505c4080-30f6-4990-a412-c444a9a9766e |
| 1670 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:1386 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | a29b4338-34ac-4de1-b76d-70333a8d25cc |
| 1671 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:1391 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 4f6677e6-c790-4d85-8452-5e561208c7bb |
| 1672 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:1392 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 11e8d35f-c3c9-402e-a1ea-af619d0c2cc8 |
| 1673 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:1393 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | b557c580-a889-4a29-87c8-1e0f0ca0bfeb |
| 1674 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:1468 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | 4cbf882d-51e0-48ab-903e-e3a2f2fdd016 |
| 1675 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:1495 | javascript:S4030 | Either use this collection's contents or remove the collection. | aa8d0690-4e99-4c6a-8f4b-de2fe66754ac |
| 1676 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:1538 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 33480e3c-66ea-4662-bf34-3305eecbe33b |
| 1677 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:1538 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 44d779a1-e3b1-4d36-bfd9-61a321588112 |
| 1678 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:1553 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 306da7c6-971b-4922-9066-f04ba30d7e92 |
| 1679 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:1554 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | 39163303-b75d-4686-b727-6689ad52b4d9 |
| 1680 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:1607 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 0bc2ba62-5fca-422c-aeec-d50d238d9f9c |
| 1681 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:1608 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 7583db1e-19b9-4db8-aca3-96e05ef18799 |
| 1682 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:1610 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | d8db943b-27fb-471d-aad4-e6369c1ef7ce |
| 1683 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:1636 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | 302e088b-84d7-4ae2-bea8-3cc1582389d2 |
| 1684 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:1695 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | d53c8b13-9f22-4ee5-a2a5-1d0ae2e10e59 |
| 1685 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:1905 | javascript:S7765 | Use `.includes()`, rather than `.indexOf()`, when checking for existence. | d9e6022a-e913-4159-a15e-9b2cc303cdfe |
| 1686 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:1971 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 7c1667e4-6008-4a0f-820f-94b5cda6dc0f |
| 1687 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:1992 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 57402dab-489f-4b3a-a8c1-39e250d1f3c0 |
| 1688 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2253 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | 4fd0f2c4-b619-4b8b-95c9-e9b82cbb5373 |
| 1689 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2254 | javascript:S7761 | Prefer `.dataset` over `removeAttribute(…)`. | 0bff3baa-8676-4705-bc3d-903721730594 |
| 1690 | CODE_SMELL | MINOR | extension/content.js:147 | javascript:S6644 | Unnecessary use of boolean literals in conditional expression. | a6ba7fb1-0a02-48dc-8ed7-77067553035e |
| 1691 | CODE_SMELL | MAJOR | extension/content.js:177 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 0dfd27b8-d31b-4644-90d1-4dde65754efe |
| 1692 | CODE_SMELL | MINOR | extension/content.js:346 | javascript:S7758 | Prefer `String#codePointAt()` over `String#charCodeAt()`. | 7faa6a22-fd5b-4951-93a2-bb8a7ef981c1 |
| 1693 | CODE_SMELL | MAJOR | extension/content.js:347 | javascript:S3782 | Verify that argument is of correct type: expected 'number' instead of 'number \| undefined'. | 10fe6cf3-8a0e-48ec-9733-0f0b35f2dae8 |
| 1694 | CODE_SMELL | MINOR | extension/content.js:467 | javascript:S7764 | Prefer `globalThis` over `window`. | 16a71862-c755-4445-a137-4196fabf7de1 |
| 1695 | CODE_SMELL | MAJOR | extension/content.js:1330 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | d357e29c-bf1a-4d07-aa76-7260195c6a3b |
| 1696 | CODE_SMELL | MAJOR | extension/content.js:1491 | javascript:S1854 | Remove this useless assignment to variable "flushing". | bdba2fdc-f0a3-4f4b-adf6-7a52de2467a0 |
| 1697 | CODE_SMELL | MAJOR | extension/content.js:1515 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 62fe2a21-ba01-42aa-b5c2-59ba910f744a |
| 1698 | CODE_SMELL | MAJOR | extension/content.js:1531 | javascript:S1854 | Remove this useless assignment to variable "flushing". | 428b14ee-8c77-4b98-8e8d-e9060d2a2c43 |
| 1699 | CODE_SMELL | MINOR | extension/content.js:2068 | javascript:S7765 | Use `.includes()`, rather than `.indexOf()`, when checking for existence. | 2f40300b-e525-4e7b-a4f7-291de7000f48 |
| 1700 | CODE_SMELL | MAJOR | extension/content.js:2128 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 37536dba-4072-4da9-bd8b-e65ce94c689e |
| 1701 | CODE_SMELL | MAJOR | extension/content.js:3111 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 2ffb5c54-a7f1-490b-be30-4cec887d8aa1 |
| 1702 | CODE_SMELL | MAJOR | extension/content.js:3233 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | ce0167ab-af54-411a-8421-53795266f77b |
| 1703 | CODE_SMELL | MAJOR | extension/content.js:3239 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 80adb0f7-610c-4c03-a10f-551c7bd07030 |
| 1704 | CODE_SMELL | MAJOR | extension/content.js:3241 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | ee899061-ae9c-4ac8-9a9a-452b3c56b4f0 |
| 1705 | CODE_SMELL | MINOR | extension/content.js:3399 | javascript:S1481 | Remove unused function 'labelText'. | 75599c74-a57f-4d30-9763-f83ec7b6f20c |
| 1706 | CODE_SMELL | INFO | extension/content.js:3411 | javascript:S1135 | Complete the task associated to this "TODO" comment. | db29fd73-84b7-4526-bec0-d2673a1e5056 |
| 1707 | CODE_SMELL | MINOR | extension/content.js:3619 | javascript:S7773 | Prefer `Number.isFinite` over `isFinite`. | 70ffbf55-5a31-4016-961d-82010921dd55 |
| 1708 | CODE_SMELL | MINOR | extension/content.js:3642 | javascript:S7773 | Prefer `Number.isFinite` over `isFinite`. | 972e7fa2-9bba-4d0a-88c4-94d805f73232 |
| 1709 | CODE_SMELL | CRITICAL | extension/content.js:4140 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 25 to the 15 allowed. | 802b9406-85e6-494d-b0fc-837274701612 |
| 1710 | CODE_SMELL | MAJOR | extension/content.js:4152 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 84bcf61a-fc37-42a4-ad48-34d6334729bd |
| 1711 | CODE_SMELL | MAJOR | extension/content.js:4153 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 67c8032a-6c28-4342-85a3-446b3d3a3fa0 |
| 1712 | CODE_SMELL | MAJOR | extension/content.js:4180 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 1195e22f-68a1-451d-be03-202a790e0a7c |
| 1713 | CODE_SMELL | MAJOR | extension/content.js:4502 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 31b17b34-f73f-4bc4-a3e9-78d4e19cc5d3 |
| 1714 | CODE_SMELL | MINOR | extension/content.js:5128 | javascript:S7771 | Prefer negative index over length minus index for `slice`. | 752db7ad-0731-4954-be0e-05dc527f7773 |
| 1715 | CODE_SMELL | MAJOR | extension/content.js:5136 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 2e973fbb-43c1-4f97-9ce9-fefea8e38159 |
| 1716 | CODE_SMELL | MAJOR | extension/content.js:5224 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | e5458b55-3b96-4b7e-bd9a-4c36049d211b |
| 1717 | CODE_SMELL | CRITICAL | extension/content.js:5265 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 25 to the 15 allowed. | 4b2e0770-53b1-4ee6-ae14-e9a4e23540d2 |
| 1718 | CODE_SMELL | MINOR | extension/content.js:5330 | javascript:S1481 | Remove unused function 'entryHasWebsiteKey'. | b4974e8e-123b-42ef-8960-2c7b09cf6cf0 |
| 1719 | CODE_SMELL | CRITICAL | extension/content.js:5425 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 22 to the 15 allowed. | 35f475e3-98bb-4458-b768-59e53df8d86a |
| 1720 | CODE_SMELL | MAJOR | extension/content.js:6726 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 52a4b376-0321-4dc5-b837-d7c6f1cbafe6 |
| 1721 | CODE_SMELL | MAJOR | extension/content.js:6928 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | d1b29cc0-faeb-47f4-b8a0-f809d53785e7 |
| 1722 | CODE_SMELL | MAJOR | extension/content.js:6930 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | dd311c73-d857-4743-9ee3-482f092a9a7b |
| 1723 | CODE_SMELL | MAJOR | extension/content.js:7408 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | c8b4b858-fae9-4c91-b039-64b1939cd2b6 |
| 1724 | CODE_SMELL | MAJOR | extension/content.js:7458 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | a03984a4-acaf-474d-8d3a-ce78d85d0f23 |
| 1725 | CODE_SMELL | CRITICAL | extension/content.js:7733 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 18 to the 15 allowed. | c92eb316-2c3e-45be-93d5-160444eaa4ac |
| 1726 | CODE_SMELL | MAJOR | extension/content.js:7739 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 20635c84-d650-462c-be9d-5776ff3a19ba |
| 1727 | CODE_SMELL | MAJOR | extension/content.js:7740 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 6b0d47a6-5725-4728-93c6-bb34994b4f1e |
| 1728 | CODE_SMELL | MINOR | extension/content.js:7839 | javascript:S7744 | The empty object is useless. | fc0126a3-28fb-4b9f-8d49-d01dba502ceb |
| 1729 | CODE_SMELL | MAJOR | extension/content.js:8235 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | f4d2db14-1e8f-49bc-b04e-5c5de438376e |
| 1730 | CODE_SMELL | MAJOR | extension/content.js:8534 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | fdbddcd7-fed9-4575-9325-d897189125b4 |
| 1731 | CODE_SMELL | MAJOR | extension/content.js:8536 | javascript:S1854 | Remove this useless assignment to variable "busy". | 1c7428fc-d946-4c91-a427-16a41f17ab6a |
| 1732 | CODE_SMELL | MINOR | extension/content.js:8536 | javascript:S1481 | Remove the declaration of the unused 'busy' variable. | 376570e4-9ce1-4356-b80d-77de725124f6 |
| 1733 | CODE_SMELL | MAJOR | extension/content.js:8567 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | 16ffef29-0817-4961-9ddf-0a6ccc4906dc |
| 1734 | CODE_SMELL | MAJOR | extension/content.js:9170 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 3a7afa24-376e-47f2-9550-910e422acc0c |
| 1735 | CODE_SMELL | MAJOR | extension/content.js:9414 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 48db4c27-9baf-416d-9629-82b844e3f1e7 |
| 1736 | CODE_SMELL | MAJOR | extension/content.js:9704 | javascript:S4144 | Update this function so that its implementation is not identical to the one on line 9227. | 1fe33f5a-da0b-4149-a9bb-fa26bc0649df |
| 1737 | CODE_SMELL | MAJOR | extension/content.js:10520 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | a42c2db7-69a1-461a-a212-f651073a443b |
| 1738 | CODE_SMELL | MAJOR | extension/content.js:10804 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | a335ac59-de45-4928-a82c-355643249202 |
| 1739 | CODE_SMELL | MAJOR | extension/content.js:11407 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 7609111f-30db-4921-b585-32793c7feeb7 |
| 1740 | CODE_SMELL | CRITICAL | extension/content.js:11825 | javascript:S3735 | Remove this use of the "void" operator. | 87be4b12-9c6d-4836-b7fb-4a1435ee0111 |
| 1741 | CODE_SMELL | MAJOR | extension/content.js:11959 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 35bfd0b8-f917-4029-a46c-65a7de159669 |
| 1742 | CODE_SMELL | MINOR | extension/fiber.js:154 | javascript:S4138 | Expected a `for-of` loop instead of a `for` loop with this simple iteration. | bb6792aa-b390-4233-81ee-22602d595ff0 |
| 1743 | CODE_SMELL | MINOR | extension/fiber.js:160 | javascript:S7758 | Prefer `String#codePointAt()` over `String#charCodeAt()`. | a3264d43-4f3c-4f8e-b388-68d6c8da17d7 |
| 1744 | CODE_SMELL | MINOR | extension/fiber.js:177 | javascript:S7764 | Prefer `globalThis` over `window`. | 306e9bd8-1342-4183-8bcc-883208a092b9 |
| 1745 | CODE_SMELL | MAJOR | extension/fiber.js:432 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 8734bc92-e563-49f6-a9f6-3693a5320673 |
| 1746 | CODE_SMELL | CRITICAL | extension/fiber.js:450 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 21 to the 15 allowed. | c9df1a24-8136-492e-a675-6494dacb1c93 |
| 1747 | CODE_SMELL | CRITICAL | extension/fiber.js:496 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | 2e562f19-d342-4c3b-be70-ebf17ca8f82e |
| 1748 | CODE_SMELL | MINOR | extension/fiber.js:501 | javascript:S4138 | Expected a `for-of` loop instead of a `for` loop with this simple iteration. | df93fd66-c688-422f-a8a6-3528eff642d8 |
| 1749 | CODE_SMELL | MINOR | extension/fiber.js:518 | javascript:S7773 | Prefer `Number.NaN` over `NaN`. | d0ecbfb7-f479-4a6d-b18e-1a4d490063bf |
| 1750 | CODE_SMELL | MAJOR | extension/fiber.js:575 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 641722f5-2726-4dba-bafb-2c0d64aa2581 |
| 1751 | CODE_SMELL | MAJOR | extension/fiber.js:672 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | ca136821-0ad7-4b06-8c0c-01b986e1c761 |
| 1752 | CODE_SMELL | MAJOR | extension/fiber.js:834 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 9e8bb7b6-c4e6-49a2-b514-3b0e555a97df |
| 1753 | CODE_SMELL | MAJOR | extension/fiber.js:948 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 0167b035-d19d-46b8-ae4e-a3f78a4f7a49 |
| 1754 | CODE_SMELL | MAJOR | extension/fiber.js:949 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 45d21acc-cc67-490f-a7e2-6492795a94bb |
| 1755 | CODE_SMELL | MINOR | extension/fiber.js:962 | javascript:S4138 | Expected a `for-of` loop instead of a `for` loop with this simple iteration. | 36b494d4-e441-4a11-9c31-a64002362902 |
| 1756 | CODE_SMELL | MINOR | extension/fiber.js:977 | javascript:S4138 | Expected a `for-of` loop instead of a `for` loop with this simple iteration. | 22809df0-3f06-4faf-aae6-ab7e9b5c11a9 |
| 1757 | CODE_SMELL | MINOR | extension/fiber.js:985 | javascript:S4138 | Expected a `for-of` loop instead of a `for` loop with this simple iteration. | f3707e6c-124e-4f40-81be-a317ef7a133e |
| 1758 | CODE_SMELL | MINOR | extension/fiber.js:991 | javascript:S4138 | Expected a `for-of` loop instead of a `for` loop with this simple iteration. | 0619d984-a899-43e6-b149-220ef943e138 |
| 1759 | CODE_SMELL | MAJOR | extension/fiber.js:995 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | f7267177-6cbc-423f-a8b9-07ce1ca882fa |
| 1760 | CODE_SMELL | MINOR | extension/fiber.js:1005 | javascript:S4138 | Expected a `for-of` loop instead of a `for` loop with this simple iteration. | ae17c220-688c-4366-bd5f-454c477cdbd0 |
| 1761 | CODE_SMELL | MINOR | extension/fiber.js:1016 | javascript:S4138 | Expected a `for-of` loop instead of a `for` loop with this simple iteration. | 9527d463-2735-47b7-b8d2-75fb9169fd38 |
| 1762 | CODE_SMELL | MINOR | extension/fiber.js:1127 | javascript:S4138 | Expected a `for-of` loop instead of a `for` loop with this simple iteration. | c569da69-7980-4f89-bfd8-5458f633fc8a |
| 1763 | CODE_SMELL | MINOR | extension/fiber.js:1135 | javascript:S4138 | Expected a `for-of` loop instead of a `for` loop with this simple iteration. | ebe1b2e9-8c6a-43c6-8a09-d7ce90957cfd |
| 1764 | CODE_SMELL | MAJOR | extension/fiber.js:1142 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 1122b988-e717-4320-830d-a4829dbfb2de |
| 1765 | CODE_SMELL | MAJOR | extension/fiber.js:1143 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 5aa15e5e-8c18-4adf-af1f-0e06f572ca98 |
| 1766 | CODE_SMELL | MAJOR | extension/fiber.js:1143 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | b768c7e3-6897-459d-972f-fa9c46b0f9e4 |
| 1767 | CODE_SMELL | MAJOR | extension/fiber.js:1144 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 929a91ca-a52a-4700-83a0-ba103a40f6f1 |
| 1768 | CODE_SMELL | MINOR | extension/fiber.js:1168 | javascript:S4138 | Expected a `for-of` loop instead of a `for` loop with this simple iteration. | 48cdc76c-2c0a-4d09-bad1-afd365b3bbfa |
| 1769 | CODE_SMELL | MINOR | extension/fiber.js:1184 | javascript:S4138 | Expected a `for-of` loop instead of a `for` loop with this simple iteration. | 626df8c6-abf7-46e8-95f5-6e091cb28290 |
| 1770 | CODE_SMELL | MAJOR | extension/fiber.js:1212 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | cb5b4711-6c61-44e0-8184-23a705f6ec4a |
| 1771 | CODE_SMELL | MAJOR | extension/fiber.js:1214 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 978bccfc-da05-4f89-afb9-62f987f22aea |
| 1772 | CODE_SMELL | MAJOR | extension/fiber.js:1214 | javascript:S6557 | Use 'String#startsWith' method instead. | a8610cbe-2694-4150-a001-8220f4131e97 |
| 1773 | CODE_SMELL | MINOR | extension/fiber.js:1367 | javascript:S4138 | Expected a `for-of` loop instead of a `for` loop with this simple iteration. | 5ed02016-5447-497f-a5d1-6125a02b3dfb |
| 1774 | CODE_SMELL | MINOR | extension/fiber.js:1604 | javascript:S4138 | Expected a `for-of` loop instead of a `for` loop with this simple iteration. | 930d074a-1544-4328-bfaf-648960c61d4b |
| 1775 | CODE_SMELL | MINOR | extension/fiber.js:2064 | javascript:S7755 | Prefer `.at(…)` over `[….length - index]`. | 929d4ca2-e513-4ac3-9e05-31c19c1f0f2f |
| 1776 | CODE_SMELL | MINOR | extension/fiber.js:2170 | javascript:S4138 | Expected a `for-of` loop instead of a `for` loop with this simple iteration. | f7c5fdd1-04eb-49b9-878f-98eb44713db6 |
| 1777 | CODE_SMELL | MAJOR | extension/fiber.js:2243 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 7e82089f-4533-49f6-83fc-d786b003d13b |
| 1778 | CODE_SMELL | MAJOR | extension/popup.js:89 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | d4a62fbc-14b7-477f-a75c-1d860ee69505 |
| 1779 | CODE_SMELL | MAJOR | scripts/fetch-ripgrep.mjs:87 | javascript:S7785 | Prefer top-level await over using a promise chain. | d941b8fe-cc4d-4d72-8c40-34d8281d1917 |
| 1780 | CODE_SMELL | MAJOR | scripts/fetch-tunnel-client.mjs:94 | javascript:S7785 | Prefer top-level await over using a promise chain. | acc47aee-dd6b-4fc7-8035-e6a42e9228e3 |
| 1781 | CODE_SMELL | CRITICAL | scripts/make-icon.mjs:42 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 31 to the 15 allowed. | 6f1ce00f-700c-40c5-ba6d-76f452331352 |
| 1782 | CODE_SMELL | CRITICAL | scripts/make-icon.mjs:110 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 30 to the 15 allowed. | 9db13556-fc79-42d6-9a5c-e215f855cc86 |
| 1783 | CODE_SMELL | CRITICAL | scripts/make-icon.mjs:189 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 46 to the 15 allowed. | 56558358-b82e-4bbc-b27e-c201180e6c41 |
| 1784 | CODE_SMELL | MAJOR | scripts/prepare-packaging-native.mjs:181 | javascript:S7785 | Prefer top-level await over using a promise chain. | b60e838a-66e0-4f29-a414-d90296c74ab1 |
| 1785 | CODE_SMELL | MINOR | src/main/agents.ts:460 | typescript:S6606 | Prefer using nullish coalescing operator (`??=`) instead of an assignment expression, as it is simpler to read. | c0d71bb9-6043-4afd-b85b-ae5eb11eb8e5 |
| 1786 | CODE_SMELL | MAJOR | src/main/agents.ts:3038 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 97bc397b-a0a5-4a1c-bad7-5ee4111ab101 |
| 1787 | CODE_SMELL | MAJOR | src/main/agents.ts:3959 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 02157218-b291-48ab-8062-110ae2dc667c |
| 1788 | CODE_SMELL | MINOR | src/main/agents.ts:4506 | typescript:S6551 | 'taken' will use Object's default stringification format ('[object Object]') when stringified. | eceaf262-d880-4eff-bc6a-09b0a0ce3660 |
| 1789 | CODE_SMELL | MAJOR | src/main/agents.ts:4682 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 8ff8d4c6-e559-45ab-be2c-0db2a3868c21 |
| 1790 | CODE_SMELL | MINOR | src/main/bridge.ts:136 | typescript:S3863 | './session/store.js' imported multiple times. | a745e2e9-54df-4e8b-8eb4-521d8651f071 |
| 1791 | CODE_SMELL | MINOR | src/main/bridge.ts:218 | typescript:S3863 | './session/continuation.js' imported multiple times. | 7edadb6d-f77a-445a-ab1d-8228107b7c72 |
| 1792 | CODE_SMELL | MINOR | src/main/bridge.ts:1157 | typescript:S7773 | Prefer `Number.NaN` over `NaN`. | 0c4e422e-dc61-4290-b2d0-7391525ef921 |
| 1793 | CODE_SMELL | MAJOR | src/main/bridge.ts:3679 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 52237f16-9b09-4cf7-b1f3-23bd5f8d49cd |
| 1794 | CODE_SMELL | MINOR | src/main/bridge.ts:10203 | typescript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | 67ca4f26-0dc9-4123-a796-342c3a18ed0c |
| 1795 | CODE_SMELL | CRITICAL | src/main/codex/apply-patch/file-update.ts:117 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 41 to the 15 allowed. | ccde4006-cf76-4f99-af60-8a1695641ee4 |
| 1796 | CODE_SMELL | MINOR | src/main/codex/apply-patch/file-update.ts:163 | typescript:S7771 | Prefer negative index over length minus index for `slice`. | 3df1a638-aeaa-41e6-8ab9-65a810fe3534 |
| 1797 | CODE_SMELL | MINOR | src/main/codex/apply-patch/file-update.ts:164 | typescript:S7771 | Prefer negative index over length minus index for `slice`. | a3372536-4f50-45e8-a164-352a12988909 |
| 1798 | CODE_SMELL | CRITICAL | src/main/codex/apply-patch/index.ts:579 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 33 to the 15 allowed. | d2086fc4-d709-4f02-8abf-bdd77969d122 |
| 1799 | CODE_SMELL | CRITICAL | src/main/codex/apply-patch/invocation.ts:117 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | d89cf714-418a-47b8-a55c-27d27ce615fd |
| 1800 | CODE_SMELL | MINOR | src/main/codex/apply-patch/parser.ts:116 | typescript:S7771 | Prefer negative index over length minus index for `slice`. | f75f3f74-3965-4afc-b770-85bf9d3cbd23 |
| 1801 | CODE_SMELL | MAJOR | src/main/codex/apply-patch/streaming-parser.ts:48 | typescript:S2933 | Member 'hunks' is never reassigned; mark it as `readonly`. | 20387488-a4c5-4d9e-b1f7-955a3af78792 |
| 1802 | CODE_SMELL | MAJOR | src/main/codex/apply-patch/streaming-parser.ts:98 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 4804a3cc-adcf-4166-8696-186c3521786b |
| 1803 | CODE_SMELL | MAJOR | src/main/codex/apply-patch/streaming-parser.ts:107 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 7bd23495-bf02-4a43-880e-0a107ba5844d |
| 1804 | CODE_SMELL | CRITICAL | src/main/codex/apply-patch/streaming-parser.ts:164 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | b10b14a6-22cd-4c14-9b37-5a0bbbd8db6c |
| 1805 | CODE_SMELL | MAJOR | src/main/codex/apply-patch/streaming-parser.ts:181 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 43a68fc5-48dd-4568-b22d-8abde6a2064c |
| 1806 | CODE_SMELL | MAJOR | src/main/codex/apply-patch/streaming-parser.ts:187 | typescript:S1871 | This case's code block is the same as the block for the case on line 174. | 9ec42bfc-7e99-46b5-83aa-96f86d0c9f7e |
| 1807 | CODE_SMELL | MAJOR | src/main/codex/apply-patch/streaming-parser.ts:196 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | b5c482d5-4b09-4cdf-aaf2-acfd4967d278 |
| 1808 | CODE_SMELL | MAJOR | src/main/codex/apply-patch/streaming-parser.ts:226 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | a90023e4-d429-4769-b201-d12e5d56e9ed |
| 1809 | CODE_SMELL | MINOR | src/main/codex/apply-patch/text-file.ts:48 | typescript:S7758 | Prefer `String#codePointAt()` over `String#charCodeAt()`. | 0bc1d780-d081-48c7-b32b-0ad91f72a69c |
| 1810 | CODE_SMELL | MINOR | src/main/codex/apply-patch/text-file.ts:49 | typescript:S7758 | Prefer `String#codePointAt()` over `String#charCodeAt()`. | 5821030c-7051-487d-87dc-fbcad2f2d51a |
| 1811 | CODE_SMELL | MINOR | src/main/codex/exec-output.ts:59 | typescript:S7778 | Do not call `Array#push()` multiple times. | 3fd3e99e-9f5e-4ac6-9add-b9d0b3f83b8b |
| 1812 | CODE_SMELL | MINOR | src/main/codex/exec-output.ts:64 | typescript:S7778 | Do not call `Array#push()` multiple times. | 592d8798-60fa-4c99-9d87-5d94630b7405 |
| 1813 | CODE_SMELL | CRITICAL | src/main/codex/filesystem.ts:338 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 78 to the 15 allowed. | e6d671f9-0f22-4555-a091-269c22899cff |
| 1814 | CODE_SMELL | MAJOR | src/main/codex/head-tail-buffer.ts:14 | typescript:S2933 | Member 'head' is never reassigned; mark it as `readonly`. | 19e1e43c-f1c7-4ad8-a933-dbe46ef6191e |
| 1815 | CODE_SMELL | MINOR | src/main/codex/read-backend.ts:92 | typescript:S7758 | Prefer `String#codePointAt()` over `String#charCodeAt()`. | c3792e7b-2446-4eb4-9315-c02f0cc120b6 |
| 1816 | CODE_SMELL | CRITICAL | src/main/codex/read-backend.ts:100 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | 8a0b5136-5cb1-48c6-a63b-97724261aeb8 |
| 1817 | CODE_SMELL | MINOR | src/main/codex/read-backend.ts:117 | typescript:S7755 | Prefer `.at(…)` over `[….length - index]`. | f12ae964-d3ba-48d8-872a-9b03292f4f89 |
| 1818 | CODE_SMELL | MINOR | src/main/codex/shell.ts:88 | typescript:S6644 | Unnecessary use of conditional expression for default assignment. | 8a1dadad-4de4-461e-822a-3242ddcd1d57 |
| 1819 | CODE_SMELL | MINOR | src/main/codex/shell.ts:282 | typescript:S7776 | `POWERSHELL_FLAGS` should be a `Set`, and use `POWERSHELL_FLAGS.has()` to check existence or non-existence. | 2a31651b-81c6-42f0-ba70-065575bf6728 |
| 1820 | CODE_SMELL | MINOR | src/main/codex/shell.ts:325 | typescript:S7771 | Prefer negative index over length minus index for `slice`. | b2fe866c-7d7d-4249-ae12-24fd9d775da2 |
| 1821 | CODE_SMELL | MINOR | src/main/codex/truncate.ts:25 | typescript:S7758 | Prefer `String#codePointAt()` over `String#charCodeAt()`. | def6fc06-be25-4ccb-afd6-d1615cadd5b9 |
| 1822 | CODE_SMELL | MAJOR | src/main/codex/truncate.ts:53 | typescript:S2301 | Provide multiple methods instead of using "useTokens" to determine which action to take. | 4da79612-f582-4a0c-ac60-04c7cb367e05 |
| 1823 | CODE_SMELL | MINOR | src/main/codex/unified-exec-constants.ts:23 | typescript:S7758 | Prefer `String.fromCodePoint()` over `String.fromCharCode()`. | 89d9d96f-07b9-4b61-8052-ed8c1232d4a4 |
| 1824 | CODE_SMELL | MAJOR | src/main/codex/unified-exec.ts:132 | typescript:S2933 | Member 'waiters' is never reassigned; mark it as `readonly`. | 67739c4c-e5c0-439a-b9f0-72346bf96d22 |
| 1825 | CODE_SMELL | CRITICAL | src/main/codex/unified-exec.ts:317 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 23 to the 15 allowed. | e0673f90-7d2d-410c-8a38-4e031da59d9c |
| 1826 | CODE_SMELL | MINOR | src/main/codex/unified-exec.ts:630 | typescript:S7778 | Do not call `Array#push()` multiple times. | 45964886-17db-4e5d-bd05-648cdf634109 |
| 1827 | CODE_SMELL | MAJOR | src/main/codex/unified-exec.ts:927 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 99a414a1-4767-4a65-a554-c88dd827f0c2 |
| 1828 | CODE_SMELL | CRITICAL | src/main/computer/index.ts:1168 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 18 to the 15 allowed. | 090014b7-7618-476b-bacc-82e5a0450ec9 |
| 1829 | CODE_SMELL | MINOR | src/main/diffstat.ts:33 | typescript:S7755 | Prefer `.at(…)` over `[….length - index]`. | 74217c74-b38f-41bb-93ff-220c043fcd92 |
| 1830 | CODE_SMELL | CRITICAL | src/main/diffstat.ts:65 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | cdc791d6-c56b-49a1-8e2d-33394fa6c670 |
| 1831 | CODE_SMELL | MINOR | src/main/exec-hints.ts:158 | typescript:S4323 | Replace this union type with a type alias. | 85bbdb4c-588a-4efc-a263-87d2c1a61605 |
| 1832 | CODE_SMELL | MINOR | src/main/exec-hints.ts:425 | typescript:S7755 | Prefer `.at(…)` over `[….length - index]`. | 9df1a91a-c520-4609-9969-cc840ac53669 |
| 1833 | CODE_SMELL | MINOR | src/main/exec-hints.ts:507 | typescript:S7755 | Prefer `.at(…)` over `[….length - index]`. | bde60dc1-27f5-4409-a0a7-0e0fb13a2892 |
| 1834 | CODE_SMELL | CRITICAL | src/main/exec-hints.ts:753 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | 83df1994-dba5-4208-9d8c-e584ee8ec14f |
| 1835 | CODE_SMELL | CRITICAL | src/main/exec-hints.ts:889 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 34 to the 15 allowed. | 95823c3e-e271-4fd4-a69a-3a103b0289c4 |
| 1836 | CODE_SMELL | CRITICAL | src/main/exec-hints.ts:942 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 41 to the 15 allowed. | 9944e397-1063-4ff3-be05-956b513fa874 |
| 1837 | CODE_SMELL | MAJOR | src/main/exec-hints.ts:988 | typescript:S5869 | Remove duplicates in this character class. | 0ed9fb2f-1288-42ef-931f-09a4971c7b20 |
| 1838 | CODE_SMELL | CRITICAL | src/main/exec-hints.ts:1261 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 36 to the 15 allowed. | 7200d61d-3f87-4947-a420-b358ebd5cf07 |
| 1839 | CODE_SMELL | CRITICAL | src/main/exec-hints.ts:1392 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | d59ace6f-6dab-4201-9398-9dcd1108355d |
| 1840 | CODE_SMELL | MINOR | src/main/exec.ts:380 | typescript:S7758 | Prefer `String.fromCodePoint()` over `String.fromCharCode()`. | a6ed6262-bdaf-490d-a518-09d0217b393c |
| 1841 | CODE_SMELL | MINOR | src/main/fsops.ts:112 | typescript:S7758 | Prefer `String#codePointAt()` over `String#charCodeAt()`. | a4a3c804-8931-4367-8960-721aa0a18bd5 |
| 1842 | CODE_SMELL | CRITICAL | src/main/fsops.ts:210 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | 7210a80c-b2e3-4349-8d06-05349fe0f8fe |
| 1843 | CODE_SMELL | MINOR | src/main/fsops.ts:278 | typescript:S7755 | Prefer `.at(…)` over `[….length - index]`. | 17e3243d-9a1a-445b-8ffc-1ef271de3a89 |
| 1844 | CODE_SMELL | MINOR | src/main/fsops.ts:404 | typescript:S7755 | Prefer `.at(…)` over `[….length - index]`. | a874597f-22ca-4cfb-bc56-4579eff59bda |
| 1845 | CODE_SMELL | CRITICAL | src/main/fsops.ts:441 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 22 to the 15 allowed. | 77ec8e3e-4252-4fa4-bb17-c0b0005b1171 |
| 1846 | CODE_SMELL | CRITICAL | src/main/fsops.ts:589 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 38 to the 15 allowed. | 555b8736-a0c2-4349-b831-5eb6cb9b749f |
| 1847 | CODE_SMELL | MAJOR | src/main/goal.ts:1339 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 66d5cf0f-0ac6-476e-af82-1a24b4d9f942 |
| 1848 | CODE_SMELL | CRITICAL | src/main/goal.ts:2391 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 23 to the 15 allowed. | 84ad0546-3e21-4feb-a736-cb23eb69a7fe |
| 1849 | CODE_SMELL | MAJOR | src/main/goal.ts:2503 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 1e84254c-9e2f-485b-b084-c49ed970b4c5 |
| 1850 | CODE_SMELL | MINOR | src/main/goal.ts:2752 | typescript:S7758 | Prefer `String#codePointAt()` over `String#charCodeAt()`. | a42a4f16-4fb0-4d6d-bc30-36a892a751ce |
| 1851 | CODE_SMELL | MINOR | src/main/ipc.ts:117 | typescript:S3863 | './session/store.js' imported multiple times. | ccec9703-9821-489a-8647-dedb8a598a9b |
| 1852 | CODE_SMELL | CRITICAL | src/main/mcp/kernel.ts:476 | typescript:S3735 | Remove this use of the "void" operator. | 2ca70f2f-8bb1-49ce-9a68-69e143e7be8a |
| 1853 | CODE_SMELL | MAJOR | src/main/mcp/kernel.ts:694 | typescript:S107 | Async function 'dispatchTracked' has too many parameters (8). Maximum allowed is 7. | 879c0418-e84b-4567-9d88-b811273bf5a4 |
| 1854 | CODE_SMELL | CRITICAL | src/main/mcp/kernel.ts:1612 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | 3cf9b48c-b730-4916-b543-33c4f783d23e |
| 1855 | CODE_SMELL | MINOR | src/main/mcp/server.ts:295 | typescript:S6606 | Prefer using nullish coalescing operator (`??=`) instead of an assignment expression, as it is simpler to read. | a168de9f-fab7-4a3a-a089-7b33947883dd |
| 1856 | CODE_SMELL | MAJOR | src/main/mcp/server.ts:380 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 67b73fdb-51a1-47d5-9112-da059229799b |
| 1857 | CODE_SMELL | MAJOR | src/main/mcp/server.ts:384 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | effda93f-838a-415d-8b7a-2d6d033276c9 |
| 1858 | CODE_SMELL | CRITICAL | src/main/mcp/session-tool.ts:469 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 29 to the 15 allowed. | fe15ddc9-9b99-4f6a-9f2c-9cdd6fa0c6f7 |
| 1859 | CODE_SMELL | CRITICAL | src/main/mcp/session-tool.ts:578 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 28 to the 15 allowed. | a5b96e3c-17c4-4881-a2db-64a848c3e384 |
| 1860 | CODE_SMELL | MAJOR | src/main/mcp/session-tool.ts:714 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 3743d7b0-a202-47a1-b14e-38b3e438be14 |
| 1861 | CODE_SMELL | MINOR | src/main/mcp/session-tool.ts:1121 | typescript:S7758 | Prefer `String#codePointAt()` over `String#charCodeAt()`. | e6d352c5-fa44-4523-8278-82c73eb56b4e |
| 1862 | CODE_SMELL | CRITICAL | src/main/mcp/tools-core.ts:618 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 30 to the 15 allowed. | 495db622-5a74-4477-96e5-b67c8ce402c9 |
| 1863 | CODE_SMELL | CRITICAL | src/main/mcp/tools-core.ts:2047 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | e87eccfc-9f94-42b9-bc46-b46325feaa4e |
| 1864 | CODE_SMELL | MINOR | src/main/mcp/tools-core.ts:2572 | typescript:S7763 | Use `export…from` to re-export `ToolResult`. | a95127a3-3fe6-4389-975c-9c4af2c7ecb7 |
| 1865 | CODE_SMELL | MINOR | src/main/mcp/tools.ts:84 | typescript:S7763 | Use `export…from` to re-export `toVirtualPath`. | e56ac72e-1f1d-44e0-a6e1-2d9a6991fd13 |
| 1866 | CODE_SMELL | MINOR | src/main/mcp/tools.ts:85 | typescript:S7763 | Use `export…from` to re-export `ToolContext`. | ec53ae7e-cbc3-432e-b874-dfe46629d74e |
| 1867 | CODE_SMELL | MAJOR | src/main/search.ts:101 | typescript:S4782 | Consider removing 'undefined' type or '?' specifier, one of them is redundant. | 8b56c4fb-74f2-4a41-825d-b2e93688b0bc |
| 1868 | CODE_SMELL | MINOR | src/main/search.ts:319 | typescript:S6606 | Prefer using nullish coalescing operator (`??=`) instead of an assignment expression, as it is simpler to read. | fa632fe2-cded-4576-ae05-a58214b135c7 |
| 1869 | CODE_SMELL | CRITICAL | src/main/search.ts:325 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 56 to the 15 allowed. | cfa4ee06-38ab-4ccf-9fdb-0448bef0dfb2 |
| 1870 | CODE_SMELL | CRITICAL | src/main/search.ts:532 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 24 to the 15 allowed. | 6a9f5b30-9e1e-4654-980d-f04237123d71 |
| 1871 | CODE_SMELL | MINOR | src/main/session/continuation.ts:510 | typescript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | 87f6a92f-b2a0-40eb-85ed-2693507bee3f |
| 1872 | CODE_SMELL | MAJOR | src/main/session/continuation.ts:1575 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | b65a00f2-8614-4049-a4ef-8057411164c8 |
| 1873 | CODE_SMELL | MINOR | src/main/session/correlation.ts:419 | typescript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | 1210f929-d35b-4c5d-b2fe-a713bb43c23a |
| 1874 | CODE_SMELL | MAJOR | src/main/session/recorder.ts:367 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | ea3c3438-8e8a-483f-98cb-56ea1a188e6a |
| 1875 | CODE_SMELL | MAJOR | src/main/session/recorder.ts:410 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 37ab8c65-7aed-41ae-8fe8-3daa307ee03d |
| 1876 | CODE_SMELL | CRITICAL | src/main/session/recorder.ts:851 | typescript:S3735 | Remove this use of the "void" operator. | 9e1e1f0b-6fb6-4f4f-bcfa-82bf7e189d8d |
| 1877 | CODE_SMELL | CRITICAL | src/main/session/recorder.ts:852 | typescript:S3735 | Remove this use of the "void" operator. | d101bed0-c631-469a-9f54-04d7fc0281f0 |
| 1878 | CODE_SMELL | CRITICAL | src/main/session/recorder.ts:862 | typescript:S3735 | Remove this use of the "void" operator. | 880501b1-c4b7-43a8-83be-5eb461c79988 |
| 1879 | CODE_SMELL | CRITICAL | src/main/session/recorder.ts:863 | typescript:S3735 | Remove this use of the "void" operator. | 889a8aef-62f6-4b96-bdc7-e7097812a116 |
| 1880 | CODE_SMELL | CRITICAL | src/main/session/recorder.ts:864 | typescript:S3735 | Remove this use of the "void" operator. | c4736939-6727-4023-8897-c65501aa092d |
| 1881 | CODE_SMELL | MINOR | src/main/session/recorder.ts:1104 | typescript:S4325 | This assertion is unnecessary since it does not change the type of the expression. | b18bc1bd-6c19-4ac8-b975-c4278e9fe93c |
| 1882 | CODE_SMELL | MINOR | src/main/session/recorder.ts:2780 | typescript:S7763 | Use `export…from` to re-export `SessionSummary`. | 1bd11d7e-cd9a-401d-8ef8-0446f2f49906 |
| 1883 | CODE_SMELL | MINOR | src/main/session/recorder.ts:2780 | typescript:S7763 | Use `export…from` to re-export `SessionEvent`. | 803b48ff-892b-48b0-88d4-5b3748809dda |
| 1884 | CODE_SMELL | MAJOR | src/main/session/store.ts:1376 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | e7e11fb9-be3a-40f1-b038-1814bc748771 |
| 1885 | CODE_SMELL | MAJOR | src/main/session/summarize.ts:246 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | a2a45880-3b72-4813-9f1e-73ad49995a71 |
| 1886 | CODE_SMELL | MINOR | src/main/session/summarize.ts:265 | typescript:S7770 | arrow function is equivalent to `String`. Use `String` directly. | 384ff6c8-11ed-4b6f-a17d-f5d59f54a229 |
| 1887 | CODE_SMELL | MAJOR | src/main/session/summarize.ts:369 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 4b957409-ed48-4ca8-b88b-fa38c8075e1d |
| 1888 | CODE_SMELL | MAJOR | src/main/tunnel/health.ts:56 | typescript:S6557 | Use 'String#startsWith' method instead. | 3b6be867-f5e5-429f-9a56-1115919f5edd |
| 1889 | CODE_SMELL | MAJOR | src/main/tunnel/health.ts:56 | typescript:S6557 | Use 'String#startsWith' method instead. | b3dcc04c-9b15-4d65-adb2-77005d9999a5 |
| 1890 | CODE_SMELL | MINOR | src/main/tunnel/index.ts:571 | typescript:S6551 | 'event['level'] ?? ''' will use Object's default stringification format ('[object Object]') when stringified. | 5f3c4adb-d3d4-42d4-b975-9f1a5a8ad3f0 |
| 1891 | CODE_SMELL | MINOR | src/main/tunnel/index.ts:572 | typescript:S6551 | 'event['msg'] ?? 'tunnel-client event'' will use Object's default stringification format ('[object Object]') when stringified. | 4396c4f3-89b3-4d2d-80c9-9fe6c71b872d |
| 1892 | CODE_SMELL | MINOR | src/main/tunnel/index.ts:582 | typescript:S6551 | 'event['error']' will use Object's default stringification format ('[object Object]') when stringified. | 98752978-293e-4872-8e1f-0e081bb7f222 |
| 1893 | CODE_SMELL | MINOR | src/preload/index.ts:38 | typescript:S3863 | '../shared/session.js' imported multiple times. | ec56e0e5-563c-46d6-a52b-70b6d29933f8 |
| 1894 | CODE_SMELL | MINOR | src/renderer/chat.ts:85 | typescript:S7764 | Prefer `globalThis` over `window`. | 747d1244-d9d3-48ad-91fe-de4de003e3da |
| 1895 | CODE_SMELL | MINOR | src/renderer/dom.ts:133 | typescript:S7764 | Prefer `globalThis` over `window`. | 7f2175c3-424e-4256-9a24-5e03294c2580 |
| 1896 | CODE_SMELL | MINOR | src/renderer/dom.ts:134 | typescript:S7764 | Prefer `globalThis` over `window`. | 9b097604-bc59-440a-8c6f-7daee17e8881 |
| 1897 | CODE_SMELL | MINOR | src/renderer/main.ts:60 | typescript:S7764 | Prefer `globalThis` over `window`. | de45149f-4901-4997-9f1a-a9727234a5eb |
| 1898 | CODE_SMELL | MINOR | src/renderer/main.ts:1892 | typescript:S7778 | Do not call `Array#push()` multiple times. | 93aadfff-1e58-4525-8eae-d5e85ae4a2e4 |
| 1899 | CODE_SMELL | MINOR | src/renderer/main.ts:2000 | typescript:S7764 | Prefer `globalThis` over `window`. | 11c14504-86c5-4840-8215-2bcb02d73003 |

## 安全熱點（獨立於一般問題）

- 總數：93
- [目前分支安全熱點頁](http://localhost:32769/security_hotspots?id=chat-on-steroids&branch=sonarqube%2Ffixes)
- 明細未取得：Sonar API api/hotspots/search failed (HTTP 403). 不可據此判定沒有熱點；可使用已授權登入的 UI 補充。

Quality Gate OK、零未解決問題或零漏洞，皆不代表所有安全熱點已人工審查。
