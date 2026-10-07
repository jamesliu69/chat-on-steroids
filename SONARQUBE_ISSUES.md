# Chat On Steroids — SonarQube 分析報告

- 分析分支：merge/upstream-ad8f02dc-20261007
- 分析時間：2026-10-07 22:13:14 +08:00
- 匯出時間：2026-10-07 22:14:39 +08:00
- 匯出時本機 Git HEAD：48f7408bd602cb60a94447445c2322d348bf6eef
- 本機工作目錄：有未提交變更；HEAD 不代表全部受掃描檔案
- Sonar 預設分支：main；最近分析：2026-10-07 21:45:23 +08:00
- [目前分支全部程式碼總覽](http://localhost:32769/dashboard?id=chat-on-steroids&branch=merge%2Fupstream-ad8f02dc-20261007&codeScope=overall)
- [目前分支完整問題清單](http://localhost:32769/project/issues?id=chat-on-steroids&branch=merge%2Fupstream-ad8f02dc-20261007&issueStatuses=OPEN%2CCONFIRMED)
- 本次 CE task：c0beed70-0037-4146-8dd7-40831f37ef6b；狀態：SUCCESS；analysis ID：74f034e3-9a55-4234-a270-97eabd8b34d3
- 掃描開始時 Git HEAD：48f7408bd602cb60a94447445c2322d348bf6eef；未提交變更：True
- 無法核對伺服器 revision；本機 HEAD 僅供參考。Sonar API api/project_analyses/search failed (HTTP 403).

專案列表顯示預設分支，可能與本報告不同。此報告只對應上方目前 checkout 的分支。
覆蓋率依伺服器已匯入的資料；本流程不執行測試。缺少覆盖率資料或 0.0% 不代表測試已通過。

## 指標

| 項目 | 數值 |
| --- | ---: |
| Quality Gate | OK |
| OPEN / CONFIRMED 問題 | 3617 |
| bugs | 30 |
| vulnerabilities | 0 |
| code_smells | 3587 |
| coverage | 未取得 |
| duplicated_lines_density | 0.7% |
| ncloc | 116697 |
| security_hotspots | 93 |
| security_hotspots_reviewed | 0.0% |

## 完整未解決問題清單

| # | 類型 | 嚴重程度 | 檔案:行 | 規則 | 問題 | Issue Key |
| ---: | --- | --- | --- | --- | --- | --- |
| 1 | CODE_SMELL | CRITICAL | extension/background.js:301 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 35 to the 15 allowed. | 598e8b19-ba7c-4bc6-93d0-bcaa23d91049 |
| 2 | CODE_SMELL | CRITICAL | extension/background.js:1971 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 156 to the 15 allowed. | 39c211a1-cc94-4a82-8d0a-c94b03c27896 |
| 3 | CODE_SMELL | MINOR | extension/background.js:3190 | javascript:S1940 | Use the opposite operator (&gt;=) instead. | f31afea1-4099-4379-8440-f65b7c2b2bd4 |
| 4 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:1833 | javascript:S7780 | `String.raw` should be used to avoid escaping `\`. | ebe634f2-adb2-43b4-927d-c69d25320c3d |
| 5 | CODE_SMELL | MAJOR | scripts/verify-ui.mjs:41 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 849f45ff-adcb-4076-abaf-42627fab44bf |
| 6 | CODE_SMELL | MAJOR | scripts/verify-ui.mjs:41 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 8f2f211e-345e-462c-9794-7c3c09c5faa4 |
| 7 | CODE_SMELL | MAJOR | scripts/verify-ui.mjs:41 | javascript:S4624 | Refactor this code to not use nested template literals. | e60bd1d2-b8fb-4ee5-bebf-e778b970422d |
| 8 | CODE_SMELL | MAJOR | src/renderer/styles.css:569 | css:S4666 | Unexpected duplicate selector ".whats-new-tile .ico", first used at line 567 | 4cada67f-e66d-448c-b384-8d9e360b6fb9 |
| 9 | CODE_SMELL | MINOR | src/main/config.ts:689 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 551c9d6e-26d7-4827-8f4b-09eaae4025b1 |
| 10 | CODE_SMELL | CRITICAL | scripts/verify-whats-new.cjs:13 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 26 to the 15 allowed. | fceb019f-fc86-4c68-bac5-c27cd72e2897 |
| 11 | CODE_SMELL | MINOR | src/renderer/whats-new.ts:77 | typescript:S7764 | Prefer `globalThis` over `window`. | d9d7af2f-8613-4650-8cd7-7d47bd182447 |
| 12 | CODE_SMELL | MAJOR | scripts/verify-whats-new.cjs:63 | javascript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | 678f8496-9310-4e02-96c9-e74b27c4a64c |
| 13 | CODE_SMELL | MINOR | src/renderer/whats-new.ts:76 | typescript:S7764 | Prefer `globalThis` over `window`. | 5d3f71ed-00fe-453f-b0db-0457b6a5767a |
| 14 | CODE_SMELL | MINOR | src/renderer/whats-new.ts:82 | typescript:S7764 | Prefer `globalThis` over `window`. | d4c68315-0804-4c03-b21b-be98147dc574 |
| 15 | CODE_SMELL | MINOR | src/renderer/whats-new.ts:99 | typescript:S7764 | Prefer `globalThis` over `window`. | 58e4e5ac-aee3-4f8a-9de6-e45ef2c207a6 |
| 16 | CODE_SMELL | MINOR | src/renderer/whats-new.ts:104 | typescript:S7764 | Prefer `globalThis` over `window`. | 8cab12be-6a41-4c82-84b7-98a4d6d9f35c |
| 17 | CODE_SMELL | MINOR | src/renderer/whats-new.ts:110 | typescript:S7764 | Prefer `globalThis` over `window`. | d52cf331-88be-4531-9483-1232d10bf2bf |
| 18 | CODE_SMELL | MAJOR | extension/background.js:1321 | javascript:S107 | Function 'commandAckPayload' has too many parameters (8). Maximum allowed is 7. | 9b912283-021a-403d-9465-566dcdeb1896 |
| 19 | CODE_SMELL | MAJOR | extension/background.js:1406 | javascript:S107 | Async function 'ackCommand' has too many parameters (9). Maximum allowed is 7. | 031295a1-25e5-4da8-bfeb-697be0efa6aa |
| 20 | CODE_SMELL | MAJOR | extension/background.js:1406 | javascript:S1788 | Default parameters should be last. | 47560d1b-ab05-4d9a-95a3-2786ae1e1742 |
| 21 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:3131 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | acad7477-45a5-4fdc-b0e5-0dcbc6a39af5 |
| 22 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:3143 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 3b45ede4-05f3-4cb8-938a-5ba4387eba3f |
| 23 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:3171 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | f7686a4e-0d6e-4e12-8bd8-aab1ec0641f4 |
| 24 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:3186 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 7bce6699-ab56-469e-bb51-c60982da7c98 |
| 25 | CODE_SMELL | CRITICAL | extension/content.js:11319 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 90 to the 15 allowed. | 349a6e21-60de-4cec-ac1e-c25cdf84a7ec |
| 26 | CODE_SMELL | CRITICAL | src/main/bridge.ts:2097 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 1486 to the 15 allowed. | 8cbc2ca9-16a2-40cb-8f59-2204bacba4d8 |
| 27 | CODE_SMELL | CRITICAL | src/main/goal.ts:1848 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 18 to the 15 allowed. | e880a4e3-dbbb-42bf-afc3-63a6ad86a48d |
| 28 | CODE_SMELL | MINOR | src/renderer/chat.ts:6040 | typescript:S7764 | Prefer `globalThis` over `window`. | a5f779ae-7a23-4b82-b017-4a477cf02120 |
| 29 | CODE_SMELL | MINOR | src/renderer/chat.ts:6044 | typescript:S7764 | Prefer `globalThis` over `window`. | 015c91a5-f919-4fcb-9cde-dc88e085ca4a |
| 30 | CODE_SMELL | CRITICAL | scripts/verify-recovery-layout.cjs:18 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 48 to the 15 allowed. | 42b2b9cb-ab9b-4106-bd4a-ce0743a71ac6 |
| 31 | CODE_SMELL | MAJOR | scripts/verify-recovery-layout.cjs:49 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | c8f2c8be-e488-406c-9453-a62632a9f3dd |
| 32 | CODE_SMELL | CRITICAL | src/main/bridge.ts:7081 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 86 to the 15 allowed. | 310d0a7e-65a6-439f-a8ea-c0c1af2425cd |
| 33 | CODE_SMELL | CRITICAL | src/main/bridge.ts:8450 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 32 to the 15 allowed. | 5a44e916-0704-418a-abe4-05d2dbf558db |
| 34 | CODE_SMELL | MAJOR | src/main/bridge.ts:8481 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 120b5822-6ead-4f26-a6d2-bc8c81770650 |
| 35 | CODE_SMELL | CRITICAL | src/main/bridge.ts:8501 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 66 to the 15 allowed. | f1c65321-499e-4289-a9a9-512cf7d1eecd |
| 36 | CODE_SMELL | MAJOR | src/main/bridge.ts:8555 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 13a4723a-1774-4789-9606-016947d66b3d |
| 37 | CODE_SMELL | CRITICAL | src/main/goal.ts:484 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 31 to the 15 allowed. | 4d447466-4289-42de-880d-6de700c7f618 |
| 38 | CODE_SMELL | MAJOR | src/main/goal.ts:516 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | b3026e97-997d-40d5-a426-003bfadc2b32 |
| 39 | CODE_SMELL | CRITICAL | src/main/goal.ts:556 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | ec1f1e5e-37b1-46c9-816d-2e15ccf3971e |
| 40 | CODE_SMELL | MINOR | src/main/goal.ts:570 | typescript:S7735 | Unexpected negated condition. | 069e3c3a-2b3b-4a5a-b646-c1aa01afdca6 |
| 41 | CODE_SMELL | MAJOR | src/main/goal.ts:608 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | eaec8f76-8664-4639-90c4-ad83fc177e4f |
| 42 | CODE_SMELL | MAJOR | src/main/goal.ts:632 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 256d971c-6bf9-465a-b3e7-829e090bf16e |
| 43 | CODE_SMELL | MAJOR | src/main/goal.ts:636 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 0da6e91e-c9cf-4e7e-b9df-a0521090079c |
| 44 | CODE_SMELL | CRITICAL | src/main/goal.ts:655 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 30 to the 15 allowed. | 928471f8-9555-4114-96f5-aaf77cfd774c |
| 45 | CODE_SMELL | MAJOR | src/main/session/input.ts:543 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | f6a6d7db-d4e3-4411-8e37-224c094330b3 |
| 46 | CODE_SMELL | MAJOR | src/main/session/input.ts:554 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 68582aae-17a5-40d8-a2a6-c33e9fe8f8b5 |
| 47 | CODE_SMELL | MAJOR | src/main/session/input.ts:880 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | ba18face-a72e-40c1-8ed8-3c774203877f |
| 48 | CODE_SMELL | MAJOR | src/main/session/input.ts:883 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 93b944c4-50dc-49a4-8055-43b52d1b5769 |
| 49 | CODE_SMELL | MINOR | src/main/session/input.ts:894 | typescript:S7735 | Unexpected negated condition. | be4dbb75-3c50-472e-9a26-91c3f6b3f7aa |
| 50 | CODE_SMELL | CRITICAL | src/main/session/input.ts:1147 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 26 to the 15 allowed. | 14c4134f-b169-4bdd-81b5-6f5c603b83d2 |
| 51 | CODE_SMELL | CRITICAL | src/renderer/recovery.ts:14 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 57 to the 15 allowed. | a8d8ff7a-a32c-4488-b227-99535d7c626a |
| 52 | CODE_SMELL | MAJOR | src/renderer/recovery.ts:16 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 2b4f9696-c865-4896-8616-3f03dfd4bc84 |
| 53 | CODE_SMELL | MAJOR | src/renderer/recovery.ts:16 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | ba020411-7dd8-4fb6-b828-0833fb7e89aa |
| 54 | CODE_SMELL | CRITICAL | src/renderer/recovery.ts:30 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 28 to the 15 allowed. | fe986cab-5b47-41a4-b721-c84bd50ff342 |
| 55 | CODE_SMELL | MAJOR | src/renderer/recovery.ts:32 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | c032927a-1e8e-4b54-8fd6-86ac3fcd3e43 |
| 56 | CODE_SMELL | CRITICAL | src/renderer/recovery.ts:55 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 40 to the 15 allowed. | 36cf4872-100e-4b74-8f72-23213ab2fd92 |
| 57 | CODE_SMELL | MAJOR | src/renderer/recovery.ts:62 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | f1ed4279-ba26-49bd-8169-fb5ee288ab86 |
| 58 | CODE_SMELL | CRITICAL | extension/content.js:2505 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 133 to the 15 allowed. | a4b1a321-eeef-4cdd-a434-4697da0942e6 |
| 59 | CODE_SMELL | MAJOR | extension/background.js:3829 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | eefdd8ce-8773-4662-9a4e-3b2240786746 |
| 60 | CODE_SMELL | MAJOR | extension/background.js:3830 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | d9d2198b-a3e6-4c0b-b6a6-963180edfaa7 |
| 61 | CODE_SMELL | CRITICAL | src/main/bridge.ts:8155 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 67 to the 15 allowed. | 2e0d4514-d65d-4693-afce-e433bec0cc04 |
| 62 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:2705 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 48 to the 15 allowed. | d50f16a7-7bd7-44a4-9824-430746380a0a |
| 63 | CODE_SMELL | CRITICAL | src/renderer/chat-models.ts:89 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | c62f8ee9-88e4-47a5-9f6e-34195c862901 |
| 64 | CODE_SMELL | CRITICAL | scripts/verify-sidebar-setup.cjs:17 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 31 to the 15 allowed. | 7f82b6da-a765-4989-a551-4ea180b91c68 |
| 65 | CODE_SMELL | CRITICAL | scripts/fixtures/ink.cjs:5 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | a895594a-5058-4be4-8fc5-58065d895100 |
| 66 | CODE_SMELL | MAJOR | scripts/fixtures/ink.cjs:16 | javascript:S1854 | Remove this useless assignment to variable "height". | 1c1a8fa9-9aa1-4be6-bf8d-ad3c9342e017 |
| 67 | CODE_SMELL | MINOR | scripts/fixtures/ink.cjs:16 | javascript:S1481 | Remove the declaration of the unused 'height' variable. | f5595f6b-a011-42b4-b315-1fa5fe75df39 |
| 68 | CODE_SMELL | CRITICAL | scripts/verify-composer-ui.cjs:12 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 31 to the 15 allowed. | c4e86952-594f-4a94-ab7c-4c69c55fd1f9 |
| 69 | CODE_SMELL | MAJOR | scripts/verify-message-reactions.cjs:65 | javascript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | e907d3b6-b85c-44dd-9a3c-4eb744d357d0 |
| 70 | CODE_SMELL | CRITICAL | src/renderer/main.ts:182 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | 1dedfab0-55ce-4af9-80ec-fde002193ec2 |
| 71 | CODE_SMELL | CRITICAL | src/main/bridge.ts:6864 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 36 to the 15 allowed. | 783899a5-5d74-44c1-ab0e-a8b7e0baa4ec |
| 72 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:910 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 52 to the 15 allowed. | ff6b08d7-9e1d-4a75-a6d7-10410dfd9fab |
| 73 | CODE_SMELL | MINOR | src/renderer/settings-search.ts:29 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 5e3e4a2f-557b-4533-abf0-a116e727a7a9 |
| 74 | CODE_SMELL | MINOR | src/renderer/settings-search.ts:29 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 884ed9a0-08ca-46cf-800f-0f2b0a392d0f |
| 75 | CODE_SMELL | MINOR | src/renderer/settings-search.ts:32 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 814eb2fc-5276-485a-bcf9-2e1e524266b6 |
| 76 | CODE_SMELL | MINOR | src/renderer/settings-search.ts:37 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | d3379241-2647-42c6-b215-4175d381ca4b |
| 77 | CODE_SMELL | CRITICAL | src/renderer/settings-search.ts:49 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 36 to the 15 allowed. | 9b2ec830-6029-44a2-9211-dccae7752d30 |
| 78 | CODE_SMELL | MAJOR | src/renderer/settings-search.ts:95 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 8ba0c18b-b7d0-49fc-9efe-1fc013bc2d86 |
| 79 | CODE_SMELL | MAJOR | src/renderer/settings-search.ts:96 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | e5c381d6-ecd7-4bb9-a758-62c85b867c7e |
| 80 | CODE_SMELL | MAJOR | src/renderer/settings-search.ts:99 | typescript:S4043 | Move this array "sort" operation to a separate statement or replace it with "toSorted". | 33fd6c73-c81a-4111-9f1b-f929386a7d2c |
| 81 | CODE_SMELL | MINOR | src/renderer/settings-search.ts:146 | typescript:S7764 | Prefer `globalThis` over `window`. | 66557098-3ad4-418f-913a-f6c5e5cefd69 |
| 82 | CODE_SMELL | MINOR | src/renderer/settings-search.ts:148 | typescript:S7764 | Prefer `globalThis` over `window`. | 5e73ee1c-9cd6-4670-b6f1-22c69aff67db |
| 83 | CODE_SMELL | MINOR | src/renderer/settings-search.ts:152 | typescript:S7764 | Prefer `globalThis` over `window`. | c56c705e-e074-41e6-b796-5808c388b44a |
| 84 | CODE_SMELL | CRITICAL | scripts/verify-settings-layout.cjs:12 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 84 to the 15 allowed. | 85f4fb51-5705-406d-9ad8-0e83444cfb24 |
| 85 | CODE_SMELL | MAJOR | src/renderer/index.html:115 | Web:S6819 | Use &lt;output&gt; instead of the status role to ensure accessibility across all devices. | a86b3143-b7ff-4b90-8efa-b3d2dda2a8ec |
| 86 | CODE_SMELL | MINOR | src/renderer/main.ts:1264 | typescript:S7764 | Prefer `globalThis` over `window`. | b7dc561b-4176-4f69-a25a-65b5f801bbac |
| 87 | CODE_SMELL | MINOR | src/renderer/main.ts:1265 | typescript:S7764 | Prefer `globalThis` over `window`. | 8e0c2384-4c4d-4990-926b-e722c90b686f |
| 88 | CODE_SMELL | CRITICAL | src/renderer/main.ts:1273 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 103 to the 15 allowed. | 2dbee37d-68e8-440e-b82a-d8b6571e8757 |
| 89 | CODE_SMELL | MAJOR | src/renderer/main.ts:1311 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 247c4690-40f3-4a60-b888-9f6ad76b206d |
| 90 | CODE_SMELL | MAJOR | src/renderer/main.ts:1313 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 1efd0c1e-16fa-4d4e-bb64-ef67a06c4421 |
| 91 | CODE_SMELL | MAJOR | src/renderer/main.ts:1313 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | a21b8aa7-c274-4abd-bc06-1333bc67ba6a |
| 92 | CODE_SMELL | MINOR | src/renderer/main.ts:1319 | typescript:S7764 | Prefer `globalThis` over `window`. | b27b0298-7d43-42e7-b2b9-1add344f8add |
| 93 | CODE_SMELL | MAJOR | src/renderer/main.ts:1327 | typescript:S4624 | Refactor this code to not use nested template literals. | 59580b64-7d73-4f44-851d-a8dd08065a88 |
| 94 | CODE_SMELL | MINOR | src/renderer/main.ts:1332 | typescript:S7764 | Prefer `globalThis` over `window`. | 1393e6e3-23f4-4a09-b315-725d072e9402 |
| 95 | CODE_SMELL | MINOR | src/renderer/main.ts:1363 | typescript:S7735 | Unexpected negated condition. | e02520c9-d63a-4c54-8de2-27e032e432be |
| 96 | CODE_SMELL | MINOR | src/renderer/main.ts:1367 | typescript:S7764 | Prefer `globalThis` over `window`. | 0353a649-7efc-4b4c-9b35-b11860ba966b |
| 97 | CODE_SMELL | MAJOR | src/renderer/main.ts:1383 | typescript:S4624 | Refactor this code to not use nested template literals. | afd63eed-7c3a-4418-9ac4-24093705feea |
| 98 | CODE_SMELL | MINOR | src/renderer/main.ts:1404 | typescript:S7764 | Prefer `globalThis` over `window`. | ec6b4bf4-be3a-4e2d-9e4a-c1369ec041ee |
| 99 | CODE_SMELL | CRITICAL | src/renderer/main.ts:1899 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | 81078baf-1221-4645-bd2a-169097404ddc |
| 100 | CODE_SMELL | MAJOR | src/renderer/main.ts:1929 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 4c89418d-6ae4-4938-bc4e-8deaa986961d |
| 101 | CODE_SMELL | MAJOR | src/renderer/main.ts:1929 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | c8fc0ece-d733-4df9-8708-cefdfc71f770 |
| 102 | CODE_SMELL | MAJOR | src/renderer/styles.css:691 | css:S4666 | Unexpected duplicate selector ".sidebar-bottom", first used at line 655 | f12929dd-fdb3-4404-8735-28fdcbd11df3 |
| 103 | CODE_SMELL | MAJOR | src/renderer/styles.css:723 | css:S4666 | Unexpected duplicate selector ".sidebar-connection-label", first used at line 680 | 76de2fa1-feac-4b92-95ba-0df2cdf04b05 |
| 104 | CODE_SMELL | MAJOR | src/renderer/styles.css:737 | css:S4666 | Unexpected duplicate selector ".sidebar-connection.is-busy .sidebar-connection-label", first used at line 736 | 81ba7a72-878a-4774-803f-c1e14f510c24 |
| 105 | CODE_SMELL | CRITICAL | src/renderer/chat-models.ts:154 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | 6b118df2-124c-4c9e-8b40-512559852c11 |
| 106 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:3571 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 74 to the 15 allowed. | 3d5c8639-6452-4461-85e4-e9a7276168d0 |
| 107 | CODE_SMELL | MINOR | src/main/connection.ts:184 | typescript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | 74d279fe-ade3-4dd5-ae18-556c9314756b |
| 108 | CODE_SMELL | MINOR | src/renderer/chat.ts:214 | typescript:S7735 | Unexpected negated condition. | ebfea2fe-0671-4cf6-9c91-f2d2e915375b |
| 109 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:512 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 52 to the 15 allowed. | cfecabd9-cc8e-4e93-a060-d9be0244dfdd |
| 110 | CODE_SMELL | MINOR | src/renderer/row-menu.ts:72 | typescript:S7764 | Prefer `globalThis` over `window`. | e6f0b32f-ebad-4a0b-bf6d-5d20c73ee733 |
| 111 | CODE_SMELL | MINOR | src/renderer/row-menu.ts:118 | typescript:S7764 | Prefer `globalThis` over `window`. | d8999042-132d-4f1d-a326-cc749c96ff58 |
| 112 | CODE_SMELL | MINOR | src/renderer/row-menu.ts:121 | typescript:S7764 | Prefer `globalThis` over `window`. | a0a245fa-46e3-4357-8c6f-afbae0c1138b |
| 113 | CODE_SMELL | MINOR | src/renderer/row-menu.ts:182 | typescript:S7764 | Prefer `globalThis` over `window`. | 73630b3b-23fe-43c4-8b0c-f199a05eba33 |
| 114 | CODE_SMELL | MINOR | src/renderer/row-menu.ts:183 | typescript:S7764 | Prefer `globalThis` over `window`. | 005b8a96-2268-433a-8fdf-f54802a002ec |
| 115 | CODE_SMELL | MINOR | src/renderer/row-menu.ts:198 | typescript:S7764 | Prefer `globalThis` over `window`. | 34690ab6-c706-4d8a-9b22-e50695f0598b |
| 116 | CODE_SMELL | CRITICAL | src/renderer/row-menu.ts:203 | typescript:S3735 | Remove this use of the "void" operator. | 4fb72248-364e-47c8-a599-2eca6ceaaaaf |
| 117 | CODE_SMELL | MINOR | src/renderer/row-menu.ts:209 | typescript:S7764 | Prefer `globalThis` over `window`. | 9d150977-cc00-4e97-961d-8c8fa0ed61ba |
| 118 | CODE_SMELL | CRITICAL | extension/content.js:3576 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 158 to the 15 allowed. | 9c3fdc6c-7176-47d9-9fdd-32f4cef7090a |
| 119 | CODE_SMELL | CRITICAL | extension/fiber.js:663 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 25 to the 15 allowed. | 7c7287ac-2631-4c50-811f-a5c362af2953 |
| 120 | CODE_SMELL | CRITICAL | extension/fiber.js:914 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 112 to the 15 allowed. | 6cd0a3d5-d410-414d-9c58-27c03bdd0b0d |
| 121 | CODE_SMELL | MINOR | extension/fiber.js:1040 | javascript:S4138 | Expected a `for-of` loop instead of a `for` loop with this simple iteration. | 0a8deef0-e10b-4337-a60b-f470ab16fd8e |
| 122 | CODE_SMELL | CRITICAL | src/main/bridge.ts:9264 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 62 to the 15 allowed. | 038bee43-91fa-4e68-a041-f40c1be1a4a5 |
| 123 | CODE_SMELL | MAJOR | scripts/verify-chat-pin.cjs:40 | javascript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | b91a30e2-129d-4080-bcb9-39a501a2d8fe |
| 124 | CODE_SMELL | MAJOR | scripts/verify-chat-pin.cjs:46 | javascript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | a91370ba-e91f-4c05-8e53-da07130593d1 |
| 125 | CODE_SMELL | CRITICAL | scripts/verify-chat-pin.cjs:74 | javascript:S4123 | Unexpected `await` of a non-Promise (non-"Thenable") value. | 02414222-0b7d-41ab-873c-172ef2d55201 |
| 126 | CODE_SMELL | CRITICAL | scripts/verify-chat-pin.cjs:94 | javascript:S4123 | Unexpected `await` of a non-Promise (non-"Thenable") value. | 27a943f7-19f8-4354-b51a-e4bc63bfff43 |
| 127 | CODE_SMELL | CRITICAL | scripts/verify-chat-pin.cjs:106 | javascript:S4123 | Unexpected `await` of a non-Promise (non-"Thenable") value. | 064c0f73-af30-464e-b23c-025ccc204dff |
| 128 | CODE_SMELL | MAJOR | scripts/verify-chat-pin.cjs:117 | javascript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | 37502e50-3230-4fa8-90bd-34abf6870f41 |
| 129 | CODE_SMELL | MINOR | src/renderer/sidebar-pins.ts:18 | typescript:S7764 | Prefer `globalThis` over `window`. | fbdd27b3-6288-434b-b553-6c28f6431106 |
| 130 | CODE_SMELL | MINOR | src/renderer/sidebar-pins.ts:29 | typescript:S7764 | Prefer `globalThis` over `window`. | c395a782-af10-4171-879f-b8cafbac3edd |
| 131 | CODE_SMELL | MINOR | scripts/verify-chat-search.cjs:14 | javascript:S7780 | `String.raw` should be used to avoid escaping `\`. | 9434964c-c900-4115-869f-a8de982fcd33 |
| 132 | CODE_SMELL | MINOR | src/main/session/search.ts:223 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 8252b230-6832-4cc0-af26-a36d837069b1 |
| 133 | CODE_SMELL | MINOR | src/preload/index.ts:15 | typescript:S3863 | '../shared/session.js' imported multiple times. | 1b62c334-56ff-4fdc-9453-3fbfac78c665 |
| 134 | CODE_SMELL | MINOR | src/renderer/chat-search.ts:64 | typescript:S7764 | Prefer `globalThis` over `window`. | 2fcfda63-fc35-4664-ac9b-134bf6930d7e |
| 135 | CODE_SMELL | MINOR | src/renderer/chat-search.ts:72 | typescript:S7764 | Prefer `globalThis` over `window`. | 02252eee-45dd-432c-bce4-8ca56d0c67e8 |
| 136 | CODE_SMELL | MINOR | src/renderer/chat-search.ts:207 | typescript:S7764 | Prefer `globalThis` over `window`. | 4e70742b-9e01-474d-ae9f-7cf426491841 |
| 137 | CODE_SMELL | MINOR | src/renderer/chat-search.ts:208 | typescript:S7764 | Prefer `globalThis` over `window`. | eb6eb968-f882-4a1e-8d1f-c0a7e75d9d77 |
| 138 | CODE_SMELL | MINOR | src/renderer/chat.ts:2356 | typescript:S7764 | Prefer `globalThis` over `window`. | fb9ac9e8-0354-489c-8626-ef43a1c27dcb |
| 139 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:2382 | typescript:S3735 | Remove this use of the "void" operator. | 9e926a64-809e-47a8-ab0f-a2f7e8466ab8 |
| 140 | CODE_SMELL | MINOR | src/renderer/chat.ts:2384 | typescript:S7764 | Prefer `globalThis` over `window`. | bc7fc347-1e31-492e-9985-23aecf18a289 |
| 141 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:345 | javascript:S5843 | Simplify this regular expression to reduce its complexity from 53 to the 20 allowed. | eff5c79c-6443-49b2-8930-8cf8bb640ff3 |
| 142 | CODE_SMELL | CRITICAL | src/main/session/continuation.ts:1574 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 147 to the 15 allowed. | 0cf328e6-b44b-43c9-9641-93666e13f22b |
| 143 | CODE_SMELL | CRITICAL | extension/content.js:9699 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 33 to the 15 allowed. | cc5e1b0d-699c-44b7-87d8-79ecb33ef547 |
| 144 | CODE_SMELL | MAJOR | src/main/session/continuation.ts:490 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 795525b2-a574-40a2-907c-3cbfc70451fb |
| 145 | CODE_SMELL | CRITICAL | src/main/mcp/tools-core.ts:512 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | 90ef53f4-06ea-486b-b757-64d68ec6563b |
| 146 | CODE_SMELL | MAJOR | src/main/mcp/tools-core.ts:538 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | aebbc5be-14e8-494e-a4fa-d03e45cb1e37 |
| 147 | CODE_SMELL | MAJOR | src/main/session/image-request.ts:97 | typescript:S6397 | Replace this character class by the character itself. | 2021c284-a56f-4d4e-be9f-92e831c5f02b |
| 148 | CODE_SMELL | MAJOR | src/main/session/image-request.ts:97 | typescript:S6397 | Replace this character class by the character itself. | 21d43381-5ee9-4730-b4d9-14bcb14c3dff |
| 149 | CODE_SMELL | MAJOR | src/main/session/image-request.ts:97 | typescript:S5843 | Simplify this regular expression to reduce its complexity from 63 to the 20 allowed. | a69cee7a-50a1-4143-be16-935b7985d742 |
| 150 | CODE_SMELL | MINOR | src/main/session/image-request.ts:122 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | 58ea9eaa-a3bb-4b96-8ae4-17f43e9bb100 |
| 151 | CODE_SMELL | CRITICAL | src/main/session/image-request.ts:165 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 27 to the 15 allowed. | 01e5c515-54dd-4486-ab08-cd9c22008b7f |
| 152 | CODE_SMELL | CRITICAL | src/main/skill-library.ts:570 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 23 to the 15 allowed. | 73754627-273f-4470-879e-27bef8d307a9 |
| 153 | CODE_SMELL | CRITICAL | src/main/skill-library.ts:590 | typescript:S1994 | This loop's stop condition tests "turns.length, turns, implicit.length, implicit" but the incrementer updates "round". | 233cb35a-d4b0-47da-87f0-8e9b4ff5a675 |
| 154 | CODE_SMELL | MINOR | src/main/skill-library.ts:598 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | f6671f8e-83a6-4c5a-8bf5-7d890b9d7405 |
| 155 | CODE_SMELL | MAJOR | src/main/skill-library.ts:599 | typescript:S4624 | Refactor this code to not use nested template literals. | c4ee584c-47ed-4e75-a233-f4a74b701022 |
| 156 | CODE_SMELL | MAJOR | src/main/skill-library.ts:599 | typescript:S4624 | Refactor this code to not use nested template literals. | ed0117e9-7227-4b2e-b6b4-830de402bced |
| 157 | CODE_SMELL | MAJOR | src/main/skill-library.ts:599 | typescript:S4624 | Refactor this code to not use nested template literals. | f8802e00-4954-47c7-bf90-84df016f19e0 |
| 158 | CODE_SMELL | MAJOR | extension/content.js:12631 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 569da5a2-cfb1-4166-aa39-79d0dd383a9b |
| 159 | CODE_SMELL | MINOR | src/main/session/image-request.ts:19 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 9c719e43-3f43-46c8-b6c5-471c958e399b |
| 160 | CODE_SMELL | MINOR | src/main/session/image-request.ts:24 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | e46d0f92-3f3e-41da-9004-26b5ecb89b3c |
| 161 | CODE_SMELL | MINOR | src/main/session/image-request.ts:25 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 23384785-4e2c-415d-878b-83f73397363a |
| 162 | CODE_SMELL | MINOR | src/main/session/image-request.ts:27 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 7defb8e4-1ea4-41dc-97fb-3d62bc65843d |
| 163 | CODE_SMELL | MINOR | src/main/session/image-request.ts:28 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 1941214f-77a7-4083-af55-4e0a36d7cabb |
| 164 | CODE_SMELL | MINOR | src/main/session/image-request.ts:34 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | 0e416101-316d-4bbb-82ab-e43073066d29 |
| 165 | CODE_SMELL | MINOR | src/main/session/image-request.ts:45 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | cdc9fb47-096d-4bc9-ac11-0b9cda492eb3 |
| 166 | CODE_SMELL | MINOR | src/main/session/image-request.ts:55 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | 3a4641ea-7160-4690-92f4-702484959c2f |
| 167 | CODE_SMELL | MINOR | src/main/session/image-request.ts:63 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | 80a85d38-c483-47a7-ae1d-7a37b41305d4 |
| 168 | CODE_SMELL | MINOR | src/main/session/image-request.ts:67 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | 61f0dd7f-7009-4337-9fbf-1e36a03e52d4 |
| 169 | CODE_SMELL | MINOR | src/main/session/image-request.ts:77 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | ce7f9323-c1af-434b-8ad0-5230a468aa15 |
| 170 | CODE_SMELL | MINOR | src/main/session/image-request.ts:87 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | a9bc735c-a034-4fa8-887f-b6c5bca2ea19 |
| 171 | CODE_SMELL | MINOR | src/main/session/image-request.ts:93 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | a7d41b38-d901-452b-b050-704af16a7342 |
| 172 | CODE_SMELL | MAJOR | src/main/session/image-request.ts:98 | typescript:S6397 | Replace this character class by the character itself. | 61701534-c450-4841-8912-b01ef7d17052 |
| 173 | CODE_SMELL | MAJOR | src/main/session/image-request.ts:98 | typescript:S6397 | Replace this character class by the character itself. | 9ad950a5-cc26-4a24-a442-5d3e282b8970 |
| 174 | CODE_SMELL | MAJOR | src/main/session/image-request.ts:98 | typescript:S5843 | Simplify this regular expression to reduce its complexity from 26 to the 20 allowed. | babbb07b-7e99-46d6-a6f7-bfd076cde14c |
| 175 | CODE_SMELL | MINOR | src/main/session/image-request.ts:100 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | f6dc4a4a-0ef3-425b-9ef5-6b0aaf346d79 |
| 176 | CODE_SMELL | MINOR | src/main/session/image-request.ts:105 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | f215c68c-69d5-4827-bfe0-86c81a2dd732 |
| 177 | CODE_SMELL | MINOR | src/main/session/image-request.ts:116 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | 33a3b416-686d-497f-ac58-b02108caf1f5 |
| 178 | CODE_SMELL | MINOR | src/main/session/image-request.ts:117 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | 00866fee-2843-4c48-a860-1c55fcdfbf4a |
| 179 | CODE_SMELL | MINOR | src/main/session/image-request.ts:120 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | 2c6ceda1-bbc3-4279-8c55-2a8177f5a56f |
| 180 | CODE_SMELL | MINOR | src/main/session/image-request.ts:126 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | d6d29800-3a29-428a-90b6-b7f3a92ecc98 |
| 181 | CODE_SMELL | MINOR | src/main/session/image-request.ts:127 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | 20fb5d74-ebb3-44d0-997d-3a1e23061556 |
| 182 | CODE_SMELL | MAJOR | src/main/session/image-request.ts:131 | typescript:S5843 | Simplify this regular expression to reduce its complexity from 28 to the 20 allowed. | 96e60d98-ec22-46a7-b3f2-abe19cdd5682 |
| 183 | CODE_SMELL | MAJOR | src/main/session/image-request.ts:131 | typescript:S6397 | Replace this character class by the character itself. | c0445888-7797-4416-aaf4-bb9d13ad5d38 |
| 184 | CODE_SMELL | MINOR | src/main/session/image-request.ts:133 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | 57d9ed20-732d-4ddd-8a26-c5b8aa90e519 |
| 185 | CODE_SMELL | MAJOR | src/main/session/image-request.ts:134 | typescript:S6397 | Replace this character class by the character itself. | 1b48d124-7e49-45af-83be-2ffb41ff2b9e |
| 186 | CODE_SMELL | MINOR | src/main/session/image-request.ts:136 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | 16ae8043-cbb0-44db-b54c-2ca144e2a7e1 |
| 187 | CODE_SMELL | MAJOR | src/main/session/image-request.ts:140 | typescript:S5843 | Simplify this regular expression to reduce its complexity from 47 to the 20 allowed. | 2185a6d8-c09c-41b0-92ab-8626bb8fe920 |
| 188 | CODE_SMELL | MAJOR | src/main/session/image-request.ts:140 | typescript:S6397 | Replace this character class by the character itself. | aceca438-86b1-44a0-9a09-f1004b5fd2d0 |
| 189 | CODE_SMELL | MINOR | src/main/session/image-request.ts:141 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | b54ac851-f943-4291-a444-8bf3c34b1f34 |
| 190 | CODE_SMELL | MINOR | src/main/session/image-request.ts:142 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | 84f39408-26a9-46ca-811f-6a641843d91a |
| 191 | CODE_SMELL | MINOR | src/main/session/image-request.ts:144 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | f758822d-28f6-4679-8b7a-29843d47ea8b |
| 192 | CODE_SMELL | MAJOR | src/main/session/image-request.ts:146 | typescript:S6397 | Replace this character class by the character itself. | 0880f32f-2d69-41f0-81e1-855ac86f65e1 |
| 193 | CODE_SMELL | MAJOR | src/main/session/image-request.ts:146 | typescript:S5843 | Simplify this regular expression to reduce its complexity from 21 to the 20 allowed. | 3ba3ecfd-386c-4991-bd1c-f66e608ba59e |
| 194 | CODE_SMELL | MAJOR | src/main/session/image-request.ts:146 | typescript:S6397 | Replace this character class by the character itself. | 5cf3f8c9-b3a2-4ae2-b95d-2a3029428878 |
| 195 | CODE_SMELL | MAJOR | src/main/session/image-request.ts:149 | typescript:S5843 | Simplify this regular expression to reduce its complexity from 34 to the 20 allowed. | 903aee63-d00c-4266-ac43-aaf1a7ee4f0b |
| 196 | CODE_SMELL | MAJOR | src/main/session/image-request.ts:152 | typescript:S5843 | Simplify this regular expression to reduce its complexity from 33 to the 20 allowed. | 1e79d1a0-141c-49b0-a811-10f91ba5e7f0 |
| 197 | CODE_SMELL | MAJOR | src/main/session/image-request.ts:153 | typescript:S5843 | Simplify this regular expression to reduce its complexity from 27 to the 20 allowed. | 2611028f-b68d-453a-8709-363cf8868b5b |
| 198 | CODE_SMELL | MAJOR | src/main/session/image-request.ts:158 | typescript:S5843 | Simplify this regular expression to reduce its complexity from 32 to the 20 allowed. | db22cf16-e806-4cc3-a751-7c4c3d061719 |
| 199 | CODE_SMELL | CRITICAL | src/main/session/input.ts:1471 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 54 to the 15 allowed. | 2f8cab32-3f10-41c0-a942-fc4995be232f |
| 200 | CODE_SMELL | MINOR | src/main/user-skills.ts:37 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | e218a2fd-4cd8-4ef4-9f40-9fbc903d6d8b |
| 201 | CODE_SMELL | CRITICAL | src/main/user-skills.ts:112 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 26 to the 15 allowed. | d9ec2cd7-7add-499d-93dc-480714360772 |
| 202 | CODE_SMELL | MINOR | src/main/user-skills.ts:116 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 0bc57390-82ad-47be-b486-fb52583ff3b8 |
| 203 | CODE_SMELL | MAJOR | src/main/user-skills.ts:135 | typescript:S4624 | Refactor this code to not use nested template literals. | b0e62f77-fcbe-4b07-ad0c-ae0424275ec0 |
| 204 | CODE_SMELL | MINOR | src/main/user-skills.ts:141 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 3e28a701-b9e5-42e8-b5a3-e044ffff7e35 |
| 205 | CODE_SMELL | MINOR | src/main/user-skills.ts:151 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 785050e9-70b8-42be-8082-33ac237d2670 |
| 206 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:1175 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 63 to the 15 allowed. | ad8e8a04-f248-410a-a21c-8e3c9699a3a9 |
| 207 | CODE_SMELL | MINOR | src/main/session/search.ts:34 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | b196220e-3722-420e-af5b-a95a20e85f88 |
| 208 | CODE_SMELL | MINOR | src/main/session/search.ts:35 | typescript:S7758 | Prefer `String#codePointAt()` over `String#charCodeAt()`. | ce4c6fa2-9849-455e-a00c-640c7efdf774 |
| 209 | CODE_SMELL | MINOR | src/main/session/search.ts:38 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 2cbbfacb-2e47-4f3b-a258-38092bed064f |
| 210 | CODE_SMELL | CRITICAL | src/main/session/search.ts:172 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | db5b9f67-4c06-4110-b1a5-25a761bcae4f |
| 211 | CODE_SMELL | MINOR | src/renderer/shortcuts.ts:11 | typescript:S1874 | 'platform' is deprecated. | 21d7c429-00e0-4370-8992-82a99c0551b7 |
| 212 | CODE_SMELL | MAJOR | src/renderer/shortcuts.ts:11 | typescript:S6557 | Use 'String#startsWith' method instead. | ed85fb7c-c2e2-411d-80c5-3eff8a39d1ce |
| 213 | CODE_SMELL | CRITICAL | src/main/session/store.ts:1784 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | 3d4b8bc9-7e84-41f3-80eb-b2a9a284f9b1 |
| 214 | CODE_SMELL | CRITICAL | src/main/session/store.ts:1830 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | ab43807d-a7c8-4b4b-bb76-58e9ae7fd882 |
| 215 | CODE_SMELL | CRITICAL | src/main/bridge.ts:1825 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | 36051988-c718-4e74-adfe-7f7bbd80a469 |
| 216 | CODE_SMELL | MAJOR | src/renderer/chat.ts:1198 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 913cfb1f-a9fd-4731-a371-8c928551123b |
| 217 | CODE_SMELL | MAJOR | src/renderer/chat.ts:1198 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | feabe8a4-83c8-4e79-91b0-8531f59af973 |
| 218 | CODE_SMELL | MAJOR | src/renderer/chat.ts:1199 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 01f57d2a-8d0c-4b46-9dcc-4b9c328a2795 |
| 219 | CODE_SMELL | MAJOR | src/renderer/chat.ts:1199 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 36236c0e-cf61-4349-8a45-4b4d9385c37a |
| 220 | CODE_SMELL | MAJOR | src/renderer/chat.ts:1199 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 770731bc-9860-4309-959c-28d7a0d7898c |
| 221 | CODE_SMELL | MAJOR | src/renderer/chat.ts:1199 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 80da9514-193f-4aa3-b355-e6af3d77de19 |
| 222 | CODE_SMELL | MAJOR | scripts/verify-chat-search.cjs:55 | javascript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | 6ce67a7d-9d07-40c3-93bf-5c369c244d39 |
| 223 | CODE_SMELL | MAJOR | scripts/verify-chat-search.cjs:61 | javascript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | 3ccd91f9-4fa6-47b0-9c38-870bae4bd68b |
| 224 | CODE_SMELL | MAJOR | scripts/verify-chat-search.cjs:205 | javascript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | 786752b2-3906-4d00-b938-2ac94426e0e2 |
| 225 | CODE_SMELL | MINOR | src/main/session/search.ts:78 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 5bbf8327-7d5e-4cb6-b54b-f14d5b7f7f1c |
| 226 | CODE_SMELL | MINOR | src/main/session/search.ts:128 | typescript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | e0817d0d-8124-473e-bcc1-54127a033a8e |
| 227 | CODE_SMELL | MINOR | src/main/session/search.ts:192 | typescript:S4325 | This assertion is unnecessary since it does not change the type of the expression. | e57ddf63-a59e-4d05-8249-81cfb88c6b2f |
| 228 | CODE_SMELL | MINOR | src/main/session/search.ts:193 | typescript:S4325 | This assertion is unnecessary since it does not change the type of the expression. | 2070d4a4-4a89-44e7-8365-c8c21770e24b |
| 229 | CODE_SMELL | MINOR | src/renderer/chat-search.ts:16 | typescript:S7764 | Prefer `globalThis` over `window`. | 8483a0b6-b203-4e0d-9908-e37c5e202a20 |
| 230 | CODE_SMELL | MINOR | src/renderer/chat-search.ts:138 | typescript:S7764 | Prefer `globalThis` over `window`. | a3a8afbc-6ac8-4847-894a-b81bbc964b5e |
| 231 | CODE_SMELL | MINOR | src/renderer/chat-search.ts:149 | typescript:S7764 | Prefer `globalThis` over `window`. | 6aa33782-37d7-49e4-8311-5eb8159fc6a2 |
| 232 | CODE_SMELL | MINOR | src/renderer/chat-search.ts:153 | typescript:S7764 | Prefer `globalThis` over `window`. | e498c041-3a27-499c-9e04-8d884ab5b280 |
| 233 | CODE_SMELL | MINOR | src/renderer/chat-search.ts:154 | typescript:S7764 | Prefer `globalThis` over `window`. | c29b38f3-673c-428f-9f06-15e934b81f35 |
| 234 | CODE_SMELL | MINOR | src/main/cos-browser/host.ts:149 | typescript:S6594 | Use the "RegExp.exec()" method instead. | b884743f-1d04-405c-bf85-374ffd2b39e0 |
| 235 | CODE_SMELL | MAJOR | scripts/verify-chat-rename.cjs:38 | javascript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | 71acf790-c4f0-4267-a476-ed6f030084ae |
| 236 | CODE_SMELL | MAJOR | scripts/verify-chat-rename.cjs:44 | javascript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | 4c427f55-198f-432f-95e8-3031bab3a301 |
| 237 | CODE_SMELL | MAJOR | scripts/verify-chat-rename.cjs:114 | javascript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | 5f7b68b7-985a-4eab-b657-da2ea11ad2fb |
| 238 | CODE_SMELL | MINOR | src/main/ipc.ts:118 | typescript:S3863 | './session/recorder.js' imported multiple times. | 7ebb0070-2127-4ef8-a9c4-3e0f52971fe1 |
| 239 | CODE_SMELL | MINOR | src/main/ipc.ts:486 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 3b0ea281-babf-41f1-8499-48dd6c6ddba5 |
| 240 | CODE_SMELL | MINOR | src/main/ipc.ts:486 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | aeb1694e-05a6-4f0e-a68a-fb9c018083a1 |
| 241 | CODE_SMELL | CRITICAL | src/main/session/store.ts:2361 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 34 to the 15 allowed. | abe83b85-c357-47f5-815f-6c623eadc2cd |
| 242 | CODE_SMELL | CRITICAL | src/main/session/store.ts:3145 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 35 to the 15 allowed. | f44da6f3-14c2-42c5-ac72-e506f7fe79ad |
| 243 | CODE_SMELL | CRITICAL | extension/content.js:4252 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 353 to the 15 allowed. | a7389115-2878-4ea5-95f4-67d9f64ac50c |
| 244 | CODE_SMELL | CRITICAL | extension/content.js:4552 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | a55ddac5-8e81-497e-a3d4-6f6bd150547a |
| 245 | CODE_SMELL | MAJOR | src/renderer/main.ts:1624 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | a3852e1e-9f9c-4507-9413-97cf999545d8 |
| 246 | CODE_SMELL | MAJOR | src/renderer/main.ts:1626 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 886b475a-882b-4614-a115-4525ad6bd016 |
| 247 | CODE_SMELL | MAJOR | src/renderer/main.ts:1629 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | d5aec3fa-9cd1-47f8-abc3-026fd398c6e2 |
| 248 | CODE_SMELL | MAJOR | extension/content.js:3876 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 1fec7866-2078-4c04-a5d4-8ea83862b6dc |
| 249 | CODE_SMELL | MINOR | extension/content.js:3876 | javascript:S1940 | Use the opposite operator (&lt;=) instead. | 9c9c00f8-769c-48ef-94ef-b80488ebada1 |
| 250 | CODE_SMELL | MAJOR | extension/content.js:3883 | javascript:S6557 | Use 'String#startsWith' method instead. | 5fb9b146-0c65-47d9-8010-d27a42ce1314 |
| 251 | CODE_SMELL | MINOR | extension/content.js:3888 | javascript:S7758 | Prefer `String.fromCodePoint()` over `String.fromCharCode()`. | 6878147b-d575-47b3-8b9e-4b36c93b5f65 |
| 252 | CODE_SMELL | CRITICAL | extension/content.js:12986 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 50 to the 15 allowed. | c2eca15d-0a9c-48db-a921-1944d30ad0a8 |
| 253 | CODE_SMELL | MINOR | src/main/image-export.ts:64 | typescript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | b787b9d0-cb27-4144-b81f-9cbe413e6ccc |
| 254 | CODE_SMELL | MINOR | src/main/image-export.ts:160 | typescript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | e7cb65b1-3a17-488c-855f-c4f1065a1f3a |
| 255 | CODE_SMELL | MINOR | src/main/mcp/tools-core.ts:9 | typescript:S3863 | '../session/correlation.js' imported multiple times. | f1aab887-5e7d-4048-a141-06983b9d6736 |
| 256 | CODE_SMELL | CRITICAL | src/main/skill-library.ts:163 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 25 to the 15 allowed. | 9f5336ea-a4f9-4ffb-853e-bdd4d33a6676 |
| 257 | CODE_SMELL | MINOR | src/main/skill-library.ts:193 | typescript:S7778 | Do not call `Array#push()` multiple times. | 7fbedcd9-b991-4df9-bf2e-f0a609198158 |
| 258 | CODE_SMELL | CRITICAL | src/main/skill-library.ts:331 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 28 to the 15 allowed. | 6a60f431-99f9-44c2-a2c4-1ea80dd430d2 |
| 259 | CODE_SMELL | CRITICAL | src/main/skill-library.ts:399 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 177 to the 15 allowed. | 1af2f53c-e3a8-48f4-96e3-36aa05206625 |
| 260 | CODE_SMELL | MAJOR | src/main/skill-library.ts:528 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 34bab728-9733-45a0-abeb-6237a02ca819 |
| 261 | CODE_SMELL | MAJOR | src/main/skill-library.ts:530 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 23037048-7724-4d79-a49d-6bbe66bcee3a |
| 262 | CODE_SMELL | MAJOR | src/main/skill-library.ts:564 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 3fa6263f-3577-4d5b-bc72-bce3ecb285df |
| 263 | CODE_SMELL | MAJOR | src/main/connector-proof.ts:45 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 71c4ea4e-94f4-4381-9395-631cd99a6e50 |
| 264 | CODE_SMELL | CRITICAL | src/main/bridge.ts:5287 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | dd9be661-b96a-4ca4-a687-8e142abb202d |
| 265 | CODE_SMELL | CRITICAL | src/main/mcp/instructions.ts:74 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 48 to the 15 allowed. | df81f188-cdd0-4b55-89a3-793f72d77407 |
| 266 | CODE_SMELL | CRITICAL | src/main/mcp/kernel.ts:687 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 165 to the 15 allowed. | 728c23e8-1e3a-458a-9b1b-3b1a65650956 |
| 267 | CODE_SMELL | CRITICAL | src/main/tunnel/locate.ts:93 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 21 to the 15 allowed. | df1fdc26-f8ac-4201-87c4-eec804308da3 |
| 268 | CODE_SMELL | MAJOR | src/renderer/chat.ts:6067 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 775b1364-8fb1-488f-adaf-94b4337aa089 |
| 269 | CODE_SMELL | CRITICAL | scripts/verify-pet-overlay-electron.cjs:87 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 31 to the 15 allowed. | d53bfac1-72d7-4839-a1b2-942f2249e403 |
| 270 | CODE_SMELL | CRITICAL | scripts/verify-pet-overlay-electron.cjs:163 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 05272c3f-92dd-49ad-bf61-a9956c984bfb |
| 271 | CODE_SMELL | CRITICAL | scripts/verify-pet-overlay-electron.cjs:191 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 1b7709b0-2460-4774-b07a-71767da1870c |
| 272 | CODE_SMELL | CRITICAL | src/main/pet-overlay.ts:138 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 33 to the 15 allowed. | 51cc6ec7-bd4f-4aa0-ad0c-1b6333f4d5dd |
| 273 | CODE_SMELL | MAJOR | src/renderer/pet-overlay.ts:522 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | f180e8a3-c268-4a57-aafb-541ba682a48b |
| 274 | CODE_SMELL | CRITICAL | extension/background.js:1087 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 29 to the 15 allowed. | 52b2e187-b8cc-4234-a316-efec490f091f |
| 275 | CODE_SMELL | CRITICAL | extension/background.js:2746 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 74 to the 15 allowed. | 828f69b9-3d99-4edc-acef-5dd310a32abd |
| 276 | CODE_SMELL | MAJOR | extension/background.js:5058 | javascript:S6557 | Use 'String#startsWith' method instead. | b0dd319e-d2be-4c62-8989-c575310f538b |
| 277 | CODE_SMELL | CRITICAL | extension/background.js:5150 | javascript:S3735 | Remove this use of the "void" operator. | 38984dcb-a8b0-4adc-8625-fac3d24ff1f3 |
| 278 | CODE_SMELL | MAJOR | extension/popup.html:40 | Web:S6819 | Use &lt;output&gt; instead of the status role to ensure accessibility across all devices. | fb935e5a-7137-4959-b3f5-f771c8287497 |
| 279 | CODE_SMELL | MAJOR | extension/popup.html:50 | Web:S6819 | Use &lt;output&gt; instead of the status role to ensure accessibility across all devices. | 73d77b01-cc0e-4ea2-9f6c-7c4eed2ec6c0 |
| 280 | CODE_SMELL | CRITICAL | extension/popup.js:386 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 47 to the 15 allowed. | f18a8e95-4221-4edf-9e84-07a83a18a107 |
| 281 | CODE_SMELL | MINOR | scripts/fixtures/setup-preview.cjs:6 | javascript:S7726 | The arrow function should be named. | 428ea5fe-058a-4cd5-a87f-ef92bcdebd51 |
| 282 | CODE_SMELL | CRITICAL | scripts/verify-browser-setup.cjs:59 | javascript:S3735 | Remove this use of the "void" operator. | e7bd1dd8-85bf-4bfb-b845-ba05538ebbfb |
| 283 | CODE_SMELL | CRITICAL | scripts/verify-browser-setup.cjs:61 | javascript:S3735 | Remove this use of the "void" operator. | 563fe1e7-de5b-4839-87a0-f4fe28f17d2e |
| 284 | CODE_SMELL | CRITICAL | scripts/verify-browser-setup.cjs:66 | javascript:S3735 | Remove this use of the "void" operator. | 0ec21e65-7986-4b94-817d-76206e26b7fd |
| 285 | CODE_SMELL | CRITICAL | scripts/verify-browser-setup.cjs:67 | javascript:S3735 | Remove this use of the "void" operator. | 4d625b87-9b52-45b7-bcfb-e84a97dbb5b0 |
| 286 | CODE_SMELL | CRITICAL | scripts/verify-browser-setup.cjs:68 | javascript:S3735 | Remove this use of the "void" operator. | fbb89412-fd8c-4afc-9468-bcadc39bfb64 |
| 287 | CODE_SMELL | CRITICAL | scripts/verify-browser-setup.cjs:69 | javascript:S3735 | Remove this use of the "void" operator. | bfd0c92b-bdda-4e0e-b3e0-51a327d5982e |
| 288 | CODE_SMELL | MAJOR | scripts/verify-cos-sign-in.cjs:51 | javascript:S4624 | Refactor this code to not use nested template literals. | 3cc3acac-ff21-40be-a6ea-cc461770aebb |
| 289 | CODE_SMELL | MINOR | scripts/verify-cos-sign-in.cjs:101 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | a3687940-b3d7-441d-ae60-17dd5295180d |
| 290 | CODE_SMELL | MINOR | scripts/verify-cos-sign-in.cjs:252 | javascript:S7780 | `String.raw` should be used to avoid escaping `\`. | cc9e302b-4ed4-41d3-ae52-f2c3c05869fb |
| 291 | CODE_SMELL | CRITICAL | scripts/verify-setup-guide.cjs:10 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 18 to the 15 allowed. | 365d6da9-ff51-47f0-8f1d-36ebd7ff1dea |
| 292 | CODE_SMELL | MAJOR | src/main/bridge.ts:1025 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 07099c87-9304-4d4d-a145-1b9e6432738c |
| 293 | CODE_SMELL | MAJOR | src/main/browser-proof.ts:66 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | da1c8da2-4f32-41c4-a7d5-00e1358196cb |
| 294 | CODE_SMELL | MAJOR | src/main/browser-proof.ts:79 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | fbfcdddb-8d49-4b3a-92fe-52aff65c2093 |
| 295 | CODE_SMELL | MAJOR | src/main/browser-proof.ts:80 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 23f68d32-e9de-4219-9495-098bc5b6be19 |
| 296 | CODE_SMELL | MINOR | src/main/browser-proof.ts:80 | typescript:S7735 | Unexpected negated condition. | 35593df3-047c-4760-a9ed-7e3358916b6d |
| 297 | CODE_SMELL | MINOR | src/main/browser-proof.ts:80 | typescript:S7735 | Unexpected negated condition. | 78988e41-d813-46e1-bd76-c0d638c43021 |
| 298 | CODE_SMELL | MAJOR | src/main/browser-proof.ts:92 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 14fe2089-80fa-44f5-b4df-a9a15fb2902c |
| 299 | CODE_SMELL | MINOR | src/main/browser-proof.ts:92 | typescript:S7735 | Unexpected negated condition. | 7541446d-cdf2-4357-baa3-1a94d4f30265 |
| 300 | CODE_SMELL | MINOR | src/main/browser-proof.ts:92 | typescript:S7735 | Unexpected negated condition. | f7030721-a098-48a8-84c5-3324a42660b9 |
| 301 | CODE_SMELL | CRITICAL | src/main/browser.ts:42 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | 18083ae3-09ed-489b-b10d-9886f61d8f0a |
| 302 | CODE_SMELL | CRITICAL | src/main/browser.ts:245 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 24 to the 15 allowed. | b80925ec-a923-4744-b951-ceabdd5a82b7 |
| 303 | CODE_SMELL | MAJOR | src/main/cos-browser/host.ts:55 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 2c58af79-684e-4b5c-8b53-5e805529e618 |
| 304 | CODE_SMELL | MAJOR | src/main/cos-browser/host.ts:56 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 5621209f-521d-4c04-99c1-fc572c3ffcd6 |
| 305 | CODE_SMELL | MINOR | src/main/cos-browser/host.ts:139 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 99325adb-1b29-4c97-88d3-160dfae9fbc1 |
| 306 | CODE_SMELL | MAJOR | src/main/cos-browser/host.ts:298 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | cfca2671-c540-4782-b014-95a71950c39c |
| 307 | CODE_SMELL | MAJOR | src/main/cos-browser/host.ts:302 | typescript:S4624 | Refactor this code to not use nested template literals. | 1eb764d6-9177-49e6-9978-03d659bfb112 |
| 308 | CODE_SMELL | MINOR | src/main/cos-browser/host.ts:316 | typescript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | f7694ac1-d404-428f-b462-295c9ee67b34 |
| 309 | CODE_SMELL | MAJOR | src/main/cos-browser/host.ts:464 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | ce15ea1d-39a0-417c-b1be-61fd103e833f |
| 310 | CODE_SMELL | MAJOR | src/main/cos-browser/host.ts:525 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | e2f0030a-3e25-4a3c-bd53-21ea8be3db4e |
| 311 | CODE_SMELL | MAJOR | src/main/cos-browser/host.ts:730 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 423488ce-6e2f-40e7-8fb8-84c7ab30cfac |
| 312 | CODE_SMELL | MAJOR | src/main/cos-browser/host.ts:756 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 08dfbcfc-02e4-45b8-96f7-4b6843d0c0f7 |
| 313 | CODE_SMELL | MAJOR | src/main/cos-browser/host.ts:799 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 63fd76da-2790-44c4-87be-48dbee111aab |
| 314 | CODE_SMELL | MINOR | src/main/cos-browser/host.ts:809 | typescript:S3626 | Remove this redundant jump. | 6204864b-2e82-4b9b-b938-e82099267900 |
| 315 | CODE_SMELL | CRITICAL | src/main/cos-browser/host.ts:835 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 25 to the 15 allowed. | 97390fb7-a7bf-4c51-a949-5ba49cc8ddd8 |
| 316 | CODE_SMELL | MINOR | src/main/cos-browser/host.ts:851 | typescript:S7735 | Unexpected negated condition. | d6056b72-604a-4e5d-99a3-17f7eb1523bb |
| 317 | CODE_SMELL | MAJOR | src/main/cos-browser/host.ts:874 | typescript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | a175abf8-65f8-443c-ae85-c5801c029f31 |
| 318 | CODE_SMELL | MAJOR | src/main/cos-browser/host.ts:920 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | dec11c87-3929-4f15-89bb-75d0015e5ab6 |
| 319 | CODE_SMELL | MINOR | src/main/cos-browser/sign-in-transfer.ts:12 | typescript:S1874 | '(params?: unknown): ZodNumber' is deprecated. | 80fb3e1d-5dcb-47e6-a914-55421debdc7f |
| 320 | CODE_SMELL | MAJOR | src/main/cos-browser/sign-in-transfer.ts:89 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | f4396e9b-c640-447f-b65d-7b531362e79d |
| 321 | CODE_SMELL | CRITICAL | src/main/index.ts:388 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 34 to the 15 allowed. | 3668639f-9340-4099-ab6a-ce6e3f904f2b |
| 322 | CODE_SMELL | CRITICAL | src/main/ipc.ts:608 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 33 to the 15 allowed. | f9145943-b10b-4fc1-b3de-158c3963a095 |
| 323 | CODE_SMELL | MAJOR | src/main/ipc.ts:1187 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 61971015-596c-44c2-9712-34fe6c18e963 |
| 324 | CODE_SMELL | MAJOR | src/main/ipc.ts:1187 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | fcd99a00-8ee7-42ee-85a9-37c8770d7982 |
| 325 | CODE_SMELL | MAJOR | src/renderer/cos-browser-sign-in.css:77 | css:S4666 | Unexpected duplicate selector ".path", first used at line 71 | 803905d7-b3dd-4d3a-bffd-48d465f3f586 |
| 326 | CODE_SMELL | MAJOR | src/renderer/cos-browser-sign-in.css:150 | css:S4666 | Unexpected duplicate selector ".tile.is-app", first used at line 74 | 39ebc277-b9b8-4f54-afdb-1680a265328d |
| 327 | CODE_SMELL | MAJOR | src/renderer/cos-browser-sign-in.html:13 | Web:S6819 | Use &lt;dialog&gt; instead of the dialog role to ensure accessibility across all devices. | 0559097f-44ca-416e-a565-8a360e78deb2 |
| 328 | CODE_SMELL | MAJOR | src/renderer/cos-browser-sign-in.html:21 | Web:S6850 | Headings must have content and the content must be accessible by a screen reader. | 580602c6-9763-4716-8baf-cec71f2c42a5 |
| 329 | CODE_SMELL | MAJOR | src/renderer/cos-browser-sign-in.html:24 | Web:S6819 | Use &lt;address&gt; or &lt;details&gt; or &lt;fieldset&gt; or &lt;optgroup&gt; instead of the group role to ensure accessibility across all devices. | edf13e22-2184-45d2-85aa-b91057c286c3 |
| 330 | CODE_SMELL | MINOR | src/renderer/cos-browser-sign-in.ts:17 | typescript:S7764 | Prefer `globalThis` over `window`. | 5488e18c-dbda-478f-92e8-9eb7b862189b |
| 331 | CODE_SMELL | CRITICAL | src/renderer/cos-browser-sign-in.ts:51 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | 02292f5c-6ed3-4195-babd-044b15f552bf |
| 332 | CODE_SMELL | CRITICAL | src/renderer/cos-browser-sign-in.ts:65 | typescript:S3735 | Remove this use of the "void" operator. | fa670b43-d60b-4e81-a1b5-27d2d6c9325e |
| 333 | CODE_SMELL | MAJOR | src/renderer/cos-browser-sign-in.ts:80 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | eb70f3ed-b74e-4877-b356-1a55abed99a5 |
| 334 | CODE_SMELL | MAJOR | src/renderer/cos-browser-sign-in.ts:81 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | ac53c130-c0f5-46d5-9ec1-f2819e462e46 |
| 335 | CODE_SMELL | MAJOR | src/renderer/cos-browser-sign-in.ts:91 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 4ff9a863-997a-4fc9-8490-d63b1f8f5044 |
| 336 | CODE_SMELL | MAJOR | src/renderer/cos-browser.css:153 | css:S4666 | Unexpected duplicate selector ".activity", first used at line 115 | ef2deb87-1beb-4693-ae3f-e9152763a8b4 |
| 337 | CODE_SMELL | MINOR | src/renderer/cos-browser.ts:13 | typescript:S7764 | Prefer `globalThis` over `window`. | 9417b906-ee96-4af1-8f02-5d567b7b8951 |
| 338 | CODE_SMELL | MAJOR | src/renderer/cos-browser.ts:46 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 72d143a1-78a3-42b3-bf4a-8fd1c80ff199 |
| 339 | CODE_SMELL | MINOR | src/renderer/cos-browser.ts:91 | typescript:S1874 | 'webkitMaskImage' is deprecated. | 2ac1ddda-85fc-4bdd-88d5-25545b38ae16 |
| 340 | CODE_SMELL | MAJOR | src/renderer/cos-browser.ts:94 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 9e5ef6cb-f268-471c-bcc0-cc71a873dead |
| 341 | CODE_SMELL | MAJOR | src/renderer/index.html:578 | Web:S6819 | Use &lt;input&gt; instead of the radio role to ensure accessibility across all devices. | 5254e1ac-a2f9-4676-9f9a-d7d7600813f7 |
| 342 | CODE_SMELL | MAJOR | src/renderer/index.html:579 | Web:S6819 | Use &lt;input&gt; instead of the radio role to ensure accessibility across all devices. | 3f28ddc1-91ef-41e3-804d-ced0b2958b21 |
| 343 | CODE_SMELL | MAJOR | src/renderer/index.html:580 | Web:S6819 | Use &lt;input&gt; instead of the radio role to ensure accessibility across all devices. | 2c6ecf12-5a8c-405f-bfaa-17c705ba3a00 |
| 344 | CODE_SMELL | MAJOR | src/renderer/index.html:604 | Web:S6819 | Use &lt;output&gt; instead of the status role to ensure accessibility across all devices. | 54dd6f5d-6ee1-404b-9ecd-e96968d869d6 |
| 345 | CODE_SMELL | MAJOR | src/renderer/index.html:613 | Web:S6807 | The attribute "aria-checked" is required by the role "radio". | 7b47a953-e48d-48a4-a37c-cf0af72e0fc4 |
| 346 | CODE_SMELL | MAJOR | src/renderer/index.html:613 | Web:S6819 | Use &lt;input&gt; instead of the radio role to ensure accessibility across all devices. | d0b959d6-18e3-442d-b95c-8665d099db38 |
| 347 | CODE_SMELL | MAJOR | src/renderer/index.html:614 | Web:S6819 | Use &lt;input&gt; instead of the radio role to ensure accessibility across all devices. | 3c6790cf-6891-448d-81b8-2c5415772411 |
| 348 | CODE_SMELL | MAJOR | src/renderer/index.html:614 | Web:S6807 | The attribute "aria-checked" is required by the role "radio". | cad0b374-9efa-4124-8318-d0ab4d4b1b09 |
| 349 | CODE_SMELL | MAJOR | src/renderer/index.html:616 | Web:S6819 | Use &lt;output&gt; instead of the status role to ensure accessibility across all devices. | 9d7e2a84-2744-45cb-a7f2-344c59e78dcd |
| 350 | CODE_SMELL | MAJOR | src/renderer/index.html:617 | Web:S6819 | Use &lt;output&gt; instead of the status role to ensure accessibility across all devices. | 641df144-9692-468b-9898-c9fd5e409db9 |
| 351 | CODE_SMELL | MAJOR | src/renderer/index.html:618 | Web:S6819 | Use &lt;output&gt; instead of the status role to ensure accessibility across all devices. | 44e21bf6-12ed-4c04-b97b-d83a84717178 |
| 352 | CODE_SMELL | MAJOR | src/renderer/main.ts:1580 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 8fd64228-263d-471a-952b-33f607894add |
| 353 | CODE_SMELL | MAJOR | src/renderer/main.ts:1580 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | db19c7e0-3563-43e9-9537-35efc4f7662b |
| 354 | CODE_SMELL | MAJOR | src/renderer/main.ts:1581 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | c965275c-ff4a-42a4-9cfa-c25112f0ace8 |
| 355 | CODE_SMELL | MAJOR | src/renderer/main.ts:1621 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 83d95d84-772d-48c0-8837-4e00a6f046e6 |
| 356 | CODE_SMELL | MAJOR | src/renderer/setup-browser.ts:32 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | ba7de157-86e6-4ecb-879b-bf614bad6ed6 |
| 357 | CODE_SMELL | MINOR | src/renderer/setup-browser.ts:36 | typescript:S7735 | Unexpected negated condition. | 269ca965-9d81-45ea-9579-fca6937ea514 |
| 358 | CODE_SMELL | MINOR | src/renderer/setup-browser.ts:36 | typescript:S6606 | Prefer using nullish coalescing operator (`??`) instead of a ternary expression, as it is simpler to read. | 85cb3b20-05c0-4616-940f-f7044c3a4b5c |
| 359 | CODE_SMELL | CRITICAL | src/renderer/setup-browser.ts:62 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 37 to the 15 allowed. | 798ed4f0-26d5-439d-8fbd-f9ad2f935275 |
| 360 | CODE_SMELL | MINOR | src/renderer/setup-browser.ts:76 | typescript:S4325 | This assertion is unnecessary since it does not change the type of the expression. | 192ae2b6-ad17-4cc0-9782-ef2713f9bf57 |
| 361 | CODE_SMELL | MINOR | src/renderer/setup-browser.ts:78 | typescript:S4325 | This assertion is unnecessary since it does not change the type of the expression. | 49d818e1-35f6-4ef4-b2b5-43d85f7d6be6 |
| 362 | CODE_SMELL | MAJOR | src/renderer/setup-browser.ts:103 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 071b39ad-eb0b-4d77-81ab-280ec42d9d1e |
| 363 | CODE_SMELL | MAJOR | src/renderer/setup-browser.ts:104 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 0e48d3af-2fb3-458f-b696-fd82b3193989 |
| 364 | CODE_SMELL | MAJOR | src/renderer/setup-browser.ts:106 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 2e35613c-3b5e-4fb1-900b-f6fc55eaefbc |
| 365 | CODE_SMELL | MAJOR | src/renderer/setup-browser.ts:107 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 6a45699e-2aac-4ad2-be69-20b710fef8b5 |
| 366 | CODE_SMELL | MAJOR | src/renderer/setup-browser.ts:108 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 37a1e007-17a4-435a-a2b1-f5b7dff5d9cd |
| 367 | CODE_SMELL | MAJOR | src/renderer/setup-browser.ts:112 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 32fbee0f-3c0f-430c-a123-795bcdc7e685 |
| 368 | CODE_SMELL | MAJOR | src/renderer/setup-browser.ts:113 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 8038a75d-eba7-475b-9a90-0165c6b58583 |
| 369 | CODE_SMELL | MINOR | src/renderer/setup-browser.ts:113 | typescript:S7735 | Unexpected negated condition. | d35bd41b-b246-43d5-944a-2a273aab4a85 |
| 370 | CODE_SMELL | MAJOR | src/renderer/setup-browser.ts:114 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | fc8eb5ae-208c-49c2-99db-28c3f9ed7886 |
| 371 | CODE_SMELL | MAJOR | src/renderer/setup-browser.ts:155 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 5d989602-71e3-4b1b-88fb-ef1e8e099590 |
| 372 | CODE_SMELL | MINOR | src/renderer/setup-browser.ts:163 | typescript:S7764 | Prefer `globalThis` over `window`. | a15e67a8-1778-4c6c-8930-020d50f3a5ce |
| 373 | CODE_SMELL | MINOR | src/renderer/setup-browser.ts:163 | typescript:S7764 | Prefer `globalThis` over `window`. | a766dfa8-c4b6-4d9c-9608-d8b3e301a3e0 |
| 374 | CODE_SMELL | MAJOR | src/renderer/styles.css:1805 | css:S4666 | Unexpected duplicate selector ".guide-frame", first used at line 1803 | 6f81da41-6566-4d70-8f26-0c876e6bc6f5 |
| 375 | CODE_SMELL | MAJOR | src/renderer/styles.css:1828 | css:S4666 | Unexpected duplicate selector ".guide-dots", first used at line 1807 | 28187f00-4e6e-49c7-a294-dc22dc1c227a |
| 376 | CODE_SMELL | MAJOR | src/renderer/styles.css:4466 | css:S4666 | Unexpected duplicate selector ".connect-toggle", first used at line 4410 | 617beae6-d6a5-460a-873d-dc8a334373f0 |
| 377 | CODE_SMELL | MAJOR | src/renderer/styles.css:4503 | css:S4666 | Unexpected duplicate selector ".step-body:has(&gt; .connect-art) &gt; .folder-list", first used at line 4473 | b13a08da-5b46-4ff5-ad51-5e5e28a4aaf8 |
| 378 | CODE_SMELL | MAJOR | src/renderer/styles.css:4506 | css:S4666 | Unexpected duplicate selector ".step-body:has(&gt; .connect-art) &gt; .step-quiet", first used at line 4465 | 99480748-3d42-4eb1-b130-f99db47d1be7 |
| 379 | CODE_SMELL | MAJOR | src/renderer/styles.css:4511 | css:S4666 | Unexpected duplicate selector ".btn.step-link", first used at line 4475 | 508cc489-7a7a-4f2d-bcfa-27246d0f2f50 |
| 380 | CODE_SMELL | MAJOR | src/renderer/styles.css:4520 | css:S4666 | Unexpected duplicate selector ".folder-list li.is-empty", first used at line 4441 | 6bd3023a-3e4c-4064-b309-41cb88350e6f |
| 381 | CODE_SMELL | MAJOR | src/renderer/styles.css:4546 | css:S4666 | Unexpected duplicate selector ".step-side .guide-picture img", first used at line 4532 | 0102fabd-a447-48f6-8159-cd9416626739 |
| 382 | CODE_SMELL | MAJOR | src/renderer/styles.css:4547 | css:S4666 | Unexpected duplicate selector ".wizard &gt; .step.is-open &gt; .step-body &gt; #connectorCards", first used at line 4535 | b2327c3d-17f3-4774-aa6c-e0be66ad4027 |
| 383 | CODE_SMELL | MAJOR | src/renderer/styles.css:4548 | css:S4666 | Unexpected duplicate selector ".wizard &gt; .step.is-open &gt; .step-body &gt; .setup-legacy.step-wide", first used at line 4539 | a27a214c-1b4b-438a-b6a5-65e522c2347e |
| 384 | CODE_SMELL | MAJOR | src/renderer/styles.css:4550 | css:S4666 | Unexpected duplicate selector ".wizard &gt; .step.is-open &gt; .step-body &gt; .step-side", first used at line 4483 | 954a2158-d669-43cf-af84-3a50590ac321 |
| 385 | CODE_SMELL | MAJOR | src/renderer/styles.css:4551 | css:S4666 | Unexpected duplicate selector ".step-side &gt; .setup-guide", first used at line 4485 | e760a7ae-9134-4854-b0fe-dc50f0cb70c2 |
| 386 | CODE_SMELL | MAJOR | src/renderer/styles.css:4552 | css:S4666 | Unexpected duplicate selector ".step-side .guide-stage", first used at line 4531 | bb8ae8fe-dfd7-4f85-9f41-09f20bc57a90 |
| 387 | CODE_SMELL | MAJOR | src/renderer/styles.css:4553 | css:S4666 | Unexpected duplicate selector ".wizard &gt; .step.is-open &gt; .step-body &gt; #connectorCards", first used at line 4535 | 237dc900-e3e9-43a6-b05d-1c9eee76c8c5 |
| 388 | CODE_SMELL | MAJOR | src/renderer/styles.css:4554 | css:S4666 | Unexpected duplicate selector ".step-side .guide-picture img", first used at line 4532 | eb3631f7-6fe2-45d0-a231-9fb84361502f |
| 389 | CODE_SMELL | MAJOR | src/renderer/styles.css:4557 | css:S4666 | Unexpected duplicate selector ".tag", first used at line 2225 | fbd8e979-32c2-4e18-9350-51ace427d535 |
| 390 | CODE_SMELL | MAJOR | src/renderer/styles.css:4561 | css:S4666 | Unexpected duplicate selector ".tag.is-optional", first used at line 1772 | f9f209c8-0016-414e-8fd5-195869691e58 |
| 391 | CODE_SMELL | MINOR | src/main/cos-browser/chrome-api.ts:108 | typescript:S6551 | 'value' may use Object's default stringification format ('[object Object]') when stringified. | 30bd1ac9-2d93-46a0-ba2f-4f1583dc1e9d |
| 392 | CODE_SMELL | MAJOR | src/main/cos-browser/chrome-api.ts:183 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | c00d4760-4c76-4409-b5be-88cfb4f8f50b |
| 393 | CODE_SMELL | MINOR | src/preload/cos-browser-worker.ts:72 | typescript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | 305a2400-ec15-4700-86f7-61247b4d7890 |
| 394 | CODE_SMELL | MINOR | src/main/cos-browser/match-pattern.ts:17 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | 1494dbc6-b9d5-4e11-b241-2c844a3b4fec |
| 395 | CODE_SMELL | MINOR | src/main/cos-browser/match-pattern.ts:17 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | c00c3f85-9bea-4cab-9269-0eefbffdd84d |
| 396 | CODE_SMELL | MINOR | src/main/cos-browser/tab-model.ts:104 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | b6a81f6b-9999-4911-8f90-94e5e8f62529 |
| 397 | CODE_SMELL | MINOR | src/main/cos-browser/tab-model.ts:104 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | ed0d6933-c1ec-497e-a18c-4eb9fbb0644c |
| 398 | CODE_SMELL | CRITICAL | src/main/cos-browser/tab-model.ts:186 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 48 to the 15 allowed. | dea650c0-09eb-4055-a7d1-aba29e98fc0d |
| 399 | CODE_SMELL | MAJOR | src/main/agents.ts:3291 | typescript:S4624 | Refactor this code to not use nested template literals. | 30918c0b-4f9d-4625-86f0-04ab9498c2ed |
| 400 | CODE_SMELL | CRITICAL | src/main/mcp/tools-core.ts:2351 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 42 to the 15 allowed. | 15f55497-1634-4f21-bcfc-607bd20c1c04 |
| 401 | CODE_SMELL | MAJOR | src/main/mcp/tools-core.ts:2363 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 5cb743fe-e42f-4c9d-b2ef-e28ba16bff7b |
| 402 | CODE_SMELL | MAJOR | src/main/mcp/tools-core.ts:2363 | typescript:S4624 | Refactor this code to not use nested template literals. | 960a62ec-122d-42f8-9c59-26465d85bb31 |
| 403 | CODE_SMELL | MAJOR | src/renderer/chat.ts:1301 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | bf8c25d4-885c-4b02-afb0-655f793c8feb |
| 404 | CODE_SMELL | MAJOR | extension/content.js:949 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 4a105c31-5057-4bc4-9b29-8c71729dd9d2 |
| 405 | CODE_SMELL | CRITICAL | extension/usage.js:107 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 22 to the 15 allowed. | ca36067e-3477-4415-aab0-a79af1b6f5ac |
| 406 | CODE_SMELL | MAJOR | src/main/bridge.ts:2485 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | b4e11140-e2fb-4c10-8a70-40dab670af90 |
| 407 | CODE_SMELL | MAJOR | src/main/connector-proof.ts:129 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 60ae19c2-a5da-48c6-aea8-92f1f92c3105 |
| 408 | CODE_SMELL | MAJOR | scripts/verify-round-subagents.cjs:75 | javascript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | c8bca28d-ab8f-416a-8437-51fb9d33af17 |
| 409 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:3456 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 40 to the 15 allowed. | a2090038-ecd2-4361-8b19-0c468688c996 |
| 410 | CODE_SMELL | MAJOR | src/renderer/chat-models.ts:34 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | f0a1623d-eafb-41a9-8b65-cc6d19a4fdc7 |
| 411 | CODE_SMELL | CRITICAL | src/renderer/chat-models.ts:223 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 33 to the 15 allowed. | bfa83fd2-e63e-44b5-948b-b87b48f42013 |
| 412 | CODE_SMELL | MAJOR | src/renderer/chat-models.ts:400 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | a80568c0-cd62-4896-a8fa-a8f00f7ae52e |
| 413 | CODE_SMELL | MAJOR | src/renderer/chat-models.ts:473 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 0f656281-dacb-4525-b3ee-f44abc476384 |
| 414 | CODE_SMELL | MAJOR | src/main/connector-proof.ts:94 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 52569f80-69df-4cae-8b27-613482c5659d |
| 415 | CODE_SMELL | MAJOR | src/main/connector-proof.ts:113 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | fc7d2c3f-9d71-4475-bc54-010ff5ea4939 |
| 416 | CODE_SMELL | MAJOR | src/main/connector-proof.ts:114 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 1609aec6-cf62-4dc4-8211-e79d4b5d7c1d |
| 417 | CODE_SMELL | MAJOR | src/renderer/main.ts:1820 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | f234fccf-dd8c-482b-9618-995eef01af0e |
| 418 | CODE_SMELL | CRITICAL | extension/background.js:2966 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 177 to the 15 allowed. | 3222681a-9c78-4054-b8f4-308e348da06f |
| 419 | CODE_SMELL | MINOR | extension/background.js:3030 | javascript:S7735 | Unexpected negated condition. | 84d76b61-77a1-4dc7-a28e-7eac671c2c95 |
| 420 | CODE_SMELL | MAJOR | extension/background.js:3030 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | f301bdf9-3b6b-473c-902e-75ae27d724b8 |
| 421 | CODE_SMELL | MAJOR | extension/background.js:3031 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 4def3b65-ec39-47c9-b44c-000a9486e5e5 |
| 422 | CODE_SMELL | MINOR | extension/background.js:3031 | javascript:S7735 | Unexpected negated condition. | fb9df653-d638-405b-8118-2acda6961cf5 |
| 423 | CODE_SMELL | MINOR | extension/background.js:3032 | javascript:S7735 | Unexpected negated condition. | a46ac6f3-10d3-4f68-947b-9513f7a7c230 |
| 424 | CODE_SMELL | MAJOR | extension/background.js:3032 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | e8f09cf6-f8b1-41b5-a47d-d8ab96bb0e5d |
| 425 | CODE_SMELL | MAJOR | extension/background.js:3033 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 0b6d85fa-ad7c-4234-8fc6-0ac992914f47 |
| 426 | CODE_SMELL | MAJOR | extension/background.js:3033 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | be28f926-f075-4a50-a404-001b996f7d90 |
| 427 | CODE_SMELL | MAJOR | extension/background.js:3034 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 0efdde29-d445-449d-8719-9ad2dfe411c1 |
| 428 | CODE_SMELL | MINOR | extension/background.js:3045 | javascript:S7735 | Unexpected negated condition. | 1e8b9d13-cffc-4007-94d1-ed7bb02d78c8 |
| 429 | CODE_SMELL | MAJOR | extension/background.js:3045 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | d0df47f9-9805-4512-a20f-56ef3ce6f633 |
| 430 | CODE_SMELL | MAJOR | extension/background.js:3046 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | a47c8866-269d-4419-8803-4d9cde784567 |
| 431 | CODE_SMELL | MINOR | extension/background.js:3047 | javascript:S7735 | Unexpected negated condition. | 5b5fe5fe-8b08-45d9-bf5e-eb033fa2fc9c |
| 432 | CODE_SMELL | MAJOR | extension/background.js:3047 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 88ccf950-5745-420f-874f-9f91e769295f |
| 433 | CODE_SMELL | CRITICAL | extension/content.js:6667 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 143 to the 15 allowed. | 655495b9-fda0-40f3-afd4-43d8f1f4a574 |
| 434 | CODE_SMELL | CRITICAL | extension/content.js:12289 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | f0766a93-0889-4b48-bfcc-b60cf388864c |
| 435 | CODE_SMELL | MAJOR | extension/content.js:12317 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 93c04fe2-0f87-4612-90b7-0f0057ba7389 |
| 436 | CODE_SMELL | MINOR | extension/content.js:12317 | javascript:S7735 | Unexpected negated condition. | c29b52ab-20e4-4d19-a968-8753328ffe79 |
| 437 | CODE_SMELL | MAJOR | extension/content.js:12317 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | d7ff969a-936e-409a-8d12-3b7a6628562e |
| 438 | CODE_SMELL | MINOR | extension/content.js:12317 | javascript:S7735 | Unexpected negated condition. | d921a07a-9cca-49c4-9051-f0d82d5e5f95 |
| 439 | CODE_SMELL | MINOR | extension/content.js:12317 | javascript:S7735 | Unexpected negated condition. | ee0cbf84-104a-4baf-b387-b5a7abe7e9b9 |
| 440 | CODE_SMELL | MAJOR | extension/content.js:12318 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 08251eee-961f-41bb-918a-bf0c4b94429d |
| 441 | CODE_SMELL | MINOR | extension/content.js:12318 | javascript:S7735 | Unexpected negated condition. | 24f3d159-73ba-4579-8fc1-fe9206cadc9e |
| 442 | CODE_SMELL | MAJOR | src/main/bridge.ts:9412 | typescript:S4624 | Refactor this code to not use nested template literals. | 41c0eef5-964e-4135-b5d3-0c19f2d39432 |
| 443 | CODE_SMELL | CRITICAL | src/main/bridge.ts:9415 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 43 to the 15 allowed. | a82d2d54-bb90-4642-a493-9f94bd3bb928 |
| 444 | CODE_SMELL | MAJOR | src/main/bridge.ts:9431 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | dfeec41f-79e1-4d12-a906-b5113a0f69ee |
| 445 | CODE_SMELL | MAJOR | src/main/bridge.ts:9431 | typescript:S4624 | Refactor this code to not use nested template literals. | efdd2fe6-c5e1-4fa5-a422-219b73fafd3c |
| 446 | CODE_SMELL | MAJOR | extension/content.js:935 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | b75231c7-0fd7-4ef6-b553-dc5099201ea8 |
| 447 | CODE_SMELL | MINOR | extension/content.js:6104 | javascript:S7776 | `LEGACY_CONNECTORS` should be a `Set`, and use `LEGACY_CONNECTORS.has()` to check existence or non-existence. | afcf1f00-1ed9-43c2-866c-b9fad66ad473 |
| 448 | CODE_SMELL | MINOR | src/main/ipc.ts:167 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | fbcdf456-5869-45fb-90f7-d3bb9fc91491 |
| 449 | CODE_SMELL | MINOR | src/main/mcp/surfaces.ts:41 | typescript:S7763 | Use `export…from` to re-export `CONNECTOR_BRAND`. | 9cf678ce-9fdf-43ca-8b8f-2c8c0d695749 |
| 450 | CODE_SMELL | MINOR | src/renderer/main.ts:863 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | c5343258-380e-4334-b4cc-a5fb90f7862c |
| 451 | CODE_SMELL | MINOR | src/shared/connector-names.ts:23 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | f4b7f017-01f3-4d4c-9a2f-919f36604005 |
| 452 | CODE_SMELL | CRITICAL | scripts/verify-plan-collapse.cjs:11 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | f3f9db43-0e84-4446-9953-75a18117cc15 |
| 453 | CODE_SMELL | MINOR | scripts/verify-inline-recorded-diffs.cjs:11 | javascript:S7780 | `String.raw` should be used to avoid escaping `\`. | 9a9e99e1-07a7-4921-bad3-f43dad5aed0a |
| 454 | CODE_SMELL | MAJOR | src/renderer/tool-artifacts.ts:25 | typescript:S7721 | Move function 'unavailable' to the outer scope. | c9ebef6d-3fbe-4e81-91d2-8972f5144fc8 |
| 455 | CODE_SMELL | MAJOR | scripts/verify-round-subagents.cjs:69 | javascript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | 2e2d62fe-36ce-46a0-bb15-842d3527cd94 |
| 456 | CODE_SMELL | MINOR | src/renderer/agent-communication.ts:9 | typescript:S7758 | Prefer `String#codePointAt()` over `String#charCodeAt()`. | 41864ea1-b586-42f6-8a82-d5cd8a9ce573 |
| 457 | CODE_SMELL | CRITICAL | src/renderer/agent-communication.ts:15 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | ca52dd64-211f-460c-b6b9-066024e10c6b |
| 458 | CODE_SMELL | MINOR | scripts/verify-chat-opening-scroll.cjs:28 | javascript:S7776 | `iconFiles` should be a `Set`, and use `iconFiles.has()` to check existence or non-existence. | 3b892eaf-b1ee-4ba8-ab8b-adcb0775be18 |
| 459 | CODE_SMELL | MINOR | scripts/verify-chat-opening-scroll.cjs:29 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 67786191-3905-47d0-b308-708735af0c8a |
| 460 | CODE_SMELL | MINOR | src/renderer/chat.ts:6023 | typescript:S7764 | Prefer `globalThis` over `window`. | e2275b91-7a4f-4ec4-994e-81e7f1904262 |
| 461 | CODE_SMELL | MINOR | src/renderer/chat.ts:6030 | typescript:S7764 | Prefer `globalThis` over `window`. | 99146297-6703-46a3-8546-9f4e58a46839 |
| 462 | CODE_SMELL | MINOR | src/renderer/chat.ts:6078 | typescript:S7764 | Prefer `globalThis` over `window`. | 2286abc4-3fbc-46dc-a463-d6750c4bad18 |
| 463 | CODE_SMELL | MINOR | src/renderer/chat.ts:6079 | typescript:S7764 | Prefer `globalThis` over `window`. | 5e5e0a4a-e8eb-4355-8bdb-0306f9bb7707 |
| 464 | CODE_SMELL | MINOR | src/renderer/chat.ts:6081 | typescript:S7764 | Prefer `globalThis` over `window`. | 3f3d9804-6c55-4f4d-ac4e-9cec66877a66 |
| 465 | CODE_SMELL | MINOR | src/renderer/chat.ts:6084 | typescript:S7764 | Prefer `globalThis` over `window`. | d03da6cc-0e87-4501-ae49-1e741ee65152 |
| 466 | CODE_SMELL | CRITICAL | src/main/bridge.ts:9714 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | 5fb2506c-d95c-4b05-8b90-a5a6f4424cde |
| 467 | CODE_SMELL | CRITICAL | extension/content.js:12326 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 130 to the 15 allowed. | 15444bbc-d03b-4908-b412-5c0340a90393 |
| 468 | CODE_SMELL | MINOR | extension/content.js:12348 | javascript:S7750 | Prefer `.findLast(…)` over `.filter(…).at(-1)`. | 95ede545-f4fd-4c05-9cea-cbf51379cd9c |
| 469 | CODE_SMELL | CRITICAL | extension/content.js:12604 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 49cb8f9c-a4a6-49f9-872d-4df06f4aff3a |
| 470 | CODE_SMELL | CRITICAL | extension/content.js:12609 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 1c78aba2-350d-4906-a5c6-c2d9145f1ad9 |
| 471 | CODE_SMELL | MINOR | src/main/session/prompt.ts:121 | typescript:S7735 | Unexpected negated condition. | 79c45163-ef9d-487b-8b4d-521fb71e77e7 |
| 472 | CODE_SMELL | MAJOR | src/main/diagnostics-report.ts:80 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | abb6ea0b-fa04-4567-937a-cbc8a6426d98 |
| 473 | CODE_SMELL | MAJOR | src/main/diagnostics-report.ts:81 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | a35debcf-aa0f-48fd-801c-faf1015e3ad6 |
| 474 | CODE_SMELL | CRITICAL | scripts/verify-overwrite-layout.cjs:14 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 25 to the 15 allowed. | 8a30cdb6-3cb8-42e2-8c30-3bd435bc9118 |
| 475 | CODE_SMELL | MINOR | src/renderer/i18n.ts:41 | typescript:S7764 | Prefer `globalThis` over `window`. | 3d3c16f4-a75b-4943-9736-4fdb0e1f4433 |
| 476 | CODE_SMELL | MINOR | src/renderer/i18n.ts:41 | typescript:S7764 | Prefer `globalThis` over `window`. | d853e31e-d33a-4da2-8647-7184013d69cd |
| 477 | CODE_SMELL | MINOR | src/renderer/i18n.ts:41 | typescript:S7764 | Prefer `globalThis` over `window`. | f420f91f-2674-4b7f-b7ce-45d05055dc05 |
| 478 | CODE_SMELL | MINOR | src/renderer/i18n.ts:47 | typescript:S7764 | Prefer `globalThis` over `window`. | 2a23dd00-611e-44a4-a70c-387286c22f2e |
| 479 | CODE_SMELL | CRITICAL | scripts/verify-accessibility.cjs:31 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 22 to the 15 allowed. | 9fdaee82-2344-4e4e-a8e7-f25a65421ca6 |
| 480 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:5100 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | e3814f1f-844d-496f-9c54-0dc27e626e76 |
| 481 | CODE_SMELL | MAJOR | extension/content.js:11091 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | fc8b0030-7896-42ca-9d27-3f746c874ca4 |
| 482 | CODE_SMELL | CRITICAL | extension/content.js:11137 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 36d54280-8804-409e-8ef1-bfed684d1ab7 |
| 483 | CODE_SMELL | CRITICAL | extension/content.js:11140 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 3e03362f-59f2-49a9-b8ed-b0c9a0fa8cc0 |
| 484 | CODE_SMELL | CRITICAL | extension/content.js:11155 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 9965cc8e-1161-4849-94de-57100ef84059 |
| 485 | CODE_SMELL | CRITICAL | extension/content.js:11160 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | a46d8897-273b-40be-9457-c0d703cf7854 |
| 486 | CODE_SMELL | MAJOR | scripts/verify-inline-recorded-diffs.cjs:33 | javascript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | 843a2953-5284-4942-9cfb-74eeb86f55fa |
| 487 | CODE_SMELL | MAJOR | scripts/verify-inline-recorded-diffs.cjs:38 | javascript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | ef830926-1790-4103-b639-37df988c1710 |
| 488 | CODE_SMELL | MAJOR | scripts/verify-inline-recorded-diffs.cjs:72 | javascript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | 1127bdda-5813-489a-84cd-bdc39949233d |
| 489 | CODE_SMELL | MAJOR | scripts/verify-round-subagents.cjs:155 | javascript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | a742f9fd-c224-4235-bb3a-64f786e2e653 |
| 490 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:2583 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | 235e6596-57e3-4774-9ff7-a8249dc25018 |
| 491 | CODE_SMELL | MAJOR | src/renderer/tool-artifacts.ts:11 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | f1417b25-e593-41dd-bf75-b9441d85ac5e |
| 492 | CODE_SMELL | MINOR | src/renderer/tool-artifacts.ts:38 | typescript:S7764 | Prefer `globalThis` over `window`. | 1e1854cf-c668-4881-abba-fbd826a26209 |
| 493 | CODE_SMELL | MAJOR | src/renderer/tool-artifacts.ts:40 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 611234ab-100a-498c-8aba-8e3b60fce67b |
| 494 | CODE_SMELL | MINOR | src/renderer/tool-artifacts.ts:47 | typescript:S7764 | Prefer `globalThis` over `window`. | 0cc5b005-3805-4244-a854-d12f6902e33d |
| 495 | CODE_SMELL | CRITICAL | src/renderer/unified-diff.ts:11 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | 9fbcc4b0-8239-4e12-9864-a24a44e0c1a8 |
| 496 | CODE_SMELL | CRITICAL | src/renderer/unified-diff.ts:42 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | 1a459740-f1af-4c56-829e-c0fe24fb8de7 |
| 497 | CODE_SMELL | MAJOR | src/renderer/unified-diff.ts:53 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 4058b609-b9f8-4ad2-a781-7fd0688404e7 |
| 498 | CODE_SMELL | MINOR | scripts/verify-accessibility.cjs:51 | javascript:S7780 | `String.raw` should be used to avoid escaping `\`. | 9e588b4f-a10f-4584-87fb-45d71863d706 |
| 499 | CODE_SMELL | MAJOR | src/renderer/index.html:560 | Web:S6819 | Use &lt;progress&gt; instead of the progressbar role to ensure accessibility across all devices. | 57fc874f-bb15-4422-b7fd-ed96331ccbe2 |
| 500 | CODE_SMELL | MINOR | scripts/verify-settings-layout.cjs:115 | javascript:S7780 | `String.raw` should be used to avoid escaping `\`. | 992b510f-51e9-4257-89ca-1c96532578f1 |
| 501 | CODE_SMELL | CRITICAL | src/main/codex/apply-patch/streaming-parser.ts:219 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 28 to the 15 allowed. | db3c8504-64e2-455c-aa7e-f0ae727a1dc1 |
| 502 | CODE_SMELL | MAJOR | src/main/diagnostics-report.ts:51 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | dedb8b8a-fa12-4cba-b6b4-3f606c8922ab |
| 503 | CODE_SMELL | MINOR | src/main/diagnostics-report.ts:150 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 8342a53c-c01e-411d-9b12-84ec7613b662 |
| 504 | CODE_SMELL | MINOR | src/main/ipc.ts:76 | typescript:S3863 | './session/store.js' imported multiple times. | e70c235f-2eee-4422-94e9-afc1ff9efa5d |
| 505 | CODE_SMELL | MINOR | src/main/report-scrub.ts:48 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | ae65cb8f-04e3-4fe2-bb06-0cae8178ea7c |
| 506 | CODE_SMELL | MINOR | src/main/report-scrub.ts:48 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | cf5ed4c9-5a8f-4979-a495-9fa1736ea9a8 |
| 507 | CODE_SMELL | MINOR | src/main/report-scrub.ts:79 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 74eb0a22-f7bf-4e7e-bcc5-e92c3d2da925 |
| 508 | CODE_SMELL | MINOR | src/main/report-scrub.ts:80 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 5aa32d4f-25c9-4314-9d15-b502bcba83e9 |
| 509 | CODE_SMELL | MINOR | src/main/report-scrub.ts:81 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 8961a867-8eaa-4bdc-80aa-ad9314a9f6bd |
| 510 | CODE_SMELL | MINOR | src/main/report-scrub.ts:82 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 35bc268c-f2d0-4b3a-a2ff-bc51292eede4 |
| 511 | CODE_SMELL | MINOR | src/main/report-scrub.ts:83 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 8bb5ff03-985f-4351-9603-e5bac1abb20c |
| 512 | CODE_SMELL | MINOR | src/main/report-scrub.ts:86 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | 1022eb42-8aef-41b8-bcee-469ee8aa0d5f |
| 513 | CODE_SMELL | MINOR | src/main/report-scrub.ts:86 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 9eab3711-e83a-4618-8056-551c7d7ce8a8 |
| 514 | CODE_SMELL | MINOR | src/main/report-scrub.ts:86 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | d85a8642-5715-45c5-a0dd-21b03fa148ab |
| 515 | CODE_SMELL | MINOR | src/main/report-scrub.ts:90 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 9b167a98-7ede-4598-bfc9-4e4b6af3f15a |
| 516 | CODE_SMELL | MINOR | src/main/report-scrub.ts:94 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 1aa4018d-1b9a-4993-a09f-586474bf99e3 |
| 517 | CODE_SMELL | MAJOR | src/main/report-scrub.ts:94 | typescript:S5843 | Simplify this regular expression to reduce its complexity from 42 to the 20 allowed. | 694bd5f1-355d-45dc-ab99-271cbd873181 |
| 518 | CODE_SMELL | MINOR | src/main/report-scrub.ts:96 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 237d0096-625b-476e-bc1c-07c1e3d773c9 |
| 519 | CODE_SMELL | MINOR | src/main/report-scrub.ts:102 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 7afb9943-9ad2-400d-a932-e04eea87e5e0 |
| 520 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:1829 | javascript:S7780 | `String.raw` should be used to avoid escaping `\`. | c7d42d17-5b69-41b3-9dd3-0d1853da01df |
| 521 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:1830 | javascript:S7780 | `String.raw` should be used to avoid escaping `\`. | 2da05118-ce63-4dcc-9575-db5c8b66e719 |
| 522 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:1831 | javascript:S7780 | `String.raw` should be used to avoid escaping `\`. | 3b35eced-cb0d-4fbd-8485-e1ecb54f6a6e |
| 523 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:1848 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 26368850-67b9-4d7f-90f2-04e37c6d8056 |
| 524 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:1848 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 34309ce9-354f-4351-8946-e4ce725f4999 |
| 525 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:1854 | javascript:S1874 | The signature '(commandId: string, showUI?: boolean \| undefined, value?: string \| undefined): boolean' of 'document.execCommand' is deprecated. | a7473e61-ceed-4099-8756-c6423e45d7e2 |
| 526 | CODE_SMELL | MAJOR | extension/content.js:11081 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | a86e2249-c426-48e0-b5dd-5c3aa29e6797 |
| 527 | CODE_SMELL | MAJOR | extension/content.js:11100 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 724669b9-1783-4b00-a2fc-9a9bbf17c8e3 |
| 528 | CODE_SMELL | CRITICAL | scripts/verify-release-assets.mjs:38 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | dfe184f0-93a9-4bd6-9f50-2b560f83ccdf |
| 529 | CODE_SMELL | MINOR | src/main/projects.ts:12 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | 8cbb2e1d-4df0-471b-86d7-36289bd41e64 |
| 530 | CODE_SMELL | CRITICAL | src/main/session/prompt.ts:22 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 21 to the 15 allowed. | 0364120e-7032-4663-b559-f44685756165 |
| 531 | CODE_SMELL | CRITICAL | src/main/agents.ts:4852 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 109 to the 15 allowed. | 9547e52d-1fc9-4bae-b3cf-42d5403d5607 |
| 532 | CODE_SMELL | MAJOR | src/main/mcp/kernel.ts:830 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | f49aae3f-2532-48cd-a534-04ba1b04928d |
| 533 | CODE_SMELL | MAJOR | src/main/mcp/kernel.ts:1067 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 01b3125e-930c-421f-96c1-f986f5f63be6 |
| 534 | CODE_SMELL | MINOR | scripts/verify-background-process-dock.cjs:41 | javascript:S7780 | `String.raw` should be used to avoid escaping `\`. | 54760bab-ecd5-4436-b9fb-c23a184d9820 |
| 535 | CODE_SMELL | MINOR | scripts/verify-background-process-dock.cjs:92 | javascript:S7780 | `String.raw` should be used to avoid escaping `\`. | 3b7408ae-d225-4f21-8a00-9f23281efe17 |
| 536 | CODE_SMELL | CRITICAL | src/main/session/correlation.ts:62 | typescript:S3504 | Unexpected var, use let or const instead. | 5f905f8f-2fe9-41db-93ca-280de0e6ff7c |
| 537 | CODE_SMELL | MAJOR | src/main/session/correlation.ts:120 | typescript:S1121 | Extract the assignment of "correlationListeners" from this expression. | f6232929-7d9e-4598-bed4-68bb8c98e520 |
| 538 | CODE_SMELL | MINOR | src/renderer/chat.ts:3853 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | a11b7253-f2ae-4571-b72a-493200f56dcb |
| 539 | CODE_SMELL | MAJOR | src/renderer/chat.ts:3867 | typescript:S2301 | Provide multiple methods instead of using "visible" to determine which action to take. | 4708966b-97a4-4444-96a4-79e0856e89e4 |
| 540 | CODE_SMELL | MINOR | src/renderer/chat.ts:3868 | typescript:S7764 | Prefer `globalThis` over `window`. | 2050a6db-2504-484d-9fbe-9f2c80d1ac1d |
| 541 | CODE_SMELL | MINOR | src/renderer/chat.ts:3870 | typescript:S7764 | Prefer `globalThis` over `window`. | 50d487b4-f8a1-4cee-87a6-650245fed93b |
| 542 | CODE_SMELL | MAJOR | src/renderer/index.html:1195 | Web:S6819 | Use &lt;output&gt; instead of the status role to ensure accessibility across all devices. | 4f77e35b-5b3d-4d54-9efa-88b192542357 |
| 543 | CODE_SMELL | MAJOR | src/renderer/index.html:1195 | Web:S6819 | Use &lt;output&gt; instead of the status role to ensure accessibility across all devices. | 861b0872-14b1-4860-83c4-b14b91a22764 |
| 544 | CODE_SMELL | MAJOR | src/renderer/index.html:1195 | Web:S6819 | Use &lt;menu&gt; or &lt;ol&gt; or &lt;ul&gt; instead of the list role to ensure accessibility across all devices. | a82602cd-87aa-4c48-bbb2-7693327b805e |
| 545 | CODE_SMELL | MAJOR | src/renderer/index.html:1195 | Web:S6819 | Use &lt;output&gt; instead of the status role to ensure accessibility across all devices. | d194281b-ab7a-4ec7-8276-8cb2f27ac046 |
| 546 | CODE_SMELL | CRITICAL | src/main/codex-plugin-runtime.ts:61 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 22 to the 15 allowed. | 1f8f43e9-9e6d-4f2c-ae8c-10e40a5f7191 |
| 547 | CODE_SMELL | MAJOR | src/main/skill-library.ts:95 | typescript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | 5bfb959d-6b90-4021-a28c-689c4b5bd048 |
| 548 | CODE_SMELL | MAJOR | src/main/skill-library.ts:105 | typescript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | a9bad132-7b87-4a96-9d63-562db9bd14ac |
| 549 | CODE_SMELL | CRITICAL | src/main/skill-library.ts:276 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 24 to the 15 allowed. | 55a0d201-73fd-4364-9b87-af5f352ab4e5 |
| 550 | CODE_SMELL | MAJOR | src/main/mcp/kernel.ts:602 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 1d4154ed-3e2a-46c2-b522-c62fac3b2490 |
| 551 | CODE_SMELL | MAJOR | src/main/mcp/kernel.ts:602 | typescript:S4624 | Refactor this code to not use nested template literals. | 3a17656d-4c03-4c22-8198-ba361f3f450a |
| 552 | CODE_SMELL | MAJOR | src/main/mcp/kernel.ts:603 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | f9ca52df-22b2-450e-af1c-d63eedbe2d36 |
| 553 | CODE_SMELL | CRITICAL | src/main/mcp/tools-core.ts:1419 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 86 to the 15 allowed. | 73f8bbcf-9da0-4a6a-a732-82283d95679c |
| 554 | CODE_SMELL | MAJOR | src/main/bridge.ts:7397 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 65f265a3-5345-4fa8-91ff-5ab8c97f2da7 |
| 555 | CODE_SMELL | CRITICAL | src/main/bridge.ts:7509 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 26 to the 15 allowed. | 9ee483ac-30cb-4040-ac66-1bb9e5fb5739 |
| 556 | CODE_SMELL | MAJOR | src/renderer/recovery.ts:34 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 39b292a9-f005-4dbc-ad03-07264cf22f8a |
| 557 | CODE_SMELL | MAJOR | src/renderer/recovery.ts:36 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | afef168c-5327-45b7-83fc-d1eb1ce7a945 |
| 558 | CODE_SMELL | MAJOR | src/renderer/recovery.ts:38 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 8120913f-e6ec-4469-845d-62d7dc92ade7 |
| 559 | CODE_SMELL | MAJOR | src/renderer/recovery.ts:40 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 88a60a2a-9fb4-4781-a0ff-6f416687bc0a |
| 560 | CODE_SMELL | MAJOR | src/renderer/recovery.ts:41 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 1742f8fd-6a9e-4df3-a07d-78273ce129f8 |
| 561 | CODE_SMELL | CRITICAL | extension/popup.js:240 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | 0d644675-5c85-424e-880b-19c7649c2ebe |
| 562 | CODE_SMELL | MAJOR | src/renderer/pet-machine.ts:91 | typescript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | 7d19d9df-b0a5-4e7e-aa6d-d6f171648035 |
| 563 | CODE_SMELL | MINOR | scripts/verify-workspace-terminal.cjs:148 | javascript:S7780 | `String.raw` should be used to avoid escaping `\`. | dd1ee2db-06c9-48f6-bee4-553a21cfcbd8 |
| 564 | CODE_SMELL | MAJOR | extension/content.js:8010 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 52cf4120-792c-453a-b537-458b28b4bd6e |
| 565 | CODE_SMELL | MINOR | scripts/verify-pr-workspace.cjs:23 | javascript:S7780 | `String.raw` should be used to avoid escaping `\`. | 118a0ea8-e4a5-4071-ba7e-00d903b14020 |
| 566 | CODE_SMELL | CRITICAL | src/main/session/store.ts:1018 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 45 to the 15 allowed. | aa4abab9-2eb2-4cfc-9a98-6d8316d117ce |
| 567 | CODE_SMELL | CRITICAL | src/renderer/agent-panel.ts:46 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 42 to the 15 allowed. | 7c01f10e-4111-4b94-bfc7-721bf79e2334 |
| 568 | CODE_SMELL | MINOR | src/main/ipc.ts:875 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | 346b39ba-f47c-456d-8041-ab5cd94dd056 |
| 569 | CODE_SMELL | MINOR | src/main/projects.ts:56 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | f56b1586-07cc-45a0-9ee5-104844802312 |
| 570 | CODE_SMELL | MAJOR | extension/content.js:6688 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 0ec5d6c7-1d9b-4174-ab99-f70c0f68f545 |
| 571 | CODE_SMELL | MAJOR | extension/content.js:6688 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | ce1d5474-2da8-45c1-92f1-836fe790a898 |
| 572 | CODE_SMELL | MINOR | extension/content.js:6688 | javascript:S7735 | Unexpected negated condition. | eb561be2-99ea-43fc-86f2-3014e8a8e098 |
| 573 | CODE_SMELL | MAJOR | src/main/agents.ts:3976 | typescript:S2301 | Provide multiple methods instead of using "generating" to determine which action to take. | 65f01f6a-bd51-4d96-bb84-e8e1d29a61f5 |
| 574 | CODE_SMELL | CRITICAL | src/main/agents.ts:3985 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 29 to the 15 allowed. | 50d966e9-08d4-4daa-ac41-86720babbbc4 |
| 575 | CODE_SMELL | MAJOR | src/main/index.ts:349 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | a4ba863c-6ed9-4b0e-ba18-85da9d06e90a |
| 576 | CODE_SMELL | CRITICAL | src/main/session/input.ts:698 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 91 to the 15 allowed. | 1f1922a4-4255-482c-992b-783f0063d4e6 |
| 577 | CODE_SMELL | MAJOR | src/main/session/input.ts:765 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 0c495210-3af3-4fca-822c-11e835cbfc27 |
| 578 | CODE_SMELL | MINOR | src/main/session/skill-prompt.ts:15 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 293ca383-b1e3-43fd-9ef4-568a296995dc |
| 579 | CODE_SMELL | CRITICAL | src/main/skill-library.ts:224 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | a9416334-60ea-4569-a8a0-c985bb8c3b6d |
| 580 | CODE_SMELL | MINOR | src/main/skill-library.ts:234 | typescript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | fe00c1f8-0c9d-4b70-8e63-91fa35c41ced |
| 581 | CODE_SMELL | MINOR | src/renderer/chat.ts:6246 | typescript:S7764 | Prefer `globalThis` over `window`. | d7779e96-43b0-4bcf-9f3a-36e638cadf49 |
| 582 | CODE_SMELL | MAJOR | extension/content.js:11229 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 1e82892a-f047-40a1-a50f-ee21a55d585e |
| 583 | CODE_SMELL | MAJOR | extension/content.js:11241 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 592d9402-8951-4abd-8548-4dfdd25b3292 |
| 584 | CODE_SMELL | MAJOR | extension/background.js:4699 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | b2fce27c-f1f3-4aa4-98fe-b2a3edfbae50 |
| 585 | CODE_SMELL | MAJOR | extension/background.js:3095 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 7865292b-f61a-4df7-b767-91235ddb24ce |
| 586 | CODE_SMELL | MAJOR | src/renderer/agent-panel.ts:56 | typescript:S4624 | Refactor this code to not use nested template literals. | cc33fbbb-6c13-4ce2-bb30-5f9a47d49cc4 |
| 587 | CODE_SMELL | CRITICAL | extension/content.js:11755 | javascript:S3735 | Remove this use of the "void" operator. | a04b3828-43e3-4b34-9758-3c63d28d5f81 |
| 588 | CODE_SMELL | CRITICAL | src/main/agents.ts:1811 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 54 to the 15 allowed. | 2329351a-ff4a-470d-9230-10ef884b598b |
| 589 | CODE_SMELL | CRITICAL | src/main/agents.ts:2303 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 50 to the 15 allowed. | cebeb883-ca40-44a2-bd97-14c19efdcd52 |
| 590 | CODE_SMELL | MAJOR | src/main/keychain-notice.ts:88 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | d829c703-ea3b-4042-86fa-85b6a7bb49e7 |
| 591 | CODE_SMELL | MAJOR | src/main/keychain-notice.ts:89 | typescript:S1121 | Extract the assignment of "gate" from this expression. | 8f8eb34e-6678-46cc-9cf3-4e7d70c28dcb |
| 592 | CODE_SMELL | MAJOR | src/main/keychain-notice.ts:117 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 084740d3-ed74-4cb0-8828-d56d1fcb3ca4 |
| 593 | CODE_SMELL | MAJOR | src/renderer/index.html:169 | Web:S6819 | Use &lt;output&gt; instead of the status role to ensure accessibility across all devices. | c312d40f-64cb-493e-b9fd-f406bddffead |
| 594 | CODE_SMELL | MINOR | src/main/projects.ts:14 | typescript:S1874 | '(params?: unknown): ZodNumber' is deprecated. | 787fdf08-b7b1-4db3-bf2a-f58d600f27b5 |
| 595 | CODE_SMELL | MAJOR | src/main/mcp/kernel.ts:187 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | f2a6ca04-a2a5-4eb9-ac6f-bc7b6af7240d |
| 596 | CODE_SMELL | MAJOR | src/main/mcp/kernel.ts:186 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 2a52ec3b-a084-4a43-b7ed-a884e8df80d9 |
| 597 | CODE_SMELL | MINOR | src/main/mcp/kernel.ts:197 | typescript:S4325 | This assertion is unnecessary since it does not change the type of the expression. | 8c963113-deb6-41bc-9efd-b276e64b0a13 |
| 598 | CODE_SMELL | CRITICAL | src/main/mcp/kernel.ts:1008 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 68 to the 15 allowed. | 8784c0e3-327c-4083-82b9-eb401d842398 |
| 599 | CODE_SMELL | MAJOR | src/renderer/chat.ts:610 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 96c41ee2-c22f-4746-bf4d-0865df31155d |
| 600 | CODE_SMELL | MAJOR | src/main/session/trusted-chats.ts:36 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 9cfa674c-014a-4b62-8c29-adc15473801c |
| 601 | CODE_SMELL | MAJOR | src/renderer/chat-models.ts:211 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | ab468f9d-3bb4-4de4-b5f4-56578f3af334 |
| 602 | CODE_SMELL | MINOR | src/renderer/chat-models.ts:536 | typescript:S7764 | Prefer `globalThis` over `window`. | e93fc542-555d-435a-8e66-c322b8afd0fb |
| 603 | CODE_SMELL | MINOR | src/renderer/chat-models.ts:538 | typescript:S7764 | Prefer `globalThis` over `window`. | 7c8a0ce7-e7a1-493b-89bb-51fe86074eb6 |
| 604 | CODE_SMELL | CRITICAL | extension/fiber.js:202 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 32 to the 15 allowed. | ce188795-2e07-465c-ac62-eb8b57cae7de |
| 605 | CODE_SMELL | CRITICAL | scripts/verify-connection-compact.cjs:9 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 26 to the 15 allowed. | d476715d-0997-4203-babd-693b30ba5c3b |
| 606 | CODE_SMELL | CRITICAL | scripts/verify-navigation-motion.cjs:11 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | c05bb4df-45bd-4c4f-9dff-410a18d96077 |
| 607 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2449 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 26 to the 15 allowed. | a4158144-80aa-465f-9a7b-7bddd05d5043 |
| 608 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2500 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | e4a28f96-8faa-4e8a-9286-4448795d26c9 |
| 609 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2509 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 63ff5dae-d728-4935-a510-89007a563eec |
| 610 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2527 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 7e5097df-9b50-46cb-8072-2c15d77080b9 |
| 611 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2558 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 5083ede7-8db8-4109-a365-6f2ae390d1ba |
| 612 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2603 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 188fa422-4242-4aa2-b210-c4c0b5c631f9 |
| 613 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2603 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 1fec861d-3272-42a3-8a3c-a9ce45b1e4e1 |
| 614 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2603 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | c87e9878-6928-4c16-bddf-767ff4d12cfd |
| 615 | CODE_SMELL | MINOR | extension/content.js:12067 | javascript:S7764 | Prefer `globalThis` over `window`. | 8ccb63e9-f1c3-4abb-b222-d5ce69658e8e |
| 616 | CODE_SMELL | CRITICAL | extension/content.js:12074 | javascript:S3735 | Remove this use of the "void" operator. | d617a371-18d3-447f-9a22-a73f33f72653 |
| 617 | CODE_SMELL | CRITICAL | extension/content.js:12076 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | ff04d7b3-9e08-4647-9c18-b70bee8d4e9c |
| 618 | CODE_SMELL | CRITICAL | extension/content.js:3499 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 40 to the 15 allowed. | de4448de-a566-4028-8b57-a8bc79e950fa |
| 619 | CODE_SMELL | CRITICAL | extension/fiber.js:870 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 87 to the 15 allowed. | 1a463352-28ad-4e25-a531-d54702c9c4ac |
| 620 | CODE_SMELL | MINOR | extension/fiber.js:872 | javascript:S4138 | Expected a `for-of` loop instead of a `for` loop with this simple iteration. | 33252e26-36ec-4675-bfe7-df26f8e3e4ce |
| 621 | CODE_SMELL | CRITICAL | src/shared/session.ts:267 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 33 to the 15 allowed. | aecdcf8b-47e5-44f8-bee2-35515138528e |
| 622 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:3015 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 31 to the 15 allowed. | 9d9b0273-f7b9-40e8-9bde-e8f7834c52f0 |
| 623 | CODE_SMELL | MINOR | scripts/verify-composer-ui.cjs:116 | javascript:S7780 | `String.raw` should be used to avoid escaping `\`. | 594c6742-6730-4e82-b123-bcd18c842492 |
| 624 | CODE_SMELL | MAJOR | src/renderer/index.html:1265 | Web:S6819 | Use &lt;address&gt; or &lt;details&gt; or &lt;fieldset&gt; or &lt;optgroup&gt; instead of the group role to ensure accessibility across all devices. | 8db822a8-0685-4d57-9ca7-4f9fa017293c |
| 625 | CODE_SMELL | MAJOR | src/renderer/styles.css:3771 | css:S4666 | Unexpected duplicate selector ".power-spark .spark-brain", first used at line 3770 | 4a168550-7aa0-4f95-af26-3fbcd1ee0e8d |
| 626 | CODE_SMELL | CRITICAL | src/main/bridge.ts:9091 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 86 to the 15 allowed. | 97bc68af-a1c5-4eaf-a854-fe845101d22e |
| 627 | CODE_SMELL | MAJOR | src/main/bridge.ts:9439 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | e9d46b24-1dbd-4f55-9ece-489242637c5c |
| 628 | CODE_SMELL | MAJOR | src/main/bridge.ts:9440 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 196fc6b5-00a7-4b04-8e9b-18273c635233 |
| 629 | CODE_SMELL | MAJOR | src/main/bridge.ts:9440 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 270c6e47-9ecc-4a5b-9068-2ce65a737f68 |
| 630 | CODE_SMELL | MAJOR | src/main/bridge.ts:9440 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 98fb5f65-c960-4d0f-a820-3609abd31e05 |
| 631 | CODE_SMELL | CRITICAL | extension/content.js:8116 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 33 to the 15 allowed. | 15c90ec8-5ec8-43d2-a40c-521515e9322a |
| 632 | CODE_SMELL | MAJOR | extension/background.js:3847 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | f07d0e6f-7709-457e-a488-783015acf065 |
| 633 | BUG | MAJOR | extension/content.js:4249 | javascript:S3403 | Remove this "===" check; it will always be false. Did you mean to use "=="? | 2241798f-ab30-4562-97ce-7d255b508334 |
| 634 | CODE_SMELL | CRITICAL | extension/fiber.js:2021 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 222 to the 15 allowed. | 2b8a91f1-5857-4569-9c71-2d10f360e457 |
| 635 | CODE_SMELL | MAJOR | src/main/bridge.ts:2870 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 08417440-fd48-4a63-b372-677ab4b4550c |
| 636 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:4095 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | f3daf5ed-bfb3-45f5-b46e-d61b7ce29d78 |
| 637 | CODE_SMELL | MINOR | src/renderer/chat.ts:2058 | typescript:S6594 | Use the "RegExp.exec()" method instead. | 48f7d72e-35a9-4c46-babf-e6c409a297b0 |
| 638 | CODE_SMELL | MAJOR | src/renderer/chat-models.ts:566 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 4ae30522-2d93-425b-ad79-93af1acad0ac |
| 639 | CODE_SMELL | MAJOR | src/renderer/chat-models.ts:567 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 43447306-f97f-4445-8949-d94682a41d43 |
| 640 | CODE_SMELL | MAJOR | src/renderer/chat-models.ts:567 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | b9588729-c469-465a-9484-ff8d7eb26e48 |
| 641 | CODE_SMELL | CRITICAL | extension/content.js:24 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 45 to the 15 allowed. | afa41f1b-97f3-4670-ab3a-82a41828a92a |
| 642 | CODE_SMELL | MAJOR | extension/i18n.js:49 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 2ab0f434-8745-434d-8aa1-86e4ab7f9567 |
| 643 | CODE_SMELL | MINOR | extension/i18n.js:85 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 9f7ca708-4fb5-4696-a1d8-5cbe0667d071 |
| 644 | CODE_SMELL | MINOR | extension/i18n.js:89 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | abb4d608-c2d7-445e-b549-90fc613f4f28 |
| 645 | CODE_SMELL | MINOR | extension/i18n.js:94 | javascript:S6653 | Use 'Object.hasOwn()' instead of 'Object.prototype.hasOwnProperty.call()'. | e92a5e93-27f2-4dd8-bdb1-bcb45d1f0a75 |
| 646 | CODE_SMELL | CRITICAL | extension/popup.js:568 | javascript:S3735 | Remove this use of the "void" operator. | a0cb5977-cb3d-4834-9389-94dcdb446c62 |
| 647 | CODE_SMELL | CRITICAL | extension/content.js:2290 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 59 to the 15 allowed. | 1d878006-a05b-4d48-9d96-9a662a294d08 |
| 648 | CODE_SMELL | CRITICAL | extension/content.js:12168 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | 1f6697eb-9390-46ca-877c-5033c6fd7474 |
| 649 | CODE_SMELL | CRITICAL | src/renderer/usage.ts:120 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 31 to the 15 allowed. | b520da9e-8c82-4d53-a881-571c985f51bf |
| 650 | CODE_SMELL | CRITICAL | extension/content.js:11394 | javascript:S1994 | This loop's stop condition tests "reply, reply.ok, reply, reply.retryable, reply, Date, redeemStarted, REDEEM_RETRY_WINDOW_MS" but the incrementer updates "delay, Math". | 1da3e529-1e81-42d1-8359-2470168c9dd0 |
| 651 | CODE_SMELL | CRITICAL | src/main/session/usage.ts:54 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 105 to the 15 allowed. | 0e96937a-d512-42ec-a7d1-f163055cb65f |
| 652 | CODE_SMELL | MINOR | extension/content.js:3159 | javascript:S7764 | Prefer `globalThis` over `window`. | f7e9700b-cb52-4efb-b467-8c44ea04a595 |
| 653 | CODE_SMELL | MINOR | extension/content.js:3160 | javascript:S7764 | Prefer `globalThis` over `window`. | a9cc6e23-449f-49c5-82eb-e5293a716073 |
| 654 | CODE_SMELL | MINOR | extension/content.js:3161 | javascript:S7764 | Prefer `globalThis` over `window`. | e1094d89-1571-4101-94a8-b2297874c381 |
| 655 | CODE_SMELL | MINOR | extension/content.js:3164 | javascript:S7764 | Prefer `globalThis` over `window`. | 195c49c9-e537-47cd-82e3-ba3d727ec511 |
| 656 | CODE_SMELL | MINOR | extension/content.js:3165 | javascript:S7764 | Prefer `globalThis` over `window`. | 19c062e6-6a42-456b-9164-a74ebc91885d |
| 657 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:5443 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 73 to the 15 allowed. | adaef5cc-3049-4561-b1d0-368155dc9323 |
| 658 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:614 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 27 to the 15 allowed. | ec02d5f9-ac3a-46d1-94b3-5cb524ff7fc9 |
| 659 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:707 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 37 to the 15 allowed. | 4ec74daa-356e-4076-a6be-96ba5f340f98 |
| 660 | CODE_SMELL | MAJOR | extension/fiber.js:2175 | javascript:S6557 | Use the 'String#endsWith' method instead. | 1ac4ed23-11fa-43f3-bf31-72e25d09841d |
| 661 | CODE_SMELL | MAJOR | extension/fiber.js:2175 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 7f2624e8-2e6e-4054-9cdd-574850363090 |
| 662 | CODE_SMELL | MAJOR | extension/fiber.js:2262 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | b9bd44c4-a839-4e7e-bbbd-a186e30c3451 |
| 663 | CODE_SMELL | MAJOR | extension/fiber.js:2264 | javascript:S7761 | Prefer `.dataset` over `removeAttribute(…)`. | 34cce930-3697-4217-9eb8-dde2ea5e7a2a |
| 664 | CODE_SMELL | MAJOR | extension/fiber.js:2265 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | 97a7c6ca-2c59-41d9-bbc1-8be788979a77 |
| 665 | CODE_SMELL | CRITICAL | src/main/runtime-gc.ts:153 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 26 to the 15 allowed. | eadbfe2b-afb7-46a0-9ef7-04b6e5eb2e5e |
| 666 | CODE_SMELL | MAJOR | src/main/runtime-gc.ts:98 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | b97dff0f-c66c-4f20-b392-41d6ac7796f0 |
| 667 | CODE_SMELL | MAJOR | src/main/runtime-gc.ts:122 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 0bcb0660-78a5-4fcc-bf33-fd2941cc0428 |
| 668 | CODE_SMELL | MAJOR | src/main/runtime-gc.ts:186 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 6871bf83-708a-493f-a1e5-deab27d27664 |
| 669 | CODE_SMELL | CRITICAL | src/renderer/skills-library.ts:19 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 22 to the 15 allowed. | 8af17afc-8e36-487e-a5e1-84a1893a9dc0 |
| 670 | CODE_SMELL | CRITICAL | extension/background.js:3419 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 67 to the 15 allowed. | 335c4d25-5339-4d1d-8319-9661972951c0 |
| 671 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2422 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 3c2454bb-dc07-4722-a753-4f56319dfff7 |
| 672 | CODE_SMELL | CRITICAL | extension/content.js:12256 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 26 to the 15 allowed. | 1cbc91e7-a710-4fd3-9479-5e974fbdf726 |
| 673 | CODE_SMELL | MINOR | extension/content.js:12284 | javascript:S7735 | Unexpected negated condition. | 8eacc89c-0eee-42d6-a827-9cf32b767446 |
| 674 | CODE_SMELL | CRITICAL | src/main/session/input.ts:1805 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 24 to the 15 allowed. | 7b704c63-cc52-4019-a31f-67ac0af51383 |
| 675 | CODE_SMELL | MINOR | extension/content.js:12696 | javascript:S7735 | Unexpected negated condition. | 225b89f7-a9a4-4a72-a5b9-0d15f1de95b5 |
| 676 | CODE_SMELL | CRITICAL | src/main/bridge.ts:7655 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 168 to the 15 allowed. | 7b498964-7307-4aa8-aac6-c6ced82ee019 |
| 677 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:2364 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | d96a913a-f49a-4406-bc85-e99bc949477d |
| 678 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2509 | javascript:S2681 | This statement will not be executed in a loop; only the first statement will be. The rest will execute only once. | cc1e1627-0613-4a6d-921a-2d6cceb5402a |
| 679 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:359 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 26 to the 15 allowed. | edb7d927-a727-471e-a7a9-5b974d71bb62 |
| 680 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:362 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 32b5716d-af85-470d-b2c3-cdc9c9bedaee |
| 681 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:229 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | 9e252e09-bc08-42fb-84fc-6f1a7bcc79f5 |
| 682 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:2382 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | bdea8ffb-8781-4bab-b1e8-1ce830b45035 |
| 683 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:2382 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | e8b19bf1-1de5-45b2-8c80-8e897ab800b5 |
| 684 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2389 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | 8767d174-2694-4bfa-b6b6-ba25a7d10dae |
| 685 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2390 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | 3a6bda5b-0d4e-4c4b-9f06-329b1be36d69 |
| 686 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:2402 | javascript:S1874 | The signature '(commandId: string, showUI?: boolean \| undefined, value?: string \| undefined): boolean' of 'document.execCommand' is deprecated. | afa042e8-96f5-4436-867a-d073b44e229d |
| 687 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:2407 | javascript:S1874 | The signature '(commandId: string, showUI?: boolean \| undefined, value?: string \| undefined): boolean' of 'document.execCommand' is deprecated. | 446cece0-f786-4211-8b01-6ec6a83ce3b4 |
| 688 | CODE_SMELL | MINOR | extension/content.js:929 | javascript:S7764 | Prefer `globalThis` over `window`. | 1e945cff-660b-4c40-a0f3-7510d86934ac |
| 689 | CODE_SMELL | MINOR | extension/fiber.js:493 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | fa19583a-ea3f-429c-889b-f9493157ed0e |
| 690 | CODE_SMELL | CRITICAL | extension/usage.js:116 | javascript:S3735 | Remove this use of the "void" operator. | ee253ead-ce52-43e1-a730-2e0ceea4364b |
| 691 | CODE_SMELL | CRITICAL | extension/usage.js:146 | javascript:S3735 | Remove this use of the "void" operator. | c242aa6a-963d-42cc-9617-68bd6802cafc |
| 692 | CODE_SMELL | CRITICAL | extension/usage.js:431 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 21e548bd-2e35-4a96-9c34-a9c4593f129d |
| 693 | CODE_SMELL | CRITICAL | extension/background.js:1869 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | b1ff4aac-ea05-4527-b79b-2f8aafc2582d |
| 694 | CODE_SMELL | MINOR | extension/content.js:9609 | javascript:S7735 | Unexpected negated condition. | aac80ef3-d491-43eb-a9bd-8aa605e8be6f |
| 695 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:377 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | e2f78ec5-de81-4a88-859f-65c10586d24f |
| 696 | CODE_SMELL | MINOR | extension/content.js:626 | javascript:S7750 | Prefer `.findLast(…)` over `.filter(…).at(-1)`. | 5ff09300-1d63-4045-b673-ce998abff376 |
| 697 | CODE_SMELL | MAJOR | extension/content.js:628 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | f41ed908-dd9a-41be-a031-48aa894102cc |
| 698 | CODE_SMELL | CRITICAL | extension/content.js:11990 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | c887e807-c014-4053-bae1-b1e0adcb1999 |
| 699 | CODE_SMELL | MINOR | extension/content.js:11991 | javascript:S7764 | Prefer `globalThis` over `window`. | 10147d1a-8bfc-4cd5-85a0-9f9d3d3808f3 |
| 700 | CODE_SMELL | CRITICAL | extension/content.js:12024 | javascript:S3735 | Remove this use of the "void" operator. | fec9b3c6-e99f-4c8c-9bf2-008b0db3f354 |
| 701 | CODE_SMELL | MAJOR | extension/usage.js:390 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 6d99a87d-5b67-413f-b1df-2e588c0a6973 |
| 702 | CODE_SMELL | MINOR | extension/usage.js:398 | javascript:S7764 | Prefer `globalThis` over `window`. | d96cdef0-40fd-4192-884a-f0a77344ebe8 |
| 703 | CODE_SMELL | MINOR | extension/usage.js:398 | javascript:S7764 | Prefer `globalThis` over `window`. | e87e45c6-b199-4f86-a47b-77b84a50b00a |
| 704 | CODE_SMELL | CRITICAL | extension/usage.js:415 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 18 to the 15 allowed. | 35b77112-82d9-43d0-87ea-6945ff34298e |
| 705 | CODE_SMELL | CRITICAL | src/main/bridge.ts:1397 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 166 to the 15 allowed. | df1f2cb5-ae7e-4ddf-892c-d3e2d1eae7d2 |
| 706 | CODE_SMELL | CRITICAL | src/main/session/recorder.ts:2105 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 247 to the 15 allowed. | bf060057-a7a0-43b3-abf8-01a31cc8716f |
| 707 | CODE_SMELL | CRITICAL | src/main/sandbox.ts:179 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | 17f70c95-a123-432d-9ede-2ebaef9f1d26 |
| 708 | CODE_SMELL | MINOR | src/main/sandbox.ts:191 | typescript:S7718 | The catch parameter `probe` should be named `error_`. | 1bc8eac3-8515-4fa8-9db2-7521b23e8a6a |
| 709 | CODE_SMELL | CRITICAL | src/main/sandbox.ts:282 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | 545a49cd-5b08-48ea-83fa-1be38d5541e4 |
| 710 | CODE_SMELL | CRITICAL | src/main/sandbox.ts:431 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | 62cb277b-9bb6-4528-875d-1275d870effa |
| 711 | CODE_SMELL | MINOR | src/main/sandbox.ts:437 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 462ab68e-98c3-4202-adb6-9914d1fe39ff |
| 712 | CODE_SMELL | MINOR | scripts/pr-triage.mjs:59 | javascript:S7744 | The empty object is useless. | 435da49d-63bc-4ade-bb1b-3baa33ce3602 |
| 713 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:106 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 006704a1-a567-4b9a-afa1-fc0daf0206aa |
| 714 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:106 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 644a0ea1-c6a6-47fe-8eed-b3248bfe5d86 |
| 715 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:106 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | a1103056-4875-4d3b-bdca-f638934a42fa |
| 716 | CODE_SMELL | MINOR | extension/content.js:811 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 2394efaa-79b5-44d9-a505-ec8fd3d5c14b |
| 717 | CODE_SMELL | MINOR | extension/content.js:811 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 443cdbfb-b88a-483c-9684-7b983ba2c2c5 |
| 718 | CODE_SMELL | MAJOR | extension/content.js:811 | javascript:S6535 | Unnecessary escape character: \/. | 45208e0b-efc8-4983-9683-bae210ca2baf |
| 719 | CODE_SMELL | MAJOR | extension/content.js:811 | javascript:S6535 | Unnecessary escape character: \[. | ba812d8f-f177-4f87-ad19-4620b49e39e2 |
| 720 | CODE_SMELL | MINOR | extension/content.js:812 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | f449df19-6744-45d7-a6df-6a2f0be0c7cd |
| 721 | CODE_SMELL | MINOR | src/shared/session.ts:543 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 250c9888-b118-4f1a-b600-946e5cf47ce4 |
| 722 | CODE_SMELL | MINOR | src/shared/session.ts:543 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 25683240-7a6c-4cb6-9cdf-a4e21ca41200 |
| 723 | CODE_SMELL | MINOR | src/shared/session.ts:543 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | e15eb76e-4a72-421b-9b38-06888f20b354 |
| 724 | CODE_SMELL | MINOR | src/shared/user-prompt.ts:27 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 26e1222e-bde3-43d3-91b8-b2c3123b412a |
| 725 | CODE_SMELL | MINOR | src/shared/user-prompt.ts:27 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | ae01b578-6740-439c-b771-122730595ed2 |
| 726 | CODE_SMELL | MINOR | src/shared/user-prompt.ts:27 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | bf18df93-62bb-4193-b1d3-79048ee7dee4 |
| 727 | CODE_SMELL | MAJOR | scripts/weekly-digest.mjs:16 | javascript:S4624 | Refactor this code to not use nested template literals. | 38b51a55-95e8-4151-96bc-e6806a9a3cdf |
| 728 | CODE_SMELL | MINOR | scripts/weekly-digest.mjs:29 | javascript:S7744 | The empty object is useless. | a621c6ba-c319-4787-9d96-2ce5933d912c |
| 729 | CODE_SMELL | CRITICAL | scripts/weekly-digest.mjs:34 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 25 to the 15 allowed. | 283462f0-6a9d-461e-8e32-840ed57ac3f6 |
| 730 | CODE_SMELL | MAJOR | scripts/weekly-digest.mjs:48 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | ff7a6f68-cb82-43dc-889d-2a5e2c9ace30 |
| 731 | BUG | CRITICAL | scripts/weekly-digest.mjs:52 | javascript:S2871 | Provide a compare function to avoid sorting elements alphabetically. | b87f2cee-55b0-4fc4-b225-116e6680842e |
| 732 | CODE_SMELL | MAJOR | scripts/verify-ui.mjs:82 | javascript:S4624 | Refactor this code to not use nested template literals. | c29a5320-7297-481a-ac0b-13760873c1c0 |
| 733 | CODE_SMELL | MINOR | scripts/waiting-prs.mjs:33 | javascript:S7744 | The empty object is useless. | 9de4cd3d-615d-47d0-bd17-314e69e0f19d |
| 734 | CODE_SMELL | MINOR | scripts/similar-issues.mjs:11 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 80dc96ad-2f28-49ab-b819-e8de68bc57e5 |
| 735 | CODE_SMELL | MINOR | scripts/similar-issues.mjs:11 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | b500585b-6f68-4425-9bad-a6e991828248 |
| 736 | CODE_SMELL | MINOR | scripts/similar-issues.mjs:12 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | cc514e4c-a46b-48d8-91a9-6039fee35811 |
| 737 | CODE_SMELL | MINOR | scripts/similar-issues.mjs:44 | javascript:S7744 | The empty object is useless. | 5a378ad4-6084-4cf3-adc3-709e70d177b6 |
| 738 | CODE_SMELL | MAJOR | scripts/draft-release-notes.mjs:19 | javascript:S6557 | Use the 'String#endsWith' method instead. | 53021fd9-c676-4900-b3f8-8dc0bbebe39b |
| 739 | CODE_SMELL | MAJOR | scripts/flaky-reporter.mjs:26 | javascript:S4624 | Refactor this code to not use nested template literals. | 6a214fb7-2b2d-47ef-9cb6-b70fe73f5246 |
| 740 | CODE_SMELL | MAJOR | extension/content.js:5984 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | f6b50fe5-c73e-4ea7-b2ea-3c411ec64cbc |
| 741 | CODE_SMELL | MAJOR | src/main/bridge.ts:9329 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 544345c5-ef55-466d-8edc-fb9fb71a5b3b |
| 742 | CODE_SMELL | CRITICAL | extension/fiber.js:2414 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | 01d07f07-0ed7-482a-bcde-1bd8ccfa90bd |
| 743 | CODE_SMELL | MAJOR | extension/fiber.js:2433 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 8a1a95a3-694c-4e8d-8635-55ed031e3479 |
| 744 | CODE_SMELL | MINOR | src/renderer/chat.ts:3487 | typescript:S7755 | Prefer `.at(…)` over `[….length - index]`. | cded5f8a-d6b1-40c3-97a0-0460664b059e |
| 745 | CODE_SMELL | MINOR | scripts/verify-chat-opening-scroll.cjs:44 | javascript:S7780 | `String.raw` should be used to avoid escaping `\`. | 162ce974-ad8b-48d5-9573-b48e27813946 |
| 746 | CODE_SMELL | MINOR | scripts/verify-history-scroll.cjs:34 | javascript:S7780 | `String.raw` should be used to avoid escaping `\`. | 4f53c700-d500-4a1f-824d-a4e0ceac6ba3 |
| 747 | CODE_SMELL | MAJOR | src/main/session/summarize.ts:203 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 313983f5-e08b-4929-8d03-f7af2a22eea6 |
| 748 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:4131 | typescript:S3735 | Remove this use of the "void" operator. | b509b86b-0bbc-4249-b5fa-3f13e4cd246f |
| 749 | CODE_SMELL | MAJOR | src/renderer/chat.ts:4137 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 05fa808c-d3a9-4677-b6c6-1c21c3095658 |
| 750 | CODE_SMELL | MAJOR | src/renderer/chat.ts:4137 | typescript:S4624 | Refactor this code to not use nested template literals. | 5acf25fa-f487-4cee-93e5-f5cf233ff2be |
| 751 | CODE_SMELL | MAJOR | src/renderer/chat.ts:4237 | typescript:S2301 | Provide multiple methods instead of using "working" to determine which action to take. | 75b96008-9d6b-4112-b394-0a6a07ef565c |
| 752 | CODE_SMELL | CRITICAL | extension/background.js:4565 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 45 to the 15 allowed. | f4b8c657-d491-4daa-9730-c3cc25d63daa |
| 753 | CODE_SMELL | CRITICAL | scripts/pr-check.mjs:48 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | 9ece1901-44a6-402e-b26a-21551f246bdc |
| 754 | CODE_SMELL | CRITICAL | src/main/session/recorder.ts:882 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 113 to the 15 allowed. | 8d4dee3d-ca31-4411-a9e9-2010a6f07c3a |
| 755 | CODE_SMELL | CRITICAL | src/main/session/recorder.ts:2047 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 38 to the 15 allowed. | c037338d-590e-489d-94c0-31ef680cff4b |
| 756 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:1607 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 51 to the 15 allowed. | bf0a1f4c-3186-483c-a885-703056e0c348 |
| 757 | CODE_SMELL | CRITICAL | extension/content.js:9991 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 24 to the 15 allowed. | 56afa63d-eb18-4a36-8796-633b997c6377 |
| 758 | CODE_SMELL | MINOR | src/main/bridge.ts:223 | typescript:S3863 | './session/store.js' imported multiple times. | 492b6815-03cd-43a1-a9a1-f3c8aff167c4 |
| 759 | CODE_SMELL | MAJOR | src/main/bridge.ts:6427 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | d5e7b1e2-e3e2-4d21-a50f-068432b66c5a |
| 760 | CODE_SMELL | MAJOR | src/main/bridge.ts:6439 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 90e8234c-4320-4e2b-a71b-4268445f1074 |
| 761 | CODE_SMELL | CRITICAL | src/main/bridge.ts:8581 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 61 to the 15 allowed. | defe5057-963c-4211-b481-8ee3d180cc2f |
| 762 | CODE_SMELL | CRITICAL | src/main/session/store.ts:1869 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | 3b8b9811-3833-4bd2-9252-e1937896f3d1 |
| 763 | CODE_SMELL | MINOR | src/main/session/store.ts:1895 | typescript:S7750 | Prefer `.findLast(…)` over `.filter(…).at(-1)`. | f4bdca17-233a-49fd-ade8-1181ff02668d |
| 764 | CODE_SMELL | MAJOR | src/main/session/store.ts:1903 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 809c03f3-a099-4b79-bd3e-955ab8c4dec1 |
| 765 | CODE_SMELL | MINOR | extension/content.js:2205 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 7b29291b-ca12-4938-be8a-6baf5a7489a8 |
| 766 | CODE_SMELL | MAJOR | src/main/bridge.ts:6546 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | b4c54920-bb44-478f-bc3c-7ee49a9976ff |
| 767 | CODE_SMELL | MINOR | scripts/pr-fail-first.mjs:59 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 612b7b45-f175-4c16-86c9-03ec9a192b38 |
| 768 | CODE_SMELL | MINOR | extension/fiber.js:897 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 361dc397-7c4b-4663-833f-9923fd8c7a77 |
| 769 | CODE_SMELL | MINOR | extension/fiber.js:900 | javascript:S7773 | Prefer `Number.isFinite` over `isFinite`. | 04f7d240-f449-4b24-a9e5-f5f9e1acfcd1 |
| 770 | CODE_SMELL | MAJOR | extension/fiber.js:901 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 1274f252-5f9d-41e0-891d-b3e04b041f65 |
| 771 | CODE_SMELL | MINOR | extension/fiber.js:1025 | javascript:S4138 | Expected a `for-of` loop instead of a `for` loop with this simple iteration. | 560ad729-cc2a-4387-a083-ddd0bbe486dd |
| 772 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:1892 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | 1231d855-a564-4306-bd79-e599eb65e2f8 |
| 773 | CODE_SMELL | MAJOR | src/renderer/chat.ts:1903 | typescript:S7761 | Prefer `.dataset` over `hasAttribute(…)`. | 065bbb1a-cd7f-4c72-8951-a43345afe989 |
| 774 | CODE_SMELL | MAJOR | src/renderer/chat.ts:1903 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 4306b22b-a9a1-4606-ba20-4db94df0fb62 |
| 775 | CODE_SMELL | MINOR | src/renderer/chat.ts:1911 | typescript:S6594 | Use the "RegExp.exec()" method instead. | fc38101a-2908-4e6a-addf-20cbf02bfe2a |
| 776 | CODE_SMELL | MINOR | src/renderer/chat.ts:1913 | typescript:S6594 | Use the "RegExp.exec()" method instead. | 0db4cf93-c3fa-4893-aab3-11441938da44 |
| 777 | CODE_SMELL | MINOR | src/renderer/chat.ts:1913 | typescript:S6594 | Use the "RegExp.exec()" method instead. | c17cdfab-f7e4-45a4-85b7-bdbe97aa229f |
| 778 | CODE_SMELL | MINOR | src/renderer/chat.ts:1939 | typescript:S4325 | This assertion is unnecessary since it does not change the type of the expression. | 75ac1e4f-96d1-4b7d-942a-279975653d7b |
| 779 | CODE_SMELL | MINOR | src/renderer/chat.ts:1940 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 537d28a2-1c8d-48fe-9dab-b3c0027bda4d |
| 780 | CODE_SMELL | MINOR | src/renderer/chat.ts:2006 | typescript:S7764 | Prefer `globalThis` over `window`. | 1e53a84b-7753-4f12-babd-5611db9b92b0 |
| 781 | CODE_SMELL | MINOR | src/renderer/chat.ts:2015 | typescript:S7764 | Prefer `globalThis` over `window`. | 799f7ac4-bf88-41f0-954e-4ba0a73fe836 |
| 782 | CODE_SMELL | MINOR | src/renderer/chat.ts:2016 | typescript:S7764 | Prefer `globalThis` over `window`. | f5109813-4902-4dec-808a-9829fe1ada31 |
| 783 | CODE_SMELL | MINOR | src/renderer/chat.ts:2018 | typescript:S7764 | Prefer `globalThis` over `window`. | 8c96dd0c-0624-4d09-9f88-59412977a035 |
| 784 | CODE_SMELL | MINOR | src/renderer/chat.ts:2018 | typescript:S7764 | Prefer `globalThis` over `window`. | b99bb318-c594-43d3-afb4-769669db1653 |
| 785 | CODE_SMELL | MINOR | src/renderer/chat.ts:2089 | typescript:S6594 | Use the "RegExp.exec()" method instead. | 64ecdfd2-0369-4d07-8727-83e23868b8fe |
| 786 | CODE_SMELL | MINOR | src/renderer/chat.ts:2093 | typescript:S6594 | Use the "RegExp.exec()" method instead. | da4d6a7b-b45f-4b58-a4f4-4db900aa62f5 |
| 787 | CODE_SMELL | MINOR | src/renderer/chat.ts:2124 | typescript:S6594 | Use the "RegExp.exec()" method instead. | 40043095-c6cb-4267-88d1-92154e6c4685 |
| 788 | CODE_SMELL | MINOR | src/shared/session.ts:270 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 4f4250fa-7da8-44f6-a4be-c686ee2dd2f5 |
| 789 | CODE_SMELL | MAJOR | src/renderer/chat.ts:1358 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 439d8dd1-4939-43ab-bc90-10c74c62d1ba |
| 790 | CODE_SMELL | MAJOR | src/renderer/chat.ts:1358 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 4d631ad5-8705-48b0-bbc2-705b5641125d |
| 791 | CODE_SMELL | MAJOR | src/renderer/chat.ts:1358 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 5ae777ed-3942-4e3f-bd09-ad203034af45 |
| 792 | CODE_SMELL | MINOR | src/renderer/chat.ts:1358 | typescript:S7735 | Unexpected negated condition. | 633c8ed0-96a9-45a1-ac0c-474b5b6d8185 |
| 793 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:1358 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 24 to the 15 allowed. | 9e233832-e66d-4aea-b809-8daa8f3cab9c |
| 794 | CODE_SMELL | MAJOR | src/renderer/chat.ts:1358 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | a6d0cc50-93ec-463a-b9e2-d71485fcb8b6 |
| 795 | CODE_SMELL | MAJOR | src/renderer/chat.ts:1358 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | b822bd8d-cf13-4cc1-804f-3092a8d8bb33 |
| 796 | CODE_SMELL | MAJOR | src/renderer/chat.ts:5109 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 0e511e07-f613-4b1d-a04e-b905c249b3f1 |
| 797 | CODE_SMELL | MAJOR | src/renderer/chat.ts:5109 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 4131d70e-6db4-4237-93ab-809f477d0508 |
| 798 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:5109 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 28 to the 15 allowed. | 68d104a7-acf8-476c-bc28-3b92fdf5da6e |
| 799 | CODE_SMELL | MAJOR | src/renderer/chat.ts:5109 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 70b9dc74-e799-49c8-b548-f1da5668d1f8 |
| 800 | CODE_SMELL | MAJOR | src/renderer/chat.ts:5109 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | ab9c5ca8-04b5-4990-a568-604784b7fa7d |
| 801 | CODE_SMELL | MAJOR | src/renderer/chat.ts:5109 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | d697199c-0ea1-4a7a-8ae2-64f66791f551 |
| 802 | CODE_SMELL | MAJOR | src/renderer/chat.ts:5109 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | e7ca77f3-4b1e-47e2-bff0-4f09a08a0b8a |
| 803 | CODE_SMELL | MAJOR | src/renderer/context-meter.ts:45 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | dd83f9e3-4a00-4764-b41b-54b9eef65c30 |
| 804 | CODE_SMELL | MINOR | src/renderer/usage.ts:84 | typescript:S7735 | Unexpected negated condition. | 04f449e9-8a96-4c5f-b561-6745f0bdf025 |
| 805 | CODE_SMELL | MAJOR | src/renderer/usage.ts:84 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 2186bad2-e109-4222-b42f-7a3903dc852b |
| 806 | CODE_SMELL | MAJOR | src/renderer/usage.ts:84 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 34ee9f22-a485-4d8d-97cf-73ea0e8f61c8 |
| 807 | CODE_SMELL | MINOR | src/renderer/usage.ts:84 | typescript:S7735 | Unexpected negated condition. | 682396b0-c5b9-45fa-ade6-05e53b38fba7 |
| 808 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:2266 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | 994d5f10-c24a-49ab-96cf-38d58b42488b |
| 809 | CODE_SMELL | MAJOR | src/renderer/chat.ts:2283 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 07cf4fb0-bec6-4ed5-8464-4141cf637bd9 |
| 810 | CODE_SMELL | MAJOR | src/main/agents.ts:1726 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | ae3e071e-d9a6-4d1b-8ec2-30fffbc1a3f1 |
| 811 | CODE_SMELL | MINOR | src/main/agents.ts:1726 | typescript:S4325 | This assertion is unnecessary since it does not change the type of the expression. | c709e45c-59c7-4b56-befd-9849a58f5b12 |
| 812 | CODE_SMELL | MAJOR | src/main/goal.ts:1861 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 1e4113df-7e33-4d08-9149-b3a4fc2a8288 |
| 813 | CODE_SMELL | MINOR | src/shared/chat-models.ts:34 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | b4e7a2f1-c351-4822-ad1a-e3e0e2368442 |
| 814 | CODE_SMELL | MAJOR | scripts/pr-check.mjs:18 | javascript:S5843 | Simplify this regular expression to reduce its complexity from 31 to the 20 allowed. | a499e437-7725-4ef7-9b85-b415211da66f |
| 815 | CODE_SMELL | MINOR | scripts/pr-check.mjs:33 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | fa0a57e7-d35c-43f3-999d-369b89c03551 |
| 816 | CODE_SMELL | CRITICAL | extension/content.js:12621 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 8635a20e-974d-477f-b85b-d1fae80a2476 |
| 817 | CODE_SMELL | CRITICAL | extension/content.js:8833 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 63 to the 15 allowed. | 3fab884f-3701-4d2b-bdf9-fadee00b0af9 |
| 818 | CODE_SMELL | MAJOR | extension/content.js:10857 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 862f7623-83de-473b-b87d-16e55d8f9f58 |
| 819 | CODE_SMELL | CRITICAL | src/main/control-api.ts:359 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 28 to the 15 allowed. | f50adc44-2162-4d23-bf56-99f0d5c2922a |
| 820 | CODE_SMELL | MINOR | src/main/control-actions.ts:36 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | e3e37ddf-0c80-448f-9f13-7d71bc3e5c81 |
| 821 | CODE_SMELL | MAJOR | src/main/control-api.ts:391 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 8e5cdfc3-6d37-404a-880e-ed656c0eedac |
| 822 | CODE_SMELL | CRITICAL | src/renderer/main.ts:718 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | 6c6eede1-a69c-4310-995d-5cdd73e9e364 |
| 823 | CODE_SMELL | CRITICAL | src/main/session/title.ts:62 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | f5a0ad7c-c3e6-4f23-ba90-6543f03a6f8e |
| 824 | CODE_SMELL | MAJOR | scripts/verify-context-dialog.cjs:42 | javascript:S1854 | Remove this useless assignment to variable "click". | 8f336c02-4f93-421b-9144-adbbe9b56839 |
| 825 | CODE_SMELL | MINOR | scripts/verify-context-dialog.cjs:42 | javascript:S1481 | Remove the declaration of the unused 'click' variable. | 93a7fc5d-4d29-41b4-bca1-e7c17b2f97d5 |
| 826 | CODE_SMELL | MINOR | scripts/verify-context-dialog.cjs:44 | javascript:S1481 | Remove the declaration of the unused 'mouse' variable. | 0ae681a8-2d3e-4f45-83fe-088321a7b3e3 |
| 827 | CODE_SMELL | MAJOR | scripts/verify-context-dialog.cjs:44 | javascript:S1854 | Remove this useless assignment to variable "mouse". | 5693848d-aad7-4f04-8574-d5e23d74585f |
| 828 | CODE_SMELL | MINOR | scripts/verify-context-dialog.cjs:45 | javascript:S1481 | Remove the declaration of the unused 'key' variable. | 36451ec7-51ca-4d31-af3b-62978a8ab722 |
| 829 | CODE_SMELL | MAJOR | scripts/verify-context-dialog.cjs:45 | javascript:S1854 | Remove this useless assignment to variable "key". | b70fb241-390a-4ff1-96ce-e0b9399ec1a1 |
| 830 | CODE_SMELL | MAJOR | scripts/verify-context-dialog.cjs:46 | javascript:S1854 | Remove this useless assignment to variable "state". | 682f233b-bf02-4d2f-8dbe-d86eeb6162e8 |
| 831 | CODE_SMELL | MINOR | scripts/verify-context-dialog.cjs:46 | javascript:S1481 | Remove the declaration of the unused 'state' variable. | e67201ee-acea-4be5-9986-7f5f38dad277 |
| 832 | CODE_SMELL | MINOR | scripts/verify-chat-stays-at-end.cjs:45 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | a6a4784c-8fcd-4245-975d-36c095175ed4 |
| 833 | CODE_SMELL | MINOR | scripts/verify-chat-stays-at-end.cjs:65 | javascript:S7780 | `String.raw` should be used to avoid escaping `\`. | 5bbc9be1-0da2-46a9-81e2-5339e3911a4e |
| 834 | CODE_SMELL | MINOR | src/renderer/chat-models.ts:304 | typescript:S6571 | "pro" \| "none" \| "minimal" \| "low" \| "medium" \| "high" \| "xhigh" \| "max" \| "ultra" is overridden by string in this union type. | de622bd4-c7ce-4275-b458-32881db329c4 |
| 835 | BUG | CRITICAL | scripts/verify-ui.mjs:27 | javascript:S2871 | Provide a compare function that depends on "String.localeCompare", to reliably sort elements alphabetically. | 761d661f-0682-48fd-92e2-8770c2a6d6ff |
| 836 | CODE_SMELL | MINOR | src/renderer/chat.ts:2932 | typescript:S7764 | Prefer `globalThis` over `window`. | e306d02a-07b5-4fdd-9601-3e7b68b38234 |
| 837 | CODE_SMELL | MINOR | src/renderer/chat.ts:2933 | typescript:S7764 | Prefer `globalThis` over `window`. | 7178f6ca-e285-4957-9ef0-4713c85f6646 |
| 838 | CODE_SMELL | MINOR | src/shared/markdown-export.ts:76 | typescript:S7737 | Do not use an object literal as default for parameter `labels`. | 03b7de1c-4c88-4192-ac54-58b3c4c9112e |
| 839 | CODE_SMELL | MINOR | src/shared/markdown-export.ts:87 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 506a3fca-c736-41f1-83ef-7384ba67f858 |
| 840 | CODE_SMELL | MINOR | src/shared/markdown-export.ts:87 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | be95a2b6-d42a-4d0d-a117-95f62efceb3c |
| 841 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:4324 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 49 to the 15 allowed. | 2a8d27d6-cd7d-4894-91ea-3005d670d038 |
| 842 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:1587 | typescript:S7764 | Prefer `globalThis` over `window`. | 7180f614-47b5-454e-8b3f-7c99e41ac867 |
| 843 | CODE_SMELL | CRITICAL | src/renderer/panel-motion.ts:33 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | f871dd47-2fa4-43e1-a947-a2edaaf7ade7 |
| 844 | CODE_SMELL | MAJOR | src/renderer/tab-reorder.ts:28 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | b2b39024-d899-4afb-a21f-3c496c0bed66 |
| 845 | CODE_SMELL | CRITICAL | src/renderer/tab-reorder.ts:31 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | d2969022-796a-4e8e-9789-9c454d47834e |
| 846 | CODE_SMELL | MAJOR | src/renderer/tab-reorder.ts:56 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 62e6c695-9911-465b-9b49-9f58837a7878 |
| 847 | CODE_SMELL | MAJOR | src/renderer/tab-reorder.ts:86 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 6ea14733-f63c-4acb-92de-ebc8b213a965 |
| 848 | CODE_SMELL | CRITICAL | src/renderer/workspace-docks.ts:125 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 51 to the 15 allowed. | 14a51090-135b-4a4d-8a02-76af81a69402 |
| 849 | CODE_SMELL | MAJOR | src/renderer/workspace-docks.ts:140 | typescript:S4624 | Refactor this code to not use nested template literals. | 7e913faa-26a9-4cb2-9973-3f4d96f38655 |
| 850 | CODE_SMELL | MAJOR | src/renderer/workspace-docks.ts:162 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 59dab4ec-17fe-4da6-8aae-ef88fd5a3763 |
| 851 | CODE_SMELL | MAJOR | src/renderer/workspace-docks.ts:162 | typescript:S4624 | Refactor this code to not use nested template literals. | da658880-76b6-4b58-a44f-dc520e4ddf78 |
| 852 | CODE_SMELL | MAJOR | src/renderer/workspace-terminal.ts:88 | typescript:S4624 | Refactor this code to not use nested template literals. | f729fb03-63fe-40c7-8c54-20d0f73d3e93 |
| 853 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:2436 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | 92d1230f-3840-4658-81da-59fceee4cc1d |
| 854 | CODE_SMELL | MINOR | src/main/control-reads.ts:80 | typescript:S7758 | Prefer `String#codePointAt()` over `String#charCodeAt()`. | b56b650d-4bbb-43f5-8bd4-a1f928595b78 |
| 855 | CODE_SMELL | MINOR | src/main/control-reads.ts:517 | typescript:S6571 | 'unknown' overrides all other types in this union type. | 2be584ab-9f1c-4c63-a859-1e48d0ed7819 |
| 856 | CODE_SMELL | MINOR | src/main/redaction.ts:12 | typescript:S6353 | Use concise character class syntax '\w' instead of '[A-Za-z0-9_]'. | ba32a748-ae74-4365-88ba-b016da8134bd |
| 857 | CODE_SMELL | MAJOR | src/renderer/styles.css:4201 | css:S4666 | Unexpected duplicate selector "#contextMeterButton", first used at line 4198 | a07f1220-ebdc-49b1-8148-f757c969bbd5 |
| 858 | CODE_SMELL | MINOR | src/main/control-api.ts:148 | typescript:S7735 | Unexpected negated condition. | f862350d-e5db-44d4-a874-d84d529f612a |
| 859 | CODE_SMELL | MAJOR | scripts/fixtures/composer-ui.js:54 | javascript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | 9ea8560c-b6f9-46cb-bdb7-20fa69d55803 |
| 860 | CODE_SMELL | MINOR | scripts/fixtures/composer-ui.js:62 | javascript:S7764 | Prefer `globalThis` over `window`. | ff6f7792-844c-49cd-9241-22992d2987d2 |
| 861 | CODE_SMELL | MINOR | scripts/fixtures/composer-ui.js:67 | javascript:S7764 | Prefer `globalThis` over `window`. | 1c2d1b29-2623-4d97-a95e-9d6c62fdd3b5 |
| 862 | CODE_SMELL | MINOR | src/renderer/chat-models.ts:289 | typescript:S7764 | Prefer `globalThis` over `window`. | a7499e62-0bc4-4fb1-8a26-cce6bbf0d17d |
| 863 | CODE_SMELL | MINOR | src/renderer/chat-models.ts:294 | typescript:S7753 | Use `.indexOf()` instead of `.findIndex()` when looking for the index of an item. | 28371b8f-c0ce-49f1-abcc-bffd9bdf78cf |
| 864 | CODE_SMELL | MAJOR | src/renderer/chat.ts:1516 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 22d2f59b-c2ec-4f16-8e60-82a37c7fb628 |
| 865 | CODE_SMELL | MAJOR | src/renderer/chat.ts:1518 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | a6151096-ee72-4c0b-979e-18068e871ffc |
| 866 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:1532 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 21 to the 15 allowed. | 2283020e-2516-4234-b864-bd91728d01fe |
| 867 | CODE_SMELL | MAJOR | src/renderer/context-meter.ts:53 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 832ab3d3-7f04-41d7-bdd6-1b2ce6663b17 |
| 868 | CODE_SMELL | MAJOR | src/renderer/index.html:1218 | Web:S6819 | Use &lt;input&gt; instead of the radio role to ensure accessibility across all devices. | dbc30c8e-23f4-4733-a805-805f6e3335d6 |
| 869 | CODE_SMELL | MAJOR | src/renderer/index.html:1219 | Web:S6819 | Use &lt;input&gt; instead of the radio role to ensure accessibility across all devices. | 07520770-532e-4d2d-9ac3-3c4d193f96c7 |
| 870 | CODE_SMELL | MAJOR | src/renderer/index.html:1220 | Web:S6819 | Use &lt;input&gt; instead of the radio role to ensure accessibility across all devices. | ad3be833-5b73-4877-ac91-3ed93cece402 |
| 871 | CODE_SMELL | MAJOR | src/renderer/index.html:1240 | Web:S6819 | Use &lt;dialog&gt; instead of the dialog role to ensure accessibility across all devices. | 5bb5d49b-ce54-4953-9a5a-c2ea06032864 |
| 872 | CODE_SMELL | MAJOR | src/renderer/index.html:1242 | Web:S6819 | Use &lt;progress&gt; instead of the progressbar role to ensure accessibility across all devices. | d48b4622-8697-4a3e-b333-399a827deb2f |
| 873 | CODE_SMELL | MAJOR | src/renderer/index.html:1246 | Web:S6819 | Use &lt;output&gt; instead of the status role to ensure accessibility across all devices. | 5eaabb9d-0b29-4187-8465-5f3575a4ff94 |
| 874 | CODE_SMELL | MAJOR | src/renderer/index.html:1252 | Web:S6819 | Use &lt;output&gt; instead of the status role to ensure accessibility across all devices. | 722fb6f2-0d62-4ce5-b775-c5141fece582 |
| 875 | CODE_SMELL | MAJOR | src/renderer/index.html:1263 | Web:S6819 | Use &lt;address&gt; or &lt;details&gt; or &lt;fieldset&gt; or &lt;optgroup&gt; instead of the group role to ensure accessibility across all devices. | d560203f-3877-4f06-aa5d-938e18806797 |
| 876 | CODE_SMELL | MAJOR | src/renderer/styles.css:2335 | css:S4666 | Unexpected duplicate selector "#timelineEmpty", first used at line 2325 | 138ee9a3-c443-454a-b29a-2a70538933e3 |
| 877 | CODE_SMELL | MAJOR | src/renderer/styles.css:3612 | css:S4666 | Unexpected duplicate selector ".composer-popover button", first used at line 3599 | ce6af6b5-6e5c-47a4-b3aa-7e0e1b52dbaf |
| 878 | CODE_SMELL | MINOR | src/shared/content-reference.ts:25 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 81a09869-5457-426d-ac8c-04d40cc4a600 |
| 879 | CODE_SMELL | MINOR | src/shared/content-reference.ts:26 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 0f670e6d-16e3-45a6-95cc-94120238ae1f |
| 880 | CODE_SMELL | CRITICAL | src/main/goal.ts:2542 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 92 to the 15 allowed. | 99df09aa-7ca5-433a-9fb8-650c9d6e4b6a |
| 881 | CODE_SMELL | MINOR | src/shared/content-reference.ts:43 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | fbb2bc40-4170-43a2-9efb-e7681e456e87 |
| 882 | CODE_SMELL | MINOR | src/shared/content-reference.ts:44 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | ca6f2ce0-cc18-47e6-9071-ff7d4878913b |
| 883 | CODE_SMELL | MINOR | src/shared/content-reference.ts:45 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 8b0b37fe-ce49-44be-b56d-ce8bfaf173a7 |
| 884 | CODE_SMELL | MINOR | src/shared/content-reference.ts:46 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 37fccf01-f67a-4480-9274-3756f463a56e |
| 885 | CODE_SMELL | MINOR | src/shared/content-reference.ts:47 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | e390225d-f020-4997-aa18-06d655ef07e0 |
| 886 | CODE_SMELL | MINOR | src/shared/content-reference.ts:48 | typescript:S7773 | Prefer `Number.parseInt` over `parseInt`. | ec91e193-105e-4c3a-aa89-25e0c423182c |
| 887 | CODE_SMELL | MINOR | src/shared/content-reference.ts:52 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 96d98fac-8980-4fba-98d6-ac594651fb79 |
| 888 | CODE_SMELL | MINOR | src/shared/content-reference.ts:53 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 7af91849-1d59-464a-9e8d-9fd86babfb4b |
| 889 | CODE_SMELL | MINOR | src/main/secrets.ts:314 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 2e7bb95b-ad41-4ab2-82dc-6645e7e3271f |
| 890 | CODE_SMELL | MAJOR | extension/background.js:2602 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 65bbfc85-1956-420c-90e7-b6a0aa37ec4a |
| 891 | CODE_SMELL | CRITICAL | extension/background.js:4940 | javascript:S3735 | Remove this use of the "void" operator. | 297747d4-62df-412d-a346-54084c54870c |
| 892 | CODE_SMELL | CRITICAL | extension/background.js:5154 | javascript:S3735 | Remove this use of the "void" operator. | eaa61909-7a7c-4111-8165-712a301284a9 |
| 893 | CODE_SMELL | CRITICAL | src/main/session/recorder.ts:1289 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 81 to the 15 allowed. | f6897085-ea93-410b-a916-2463822ace9a |
| 894 | CODE_SMELL | CRITICAL | extension/content.js:2023 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 23 to the 15 allowed. | cbc9f328-0df6-4713-bf0f-280e9f9c918b |
| 895 | CODE_SMELL | CRITICAL | extension/content.js:4154 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 31 to the 15 allowed. | 21e54185-306e-4b81-940e-9a421ab060ad |
| 896 | CODE_SMELL | MINOR | scripts/verify-navigation-motion.cjs:14 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 865e28b0-9e24-4164-a81e-4aa30a0bab35 |
| 897 | CODE_SMELL | CRITICAL | scripts/verify-navigation-motion.cjs:24 | javascript:S4123 | Unexpected `await` of a non-Promise (non-"Thenable") value. | a4f87d5c-e39f-4a83-87aa-deb5c54282af |
| 898 | CODE_SMELL | CRITICAL | scripts/verify-settings-focus.cjs:10 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 40 to the 15 allowed. | e8c829bf-9e4c-4cba-8b2d-fcdd7a967da1 |
| 899 | CODE_SMELL | MINOR | scripts/verify-settings-focus.cjs:16 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 1f70e59e-034c-4cd8-a028-2a2800e26016 |
| 900 | CODE_SMELL | MAJOR | scripts/verify-settings-focus.cjs:68 | javascript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | 0fb69c00-ab38-4aad-a9ff-c0bcac191b48 |
| 901 | CODE_SMELL | MINOR | scripts/verify-settings-layout.cjs:19 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 4bc60e48-07ec-4ba3-ac52-3872ecbd8562 |
| 902 | CODE_SMELL | MINOR | scripts/verify-settings-layout.cjs:162 | javascript:S7773 | Prefer `Number.parseFloat` over `parseFloat`. | 77ff5133-c572-458d-b53a-b0669cc49ea1 |
| 903 | CODE_SMELL | MINOR | scripts/verify-settings-layout.cjs:162 | javascript:S7773 | Prefer `Number.parseFloat` over `parseFloat`. | dc960019-a865-480f-aa58-2ec81bbc90b5 |
| 904 | CODE_SMELL | MAJOR | src/renderer/dom.ts:102 | typescript:S4624 | Refactor this code to not use nested template literals. | 34978579-2452-443c-81c0-e3b32eff2f08 |
| 905 | CODE_SMELL | MAJOR | src/renderer/styles.css:2067 | css:S4666 | Unexpected duplicate selector ".wizard", first used at line 2009 | 03cf85c4-478d-468c-9707-cb3e51d8b55d |
| 906 | CODE_SMELL | MINOR | extension/content.js:12077 | javascript:S7764 | Prefer `globalThis` over `window`. | fba8135f-b174-4182-9c25-6494e2ce185c |
| 907 | CODE_SMELL | MAJOR | extension/usage.js:369 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | b84ee6c6-80be-436f-80c4-2b6060ded4d5 |
| 908 | CODE_SMELL | MAJOR | extension/usage.js:371 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 2bef0e68-4b8a-4a64-87c2-e393cc44a487 |
| 909 | CODE_SMELL | MAJOR | scripts/generate-third-party-notices.mjs:71 | javascript:S4043 | Move this array "sort" operation to a separate statement or replace it with "toSorted". | 0b494793-abe7-48da-b8d7-2ad026512bb1 |
| 910 | BUG | CRITICAL | scripts/generate-third-party-notices.mjs:71 | javascript:S2871 | Provide a compare function that depends on "String.localeCompare", to reliably sort elements alphabetically. | 44f206ae-f955-44a5-baa2-d6c0846b734d |
| 911 | CODE_SMELL | MAJOR | scripts/generate-third-party-notices.mjs:71 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | f179c8e7-458f-49a3-bb65-36390b31a59a |
| 912 | CODE_SMELL | MINOR | scripts/prepare-packaging-native.mjs:93 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 2d78a90c-4d83-4594-b9e0-880541e90174 |
| 913 | CODE_SMELL | MAJOR | scripts/verify-pet-toggle.cjs:46 | javascript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | 02695626-1bac-4612-9e79-2ad0e4a3a793 |
| 914 | CODE_SMELL | MAJOR | scripts/verify-pet-toggle.cjs:92 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | f551eb7c-6493-4692-974d-8524ddd017f2 |
| 915 | CODE_SMELL | MAJOR | src/main/pet-window-focus.ts:51 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 28b2d5be-2364-4922-813e-68a1329425ee |
| 916 | CODE_SMELL | CRITICAL | src/renderer/file-panel.ts:646 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | 276e1fe0-323e-4b0d-be9e-5a5cea532cb6 |
| 917 | CODE_SMELL | MAJOR | src/renderer/file-panel.ts:657 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 2f34599a-c066-457f-819b-e4912684f3a3 |
| 918 | BUG | MAJOR | src/renderer/icons.css:36 | css:S4649 | Unexpected missing generic font family | a33e2f67-4884-4816-9b18-94b0bc561c20 |
| 919 | BUG | MAJOR | src/renderer/icons.css:37 | css:S4649 | Unexpected missing generic font family | ac86f92a-412c-4a92-b805-28ec1268c316 |
| 920 | CODE_SMELL | MAJOR | src/renderer/index.html:1272 | Web:S6819 | Use &lt;input&gt; instead of the radio role to ensure accessibility across all devices. | 38d2e08e-191d-47f5-9b20-d647749cdd3c |
| 921 | CODE_SMELL | MAJOR | src/renderer/index.html:1273 | Web:S6819 | Use &lt;input&gt; instead of the radio role to ensure accessibility across all devices. | eee9e5c5-e29d-4f9d-823c-e74af2144296 |
| 922 | CODE_SMELL | MAJOR | src/renderer/index.html:1274 | Web:S6819 | Use &lt;input&gt; instead of the radio role to ensure accessibility across all devices. | bf8084c8-5879-4901-95d9-b4f091978dee |
| 923 | CODE_SMELL | CRITICAL | src/main/session/correlation.ts:235 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 21 to the 15 allowed. | c0a789dd-5a2e-4a03-8f67-5b3a3dcb1733 |
| 924 | CODE_SMELL | CRITICAL | src/main/session/store.ts:639 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 37 to the 15 allowed. | 4300c25f-0baf-424f-9fe7-6290a363727d |
| 925 | CODE_SMELL | MINOR | src/renderer/chat.ts:2051 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 699d7d12-78d5-4840-904e-3ebdb7697772 |
| 926 | CODE_SMELL | MINOR | src/renderer/chat.ts:2054 | typescript:S6594 | Use the "RegExp.exec()" method instead. | 6dd7b371-b00b-463d-bdfc-a3ab02e1a8d3 |
| 927 | CODE_SMELL | CRITICAL | src/renderer/file-panel.ts:1024 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | 581621a4-2eca-4eae-8e1b-c99d15601a8f |
| 928 | CODE_SMELL | MAJOR | src/renderer/file-panel.ts:1029 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 27474d27-5a3a-4134-b319-5474bdc77122 |
| 929 | CODE_SMELL | MAJOR | src/renderer/file-panel.ts:1029 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 7b693ea6-d944-4264-aebd-9716ee8f8bfb |
| 930 | CODE_SMELL | CRITICAL | src/renderer/workspace-docks.ts:113 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | 05b9d680-a7fa-4752-baa0-b4a1c35cf82b |
| 931 | CODE_SMELL | MAJOR | src/renderer/workspace-docks.ts:117 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | cf80cef4-16cf-4423-8cb3-599f7d142f5b |
| 932 | CODE_SMELL | MINOR | scripts/generate-third-party-notices.mjs:33 | javascript:S7778 | Do not call `Array#push()` multiple times. | befd663a-37ab-45d0-8043-a777681897b8 |
| 933 | CODE_SMELL | MINOR | src/renderer/usage.ts:207 | typescript:S7755 | Prefer `.at(…)` over `[….length - index]`. | fd8ccdfa-b35a-4eff-82ac-cd323758436a |
| 934 | CODE_SMELL | CRITICAL | extension/fiber.js:560 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 68 to the 15 allowed. | 63c07088-93d5-47c5-a9cf-2c29fb79f649 |
| 935 | CODE_SMELL | MAJOR | src/main/plugins/uv-runtime.ts:50 | typescript:S4624 | Refactor this code to not use nested template literals. | 8f02de60-34f1-4b1e-940a-82d6691768f9 |
| 936 | CODE_SMELL | MINOR | src/main/plugins/uv-runtime.ts:51 | typescript:S7773 | Prefer `Number.parseInt` over `parseInt`. | e4ebfab0-7ee2-4cd5-be10-c4dc4b045b84 |
| 937 | CODE_SMELL | MINOR | src/main/plugins/uv-runtime.ts:53 | typescript:S7758 | Prefer `String.fromCodePoint()` over `String.fromCharCode()`. | 686bbf65-6ef4-42e8-b5d0-b37e0e62300c |
| 938 | CODE_SMELL | MINOR | src/main/plugins/uv-runtime.ts:54 | typescript:S7750 | Prefer `.findLast(…)` over `.filter(…).at(-1)`. | 9b70e57f-e16e-4817-b845-5af9d6a996ce |
| 939 | CODE_SMELL | MAJOR | src/main/plugins/uv-runtime.ts:105 | typescript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | 610c9a29-2e21-427a-a331-1f4d3dafcfcc |
| 940 | CODE_SMELL | MAJOR | src/renderer/usage.ts:79 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 18890341-641c-4adb-8b4d-eb2b602a7ebc |
| 941 | CODE_SMELL | MAJOR | src/renderer/usage.ts:80 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 43b92e93-138c-46f1-aaa6-fc7808a845e6 |
| 942 | CODE_SMELL | MAJOR | src/renderer/usage.ts:85 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 06cefbd5-a6e1-4bb5-b8b3-b26271cf975a |
| 943 | CODE_SMELL | MAJOR | src/renderer/usage.ts:85 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 1d27724c-b9a2-4f34-9cbe-7ca4cef2fc57 |
| 944 | CODE_SMELL | MINOR | src/renderer/chat.ts:4316 | typescript:S7758 | Prefer `String#codePointAt()` over `String#charCodeAt()`. | f3489df1-7e7e-453f-8720-da44cd38db5f |
| 945 | CODE_SMELL | MINOR | src/main/skill-github.ts:20 | typescript:S6353 | Use concise character class syntax '\d' instead of '[0-9]'. | 9bc04e92-45b1-4df2-9bed-163cb83511e3 |
| 946 | CODE_SMELL | MINOR | src/main/skill-github.ts:20 | typescript:S6353 | Use concise character class syntax '\d' instead of '[0-9]'. | f848591e-cce6-44ee-bc5a-1e01e072c046 |
| 947 | CODE_SMELL | CRITICAL | src/main/skill-github.ts:31 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 18 to the 15 allowed. | f6f2c127-2064-4e89-99b1-4ee631c55557 |
| 948 | CODE_SMELL | CRITICAL | src/main/skill-github.ts:68 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 30 to the 15 allowed. | aab1ef48-fdc6-4c76-bdf7-671134eb8b5e |
| 949 | CODE_SMELL | MAJOR | src/main/skill-github.ts:88 | typescript:S4624 | Refactor this code to not use nested template literals. | 3e3e20d6-9442-435b-8e7e-2b15f4937b7d |
| 950 | CODE_SMELL | CRITICAL | src/main/skill-github.ts:112 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 22 to the 15 allowed. | 21a0b6c5-3392-48d8-836b-c57caaaad714 |
| 951 | CODE_SMELL | MAJOR | src/main/skill-github.ts:173 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 1a3b87f9-6716-4258-a366-b282232c5ded |
| 952 | CODE_SMELL | MINOR | src/main/skill-github.ts:189 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 6a9825b3-aa75-40f7-91d7-dd101c64b4c0 |
| 953 | CODE_SMELL | MINOR | src/main/skill-github.ts:202 | typescript:S7750 | Prefer `.findLast(…)` over `.filter(…).at(-1)`. | bfed6ecf-cdd4-49f1-a8c4-fa6afe45f2da |
| 954 | CODE_SMELL | CRITICAL | src/main/skill-package.ts:15 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 25 to the 15 allowed. | 3d927b00-048d-4316-8ae9-5a0109823050 |
| 955 | CODE_SMELL | CRITICAL | src/main/skill-package.ts:56 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 18 to the 15 allowed. | 2f79b307-2739-4432-8d54-a48f8939e6eb |
| 956 | CODE_SMELL | MAJOR | src/main/skills.ts:523 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 7dfce70c-1878-4063-869a-04a2781207af |
| 957 | CODE_SMELL | MINOR | src/main/skills.ts:533 | typescript:S7750 | Prefer `.findLast(…)` over `.filter(…).at(-1)`. | ff8aff51-5d36-4597-ad55-031ea9f48f82 |
| 958 | CODE_SMELL | CRITICAL | src/main/skills.ts:545 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 27 to the 15 allowed. | a6d856b9-c30f-49e7-996a-df49e18142f7 |
| 959 | CODE_SMELL | MAJOR | src/main/skills.ts:586 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | e411c416-41eb-497a-94e6-62f6b3913717 |
| 960 | CODE_SMELL | CRITICAL | src/main/skills.ts:638 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 30 to the 15 allowed. | bd853b14-b4ed-45be-98fe-a4f13c892b04 |
| 961 | CODE_SMELL | MAJOR | src/main/skills.ts:649 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 72631b3c-5029-4f1a-8c87-9ec16a81254f |
| 962 | CODE_SMELL | MAJOR | src/main/skills.ts:667 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 39e9ff07-4b1f-4f61-9d3d-a10fc331bfa7 |
| 963 | CODE_SMELL | MAJOR | src/main/skills.ts:667 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 77215813-9dd9-4fad-b38f-1f8e2c4affc6 |
| 964 | CODE_SMELL | MAJOR | src/main/skills.ts:675 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | cfedddff-5cc4-4615-9c1d-98e3bfc7338e |
| 965 | CODE_SMELL | MAJOR | src/renderer/skills-library.ts:32 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 411951cf-7fb8-4174-9fa1-824a6834a780 |
| 966 | CODE_SMELL | MAJOR | src/renderer/skills-library.ts:33 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | bab93887-1d83-4836-8ba2-9db01192bb1a |
| 967 | CODE_SMELL | MAJOR | src/renderer/skills-library.ts:34 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 39c0c66d-2066-4710-ae82-31ac415d0f89 |
| 968 | CODE_SMELL | MAJOR | src/renderer/skills-library.ts:35 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | bd9ec276-5c10-4c5a-a7f3-658ba77d9d2d |
| 969 | CODE_SMELL | MAJOR | src/renderer/skills-library.ts:36 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 9d71b89e-3d31-4da0-a500-c44c316140fd |
| 970 | CODE_SMELL | CRITICAL | src/renderer/skills-library.ts:218 | typescript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 8f9b27c9-c596-4bf2-8c28-84ebc34b0ea5 |
| 971 | CODE_SMELL | CRITICAL | src/renderer/skills-library.ts:226 | typescript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 1c2cc428-0306-4878-9606-b34733f81219 |
| 972 | CODE_SMELL | MAJOR | src/renderer/skills-library.ts:233 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 121ae533-a826-4236-8fd0-dd9972ee5c06 |
| 973 | CODE_SMELL | CRITICAL | src/renderer/skills-library.ts:240 | typescript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | b044efe1-07f9-4331-aaa4-7c2930b6b994 |
| 974 | CODE_SMELL | MAJOR | src/renderer/skills.ts:77 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | a8f09bf1-7d15-4d3b-991d-2fbb1479f193 |
| 975 | CODE_SMELL | CRITICAL | src/renderer/skills.ts:109 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 25 to the 15 allowed. | 84b2a4c6-7bf6-4b7a-a881-0e823bb43206 |
| 976 | CODE_SMELL | MAJOR | src/renderer/skills.ts:118 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 620e205e-0a26-4840-971a-33e6fd89955c |
| 977 | CODE_SMELL | CRITICAL | src/renderer/skills.ts:136 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 40 to the 15 allowed. | fa10f57f-3b99-41ca-8082-6f412b65c5df |
| 978 | CODE_SMELL | MAJOR | src/renderer/skills.ts:177 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 908001bf-a02e-40aa-9d3e-061dfc6aea8f |
| 979 | CODE_SMELL | MINOR | src/renderer/skills.ts:177 | typescript:S6644 | Unnecessary use of conditional expression for default assignment. | e1109d40-f737-4a4f-9e5b-1537dbbcf4d3 |
| 980 | CODE_SMELL | MAJOR | src/renderer/skills.ts:178 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 4fe7d9f3-865c-40e1-992f-b488bc1c5bf2 |
| 981 | CODE_SMELL | MINOR | src/renderer/skills.ts:178 | typescript:S7735 | Unexpected negated condition. | 6c1c6a06-c350-406c-bbd0-ba506bd72fb5 |
| 982 | CODE_SMELL | MAJOR | src/renderer/skills.ts:178 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | a1b46b59-f80e-4f72-93d2-c15628395818 |
| 983 | CODE_SMELL | MAJOR | src/renderer/skills.ts:239 | typescript:S4624 | Refactor this code to not use nested template literals. | 1c2bf305-c340-4caf-a334-ed4c8a89e0cc |
| 984 | CODE_SMELL | CRITICAL | scripts/verify-pet-performance.cjs:83 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 23 to the 15 allowed. | 1fa62048-beff-4667-92a6-c5837e4c03ee |
| 985 | CODE_SMELL | MAJOR | scripts/verify-pet-performance.cjs:137 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 56464e5d-4999-41ab-9431-4c73c011c0e3 |
| 986 | CODE_SMELL | MAJOR | scripts/verify-pet-performance.cjs:164 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 0aff8573-b8b9-42e8-983c-99f60ef6fe05 |
| 987 | CODE_SMELL | MAJOR | scripts/verify-pet-performance.cjs:164 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 6274655e-baf4-48bb-b779-a427d9c7e53c |
| 988 | CODE_SMELL | MAJOR | src/main/pet-overlay.ts:82 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 49fbf25d-b28b-494a-aa6e-81dfda0777e4 |
| 989 | CODE_SMELL | MAJOR | src/main/pet-overlay.ts:201 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 3834be02-ad88-4228-b5ae-e443c81d8e73 |
| 990 | CODE_SMELL | MAJOR | src/renderer/main.ts:188 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | c440d314-88d1-43f6-9980-7d86a8ec03b3 |
| 991 | CODE_SMELL | MAJOR | src/renderer/pet-machine.ts:66 | typescript:S2933 | Member 'random: ()=&gt;number' is never reassigned; mark it as `readonly`. | db867cf4-7c04-44e2-b48b-946c160388ce |
| 992 | CODE_SMELL | CRITICAL | src/renderer/pet-machine.ts:135 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 32 to the 15 allowed. | 593a5e44-06b8-47c7-b499-4dc589d1d24c |
| 993 | CODE_SMELL | MAJOR | src/renderer/pet-machine.ts:156 | typescript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | ba8e855f-0076-4c54-b3b5-17da06c18c5a |
| 994 | CODE_SMELL | MINOR | src/renderer/pet-overlay.ts:33 | typescript:S7764 | Prefer `globalThis` over `window`. | e1f55486-fdc8-48bd-960c-e14680bb1dfe |
| 995 | CODE_SMELL | MINOR | src/renderer/pet-overlay.ts:39 | typescript:S7764 | Prefer `globalThis` over `window`. | 9856232a-d9fb-4710-983b-c7c146bf3266 |
| 996 | CODE_SMELL | CRITICAL | src/renderer/pet-overlay.ts:114 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 33 to the 15 allowed. | 537ac6ef-4778-418d-979a-522eeb197064 |
| 997 | CODE_SMELL | MAJOR | src/renderer/pet-overlay.ts:117 | typescript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | 0881e12f-9137-4bc7-a890-94f3807a0660 |
| 998 | CODE_SMELL | MAJOR | src/renderer/pet-overlay.ts:136 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 1e375f67-c362-419c-93f1-a759783fc595 |
| 999 | CODE_SMELL | MINOR | src/renderer/pet-overlay.ts:154 | typescript:S4325 | This assertion is unnecessary since it does not change the type of the expression. | 25cda429-b698-4614-a4d0-9fb221ae2ce0 |
| 1000 | CODE_SMELL | MINOR | src/renderer/pet-overlay.ts:202 | typescript:S7764 | Prefer `globalThis` over `window`. | 82cd9fff-fdf9-4d46-a244-158b8b0089d9 |
| 1001 | CODE_SMELL | MINOR | src/renderer/pet-overlay.ts:241 | typescript:S7764 | Prefer `globalThis` over `window`. | b6072e08-95b1-47f3-a36e-0d41c0f506f7 |
| 1002 | CODE_SMELL | CRITICAL | src/renderer/pet-overlay.ts:492 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | b6510635-5a32-4081-bb7b-d16039962b89 |
| 1003 | CODE_SMELL | CRITICAL | src/shared/pet-activity.ts:39 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | 0f4f876b-3d85-4b47-995c-3f0ddffc94e2 |
| 1004 | CODE_SMELL | MAJOR | src/shared/pet-activity.ts:51 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | c6d5edac-3284-45f2-8443-ffdaf1c48f5c |
| 1005 | CODE_SMELL | MAJOR | src/shared/pet-activity.ts:63 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 174ad7dd-c6d6-4b56-88cb-76afc38c69aa |
| 1006 | CODE_SMELL | MAJOR | src/shared/pet-activity.ts:64 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | b2a28c6f-0ba6-4e8f-bbb6-4d637b87f242 |
| 1007 | CODE_SMELL | MAJOR | src/shared/pet-activity.ts:67 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | fa6cf396-69a6-438b-bbdc-c66d1feacf0f |
| 1008 | CODE_SMELL | MINOR | src/renderer/usage.ts:103 | typescript:S7735 | Unexpected negated condition. | dd25829e-bd25-432c-9c3d-11f1a94e189d |
| 1009 | CODE_SMELL | CRITICAL | extension/content.js:2444 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | 99910537-c5ea-4d1b-bb53-d144c8434ebe |
| 1010 | CODE_SMELL | MAJOR | extension/content.js:3815 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 1dcec425-4ce2-4dd5-9508-e2811f5ead3a |
| 1011 | CODE_SMELL | CRITICAL | extension/fiber.js:712 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 96 to the 15 allowed. | ab1423a7-6116-4729-8f8f-4b84cce6c0b4 |
| 1012 | CODE_SMELL | CRITICAL | extension/fiber.js:1935 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 99 to the 15 allowed. | 4ccdac5f-e0ed-4656-8090-2ef9cc390b52 |
| 1013 | CODE_SMELL | MAJOR | extension/fiber.js:2253 | javascript:S7761 | Prefer `.dataset` over `removeAttribute(…)`. | 54676237-4f49-4aed-9ba0-67f9e3c34c1c |
| 1014 | CODE_SMELL | MAJOR | extension/fiber.js:2254 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 028bd835-60d9-453e-84a2-a275c67d2582 |
| 1015 | CODE_SMELL | MAJOR | extension/fiber.js:2255 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | e74dbf12-fcab-48de-bb19-9891004fd295 |
| 1016 | CODE_SMELL | MAJOR | src/main/mcp/tools-core.ts:1575 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | b8b4c646-9d38-4199-a13c-ee1fdb4f3dd6 |
| 1017 | CODE_SMELL | MINOR | src/main/project-git.ts:3 | typescript:S3863 | 'node:fs' imported multiple times. | c4235bfa-3881-49d0-8287-df7118226bc0 |
| 1018 | CODE_SMELL | CRITICAL | src/main/project-git.ts:91 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | 6a61281d-67d5-4322-b2f9-9179ea1d6aa2 |
| 1019 | CODE_SMELL | MINOR | src/main/project-git.ts:111 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 078c849a-99af-407e-914f-42520a297898 |
| 1020 | CODE_SMELL | MAJOR | src/main/agents.ts:1728 | typescript:S4624 | Refactor this code to not use nested template literals. | 0779037d-b5f9-4fc3-83d6-c2b2ecc03909 |
| 1021 | CODE_SMELL | MINOR | src/renderer/main.ts:817 | typescript:S7737 | Do not use an object literal as default for parameter `values`. | a2cc4af4-9cdf-4ec7-b21e-5d59c795a8ef |
| 1022 | CODE_SMELL | MAJOR | src/renderer/main.ts:2436 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | f11a048c-ba32-4ab2-8544-843c9e7f3ad4 |
| 1023 | CODE_SMELL | CRITICAL | extension/background.js:2524 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 38 to the 15 allowed. | 2c9fc319-e1ad-48db-8ca2-274bd8c29571 |
| 1024 | CODE_SMELL | MAJOR | extension/background.js:3126 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 8a8e4bbc-81b8-47be-93c7-89c59ed9f62a |
| 1025 | CODE_SMELL | CRITICAL | src/main/session/input.ts:455 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 46 to the 15 allowed. | c37ba37a-56db-4b1b-bd32-5c0a4d3ce19f |
| 1026 | CODE_SMELL | MINOR | scripts/verify-pr-workspace.cjs:162 | javascript:S7780 | `String.raw` should be used to avoid escaping `\`. | 18fbef36-33e9-4e35-ab05-5320a6d28e6d |
| 1027 | CODE_SMELL | MINOR | src/main/ipc.ts:962 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | 40c155d7-0c06-4a0d-b727-780e1081f79c |
| 1028 | CODE_SMELL | CRITICAL | src/main/mcp/tools-core.ts:1890 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 28 to the 15 allowed. | 17fde452-b960-4bc1-8449-73fc9957f202 |
| 1029 | CODE_SMELL | MINOR | src/main/project-git.ts:4 | typescript:S3863 | 'node:fs' imported multiple times. | 8f9f4b48-4c1d-46c7-a60c-0201e789e29a |
| 1030 | CODE_SMELL | CRITICAL | src/main/project-git.ts:238 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 31 to the 15 allowed. | aa17de45-9444-40c9-8652-cc83c86fcc8e |
| 1031 | CODE_SMELL | MINOR | src/main/project-git.ts:243 | typescript:S6353 | Use concise character class syntax '\d' instead of '[0-9]'. | 7bd7a5c3-93fe-4a00-bca5-c754991644da |
| 1032 | CODE_SMELL | MAJOR | src/main/project-git.ts:244 | typescript:S6557 | Use 'String#startsWith' method instead. | 54e345a6-14f3-47b7-b9bb-4a5071ce1dcf |
| 1033 | CODE_SMELL | MAJOR | src/main/project-git.ts:244 | typescript:S6557 | Use 'String#startsWith' method instead. | c3e90f8d-05e4-47fa-b841-3a9b421272ad |
| 1034 | CODE_SMELL | MINOR | src/main/project-git.ts:252 | typescript:S7735 | Unexpected negated condition. | 8ab91ab3-8e21-4922-885d-5f59d88674c2 |
| 1035 | CODE_SMELL | MINOR | src/main/project-git.ts:252 | typescript:S7735 | Unexpected negated condition. | a6c99d9a-4751-4c6c-b98a-9b1f32d5099f |
| 1036 | CODE_SMELL | MAJOR | src/main/project-git.ts:252 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | a74d79c6-125e-462f-963b-02a6f8055eb3 |
| 1037 | CODE_SMELL | MAJOR | src/main/project-git.ts:252 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | ec5c8ae9-aec1-4c35-821e-11cdf88e1fb4 |
| 1038 | CODE_SMELL | MAJOR | src/main/project-git.ts:253 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 011acdcc-f344-484b-8a7e-4c49421f36a3 |
| 1039 | CODE_SMELL | MAJOR | src/main/project-git.ts:253 | typescript:S6557 | Use 'String#startsWith' method instead. | 54c93fda-afd3-4c2e-9948-a16c12abe0f1 |
| 1040 | CODE_SMELL | MAJOR | src/main/project-git.ts:253 | typescript:S6557 | Use 'String#startsWith' method instead. | 73ff5658-3207-42ae-837d-1248a5a106e5 |
| 1041 | CODE_SMELL | MAJOR | src/main/project-git.ts:253 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 7a90635b-80d6-4c80-8574-a907f18ff56b |
| 1042 | CODE_SMELL | MAJOR | src/main/project-git.ts:286 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | e9a04b82-8f6e-415d-83fc-6665373181b1 |
| 1043 | CODE_SMELL | CRITICAL | src/main/project-git.ts:293 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | 84108055-ca31-40f2-9f0b-bc7efc3ff155 |
| 1044 | CODE_SMELL | MAJOR | src/main/project-git.ts:328 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 01da52db-13c8-4448-87cc-5366cbe884c7 |
| 1045 | CODE_SMELL | CRITICAL | src/main/project-git.ts:339 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 36 to the 15 allowed. | 41662e40-a40f-4913-9b3c-94c97b72a7d8 |
| 1046 | CODE_SMELL | MAJOR | src/main/project-git.ts:443 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 7345375f-10b5-4857-99e2-44e2d9a062a2 |
| 1047 | CODE_SMELL | MAJOR | src/main/project-git.ts:453 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 86503674-3c85-4378-a538-8e2b74af7cdd |
| 1048 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:497 | typescript:S7764 | Prefer `globalThis` over `window`. | bf392d40-6cd7-4945-b1a3-5bd5d5bace22 |
| 1049 | CODE_SMELL | MAJOR | src/renderer/file-panel.ts:642 | typescript:S7721 | Move function 'folderGitStatus' to the outer scope. | 03550d35-11e7-49e5-bd53-28a12678a013 |
| 1050 | CODE_SMELL | CRITICAL | src/renderer/file-panel.ts:1041 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 24 to the 15 allowed. | 12e1000e-4823-40a7-a32a-043bd51a9173 |
| 1051 | CODE_SMELL | MAJOR | src/renderer/file-panel.ts:1094 | typescript:S4624 | Refactor this code to not use nested template literals. | 66c1afcc-f4f8-4141-a0ba-22b9b823d7a6 |
| 1052 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:1136 | typescript:S7764 | Prefer `globalThis` over `window`. | 03acacd7-e924-4b57-8ff5-83e436fe467f |
| 1053 | CODE_SMELL | CRITICAL | src/renderer/file-panel.ts:1160 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | 8a9c4f3f-5998-450c-a8c4-78aaba1c55d7 |
| 1054 | CODE_SMELL | MAJOR | src/renderer/file-panel.ts:1203 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | e19b638a-81d2-48f5-8e2b-2ce1352b59fb |
| 1055 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:1233 | typescript:S7764 | Prefer `globalThis` over `window`. | 1cbaf2e4-7346-4da5-a956-0a9f7bf687ab |
| 1056 | CODE_SMELL | CRITICAL | src/renderer/file-panel.ts:1244 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | daf7c297-e866-468e-b774-cfe00d0e0f02 |
| 1057 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:1253 | typescript:S7764 | Prefer `globalThis` over `window`. | cbbd6c27-3d9f-424f-b60a-1e93817a84b2 |
| 1058 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:1276 | typescript:S7764 | Prefer `globalThis` over `window`. | dedb2ca5-becb-4651-95be-23338c2a0483 |
| 1059 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:1279 | typescript:S7764 | Prefer `globalThis` over `window`. | 26d35341-cf66-44a0-ae11-7ee7503b92b8 |
| 1060 | CODE_SMELL | CRITICAL | src/renderer/file-panel.ts:1329 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | d5272bf1-51ca-443d-9b83-7954808da211 |
| 1061 | CODE_SMELL | MAJOR | src/renderer/file-panel.ts:1336 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 9d64ab88-3800-4429-bf10-fbe9fd4a5719 |
| 1062 | CODE_SMELL | MAJOR | src/renderer/file-panel.ts:1337 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | e368b35c-05cc-4fbd-ba0c-a5eeca16f1fe |
| 1063 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:1566 | typescript:S7764 | Prefer `globalThis` over `window`. | f7d78815-b21c-427e-8c7e-3cd41e2990f2 |
| 1064 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:1673 | typescript:S7764 | Prefer `globalThis` over `window`. | 3b6b5de6-6bab-42a8-80e6-89b25f403a07 |
| 1065 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:1674 | typescript:S7764 | Prefer `globalThis` over `window`. | dc63ce30-0155-4890-9ace-5968834e48cf |
| 1066 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:1707 | typescript:S7764 | Prefer `globalThis` over `window`. | 65e578b0-1ca3-487c-a5d4-7a1b1e1bec84 |
| 1067 | CODE_SMELL | MINOR | scripts/verify-workspace-terminal.cjs:135 | javascript:S7780 | `String.raw` should be used to avoid escaping `\`. | 19cfaf1e-b592-4c35-a003-7709ccb72d43 |
| 1068 | CODE_SMELL | MINOR | scripts/verify-workspace-terminal.cjs:161 | javascript:S7780 | `String.raw` should be used to avoid escaping `\`. | 9b8ea33f-b647-4b6f-b425-0899f01e61c4 |
| 1069 | CODE_SMELL | MINOR | scripts/verify-workspace-terminal.cjs:190 | javascript:S7780 | `String.raw` should be used to avoid escaping `\`. | 85bbc624-f667-4827-a7be-da9301cf1c58 |
| 1070 | CODE_SMELL | MINOR | scripts/verify-workspace-terminal.cjs:216 | javascript:S7780 | `String.raw` should be used to avoid escaping `\`. | 20501a30-8b63-4d46-bf35-8044326d296c |
| 1071 | CODE_SMELL | MINOR | src/main/workspace-terminal-ipc.ts:11 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | 8570b1df-2d55-4f10-a935-9f612d34f183 |
| 1072 | CODE_SMELL | MINOR | src/main/workspace-terminal-ipc.ts:11 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | e58a3dc3-2277-4b8c-a0cf-0608c0810ec6 |
| 1073 | CODE_SMELL | MAJOR | src/renderer/workspace-docks.ts:297 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | bd032d3a-8ab4-4579-b6b1-7591b394f31e |
| 1074 | CODE_SMELL | MAJOR | src/renderer/workspace-docks.ts:298 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | d2e4aeab-0f37-4b39-aed7-f84d7ced3af3 |
| 1075 | CODE_SMELL | MINOR | src/renderer/workspace-terminal.ts:67 | typescript:S7764 | Prefer `globalThis` over `window`. | b6d9ae84-bfa3-4cb0-9876-1d4f2d27ee8c |
| 1076 | CODE_SMELL | MINOR | src/renderer/workspace-terminal.ts:131 | typescript:S7764 | Prefer `globalThis` over `window`. | b6585558-f978-4598-a293-1795a9c06eb6 |
| 1077 | CODE_SMELL | CRITICAL | src/renderer/workspace-terminal.ts:171 | typescript:S3735 | Remove this use of the "void" operator. | 86dc014a-19a6-4c0e-92ec-42200ba1f990 |
| 1078 | CODE_SMELL | MAJOR | src/renderer/workspace-terminal.ts:175 | typescript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | d21b7d7a-c418-4a46-b956-43b855a5db33 |
| 1079 | CODE_SMELL | CRITICAL | src/renderer/workspace-terminal.ts:160 | typescript:S3735 | Remove this use of the "void" operator. | 05d2d95c-5aba-4f48-a889-90b18d629a9f |
| 1080 | CODE_SMELL | CRITICAL | src/renderer/workspace-terminal.ts:160 | typescript:S3735 | Remove this use of the "void" operator. | 9180f978-7abb-4e69-98a5-549ded2c154e |
| 1081 | CODE_SMELL | MAJOR | src/renderer/agent-panel.ts:63 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 8de8509a-b6b3-4902-b4f9-ef6c4d8e977d |
| 1082 | CODE_SMELL | MAJOR | src/renderer/agent-panel.ts:81 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | dc23a9c4-5f58-4507-8080-be236cc9fab2 |
| 1083 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:2593 | typescript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 5afe81a4-8fb9-4acf-93aa-3779b791fd2d |
| 1084 | CODE_SMELL | MAJOR | src/renderer/styles.css:3549 | css:S7924 | Text does not meet the minimal contrast requirement with its background. | 209f8bf5-ae2d-4e80-9104-c5592412ff4f |
| 1085 | CODE_SMELL | MAJOR | src/renderer/styles.css:3553 | css:S4666 | Unexpected duplicate selector ".sess-top", first used at line 2433 | ed6073fc-197f-4d2d-adb3-a96e0089a26f |
| 1086 | CODE_SMELL | MAJOR | src/renderer/styles.css:4288 | css:S4666 | Unexpected duplicate selector ".work-dock-add &gt; summary", first used at line 4287 | 0f393607-b23e-4a63-88bd-a281e8a918af |
| 1087 | CODE_SMELL | CRITICAL | extension/content.js:11559 | javascript:S3735 | Remove this use of the "void" operator. | 4cdafca0-fda2-4f8c-b3d6-78e7851a030a |
| 1088 | CODE_SMELL | CRITICAL | extension/content.js:12761 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 32 to the 15 allowed. | 40af6a4e-7722-4f56-abc3-b6c50490cebb |
| 1089 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:2074 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 9989d89b-d749-4c86-a4ae-b616ae903101 |
| 1090 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2122 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 31 to the 15 allowed. | 70c228ef-2788-4dfd-aa63-74db4c5001f4 |
| 1091 | CODE_SMELL | MAJOR | extension/content.js:140 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | b8bf1ad9-6d5a-41ca-8b62-1cd1caf013b5 |
| 1092 | CODE_SMELL | MAJOR | extension/content.js:2728 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | d9e87d69-8a50-43fe-ba4b-adc491bb1c84 |
| 1093 | CODE_SMELL | CRITICAL | extension/content.js:5608 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 33 to the 15 allowed. | fb7a2ce7-2c7a-4240-b494-8fc8c7aec28a |
| 1094 | CODE_SMELL | MAJOR | extension/content.js:5615 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 9264ff80-49fc-4a83-97d2-f06188b94c8e |
| 1095 | CODE_SMELL | MAJOR | extension/content.js:5617 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | e789f134-9ccb-436a-936c-696760170cc6 |
| 1096 | CODE_SMELL | MAJOR | extension/content.js:5619 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | a07d51b5-74f6-4419-868b-bd1de6f0743b |
| 1097 | CODE_SMELL | CRITICAL | extension/content.js:5788 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 46 to the 15 allowed. | bf70972f-9488-49a1-939f-01eaf77a4598 |
| 1098 | CODE_SMELL | MAJOR | extension/content.js:5815 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | f1b84a02-bdec-411d-8ed0-d647dc37eb12 |
| 1099 | CODE_SMELL | MAJOR | extension/content.js:5833 | javascript:S4624 | Refactor this code to not use nested template literals. | fc9125af-e0f1-44a0-a012-c88930617b1b |
| 1100 | CODE_SMELL | CRITICAL | extension/content.js:6942 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 27 to the 15 allowed. | 591ed2f5-a6eb-480e-bb36-7b1b6bad5665 |
| 1101 | CODE_SMELL | CRITICAL | extension/content.js:7084 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 135 to the 15 allowed. | 23424c2d-9807-4f11-a7a0-e3cccb0979b4 |
| 1102 | CODE_SMELL | MAJOR | extension/content.js:7135 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | ddf27de7-6b64-422c-9893-e142cfd60d99 |
| 1103 | CODE_SMELL | MAJOR | extension/content.js:7139 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | f9867e4c-a241-4dfc-a646-5ea19131bd2e |
| 1104 | CODE_SMELL | MAJOR | extension/content.js:7141 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | fecec05b-4575-4d43-b7b6-6d9778d96c9b |
| 1105 | CODE_SMELL | MAJOR | extension/content.js:7142 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | c49af4bf-244e-4c73-99d4-b8de96681e70 |
| 1106 | CODE_SMELL | MAJOR | extension/content.js:7144 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 2daa4abe-71f7-4275-aef3-94152cc7d73a |
| 1107 | CODE_SMELL | MAJOR | extension/content.js:7147 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 7b8436ef-6917-4e60-b8a0-24a734fb223b |
| 1108 | CODE_SMELL | MAJOR | extension/content.js:7149 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 89d96813-dd78-410b-9482-bc7646c35f9a |
| 1109 | CODE_SMELL | MAJOR | extension/content.js:7150 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 3ec4ecde-2229-476c-a9aa-a0fe282132f2 |
| 1110 | CODE_SMELL | MAJOR | extension/content.js:7153 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | dae1c578-d6dd-4b80-9967-6e7484757f5c |
| 1111 | CODE_SMELL | MAJOR | extension/content.js:7154 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | d6dbbc34-aa51-466b-ba39-f9c38a0312c8 |
| 1112 | CODE_SMELL | MAJOR | extension/content.js:7166 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 9fa14b51-219a-4461-a31e-72cd5cfe2438 |
| 1113 | CODE_SMELL | MAJOR | extension/content.js:7168 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 5402f576-79ad-46e1-adc6-3e29ce3a668d |
| 1114 | CODE_SMELL | MAJOR | extension/content.js:7207 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 18f2b5ef-b1ed-4a93-afde-e99ea86c6f56 |
| 1115 | CODE_SMELL | MAJOR | extension/content.js:7216 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | ab6ac2bf-d6e4-4d95-b644-f468ae5e99ea |
| 1116 | CODE_SMELL | MAJOR | extension/content.js:7226 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 2565d24d-3f77-463c-850d-6cb185a0f174 |
| 1117 | CODE_SMELL | MAJOR | extension/content.js:7228 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 5b29c81a-b798-45b4-83cb-fac202952711 |
| 1118 | CODE_SMELL | MAJOR | extension/content.js:7230 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 6302f732-afe5-450c-a394-f4f0c555c013 |
| 1119 | CODE_SMELL | MAJOR | extension/content.js:7232 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 6a3eab03-ff37-416c-b973-8b960e42ad90 |
| 1120 | CODE_SMELL | MAJOR | extension/content.js:7307 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | a9665d8f-adf4-4919-a122-251a431298e1 |
| 1121 | CODE_SMELL | MAJOR | extension/content.js:7311 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | ffdefa3c-a5e6-48d8-9fd3-4db64c7af4fb |
| 1122 | CODE_SMELL | MAJOR | extension/content.js:7316 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 084950c2-4cd6-42ee-99f0-2ce0eb5b8cec |
| 1123 | CODE_SMELL | MAJOR | extension/content.js:7324 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 813aab5b-711f-4f16-b2bc-6820068e2f3c |
| 1124 | CODE_SMELL | MAJOR | extension/content.js:7326 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | d87e74f3-6fd9-4c1e-818b-4f5d7455f959 |
| 1125 | CODE_SMELL | MAJOR | extension/content.js:7336 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | b5915176-0bba-49fa-bbb2-ab6c9d9ab50a |
| 1126 | CODE_SMELL | MAJOR | extension/content.js:7345 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 65ea7c32-c9bd-4c96-9b00-8b7d71c722ac |
| 1127 | CODE_SMELL | CRITICAL | extension/content.js:7495 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | 888039cb-b490-492c-9c7e-c288e6786199 |
| 1128 | CODE_SMELL | MAJOR | extension/content.js:7666 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | 0d0ba043-248f-4e95-93db-5a2777185bf3 |
| 1129 | CODE_SMELL | CRITICAL | extension/content.js:8307 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 25 to the 15 allowed. | 60bbfbb9-577a-4f6b-bf0b-ca004d46fffa |
| 1130 | CODE_SMELL | MAJOR | extension/content.js:8403 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 55f402c1-90d2-4b6f-8775-cd74f07c62ed |
| 1131 | CODE_SMELL | MAJOR | extension/content.js:8431 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | dcf164df-3e08-452e-b4eb-3835765e7030 |
| 1132 | CODE_SMELL | CRITICAL | extension/content.js:8580 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | 63c25689-fecd-4acf-b350-71f7472286c7 |
| 1133 | CODE_SMELL | CRITICAL | extension/content.js:8658 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 26 to the 15 allowed. | aaee4ccf-01cd-4243-b66a-a0581d5cd79f |
| 1134 | CODE_SMELL | CRITICAL | extension/content.js:8705 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 51 to the 15 allowed. | fafb978e-893d-49a9-9208-1cea0eb0f219 |
| 1135 | CODE_SMELL | MAJOR | extension/content.js:8711 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | f2fd1299-0c35-48a3-8cb4-1077a757beab |
| 1136 | CODE_SMELL | MAJOR | extension/content.js:8713 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 661eb0de-9be2-4622-b311-5e4593e9af57 |
| 1137 | CODE_SMELL | MAJOR | extension/content.js:8715 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 30e62aab-81f4-463a-9662-a65e84b9da35 |
| 1138 | CODE_SMELL | MAJOR | extension/content.js:8717 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 04443cfb-4870-443a-9d62-e0e19a4e55c9 |
| 1139 | CODE_SMELL | MAJOR | extension/content.js:8719 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 5901d5a4-4d92-4747-8ee7-8285be5cf4c5 |
| 1140 | CODE_SMELL | MAJOR | extension/content.js:8840 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 360b51a8-25f6-4101-8759-f30bf5f3df5c |
| 1141 | CODE_SMELL | MAJOR | extension/content.js:8842 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | a97c6dfe-4e95-4c72-a623-8fe40e51c188 |
| 1142 | CODE_SMELL | MAJOR | extension/content.js:8846 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 87b0490a-4bbd-4811-b94b-d962ee37e1ab |
| 1143 | CODE_SMELL | MAJOR | extension/content.js:8915 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 0c743f10-8e94-4a94-9fc1-c9da05aa0fca |
| 1144 | CODE_SMELL | MAJOR | extension/content.js:8917 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | f775c45a-1198-4011-b925-eac2954bbcb1 |
| 1145 | CODE_SMELL | MAJOR | extension/content.js:8919 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 6b7d8119-ecd6-4c27-84ff-ca13c6324dbf |
| 1146 | CODE_SMELL | MAJOR | extension/content.js:8921 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | f0eefe01-b216-4efc-ac8c-6fd5ba37193d |
| 1147 | CODE_SMELL | MAJOR | extension/content.js:8923 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | ac651a0a-db25-4a54-9cc3-015efcd0bdcf |
| 1148 | CODE_SMELL | CRITICAL | extension/content.js:9219 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 65 to the 15 allowed. | 99b8bfe5-fa05-40e6-999a-e762cce28de3 |
| 1149 | CODE_SMELL | MAJOR | extension/content.js:9357 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 1f4d9fc8-18f1-431a-ad68-92e4a083cff5 |
| 1150 | CODE_SMELL | MAJOR | extension/content.js:9365 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | c417aad1-475e-43ae-bb98-e6e2f918a4ca |
| 1151 | CODE_SMELL | CRITICAL | extension/content.js:9535 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | 7d134fae-8d45-4e3a-865f-958df109536f |
| 1152 | CODE_SMELL | CRITICAL | extension/content.js:9731 | javascript:S3735 | Remove this use of the "void" operator. | 711271c7-9782-494c-9f24-14045d6deafd |
| 1153 | CODE_SMELL | CRITICAL | extension/content.js:9734 | javascript:S3735 | Remove this use of the "void" operator. | 10f0c3c3-712e-403e-9a80-c76d60a1e039 |
| 1154 | CODE_SMELL | CRITICAL | extension/content.js:9751 | javascript:S3735 | Remove this use of the "void" operator. | 2c629bfc-95f6-4afb-bb9a-a9fbc0d73dfd |
| 1155 | CODE_SMELL | CRITICAL | extension/content.js:9757 | javascript:S3735 | Remove this use of the "void" operator. | e058de04-56d2-46d3-8695-d2e5a964440b |
| 1156 | CODE_SMELL | CRITICAL | extension/content.js:9794 | javascript:S3735 | Remove this use of the "void" operator. | a959eb8d-94f1-4955-8b4c-e42eb9423b27 |
| 1157 | CODE_SMELL | CRITICAL | extension/content.js:9831 | javascript:S3735 | Remove this use of the "void" operator. | c390a265-99c5-4cd6-9330-d634be14d622 |
| 1158 | CODE_SMELL | MAJOR | extension/content.js:9883 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 7541505f-eb44-4aaf-9e4f-99e9c933c49c |
| 1159 | CODE_SMELL | CRITICAL | extension/content.js:10598 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 50 to the 15 allowed. | 8714c756-c34e-40b3-9f0b-de98a152b992 |
| 1160 | CODE_SMELL | MAJOR | extension/content.js:10627 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | dfb2535c-15a8-4605-b8a6-0895339073c1 |
| 1161 | CODE_SMELL | MAJOR | extension/content.js:10629 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 4a7c7793-a863-49f9-900f-c5065969a079 |
| 1162 | CODE_SMELL | MAJOR | extension/content.js:10629 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 73116e2f-2927-4ce9-a096-88eb32297839 |
| 1163 | CODE_SMELL | MAJOR | extension/content.js:10847 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | cc14e381-2fde-4e17-a7af-5ae21af7b0a5 |
| 1164 | CODE_SMELL | CRITICAL | extension/content.js:11450 | javascript:S3735 | Remove this use of the "void" operator. | a640a2e8-aa80-4598-9899-e8b323158607 |
| 1165 | CODE_SMELL | CRITICAL | extension/content.js:11461 | javascript:S3735 | Remove this use of the "void" operator. | 5359c7d3-2794-4ab6-b06a-c6b0cd5d6408 |
| 1166 | CODE_SMELL | CRITICAL | extension/content.js:11474 | javascript:S3735 | Remove this use of the "void" operator. | 0e9f2dec-ff41-4733-9395-069d9420baba |
| 1167 | CODE_SMELL | CRITICAL | extension/content.js:11487 | javascript:S3735 | Remove this use of the "void" operator. | b117d76b-a1de-4da9-9db1-e682718ee8db |
| 1168 | CODE_SMELL | CRITICAL | extension/content.js:11493 | javascript:S3735 | Remove this use of the "void" operator. | 5f762663-2bce-4ef2-9406-8f7499c55488 |
| 1169 | CODE_SMELL | CRITICAL | extension/content.js:11499 | javascript:S3735 | Remove this use of the "void" operator. | 81342822-2696-4ecf-be7a-6070788012ae |
| 1170 | CODE_SMELL | CRITICAL | extension/content.js:11538 | javascript:S3735 | Remove this use of the "void" operator. | 5cdf0bad-d72d-4f9d-9ac3-fcf7967db9ca |
| 1171 | CODE_SMELL | CRITICAL | extension/content.js:11546 | javascript:S3735 | Remove this use of the "void" operator. | 4def1a94-edda-4ced-b5a0-0396b1516b29 |
| 1172 | CODE_SMELL | CRITICAL | extension/content.js:11610 | javascript:S3735 | Remove this use of the "void" operator. | 721831cb-c0a9-4e64-b059-01ee89d97035 |
| 1173 | CODE_SMELL | CRITICAL | extension/content.js:11649 | javascript:S3735 | Remove this use of the "void" operator. | 41dee371-f76d-47aa-b8f8-feb427ff85d6 |
| 1174 | CODE_SMELL | CRITICAL | extension/content.js:11659 | javascript:S3735 | Remove this use of the "void" operator. | a3988f2e-22e5-4bfd-94d8-93f0d24c5b71 |
| 1175 | CODE_SMELL | CRITICAL | extension/content.js:11705 | javascript:S3735 | Remove this use of the "void" operator. | 0f42c783-1157-4351-8599-8c9cc95e58c9 |
| 1176 | CODE_SMELL | MINOR | extension/i18n.js:10 | javascript:S7770 | arrow function is equivalent to `String`. Use `String` directly. | 502e0afc-513b-4ec5-91e8-82de912dd937 |
| 1177 | CODE_SMELL | MINOR | extension/i18n.js:15 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 92c4fe05-4557-45fd-8c66-a5fbc714bdd9 |
| 1178 | CODE_SMELL | MAJOR | extension/i18n.js:102 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 1e057777-6019-418d-b7fe-5926c58ae2be |
| 1179 | CODE_SMELL | CRITICAL | extension/popup.js:82 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 34 to the 15 allowed. | 04c3bc3e-eafc-44de-b8af-934d88892b10 |
| 1180 | CODE_SMELL | MAJOR | extension/popup.js:188 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 6bbf8c7d-e186-4653-89ae-09ee909ab6ff |
| 1181 | CODE_SMELL | MAJOR | extension/popup.js:191 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 2711acb5-be96-4786-8014-2a089dbf0cf3 |
| 1182 | CODE_SMELL | MAJOR | extension/popup.js:192 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 5deaa32a-178d-4894-b52e-04f6bd715590 |
| 1183 | CODE_SMELL | CRITICAL | extension/popup.js:198 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | c371814a-f91e-4ff9-b075-5e256fda883a |
| 1184 | CODE_SMELL | MAJOR | extension/popup.js:253 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | b761d46d-678c-404b-a142-b41dfbcb8379 |
| 1185 | CODE_SMELL | MAJOR | extension/popup.js:255 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 4d84ef5b-5895-4ce0-bbd4-c108eea02437 |
| 1186 | CODE_SMELL | MAJOR | extension/popup.js:257 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 73c5b8d3-59d4-4bb7-a2a2-6cf5108bd8d4 |
| 1187 | CODE_SMELL | CRITICAL | extension/popup.js:269 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | c24997d1-7dc9-4a30-adb4-aee1c46fa9e1 |
| 1188 | CODE_SMELL | MAJOR | extension/popup.js:280 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 0bb72b03-68a3-439f-adc3-e8ef697fe4ea |
| 1189 | CODE_SMELL | MAJOR | extension/popup.js:282 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 6e7ecf50-574b-446f-aba6-d18cf96b6eff |
| 1190 | CODE_SMELL | CRITICAL | extension/popup.js:307 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 33 to the 15 allowed. | 8ea9a8fe-90a5-4df9-9c8f-00ee676f7b8d |
| 1191 | CODE_SMELL | MAJOR | extension/popup.js:325 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 70833e30-5d18-4b1c-9669-c018cf1e35d5 |
| 1192 | CODE_SMELL | MAJOR | extension/popup.js:326 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 57c06f51-72fa-4b0f-8116-573ba5688302 |
| 1193 | CODE_SMELL | MAJOR | extension/popup.js:335 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 05bada0f-fb46-471f-89b8-a0bb748d96e6 |
| 1194 | CODE_SMELL | MAJOR | extension/popup.js:337 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 94e35555-7b84-4cf7-9c8a-3a4703739675 |
| 1195 | CODE_SMELL | MAJOR | extension/popup.js:353 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 5aab9efd-f88f-4df2-a7a0-3e08a2f67dce |
| 1196 | CODE_SMELL | MAJOR | extension/popup.js:368 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 638398db-2aee-4c14-b66e-3613c7aa4f2b |
| 1197 | CODE_SMELL | MAJOR | extension/popup.js:372 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 7174be28-d9ef-4bca-8e06-13c8adf24511 |
| 1198 | CODE_SMELL | MAJOR | extension/popup.js:382 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | eefa508d-ca92-405f-a5d4-81005f8c522f |
| 1199 | CODE_SMELL | MAJOR | extension/popup.js:400 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 747fc425-5035-4cb9-9d1b-cd4f88ac086a |
| 1200 | CODE_SMELL | MINOR | extension/popup.js:400 | javascript:S7735 | Unexpected negated condition. | 80f1884e-52bc-4ffb-84fa-8aaf387c8035 |
| 1201 | CODE_SMELL | MAJOR | extension/popup.js:401 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 57073c38-c9c4-4598-bb02-105e8524ebc9 |
| 1202 | CODE_SMELL | MAJOR | extension/popup.js:401 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | c328e968-85eb-4ac9-9155-258fb4c3117b |
| 1203 | CODE_SMELL | MINOR | extension/popup.js:401 | javascript:S7735 | Unexpected negated condition. | d4d54eea-ef69-435f-a186-1515f89ae236 |
| 1204 | CODE_SMELL | MINOR | extension/popup.js:407 | javascript:S7735 | Unexpected negated condition. | 1293d6cc-9176-466d-8e2c-6bd98b376a9a |
| 1205 | CODE_SMELL | MAJOR | extension/popup.js:407 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | ad604004-1adb-477f-915f-7e0d7ef9c729 |
| 1206 | CODE_SMELL | MAJOR | extension/popup.js:408 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 91908704-13bc-4814-9b20-a17d36d55e02 |
| 1207 | CODE_SMELL | MINOR | extension/popup.js:408 | javascript:S7735 | Unexpected negated condition. | e389a130-98e2-4532-a556-254b3c138275 |
| 1208 | CODE_SMELL | MINOR | extension/popup.js:415 | javascript:S7735 | Unexpected negated condition. | 03a5c8ce-75d0-409c-ac35-e344ea8e62c5 |
| 1209 | CODE_SMELL | MAJOR | extension/popup.js:415 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 5d67289b-6389-4adb-9d6a-d1a6af5f2198 |
| 1210 | CODE_SMELL | MINOR | extension/popup.js:416 | javascript:S7735 | Unexpected negated condition. | d9f13b08-d484-4ac7-8b61-1bc60e00dcca |
| 1211 | CODE_SMELL | MAJOR | extension/popup.js:416 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | e0f7968b-5f06-430f-a776-db0e71e7217f |
| 1212 | CODE_SMELL | MINOR | extension/popup.js:433 | javascript:S7735 | Unexpected negated condition. | 7bcd9664-e4bc-4527-9881-4d0df02d7df4 |
| 1213 | CODE_SMELL | MAJOR | extension/popup.js:435 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | b0addb8c-5397-477c-98e0-65a7a5e2d046 |
| 1214 | CODE_SMELL | MAJOR | extension/popup.js:437 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 28e56c0b-d75a-4754-a482-9ce37834b399 |
| 1215 | CODE_SMELL | MAJOR | extension/popup.js:439 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 1e580beb-20f3-42d8-9c12-b71d910eaf09 |
| 1216 | CODE_SMELL | CRITICAL | src/main/exec-hints.ts:1437 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 45 to the 15 allowed. | 51055069-b172-44a7-aa9f-5a85fe4bb3ba |
| 1217 | CODE_SMELL | MAJOR | extension/content.js:12721 | javascript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | 4e5a7d52-f3bc-4de5-9ee9-26e6fdb965d6 |
| 1218 | CODE_SMELL | MAJOR | extension/content.js:12721 | javascript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | ed666302-3876-49a5-80d4-6e08f14dbbd3 |
| 1219 | CODE_SMELL | MAJOR | extension/content.js:12752 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | c0792714-a6d4-44f2-a6b1-03a9d4583d8a |
| 1220 | CODE_SMELL | CRITICAL | extension/fiber.js:2561 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 46 to the 15 allowed. | 441ed4de-5c69-4338-93d9-4f0e18b68f48 |
| 1221 | CODE_SMELL | MAJOR | src/main/bridge.ts:2323 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 0071aa63-9777-4695-a6e8-8d86c91add3b |
| 1222 | CODE_SMELL | MINOR | src/main/plugin-refresh.ts:14 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | e282a93b-f369-40b4-8aee-923ba02d1533 |
| 1223 | CODE_SMELL | CRITICAL | extension/background.js:2245 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 28 to the 15 allowed. | 245a5b0c-4fab-4564-a65b-3804e800d214 |
| 1224 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:2688 | javascript:S7735 | Unexpected negated condition. | 1e97d450-4a03-4ae1-9e3b-8607ee0b4991 |
| 1225 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2705 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | b0397281-e58e-4235-ba21-2e6a60c76f3b |
| 1226 | CODE_SMELL | MAJOR | extension/fiber.js:2592 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | f68552ee-3ddb-440b-b23e-75b302b9d217 |
| 1227 | CODE_SMELL | MAJOR | extension/fiber.js:2594 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 9312d12b-7117-4168-af06-a65d1fff3af6 |
| 1228 | CODE_SMELL | MAJOR | extension/fiber.js:2594 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | a4257a83-3a14-4f28-967f-8400c0e73f9f |
| 1229 | CODE_SMELL | CRITICAL | extension/fiber.js:2601 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 52 to the 15 allowed. | ec0a759e-7a4f-4fc8-a1cd-ae8fd27dfead |
| 1230 | CODE_SMELL | CRITICAL | src/main/goal.ts:805 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 26 to the 15 allowed. | b856cd89-ac3b-4569-9922-a86d62106710 |
| 1231 | CODE_SMELL | CRITICAL | src/main/session/input-attachments.ts:53 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 32 to the 15 allowed. | 7c8cbae2-2dd9-4312-9961-dbde944a9528 |
| 1232 | CODE_SMELL | CRITICAL | src/preload/index.ts:166 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 22 to the 15 allowed. | f0c68730-fd31-4e79-9fbd-7c972b39a46f |
| 1233 | CODE_SMELL | MINOR | src/renderer/plugin-refresh-reminder.ts:9 | typescript:S7764 | Prefer `globalThis` over `window`. | 83f107f0-0562-40e7-a256-318f6ffd4752 |
| 1234 | CODE_SMELL | MINOR | src/renderer/plugin-refresh-reminder.ts:19 | typescript:S7764 | Prefer `globalThis` over `window`. | d38b937c-47db-4cc5-8bae-cf9d8e029c89 |
| 1235 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:1791 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 27 to the 15 allowed. | 52fafafa-1d80-4571-aa10-7c7405ce97b8 |
| 1236 | CODE_SMELL | MAJOR | src/renderer/chat.ts:1804 | typescript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 294f0cf5-a335-4492-9522-97bf0ece929c |
| 1237 | CODE_SMELL | MAJOR | src/renderer/chat.ts:1804 | typescript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 7a8acb9d-c106-430c-bbda-6138bc4df93b |
| 1238 | CODE_SMELL | MAJOR | src/renderer/chat.ts:1804 | typescript:S7761 | Prefer `.dataset` over `hasAttribute(…)`. | a4dab0b4-5f50-4f6c-ac67-403b7685c164 |
| 1239 | CODE_SMELL | MINOR | src/renderer/chat.ts:1814 | typescript:S6594 | Use the "RegExp.exec()" method instead. | a5b8588d-647f-48b9-814c-6beba9059f5c |
| 1240 | CODE_SMELL | MAJOR | src/renderer/chat.ts:1842 | typescript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 8a4ef4a8-5c81-4e6c-b6f8-c7a344301795 |
| 1241 | CODE_SMELL | MAJOR | src/renderer/chat.ts:1842 | typescript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | de5a5dec-db44-40d8-9f39-cd44da8e6c12 |
| 1242 | CODE_SMELL | MINOR | src/renderer/chat.ts:1847 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 1d04829a-f3fc-48c1-bdba-2b486a4b7911 |
| 1243 | CODE_SMELL | MAJOR | src/renderer/chat.ts:1851 | typescript:S7761 | Prefer `.dataset` over `hasAttribute(…)`. | f5815142-acd3-46a4-92ee-592fedf66ec7 |
| 1244 | CODE_SMELL | CRITICAL | src/renderer/sanitize-html.ts:17 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 47 to the 15 allowed. | 0898a78e-fa51-46cf-b957-e5a85f782f77 |
| 1245 | CODE_SMELL | MINOR | src/renderer/sanitize-html.ts:18 | typescript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | 8f7d3fb6-f62b-412c-89dc-d2a79ba13e9b |
| 1246 | CODE_SMELL | MAJOR | src/renderer/sanitize-html.ts:32 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 2c5eb101-63d1-47eb-b29d-4276089794a2 |
| 1247 | CODE_SMELL | MAJOR | src/renderer/sanitize-html.ts:32 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | de9fb8ce-5212-4c4b-9987-8717ab15c2b0 |
| 1248 | CODE_SMELL | MINOR | src/renderer/sanitize-html.ts:45 | typescript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | f6427dcc-6f87-44ec-a830-931ea779a527 |
| 1249 | CODE_SMELL | CRITICAL | src/main/extension-path.ts:201 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 29 to the 15 allowed. | 1399039b-9df5-4481-b563-97c307e58cd5 |
| 1250 | CODE_SMELL | CRITICAL | src/main/bridge.ts:1335 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 32 to the 15 allowed. | e1e970fa-b4e9-4a76-a912-b47e4ca986da |
| 1251 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:536 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 85c73754-12bb-449c-a239-0a6728c9d7b1 |
| 1252 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:638 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | d4018ab9-50c9-4257-a690-48015d676686 |
| 1253 | CODE_SMELL | CRITICAL | extension/fiber.js:1642 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 32 to the 15 allowed. | deaf3f89-cce9-4466-933a-02d25f9d8182 |
| 1254 | CODE_SMELL | MINOR | extension/fiber.js:1654 | javascript:S7735 | Unexpected negated condition. | c9a530b5-322f-4881-a8b0-67aebf0f756f |
| 1255 | CODE_SMELL | MINOR | extension/fiber.js:1670 | javascript:S7735 | Unexpected negated condition. | 00a91943-1c4a-4b30-b340-35c786a44356 |
| 1256 | CODE_SMELL | CRITICAL | extension/fiber.js:1687 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | a9dc85d9-ffce-4bd4-9007-76066f2ce279 |
| 1257 | CODE_SMELL | MINOR | extension/fiber.js:2045 | javascript:S4138 | Expected a `for-of` loop instead of a `for` loop with this simple iteration. | 6354c047-b537-444d-8698-82c435a8aa1d |
| 1258 | CODE_SMELL | MAJOR | extension/fiber.js:2049 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | b22edc7f-abcd-47c2-825b-f15614aef92e |
| 1259 | CODE_SMELL | MAJOR | extension/fiber.js:2093 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 715d4ea5-708e-4c55-9eda-2ff5822f6f9f |
| 1260 | CODE_SMELL | MAJOR | extension/fiber.js:2100 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | abbf3dd0-92f5-4077-932e-ac04d988d337 |
| 1261 | CODE_SMELL | MAJOR | src/main/bridge.ts:1195 | typescript:S4624 | Refactor this code to not use nested template literals. | b18b6755-2185-4113-9602-919fa11b938b |
| 1262 | CODE_SMELL | CRITICAL | src/renderer/plugins.ts:299 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | 3b9aac08-02e0-4f15-8297-4a79b8b644b0 |
| 1263 | CODE_SMELL | MINOR | src/renderer/plugins.ts:306 | typescript:S7764 | Prefer `globalThis` over `window`. | d8e1cdc5-a24c-427f-9b6f-369944e7f569 |
| 1264 | CODE_SMELL | MAJOR | extension/content.js:1642 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 0bdd8613-1003-40d0-af83-9de4c6c94d1a |
| 1265 | CODE_SMELL | BLOCKER | src/renderer/chat.ts:3789 | typescript:S3516 | Refactor this function to not always return the same value. | 74c57e13-bde7-4d5e-af35-5d733cf15c97 |
| 1266 | CODE_SMELL | CRITICAL | extension/background.js:3194 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | deaeb7a9-7157-4891-952c-39a3448d33e9 |
| 1267 | CODE_SMELL | CRITICAL | src/main/session/input.ts:1240 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 18 to the 15 allowed. | 6ed697fe-4d43-4983-866d-5e6c7655d54a |
| 1268 | CODE_SMELL | MINOR | extension/background.js:4914 | javascript:S7764 | Prefer `globalThis` over `window`. | 8bf1dfd6-fbb8-4f84-8987-ae19bf20a9cf |
| 1269 | CODE_SMELL | MINOR | extension/usage.js:21 | javascript:S7764 | Prefer `globalThis` over `window`. | ecd9c502-9e56-4d82-be80-e6df88637717 |
| 1270 | CODE_SMELL | MINOR | extension/usage.js:22 | javascript:S7764 | Prefer `globalThis` over `window`. | 49e870ba-b928-4534-a04f-37fb83fec6fa |
| 1271 | CODE_SMELL | MINOR | extension/usage.js:22 | javascript:S7764 | Prefer `globalThis` over `window`. | ed997018-e5cd-4c7f-9397-c5714d9d5745 |
| 1272 | CODE_SMELL | MINOR | extension/usage.js:29 | javascript:S7764 | Prefer `globalThis` over `window`. | 0a3e4dbd-90e8-46aa-9e18-2ea40191efee |
| 1273 | CODE_SMELL | MINOR | extension/usage.js:29 | javascript:S7764 | Prefer `globalThis` over `window`. | a0f91e1b-e938-4fa9-89d4-8599afb23eb1 |
| 1274 | CODE_SMELL | MAJOR | extension/fiber.js:2434 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 1d028d59-986f-40f6-b39e-3295eca93728 |
| 1275 | CODE_SMELL | MAJOR | extension/fiber.js:2434 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 33d1f030-e7a7-43f3-acfa-60f895af9a5f |
| 1276 | CODE_SMELL | MINOR | extension/fiber.js:2434 | javascript:S7735 | Unexpected negated condition. | 5cb45379-c106-4dfa-b7a2-d92a3b3c9fe9 |
| 1277 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:3263 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 322dba80-d31e-450a-b901-9688ad1ec9e4 |
| 1278 | CODE_SMELL | MAJOR | extension/fiber.js:2363 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | 854373d6-1a3d-4ba7-bef1-ef92028f5d71 |
| 1279 | CODE_SMELL | MAJOR | extension/fiber.js:2363 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | c31d73b3-ea35-4d41-88aa-d7fd19c130ad |
| 1280 | CODE_SMELL | MAJOR | extension/fiber.js:2364 | javascript:S7761 | Prefer `.dataset` over `removeAttribute(…)`. | 7f8c135a-0ccb-4696-af09-cdfc2c1e8c7e |
| 1281 | CODE_SMELL | MAJOR | extension/content.js:887 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 18821a7a-e79d-407a-b51c-79dd0ff8d9c8 |
| 1282 | CODE_SMELL | MAJOR | extension/content.js:11381 | javascript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | 77730e67-7bf6-4a95-bb77-b18dc8a34aae |
| 1283 | CODE_SMELL | CRITICAL | extension/content.js:11381 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | cab7814a-8447-46a2-b28d-82823d6a5f61 |
| 1284 | CODE_SMELL | CRITICAL | extension/content.js:11384 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 0e7dc063-f15a-416b-b4b3-9da6a8cf7441 |
| 1285 | CODE_SMELL | CRITICAL | extension/content.js:11385 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | abc8161f-bae8-4f09-ab72-92965a0bdd4b |
| 1286 | CODE_SMELL | CRITICAL | src/main/session/store.ts:1263 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 76 to the 15 allowed. | 16fadb11-1406-424c-a3c8-e8900b17b05e |
| 1287 | CODE_SMELL | MAJOR | src/main/session/store.ts:1327 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | bd5a2c50-4aa3-4780-a0bb-830995aff258 |
| 1288 | CODE_SMELL | MAJOR | src/main/bridge.ts:7446 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | f58e2fa1-bebb-4055-97a6-0cd7c64e66e5 |
| 1289 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:1797 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 831c1aed-03e0-448b-816e-5a7c6546f8b0 |
| 1290 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:3034 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 337ac582-ad33-459a-a677-1569f0a74ce2 |
| 1291 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2285 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 22 to the 15 allowed. | e8004612-d52b-4b72-8daa-5c13ebe47e19 |
| 1292 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:2301 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 36c3fac0-1723-46df-90eb-bfcdc426cfcc |
| 1293 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:2301 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 83264db7-59af-44c5-9ea8-fb46d4e2886e |
| 1294 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:581 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 2ff3ce5e-73aa-495f-a591-dd9fa170e6df |
| 1295 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:583 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 3012b316-402d-4b50-8e3a-f82416e3ba66 |
| 1296 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:899 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | d9fe290e-ee9c-474c-8860-6ad5454e960a |
| 1297 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:956 | javascript:S7761 | Prefer `.dataset` over `hasAttribute(…)`. | 49615a02-9f7e-467a-8fa9-27bfb7fa9499 |
| 1298 | CODE_SMELL | MAJOR | src/main/bridge.ts:7737 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 8de0c5d0-2bf1-4f19-b92e-d7cc5ea602ab |
| 1299 | CODE_SMELL | MAJOR | src/main/bridge.ts:7739 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 9943df42-4591-4db0-9919-fe53f673a0c7 |
| 1300 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:1001 | javascript:S7761 | Prefer `.dataset` over `hasAttribute(…)`. | 274fedfc-7b37-4fd9-b6c0-43f6f9ab3e13 |
| 1301 | CODE_SMELL | CRITICAL | extension/usage.js:173 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 39 to the 15 allowed. | 2ce0efaa-1c1e-427d-b46f-b2d76b3ded53 |
| 1302 | CODE_SMELL | MINOR | extension/background.js:4628 | javascript:S7735 | Unexpected negated condition. | 90c00e45-9953-48a8-b07f-21634ff0b8e5 |
| 1303 | CODE_SMELL | MAJOR | extension/background.js:4629 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 4a6b5554-fa5b-45ca-a0c6-f7c9587121c9 |
| 1304 | CODE_SMELL | MAJOR | extension/background.js:4630 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | c747b0d2-f65c-497c-bd40-1d8f78668645 |
| 1305 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:3261 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 319ae2a2-05a7-42c7-aa12-20a41a546818 |
| 1306 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:3274 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 86399f0c-5727-4d64-8085-07137137cd54 |
| 1307 | CODE_SMELL | MAJOR | extension/fiber.js:2199 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 0d152e62-ebff-4285-98d4-741237f3513f |
| 1308 | CODE_SMELL | MAJOR | extension/fiber.js:2199 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | f2bdffe6-3d41-46f5-91b8-3a71f80c760f |
| 1309 | CODE_SMELL | MAJOR | extension/fiber.js:2200 | javascript:S7761 | Prefer `.dataset` over `removeAttribute(…)`. | ac598f99-af29-4835-9216-95bca4433d33 |
| 1310 | CODE_SMELL | MAJOR | extension/fiber.js:2258 | javascript:S7761 | Prefer `.dataset` over `removeAttribute(…)`. | 7692142a-044b-4992-b8be-e1d01db97b4e |
| 1311 | CODE_SMELL | MAJOR | extension/fiber.js:2259 | javascript:S7761 | Prefer `.dataset` over `removeAttribute(…)`. | 08dc5452-479e-4dfb-8f51-72ce4ac5db88 |
| 1312 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:116 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 82350c98-421d-4de5-bf22-25fc0ce307b7 |
| 1313 | CODE_SMELL | MINOR | src/shared/user-prompt.ts:40 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | e8e94fc4-722d-4e5e-9b76-e9452389c705 |
| 1314 | CODE_SMELL | MAJOR | src/main/session/store.ts:2523 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | a22c0c27-237a-47da-a784-5f4e2cddcdbf |
| 1315 | CODE_SMELL | CRITICAL | src/main/session/store.ts:2675 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | 5874dfae-5eab-42e7-8f17-9cfda2295a77 |
| 1316 | CODE_SMELL | CRITICAL | src/main/session/store.ts:2891 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 18 to the 15 allowed. | 36ad3454-4156-499f-9df5-2ebc2c43c7f6 |
| 1317 | CODE_SMELL | MAJOR | extension/content.js:9493 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | d16f55fb-5006-4569-811e-d78262240962 |
| 1318 | CODE_SMELL | CRITICAL | extension/content.js:11565 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | f35540b6-dc93-4746-b1e9-50b55114916c |
| 1319 | CODE_SMELL | MAJOR | src/main/agents.ts:980 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 92c5c6c9-1b51-4d4b-890d-c531957411ec |
| 1320 | CODE_SMELL | MAJOR | src/main/agents.ts:1002 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 881ab235-e405-43ca-b41e-d800a5dfec91 |
| 1321 | CODE_SMELL | MAJOR | src/main/agents.ts:1038 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 5cc3263b-e295-4581-9745-096e94e56239 |
| 1322 | CODE_SMELL | MAJOR | src/main/agents.ts:1088 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 5201481d-3b0b-4bdb-a3a9-d598de399e22 |
| 1323 | CODE_SMELL | MAJOR | src/main/agents.ts:1099 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | e0fa0833-eef0-4943-aba7-934ffb37d881 |
| 1324 | CODE_SMELL | MAJOR | src/main/agents.ts:1110 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 9fb6eecf-007f-45fe-986d-ca1ec5fa0fe8 |
| 1325 | CODE_SMELL | MAJOR | src/main/agents.ts:3006 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | b5b969a0-2a8e-4b92-a774-b9deb9d9b776 |
| 1326 | CODE_SMELL | CRITICAL | src/main/agents.ts:4547 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 28 to the 15 allowed. | f2ff0965-b843-4ac9-93ae-6fbb795107b2 |
| 1327 | CODE_SMELL | CRITICAL | src/main/agents.ts:5031 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 40 to the 15 allowed. | 571a5814-74b2-4016-99bc-dba2a04a7f68 |
| 1328 | CODE_SMELL | CRITICAL | src/main/bridge.ts:1600 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 21 to the 15 allowed. | 5997c4ab-a4a6-4179-b9d6-c5be51cc5a8d |
| 1329 | CODE_SMELL | CRITICAL | src/main/bridge.ts:4840 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | b83c0a58-c9e1-4761-8571-765c0c344bcf |
| 1330 | CODE_SMELL | MAJOR | src/main/bridge.ts:4884 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 1c301d59-0cdd-4bae-98c6-ac692eee603e |
| 1331 | CODE_SMELL | CRITICAL | src/main/bridge.ts:4973 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 34 to the 15 allowed. | ae9631ee-9c8b-4938-8ab7-968103b6b1a8 |
| 1332 | CODE_SMELL | MAJOR | src/main/mcp/kernel.ts:1011 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 128bf4b4-fb14-4c5e-a75f-922d6ba2097d |
| 1333 | CODE_SMELL | MAJOR | src/main/mcp/kernel.ts:1013 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | a9b22077-bab1-40a9-aa02-0fc70155b9e0 |
| 1334 | CODE_SMELL | MAJOR | src/main/mcp/kernel.ts:1019 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 2055bce6-cb6a-4b8d-832a-956d8a93bd95 |
| 1335 | CODE_SMELL | MAJOR | src/main/session/store.ts:1932 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 13c6c66e-a945-4330-ad28-b5181b583451 |
| 1336 | CODE_SMELL | MAJOR | src/main/mcp/instructions.ts:136 | typescript:S6535 | Unnecessary escape character: \'. | a8584631-4a1b-4bce-a800-262c0e7906b8 |
| 1337 | CODE_SMELL | CRITICAL | src/main/mcp/tools-core.ts:781 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 55 to the 15 allowed. | cf2999e9-0def-4f7d-83b7-476ff0094314 |
| 1338 | CODE_SMELL | MAJOR | src/main/mcp/tools-core.ts:809 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 41da4193-bddd-447a-b52f-3ac045aea615 |
| 1339 | CODE_SMELL | CRITICAL | src/shared/command-allowlist.ts:166 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 18 to the 15 allowed. | 106db888-76a4-4feb-85b5-38952a2dd144 |
| 1340 | CODE_SMELL | CRITICAL | src/main/bridge.ts:6825 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | 1d35fb79-09d2-4c65-ba93-dd6daec73203 |
| 1341 | CODE_SMELL | MAJOR | src/main/bridge.ts:6841 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 7c86f740-ba96-4219-987c-c6b8a9a6d0d5 |
| 1342 | CODE_SMELL | MAJOR | src/main/bridge.ts:6846 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 06158409-7e3c-4a86-b134-40e822210894 |
| 1343 | CODE_SMELL | CRITICAL | src/shared/command-allowlist.ts:34 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 100 to the 15 allowed. | a1d401ab-add1-4c4a-8d41-575a924cd0a7 |
| 1344 | CODE_SMELL | CRITICAL | src/main/session/finish.ts:64 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 43 to the 15 allowed. | cf04c7ec-fbd8-4622-952a-a16ed87e6630 |
| 1345 | CODE_SMELL | MAJOR | scripts/install-server-service.mjs:119 | javascript:S7785 | Prefer top-level await over using a promise chain. | 24ea1bf9-4bb1-404d-ae7d-009150793540 |
| 1346 | CODE_SMELL | CRITICAL | src/server/index.ts:62 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | 4247b28d-b770-4473-a1fb-7e38e8e1f8a5 |
| 1347 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:5784 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 40 to the 15 allowed. | 6330085e-a13a-483a-81ca-f3d9f1792f0d |
| 1348 | CODE_SMELL | MAJOR | src/renderer/chat.ts:6267 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 561ee19c-b0f5-4eb8-8beb-1aa3870ada46 |
| 1349 | CODE_SMELL | MAJOR | src/renderer/plugins.ts:83 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | d4481e86-39bc-476f-9669-726494710ad1 |
| 1350 | CODE_SMELL | MAJOR | src/main/mcp/tools-core.ts:811 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | cb765ed9-6eba-41a6-8198-a59b9e341840 |
| 1351 | CODE_SMELL | MAJOR | src/main/mcp/tools-core.ts:865 | typescript:S4624 | Refactor this code to not use nested template literals. | 0cd0583b-6ba7-46c7-bbe0-6886f505143d |
| 1352 | CODE_SMELL | MINOR | src/shared/command-allowlist.ts:126 | typescript:S6353 | Use concise character class syntax '\w' instead of '[A-Za-z0-9_]'. | f8f94f21-c74f-42a0-8d70-62147ac52537 |
| 1353 | CODE_SMELL | MINOR | src/server/runtime.ts:33 | typescript:S6644 | Unnecessary use of conditional expression for default assignment. | 17fd1546-bf4d-4cc8-89c0-72afaeb1055d |
| 1354 | CODE_SMELL | MINOR | src/server/secrets.ts:19 | typescript:S6644 | Unnecessary use of conditional expression for default assignment. | a75a18aa-ec0b-40f1-a6c4-717313e60b5e |
| 1355 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:454 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | 5aa67586-a506-438f-b6ef-7cf33b168bc0 |
| 1356 | CODE_SMELL | CRITICAL | src/renderer/sidebar-completion.ts:27 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | 9c916e6f-327e-401e-8418-7fae044b3511 |
| 1357 | CODE_SMELL | MINOR | src/renderer/sidebar-completion.ts:32 | typescript:S7764 | Prefer `globalThis` over `window`. | c4552023-d809-430a-9160-7aee5cb0c629 |
| 1358 | CODE_SMELL | MINOR | src/renderer/sidebar-completion.ts:63 | typescript:S7764 | Prefer `globalThis` over `window`. | edc6332b-fdfd-409c-a2a1-98c219a9a8fc |
| 1359 | CODE_SMELL | MAJOR | src/main/bridge.ts:9623 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 216ffd76-a1ff-462a-9a04-518af4bea988 |
| 1360 | CODE_SMELL | MAJOR | src/main/plugin-refresh.ts:149 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | e2842063-7803-470d-a668-af83ae792dbb |
| 1361 | CODE_SMELL | CRITICAL | src/main/session/input.ts:162 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 18 to the 15 allowed. | ec400bc5-cf41-4d57-92cd-dd92c8c025db |
| 1362 | CODE_SMELL | MINOR | src/renderer/plugins.ts:114 | typescript:S7764 | Prefer `globalThis` over `window`. | e776942c-f8e4-4053-abdf-4f827a933ee6 |
| 1363 | CODE_SMELL | MINOR | src/renderer/plugins.ts:318 | typescript:S7764 | Prefer `globalThis` over `window`. | 554e149e-351a-4441-baa9-af157695ba6c |
| 1364 | CODE_SMELL | MINOR | extension/content.js:6396 | javascript:S4138 | Expected a `for-of` loop instead of a `for` loop with this simple iteration. | 2faa9512-c4aa-4c48-a067-bc67f78ee3f9 |
| 1365 | CODE_SMELL | MINOR | scripts/fixtures/shell-react-runtime.js:54 | javascript:S7764 | Prefer `globalThis` over `window`. | 672610a8-a267-4dba-83c2-0233ccb44f6e |
| 1366 | CODE_SMELL | CRITICAL | src/main/session/store.ts:3641 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | c2843917-a9b4-42a6-9af1-0148e68b4f82 |
| 1367 | BUG | CRITICAL | src/main/session/store.ts:3675 | typescript:S1143 | Unsafe usage of ThrowStatement. | 9264d085-067b-49a5-b2ac-54a7b8b71c5a |
| 1368 | CODE_SMELL | CRITICAL | src/main/bridge.ts:4942 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 21 to the 15 allowed. | e453e3e3-6b25-4d86-a010-a740e158ce16 |
| 1369 | CODE_SMELL | MINOR | scripts/fixtures/shell-react-runtime.js:7 | javascript:S7764 | Prefer `globalThis` over `window`. | c935afdc-16bc-4e97-8aa9-24eab1ae00ef |
| 1370 | CODE_SMELL | MINOR | scripts/fixtures/shell-react-runtime.js:14 | javascript:S7764 | Prefer `globalThis` over `window`. | 701750f9-83ef-49e5-a528-83d66e00e520 |
| 1371 | CODE_SMELL | MINOR | scripts/fixtures/shell-react-runtime.js:14 | javascript:S7764 | Prefer `globalThis` over `window`. | 882013b5-d156-40c7-85e9-e35a9cb1d278 |
| 1372 | CODE_SMELL | MINOR | scripts/fixtures/shell-react-runtime.js:52 | javascript:S7723 | Use `new Error()` instead of `Error()`. | c526e420-ef6f-4fb8-aea4-ef701f3b7677 |
| 1373 | CODE_SMELL | MINOR | scripts/fixtures/shell-react-runtime.js:64 | javascript:S7723 | Use `new Error()` instead of `Error()`. | f8ea9b3c-31ee-4372-826c-3fb33c66386b |
| 1374 | CODE_SMELL | MINOR | scripts/fixtures/shell-react-runtime.js:77 | javascript:S7723 | Use `new Error()` instead of `Error()`. | 66b69954-c2db-44ff-86f0-3433de36ad7e |
| 1375 | CODE_SMELL | MINOR | scripts/fixtures/shell-react-runtime.js:96 | javascript:S7723 | Use `new Error()` instead of `Error()`. | c4159d99-b3e4-4185-b939-419373968468 |
| 1376 | CODE_SMELL | MINOR | scripts/fixtures/shell-react-runtime.js:97 | javascript:S7723 | Use `new Error()` instead of `Error()`. | 6144ebdb-7f22-4b34-8448-af43c68bcc72 |
| 1377 | CODE_SMELL | MINOR | scripts/verify-shell-runtime.cjs:103 | javascript:S7780 | `String.raw` should be used to avoid escaping `\`. | 6a1af0f5-ae91-4f36-8f62-82a75ae833f5 |
| 1378 | CODE_SMELL | MAJOR | extension/content.js:830 | javascript:S7761 | Prefer `.dataset` over `hasAttribute(…)`. | c83d1eff-03a3-4a20-9efc-c54b51da60bd |
| 1379 | CODE_SMELL | MINOR | extension/fiber.js:252 | javascript:S7758 | Prefer `String#codePointAt()` over `String#charCodeAt()`. | 04be474f-9bb2-47f8-af2f-b5ecfa918c1b |
| 1380 | CODE_SMELL | MAJOR | extension/fiber.js:252 | javascript:S6557 | Use 'String#startsWith' method instead. | 5db2028f-285d-45cb-a6f9-5c136d3a5fd2 |
| 1381 | CODE_SMELL | CRITICAL | src/main/bridge.ts:8854 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 78 to the 15 allowed. | 0c8fe48a-eb9c-45d1-98aa-c8cd800919dd |
| 1382 | CODE_SMELL | MINOR | src/main/bridge.ts:8914 | typescript:S6509 | Redundant double negation. | 9f450038-cc8d-42c8-89bc-5446865e302b |
| 1383 | CODE_SMELL | MINOR | src/main/bridge.ts:8914 | typescript:S7735 | Unexpected negated condition. | af1a105f-0120-4dfa-a90e-7f846e540719 |
| 1384 | CODE_SMELL | CRITICAL | src/main/connection.ts:367 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 21 to the 15 allowed. | a4ee8360-29d7-4ff2-a29a-2e56c042b854 |
| 1385 | CODE_SMELL | MAJOR | src/main/connection.ts:636 | typescript:S1121 | Extract the assignment of "pendingTeardown" from this expression. | 505ffc6f-32c7-4dd3-8821-8b95a71fa3e3 |
| 1386 | CODE_SMELL | MAJOR | src/renderer/index.html:352 | Web:S6819 | Use &lt;output&gt; instead of the status role to ensure accessibility across all devices. | bee1862d-cff9-40a3-9b07-38202c6825d3 |
| 1387 | CODE_SMELL | MINOR | src/renderer/usage.ts:63 | typescript:S7764 | Prefer `globalThis` over `window`. | 72b968c2-ac9b-4992-bc2c-bea9540792da |
| 1388 | CODE_SMELL | BLOCKER | test/macos-window-matching.test.ts | typescript:S2187 | Add some tests to this file or delete it. | 49f38162-7fc8-411c-a5b0-1e04c10048ba |
| 1389 | CODE_SMELL | MINOR | extension/content.js:2864 | javascript:S7750 | Prefer `.findLast(…)` over `.filter(…).at(-1)`. | 51ef051a-0945-4fe4-b6ed-d85dcaad8812 |
| 1390 | CODE_SMELL | CRITICAL | extension/fiber.js:1316 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 32 to the 15 allowed. | 6593223f-e3d5-43b7-a621-e29f741976ea |
| 1391 | CODE_SMELL | MAJOR | extension/fiber.js:1330 | javascript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | 8f94ebd0-e8a6-439b-bd04-df2808bde088 |
| 1392 | CODE_SMELL | MAJOR | extension/fiber.js:1333 | javascript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | fc1561e2-b68e-4bfc-813a-baab7e3f51f9 |
| 1393 | CODE_SMELL | MINOR | extension/fiber.js:1368 | javascript:S4138 | Expected a `for-of` loop instead of a `for` loop with this simple iteration. | c69dfdad-b45b-44d5-8189-e7619db989ab |
| 1394 | CODE_SMELL | CRITICAL | extension/fiber.js:1398 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 24 to the 15 allowed. | f210e299-34d7-4ce4-b95b-5c363d294b62 |
| 1395 | CODE_SMELL | MAJOR | extension/fiber.js:1435 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 725083cc-e855-4bbd-a990-f500bd4181f2 |
| 1396 | CODE_SMELL | CRITICAL | extension/fiber.js:1793 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 58 to the 15 allowed. | b0d5ffc5-75e3-46f7-9829-218e4aba23e0 |
| 1397 | CODE_SMELL | CRITICAL | src/main/agents.ts:755 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 82 to the 15 allowed. | 6f37e973-770c-4248-bb91-66d878932e49 |
| 1398 | CODE_SMELL | MINOR | extension/content.js:9250 | javascript:S7750 | Prefer `.findLast(…)` over `.filter(…).at(-1)`. | 642167c5-66b7-4c87-9e34-55ad81707c4f |
| 1399 | CODE_SMELL | MINOR | extension/content.js:9345 | javascript:S7750 | Prefer `.findLast(…)` over `.filter(…).at(-1)`. | 79211586-7b7f-4b7d-a09a-b4324cbea503 |
| 1400 | CODE_SMELL | MINOR | extension/content.js:9348 | javascript:S7750 | Prefer `.findLast(…)` over `.filter(…).at(-1)`. | 27040266-bdaf-4ddc-b52f-c1093b9b5f32 |
| 1401 | CODE_SMELL | MINOR | extension/content.js:9378 | javascript:S7750 | Prefer `.findLast(…)` over `.filter(…).at(-1)`. | f66a12e8-df4b-4776-a878-27f6de8a4f27 |
| 1402 | CODE_SMELL | MAJOR | extension/content.js:9742 | javascript:S4144 | Update this function so that its implementation is not identical to the one on line 9338. | 169e2e9f-f840-4bd6-b3ce-42dda1226efa |
| 1403 | CODE_SMELL | MINOR | scripts/fixtures/browser-bridge-port.ts:120 | typescript:S6551 | 'raw' may use Object's default stringification format ('[object Object]') when stringified. | 4c428ad1-865c-471a-8e07-af26e739d523 |
| 1404 | CODE_SMELL | MAJOR | scripts/fixtures/browser-bridge-port.ts:121 | typescript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | 5fb1021d-942b-4a51-a99e-b09746185961 |
| 1405 | CODE_SMELL | MINOR | src/main/bridge.ts:62 | typescript:S3863 | '../shared/types.js' imported multiple times. | 8ce7c7d0-606e-4398-8998-d3490b1a879a |
| 1406 | CODE_SMELL | MINOR | src/main/bridge.ts:233 | typescript:S7763 | Use `export…from` to re-export `DEFAULT_PORTS`. | 7c7c006c-b008-4bf7-8049-d2148d6d9572 |
| 1407 | CODE_SMELL | CRITICAL | src/main/bridge.ts:5199 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 18 to the 15 allowed. | 69a3d16a-0fbb-45cc-b519-2b166ab3501a |
| 1408 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:5040 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 29 to the 15 allowed. | 3ad683ed-76b8-4e1e-9668-164632a72735 |
| 1409 | CODE_SMELL | MAJOR | src/renderer/chat.ts:5042 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 72b1bb24-bbeb-49f8-a92e-8e16b10b0d4f |
| 1410 | CODE_SMELL | MAJOR | src/renderer/chat.ts:5044 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 6c8088c9-ca94-4516-964a-4a2913c8a669 |
| 1411 | CODE_SMELL | MINOR | src/main/skill-access.ts:22 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | f68ce610-c101-4820-ad63-ba0d6bb5e2bb |
| 1412 | CODE_SMELL | CRITICAL | src/main/skill-access.ts:26 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | 76dce9ff-27d3-49e7-bf0a-d4a00af2ff41 |
| 1413 | CODE_SMELL | MINOR | src/main/skill-access.ts:27 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 23aef2db-00c6-4aef-85b5-2c761164d234 |
| 1414 | CODE_SMELL | CRITICAL | src/main/skill-library.ts:109 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 29 to the 15 allowed. | 306e4eb2-ca92-4f41-870a-ff0505a5d05b |
| 1415 | CODE_SMELL | CRITICAL | src/main/skills.ts:241 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 25 to the 15 allowed. | 3363e138-874f-4726-8ca5-7fc9c13e8ed9 |
| 1416 | CODE_SMELL | CRITICAL | extension/background.js:1684 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | 9f05f4f8-5063-475e-8dc3-227d8ebec8f8 |
| 1417 | CODE_SMELL | MINOR | extension/background.js:2800 | javascript:S6653 | Use 'Object.hasOwn()' instead of 'Object.prototype.hasOwnProperty.call()'. | d5109a2b-daf2-4560-8578-7d589b9c673a |
| 1418 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2243 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 41 to the 15 allowed. | cd70a662-9f05-4032-861a-4acd4c8ca532 |
| 1419 | CODE_SMELL | CRITICAL | extension/fiber.js:1733 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 26 to the 15 allowed. | 4d6b783c-3e97-466f-82ec-c7b12c5735b9 |
| 1420 | CODE_SMELL | MAJOR | extension/fiber.js:1766 | javascript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | 2de897d9-57ae-4896-8e9b-92205d088cb1 |
| 1421 | CODE_SMELL | CRITICAL | extension/fiber.js:1879 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 31 to the 15 allowed. | 3da4aca9-a0e3-43df-89b9-75845db59cd1 |
| 1422 | CODE_SMELL | MINOR | extension/usage.js:15 | javascript:S7764 | Prefer `globalThis` over `window`. | ce4ee8d9-0b4b-4c04-a278-bcd9af6ce840 |
| 1423 | CODE_SMELL | MINOR | extension/usage.js:26 | javascript:S7764 | Prefer `globalThis` over `window`. | 287f8da8-3cdb-4da8-9bf7-fcd7c8af8111 |
| 1424 | CODE_SMELL | MINOR | extension/usage.js:33 | javascript:S7764 | Prefer `globalThis` over `window`. | 0681c5a0-6c6f-4d5b-a6eb-a1429e41157e |
| 1425 | CODE_SMELL | CRITICAL | extension/usage.js:167 | javascript:S3735 | Remove this use of the "void" operator. | 4f1ab2bb-5346-466f-8feb-9314c2b1c3a7 |
| 1426 | CODE_SMELL | CRITICAL | extension/usage.js:246 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 32 to the 15 allowed. | 2d6b8d21-f207-41c0-bfb3-5b4a8655a1ec |
| 1427 | CODE_SMELL | CRITICAL | extension/usage.js:290 | javascript:S3735 | Remove this use of the "void" operator. | 0fbe9151-69f6-4f08-a7da-2f2bbc7077ce |
| 1428 | CODE_SMELL | CRITICAL | extension/usage.js:295 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 55 to the 15 allowed. | b8282d63-fab8-4080-b7e5-11de33c7409d |
| 1429 | CODE_SMELL | MINOR | extension/usage.js:339 | javascript:S7764 | Prefer `globalThis` over `window`. | 2e407a1a-ab29-42b4-8463-cebbd5bc2734 |
| 1430 | CODE_SMELL | MINOR | extension/usage.js:339 | javascript:S7764 | Prefer `globalThis` over `window`. | 47dc6fa9-f515-4392-8a62-8b04629a644f |
| 1431 | CODE_SMELL | MINOR | extension/usage.js:404 | javascript:S7764 | Prefer `globalThis` over `window`. | 920b2630-9e21-44ec-85de-3d65d75e7b30 |
| 1432 | CODE_SMELL | MINOR | extension/usage.js:404 | javascript:S7764 | Prefer `globalThis` over `window`. | ef534ace-614c-4236-90a8-543cc4f5b394 |
| 1433 | CODE_SMELL | BLOCKER | extension/usage.js:408 | javascript:S3516 | Refactor this function to not always return the same value. | 49ed515f-a17d-4aa1-b5e3-9559ea6f6245 |
| 1434 | CODE_SMELL | MINOR | extension/usage.js:457 | javascript:S7764 | Prefer `globalThis` over `window`. | 64335e5b-8837-4453-9b75-f896e61da86e |
| 1435 | CODE_SMELL | MINOR | extension/usage.js:471 | javascript:S7764 | Prefer `globalThis` over `window`. | ed92c4dd-ea65-4393-b074-c373d7bf2f3b |
| 1436 | CODE_SMELL | MINOR | extension/usage.js:474 | javascript:S7764 | Prefer `globalThis` over `window`. | 746ba15d-0b90-4a5a-9acb-f19f3f44a265 |
| 1437 | CODE_SMELL | MINOR | extension/usage.js:474 | javascript:S7764 | Prefer `globalThis` over `window`. | f4750964-512a-4d9c-82ac-39113c6b7087 |
| 1438 | CODE_SMELL | CRITICAL | extension/usage.js:477 | javascript:S3735 | Remove this use of the "void" operator. | 3cdad168-04f6-4bc2-b616-28937dfe5396 |
| 1439 | CODE_SMELL | MINOR | extension/usage.js:480 | javascript:S7764 | Prefer `globalThis` over `window`. | 3c928d9b-6649-49b9-a1d8-06b50d7e86cd |
| 1440 | CODE_SMELL | MINOR | extension/usage.js:481 | javascript:S7764 | Prefer `globalThis` over `window`. | 67889cb6-1851-4970-8afd-b6434f680830 |
| 1441 | CODE_SMELL | MINOR | scripts/verify-usage-week.cjs:36 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 0799a339-58c7-47f0-b6a5-c3ec6362aa8d |
| 1442 | CODE_SMELL | CRITICAL | src/main/bridge.ts:2945 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | 5c2eef09-6d3c-4138-9cae-94d50fffc15b |
| 1443 | CODE_SMELL | MAJOR | src/main/session/handoff.ts:63 | typescript:S4624 | Refactor this code to not use nested template literals. | c17b8c95-7fb9-49d7-8dfb-9bf86657c90c |
| 1444 | CODE_SMELL | CRITICAL | src/main/session/input.ts:1086 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 36 to the 15 allowed. | 1b33b203-e4b8-4560-b36e-109dd985b04d |
| 1445 | CODE_SMELL | MINOR | src/main/session/usage.ts:28 | typescript:S1874 | '(params?: unknown): ZodNumber' is deprecated. | e71f3547-8727-4445-8a97-65219de77a5e |
| 1446 | CODE_SMELL | MAJOR | src/main/session/usage.ts:155 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | bd5f6efc-a169-4e00-b7ee-41ab9bc2f723 |
| 1447 | CODE_SMELL | MAJOR | src/main/session/usage.ts:155 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | d29ce024-c947-4be3-b524-49dd503feac3 |
| 1448 | CODE_SMELL | MAJOR | src/main/tunnel/index.ts:103 | typescript:S5843 | Simplify this regular expression to reduce its complexity from 25 to the 20 allowed. | e118015a-6512-4c9b-9716-c212bb24a896 |
| 1449 | CODE_SMELL | CRITICAL | src/main/tunnel/index.ts:563 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 21 to the 15 allowed. | 7c7199d4-f939-48dd-b064-dc959da46273 |
| 1450 | CODE_SMELL | MINOR | src/shared/usage.ts:34 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 61cf37f3-cac6-4dc6-b74b-00287171275f |
| 1451 | CODE_SMELL | MINOR | extension/active-tabs.js:95 | javascript:S7735 | Unexpected negated condition. | ed6f2939-3157-43a3-85e9-b6e7b9935eff |
| 1452 | CODE_SMELL | MAJOR | extension/active-tabs.js:95 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | f8d3c2c0-9bf3-4ca1-b1bf-abb0a60e3d2b |
| 1453 | CODE_SMELL | MAJOR | extension/background.js:1971 | javascript:S1788 | Default parameters should be last. | bf20d19f-0567-4011-9e90-3f1e2dbaa68f |
| 1454 | CODE_SMELL | MINOR | extension/background.js:2817 | javascript:S6653 | Use 'Object.hasOwn()' instead of 'Object.prototype.hasOwnProperty.call()'. | 4181a44b-1b94-443a-94d1-26dab7cc4b77 |
| 1455 | CODE_SMELL | CRITICAL | extension/background.js:4417 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 32 to the 15 allowed. | 3df99865-42c8-422e-9588-aa9b8db9f6a8 |
| 1456 | CODE_SMELL | CRITICAL | src/renderer/i18n.ts:133 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | ec9837a2-b0db-4d00-aa25-13054df0ae0b |
| 1457 | CODE_SMELL | MINOR | extension/usage.js:176 | javascript:S7750 | Prefer `.findLast(…)` over `.filter(…).at(-1)`. | d9239314-0f1e-4a08-91c3-c04d3978dd22 |
| 1458 | CODE_SMELL | MINOR | extension/usage.js:200 | javascript:S6653 | Use 'Object.hasOwn()' instead of 'Object.prototype.hasOwnProperty.call()'. | 13dd50fe-cff4-4c8c-9fe6-3b4038165e69 |
| 1459 | CODE_SMELL | MAJOR | extension/usage.js:309 | javascript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | c00ebc2a-54dd-4284-bfbd-b074364114bd |
| 1460 | CODE_SMELL | MAJOR | extension/usage.js:311 | javascript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | 74f5fed0-b691-47a0-a7ff-d03fa09c0a92 |
| 1461 | CODE_SMELL | MAJOR | extension/usage.js:313 | javascript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | f59702a7-d29d-4d2d-a8b7-c27e8be7bf1e |
| 1462 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:123 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 23 to the 15 allowed. | 3215afd9-f77d-4562-b313-7eb00691b5e6 |
| 1463 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:129 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | aca312ee-22c9-4122-98d5-325938a9e00a |
| 1464 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:896 | javascript:S7750 | Prefer `.findLast(…)` over `.filter(…).at(-1)`. | 7c5687df-3385-4855-bc58-a83524810b50 |
| 1465 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2327 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | 4284dfe2-5643-4d41-bc28-88f8d18a1768 |
| 1466 | CODE_SMELL | CRITICAL | extension/background.js:2336 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 30 to the 15 allowed. | 45bb7062-9865-4a4e-b447-b4713c5a6ff0 |
| 1467 | CODE_SMELL | MINOR | extension/background.js:2360 | javascript:S7776 | `blocked` should be a `Set`, and use `blocked.has()` to check existence or non-existence. | 0047d0db-74e9-4231-a718-02fbfb74efb7 |
| 1468 | CODE_SMELL | MINOR | extension/background.js:3889 | javascript:S7735 | Unexpected negated condition. | f366b16b-85de-4278-a2c4-0401c2a73992 |
| 1469 | CODE_SMELL | MAJOR | extension/background.js:3890 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 31352550-d975-4770-8330-58e6531e5a8e |
| 1470 | CODE_SMELL | CRITICAL | extension/background.js:4382 | javascript:S3735 | Remove this use of the "void" operator. | d8e81e74-1893-4977-b03a-59ea3e7fb2e5 |
| 1471 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:596 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 4e838def-b6ec-4913-9c81-f91eb85a884b |
| 1472 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:598 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 01b36772-c5bd-43bc-9d22-61561f70f1e4 |
| 1473 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:1960 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 18 to the 15 allowed. | cdfb4443-0414-4787-8777-487aa8bb85ba |
| 1474 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:2785 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | b3a0a373-dc7e-449a-b230-3255e5131b69 |
| 1475 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2795 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 1934fbc4-fa84-42ac-ba2e-579ed0101f02 |
| 1476 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2819 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 8ec39e1a-07a1-4f52-b48c-d232e5e73b59 |
| 1477 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2822 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 0fde2b12-b179-4957-84f4-6a172d0b6ddd |
| 1478 | CODE_SMELL | MAJOR | extension/content.js:3058 | javascript:S1854 | Remove this useless assignment to variable "turnIdOf". | 4a170ba9-31f1-4ed7-8be6-490957e16693 |
| 1479 | CODE_SMELL | MINOR | extension/content.js:3058 | javascript:S1481 | Remove the declaration of the unused 'turnIdOf' variable. | a5659d85-d278-4ef9-ab69-fbf956c9dbca |
| 1480 | CODE_SMELL | MAJOR | extension/content.js:12104 | javascript:S5869 | Remove duplicates in this character class. | 3a2a686f-bc8f-4b2c-a476-98e924cef989 |
| 1481 | CODE_SMELL | MINOR | extension/content.js:13001 | javascript:S7735 | Unexpected negated condition. | 6137266a-c66d-44ed-9ae6-1ac786a3cae3 |
| 1482 | CODE_SMELL | CRITICAL | extension/fiber.js:308 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 37 to the 15 allowed. | 8886945e-3125-4965-8fe5-5ed845b41fc8 |
| 1483 | CODE_SMELL | MINOR | extension/fiber.js:332 | javascript:S4138 | Expected a `for-of` loop instead of a `for` loop with this simple iteration. | a31a05f2-def9-4dbf-a938-f47152df4e13 |
| 1484 | CODE_SMELL | CRITICAL | extension/fiber.js:343 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 35 to the 15 allowed. | 2f20a669-0460-4bc3-bc50-05533a6cf7f0 |
| 1485 | CODE_SMELL | MAJOR | extension/fiber.js:1943 | javascript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | 1d20d44b-1883-43b8-afd9-917a51a6317f |
| 1486 | CODE_SMELL | MAJOR | extension/fiber.js:1956 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | ab3b305e-33f9-4fe5-b5f2-e381e8222862 |
| 1487 | CODE_SMELL | MAJOR | extension/fiber.js:1960 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | e6b22b28-1995-4367-821f-d5fc679ed812 |
| 1488 | CODE_SMELL | MAJOR | extension/fiber.js:2056 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 1618c8d4-f544-4e0b-8157-7572283a3a2b |
| 1489 | CODE_SMELL | MAJOR | extension/fiber.js:2056 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | c07ffa8e-351a-4629-926c-306258f75453 |
| 1490 | CODE_SMELL | MAJOR | extension/fiber.js:2181 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | 960120e5-8e71-4132-80bc-6bb79a14b646 |
| 1491 | CODE_SMELL | MAJOR | extension/fiber.js:2181 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | fc2bad5a-90a0-4bb1-aadf-91694783a209 |
| 1492 | CODE_SMELL | MAJOR | extension/fiber.js:2182 | javascript:S7761 | Prefer `.dataset` over `removeAttribute(…)`. | 9d00d225-ce27-412a-a523-172f033adeed |
| 1493 | CODE_SMELL | MAJOR | extension/fiber.js:2268 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 14aa7adb-d855-4890-8750-76e77174d96f |
| 1494 | CODE_SMELL | MAJOR | extension/fiber.js:2270 | javascript:S7761 | Prefer `.dataset` over `removeAttribute(…)`. | 531bb0e3-2230-4071-bd23-7f9be6f82530 |
| 1495 | CODE_SMELL | MAJOR | extension/fiber.js:2272 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | 0331aaee-3802-4547-9ff1-2e1ed43d4aa4 |
| 1496 | CODE_SMELL | CRITICAL | extension/fiber.js:2369 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 36 to the 15 allowed. | 7f88340c-7db5-4a60-85ae-0596961303fc |
| 1497 | CODE_SMELL | MAJOR | extension/fiber.js:2385 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | acd5ca66-0dc4-4463-ac76-67e0e317a0eb |
| 1498 | CODE_SMELL | MAJOR | extension/fiber.js:2387 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 211a43d6-c8a1-4a9e-9d1e-4a260c3ae910 |
| 1499 | CODE_SMELL | MAJOR | extension/fiber.js:2392 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | e7b0d23b-a82c-445b-8df1-121f105f7f59 |
| 1500 | CODE_SMELL | MAJOR | extension/fiber.js:2395 | javascript:S7761 | Prefer `.dataset` over `removeAttribute(…)`. | 3d9b6731-36ac-4ce1-aae8-cc358eaa8f40 |
| 1501 | CODE_SMELL | MAJOR | extension/fiber.js:2396 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | 14fae848-b38a-42bf-870e-e55a1dc388f4 |
| 1502 | CODE_SMELL | MAJOR | extension/fiber.js:2396 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | b0537fc4-9a82-4e63-ae79-5a72fda2e944 |
| 1503 | CODE_SMELL | MAJOR | extension/fiber.js:2415 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 06696110-0553-4220-bacd-06256964f75b |
| 1504 | CODE_SMELL | MAJOR | extension/usage.js:39 | javascript:S5869 | Remove duplicates in this character class. | ffdf0708-910e-4cc0-8ffe-56e83ec1a7cf |
| 1505 | CODE_SMELL | MINOR | src/main/chat-models.ts:20 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | 675cb959-68c0-455c-a21e-104cae8684ea |
| 1506 | CODE_SMELL | CRITICAL | src/main/chat-models.ts:142 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | b07f064c-f271-4913-936f-f39f1c682cf8 |
| 1507 | CODE_SMELL | MAJOR | src/main/chat-models.ts:146 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 210e14bc-1728-40eb-998d-3fcf35ddae3e |
| 1508 | CODE_SMELL | MAJOR | src/main/chat-models.ts:164 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | acd4cc45-89c8-4641-b81e-4c0dd38c841d |
| 1509 | CODE_SMELL | MAJOR | src/main/chat-models.ts:165 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | bf060bb1-c69e-4d9a-851a-2ab2c626bce4 |
| 1510 | CODE_SMELL | MAJOR | src/renderer/chat-models.ts:417 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | b113521d-8d0d-4f89-93d2-72bccbbd490e |
| 1511 | CODE_SMELL | MAJOR | src/renderer/chat-models.ts:417 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | e1fbdc10-47d2-477c-847b-371b4238a8e5 |
| 1512 | CODE_SMELL | MAJOR | src/renderer/chat-models.ts:418 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 5e239916-61ce-4e8b-9962-65c43d751264 |
| 1513 | CODE_SMELL | MAJOR | src/main/bridge.ts:6097 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 712d1fe5-958d-4ab4-9e64-1d9a6bba3e7d |
| 1514 | CODE_SMELL | CRITICAL | src/main/bridge.ts:7949 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 22 to the 15 allowed. | 27ee63f1-bea3-416f-8226-d0bf33163c0b |
| 1515 | CODE_SMELL | MAJOR | src/main/bridge.ts:7956 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 24be5eb3-189e-4196-ac06-442fe53f1708 |
| 1516 | CODE_SMELL | CRITICAL | src/main/bridge.ts:8717 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | e7e64139-f4ef-4d04-9da0-5885aa63e713 |
| 1517 | CODE_SMELL | MAJOR | extension/content.js:3769 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 4c217ced-6f6f-4c49-9ee3-7e060b10f5ab |
| 1518 | CODE_SMELL | CRITICAL | extension/content.js:9553 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 28 to the 15 allowed. | 3b7a5e91-8192-446f-b3dc-3a22736f02c1 |
| 1519 | CODE_SMELL | CRITICAL | extension/fiber.js:1499 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | bd8141ce-6e61-45d3-95d7-9e2b7099fb48 |
| 1520 | CODE_SMELL | MAJOR | extension/fiber.js:1502 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 224e58b5-3ad8-4c51-9f3e-41f4dc927354 |
| 1521 | CODE_SMELL | MAJOR | extension/fiber.js:1507 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 1d2385b8-0557-44a4-8dbc-ab2791864d8d |
| 1522 | CODE_SMELL | MAJOR | extension/fiber.js:1508 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 4d791348-9ac6-45e9-803c-6eba69a32965 |
| 1523 | CODE_SMELL | MAJOR | extension/fiber.js:1508 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 6f359213-0096-47a9-b60f-6596a9a52a18 |
| 1524 | CODE_SMELL | MAJOR | extension/fiber.js:1509 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | c8974219-a759-49c5-bd16-d8040ea98a89 |
| 1525 | CODE_SMELL | CRITICAL | extension/fiber.js:1512 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 23 to the 15 allowed. | 3bb4b8dc-3d80-4ca7-9b80-84b360a3e96c |
| 1526 | CODE_SMELL | MAJOR | extension/fiber.js:1519 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 092b2e8b-f896-4e12-b709-f835e1cac435 |
| 1527 | CODE_SMELL | MAJOR | extension/fiber.js:1531 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 8e1b874f-1216-4907-a447-4e575b9ebe2e |
| 1528 | CODE_SMELL | MAJOR | extension/fiber.js:1541 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 89165d63-d956-4def-8d95-8fdeda9882fa |
| 1529 | CODE_SMELL | MAJOR | extension/fiber.js:1544 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | a0cb34e7-53da-4c06-9908-1ead42a7fab3 |
| 1530 | CODE_SMELL | CRITICAL | extension/fiber.js:1555 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 27 to the 15 allowed. | 65a0ca1d-d81d-4985-91cd-cea928cb705d |
| 1531 | CODE_SMELL | MAJOR | extension/fiber.js:2095 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 6471ad9a-118e-4a92-adb9-b15171eb6462 |
| 1532 | CODE_SMELL | MAJOR | extension/fiber.js:2097 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 4f6ade75-2ae1-48dd-bddc-6a7694ea0c43 |
| 1533 | CODE_SMELL | CRITICAL | extension/browser-control-page.js:2 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 299 to the 15 allowed. | a04bc1da-4946-4b89-84a3-bd6261564174 |
| 1534 | CODE_SMELL | MAJOR | extension/browser-control-page.js:2 | javascript:S3800 | Refactor this function to always return the same type. | e41d7473-c913-497d-84c7-a28455b000c2 |
| 1535 | CODE_SMELL | MAJOR | extension/browser-control-page.js:138 | javascript:S4624 | Refactor this code to not use nested template literals. | 521364a2-e7b6-4c01-86dc-7064a305781c |
| 1536 | CODE_SMELL | MAJOR | extension/browser-control-page.js:138 | javascript:S4624 | Refactor this code to not use nested template literals. | 757edb62-6b46-47ed-9430-f472ce3b0c09 |
| 1537 | CODE_SMELL | MAJOR | extension/browser-control-page.js:138 | javascript:S4624 | Refactor this code to not use nested template literals. | b47834e8-9018-4818-873a-c34b1ec303fd |
| 1538 | CODE_SMELL | MAJOR | extension/browser-control-page.js:138 | javascript:S4624 | Refactor this code to not use nested template literals. | d006a523-5b41-4c66-b64b-5262dbc09d5d |
| 1539 | CODE_SMELL | MAJOR | extension/browser-control-page.js:138 | javascript:S4624 | Refactor this code to not use nested template literals. | f0ee5351-aca7-4de2-92a8-d3cfd76d95c4 |
| 1540 | CODE_SMELL | CRITICAL | extension/browser-control.js:210 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 18 to the 15 allowed. | ed992129-2dc0-4960-b6fe-ab2553f72c98 |
| 1541 | CODE_SMELL | MAJOR | extension/browser-control.js:233 | javascript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | 5044320f-b258-4389-b7b3-841b11f2be0b |
| 1542 | CODE_SMELL | MAJOR | extension/browser-control.js:244 | javascript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | de505c41-ce13-409c-b60e-82e97d2ada7d |
| 1543 | CODE_SMELL | CRITICAL | extension/browser-control.js:248 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 821a071b-dfcd-44ea-8da0-06be378ddbcf |
| 1544 | CODE_SMELL | MINOR | extension/browser-control.js:470 | javascript:S1481 | Remove the declaration of the unused '_refs' variable. | ccb0c5cc-cdde-4e0a-a254-c27a6a2baca0 |
| 1545 | CODE_SMELL | CRITICAL | extension/browser-control.js:475 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 112 to the 15 allowed. | d65ad973-fb50-4b64-97d2-868267ef3856 |
| 1546 | CODE_SMELL | MAJOR | extension/browser-control.js:491 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 944e3e28-45ef-45df-8360-69db6ad0482a |
| 1547 | CODE_SMELL | MAJOR | extension/browser-control.js:491 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | eee6a32a-ceea-424a-bed1-a3928fc69749 |
| 1548 | CODE_SMELL | MAJOR | extension/browser-control.js:492 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 5c148881-dbf5-4927-875d-5e5746286bdf |
| 1549 | CODE_SMELL | MAJOR | extension/browser-control.js:492 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 7959c1ae-37e4-49ff-9a94-8caaf266f9ee |
| 1550 | CODE_SMELL | MAJOR | extension/browser-control.js:492 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 8032538f-1a7a-4b1a-92ad-7bd5d1878a02 |
| 1551 | CODE_SMELL | MINOR | extension/browser-control.js:492 | javascript:S7735 | Unexpected negated condition. | b0a8c79e-a85a-4ee1-89fd-22604fa38ef5 |
| 1552 | CODE_SMELL | MAJOR | extension/browser-control.js:492 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | c25f4d4e-7288-422b-8cf1-d2ed4d531631 |
| 1553 | CODE_SMELL | MINOR | scripts/smoke-windows-desktop.mjs:67 | javascript:S7780 | `String.raw` should be used to avoid escaping `\`. | eb56e0d7-6d3c-4886-92f8-a7cfb58b763e |
| 1554 | CODE_SMELL | MINOR | scripts/verify-input-queue.cjs:196 | javascript:S7780 | `String.raw` should be used to avoid escaping `\`. | 00acf828-24d6-4277-a5b7-612abf95d488 |
| 1555 | CODE_SMELL | CRITICAL | src/main/bridge.ts:10083 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 21 to the 15 allowed. | ffe3b15b-3149-40fd-94a6-884a688e0097 |
| 1556 | CODE_SMELL | CRITICAL | src/main/computer/index.ts:1093 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 42 to the 15 allowed. | bda50426-b7b6-472a-874d-96e41dc2978e |
| 1557 | CODE_SMELL | CRITICAL | src/main/computer/windows-api.ts:125 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 31 to the 15 allowed. | 34f84ba0-50e0-4d1f-a8a0-3c03d6845191 |
| 1558 | CODE_SMELL | MAJOR | src/main/computer/windows-api.ts:153 | typescript:S4624 | Refactor this code to not use nested template literals. | 263ba9eb-c837-4fef-8ba3-0914ff0518ea |
| 1559 | CODE_SMELL | MAJOR | src/main/mcp/tools-browser.ts:90 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | aea381d1-1bcf-4986-8230-38c4e4c834be |
| 1560 | CODE_SMELL | MAJOR | src/main/mcp/tools-browser.ts:91 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | f5ac28d1-718c-4c9d-aed9-d057a134d138 |
| 1561 | CODE_SMELL | MAJOR | src/main/session/input.ts:1245 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 308b7013-d1bc-45c5-bd21-fb30e37a009d |
| 1562 | CODE_SMELL | MINOR | src/main/session/input.ts:1245 | typescript:S7735 | Unexpected negated condition. | ff7613c9-f0e6-4215-8833-4055b02d3b98 |
| 1563 | CODE_SMELL | MAJOR | src/main/session/input.ts:1249 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | f02233a2-e88e-4d39-8e93-5179ff9f9b0d |
| 1564 | CODE_SMELL | CRITICAL | src/shared/chronology.ts:199 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | 2fe6030d-57be-450f-bd51-3721fe68bf54 |
| 1565 | CODE_SMELL | MINOR | extension/content.js:818 | javascript:S6594 | Use the "RegExp.exec()" method instead. | 433b75c8-66a2-4c60-b09c-6434cd4fa8d0 |
| 1566 | CODE_SMELL | MINOR | extension/content.js:818 | javascript:S6594 | Use the "RegExp.exec()" method instead. | 688b357e-ec76-4441-90fc-925316659ffe |
| 1567 | CODE_SMELL | CRITICAL | src/main/session/store.ts:746 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 29 to the 15 allowed. | ab20a1cd-1b4e-405f-a36e-f396c787b917 |
| 1568 | CODE_SMELL | MAJOR | src/main/session/store.ts:845 | typescript:S4043 | Move this array "sort" operation to a separate statement or replace it with "toSorted". | 7544fde7-936d-4b14-9aae-28af1c21ef10 |
| 1569 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:5267 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 18 to the 15 allowed. | 4f79595e-8041-4556-8b60-da01ca9ab54a |
| 1570 | CODE_SMELL | MAJOR | src/renderer/chat.ts:5277 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 422d8f23-c21c-42a7-beb1-8e06c896bba0 |
| 1571 | CODE_SMELL | MAJOR | src/renderer/chat.ts:5277 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | c2dfd87a-ee61-419e-979f-f68ba93183e7 |
| 1572 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:5348 | typescript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | df708a42-d17b-4578-a7e0-942ce0fd9293 |
| 1573 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:5367 | typescript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 1f47221b-cb6b-4279-b50d-532b11c4ec5a |
| 1574 | CODE_SMELL | MINOR | scripts/verify-input-queue.cjs:153 | javascript:S7780 | `String.raw` should be used to avoid escaping `\`. | dc57a3d8-9273-4141-ac20-e4c83454c6d6 |
| 1575 | CODE_SMELL | MAJOR | extension/content.js:2330 | javascript:S6660 | 'If' statement should not be the only statement in 'else' block | c78c86fb-c646-4ed3-95ce-6a6eabd49d67 |
| 1576 | CODE_SMELL | MINOR | extension/content.js:2579 | javascript:S7750 | Prefer `.findLast(…)` over `.filter(…).at(-1)`. | d4cf0da9-94a9-4e2e-b7d9-ccfc0fe21b22 |
| 1577 | CODE_SMELL | CRITICAL | extension/content.js:5030 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 35 to the 15 allowed. | 3565ed33-5139-472b-b18a-d73b4a783f7d |
| 1578 | CODE_SMELL | CRITICAL | extension/content.js:6348 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 163 to the 15 allowed. | 3692704f-6685-409b-b8bc-4a9a6cae6906 |
| 1579 | CODE_SMELL | MAJOR | extension/content.js:11697 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 9c84d0a0-d84e-4866-8d4e-74d8ea01b638 |
| 1580 | CODE_SMELL | CRITICAL | extension/fiber.js:1098 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 69 to the 15 allowed. | b819fe60-eadc-4cea-93e2-2d94c6d8d0a6 |
| 1581 | CODE_SMELL | MINOR | extension/fiber.js:1113 | javascript:S4138 | Expected a `for-of` loop instead of a `for` loop with this simple iteration. | fb08e2f5-f97c-4a11-97d5-f9a5c2d9710c |
| 1582 | CODE_SMELL | MINOR | extension/fiber.js:1136 | javascript:S4138 | Expected a `for-of` loop instead of a `for` loop with this simple iteration. | b3e79bd1-73ce-46cc-b9af-b7392021521d |
| 1583 | CODE_SMELL | CRITICAL | scripts/verify-history-scroll.cjs:15 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 30 to the 15 allowed. | 7fcd7012-f53b-4ccd-a093-b3be4d122e4e |
| 1584 | CODE_SMELL | MINOR | scripts/verify-input-queue.cjs:60 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | e16f95e7-ee24-4dab-9ce5-ded5f8b61f39 |
| 1585 | CODE_SMELL | MINOR | scripts/verify-input-queue.cjs:108 | javascript:S7780 | `String.raw` should be used to avoid escaping `\`. | c8249170-b913-4d81-86a5-fd83206e0ac5 |
| 1586 | CODE_SMELL | MINOR | scripts/verify-input-queue.cjs:141 | javascript:S7780 | `String.raw` should be used to avoid escaping `\`. | d5b79489-8f17-4680-974d-ff2d52034314 |
| 1587 | CODE_SMELL | MINOR | scripts/verify-input-queue.cjs:220 | javascript:S7780 | `String.raw` should be used to avoid escaping `\`. | 1b7b3b93-8692-43b1-a58e-dd67fea93143 |
| 1588 | CODE_SMELL | CRITICAL | src/main/agents.ts:3793 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 30 to the 15 allowed. | b6a537da-bd94-47ee-b5cb-f15cefe8fac6 |
| 1589 | CODE_SMELL | MINOR | src/main/bridge.ts:2723 | typescript:S7735 | Unexpected negated condition. | c3b275c9-58d3-4097-9d46-68964b0d8684 |
| 1590 | CODE_SMELL | MINOR | src/main/session/input.ts:184 | typescript:S7735 | Unexpected negated condition. | b8165a8e-35a9-4951-acdc-96af6ad8f84e |
| 1591 | CODE_SMELL | CRITICAL | src/main/session/input.ts:1702 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 29 to the 15 allowed. | ff48f688-20c8-48c9-962f-bcb7cba3094f |
| 1592 | CODE_SMELL | CRITICAL | src/shared/chronology.ts:99 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 27 to the 15 allowed. | 948183d6-2f73-41d3-a1b5-772719bc2920 |
| 1593 | CODE_SMELL | MAJOR | src/shared/chronology.ts:132 | typescript:S1854 | Remove this useless assignment to variable "turns". | bc316897-fddb-4a57-9af8-eacb359ace0b |
| 1594 | CODE_SMELL | MAJOR | src/shared/chronology.ts:139 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 8820e691-5bb9-4343-b710-9217cff04300 |
| 1595 | CODE_SMELL | CRITICAL | src/shared/chronology.ts:270 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 35 to the 15 allowed. | 556ef65d-5147-4272-b42f-7c9138916ba9 |
| 1596 | CODE_SMELL | MAJOR | src/main/bridge.ts:7692 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | f2541a1c-5964-4beb-bb09-0689049141aa |
| 1597 | CODE_SMELL | MAJOR | extension/background.js:3014 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 89ee98fc-cfd3-4907-9ca1-7e232271adcd |
| 1598 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2177 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 7c748c48-a3b7-4993-844a-5dab475d6a26 |
| 1599 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2184 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 41 to the 15 allowed. | 8c1dd202-7c65-49b6-a2d5-b49a1ed12809 |
| 1600 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2220 | javascript:S7761 | Prefer `.dataset` over `removeAttribute(…)`. | 16a29ad0-e733-4753-b1e1-536759111ae1 |
| 1601 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2224 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 1452a249-697d-4ccb-8dff-d31f7de44412 |
| 1602 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2224 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | 177d4215-2c0e-4841-9154-04321510d5c5 |
| 1603 | CODE_SMELL | MINOR | extension/content.js:867 | javascript:S6594 | Use the "RegExp.exec()" method instead. | 4e3db411-4e70-42b0-bb0a-0c4915ef923a |
| 1604 | CODE_SMELL | MAJOR | extension/content.js:970 | javascript:S107 | Function 'sendSubmittedText' has too many parameters (9). Maximum allowed is 7. | 07d82424-ff0a-42c0-aa23-662e9927a6da |
| 1605 | CODE_SMELL | MINOR | extension/content.js:12303 | javascript:S7750 | Prefer `.findLast(…)` over `.filter(…).at(-1)`. | 5677ae0c-2131-4d7c-bdc8-26e5ff3dd5c5 |
| 1606 | CODE_SMELL | MAJOR | src/main/bridge.ts:6966 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | a2706d7d-fd9a-47b0-b9dc-c0478a14227c |
| 1607 | CODE_SMELL | MAJOR | src/main/bridge.ts:7969 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 973d8db3-8c53-4ec2-aa5e-7c4da3692ffc |
| 1608 | CODE_SMELL | CRITICAL | src/main/session/input.ts:202 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 27 to the 15 allowed. | 2ecf1291-080b-4e89-a3ff-88a386ebfc5a |
| 1609 | CODE_SMELL | MINOR | src/shared/session.ts:552 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 44a5c0cd-cef8-49b3-8853-6efae9d5a9db |
| 1610 | CODE_SMELL | MAJOR | extension/background.js:3025 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | d1a5f1e7-dbf1-48db-bd9a-35802b09f531 |
| 1611 | CODE_SMELL | CRITICAL | extension/content.js:5143 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 32 to the 15 allowed. | 616bf021-7d9f-4306-8b2d-db15d7330a44 |
| 1612 | CODE_SMELL | CRITICAL | extension/content.js:6297 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 18 to the 15 allowed. | 9645a1cb-8c26-4f9e-abac-56c9128f5660 |
| 1613 | CODE_SMELL | MAJOR | extension/content.js:9848 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 38f45928-827f-4038-88ff-ac8000ca1ba3 |
| 1614 | CODE_SMELL | CRITICAL | extension/content.js:9860 | javascript:S3735 | Remove this use of the "void" operator. | c556087e-71ce-4a42-923f-aa6103a9e398 |
| 1615 | CODE_SMELL | MINOR | src/main/agents.ts:817 | typescript:S4325 | This assertion is unnecessary since it does not change the type of the expression. | c6306165-da3f-4601-b6a4-83e49ad2565e |
| 1616 | CODE_SMELL | MINOR | src/main/agents.ts:3688 | typescript:S7770 | arrow function is equivalent to `Boolean`. Use `Boolean` directly. | af5b8f33-6d3f-41b7-9273-ebc684ba995f |
| 1617 | CODE_SMELL | CRITICAL | src/main/agents.ts:4877 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | 61eb041a-651c-43bb-a9d1-7ce6a0cf0850 |
| 1618 | CODE_SMELL | MAJOR | src/main/agents.ts:4947 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 120f1226-61ac-4801-b227-5f7c8bee9ff4 |
| 1619 | CODE_SMELL | MINOR | src/main/bridge.ts:3118 | typescript:S7735 | Unexpected negated condition. | 35e36a2d-bc8a-4fee-ab47-32cd48cc36dc |
| 1620 | CODE_SMELL | MINOR | src/main/bridge.ts:3119 | typescript:S7735 | Unexpected negated condition. | 4869a3d3-9860-4467-bae7-00491ef97e03 |
| 1621 | CODE_SMELL | CRITICAL | src/main/bridge.ts:5974 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 25 to the 15 allowed. | 503d3fe3-beaa-42a7-a783-246a088dee57 |
| 1622 | CODE_SMELL | MAJOR | src/main/bridge.ts:7192 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 9957b62b-9a4a-402b-9038-c497837b0aef |
| 1623 | CODE_SMELL | MAJOR | src/main/bridge.ts:7471 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 7cbe9f78-3a80-46e2-89c9-b4abcc31630b |
| 1624 | CODE_SMELL | MAJOR | src/main/bridge.ts:8600 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | f95cb96d-a872-4819-a62e-4929fa385f7e |
| 1625 | CODE_SMELL | MINOR | src/main/mcp/instructions.ts:130 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | 6b50ffcb-f48d-4658-a8cd-e12552758373 |
| 1626 | CODE_SMELL | MAJOR | src/main/mcp/kernel.ts:555 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 2a3203f7-e9eb-47af-88d6-bcea4289e5c3 |
| 1627 | CODE_SMELL | MAJOR | src/main/mcp/kernel.ts:744 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 4905a8a0-f7e1-47b4-88b6-87d175be50de |
| 1628 | CODE_SMELL | MAJOR | src/main/mcp/kernel.ts:1117 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | cd4896e2-23f4-4308-8c79-98f8769722e6 |
| 1629 | CODE_SMELL | MINOR | src/main/mcp/tools-core.ts:149 | typescript:S3863 | '../session/correlation.js' imported multiple times. | 9cd842a2-232d-43d3-aec0-028ddd0ad39f |
| 1630 | CODE_SMELL | CRITICAL | src/main/mcp/tools-core.ts:731 | typescript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 45ebfe59-98a7-46d5-897d-5f745c9a4512 |
| 1631 | CODE_SMELL | MINOR | src/main/mcp/tools-core.ts:1318 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | 31f1e30e-5f84-4b84-b369-95f230fc2113 |
| 1632 | CODE_SMELL | MAJOR | src/main/mcp/tools-core.ts:1447 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 4e4fd548-7fd3-4967-a746-0f5d0c75eee0 |
| 1633 | CODE_SMELL | MAJOR | src/main/mcp/tools-core.ts:1596 | typescript:S4624 | Refactor this code to not use nested template literals. | 2aad17b9-7355-4c4b-aece-d3103c4d7d49 |
| 1634 | CODE_SMELL | CRITICAL | src/main/mcp/tools-core.ts:1700 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | d8b7dbe9-1a43-4e36-8a6b-7e732685f0b0 |
| 1635 | CODE_SMELL | CRITICAL | src/main/mcp/tools-desktop-windows.ts:24 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 25 to the 15 allowed. | 165a22bc-f170-44f2-97d4-bb6e0c6d76be |
| 1636 | CODE_SMELL | MINOR | src/main/session/recorder.ts:2056 | typescript:S7735 | Unexpected negated condition. | 7bed03e6-5f58-4986-baa9-51f3e0ea93a2 |
| 1637 | CODE_SMELL | MINOR | src/main/session/recorder.ts:2163 | typescript:S7735 | Unexpected negated condition. | 3ce1eb35-3b11-467e-a258-6361affed32c |
| 1638 | CODE_SMELL | CRITICAL | src/main/workspace.ts:103 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 28 to the 15 allowed. | 42e11b9b-8715-4567-af7f-d5b5a8114338 |
| 1639 | CODE_SMELL | CRITICAL | src/renderer/chat-error.ts:24 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 52 to the 15 allowed. | 20b92646-1a45-4593-a2d6-cfc15608c337 |
| 1640 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:1116 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | e2075ff9-dac3-4c44-b79a-40e491f57de9 |
| 1641 | CODE_SMELL | MINOR | src/renderer/chat.ts:1635 | typescript:S7735 | Unexpected negated condition. | 3d4d3d12-83b9-407c-acb4-883d6b1f7252 |
| 1642 | CODE_SMELL | MAJOR | src/renderer/chat.ts:1635 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 5644e7c2-ba0e-45c6-9b43-f55a7108ff7a |
| 1643 | CODE_SMELL | MINOR | src/renderer/chat.ts:1635 | typescript:S7735 | Unexpected negated condition. | 73de0f36-c7de-452e-ba54-a48419c4ecfe |
| 1644 | CODE_SMELL | MINOR | src/renderer/chat.ts:1635 | typescript:S7735 | Unexpected negated condition. | debb2734-65bd-42a3-bb31-930cadedd35e |
| 1645 | CODE_SMELL | MAJOR | src/renderer/chat.ts:1635 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | fb31a26f-4d63-4538-b2ab-9eedd8948e3b |
| 1646 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:2525 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 44 to the 15 allowed. | f07f0c28-1618-46d0-acb7-ce07284f0a5b |
| 1647 | CODE_SMELL | MAJOR | src/renderer/chat.ts:2541 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | bd6b1fc3-0470-466b-ba83-b1fb0e314151 |
| 1648 | CODE_SMELL | MAJOR | src/renderer/chat.ts:2556 | typescript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | 2712f075-f795-474f-8722-d4cc5201d4ce |
| 1649 | CODE_SMELL | MINOR | src/renderer/chat.ts:2572 | typescript:S7764 | Prefer `globalThis` over `window`. | bb37fe78-1825-42c4-be8f-4acd4663ab63 |
| 1650 | CODE_SMELL | MAJOR | src/renderer/chat.ts:6165 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 65df5711-a2f8-4428-8019-098bf1ee22fe |
| 1651 | CODE_SMELL | MAJOR | src/renderer/recovery.ts:17 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | f7e5b026-da9c-4978-8cc2-e0a81441f31d |
| 1652 | CODE_SMELL | MAJOR | src/renderer/recovery.ts:18 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | b28e478c-ac41-4976-a79b-b781ee3f98cb |
| 1653 | CODE_SMELL | MAJOR | src/renderer/recovery.ts:23 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 0f98c322-ec0d-4208-8d34-b778a09fa32e |
| 1654 | CODE_SMELL | MAJOR | src/renderer/recovery.ts:24 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 37e7c4ad-6529-4582-8c22-ea15e151ce3c |
| 1655 | CODE_SMELL | MAJOR | src/renderer/recovery.ts:25 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | ece03e38-fbee-4ffe-b767-01b9dea28bff |
| 1656 | CODE_SMELL | MAJOR | src/renderer/recovery.ts:26 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 826ccf8d-24d2-4493-9f8a-c8269eb9cb67 |
| 1657 | CODE_SMELL | MAJOR | src/renderer/recovery.ts:27 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 05aa4326-4d95-4e8b-9eb7-8d2671d9d0d0 |
| 1658 | CODE_SMELL | MAJOR | src/renderer/recovery.ts:28 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 6f26a9da-d5d0-4139-883b-0cd8bc6d75bb |
| 1659 | CODE_SMELL | MAJOR | src/renderer/recovery.ts:64 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | ad8b0d28-8433-4b0a-8c6d-1775002257c5 |
| 1660 | CODE_SMELL | MAJOR | src/renderer/recovery.ts:66 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 86ed7bc2-7efc-48a2-8291-1018bbedb9c5 |
| 1661 | CODE_SMELL | MAJOR | src/renderer/recovery.ts:67 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | d0e58eb1-7d17-4700-80f1-c19a8700e330 |
| 1662 | CODE_SMELL | MAJOR | src/renderer/recovery.ts:68 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 87bbf389-8a4c-4224-89ca-21b7f1dd3232 |
| 1663 | CODE_SMELL | MINOR | src/shared/chat-error.ts:3 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 0d69ecd6-1d8b-4031-b940-8b907054842d |
| 1664 | CODE_SMELL | MINOR | src/shared/chronology.ts:220 | typescript:S7735 | Unexpected negated condition. | 0f8a2714-a9f9-4cbf-95d2-72efbf6d4ac4 |
| 1665 | CODE_SMELL | MAJOR | extension/browser-control-page.js:128 | javascript:S4624 | Refactor this code to not use nested template literals. | 688163d9-0d8a-416f-9ef2-ddbe160a1f32 |
| 1666 | CODE_SMELL | CRITICAL | extension/browser-control-page.js:228 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 27 to the 15 allowed. | f9e56989-4e81-4a6d-986b-d01d0d521951 |
| 1667 | CODE_SMELL | MAJOR | extension/browser-control-page.js:247 | javascript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | 1a10501e-4fc7-4fe7-942c-6a455fd39ed4 |
| 1668 | CODE_SMELL | MINOR | extension/content.js:12313 | javascript:S7750 | Prefer `.findLast(…)` over `.filter(…).at(-1)`. | 580dfe4a-940c-4a69-a4dc-0e92206b023f |
| 1669 | CODE_SMELL | MINOR | src/main/bridge.ts:7328 | typescript:S7735 | Unexpected negated condition. | 5037e861-fafe-4725-aea4-08b5b8634c38 |
| 1670 | CODE_SMELL | MAJOR | src/main/session/recorder.ts:1939 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | d372608e-c1e0-48f2-a31d-126b4230416b |
| 1671 | CODE_SMELL | MINOR | src/main/session/recorder.ts:1939 | typescript:S7735 | Unexpected negated condition. | f64a461f-eef8-49fd-814e-98b3a8586b92 |
| 1672 | CODE_SMELL | MAJOR | src/main/session/store.ts:1402 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | dae5b127-c141-46d4-8877-abf2e25541c2 |
| 1673 | CODE_SMELL | MAJOR | src/main/session/store.ts:1403 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 3ed1878d-de5e-4018-8176-fdcf0a845b03 |
| 1674 | CODE_SMELL | CRITICAL | src/main/session/store.ts:2046 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 30 to the 15 allowed. | 5b2b3ba4-9f21-4512-9417-93109e49861f |
| 1675 | BUG | MAJOR | src/main/session/store.ts:2066 | typescript:S6959 | Add an initial value to this "reduce()" call. | d3599082-32a2-42b1-963c-934199d3254e |
| 1676 | CODE_SMELL | MINOR | src/renderer/pet-choreography.ts:10 | typescript:S4325 | This assertion is unnecessary since it does not change the type of the expression. | 020b42ec-1b65-4624-9ea3-a4ef09b107ab |
| 1677 | CODE_SMELL | MINOR | src/renderer/pet-choreography.ts:10 | typescript:S4325 | This assertion is unnecessary since it does not change the type of the expression. | 70096870-27a2-4ab3-af9f-96269e0a2672 |
| 1678 | CODE_SMELL | MINOR | src/renderer/pet-choreography.ts:10 | typescript:S4325 | This assertion is unnecessary since it does not change the type of the expression. | db1e1dd7-ee3b-49b9-9e34-a50bc77c75f8 |
| 1679 | CODE_SMELL | MAJOR | src/renderer/pet-choreography.ts:25 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 03d126d4-dd34-4605-a7c4-c083ac09be00 |
| 1680 | CODE_SMELL | MAJOR | src/renderer/pet-choreography.ts:25 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 6f73f082-eaf8-407b-bf05-570aa6d484a5 |
| 1681 | CODE_SMELL | MAJOR | src/renderer/pet-machine.ts:28 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 516f9ead-c698-4541-a32a-85523ef208ca |
| 1682 | CODE_SMELL | MAJOR | src/renderer/pet-machine.ts:28 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | ca2b97b2-dc4c-40a0-8f2c-dbc478946b4a |
| 1683 | CODE_SMELL | MAJOR | src/renderer/pet-machine.ts:87 | typescript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | d7050323-35d1-4810-9efb-0de61e0db79f |
| 1684 | CODE_SMELL | MAJOR | src/renderer/pet-machine.ts:93 | typescript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | 79584381-e8cf-4329-aca1-bc3c27ebfd23 |
| 1685 | CODE_SMELL | MAJOR | src/renderer/pet-machine.ts:102 | typescript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | 6b6c88ce-d97f-4b19-b6fb-1abef537e5d6 |
| 1686 | CODE_SMELL | MAJOR | src/renderer/pet-machine.ts:154 | typescript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | 2efc5974-0e6b-49a5-a4fb-e8e401bc52eb |
| 1687 | CODE_SMELL | MINOR | scripts/verify-disconnect-ui.cjs:51 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 04f4bb93-85bc-4e43-9767-d94d38c73ff9 |
| 1688 | CODE_SMELL | MAJOR | src/main/bridge.ts:3801 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 4c775fa9-cb9a-4a80-83e7-61fa44a40e9e |
| 1689 | CODE_SMELL | CRITICAL | src/main/bridge.ts:6689 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | 0dee3f14-806b-4dfa-ac24-638dfe66c8e8 |
| 1690 | CODE_SMELL | MAJOR | src/main/bridge.ts:6815 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | e097c2db-1f9a-4169-9921-d6947d1745e2 |
| 1691 | CODE_SMELL | CRITICAL | src/main/connection.ts:589 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | 8064e081-8f09-4510-8de1-c6f0ba0e498f |
| 1692 | CODE_SMELL | MAJOR | src/main/goal.ts:1502 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 2b54f091-3c6a-442a-a655-8c5cdd454a7d |
| 1693 | CODE_SMELL | MAJOR | src/main/goal.ts:1527 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 2d389df8-0c33-4b6d-93d7-5a0edf653cc8 |
| 1694 | CODE_SMELL | MAJOR | src/main/session/input.ts:504 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | f64c6960-b71e-42d7-a609-cc3c62061d14 |
| 1695 | CODE_SMELL | MAJOR | src/renderer/main.ts:1394 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | b396c8eb-d6ce-4f49-a29b-1de754a799c8 |
| 1696 | CODE_SMELL | MINOR | src/renderer/main.ts:1916 | typescript:S7735 | Unexpected negated condition. | 7436ba16-2742-4d7c-a4a2-836cbd34a8b1 |
| 1697 | CODE_SMELL | MAJOR | src/renderer/main.ts:1916 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | fd4b4db0-f546-425f-b1b4-ddc90cae816f |
| 1698 | CODE_SMELL | MAJOR | src/renderer/main.ts:1918 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 565bec3e-9f53-4330-99de-0fe05d9be542 |
| 1699 | CODE_SMELL | MAJOR | src/renderer/main.ts:1920 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | c2f1f173-0117-481b-9111-b26db373b868 |
| 1700 | CODE_SMELL | MAJOR | src/renderer/main.ts:1930 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | bbafd1a5-e094-4259-aec1-be27f73c621c |
| 1701 | CODE_SMELL | MINOR | src/renderer/main.ts:1933 | typescript:S7735 | Unexpected negated condition. | 846a9601-ed63-407f-a808-2d7510c310c2 |
| 1702 | CODE_SMELL | MAJOR | src/renderer/main.ts:1933 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | debebaef-3483-45dc-b5be-40540cfba301 |
| 1703 | CODE_SMELL | MAJOR | src/renderer/recovery.ts:63 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 44e8a625-90d1-49c4-83f4-104144f9dd29 |
| 1704 | CODE_SMELL | CRITICAL | extension/background.js:2455 | javascript:S3735 | Remove this use of the "void" operator. | 39c14b7c-7ee3-4127-b09b-e0d2118aab31 |
| 1705 | CODE_SMELL | CRITICAL | extension/background.js:2488 | javascript:S3735 | Remove this use of the "void" operator. | e818e374-c195-4ed3-8d1f-e94527d494e8 |
| 1706 | CODE_SMELL | CRITICAL | extension/background.js:3647 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 30 to the 15 allowed. | 762b8839-f133-4edf-8a3f-61ec0ee911fc |
| 1707 | CODE_SMELL | CRITICAL | extension/background.js:4320 | javascript:S3735 | Remove this use of the "void" operator. | 44fb46a6-78e5-440e-b6d4-b3a540ee3bbf |
| 1708 | CODE_SMELL | CRITICAL | extension/background.js:4745 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 36 to the 15 allowed. | a9ca4876-59df-4e5e-b571-02984295057c |
| 1709 | CODE_SMELL | MAJOR | scripts/verify-active-tabs.mjs:62 | javascript:S1788 | Default parameters should be last. | dc54f77d-dd29-47e1-844f-07a9469ab561 |
| 1710 | CODE_SMELL | MINOR | scripts/verify-appearance.cjs:57 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 75a5af00-0e16-4a20-a176-b3446eb1feb6 |
| 1711 | CODE_SMELL | CRITICAL | scripts/verify-appearance.cjs:159 | javascript:S4123 | Unexpected `await` of a non-Promise (non-"Thenable") value. | 9b8a002f-818b-412b-9859-6bf3899cab2c |
| 1712 | CODE_SMELL | MINOR | scripts/verify-connection-compact.cjs:14 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 024c4a55-9e35-4dad-8f05-8b3ec3a29b94 |
| 1713 | CODE_SMELL | MINOR | scripts/verify-connection-compact.cjs:14 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 96b1e1a1-3677-415a-9046-6731a95ddf28 |
| 1714 | CODE_SMELL | MINOR | scripts/verify-connection-compact.cjs:16 | javascript:S6594 | Use the "RegExp.exec()" method instead. | a45e390d-4e6c-43fd-9b8f-9a60e9f62efc |
| 1715 | CODE_SMELL | MINOR | scripts/verify-connection-layer.cjs:14 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 0a3b2007-9cfe-4d90-b2a7-0d78e2989d1f |
| 1716 | CODE_SMELL | MINOR | scripts/verify-connection-layer.cjs:14 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 67301783-4e23-4dd6-bfdc-8c82eef5f0d1 |
| 1717 | CODE_SMELL | MINOR | scripts/verify-connection-layer.cjs:16 | javascript:S6594 | Use the "RegExp.exec()" method instead. | e548b530-aba9-45d1-833d-3db22a7ada47 |
| 1718 | CODE_SMELL | MINOR | scripts/verify-pr-workspace.cjs:101 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | a65536db-6463-4862-9b1c-e7f0efc544df |
| 1719 | CODE_SMELL | MAJOR | scripts/verify-pr-workspace.cjs:117 | javascript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | 90d6d8f7-4a6a-4890-ada0-6cf026c6af3f |
| 1720 | CODE_SMELL | MINOR | scripts/verify-pr-workspace.cjs:247 | javascript:S7780 | `String.raw` should be used to avoid escaping `\`. | bdb69f74-8c67-44eb-9166-c49b573743d9 |
| 1721 | CODE_SMELL | MINOR | scripts/verify-pr-workspace.cjs:257 | javascript:S7780 | `String.raw` should be used to avoid escaping `\`. | 787f317e-e9f9-45d0-be53-10a9e94128d1 |
| 1722 | CODE_SMELL | MINOR | scripts/verify-workspace-terminal.cjs:68 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 1f832d07-e75c-40fc-a1e1-6697f30fa3a7 |
| 1723 | CODE_SMELL | MINOR | scripts/verify-workspace-terminal.cjs:87 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 014e922e-b8be-41c2-af92-ae209d521bad |
| 1724 | CODE_SMELL | MAJOR | scripts/verify-workspace-terminal.cjs:124 | javascript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | f448ea84-d31e-4dc4-9573-3028a7c36322 |
| 1725 | CODE_SMELL | MINOR | scripts/verify-workspace-terminal.cjs:206 | javascript:S7780 | `String.raw` should be used to avoid escaping `\`. | 9ddf2980-e094-45d9-b7e8-7bacddb8d3ab |
| 1726 | CODE_SMELL | MINOR | scripts/verify-workspace-terminal.cjs:214 | javascript:S7780 | `String.raw` should be used to avoid escaping `\`. | 6764fd20-3dbd-433d-ac20-252dc5904311 |
| 1727 | CODE_SMELL | MINOR | scripts/verify-workspace-terminal.cjs:220 | javascript:S7780 | `String.raw` should be used to avoid escaping `\`. | 90808f77-ee15-4d1e-8cde-e59eaccb3a44 |
| 1728 | CODE_SMELL | MINOR | src/main/bridge.ts:53 | typescript:S3863 | '../shared/types.js' imported multiple times. | 624a04b1-3a4d-4e12-a1a5-33122daac8b8 |
| 1729 | CODE_SMELL | MAJOR | src/main/bridge.ts:839 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 0760e8e9-a688-4e9a-99d4-97a4d2dfc45d |
| 1730 | CODE_SMELL | MAJOR | src/main/bridge.ts:871 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 2ccf4623-5576-48ec-b5fa-5e1431f54686 |
| 1731 | CODE_SMELL | MAJOR | src/main/bridge.ts:6699 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 576e4ad9-dca2-4bbc-a0c1-979ee75406be |
| 1732 | CODE_SMELL | CRITICAL | src/main/codex/apply-patch/file-update.ts:74 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | b40c7cd5-0ac0-4876-8435-3aff87ee4b1c |
| 1733 | CODE_SMELL | CRITICAL | src/main/codex/unified-exec.ts:786 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 23 to the 15 allowed. | 36bc04b5-95d3-42ea-bb30-b1bb7cde925c |
| 1734 | CODE_SMELL | CRITICAL | src/main/codex/unified-exec.ts:903 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 36 to the 15 allowed. | 405ec595-d1bb-4d8a-9dd6-e0d8fc574054 |
| 1735 | CODE_SMELL | CRITICAL | src/main/exec-hints.ts:818 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | ef74e0ec-18b5-42b9-88b6-bc3ce8fc5392 |
| 1736 | CODE_SMELL | MINOR | src/main/exec-hints.ts:835 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 515e7905-9040-42f7-b26f-5faa5d2787e7 |
| 1737 | CODE_SMELL | MINOR | src/main/exec-hints.ts:861 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | 461e70bb-52ad-4346-be2c-4e5a870964af |
| 1738 | CODE_SMELL | MINOR | src/main/exec-hints.ts:861 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | b87b3fc7-ce8a-481f-b975-ed1e67e11d63 |
| 1739 | CODE_SMELL | MINOR | src/main/exec-hints.ts:864 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | fe842b35-f2b1-4371-bf69-630617a09627 |
| 1740 | CODE_SMELL | MINOR | src/main/exec-hints.ts:876 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | fbe325b6-036c-4ec7-97a1-575fc9242ce6 |
| 1741 | CODE_SMELL | MINOR | src/main/exec-hints.ts:1518 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | b4794055-6144-48e8-b8ba-16edd1d13d27 |
| 1742 | CODE_SMELL | MINOR | src/main/exec-hints.ts:1528 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | 1b3f8207-d672-47e5-a7a7-a72f2d9b5cb4 |
| 1743 | CODE_SMELL | MINOR | src/main/ipc.ts:844 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | 5a811fdf-dfdf-4a21-8706-4d18adf4212d |
| 1744 | CODE_SMELL | MAJOR | src/main/ipc.ts:846 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 99af7d8c-da0a-467f-91c7-78dc5905a68e |
| 1745 | CODE_SMELL | MINOR | src/main/ipc.ts:923 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | bbf6d4a5-718e-41f9-9ae3-b970cad167be |
| 1746 | CODE_SMELL | MAJOR | src/main/ipc.ts:1654 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 09ebcd79-72f5-4ac1-9c84-471efd4b2882 |
| 1747 | CODE_SMELL | CRITICAL | src/main/mcp/tools-core.ts:944 | typescript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | c3487335-b566-4e10-a924-e404de125ab8 |
| 1748 | CODE_SMELL | CRITICAL | src/main/mcp/tools-core.ts:946 | typescript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 6f114bbc-0152-413b-ae37-0e5b2f6537fa |
| 1749 | CODE_SMELL | CRITICAL | src/main/project-file-watcher.ts:37 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 28 to the 15 allowed. | d922204a-db28-4bcd-9549-55cb5eb25b0a |
| 1750 | CODE_SMELL | MAJOR | src/main/project-files.ts:211 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | dd8fa3ab-d0c1-41da-83e7-513f8c1b6cb4 |
| 1751 | CODE_SMELL | CRITICAL | src/main/project-files.ts:246 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 49 to the 15 allowed. | ca5de14a-65e5-41b2-80a4-902b0a6299ba |
| 1752 | CODE_SMELL | CRITICAL | src/main/session/input-history.ts:11 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 22 to the 15 allowed. | ca0565ce-79a5-444e-86e3-c2fea4dcb942 |
| 1753 | CODE_SMELL | MINOR | src/main/session/input.ts:786 | typescript:S7735 | Unexpected negated condition. | d2f48d7b-0482-4c2e-ab50-28237dd514e0 |
| 1754 | CODE_SMELL | MINOR | src/main/session/input.ts:1402 | typescript:S4325 | This assertion is unnecessary since it does not change the type of the expression. | 6175c8b8-6d90-487f-bf81-b4084f10b6c6 |
| 1755 | CODE_SMELL | CRITICAL | src/main/session/input.ts:1444 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 31 to the 15 allowed. | d4d69208-2810-4e06-a679-9565af250bd9 |
| 1756 | CODE_SMELL | MAJOR | src/main/session/prompt.ts:19 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 483e2b5f-73a1-4809-98ff-907f26572338 |
| 1757 | CODE_SMELL | MINOR | src/main/session/skill-prompt.ts:23 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 9d0e9178-8072-4b86-aae4-b6a53a509412 |
| 1758 | CODE_SMELL | CRITICAL | src/main/session/store.ts:2015 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 48 to the 15 allowed. | 2afc8346-b196-43e6-a047-c60914fe73fe |
| 1759 | CODE_SMELL | MAJOR | src/main/session/summarize.ts:233 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | b0d21a1e-0318-4548-a33c-84ca909d1a8b |
| 1760 | CODE_SMELL | CRITICAL | src/main/session/summarize.ts:246 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 160 to the 15 allowed. | c52c98e2-cddb-404d-87b8-237e2e94abe3 |
| 1761 | CODE_SMELL | MAJOR | src/main/session/summarize.ts:368 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | fa8f0143-7efc-4c63-aff9-9eddc532045f |
| 1762 | CODE_SMELL | MINOR | src/main/skill-library.ts:168 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | e4b7161a-cfd0-4f55-91e5-b910cb88584f |
| 1763 | CODE_SMELL | MAJOR | src/main/skill-library.ts:187 | typescript:S4043 | Move this array "reverse" operation to a separate statement or replace it with "toReversed". | 7cb1f64d-6894-4b9a-9bef-c075e30911de |
| 1764 | CODE_SMELL | MINOR | src/main/skill-library.ts:412 | typescript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | 6800b5b6-138a-434c-892b-dce0fab9e765 |
| 1765 | CODE_SMELL | MINOR | src/main/skill-library.ts:529 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | a2a5162f-45be-4a1f-aba7-f15eaed0a029 |
| 1766 | CODE_SMELL | MINOR | src/main/skill-library.ts:529 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | a3c49b04-e31f-472e-a58d-4580237f4d46 |
| 1767 | CODE_SMELL | MINOR | src/main/skill-metadata.ts:42 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 57f6ab1a-6016-4a3e-b16b-dcc51b240d27 |
| 1768 | CODE_SMELL | MAJOR | src/main/skill-package.ts:105 | typescript:S4043 | Move this array "reverse" operation to a separate statement or replace it with "toReversed". | cc13eaa9-a938-4133-b406-79b2541f3e46 |
| 1769 | CODE_SMELL | MAJOR | src/main/skill-package.ts:111 | typescript:S4043 | Move this array "reverse" operation to a separate statement or replace it with "toReversed". | f96b7af1-97ab-4432-98d4-7dc925d2703a |
| 1770 | CODE_SMELL | MAJOR | src/main/skills.ts:712 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 9368e346-7410-482a-a7f2-073db5fe536e |
| 1771 | CODE_SMELL | MINOR | src/main/workspace-terminal-ipc.ts:12 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | 0d3bdcc3-7353-4bad-a090-cdf7e6f08176 |
| 1772 | CODE_SMELL | MINOR | src/main/workspace-terminal-ipc.ts:13 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | c988bc10-4c60-4f43-ac0b-7a1c3c7b1271 |
| 1773 | CODE_SMELL | MINOR | src/main/workspace-terminal-ipc.ts:14 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | 7de30e37-9e6b-42f2-8ba4-3132eb6ad6eb |
| 1774 | CODE_SMELL | MINOR | src/main/workspace-terminal-ipc.ts:15 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | bc568915-31ed-4fc4-80bb-383e10d9fe2d |
| 1775 | CODE_SMELL | MAJOR | src/main/workspace-terminal-ipc.ts:31 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 91a13ec0-2220-4ffe-b874-dafb8e7dcf31 |
| 1776 | CODE_SMELL | MAJOR | src/main/workspace-terminal-ipc.ts:32 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 6748ee42-a606-4870-9a6f-daad0e88a723 |
| 1777 | CODE_SMELL | MAJOR | src/main/workspace-terminal-ipc.ts:33 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | f2ea5d26-e5c5-480d-9445-c296318bea4e |
| 1778 | CODE_SMELL | MAJOR | src/main/workspace-terminal.ts:11 | typescript:S2933 | Member 'entries' is never reassigned; mark it as `readonly`. | 45e1c68e-47c7-4d90-a28f-ad00f62faa62 |
| 1779 | CODE_SMELL | MAJOR | src/main/workspace-terminal.ts:12 | typescript:S2933 | Member 'pending' is never reassigned; mark it as `readonly`. | 4998a52a-65a2-4dee-be50-6d7c730a8852 |
| 1780 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:1234 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 33 to the 15 allowed. | b88ada2e-1a0d-4e21-9a49-5d45177c1d90 |
| 1781 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:1364 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | 7c4c0f43-b1f4-4afe-84ef-d2b3ca2d00ad |
| 1782 | CODE_SMELL | MAJOR | src/renderer/chat.ts:1675 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 576862fa-798f-4af0-a5c4-638fcccd1a8a |
| 1783 | CODE_SMELL | MINOR | src/renderer/chat.ts:5208 | typescript:S7735 | Unexpected negated condition. | aa94d542-b7a7-4076-a88e-e766abd4a95e |
| 1784 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:96 | typescript:S7764 | Prefer `globalThis` over `window`. | ad3b8f5d-0e56-497e-a896-cf2c3e3c4001 |
| 1785 | CODE_SMELL | MAJOR | src/renderer/file-panel.ts:185 | typescript:S4144 | Update this function so that its implementation is not identical to the one on line 139. | 8887f984-a7e4-4f87-8f3a-a0d76f16e75a |
| 1786 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:326 | typescript:S7764 | Prefer `globalThis` over `window`. | e4b24e42-b9bc-4054-ba18-d948c2722a95 |
| 1787 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:350 | typescript:S7764 | Prefer `globalThis` over `window`. | e0a954c8-2f45-4fc3-89fd-2bac39becff1 |
| 1788 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:357 | typescript:S7764 | Prefer `globalThis` over `window`. | 735ebf7d-2d55-41f2-befd-b72de7484d13 |
| 1789 | CODE_SMELL | MAJOR | src/renderer/file-panel.ts:424 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 050fd9d8-76e1-4eb2-b51e-6f7f0f463ca5 |
| 1790 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:554 | typescript:S7764 | Prefer `globalThis` over `window`. | 70d097f2-8440-4d1a-9d9a-2e3b4a3af2df |
| 1791 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:595 | typescript:S7764 | Prefer `globalThis` over `window`. | 83135b60-7e3e-49cf-8b53-481187ecf117 |
| 1792 | CODE_SMELL | CRITICAL | src/renderer/file-panel.ts:731 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | cf456258-a2b9-4557-903b-529d7401cbad |
| 1793 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:791 | typescript:S7764 | Prefer `globalThis` over `window`. | e839dc3b-893a-4a45-b354-3c488edf403c |
| 1794 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:796 | typescript:S7764 | Prefer `globalThis` over `window`. | 1f01c5a3-063d-40b9-a654-fdc1d227543b |
| 1795 | CODE_SMELL | MAJOR | src/renderer/file-panel.ts:811 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | a647d58e-e7c5-4430-9012-4d2e248552bf |
| 1796 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:816 | typescript:S7764 | Prefer `globalThis` over `window`. | c093d710-85c7-41db-9e0a-81efeeed8d0a |
| 1797 | CODE_SMELL | CRITICAL | src/renderer/file-panel.ts:940 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 18 to the 15 allowed. | 6be0d35b-695f-4b27-a73a-c87be03d27fa |
| 1798 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:1416 | typescript:S7764 | Prefer `globalThis` over `window`. | 587ad9a6-f82c-4d1d-b1fd-bd0e3e18138e |
| 1799 | CODE_SMELL | MAJOR | src/renderer/file-panel.ts:1421 | typescript:S7721 | Move function 'firstChildWithin' to the outer scope. | cc000524-1dd2-4adf-b69d-bc6630404ef9 |
| 1800 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:1433 | typescript:S7764 | Prefer `globalThis` over `window`. | 3aa1e254-d422-438a-9867-ef9d45653bbc |
| 1801 | CODE_SMELL | MAJOR | src/renderer/file-panel.ts:1451 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 8669c681-b83b-4c00-b51c-b81acb04580a |
| 1802 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:1454 | typescript:S7764 | Prefer `globalThis` over `window`. | b115845e-acc4-451c-a1d7-ce798587dd39 |
| 1803 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:1477 | typescript:S7764 | Prefer `globalThis` over `window`. | f246ee8e-f2ba-4650-ae2b-2ec11af0e5eb |
| 1804 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:1500 | typescript:S7764 | Prefer `globalThis` over `window`. | 27bdbe4e-7174-43e6-9873-d4ccfbb101ec |
| 1805 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:1528 | typescript:S7764 | Prefer `globalThis` over `window`. | 8005a2e8-5386-4668-a674-4d608f235d34 |
| 1806 | CODE_SMELL | MINOR | src/renderer/file-panel.ts:1555 | typescript:S7764 | Prefer `globalThis` over `window`. | 1e20059f-9718-46a0-805a-d1e2dd595d5a |
| 1807 | CODE_SMELL | MINOR | src/renderer/file-pdf-viewer.ts:25 | typescript:S7758 | Prefer `String#codePointAt()` over `String#charCodeAt()`. | db38091d-c7f2-4f7d-9afb-66aca4375e28 |
| 1808 | CODE_SMELL | CRITICAL | src/renderer/file-pdf-viewer.ts:101 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | d83f6fad-c771-4c2e-990f-ca0ab50a008c |
| 1809 | CODE_SMELL | MINOR | src/renderer/file-pdf-viewer.ts:214 | typescript:S7764 | Prefer `globalThis` over `window`. | fa2bc1c4-6c41-4e53-98cb-780904286e13 |
| 1810 | CODE_SMELL | MINOR | src/renderer/file-pdf-viewer.ts:215 | typescript:S7764 | Prefer `globalThis` over `window`. | f4732138-0bc6-4067-a361-c11d7b7168cf |
| 1811 | CODE_SMELL | MINOR | src/renderer/file-pdf-viewer.ts:229 | typescript:S7764 | Prefer `globalThis` over `window`. | 5b313d54-0b3b-47a8-9163-8cb617f5b849 |
| 1812 | CODE_SMELL | MINOR | src/renderer/i18n.ts:65 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | a68a086e-12cc-4b37-9076-feb9258e1102 |
| 1813 | CODE_SMELL | MAJOR | src/renderer/index.html:84 | Web:S6819 | Use &lt;output&gt; instead of the status role to ensure accessibility across all devices. | d1ff3211-d72e-46d9-abd3-b56fadc7e3f3 |
| 1814 | CODE_SMELL | MAJOR | src/renderer/index.html:92 | Web:S6819 | Use &lt;output&gt; instead of the status role to ensure accessibility across all devices. | e7b5ada7-8108-4521-bdfc-f0f13edb96a8 |
| 1815 | CODE_SMELL | MAJOR | src/renderer/index.html:116 | Web:S6819 | Use &lt;dialog&gt; instead of the dialog role to ensure accessibility across all devices. | f02f75f5-3f8b-48fe-849a-b267faf53218 |
| 1816 | CODE_SMELL | MAJOR | src/renderer/main.ts:1299 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 5271c3bd-f4f6-4b91-aab5-8ed728ceef15 |
| 1817 | CODE_SMELL | MAJOR | src/renderer/main.ts:1299 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | b6135f24-5cfd-4c5d-9e23-e34a8ccf3527 |
| 1818 | CODE_SMELL | MAJOR | src/renderer/main.ts:1299 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | f7b0ae83-9615-4c24-9e46-b17e8c7bbc88 |
| 1819 | CODE_SMELL | MAJOR | src/renderer/main.ts:1925 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | a3f67726-cfda-4712-9e17-ac71b3daaf51 |
| 1820 | CODE_SMELL | MAJOR | src/renderer/recovery.ts:19 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | a22df253-376a-4ae4-9754-87e9bf700e93 |
| 1821 | CODE_SMELL | MAJOR | src/renderer/recovery.ts:19 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | c4407fed-bcd9-4b31-8c71-c41cc7be8c7d |
| 1822 | CODE_SMELL | MAJOR | src/renderer/recovery.ts:65 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 0d394b22-c084-4bcc-9f2e-383f0278c7aa |
| 1823 | CODE_SMELL | MAJOR | src/renderer/skills.ts:42 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 195afc26-c0a7-4be4-b9f7-d2304143b2d3 |
| 1824 | CODE_SMELL | MAJOR | src/renderer/skills.ts:42 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 1efa76d3-b874-4251-ab99-1a8050547fc3 |
| 1825 | CODE_SMELL | MAJOR | src/renderer/skills.ts:87 | typescript:S4624 | Refactor this code to not use nested template literals. | ffe140f8-a4a8-4d82-af6d-496649571072 |
| 1826 | CODE_SMELL | MAJOR | src/renderer/skills.ts:129 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 41854f3d-20c8-4ab3-8431-24cf0f33ab64 |
| 1827 | CODE_SMELL | MINOR | src/renderer/skills.ts:193 | typescript:S7735 | Unexpected negated condition. | 29422182-edaa-4b51-b2a8-0c4d6fd2b409 |
| 1828 | CODE_SMELL | MINOR | src/renderer/skills.ts:198 | typescript:S7718 | The catch parameter `failure` should be named `error_`. | 91bf4955-6ade-4219-be40-6396a2750940 |
| 1829 | CODE_SMELL | MAJOR | src/renderer/styles.css:525 | css:S4666 | Unexpected duplicate selector ".sidebar .new-chat", first used at line 507 | 79e2020c-5cab-44c6-87fb-61986beb3557 |
| 1830 | CODE_SMELL | MAJOR | src/renderer/styles.css:701 | css:S4666 | Unexpected duplicate selector ".sidebar-connection-dot", first used at line 686 | 155d0c5e-8c02-4723-9ae9-2612c66c22fb |
| 1831 | CODE_SMELL | MAJOR | src/renderer/styles.css:3522 | css:S4666 | Unexpected duplicate selector ".settings-heading h1", first used at line 2384 | c826d393-7eb2-4da8-872f-5b0a91312d81 |
| 1832 | CODE_SMELL | MAJOR | src/renderer/styles.css:3523 | css:S4666 | Unexpected duplicate selector ".settings-heading p", first used at line 2385 | 69dc3f5f-3d06-4cc4-aab1-069762be8bf6 |
| 1833 | CODE_SMELL | MAJOR | src/renderer/styles.css:3550 | css:S4666 | Unexpected duplicate selector ".sidebar-sessions h2", first used at line 653 | 4d5c64af-8f3d-427e-8a1a-fd72f08bb84d |
| 1834 | CODE_SMELL | MINOR | src/renderer/workspace-terminal.ts:59 | typescript:S7764 | Prefer `globalThis` over `window`. | a60ee4fe-ff02-4a5b-9ef1-f061d9add7f5 |
| 1835 | CODE_SMELL | MINOR | src/renderer/workspace-terminal.ts:118 | typescript:S7764 | Prefer `globalThis` over `window`. | a89ced65-6732-40f3-b710-4bef4c357246 |
| 1836 | CODE_SMELL | MINOR | src/renderer/workspace-terminal.ts:126 | typescript:S7764 | Prefer `globalThis` over `window`. | 7daadc96-ac1d-4525-9ec8-0d4076b27d2a |
| 1837 | CODE_SMELL | MINOR | src/renderer/workspace-terminal.ts:132 | typescript:S7764 | Prefer `globalThis` over `window`. | 62086cfe-ef77-454e-9241-55a68324f6d8 |
| 1838 | CODE_SMELL | MINOR | src/renderer/workspace-terminal.ts:133 | typescript:S7735 | Unexpected negated condition. | b4a13325-d94a-4e07-9f8c-e6109bcea259 |
| 1839 | CODE_SMELL | MINOR | src/renderer/workspace-terminal.ts:139 | typescript:S7764 | Prefer `globalThis` over `window`. | 8dd48439-bbb3-4cd7-94d1-953db6880836 |
| 1840 | CODE_SMELL | MINOR | src/renderer/workspace-terminal.ts:141 | typescript:S7764 | Prefer `globalThis` over `window`. | c7434b6b-72fa-482f-9539-a9cff14b3c58 |
| 1841 | CODE_SMELL | MINOR | src/shared/appearance.ts:43 | typescript:S7773 | Prefer `Number.parseInt` over `parseInt`. | 368bae62-6579-4a39-830f-029569952584 |
| 1842 | CODE_SMELL | MAJOR | extension/browser-control-page.js:190 | javascript:S4624 | Refactor this code to not use nested template literals. | 6429cd88-d283-4ead-908f-106e38e0b60b |
| 1843 | CODE_SMELL | CRITICAL | extension/browser-control.js:339 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 43 to the 15 allowed. | 88fdb4a6-654a-4394-9c8c-f7b86d443a8e |
| 1844 | CODE_SMELL | CRITICAL | extension/browser-control.js:410 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 27 to the 15 allowed. | afdbd098-8424-476b-b7cc-00a04c41668c |
| 1845 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2617 | javascript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | 5ec6f1ce-acfa-49a2-8b33-cbc466b9d30a |
| 1846 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2843 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 8761dc4e-87ba-4263-bb58-160aa10fe49f |
| 1847 | CODE_SMELL | CRITICAL | extension/content.js:13264 | javascript:S3735 | Remove this use of the "void" operator. | efed6a19-8168-45c8-b5c7-28eab86a82d7 |
| 1848 | CODE_SMELL | CRITICAL | scripts/verify-browser-control-entry.mjs:31 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 22 to the 15 allowed. | df9740f6-e5ab-4d6d-a7dc-5ac1e4e2329e |
| 1849 | CODE_SMELL | MAJOR | scripts/verify-browser-control.mjs:67 | javascript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | a5dcf1b4-b816-4493-a72d-8a1a08ea79f0 |
| 1850 | CODE_SMELL | MINOR | src/main/mcp/tools-browser.ts:17 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | 97f7b6eb-aebd-4280-a7f9-6ddcf8a32c37 |
| 1851 | CODE_SMELL | MAJOR | src/main/session/input.ts:932 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | e2980516-580f-4d24-ad38-8050238a664b |
| 1852 | CODE_SMELL | MAJOR | src/main/session/input.ts:935 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 1799d0b6-7eee-4e10-ac91-f0a8abb880c6 |
| 1853 | CODE_SMELL | CRITICAL | src/main/session/store.ts:3569 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 43 to the 15 allowed. | 897a5a59-bd15-4707-8543-9ecdddd45df1 |
| 1854 | CODE_SMELL | MINOR | src/renderer/chat.ts:1665 | typescript:S4325 | This assertion is unnecessary since it does not change the type of the expression. | cf4ab701-f37d-444e-9bfa-0d5681d50567 |
| 1855 | CODE_SMELL | MINOR | src/renderer/image-storage.ts:51 | typescript:S7764 | Prefer `globalThis` over `window`. | a7675d4f-cb49-44bc-80ea-1aeead23cb35 |
| 1856 | CODE_SMELL | MINOR | src/renderer/image-storage.ts:65 | typescript:S7764 | Prefer `globalThis` over `window`. | 885cafeb-d7ed-4ecd-8e59-ebe9bc30b346 |
| 1857 | CODE_SMELL | CRITICAL | extension/background.js:1138 | javascript:S3735 | Remove this use of the "void" operator. | 534abac0-5385-4bd1-89e9-8ccb51da47ae |
| 1858 | CODE_SMELL | CRITICAL | extension/background.js:2452 | javascript:S3735 | Remove this use of the "void" operator. | 8c7713cc-1910-4252-ad4e-fd1753ec332a |
| 1859 | CODE_SMELL | CRITICAL | extension/background.js:2456 | javascript:S3735 | Remove this use of the "void" operator. | dc945b32-e5b6-45f0-ab49-ac3d41aae616 |
| 1860 | CODE_SMELL | CRITICAL | extension/background.js:2478 | javascript:S3735 | Remove this use of the "void" operator. | 66b47a1e-d52e-4011-83e0-67688f19dbfa |
| 1861 | CODE_SMELL | CRITICAL | extension/background.js:2480 | javascript:S3735 | Remove this use of the "void" operator. | 13cd54b2-e23b-4cb6-bffa-cca7d2712a14 |
| 1862 | CODE_SMELL | CRITICAL | extension/background.js:2481 | javascript:S3735 | Remove this use of the "void" operator. | e568274f-814f-44eb-81a4-25d4b3b0bb8c |
| 1863 | CODE_SMELL | CRITICAL | extension/background.js:2834 | javascript:S3735 | Remove this use of the "void" operator. | 96a3d9a3-cf36-4c6c-8b41-11a517b39167 |
| 1864 | CODE_SMELL | MINOR | extension/browser-control-page.js:11 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 32a3b397-98b0-4769-91e6-9c0d29b97d8d |
| 1865 | CODE_SMELL | MAJOR | extension/browser-control-page.js:46 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | 1afa3e5d-065b-45e2-942b-3f60837dcee1 |
| 1866 | CODE_SMELL | MINOR | extension/browser-control-page.js:240 | javascript:S6653 | Use 'Object.hasOwn()' instead of 'Object.prototype.hasOwnProperty.call()'. | 8a33ea43-6a74-4551-85cc-f050cce70e81 |
| 1867 | CODE_SMELL | MAJOR | extension/browser-control-page.js:256 | javascript:S3800 | Refactor this function to always return the same type. | bcd94b0c-a023-4d96-94ab-85e0ef55829e |
| 1868 | CODE_SMELL | MAJOR | extension/browser-control.js:22 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 86da3ef0-739b-4a59-ba4f-be4a03719030 |
| 1869 | CODE_SMELL | MAJOR | extension/browser-control.js:66 | javascript:S1788 | Default parameters should be last. | 27429fc9-5812-4fa7-a018-1426db39a5a6 |
| 1870 | CODE_SMELL | CRITICAL | extension/browser-control.js:81 | javascript:S3735 | Remove this use of the "void" operator. | 6fdaf018-4919-4759-84a7-caead8a85257 |
| 1871 | CODE_SMELL | CRITICAL | extension/browser-control.js:81 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | df6d893b-ffae-43a3-b428-9314bde2adcc |
| 1872 | CODE_SMELL | CRITICAL | extension/browser-control.js:82 | javascript:S3735 | Remove this use of the "void" operator. | 49afcd39-7842-45e2-b180-3febd95bd7fe |
| 1873 | CODE_SMELL | CRITICAL | extension/browser-control.js:82 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 49e2ddc5-7247-4d44-8e28-78716448c523 |
| 1874 | CODE_SMELL | CRITICAL | extension/browser-control.js:83 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 0777e17a-9f18-4609-aa97-52fcc850fbb9 |
| 1875 | CODE_SMELL | MAJOR | extension/browser-control.js:191 | javascript:S1788 | Default parameters should be last. | c71019b8-8c3c-41e1-aa9e-682ff8942b8e |
| 1876 | CODE_SMELL | CRITICAL | extension/browser-control.js:275 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 28 to the 15 allowed. | 868a3fca-93ba-4277-a6dc-d789f4d6e318 |
| 1877 | CODE_SMELL | MAJOR | extension/browser-control.js:335 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 9eadc603-7750-4b7b-ab70-0f62c8fe822b |
| 1878 | CODE_SMELL | MINOR | extension/browser-control.js:336 | javascript:S7758 | Prefer `String#codePointAt()` over `String#charCodeAt()`. | db4b6c61-cd46-4bb2-a0d9-218cc090770a |
| 1879 | CODE_SMELL | MINOR | extension/browser-control.js:351 | javascript:S1481 | Remove the declaration of the unused '_text' variable. | 3e229d24-7d82-47de-916c-04b1a036f2fe |
| 1880 | CODE_SMELL | MINOR | extension/browser-control.js:423 | javascript:S1481 | Remove the declaration of the unused '_native' variable. | 52e080dc-d819-40ec-9df0-bea98595ff9b |
| 1881 | CODE_SMELL | MINOR | extension/browser-control.js:423 | javascript:S1481 | Remove the declaration of the unused '_session' variable. | 5f9c6f58-6542-4eef-a548-b2e20d8d2a6b |
| 1882 | CODE_SMELL | MINOR | extension/browser-control.js:433 | javascript:S1481 | Remove the declaration of the unused '_rs' variable. | 1d72d609-97ec-4264-914f-5cfc78386f93 |
| 1883 | CODE_SMELL | MINOR | extension/browser-control.js:433 | javascript:S1481 | Remove the declaration of the unused '_rq' variable. | 8644918c-df55-49f5-84a2-85624efc000d |
| 1884 | CODE_SMELL | MINOR | extension/browser-control.js:433 | javascript:S1481 | Remove the declaration of the unused '_native' variable. | 8a2bbf8f-72f4-43e6-9a36-a604605c1425 |
| 1885 | CODE_SMELL | MINOR | extension/browser-control.js:433 | javascript:S1481 | Remove the declaration of the unused '_session' variable. | a101c6e1-1ab3-488c-ac43-00e2d3383858 |
| 1886 | CODE_SMELL | MINOR | extension/browser-control.js:433 | javascript:S1481 | Remove the declaration of the unused '_post' variable. | cdc126d7-13e8-47c4-a543-c7f2285c0f0c |
| 1887 | CODE_SMELL | MAJOR | extension/browser-control.js:494 | javascript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | 3d7467f9-985b-48c3-a57d-7305c97b353c |
| 1888 | CODE_SMELL | MAJOR | extension/browser-control.js:569 | javascript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | dbda5435-1bf5-4251-97c4-57f24cdb8f98 |
| 1889 | CODE_SMELL | CRITICAL | extension/browser-control.js:573 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 56 to the 15 allowed. | 0f5cd408-4274-449b-8ed8-40b20a36caa7 |
| 1890 | CODE_SMELL | CRITICAL | extension/browser-control.js:626 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | 153cc1c0-4159-4480-822e-0a8f9e08b8a3 |
| 1891 | CODE_SMELL | MAJOR | extension/browser-control.js:635 | javascript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | cb396546-f301-4d57-871e-0cf5fe81a9fb |
| 1892 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:671 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 7ca59e15-88d1-484b-9d0f-b123e04136eb |
| 1893 | BUG | MAJOR | extension/chatgpt-dom.js:679 | javascript:S5868 | Move this Unicode combined character '\u200d\ufe0f' outside of the character class | 7144d9f4-9cdf-4b76-b470-1ac868e5f2ca |
| 1894 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:1997 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | ba5244d6-29f6-43b4-a50b-52e5990c34b0 |
| 1895 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2054 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 7762a92d-8746-4e33-b630-8fdce22e5967 |
| 1896 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2103 | javascript:S7761 | Prefer `.dataset` over `removeAttribute(…)`. | 72621151-f939-433a-ac57-942a3d2200cb |
| 1897 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2104 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | f81aba02-8444-4153-8c3f-0a6d99924501 |
| 1898 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2167 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 031b5990-8cfe-4526-8251-96cb07901b0a |
| 1899 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2251 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 80570958-6143-431a-a1ca-e81a8a33b543 |
| 1900 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:2826 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | d160810d-227f-494c-ab56-919024244eb8 |
| 1901 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:2827 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 0e71f300-5e49-4582-ac71-67b602744487 |
| 1902 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2919 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 7858d066-0a0f-47a3-bff1-ab3bff2d4071 |
| 1903 | CODE_SMELL | MINOR | extension/content.js:2395 | javascript:S7735 | Unexpected negated condition. | 95ddf45b-3a9f-4da4-8633-8f896a10109e |
| 1904 | CODE_SMELL | MAJOR | extension/content.js:3213 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 66baad8e-b677-434f-b8ca-3364bbe15f4b |
| 1905 | CODE_SMELL | MAJOR | extension/content.js:3234 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | a5123502-0c82-4cf7-8828-5f54f262cf6a |
| 1906 | CODE_SMELL | CRITICAL | extension/content.js:3288 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 5eac86bc-549d-4be1-bfcd-2137879db88d |
| 1907 | CODE_SMELL | MAJOR | extension/content.js:3806 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | f9259dc5-a7bd-4844-9fcc-1cd1975dafd9 |
| 1908 | CODE_SMELL | CRITICAL | extension/content.js:3858 | javascript:S3735 | Remove this use of the "void" operator. | d40d1dcd-f313-4d8c-b533-f7ebfb57ab66 |
| 1909 | CODE_SMELL | CRITICAL | extension/content.js:3893 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 30 to the 15 allowed. | 9522e62c-e5f9-4b87-9b46-186982961f30 |
| 1910 | CODE_SMELL | MINOR | extension/content.js:3942 | javascript:S7758 | Prefer `String.fromCodePoint()` over `String.fromCharCode()`. | 7fda24ae-9731-4edd-af41-06eba69d6b22 |
| 1911 | CODE_SMELL | CRITICAL | extension/content.js:3951 | javascript:S3735 | Remove this use of the "void" operator. | e37f5fec-8167-4b27-948e-c6911cb30c8e |
| 1912 | CODE_SMELL | MINOR | extension/content.js:4682 | javascript:S7735 | Unexpected negated condition. | c237e262-84fd-46ad-86fe-e19692c767d9 |
| 1913 | CODE_SMELL | MAJOR | extension/content.js:5333 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | d3d1be2b-9b47-40e5-8ed4-807a4644b79e |
| 1914 | CODE_SMELL | CRITICAL | extension/content.js:5379 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | 31130c07-3c01-451e-b657-cc47dedd846e |
| 1915 | CODE_SMELL | MAJOR | extension/content.js:5416 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | b3d27563-fd9c-41de-b9da-a047d31409a7 |
| 1916 | CODE_SMELL | CRITICAL | extension/content.js:5450 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 39 to the 15 allowed. | 76cfdeaa-21b2-478d-a79a-ba416981acbe |
| 1917 | CODE_SMELL | MAJOR | extension/content.js:5481 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 1af8e5a4-7efa-4e25-a636-aa6312f25cec |
| 1918 | CODE_SMELL | CRITICAL | extension/content.js:5512 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 44 to the 15 allowed. | 77a6956f-f967-4c89-bf83-7cfeb8ab8539 |
| 1919 | CODE_SMELL | CRITICAL | extension/content.js:5721 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | 9da460f3-e365-4d67-909f-e3e81137dfec |
| 1920 | CODE_SMELL | MAJOR | extension/content.js:5748 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 9cb52473-4a76-4593-a171-4dea927101df |
| 1921 | CODE_SMELL | MINOR | extension/content.js:5889 | javascript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | fa76a2a3-ecb6-4ea1-9252-ddb5b489dba1 |
| 1922 | CODE_SMELL | MAJOR | extension/content.js:5910 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | fa0adced-ad2e-4405-8687-26bc8e8ac718 |
| 1923 | CODE_SMELL | CRITICAL | extension/content.js:6188 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | a3af8c0b-3de1-466b-8689-d2bee93c7ee3 |
| 1924 | CODE_SMELL | MAJOR | extension/content.js:6202 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 42038028-c914-4d44-81f9-168186e17ce0 |
| 1925 | CODE_SMELL | MAJOR | extension/content.js:6205 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | c9c97844-603d-454e-a076-7c669267bde2 |
| 1926 | CODE_SMELL | MAJOR | extension/content.js:6323 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | a5801f7f-914b-42bd-863d-5bcdcca9fdcd |
| 1927 | CODE_SMELL | MAJOR | extension/content.js:6471 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 6c9aeaa6-1edb-44ae-b381-8d1dc92f2bad |
| 1928 | CODE_SMELL | MAJOR | extension/content.js:6622 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | c4c30b92-27c1-438f-a958-46f5d74517bf |
| 1929 | CODE_SMELL | MAJOR | extension/content.js:6624 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 024dc081-466d-4af6-9928-ace27f812c0c |
| 1930 | CODE_SMELL | MAJOR | extension/content.js:6626 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 1500cc88-d16c-448b-84a6-6b8019df02f8 |
| 1931 | CODE_SMELL | MAJOR | extension/content.js:6628 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 24d0f43b-d5e4-489f-8251-6029a09c517f |
| 1932 | CODE_SMELL | MINOR | extension/fiber.js:941 | javascript:S4138 | Expected a `for-of` loop instead of a `for` loop with this simple iteration. | 50591d1a-de57-4c1d-9dd5-3cb5ba1b9a65 |
| 1933 | CODE_SMELL | MAJOR | extension/fiber.js:2233 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | a1a62c37-01e1-43ff-a413-3498c62f0581 |
| 1934 | CODE_SMELL | MAJOR | extension/fiber.js:2235 | javascript:S7761 | Prefer `.dataset` over `removeAttribute(…)`. | ee21b4f0-fd0a-4919-87e7-0de8fac8f007 |
| 1935 | CODE_SMELL | MAJOR | extension/fiber.js:2236 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | 5be0188f-a39d-470e-a4d5-55deca4b3974 |
| 1936 | CODE_SMELL | MAJOR | extension/fiber.js:2240 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 5acbed48-afe5-44fa-a7ec-a7fa180871ee |
| 1937 | CODE_SMELL | MAJOR | extension/fiber.js:2242 | javascript:S7761 | Prefer `.dataset` over `removeAttribute(…)`. | 32eacdb2-abda-4d67-8a3c-44b41d715374 |
| 1938 | CODE_SMELL | MAJOR | extension/fiber.js:2243 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | 0996b259-dd24-440e-93e5-ca974f5f3492 |
| 1939 | CODE_SMELL | MAJOR | extension/fiber.js:2247 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 6f9645a6-eba4-481b-95b0-75ae8375d88d |
| 1940 | CODE_SMELL | MAJOR | extension/fiber.js:2249 | javascript:S7761 | Prefer `.dataset` over `removeAttribute(…)`. | d1870be2-1082-4924-94bb-22b26191af29 |
| 1941 | CODE_SMELL | MAJOR | extension/fiber.js:2250 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | b7af466a-bc33-40fc-8d18-58825e7123f4 |
| 1942 | CODE_SMELL | CRITICAL | scripts/package-native-sources.mjs:41 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 22 to the 15 allowed. | 8b25d8b7-6242-47b6-9673-a7f3f710848d |
| 1943 | CODE_SMELL | CRITICAL | scripts/package-native-sources.mjs:53 | javascript:S4123 | Unexpected `for await...of` of a value that is not async iterable. | 75ba238c-2175-4770-99fb-4e9bbdcb355a |
| 1944 | CODE_SMELL | MINOR | scripts/verify-browser-control-entry.mjs:52 | javascript:S6551 | 'bytes' may use Object's default stringification format ('[object Object]') when stringified. | 63ba0c17-9b8f-4d10-a52d-3d184e68f661 |
| 1945 | CODE_SMELL | MAJOR | scripts/verify-browser-control-entry.mjs:63 | javascript:S1788 | Default parameters should be last. | 58795c3d-a0a2-4ed5-8cb1-2bd978cc6684 |
| 1946 | CODE_SMELL | MAJOR | scripts/verify-browser-control-entry.mjs:64 | javascript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | 8841da3c-30d7-4e51-b657-a53e51a39d65 |
| 1947 | CODE_SMELL | MAJOR | scripts/verify-browser-control-entry.mjs:112 | javascript:S2681 | This statement will not be executed in a loop; only the first statement will be. The rest will execute only once. | 72341f52-34b5-4c9d-ae52-5834977eec1d |
| 1948 | CODE_SMELL | MAJOR | scripts/verify-browser-control.mjs:40 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 5c0340e9-f3ee-4a5b-8ed8-3f6b65dedfeb |
| 1949 | CODE_SMELL | MAJOR | scripts/verify-browser-control.mjs:56 | javascript:S4624 | Refactor this code to not use nested template literals. | 7846663d-ecd4-4540-b37e-3fab6f0c80d6 |
| 1950 | CODE_SMELL | MAJOR | scripts/verify-browser-control.mjs:65 | javascript:S1788 | Default parameters should be last. | 7de7a27e-75cf-4b79-94b3-e0c1a77c41b6 |
| 1951 | CODE_SMELL | MAJOR | scripts/verify-browser-control.mjs:270 | javascript:S2681 | This statement will not be executed in a loop; only the first statement will be. The rest will execute only once. | 7a2564e0-5b83-43a3-bddf-695a98c892cd |
| 1952 | CODE_SMELL | MINOR | scripts/verify-chat-switch.cjs:52 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 219294d3-7868-4f17-bb48-953ebffaaeb9 |
| 1953 | CODE_SMELL | MAJOR | scripts/verify-chat-switch.cjs:66 | javascript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | ce32ddca-5abe-447f-9fe0-e121e6521aa4 |
| 1954 | CODE_SMELL | MINOR | scripts/verify-message-reactions.cjs:40 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | df8492d1-0c91-46ac-9a79-7581cf7e3f2e |
| 1955 | CODE_SMELL | MINOR | scripts/verify-message-reactions.cjs:51 | javascript:S7723 | Use `new Error()` instead of `Error()`. | 29d71fd7-c67c-463b-bc09-052c70d7b887 |
| 1956 | CODE_SMELL | MAJOR | scripts/verify-message-reactions.cjs:51 | javascript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | 3feb12c8-be35-41d3-be4c-784d53601c59 |
| 1957 | CODE_SMELL | MINOR | src/main/bridge.ts:56 | typescript:S3863 | '../shared/session.js' imported multiple times. | d63391ff-ef37-491a-8df2-61a68797f1ee |
| 1958 | CODE_SMELL | MINOR | src/main/bridge.ts:1689 | typescript:S7735 | Unexpected negated condition. | e342dd78-139e-4bf9-b9d8-9cdb201d21b7 |
| 1959 | CODE_SMELL | MINOR | src/main/bridge.ts:1700 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 212c4fd5-5725-45bb-ad66-57f008e032f9 |
| 1960 | CODE_SMELL | MINOR | src/main/bridge.ts:1701 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | f65a0a28-72a7-4b75-be34-f0332d5ba2d0 |
| 1961 | CODE_SMELL | MINOR | src/main/bridge.ts:1706 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 5be67141-098d-49b9-882a-72ccc2817ad7 |
| 1962 | CODE_SMELL | CRITICAL | src/main/bridge.ts:1710 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | a07dec18-6592-4179-a254-283fc45604fe |
| 1963 | CODE_SMELL | MINOR | src/main/bridge.ts:1723 | typescript:S6551 | 'block.type ?? ''' will use Object's default stringification format ('[object Object]') when stringified. | 8583ef48-43ef-41b9-b408-b11f714df5fa |
| 1964 | CODE_SMELL | CRITICAL | src/main/bridge.ts:6772 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | 93a9ed16-d8bf-4104-9572-63045eab959d |
| 1965 | CODE_SMELL | CRITICAL | src/main/bridge.ts:7996 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 49 to the 15 allowed. | 5f251295-3610-4f32-99f2-9008f3c54fde |
| 1966 | CODE_SMELL | MAJOR | src/main/browser-control.ts:19 | typescript:S2933 | Member 'clients' is never reassigned; mark it as `readonly`. | cf217d8b-81c7-4317-99cb-18ba60925ba2 |
| 1967 | CODE_SMELL | MAJOR | src/main/browser-control.ts:20 | typescript:S2933 | Member 'pending' is never reassigned; mark it as `readonly`. | 203771eb-8f61-4d15-b43a-a21a5bda7a1e |
| 1968 | CODE_SMELL | MAJOR | src/main/browser-control.ts:22 | typescript:S2933 | Member 'wake' is never reassigned; mark it as `readonly`. | 629e2b93-b0a1-4e32-a1da-55940af85fc6 |
| 1969 | CODE_SMELL | MAJOR | src/main/browser-control.ts:42 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 3c8b6b3d-7f0a-4bc7-ba44-1dc269bb8f6d |
| 1970 | CODE_SMELL | MAJOR | src/main/browser-control.ts:60 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 81c7a9d3-297d-4d57-87df-54eeb8e8139c |
| 1971 | CODE_SMELL | MAJOR | src/main/browser-control.ts:69 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 324b869f-790f-4d2e-94d3-37a4bfc80db1 |
| 1972 | CODE_SMELL | CRITICAL | src/main/browser-control.ts:74 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 18 to the 15 allowed. | dae24c36-5edd-4167-a8a6-906e85964ea7 |
| 1973 | CODE_SMELL | CRITICAL | src/main/diagnostics.ts:296 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 52 to the 15 allowed. | 9922fa20-c6b8-4bd0-a96e-0db223ceecc4 |
| 1974 | CODE_SMELL | MINOR | src/main/diagnostics.ts:407 | typescript:S7778 | Do not call `Array#push()` multiple times. | e2db9c0b-595c-4c06-8e02-b4dae6616c86 |
| 1975 | CODE_SMELL | MAJOR | src/main/mcp/kernel.ts:1365 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | c98ff2bf-a343-4d3e-b161-8b23c2476d14 |
| 1976 | CODE_SMELL | MINOR | src/main/mcp/tools-browser.ts:20 | typescript:S1874 | '(params?: unknown): ZodNumber' is deprecated. | 18c8a928-b7ba-45bd-905c-fc8e363f17fe |
| 1977 | CODE_SMELL | MINOR | src/main/mcp/tools-browser.ts:20 | typescript:S1874 | '(params?: unknown): ZodNumber' is deprecated. | d9baaa51-2063-4834-b7da-54435bff602b |
| 1978 | CODE_SMELL | MINOR | src/main/mcp/tools-browser.ts:26 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | 1e9ab49f-32ea-4020-911b-3ae849fb22f8 |
| 1979 | CODE_SMELL | MINOR | src/main/mcp/tools-browser.ts:49 | typescript:S1874 | '(params?: unknown): ZodNumber' is deprecated. | 737e1ce5-45bc-4610-8c53-02b3431ab3d5 |
| 1980 | CODE_SMELL | MINOR | src/main/mcp/tools-browser.ts:49 | typescript:S1874 | '(params?: unknown): ZodNumber' is deprecated. | 81a10cec-2725-4fe1-8a41-3350234d569b |
| 1981 | CODE_SMELL | MINOR | src/main/mcp/tools-browser.ts:50 | typescript:S1874 | '(params?: unknown): ZodNumber' is deprecated. | 1bfbf0df-3483-4b01-a222-b29874e2c6a7 |
| 1982 | CODE_SMELL | MINOR | src/main/mcp/tools-browser.ts:50 | typescript:S1874 | '(params?: unknown): ZodNumber' is deprecated. | e280e43a-0b5b-492f-827a-c5792462acf5 |
| 1983 | CODE_SMELL | CRITICAL | src/main/plugins/manager.ts:793 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 50 to the 15 allowed. | 51897c3e-ef22-4cda-8f65-0f814459ce69 |
| 1984 | CODE_SMELL | MAJOR | src/main/session/input-history.ts:65 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 476182e9-37f1-4bfd-92ee-ad308dcc6168 |
| 1985 | CODE_SMELL | MAJOR | src/main/session/input-history.ts:65 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | f0fce737-7d7b-4525-88eb-d878886a7259 |
| 1986 | CODE_SMELL | CRITICAL | src/main/session/input.ts:252 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 18 to the 15 allowed. | e1594e05-8b15-4db0-87ea-e67abff8fffb |
| 1987 | CODE_SMELL | CRITICAL | src/main/session/input.ts:328 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 27 to the 15 allowed. | 2289f11c-7fde-4cf4-b7f2-ee2eb3285011 |
| 1988 | CODE_SMELL | CRITICAL | src/main/session/input.ts:374 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 38 to the 15 allowed. | 894af7e2-eb88-45c9-978d-047329c596f1 |
| 1989 | CODE_SMELL | MAJOR | src/main/session/input.ts:483 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | c02bccfb-9db2-4114-a69c-24860ea9e43b |
| 1990 | CODE_SMELL | MAJOR | src/main/session/input.ts:613 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 0b4c288f-96cc-43d6-b435-6daf65c45256 |
| 1991 | CODE_SMELL | MAJOR | src/main/session/input.ts:619 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 4cf3abe1-4364-41db-b3e4-0a866c7fee48 |
| 1992 | CODE_SMELL | MAJOR | src/main/session/input.ts:747 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | edddf880-1d66-49b3-bb1d-35f243577f30 |
| 1993 | CODE_SMELL | MAJOR | src/main/session/input.ts:747 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | f34d8b0e-1868-4007-90e8-5a3781724f37 |
| 1994 | CODE_SMELL | MINOR | src/main/session/input.ts:752 | typescript:S7735 | Unexpected negated condition. | 50aa0b40-84fa-4e58-9cb0-85353bc989d1 |
| 1995 | BUG | MINOR | src/main/session/input.ts:1076 | typescript:S1226 | Introduce a new variable or use its initial value before reassigning "error". | 90101dd6-0369-42bc-adf2-d1014bed9d74 |
| 1996 | CODE_SMELL | MINOR | src/main/session/input.ts:1076 | typescript:S7718 | The catch parameter `failure` should be named `error_`. | fb697926-8af8-40d2-9de6-fe933fd2b70c |
| 1997 | CODE_SMELL | CRITICAL | src/main/session/input.ts:1618 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 40 to the 15 allowed. | 62b59f3c-9fb6-4063-bc36-247779a292be |
| 1998 | CODE_SMELL | MINOR | src/main/session/prompt.ts:72 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 50133054-d5ac-4a35-922e-0b675dec5cfa |
| 1999 | CODE_SMELL | MAJOR | src/main/session/recorder.ts:1627 | typescript:S107 | Function has too many parameters (9). Maximum allowed is 7. | 578588fd-37de-48ff-9308-23831f5c10bb |
| 2000 | CODE_SMELL | MAJOR | src/main/session/recorder.ts:1642 | typescript:S107 | Function has too many parameters (9). Maximum allowed is 7. | 15b480b6-044b-45e0-a00c-6e4f095223ac |
| 2001 | CODE_SMELL | CRITICAL | src/main/session/recorder.ts:1818 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 31 to the 15 allowed. | 5c83f709-5ee9-4e9b-b4d7-e539ccd6bb12 |
| 2002 | CODE_SMELL | MINOR | src/main/session/recorder.ts:2069 | typescript:S7735 | Unexpected negated condition. | 81c799d0-8096-4c7e-ac98-87577dbeb541 |
| 2003 | CODE_SMELL | MINOR | src/main/session/recorder.ts:2183 | typescript:S7735 | Unexpected negated condition. | c20c7266-249a-4c7d-b4aa-60828eadaab8 |
| 2004 | CODE_SMELL | MAJOR | src/main/session/store.ts:1343 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | c458ed27-3bf9-4cf3-9067-6fe015755900 |
| 2005 | CODE_SMELL | CRITICAL | src/main/session/store.ts:1481 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 29 to the 15 allowed. | 7c44aa7b-63e9-4b3e-ac29-ade4533acd26 |
| 2006 | CODE_SMELL | MAJOR | src/main/session/store.ts:1502 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | bdc692e2-aacf-4cd6-bdff-72a515142000 |
| 2007 | CODE_SMELL | MAJOR | src/main/session/store.ts:1507 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | abaae086-32ed-46c7-b402-61d94e98fea4 |
| 2008 | CODE_SMELL | MAJOR | src/main/session/store.ts:1513 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 944fb559-ee5b-4eaa-a088-2a9f33b94de4 |
| 2009 | CODE_SMELL | MINOR | src/main/skills.ts:39 | typescript:S6353 | Use concise character class syntax '\d' instead of '[0-9]'. | 1df65a88-a5e8-483b-b1a4-35052e2d6b97 |
| 2010 | CODE_SMELL | MINOR | src/main/skills.ts:39 | typescript:S6353 | Use concise character class syntax '\d' instead of '[0-9]'. | 750f34de-117f-4ee5-ad56-8480264006a7 |
| 2011 | BUG | MAJOR | src/main/skills.ts:40 | typescript:S5850 | Group parts of the regex together to make the intended operator precedence explicit. | 46945c45-caba-41f6-819f-2c0c8aa0e510 |
| 2012 | CODE_SMELL | MAJOR | src/main/skills.ts:40 | typescript:S6535 | Unnecessary escape character: \[. | f02b01f0-ac8a-46c3-9126-07cb8ee598da |
| 2013 | CODE_SMELL | MINOR | src/main/skills.ts:90 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | c7c0e9c5-c5c5-42e2-a796-bf630cf0115c |
| 2014 | CODE_SMELL | MINOR | src/main/skills.ts:110 | typescript:S7755 | Prefer `.at(…)` over `[….length - index]`. | a30a146e-a3c4-49eb-be28-90c563ccd6ce |
| 2015 | CODE_SMELL | MINOR | src/main/skills.ts:115 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 17b8fdbc-fb2d-4d4e-9f86-8da9b5fa76ec |
| 2016 | CODE_SMELL | MINOR | src/main/skills.ts:131 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | f4d2d63b-3d84-40a7-9a0d-9d11bdf4211d |
| 2017 | CODE_SMELL | CRITICAL | src/main/skills.ts:136 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | 07d240ed-fed8-49fb-be99-275888e520cd |
| 2018 | CODE_SMELL | MINOR | src/main/skills.ts:137 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | db23f04e-4281-4c34-b1ea-4acb761dfe72 |
| 2019 | CODE_SMELL | MAJOR | src/main/skills.ts:489 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | db28bd99-2dd7-41b3-aab3-5c870897565d |
| 2020 | CODE_SMELL | MINOR | src/main/skills.ts:731 | typescript:S7735 | Unexpected negated condition. | b65773e9-55ba-44e9-9b03-3f324da14aa6 |
| 2021 | CODE_SMELL | MINOR | src/renderer/chat.ts:2760 | typescript:S4325 | This assertion is unnecessary since it does not change the type of the expression. | abc8041d-d952-4a66-97ac-2d1e6d57e0ab |
| 2022 | CODE_SMELL | MINOR | src/renderer/chat.ts:3354 | typescript:S7778 | Do not call `Array#push()` multiple times. | 9999ed2a-3776-4623-b2bc-42f0787cb7b1 |
| 2023 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:3542 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 18 to the 15 allowed. | 10b5cef0-1cb9-4f4b-b041-ef6262088696 |
| 2024 | CODE_SMELL | MAJOR | src/renderer/chat.ts:5177 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 1fe39864-65b0-41ed-bbc8-9d204bf6cc86 |
| 2025 | CODE_SMELL | MAJOR | src/renderer/chat.ts:5178 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | ec3acda9-f60f-43c7-90f1-249d3e9d444c |
| 2026 | CODE_SMELL | MINOR | src/renderer/chat.ts:5180 | typescript:S6606 | Prefer using nullish coalescing operator (`??=`) instead of an assignment expression, as it is simpler to read. | 178a9bf2-dd63-4028-b5f3-41ee0947cc42 |
| 2027 | CODE_SMELL | MAJOR | src/renderer/chat.ts:5240 | typescript:S4144 | Update this function so that its implementation is not identical to the one on line 5194. | dbf96e60-d882-47ad-a180-ed4912fa2f9e |
| 2028 | CODE_SMELL | MAJOR | src/renderer/chat.ts:5493 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 63670362-b7be-4839-a2b6-062ff18a4a14 |
| 2029 | CODE_SMELL | MAJOR | src/renderer/chat.ts:5503 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 5dcee331-4715-4f4e-92f5-b14decef5d9e |
| 2030 | CODE_SMELL | MAJOR | src/renderer/chat.ts:5515 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | ab98faf0-e7c5-466c-bbf9-7a1ea2271d69 |
| 2031 | CODE_SMELL | MINOR | src/renderer/chat.ts:5933 | typescript:S7765 | Use `.includes()` instead of `.some()` when checking value existence. | 08665672-e3c3-4118-a724-f3bb8fd11f7a |
| 2032 | CODE_SMELL | MINOR | src/renderer/chat.ts:5937 | typescript:S7765 | Use `.includes()` instead of `.some()` when checking value existence. | 119eac08-71c9-4b75-89b7-753f74d830be |
| 2033 | CODE_SMELL | MINOR | src/renderer/chat.ts:5942 | typescript:S7764 | Prefer `globalThis` over `window`. | c86967d2-eec2-404f-af6c-9f291d111697 |
| 2034 | CODE_SMELL | MINOR | src/renderer/chat.ts:5950 | typescript:S7764 | Prefer `globalThis` over `window`. | eb025f9b-5318-40fe-a246-66035a0b28de |
| 2035 | CODE_SMELL | MINOR | src/renderer/chat.ts:5954 | typescript:S7764 | Prefer `globalThis` over `window`. | fd3de282-d9e2-4d03-807c-b92a78f30bbc |
| 2036 | CODE_SMELL | CRITICAL | src/renderer/image-storage.ts:12 | typescript:S3735 | Remove this use of the "void" operator. | 0a84726f-ade3-439e-b19b-5ca652fce476 |
| 2037 | CODE_SMELL | MINOR | src/renderer/image-storage.ts:45 | typescript:S7764 | Prefer `globalThis` over `window`. | 23856f4e-4122-43b7-9cd4-10ab311e69af |
| 2038 | CODE_SMELL | MINOR | src/renderer/setup-guide.ts:166 | typescript:S7764 | Prefer `globalThis` over `window`. | 53e4bbdc-85ed-4ccf-821d-f97447840520 |
| 2039 | CODE_SMELL | MAJOR | src/renderer/skills.ts:14 | typescript:S5843 | Simplify this regular expression to reduce its complexity from 37 to the 20 allowed. | cad7782c-c75b-446b-808b-a833b88bdeb2 |
| 2040 | CODE_SMELL | MINOR | src/renderer/tool-approval.ts:29 | typescript:S7764 | Prefer `globalThis` over `window`. | 4481a7e0-2e6c-4fa3-9021-d460bf164fa3 |
| 2041 | CODE_SMELL | MINOR | src/renderer/tool-approval.ts:33 | typescript:S7764 | Prefer `globalThis` over `window`. | 40a476bd-626c-4b51-a0d5-21ea917cfaf5 |
| 2042 | BUG | MAJOR | src/shared/message-reaction.ts:6 | typescript:S5868 | Move this Unicode combined character '\u200d\ufe0f' outside of the character class | 3b278892-4076-4f19-8b8d-fc53fa99b133 |
| 2043 | CODE_SMELL | MAJOR | src/shared/types.ts:850 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | bd247194-7792-4f81-8b52-ed93feac023d |
| 2044 | CODE_SMELL | CRITICAL | extension/content.js:1481 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 21 to the 15 allowed. | 2481c06a-6665-4634-b9da-3f75ea15c40a |
| 2045 | CODE_SMELL | MAJOR | extension/content.js:1509 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 267ff8bc-06dd-4211-9095-f5be882accc6 |
| 2046 | CODE_SMELL | CRITICAL | extension/content.js:3183 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | 96e3e7c6-ab76-4bfd-b23e-376f840d068f |
| 2047 | CODE_SMELL | MAJOR | extension/content.js:10477 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | f2b64f26-1288-4858-9758-bf490ba3e516 |
| 2048 | CODE_SMELL | MAJOR | extension/popup.js:210 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | ac6999f8-6a25-4ec8-8b78-fc3e1fd77020 |
| 2049 | CODE_SMELL | CRITICAL | extension/usage.js:257 | javascript:S3735 | Remove this use of the "void" operator. | 5066705f-35fa-4990-ac27-2979eb7a0e80 |
| 2050 | CODE_SMELL | MINOR | extension/usage.js:340 | javascript:S7764 | Prefer `globalThis` over `window`. | ead4f7c8-ed2b-4c92-aaa5-47047781a3e5 |
| 2051 | CODE_SMELL | MINOR | extension/usage.js:356 | javascript:S7764 | Prefer `globalThis` over `window`. | d476e3c3-c346-494a-ad9a-ec8b2e216356 |
| 2052 | CODE_SMELL | MINOR | extension/usage.js:454 | javascript:S7764 | Prefer `globalThis` over `window`. | 798d40c8-47d7-4592-9b39-4d1a1e2b5056 |
| 2053 | CODE_SMELL | CRITICAL | extension/usage.js:466 | javascript:S3735 | Remove this use of the "void" operator. | 7ce53c0a-5b18-468e-8f8c-d001dbd164c6 |
| 2054 | CODE_SMELL | MAJOR | src/main/bridge.ts:1584 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 7a6c5444-1362-47d3-9da7-cf1082e5c402 |
| 2055 | CODE_SMELL | MINOR | src/main/bridge.ts:7663 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 85eced54-ee71-463a-8eea-cf325a2f6e59 |
| 2056 | CODE_SMELL | MAJOR | src/main/bridge.ts:8604 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 2d4c2d67-9b05-4814-a2b1-00b7d8593f2a |
| 2057 | CODE_SMELL | MINOR | src/main/skills.ts:87 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 06c296c4-6638-4911-8718-f5b57f22c434 |
| 2058 | CODE_SMELL | MINOR | src/main/skills.ts:89 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 2a6a8676-604c-44e3-b164-2195af249ff2 |
| 2059 | CODE_SMELL | MINOR | src/main/skills.ts:91 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 3961d61a-b707-43d9-86e4-a8abf0ed3ebd |
| 2060 | CODE_SMELL | MINOR | src/main/skills.ts:93 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 2cba3cff-76f3-471a-a909-6f3c502ff446 |
| 2061 | CODE_SMELL | MINOR | src/renderer/plugins.ts:117 | typescript:S7764 | Prefer `globalThis` over `window`. | 00f4b182-b0bd-4d0d-8868-9bafe047aaf6 |
| 2062 | CODE_SMELL | MAJOR | src/renderer/plugins.ts:117 | typescript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | e3cbcb31-53e4-4445-837d-52d4fe5c596e |
| 2063 | CODE_SMELL | CRITICAL | src/main/goal.ts:2904 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 44 to the 15 allowed. | 3c518ea2-389f-40b7-b17f-d6959d4a2c47 |
| 2064 | CODE_SMELL | MAJOR | src/renderer/goal-reasoning.ts:29 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 328e8d4c-010c-4910-9653-0ca5be091e9e |
| 2065 | CODE_SMELL | MAJOR | src/shared/goal-reasoning.ts:26 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 4efb848d-ecd6-4136-9535-f8688d62a50c |
| 2066 | CODE_SMELL | CRITICAL | src/main/mcp/kernel.ts:282 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | c86b5801-adff-4213-abc9-f35bbe4b3682 |
| 2067 | CODE_SMELL | MAJOR | src/main/mcp/kernel.ts:1021 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 77f31862-964e-4d73-918e-db6934465843 |
| 2068 | CODE_SMELL | MAJOR | src/main/mcp/kernel.ts:1023 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 79a71d54-efbd-43e8-aa65-d16fca6eb446 |
| 2069 | CODE_SMELL | MAJOR | src/main/mcp/kernel.ts:1029 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 2c1cd430-8e1d-4343-9478-f29a860d40da |
| 2070 | CODE_SMELL | MAJOR | src/main/mcp/kernel.ts:1031 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | dddc42fb-c432-4fbd-a14f-c465ff56050b |
| 2071 | CODE_SMELL | MAJOR | src/main/mcp/kernel.ts:1037 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | db6e208a-e9a2-4f49-8288-af44b6e7650e |
| 2072 | CODE_SMELL | MAJOR | src/main/mcp/kernel.ts:1043 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 7bbdd1b1-1480-40fe-9cbc-9f0e59b42055 |
| 2073 | CODE_SMELL | MAJOR | extension/content.js:6758 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 4c9e1815-0658-4c49-803a-e321db2790d3 |
| 2074 | CODE_SMELL | MINOR | scripts/verify-goal-progress.cjs:25 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 725a50b2-81e8-4e4a-be62-39790d2e9733 |
| 2075 | CODE_SMELL | MINOR | scripts/verify-goal-progress.cjs:25 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | f26eab12-e3a3-4fe4-a5b5-7fa74ff9aaa0 |
| 2076 | CODE_SMELL | MINOR | scripts/verify-goal-status-layout.cjs:13 | javascript:S6594 | Use the "RegExp.exec()" method instead. | b49027d3-48fd-4381-af26-ebe1c186a525 |
| 2077 | CODE_SMELL | MINOR | scripts/verify-history-scroll.cjs:28 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 5d8d9307-312d-42f2-b66e-1f212f37373e |
| 2078 | CODE_SMELL | MINOR | scripts/verify-history-scroll.cjs:28 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | b83b3c01-7b06-4a25-af96-d7c5d835066c |
| 2079 | CODE_SMELL | MINOR | scripts/verify-recovery-layout.cjs:28 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 31296793-8f20-4d2f-8a60-d353e91245b9 |
| 2080 | CODE_SMELL | MINOR | scripts/verify-recovery-layout.cjs:28 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | b17c098a-5b86-4db2-8a07-691ce778d209 |
| 2081 | CODE_SMELL | MINOR | scripts/verify-setup-guide.cjs:32 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 538c8ef5-30aa-4f1a-a5af-bf3145426f8e |
| 2082 | CODE_SMELL | MINOR | scripts/verify-sidebar-setup.cjs:69 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 9b33f085-0653-4018-bde5-6490e680b589 |
| 2083 | CODE_SMELL | MAJOR | src/main/bridge.ts:3910 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | ef8ee869-904b-4896-804b-4899c8940c94 |
| 2084 | CODE_SMELL | MINOR | src/main/bridge.ts:3962 | typescript:S7735 | Unexpected negated condition. | b2b2b49b-d1b4-4020-a451-652f66a7a25e |
| 2085 | CODE_SMELL | MAJOR | src/main/bridge.ts:7077 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | af40192a-065b-4013-a514-2351fcf1bd3b |
| 2086 | CODE_SMELL | MAJOR | src/main/bridge.ts:7147 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 816bf015-1f14-43e3-bea2-b800a7401759 |
| 2087 | CODE_SMELL | MAJOR | src/main/bridge.ts:7156 | typescript:S4043 | Move this array "sort" operation to a separate statement or replace it with "toSorted". | 3c2d9882-a626-43ea-b985-84dfc1b9960c |
| 2088 | CODE_SMELL | MAJOR | src/main/bridge.ts:7190 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 958d9397-9e86-4e5f-8144-f94e1d61bda5 |
| 2089 | CODE_SMELL | CRITICAL | src/main/bridge.ts:9032 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 37 to the 15 allowed. | 73d4e29b-59bc-41da-b46d-c83e322ac6cc |
| 2090 | CODE_SMELL | MINOR | src/main/connection.ts:85 | typescript:S4323 | Replace this union type with a type alias. | 75da4e7f-cd2a-4462-9c4e-e8753e52f3e5 |
| 2091 | CODE_SMELL | MAJOR | src/main/goal.ts:1505 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 52585d35-ad24-4174-a438-cdf232d78857 |
| 2092 | CODE_SMELL | CRITICAL | src/main/goal.ts:1716 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 41 to the 15 allowed. | dc644cb3-2d3f-4403-ba4e-7ababc741bed |
| 2093 | CODE_SMELL | MINOR | src/main/goal.ts:1745 | typescript:S4325 | This assertion is unnecessary since it does not change the type of the expression. | ddf597c5-6a52-4e1a-8da8-a27ae35a071d |
| 2094 | CODE_SMELL | MINOR | src/main/goal.ts:1746 | typescript:S4325 | This assertion is unnecessary since it does not change the type of the expression. | 49f309ea-ed2a-4611-a479-c5bf51109d91 |
| 2095 | CODE_SMELL | MINOR | src/main/goal.ts:1746 | typescript:S4325 | This assertion is unnecessary since it does not change the type of the expression. | 5b0ab3be-ad7a-4750-84a3-3bb722312913 |
| 2096 | CODE_SMELL | MINOR | src/main/goal.ts:1746 | typescript:S4325 | This assertion is unnecessary since it does not change the type of the expression. | ec3e387f-5d45-4c4a-893a-5d0db1c58a1d |
| 2097 | CODE_SMELL | MAJOR | src/main/goal.ts:2677 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | a7a3d16d-57b7-4b43-8178-d2e77a7f0d54 |
| 2098 | CODE_SMELL | MAJOR | src/main/goal.ts:2678 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | bb36efc9-9dad-4a14-aa7e-e997b3a17a88 |
| 2099 | CODE_SMELL | MAJOR | src/main/ipc.ts:590 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 8ac44767-5cdc-49a6-9ecf-4c02b8312c65 |
| 2100 | CODE_SMELL | MAJOR | src/main/session/store.ts:1613 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | f52c323e-7b16-488a-ac8c-f354da73fd1c |
| 2101 | CODE_SMELL | MAJOR | src/main/session/store.ts:1614 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 55a6058b-48e3-4928-bcd2-65afeb42b01e |
| 2102 | CODE_SMELL | CRITICAL | src/main/session/store.ts:1646 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 39 to the 15 allowed. | e5abed61-d354-4431-af9a-7ed7a916c000 |
| 2103 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:3047 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | 2d18c2c9-240d-4621-be48-a953b8e5c953 |
| 2104 | CODE_SMELL | MINOR | src/renderer/chat.ts:4268 | typescript:S7764 | Prefer `globalThis` over `window`. | d8d971bb-07cb-4d46-8821-e39e98d55277 |
| 2105 | CODE_SMELL | MAJOR | src/renderer/main.ts:1196 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | aedba22a-142e-4de6-a969-c4cebd81cd02 |
| 2106 | CODE_SMELL | MAJOR | src/renderer/recovery.ts:69 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | b60da936-bf43-4b6c-b624-e36414c0aec0 |
| 2107 | CODE_SMELL | MAJOR | src/renderer/recovery.ts:70 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 35cdb503-49c1-41bb-9ef5-7b97c26b9f7c |
| 2108 | CODE_SMELL | MINOR | src/renderer/sidebar-order.ts:10 | typescript:S7764 | Prefer `globalThis` over `window`. | cdcfd1d0-9412-49be-8bb9-a44d67524cd8 |
| 2109 | CODE_SMELL | MINOR | src/renderer/sidebar-order.ts:49 | typescript:S7764 | Prefer `globalThis` over `window`. | c773dc2f-7016-4f23-a221-444fd067924d |
| 2110 | CODE_SMELL | MINOR | src/renderer/sidebar-order.ts:74 | typescript:S7764 | Prefer `globalThis` over `window`. | 78416fbb-8220-4fd7-a474-95a092efae74 |
| 2111 | CODE_SMELL | MAJOR | src/renderer/sidebar-order.ts:86 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | ccb309f8-0f0c-4e32-96b0-82ca74adeb68 |
| 2112 | CODE_SMELL | MINOR | src/renderer/sidebar-order.ts:108 | typescript:S7764 | Prefer `globalThis` over `window`. | 9b2544b8-221a-4839-8a75-83f818fa0408 |
| 2113 | CODE_SMELL | MINOR | src/renderer/sidebar-order.ts:109 | typescript:S7764 | Prefer `globalThis` over `window`. | 30a3b543-38d7-41fc-b24d-be0050d3cf87 |
| 2114 | CODE_SMELL | MINOR | src/renderer/sidebar-order.ts:112 | typescript:S7764 | Prefer `globalThis` over `window`. | 86b2b3f7-1f3f-4b4d-9da6-809eb7efa30a |
| 2115 | CODE_SMELL | CRITICAL | src/shared/session.ts:1169 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 23 to the 15 allowed. | a3212407-e176-45d2-8d7f-0ecd15de5d61 |
| 2116 | CODE_SMELL | MAJOR | src/shared/session.ts:1190 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | d2ba6b92-5042-475f-bb00-495794e7738e |
| 2117 | CODE_SMELL | MAJOR | src/main/session/recorder.ts:1238 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | b9dadb3d-eb9e-4513-a1a4-1065a38a9b64 |
| 2118 | CODE_SMELL | MAJOR | src/main/bridge.ts:2607 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 48603066-5a97-4e01-b189-49c475609fd5 |
| 2119 | CODE_SMELL | MINOR | src/main/bridge.ts:2795 | typescript:S4325 | This assertion is unnecessary since it does not change the type of the expression. | 73243e38-2f51-4218-b7b6-ffa35ba47c24 |
| 2120 | CODE_SMELL | MINOR | src/main/bridge.ts:2795 | typescript:S4325 | This assertion is unnecessary since it does not change the type of the expression. | ee4b0dfc-eacb-44a6-af51-299a688f783d |
| 2121 | CODE_SMELL | MAJOR | src/main/bridge.ts:7073 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | b96d3eea-a2f8-4f47-9caa-accd3eea604e |
| 2122 | BUG | CRITICAL | src/main/bridge.ts:8960 | typescript:S2871 | Provide a compare function that depends on "String.localeCompare", to reliably sort elements alphabetically. | 3917fefa-6382-43ed-8fba-e542e1f7babd |
| 2123 | CODE_SMELL | MAJOR | src/main/bridge.ts:8960 | typescript:S4624 | Refactor this code to not use nested template literals. | 3e34d972-0825-4dfd-b340-f40ddde86a19 |
| 2124 | CODE_SMELL | MAJOR | src/main/bridge.ts:8984 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | ee54a3aa-0dbb-49ae-8205-3386acadb75c |
| 2125 | CODE_SMELL | MAJOR | src/main/bridge.ts:9051 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 05afc029-7258-4347-9e5d-0385b67ed052 |
| 2126 | CODE_SMELL | MAJOR | src/main/bridge.ts:9289 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | ccda2515-94f5-4131-a4c1-f313327a5bb7 |
| 2127 | CODE_SMELL | CRITICAL | src/main/goal.ts:1417 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 39 to the 15 allowed. | bc98d64b-9069-4e32-a391-b3dea8e0f37e |
| 2128 | CODE_SMELL | CRITICAL | src/main/goal.ts:1894 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 39 to the 15 allowed. | d4efbfeb-804d-4fad-b92f-c127ad42ab44 |
| 2129 | CODE_SMELL | CRITICAL | src/main/goal.ts:2022 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 28 to the 15 allowed. | 9fc124dd-0db7-4a92-9aa1-c5c8e6e8a984 |
| 2130 | CODE_SMELL | CRITICAL | extension/content.js:4007 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 23 to the 15 allowed. | 8730af6c-dca0-4786-b7ab-36c77a6c9942 |
| 2131 | CODE_SMELL | MINOR | extension/content.js:4009 | javascript:S7764 | Prefer `globalThis` over `window`. | f72145bb-6157-4527-a1fd-01608f1f601c |
| 2132 | CODE_SMELL | MINOR | extension/fiber.js:2651 | javascript:S7764 | Prefer `globalThis` over `window`. | 370fc072-0f24-45aa-9ecb-c712342d2895 |
| 2133 | CODE_SMELL | MINOR | scripts/verify-dropdown-layout.cjs:15 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | c6d5913f-d13b-475b-ab7b-bdd5b3936183 |
| 2134 | CODE_SMELL | MINOR | scripts/verify-dropdown-layout.cjs:16 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 73bcce46-9547-4eff-988c-90710581eeb1 |
| 2135 | CODE_SMELL | MAJOR | src/main/bridge.ts:8930 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | e3e4a70f-39a1-4dde-abac-d3a22112b8b0 |
| 2136 | CODE_SMELL | MINOR | src/main/ipc.ts:1343 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | 195a213f-805c-4391-a2e6-09605b7946cc |
| 2137 | CODE_SMELL | MINOR | src/main/session/input.ts:82 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | 79c4a588-093f-44c0-8b6d-84d75d862a1e |
| 2138 | CODE_SMELL | MAJOR | src/main/session/input.ts:181 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 1b1142b7-6654-4a5d-908b-c9c4406dfc7c |
| 2139 | CODE_SMELL | MAJOR | src/main/session/input.ts:1360 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 6b03ebeb-587a-4e36-ad43-59df567d2257 |
| 2140 | CODE_SMELL | MAJOR | src/main/session/input.ts:1478 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 56cec120-d02a-4369-a1bb-c1908d188378 |
| 2141 | CODE_SMELL | MAJOR | src/main/session/input.ts:1479 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | e96bff44-bbcb-4b90-acde-6e2400ab5a6d |
| 2142 | CODE_SMELL | MAJOR | src/main/session/input.ts:1501 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 2b170d6d-69e2-4410-ae0a-39c8234fcdea |
| 2143 | CODE_SMELL | MAJOR | src/main/session/input.ts:1502 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 44d92a8c-02cb-49ba-8dc3-47886059616b |
| 2144 | CODE_SMELL | MAJOR | src/main/session/input.ts:1535 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 96b94d0d-f9fa-4040-ace6-a23fcca613f1 |
| 2145 | CODE_SMELL | MAJOR | src/main/session/input.ts:1646 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | f697f0d1-564a-432b-9f30-1a214b12e1ba |
| 2146 | CODE_SMELL | MAJOR | src/main/session/input.ts:1857 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 970a605a-07ec-418b-a08d-73c736597974 |
| 2147 | CODE_SMELL | MAJOR | src/renderer/styles.css:3703 | css:S4666 | Unexpected duplicate selector "#loopDeliveryRow select", first used at line 3605 | e3f267dd-a793-46de-bcde-79b2c31cd60f |
| 2148 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:241 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 2f26292d-49f2-477a-986b-5aa7bac6fe67 |
| 2149 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:243 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 74b23c3a-d780-4eed-96e0-a94d33d529c4 |
| 2150 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2798 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 72f4f1ed-8247-48e2-95d0-05eb6e55253d |
| 2151 | CODE_SMELL | MAJOR | extension/fiber.js:2453 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | f010950a-8d4a-46fa-9d26-e000979ca206 |
| 2152 | CODE_SMELL | MAJOR | extension/fiber.js:2454 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 79335f4a-b047-49e2-aaf9-8f6d5b5d88c6 |
| 2153 | CODE_SMELL | MINOR | scripts/verify-chat-opening-scroll.cjs:36 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | bec882fc-d5ee-4ed5-94dd-b656a9403217 |
| 2154 | CODE_SMELL | MINOR | scripts/verify-chat-opening-scroll.cjs:36 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | dabc1ba6-9394-4cad-82f8-9ff552aac07b |
| 2155 | CODE_SMELL | MAJOR | src/main/bridge.ts:6679 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | b1d9f3c9-8270-4997-8733-01945f0fcb33 |
| 2156 | CODE_SMELL | MAJOR | src/main/bridge.ts:8531 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 07ef7d1f-aa3d-4b1f-a656-d0247378fdb7 |
| 2157 | CODE_SMELL | MAJOR | src/main/goal.ts:734 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | f46b4cf5-bd2a-4e92-961f-8eec93da3f87 |
| 2158 | CODE_SMELL | CRITICAL | src/main/mcp/code-mode-runtime.ts:44 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 31 to the 15 allowed. | 1c568bcf-b763-4c87-8452-acf0b18e11c5 |
| 2159 | CODE_SMELL | CRITICAL | src/main/mcp/code-mode-runtime.ts:78 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 31 to the 15 allowed. | 163d55f1-c8fb-4f6a-91f1-43291ba6d946 |
| 2160 | CODE_SMELL | MAJOR | src/main/mcp/code-mode-runtime.ts:142 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 40b0f3ce-d1ba-47fa-ae40-84f48d51bf8c |
| 2161 | CODE_SMELL | MAJOR | src/main/mcp/code-mode-runtime.ts:143 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 0db81745-0be7-4928-9a0e-5c41104d0811 |
| 2162 | CODE_SMELL | MAJOR | src/main/mcp/code-mode-runtime.ts:144 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | a65a4e78-6902-4ae3-819d-22b03fa8db50 |
| 2163 | CODE_SMELL | CRITICAL | src/main/mcp/tools-core.ts:334 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 36 to the 15 allowed. | 15d1ac62-9444-4187-9824-7eb86840d1ae |
| 2164 | CODE_SMELL | MAJOR | src/main/session/input.ts:1201 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 34548242-cf78-4bfd-87a5-35bb288a38b2 |
| 2165 | CODE_SMELL | MAJOR | src/main/session/input.ts:1377 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 3da2606c-5f67-4387-b240-137300545c7a |
| 2166 | CODE_SMELL | MAJOR | src/renderer/chat-error.ts:28 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 5ed70ea0-17a5-4fb1-b5a6-75fe7c3c9eb5 |
| 2167 | CODE_SMELL | MAJOR | src/renderer/chat-error.ts:31 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 1c3aa04a-c78a-495b-90bc-14cfae3a6617 |
| 2168 | CODE_SMELL | MAJOR | src/renderer/chat-error.ts:34 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 8c7696b2-8644-4f52-9f1f-896755d0574e |
| 2169 | CODE_SMELL | MAJOR | src/renderer/chat-error.ts:36 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 30073755-6b5a-4e1c-bbf4-c16ef7d4b7f1 |
| 2170 | CODE_SMELL | CRITICAL | src/main/session/recorder.ts:530 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 37 to the 15 allowed. | d544ab56-8030-40ab-a02d-915ce7294827 |
| 2171 | CODE_SMELL | MAJOR | src/main/session/usage.ts:36 | typescript:S1121 | Extract the assignment of "overviewFlight" from this expression. | 8a975c7a-a98a-412f-b3ec-e508cb37858e |
| 2172 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:1661 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 62 to the 15 allowed. | f9deb760-da21-457b-a8ef-ca0f3bafad81 |
| 2173 | CODE_SMELL | MINOR | extension/content.js:12339 | javascript:S7750 | Prefer `.findLast(…)` over `.filter(…).at(-1)`. | abb40124-9728-4d3a-9710-f256852fd27f |
| 2174 | CODE_SMELL | MINOR | scripts/analyze-pro-silence.mjs:8 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 06d2dbf3-e988-40e1-8f9e-40c0b78e57c6 |
| 2175 | CODE_SMELL | MAJOR | scripts/analyze-pro-silence.mjs:41 | javascript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | 22e18339-e269-42d6-8eaa-e181da78402e |
| 2176 | CODE_SMELL | MAJOR | src/main/bridge.ts:6703 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | cac7d496-844c-4b5e-a3da-22754b8e7e8a |
| 2177 | CODE_SMELL | CRITICAL | src/main/fsops.ts:242 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 27 to the 15 allowed. | 6854fd19-0938-4af3-b0c7-a437e7b13ff7 |
| 2178 | CODE_SMELL | CRITICAL | src/main/goal.ts:1044 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 23 to the 15 allowed. | ea8a324b-6037-4905-ad05-a434539a9759 |
| 2179 | CODE_SMELL | MINOR | src/main/ipc.ts:1340 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | 82c63f86-96f3-4a55-9743-f77a61f2837c |
| 2180 | CODE_SMELL | MAJOR | src/main/session/input.ts:1355 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | fea756ac-9be5-4c41-a02b-82ddd649514f |
| 2181 | CODE_SMELL | MAJOR | src/main/session/recorder.ts:1368 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | f197c3c1-d785-46ba-aaa0-6ef425b748f1 |
| 2182 | CODE_SMELL | MAJOR | src/renderer/chat.ts:1250 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 63a52250-6c5d-4b63-8fa6-f7f87760b01f |
| 2183 | CODE_SMELL | MAJOR | src/renderer/chat.ts:1250 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 76ed432b-0435-4dfa-bc6b-d5105aa75e03 |
| 2184 | CODE_SMELL | MINOR | extension/content.js:12096 | javascript:S7764 | Prefer `globalThis` over `window`. | ecaf0b60-243e-4945-8363-4df05b539ff7 |
| 2185 | CODE_SMELL | MAJOR | extension/usage.js:40 | javascript:S6535 | Unnecessary escape character: \". | 6c6760e0-042a-4874-b24b-883bd65f467a |
| 2186 | CODE_SMELL | MAJOR | extension/usage.js:40 | javascript:S6535 | Unnecessary escape character: \". | ad1aed82-e36e-4cb6-b490-a038625639be |
| 2187 | CODE_SMELL | MAJOR | extension/usage.js:40 | javascript:S6535 | Unnecessary escape character: \". | b0931bf9-fb0f-4438-8028-31615e2a3cee |
| 2188 | CODE_SMELL | MAJOR | extension/usage.js:40 | javascript:S6535 | Unnecessary escape character: \". | bc904ac7-2d19-42fd-bbd3-97477716ba3b |
| 2189 | CODE_SMELL | MAJOR | extension/usage.js:213 | javascript:S1121 | Extract the assignment of "match" from this expression. | 57a22def-6213-4876-be30-7b2b69a271a4 |
| 2190 | CODE_SMELL | MAJOR | extension/usage.js:278 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 82b3735a-ed37-4314-9d58-c5c6e964bb33 |
| 2191 | CODE_SMELL | MINOR | extension/usage.js:407 | javascript:S7764 | Prefer `globalThis` over `window`. | 257e1f0c-7146-4c34-92e1-ef4bdc897982 |
| 2192 | CODE_SMELL | CRITICAL | extension/usage.js:430 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 6004174e-05aa-441b-b4a5-b1f96f8f0b5e |
| 2193 | CODE_SMELL | MAJOR | extension/usage.js:432 | javascript:S1854 | Remove this useless assignment to variable "method". | 0cdb5003-5324-4b9c-9eed-c0563a2c6049 |
| 2194 | CODE_SMELL | CRITICAL | extension/usage.js:438 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 367176e3-f473-4199-8c24-01faebfa0378 |
| 2195 | CODE_SMELL | MINOR | extension/usage.js:448 | javascript:S7764 | Prefer `globalThis` over `window`. | 18bd2261-61c6-4e72-8fa1-5faf1c32c76b |
| 2196 | CODE_SMELL | MINOR | extension/usage.js:453 | javascript:S7764 | Prefer `globalThis` over `window`. | 2dac8445-7346-48b6-9f19-110aa5f198b4 |
| 2197 | CODE_SMELL | CRITICAL | extension/background.js:742 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | 286db8b9-0e59-4d77-af2a-4f8b016c5aa0 |
| 2198 | CODE_SMELL | CRITICAL | extension/background.js:913 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | 3a5b27d3-50cf-4857-a730-ff6e3f167024 |
| 2199 | CODE_SMELL | CRITICAL | extension/background.js:1968 | javascript:S3735 | Remove this use of the "void" operator. | b4e79a22-701c-453b-bcbb-3f35fe7edacc |
| 2200 | CODE_SMELL | CRITICAL | extension/background.js:2150 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 24 to the 15 allowed. | 7be4d2ce-b3af-4c09-99fd-ae5b4ae28777 |
| 2201 | CODE_SMELL | MINOR | extension/background.js:2162 | javascript:S7735 | Unexpected negated condition. | 7d7c1edd-e373-408a-9a38-c8a019b8077e |
| 2202 | CODE_SMELL | MAJOR | extension/background.js:4434 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | fea3af53-32cd-4572-a153-ef023cfcbfea |
| 2203 | CODE_SMELL | MINOR | extension/background.js:4663 | javascript:S7735 | Unexpected negated condition. | dff68665-1010-4d77-9d0d-ee512690c270 |
| 2204 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:137 | javascript:S7761 | Prefer `.dataset` over `removeAttribute(…)`. | 41afe98a-d204-47b0-8405-329c753843c8 |
| 2205 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:141 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | f80b3ffc-bfa9-4429-ab4c-61f34bcb4f18 |
| 2206 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:147 | javascript:S7761 | Prefer `.dataset` over `hasAttribute(…)`. | 493a88ef-01ad-482d-8e7c-f730ea6e563e |
| 2207 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:147 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | fce58404-26aa-416a-aca1-cdd45485547b |
| 2208 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:784 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 353006bb-92e3-41cc-9e0c-8832cd0c2cc6 |
| 2209 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:2306 | javascript:S7735 | Unexpected negated condition. | d8921f55-eeec-44c8-a63c-0255d930b1c1 |
| 2210 | BUG | MAJOR | extension/chatgpt-dom.js:2308 | javascript:S3403 | Remove this "===" check; it will always be false. Did you mean to use "=="? | e82290c5-9151-4d7b-bfd5-e0bcfffad7f5 |
| 2211 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:2335 | javascript:S1874 | The signature '(commandId: string, showUI?: boolean \| undefined, value?: string \| undefined): boolean' of 'document.execCommand' is deprecated. | e0d6335f-7770-4346-90e9-8b0349cb4c38 |
| 2212 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:2336 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | d37ee653-04f9-4d41-ad8d-16b563a1b806 |
| 2213 | BUG | MAJOR | extension/chatgpt-dom.js:2337 | javascript:S3403 | Remove this "===" check; it will always be false. Did you mean to use "=="? | 492e21db-b7bc-4a7e-bcb4-6b4585c8b09e |
| 2214 | BUG | CRITICAL | extension/chatgpt-dom.js:2648 | javascript:S2871 | Provide a compare function to avoid sorting elements alphabetically. | afca0d66-8c3f-4a8a-b49f-771a3a3f41bf |
| 2215 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2818 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | a1e53388-79f8-4f71-a78b-b6cafbeb8e7d |
| 2216 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2945 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | e8708861-104f-4e25-8636-5e42440e1116 |
| 2217 | CODE_SMELL | MAJOR | extension/content.js:2320 | javascript:S3800 | Refactor this function to always return the same type. | 9de0cefb-fa51-4916-ba4b-ba051c25d8ec |
| 2218 | CODE_SMELL | MINOR | extension/content.js:8629 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 89ef65b4-db4c-4329-9e29-091b6cc38858 |
| 2219 | CODE_SMELL | MINOR | extension/content.js:9253 | javascript:S7750 | Prefer `.findLast(…)` over `.filter(…).at(-1)`. | 9ebb181f-519b-4fbb-8b9d-22c08384b86a |
| 2220 | CODE_SMELL | MINOR | extension/content.js:12334 | javascript:S7750 | Prefer `.findLast(…)` over `.filter(…).at(-1)`. | d41761a1-1d76-4f92-b9dd-330f323e0071 |
| 2221 | CODE_SMELL | MINOR | extension/content.js:12340 | javascript:S7750 | Prefer `.findLast(…)` over `.filter(…).at(-1)`. | 5e7d2cd3-8edf-4d06-9168-a652397b21d4 |
| 2222 | CODE_SMELL | MAJOR | extension/fiber.js:329 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 9d396a94-7eef-4085-b9bd-716516fc1d48 |
| 2223 | CODE_SMELL | MAJOR | extension/fiber.js:331 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 0c3d5a38-3bf1-4f3f-a625-425d884d9013 |
| 2224 | CODE_SMELL | MAJOR | extension/fiber.js:331 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 5ec716dc-82f2-47d0-8d23-1fef236c98d6 |
| 2225 | CODE_SMELL | MAJOR | extension/fiber.js:2376 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 241cbe47-d6a8-45ce-b581-a8131f9045dc |
| 2226 | CODE_SMELL | MAJOR | scripts/benchmark-mcp-latency.mjs:50 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | a06f9882-d37c-4033-9af6-52c8e334cdf7 |
| 2227 | CODE_SMELL | MINOR | scripts/benchmark-mcp-latency.mjs:119 | javascript:S7735 | Unexpected negated condition. | ea9f0f8e-f971-4fd4-8320-1505f45aa7b2 |
| 2228 | CODE_SMELL | CRITICAL | scripts/benchmark-mcp-latency.mjs:121 | javascript:S3735 | Remove this use of the "void" operator. | 62c24f8e-976c-4174-ae26-55b235b58e3f |
| 2229 | CODE_SMELL | CRITICAL | scripts/benchmark-mcp-latency.mjs:133 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 21 to the 15 allowed. | ebe5ccba-d187-4e26-8ac3-b6dc439505dc |
| 2230 | CODE_SMELL | MAJOR | scripts/benchmark-mcp-latency.mjs:178 | javascript:S7785 | Prefer top-level await over using a promise chain. | 5d9b5d35-b11d-434c-bc93-4f2a90386e02 |
| 2231 | CODE_SMELL | MINOR | scripts/smoke-windows-desktop.mjs:45 | javascript:S7780 | `String.raw` should be used to avoid escaping `\`. | 429369c0-a826-41dd-a4f3-a7fd322c8229 |
| 2232 | CODE_SMELL | MINOR | scripts/smoke-windows-desktop.mjs:226 | javascript:S7735 | Unexpected negated condition. | 0da624bd-f3fe-4c36-a969-bbf24f975a88 |
| 2233 | CODE_SMELL | MINOR | scripts/verify-composer-layout.cjs:16 | javascript:S7780 | `String.raw` should be used to avoid escaping `\`. | 8ae08729-4088-474b-893a-a0321c4b6f10 |
| 2234 | CODE_SMELL | MINOR | scripts/verify-tool-scroll.cjs:19 | javascript:S7780 | `String.raw` should be used to avoid escaping `\`. | a36be8d5-333e-4340-91f0-4996110d0e63 |
| 2235 | CODE_SMELL | MINOR | scripts/verify-tool-scroll.cjs:78 | javascript:S7780 | `String.raw` should be used to avoid escaping `\`. | 8d522dea-8f7b-428e-8c0e-37211e3d68a3 |
| 2236 | CODE_SMELL | MINOR | scripts/verify-windows-capture-border.mjs:68 | javascript:S6594 | Use the "RegExp.exec()" method instead. | c384fa42-ec56-49f7-9ced-7b8c71a24a11 |
| 2237 | CODE_SMELL | MAJOR | src/main/agents.ts:1745 | typescript:S4624 | Refactor this code to not use nested template literals. | f226250f-f35e-4f7e-8a20-4015641c46ca |
| 2238 | CODE_SMELL | MINOR | src/main/bridge.ts:3065 | typescript:S4325 | This assertion is unnecessary since it does not change the type of the expression. | 8d5f69ad-38d8-4b0e-b07d-20c997a9715d |
| 2239 | CODE_SMELL | MINOR | src/main/bridge.ts:3065 | typescript:S4325 | This assertion is unnecessary since it does not change the type of the expression. | b266f5ef-ae17-48e9-ad50-139b38427eff |
| 2240 | BUG | CRITICAL | src/main/bridge.ts:8100 | typescript:S2871 | Provide a compare function that depends on "String.localeCompare", to reliably sort elements alphabetically. | def07e61-a009-4237-bd63-714621e715a5 |
| 2241 | BUG | CRITICAL | src/main/bridge.ts:8103 | typescript:S2871 | Provide a compare function that depends on "String.localeCompare", to reliably sort elements alphabetically. | 35484274-3ab4-4eff-a576-8aabb7f1adce |
| 2242 | CODE_SMELL | CRITICAL | src/main/bridge.ts:10270 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 34 to the 15 allowed. | 117da471-090a-48a7-8141-1a4dff4d1b2e |
| 2243 | CODE_SMELL | MINOR | src/main/codex/command-batch.ts:175 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | 71c3bada-af15-4f14-99a9-aee24885bd99 |
| 2244 | CODE_SMELL | MINOR | src/main/codex/ownership.ts:270 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | c7bc16ad-8f71-41cd-9e9b-1f41402379c0 |
| 2245 | CODE_SMELL | CRITICAL | src/main/codex/unified-exec.ts:1097 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | f7d0a339-a2ae-4c18-af34-c1b1b39d8a24 |
| 2246 | CODE_SMELL | CRITICAL | src/main/codex/unified-exec.ts:1198 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 32 to the 15 allowed. | 9763ac8a-b6ec-4bfc-a6dd-533110856018 |
| 2247 | CODE_SMELL | MAJOR | src/main/computer/index.ts:313 | typescript:S1121 | Extract the assignment of "runtime.scriptCleanup" from this expression. | f411e36c-c689-4314-bcdb-8a607111671c |
| 2248 | CODE_SMELL | MINOR | src/main/computer/index.ts:1066 | typescript:S4325 | This assertion is unnecessary since it does not change the type of the expression. | 06e9e96b-1ecf-4edb-97df-68cffb5cb509 |
| 2249 | CODE_SMELL | CRITICAL | src/main/computer/index.ts:1318 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 22 to the 15 allowed. | 19663eb2-1412-4c2f-88a3-53e54c7148e7 |
| 2250 | CODE_SMELL | CRITICAL | src/main/computer/index.ts:1452 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | 301788b0-04a8-4a50-aee5-d3cb4b9c3950 |
| 2251 | CODE_SMELL | CRITICAL | src/main/computer/index.ts:1576 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 92 to the 15 allowed. | da650212-6fbb-4414-beb4-bb97dc2632ad |
| 2252 | CODE_SMELL | CRITICAL | src/main/computer/index.ts:1688 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | e3ba70f1-2feb-4120-ab16-ca6aedfb0298 |
| 2253 | CODE_SMELL | CRITICAL | src/main/computer/index.ts:1774 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 37 to the 15 allowed. | e7cfedb9-5335-43f5-885c-ff32352f4568 |
| 2254 | CODE_SMELL | MINOR | src/main/computer/windows-api.ts:7 | typescript:S1874 | '(params?: unknown): ZodNumber' is deprecated. | 694ceb00-5ae8-4e19-933e-7fa87e164b24 |
| 2255 | CODE_SMELL | MINOR | src/main/computer/windows-api.ts:7 | typescript:S1874 | '(params?: unknown): ZodNumber' is deprecated. | e25e861a-b781-4331-bd8d-19dbf25b41a3 |
| 2256 | CODE_SMELL | MINOR | src/main/computer/windows-api.ts:8 | typescript:S1874 | '(params?: unknown): ZodNumber' is deprecated. | 75a426c5-ec98-4563-b032-575560692b31 |
| 2257 | CODE_SMELL | MINOR | src/main/computer/windows-api.ts:25 | typescript:S7763 | Use `export…from` to re-export `WINDOWS_API_METHODS`. | 6ad03eb9-c6ae-4429-b7ec-26f7a45b2cfa |
| 2258 | CODE_SMELL | MINOR | src/main/computer/windows-api.ts:65 | typescript:S7737 | Do not use an object literal as default for parameter `backend`. | 391a559f-3131-4918-b9e4-785bebd623fc |
| 2259 | CODE_SMELL | MAJOR | src/main/computer/windows-api.ts:75 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 2da024d1-a753-4875-b499-2b45cd511d65 |
| 2260 | CODE_SMELL | MAJOR | src/main/computer/windows-api.ts:86 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 284f145a-8ea7-42b3-ae8a-7f57a4aa7f38 |
| 2261 | CODE_SMELL | MINOR | src/main/computer/windows-api.ts:179 | typescript:S7735 | Unexpected negated condition. | 77d97178-0fa5-45ad-a0ef-e0f652344a13 |
| 2262 | CODE_SMELL | MINOR | src/main/ipc.ts:853 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | 0c5d113c-3307-4f9a-af61-461e2dbed6e8 |
| 2263 | CODE_SMELL | MAJOR | src/main/logger.ts:64 | typescript:S4624 | Refactor this code to not use nested template literals. | fe92dcea-28cc-4bde-8cee-03d986b97e66 |
| 2264 | CODE_SMELL | MINOR | src/main/mcp/code-mode-runtime.ts:155 | typescript:S7747 | `Promise.allSettled(…)` accepts iterable as argument, it's unnecessary to convert to an array. | cf3bc006-2866-4d69-b883-af508b90dc42 |
| 2265 | CODE_SMELL | MAJOR | src/main/mcp/instructions.ts:84 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 3ef00cf5-4c0f-469d-97b3-8d2ba08f40ea |
| 2266 | CODE_SMELL | MAJOR | src/main/mcp/instructions.ts:84 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 7e026e26-ebb9-4038-ba08-e1a61fe8e518 |
| 2267 | CODE_SMELL | MINOR | src/main/mcp/instructions.ts:221 | typescript:S7778 | Do not call `Array#push()` multiple times. | 74cee93f-a779-4ae5-9fed-2348b9d02078 |
| 2268 | CODE_SMELL | MAJOR | src/main/mcp/kernel.ts:1049 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 5973db0a-89f7-4c73-a702-6fa8b1f14d61 |
| 2269 | CODE_SMELL | MAJOR | src/main/mcp/tool-declarations.ts:24 | typescript:S1121 | Extract the assignment of "converted" from this expression. | afdcfe0d-c3de-4f59-89e3-0ece19d9eae6 |
| 2270 | CODE_SMELL | MAJOR | src/main/mcp/tool-declarations.ts:25 | typescript:S1121 | Extract the assignment of "converted[io]" from this expression. | 86b7be18-e59a-461f-b00a-b6908528351a |
| 2271 | CODE_SMELL | MAJOR | src/main/mcp/tool-declarations.ts:49 | typescript:S1121 | Extract the assignment of "adapter" from this expression. | ce7fff0a-33bf-48ed-987c-6669d09bfd9f |
| 2272 | CODE_SMELL | MAJOR | src/main/mcp/tools-core.ts:1539 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | c5438e40-2334-4618-8ee0-c421c3459a5b |
| 2273 | CODE_SMELL | CRITICAL | src/main/mcp/tools-desktop-macos.ts:242 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 43 to the 15 allowed. | d2b8b28f-79b8-4520-b901-c37a6c9a25a0 |
| 2274 | CODE_SMELL | CRITICAL | src/main/mcp/tools-desktop-macos.ts:414 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 25 to the 15 allowed. | fcd6ae57-bb02-4df8-9485-2f093098132b |
| 2275 | CODE_SMELL | CRITICAL | src/main/mcp/tools-desktop-macos.ts:462 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 34 to the 15 allowed. | 80befb14-ff5c-46d3-a27a-9e1f76ecf7ab |
| 2276 | CODE_SMELL | MAJOR | src/main/mcp/tools-desktop-macos.ts:533 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 9229c9d4-1e8d-4660-aef1-636fa44cba61 |
| 2277 | CODE_SMELL | MAJOR | src/main/mcp/tools-desktop-macos.ts:535 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 0333cdc0-a8a3-49b7-ad54-0704c10af4c7 |
| 2278 | CODE_SMELL | MAJOR | src/main/mcp/tools-desktop-macos.ts:563 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 2478aa8c-8986-4cf5-b758-f6f81ba0f66e |
| 2279 | CODE_SMELL | MAJOR | src/main/mcp/tools-desktop-macos.ts:592 | typescript:S4624 | Refactor this code to not use nested template literals. | 85553a36-c06d-409b-87b2-37795be0318e |
| 2280 | CODE_SMELL | MINOR | src/main/mcp/tools-desktop-windows.ts:57 | typescript:S6606 | Prefer using nullish coalescing operator (`??=`) instead of an assignment expression, as it is simpler to read. | 65c5f7a9-5e3c-4ac4-b122-2e24527adc70 |
| 2281 | CODE_SMELL | MAJOR | src/main/plugins/manager.ts:117 | typescript:S1121 | Extract the assignment of "this.exposureCache" from this expression. | b0eb6fa3-f308-4dea-b4d8-65f24d48360a |
| 2282 | CODE_SMELL | CRITICAL | src/main/plugins/manager.ts:611 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 70 to the 15 allowed. | 3d0302d2-f10c-4025-895e-d067209393b3 |
| 2283 | CODE_SMELL | MINOR | src/main/projects.ts:75 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | 07895452-4ea9-4601-819d-5d282cea637d |
| 2284 | CODE_SMELL | MINOR | src/main/redaction.ts:7 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 956ef9ed-bc0a-46f8-8b36-7f51027190e4 |
| 2285 | CODE_SMELL | MAJOR | src/main/session/input.ts:230 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | c3fa3a16-5cd3-45c2-8350-df75ce558b0d |
| 2286 | CODE_SMELL | MAJOR | src/main/session/input.ts:748 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 0bdc3249-cbcf-4685-acde-72117624d48e |
| 2287 | CODE_SMELL | MAJOR | src/main/session/input.ts:748 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 0f1f3600-50f7-4c0c-ac96-713bf4fd672c |
| 2288 | CODE_SMELL | MAJOR | src/main/session/input.ts:1512 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 217ab11a-5a18-4135-8ee0-c72645f3733e |
| 2289 | CODE_SMELL | MAJOR | src/main/session/prompt.ts:51 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | a9e5bf9f-557b-4e4b-8984-f8e7ef0bc8a6 |
| 2290 | CODE_SMELL | MAJOR | src/main/session/recorder.ts:429 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | feeecf4f-d40a-4368-8998-ee5bf8668dff |
| 2291 | CODE_SMELL | MAJOR | src/main/session/recorder.ts:547 | typescript:S4043 | Move this array "sort" operation to a separate statement or replace it with "toSorted". | 26b70795-ad43-463a-a2c7-9b28328e2741 |
| 2292 | CODE_SMELL | MINOR | src/main/session/recorder.ts:1280 | typescript:S7747 | `Promise.all(…)` accepts iterable as argument, it's unnecessary to convert to an array. | ce861527-316b-4a56-a6fa-620fc873a491 |
| 2293 | CODE_SMELL | MINOR | src/main/session/recorder.ts:1973 | typescript:S7735 | Unexpected negated condition. | a9dd5c2d-0908-44ec-a9c0-d93293ed187d |
| 2294 | CODE_SMELL | MINOR | src/main/session/store.ts:1231 | typescript:S7755 | Prefer `.at(…)` over `[….length - index]`. | 0a3325dc-8be3-4239-a46a-b7847fb251b4 |
| 2295 | CODE_SMELL | CRITICAL | src/main/session/store.ts:2260 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | 9230c515-bcbf-49da-aad2-541b665ae1d2 |
| 2296 | CODE_SMELL | CRITICAL | src/renderer/agent-plan.ts:6 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 23 to the 15 allowed. | 3b570ca2-9439-4f8d-a9ab-e07e1eaba398 |
| 2297 | CODE_SMELL | MAJOR | src/renderer/agent-plan.ts:50 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 4040fe3c-b220-4c02-b666-9f50b56f7c97 |
| 2298 | CODE_SMELL | MAJOR | src/renderer/chat-models.ts:401 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 4c400c07-ffd7-4cdc-bb62-32c1998f1e9a |
| 2299 | CODE_SMELL | MAJOR | src/renderer/chat.ts:1270 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 2057b336-a546-40d9-a3d2-30e68f355844 |
| 2300 | CODE_SMELL | MAJOR | src/renderer/chat.ts:1276 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 0d71e5c5-7468-4edc-84f4-4c235f1d6a3a |
| 2301 | CODE_SMELL | MAJOR | src/renderer/chat.ts:1276 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | b7a3baae-42de-4f0f-b107-06993dfdfeac |
| 2302 | CODE_SMELL | MAJOR | src/renderer/chat.ts:1430 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 969e9f5f-5c73-433b-8e71-1a28ad57edbb |
| 2303 | CODE_SMELL | MAJOR | src/renderer/chat.ts:1489 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 39ab0f23-059c-481b-ba9e-4ed0eec1a279 |
| 2304 | CODE_SMELL | MAJOR | src/renderer/chat.ts:1604 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 122ee28f-6d36-450f-8fce-f752cf5161b1 |
| 2305 | CODE_SMELL | MAJOR | src/renderer/chat.ts:1604 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 1e440596-8889-48b0-98eb-bb24099cc6d6 |
| 2306 | CODE_SMELL | CRITICAL | src/renderer/chat.ts:3136 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 56 to the 15 allowed. | 896bde4a-c5b0-484b-b7f8-f4a206dd7380 |
| 2307 | CODE_SMELL | MAJOR | src/renderer/chat.ts:3244 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 00e968a1-c341-4e20-ac7d-559148b97714 |
| 2308 | CODE_SMELL | MINOR | src/renderer/chat.ts:4768 | typescript:S7735 | Unexpected negated condition. | f2ea6a46-1f51-488e-9eb8-d9ec317a833e |
| 2309 | CODE_SMELL | MAJOR | src/renderer/chat.ts:4770 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 92579d9c-3d6f-4353-a211-3798f70ab5a0 |
| 2310 | CODE_SMELL | MINOR | src/renderer/chat.ts:4778 | typescript:S7735 | Unexpected negated condition. | 380caa68-3bd4-4738-9f94-7207b82ec990 |
| 2311 | CODE_SMELL | MAJOR | src/renderer/chat.ts:4780 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 7ed7f4e9-621a-4033-ab7e-b2800d66dc07 |
| 2312 | CODE_SMELL | MINOR | src/renderer/chat.ts:5040 | typescript:S7735 | Unexpected negated condition. | 10879b8f-1cea-4d62-997c-b84ca9a6130f |
| 2313 | CODE_SMELL | MAJOR | src/renderer/chat.ts:5046 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | c56232f6-cc7b-45e3-b8aa-66199e159fee |
| 2314 | CODE_SMELL | MAJOR | src/renderer/chat.ts:5048 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 2b164fa8-6633-42ab-adea-eaa0bfdbb814 |
| 2315 | CODE_SMELL | MAJOR | src/renderer/chat.ts:5050 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 198dcd49-9564-4421-babf-d224315b5b69 |
| 2316 | CODE_SMELL | MAJOR | src/renderer/chat.ts:5501 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | b298849a-440f-4cf8-ada5-a71184b15a8d |
| 2317 | CODE_SMELL | MINOR | src/renderer/i18n.ts:67 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | d27f4d04-69b9-4277-910b-30d4627e9f77 |
| 2318 | CODE_SMELL | MAJOR | src/renderer/i18n.ts:86 | typescript:S1121 | Extract the assignment of "properties" from this expression. | 10764c4f-c65e-4fcc-b40f-24cd3935c35a |
| 2319 | CODE_SMELL | MINOR | src/renderer/i18n.ts:100 | typescript:S7764 | Prefer `globalThis` over `window`. | e5b6a72e-ee92-4750-900a-f576052f8529 |
| 2320 | CODE_SMELL | MINOR | src/renderer/i18n.ts:140 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | a7b494f9-17d8-4c6a-a25c-04ce371a11a1 |
| 2321 | CODE_SMELL | MAJOR | src/renderer/index.html:180 | Web:S6819 | Use &lt;output&gt; instead of the status role to ensure accessibility across all devices. | 25fb661a-cf4b-4cf9-96ba-6da6ddfd7bca |
| 2322 | CODE_SMELL | MAJOR | src/renderer/index.html:488 | Web:S6819 | Use &lt;address&gt; or &lt;details&gt; or &lt;fieldset&gt; or &lt;optgroup&gt; instead of the group role to ensure accessibility across all devices. | 05002a00-8a4a-4c1c-8002-0e14d85d204e |
| 2323 | CODE_SMELL | MAJOR | src/renderer/main.ts:562 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 73e3946e-2afa-4e70-b481-c210dd7253ae |
| 2324 | CODE_SMELL | MAJOR | src/renderer/main.ts:564 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 4ebaef18-b4c2-48ff-89ec-f9de17c45839 |
| 2325 | CODE_SMELL | MAJOR | src/renderer/main.ts:565 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 83baad91-c3b1-403a-8191-263f92198d05 |
| 2326 | CODE_SMELL | CRITICAL | src/renderer/main.ts:1057 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 34 to the 15 allowed. | 5543ba9f-256f-4037-a6b6-2754cd12916e |
| 2327 | CODE_SMELL | MAJOR | src/renderer/main.ts:1080 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | a928c643-fba3-4d2f-8c92-d382e41ee2e8 |
| 2328 | CODE_SMELL | MAJOR | src/renderer/main.ts:1082 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | f4d11328-514e-451e-b09b-49edfaf8d76b |
| 2329 | CODE_SMELL | MAJOR | src/renderer/main.ts:1084 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 1b3f5a5f-e3dd-4af6-ac8d-bca8d1d94f19 |
| 2330 | CODE_SMELL | MAJOR | src/renderer/main.ts:1107 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 2099440c-b1b0-4cca-8312-3cd3df3ba20e |
| 2331 | CODE_SMELL | MAJOR | src/renderer/main.ts:1388 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | a0ef881d-c711-4cc2-b52d-58aa3acd4375 |
| 2332 | CODE_SMELL | MINOR | src/renderer/main.ts:1569 | typescript:S7735 | Unexpected negated condition. | 2afcb4f7-ec26-4aa1-8620-4a8baa1cea10 |
| 2333 | CODE_SMELL | MAJOR | src/renderer/main.ts:1571 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | ba7cf7ba-4ad6-4840-a09a-6959f8a8a019 |
| 2334 | CODE_SMELL | MINOR | src/renderer/main.ts:1712 | typescript:S7735 | Unexpected negated condition. | 6c92b757-9524-4838-bc31-0126643eeee6 |
| 2335 | CODE_SMELL | MAJOR | src/renderer/main.ts:1714 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 6eea25df-5377-4a30-b2b8-6a45fd5463cc |
| 2336 | CODE_SMELL | MINOR | src/renderer/main.ts:1864 | typescript:S7778 | Do not call `Array#push()` multiple times. | a777d09c-060e-4891-add8-aa9f83875cf8 |
| 2337 | CODE_SMELL | MAJOR | src/renderer/plugins.ts:76 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 3d78c1d3-7aed-454a-91fb-b36fe259a109 |
| 2338 | CODE_SMELL | MAJOR | src/renderer/plugins.ts:77 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | ce0321a5-b577-4845-8334-5f85cd8698eb |
| 2339 | CODE_SMELL | MINOR | src/renderer/plugins.ts:94 | typescript:S7764 | Prefer `globalThis` over `window`. | cadca349-dda7-4105-89ee-05e8642e17df |
| 2340 | CODE_SMELL | MINOR | src/renderer/plugins.ts:99 | typescript:S7764 | Prefer `globalThis` over `window`. | 415e20c3-4aa2-41eb-8fb3-edd72209668e |
| 2341 | CODE_SMELL | CRITICAL | src/renderer/plugins.ts:129 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 23 to the 15 allowed. | 5788fc78-6c4b-4047-ba15-ab81cfd7faf7 |
| 2342 | CODE_SMELL | MAJOR | src/renderer/plugins.ts:139 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 34b525b9-9c7b-4ede-b72f-8bd09e7e47d8 |
| 2343 | CODE_SMELL | CRITICAL | src/renderer/plugins.ts:146 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 29 to the 15 allowed. | 2000279e-a345-419a-858a-097ed8f7080c |
| 2344 | CODE_SMELL | MAJOR | src/renderer/plugins.ts:146 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 49d1225f-bb69-4482-9075-0a28d5dc1450 |
| 2345 | CODE_SMELL | MAJOR | src/renderer/plugins.ts:146 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 520bb98b-f026-4042-97ba-be23b7a8864c |
| 2346 | CODE_SMELL | MAJOR | src/renderer/plugins.ts:146 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 74938f13-7fcc-41da-bd13-feb31688e415 |
| 2347 | CODE_SMELL | MAJOR | src/renderer/plugins.ts:146 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 9bbfef84-3f42-48e2-8899-e532404693d5 |
| 2348 | CODE_SMELL | MAJOR | src/renderer/plugins.ts:146 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | d3f64861-a3e4-4cda-935b-376a32627809 |
| 2349 | CODE_SMELL | MAJOR | src/renderer/plugins.ts:146 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | f24a57f8-35c9-4783-b2f0-f839559d643d |
| 2350 | CODE_SMELL | MAJOR | src/renderer/plugins.ts:149 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 3afbee0b-6a0b-40eb-81b7-9674fa453f74 |
| 2351 | CODE_SMELL | MINOR | src/renderer/plugins.ts:156 | typescript:S7764 | Prefer `globalThis` over `window`. | 4475dceb-6569-44eb-affe-455e068e38f7 |
| 2352 | CODE_SMELL | MINOR | src/renderer/plugins.ts:156 | typescript:S7764 | Prefer `globalThis` over `window`. | 927f9614-7bd3-453a-9523-19c57fa141d1 |
| 2353 | CODE_SMELL | MINOR | src/renderer/plugins.ts:156 | typescript:S7764 | Prefer `globalThis` over `window`. | b4c38604-8a41-4f9b-9c6b-27cec98b6a36 |
| 2354 | CODE_SMELL | MINOR | src/renderer/plugins.ts:196 | typescript:S7764 | Prefer `globalThis` over `window`. | 02923946-f504-4e7b-9b48-74cb8f0d7d20 |
| 2355 | CODE_SMELL | MINOR | src/renderer/plugins.ts:197 | typescript:S7764 | Prefer `globalThis` over `window`. | 68cefbe5-2071-4c73-9b5c-a04116091d44 |
| 2356 | CODE_SMELL | MINOR | src/renderer/plugins.ts:223 | typescript:S7764 | Prefer `globalThis` over `window`. | 11120033-ab52-4dc5-9102-7a082344409f |
| 2357 | CODE_SMELL | MINOR | src/renderer/plugins.ts:223 | typescript:S4325 | This assertion is unnecessary since it does not change the type of the expression. | 2cfbd684-106d-42b7-ae7b-11ba101af912 |
| 2358 | CODE_SMELL | MINOR | src/renderer/plugins.ts:228 | typescript:S7764 | Prefer `globalThis` over `window`. | 6e62e88a-89f4-47ee-bbbb-a41dedd6f3e6 |
| 2359 | CODE_SMELL | MINOR | src/renderer/plugins.ts:255 | typescript:S7764 | Prefer `globalThis` over `window`. | 38a66c71-d3e3-4d9b-b85c-42723a6da417 |
| 2360 | CODE_SMELL | MAJOR | src/renderer/plugins.ts:266 | typescript:S2681 | This statement will not be executed in a loop; only the first statement will be. The rest will execute only once. | 1be88c0e-9faf-4dde-947a-4cc1cc3212ab |
| 2361 | CODE_SMELL | MINOR | src/renderer/plugins.ts:266 | typescript:S7764 | Prefer `globalThis` over `window`. | 48a3df26-591b-4738-9415-8b32e5c8358d |
| 2362 | CODE_SMELL | MINOR | src/shared/agent-plan.ts:16 | typescript:S1874 | '(params?: unknown): ZodNumber' is deprecated. | 8642b858-8153-47ab-b087-8bb8af661506 |
| 2363 | CODE_SMELL | MINOR | src/shared/user-prompt.ts:50 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 3bd39b1d-0849-4263-bb31-23e2eb58ea34 |
| 2364 | CODE_SMELL | MINOR | src/shared/user-prompt.ts:51 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 908e96c4-13fc-4d6b-a5b6-45ff0b665a1c |
| 2365 | CODE_SMELL | MAJOR | src/main/bridge.ts:3451 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 27156a87-4e3e-42f6-a27f-3d90c5ed3c89 |
| 2366 | CODE_SMELL | MINOR | extension/background.js:317 | javascript:S7744 | The empty object is useless. | 9fbeb61c-4681-445b-ab7c-52f756e97610 |
| 2367 | CODE_SMELL | MINOR | extension/background.js:317 | javascript:S7744 | The empty object is useless. | dc81efbf-9167-4ffb-bd1b-f0640e662d12 |
| 2368 | CODE_SMELL | CRITICAL | extension/background.js:1342 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 30 to the 15 allowed. | ae9e4b56-01da-4b9d-9351-fc55139129b4 |
| 2369 | CODE_SMELL | MAJOR | extension/background.js:2065 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | b4ba285b-b244-45a3-bc3e-4cdaec1ba2a9 |
| 2370 | CODE_SMELL | CRITICAL | extension/background.js:3244 | javascript:S3735 | Remove this use of the "void" operator. | 8455100c-cab7-4ac9-82c9-eb0fe6f00719 |
| 2371 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2762 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 15118610-9252-4220-984a-462160096d5b |
| 2372 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2772 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 9edccf46-0e84-44b7-969f-6465c004ef9e |
| 2373 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2956 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 15bee5c3-a281-4094-9409-c26ff3da987f |
| 2374 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2957 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | b37c6f9c-4324-4862-b8fc-3abe912c25de |
| 2375 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2968 | javascript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | 35fd9fa4-f06b-412e-82da-4f28dc57a598 |
| 2376 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:3216 | javascript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | 298cd1d7-7b0b-4f06-a0ff-4e8a6b466078 |
| 2377 | CODE_SMELL | MINOR | extension/content.js:906 | javascript:S7735 | Unexpected negated condition. | b1fb7151-2cb5-4987-9f07-94a69f2aae23 |
| 2378 | CODE_SMELL | MAJOR | scripts/generate-third-party-notices.mjs:40 | javascript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | 3c8d0f02-7b3e-4ecc-926a-309a947964fb |
| 2379 | CODE_SMELL | MAJOR | scripts/generate-third-party-notices.mjs:45 | javascript:S7721 | Move async function 'walk' to the outer scope. | c60c3024-efa3-4886-bd5a-7aaed9c74558 |
| 2380 | CODE_SMELL | MINOR | src/main/bridge.ts:5582 | typescript:S7747 | `Promise.allSettled(…)` accepts iterable as argument, it's unnecessary to convert to an array. | 20605689-75e7-4191-8eee-69e3f445ae53 |
| 2381 | CODE_SMELL | MINOR | src/main/bridge.ts:5591 | typescript:S7747 | `Promise.allSettled(…)` accepts iterable as argument, it's unnecessary to convert to an array. | 0afe0e88-8cab-4016-b46b-59c315d10df1 |
| 2382 | CODE_SMELL | MAJOR | src/main/browser.ts:57 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 17b29d7d-a92b-4f4e-b889-ea294979c573 |
| 2383 | CODE_SMELL | MAJOR | src/main/browser.ts:59 | typescript:S5843 | Simplify this regular expression to reduce its complexity from 28 to the 20 allowed. | b25763cb-5361-46af-bb0d-6099954d9784 |
| 2384 | CODE_SMELL | MINOR | src/main/chat-models.ts:47 | typescript:S1874 | '(params?: unknown): ZodNumber' is deprecated. | 02398d5b-75a3-4311-8e94-5b6fadc021fd |
| 2385 | CODE_SMELL | MAJOR | src/main/mcp/kernel.ts:629 | typescript:S107 | Async function 'dispatch' has too many parameters (8). Maximum allowed is 7. | 445b65d2-c7b9-4eec-a1d3-1ee0afc47830 |
| 2386 | CODE_SMELL | CRITICAL | src/main/plugins/exposure.ts:17 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | aacf8a31-cc27-42a4-8136-d7c1cbfe676f |
| 2387 | CODE_SMELL | MAJOR | src/main/plugins/exposure.ts:26 | typescript:S1121 | Extract the assignment of "row" from this expression. | 42bf8bf0-bd72-48d1-901f-5e7591c9e2ce |
| 2388 | CODE_SMELL | CRITICAL | src/main/plugins/installer.ts:56 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 31 to the 15 allowed. | aa9c8a18-a031-44eb-881a-6fc06c34c348 |
| 2389 | CODE_SMELL | MAJOR | src/main/plugins/installer.ts:113 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | a85f0b85-4e91-4d57-86a5-a512fc5f338a |
| 2390 | CODE_SMELL | CRITICAL | src/main/plugins/installer.ts:181 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 42 to the 15 allowed. | 774a42f8-cf33-47b9-ab98-edca181d6d72 |
| 2391 | CODE_SMELL | MINOR | src/main/plugins/installer.ts:188 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | d8469d16-f6a7-46c5-8c1e-081c991deb39 |
| 2392 | CODE_SMELL | MINOR | src/main/plugins/installer.ts:193 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 68afb01d-ddae-4b24-8dc8-4fc2932c4375 |
| 2393 | CODE_SMELL | MAJOR | src/main/plugins/manager.ts:63 | typescript:S2933 | Member 'openAuthorization: (url: URL) =&gt; Promise&lt;void&gt;' is never reassigned; mark it as `readonly`. | 2896052f-2d48-45fe-b84b-76403435d11c |
| 2394 | CODE_SMELL | CRITICAL | src/main/plugins/manager.ts:64 | typescript:S7059 | Refactor this asynchronous operation outside of the constructor. | afebbaec-0a20-4df3-8fab-bf96ecb1b93a |
| 2395 | CODE_SMELL | MAJOR | src/main/plugins/manager.ts:68 | typescript:S2933 | Member 'live' is never reassigned; mark it as `readonly`. | 4b3e10be-d3a5-4e14-aa18-bd8884c377a3 |
| 2396 | CODE_SMELL | MAJOR | src/main/plugins/manager.ts:69 | typescript:S2933 | Member 'listeners' is never reassigned; mark it as `readonly`. | f1930bae-eed3-4660-a2f3-61dfd28fd541 |
| 2397 | CODE_SMELL | MAJOR | src/main/plugins/manager.ts:70 | typescript:S2933 | Member 'queues' is never reassigned; mark it as `readonly`. | 01ab426b-d757-48d6-9f8e-3a6ffc1d3c01 |
| 2398 | CODE_SMELL | MAJOR | src/main/plugins/manager.ts:71 | typescript:S2933 | Member 'starting' is never reassigned; mark it as `readonly`. | b66c4979-d760-4304-b560-b1b880edd542 |
| 2399 | CODE_SMELL | MAJOR | src/main/plugins/manager.ts:72 | typescript:S2933 | Member 'secretValues' is never reassigned; mark it as `readonly`. | 8e3a98aa-3f20-4a52-84ad-6e0341c68de3 |
| 2400 | CODE_SMELL | MAJOR | src/main/plugins/manager.ts:76 | typescript:S2933 | Member 'connecting' is never reassigned; mark it as `readonly`. | 464aa638-a3c5-428b-86bc-fa69c529c3ba |
| 2401 | CODE_SMELL | MAJOR | src/main/plugins/manager.ts:77 | typescript:S2933 | Member 'authenticating' is never reassigned; mark it as `readonly`. | 3007e6f9-a5c6-4185-acc9-77cdd51bccdf |
| 2402 | CODE_SMELL | CRITICAL | src/main/plugins/manager.ts:273 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | 1495d51d-d424-4b46-81ab-a72de2a6610d |
| 2403 | CODE_SMELL | MAJOR | src/main/plugins/manager.ts:491 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 0ec3d89e-1e25-42c8-8f47-a74ce2ef625a |
| 2404 | CODE_SMELL | MINOR | src/main/plugins/manager.ts:491 | typescript:S7735 | Unexpected negated condition. | adf4041c-bc68-4d9b-aa5f-b6f612f8b4ab |
| 2405 | CODE_SMELL | CRITICAL | src/main/plugins/manager.ts:510 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | 6464aa4d-fd7b-4122-b850-72eaa09f66c2 |
| 2406 | CODE_SMELL | MAJOR | src/main/plugins/manager.ts:526 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | ff3451bf-c7ec-44e9-b7dc-a0d93a09b8ce |
| 2407 | CODE_SMELL | MINOR | src/main/plugins/manager.ts:596 | typescript:S3626 | Remove this redundant jump. | dcf9e3ef-de96-4a75-bf2c-24f3cd0895b3 |
| 2408 | CODE_SMELL | MAJOR | src/main/plugins/manager.ts:784 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | e8575960-71dc-4d4a-8840-c80981e28a28 |
| 2409 | CODE_SMELL | MAJOR | src/main/plugins/manager.ts:814 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | b033e3e8-56cc-4446-9ca8-141d18d48724 |
| 2410 | CODE_SMELL | MAJOR | src/main/plugins/manager.ts:818 | typescript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | 2c6dcfc6-fa4c-4768-9c66-cefe35012bd8 |
| 2411 | CODE_SMELL | MAJOR | src/main/plugins/manager.ts:875 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 0f640d38-c171-405d-907f-caa730e621f9 |
| 2412 | CODE_SMELL | MAJOR | src/main/plugins/oauth.ts:34 | typescript:S2933 | Member 'controller' is never reassigned; mark it as `readonly`. | 4ab8e6b6-e399-431c-aa13-72eb3e4f840e |
| 2413 | CODE_SMELL | MAJOR | src/main/plugins/oauth.ts:35 | typescript:S2933 | Member 'unlink' is never reassigned; mark it as `readonly`. | 067ccf03-399d-4ea8-95e3-e4dc19e68040 |
| 2414 | CODE_SMELL | MAJOR | src/main/plugins/oauth.ts:38 | typescript:S2933 | Member 'endpoint: URL' is never reassigned; mark it as `readonly`. | 2d518403-8373-4bcd-b817-ba3f147961d2 |
| 2415 | CODE_SMELL | MAJOR | src/main/plugins/oauth.ts:38 | typescript:S2933 | Member 'id: string' is never reassigned; mark it as `readonly`. | 49baf47c-5931-4071-9997-7e3ef85910fe |
| 2416 | CODE_SMELL | MAJOR | src/main/plugins/oauth.ts:39 | typescript:S2933 | Member 'secret: (value: string) =&gt; void' is never reassigned; mark it as `readonly`. | 3c8982f2-1498-4969-9f7c-cf5497682016 |
| 2417 | CODE_SMELL | CRITICAL | src/main/plugins/oauth.ts:58 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | d71d1385-a032-4678-aad4-9ca75d10a656 |
| 2418 | CODE_SMELL | MAJOR | src/main/plugins/oauth.ts:97 | typescript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | ef9fd4b5-445e-4016-887e-59ec2349bede |
| 2419 | CODE_SMELL | MAJOR | src/main/plugins/oauth.ts:119 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | dfcfead9-5a66-4999-8926-d45d151aa707 |
| 2420 | CODE_SMELL | MAJOR | src/main/plugins/oauth.ts:133 | typescript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | c7cb03f4-ef5f-4387-961d-6b3c72893a3b |
| 2421 | CODE_SMELL | MAJOR | src/main/plugins/oauth.ts:134 | typescript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | 7d2502f1-dfe0-49cd-ba96-d9080cedf0ae |
| 2422 | CODE_SMELL | MAJOR | src/main/session/input-history.ts:66 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | eb18e601-0f09-4ad1-96c8-bffe93c500ad |
| 2423 | CODE_SMELL | MAJOR | src/main/session/input.ts:612 | typescript:S4624 | Refactor this code to not use nested template literals. | 6ea16211-354f-4c36-85eb-082b68e5cee3 |
| 2424 | CODE_SMELL | MAJOR | src/main/session/store.ts:2567 | typescript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | 70bbcf04-46d0-4318-b458-bfa13f0fdc15 |
| 2425 | CODE_SMELL | MINOR | src/renderer/chat-models.ts:450 | typescript:S7764 | Prefer `globalThis` over `window`. | 891392b4-3105-4405-a545-e386741b2b55 |
| 2426 | CODE_SMELL | MINOR | src/renderer/chat-models.ts:500 | typescript:S7764 | Prefer `globalThis` over `window`. | 242cb0f5-e2cd-432b-9c08-be3d2773b0e8 |
| 2427 | CODE_SMELL | MINOR | src/renderer/chat-models.ts:502 | typescript:S7764 | Prefer `globalThis` over `window`. | 93d277df-025d-4dfe-92dd-250d920d6c1c |
| 2428 | CODE_SMELL | MINOR | src/renderer/chat.ts:1802 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 1903e75e-b728-47fc-bec8-24896a1438ac |
| 2429 | CODE_SMELL | MAJOR | src/renderer/chat.ts:1836 | typescript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | d9db7336-5de6-4ca2-8941-d1d44efd98fe |
| 2430 | CODE_SMELL | MAJOR | src/renderer/chat.ts:1837 | typescript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 04b6a149-66c9-4a1b-89dd-5f1946516b7d |
| 2431 | CODE_SMELL | MINOR | src/renderer/chat.ts:1841 | typescript:S6594 | Use the "RegExp.exec()" method instead. | 30d7733a-afa8-4534-a53c-1e5678182f37 |
| 2432 | CODE_SMELL | MINOR | src/renderer/chat.ts:2102 | typescript:S6594 | Use the "RegExp.exec()" method instead. | 83342890-c971-45a9-ad6b-c15a592433c4 |
| 2433 | CODE_SMELL | MINOR | src/renderer/chat.ts:2102 | typescript:S6594 | Use the "RegExp.exec()" method instead. | fdd9287d-ee9d-4050-9b86-5a2863568d01 |
| 2434 | CODE_SMELL | MINOR | src/renderer/chat.ts:2104 | typescript:S6594 | Use the "RegExp.exec()" method instead. | e6c285f6-3cc5-4ee7-b184-c244a653fa7c |
| 2435 | CODE_SMELL | MINOR | src/renderer/chat.ts:6163 | typescript:S7764 | Prefer `globalThis` over `window`. | 6eeea556-bf03-4a06-ba18-db7ea64d4823 |
| 2436 | CODE_SMELL | MAJOR | src/renderer/index.html:42 | Web:S6845 | "tabIndex" should only be declared on interactive elements. | 63ef267b-d51c-4bb0-99ba-77725b8ca9d4 |
| 2437 | CODE_SMELL | MAJOR | src/renderer/index.html:42 | Web:S6819 | Use &lt;hr&gt; instead of the separator role to ensure accessibility across all devices. | c9f0542b-2b9b-47dc-8be4-1817db152afd |
| 2438 | CODE_SMELL | MAJOR | src/renderer/index.html:279 | Web:S6819 | Use &lt;output&gt; instead of the status role to ensure accessibility across all devices. | f9d32be2-e24b-45cb-9430-78df85ed256e |
| 2439 | CODE_SMELL | MAJOR | src/renderer/plugins.ts:39 | typescript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | a5d1c5df-1692-4d41-80a1-29d18ba0dd82 |
| 2440 | CODE_SMELL | MINOR | src/renderer/plugins.ts:49 | typescript:S7764 | Prefer `globalThis` over `window`. | db6cd22f-3fd9-45d5-90e6-55827451e493 |
| 2441 | CODE_SMELL | MINOR | src/renderer/plugins.ts:60 | typescript:S7764 | Prefer `globalThis` over `window`. | abf3ab16-b800-444f-a4e8-d29ed39fdd43 |
| 2442 | CODE_SMELL | MINOR | src/renderer/plugins.ts:121 | typescript:S7764 | Prefer `globalThis` over `window`. | e70c5122-efc8-4d09-822c-17a8942c1c02 |
| 2443 | CODE_SMELL | MAJOR | src/renderer/plugins.ts:122 | typescript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | 6fbea086-3fe5-470b-aa0d-c5234ba22108 |
| 2444 | CODE_SMELL | MINOR | src/renderer/plugins.ts:124 | typescript:S7764 | Prefer `globalThis` over `window`. | 2251f0d0-a3ae-43ea-9a96-5895e54eb0f8 |
| 2445 | CODE_SMELL | MINOR | src/renderer/plugins.ts:205 | typescript:S7764 | Prefer `globalThis` over `window`. | 4bed33db-b5ef-4659-bb49-c24fb0fc2ce2 |
| 2446 | CODE_SMELL | MINOR | src/renderer/plugins.ts:246 | typescript:S7764 | Prefer `globalThis` over `window`. | dc458e00-cfcf-4552-9a5c-323fd6c13755 |
| 2447 | CODE_SMELL | MINOR | src/renderer/plugins.ts:247 | typescript:S7735 | Unexpected negated condition. | 9c1ec6bd-86f9-4d13-a4f7-09e2c2ebe83d |
| 2448 | CODE_SMELL | MINOR | src/renderer/plugins.ts:277 | typescript:S7764 | Prefer `globalThis` over `window`. | 1da1043d-4144-4701-8862-753df56b825c |
| 2449 | CODE_SMELL | MINOR | src/renderer/plugins.ts:319 | typescript:S7764 | Prefer `globalThis` over `window`. | 4e24fd1f-e4dc-493a-892e-e708f609d2d0 |
| 2450 | CODE_SMELL | MINOR | src/renderer/plugins.ts:320 | typescript:S7764 | Prefer `globalThis` over `window`. | 82b190e1-385c-4f14-99dc-e33db2904c14 |
| 2451 | CODE_SMELL | MAJOR | src/shared/external-link.ts:3 | typescript:S5869 | Remove duplicates in this character class. | 20e8fa01-23bc-43ba-932d-bd9469c6b412 |
| 2452 | CODE_SMELL | MAJOR | src/main/browser.ts:64 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 9838cccd-0b10-4e5b-a153-3a46ddd4cb66 |
| 2453 | CODE_SMELL | CRITICAL | src/main/browser.ts:114 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 30 to the 15 allowed. | 80459900-4c77-4a64-8bbd-d8b796e17c73 |
| 2454 | CODE_SMELL | MAJOR | src/main/browser.ts:124 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 0e33d4d8-3da7-4cf6-a4ab-125a27076cf8 |
| 2455 | CODE_SMELL | MAJOR | src/main/browser.ts:140 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 0b52bc47-6723-4063-b02f-75009653fb23 |
| 2456 | CODE_SMELL | MAJOR | src/main/browser.ts:161 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | e85779e2-800b-4678-81c6-7cd10b4704c4 |
| 2457 | CODE_SMELL | MAJOR | src/main/browser.ts:260 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | a429371c-31f5-49e1-b6f5-5a78c82f1a10 |
| 2458 | CODE_SMELL | CRITICAL | extension/background.js:2388 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 17780626-5f49-4163-b575-ec793b93aa93 |
| 2459 | CODE_SMELL | CRITICAL | extension/background.js:3389 | javascript:S3735 | Remove this use of the "void" operator. | 899e4e60-cfa8-4ed0-895e-1e364f9a2125 |
| 2460 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:1928 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 31652c2e-093c-4555-a846-9eee9fbf6a99 |
| 2461 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:2682 | javascript:S7764 | Prefer `globalThis` over `window`. | d1930850-384c-4857-8565-9da7fde44d50 |
| 2462 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2693 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 47f9082d-b9e8-47e9-afb4-300e4133345f |
| 2463 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2694 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 9f04cde9-e7d6-4b14-8aa8-62cd37ea1b98 |
| 2464 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2756 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 76b9e7b7-8523-4a22-8eb0-aea8cb9651b0 |
| 2465 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:2793 | javascript:S7764 | Prefer `globalThis` over `window`. | 281b0b98-ec21-4ff6-99d2-c272ed84cb24 |
| 2466 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2800 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 2a76e04f-8508-4770-beec-7c7a7e8125c5 |
| 2467 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2803 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 2a2f651b-3817-420a-8a48-f64edfdc53f1 |
| 2468 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2803 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 8842ca7a-dbc6-4ddf-8668-1361e3761c46 |
| 2469 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2804 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 8d5bcb88-991c-4562-816e-79cd830af3b4 |
| 2470 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2804 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 994dfd04-65c7-42ad-88ae-f0d56830038d |
| 2471 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2847 | javascript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | 6535a491-5926-41fe-992c-f91d610e32e2 |
| 2472 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2847 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | ae790d5d-f17e-4ecf-ab83-ea484b8ca115 |
| 2473 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2848 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | b434bd50-1407-421c-9a66-10df7450e1d7 |
| 2474 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2853 | javascript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | d3c4ad10-2579-410e-80ed-4c7a67af5888 |
| 2475 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2859 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | c3095635-3493-48fb-aee3-e40db710befb |
| 2476 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2865 | javascript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | 01794db4-597d-4840-9ad9-e280277ea6ba |
| 2477 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2946 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 3e5c6354-f166-4ab4-b341-5542277c4a9b |
| 2478 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2946 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 58eb5b06-8418-4c71-9812-8a239f50d6fa |
| 2479 | CODE_SMELL | MAJOR | extension/content.js:824 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | f4aa69ad-d0a8-48fd-b72e-5e980a8decbc |
| 2480 | CODE_SMELL | MAJOR | extension/content.js:2385 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 5c137f62-5c27-41f8-9e65-5ae7b84b45b0 |
| 2481 | CODE_SMELL | CRITICAL | extension/content.js:4429 | javascript:S3735 | Remove this use of the "void" operator. | a44f704d-f8de-4eda-ad54-eac9193f8d32 |
| 2482 | CODE_SMELL | CRITICAL | extension/content.js:9138 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 31 to the 15 allowed. | fb0c849d-c102-4ecf-8012-73eb7394ce78 |
| 2483 | CODE_SMELL | MAJOR | extension/content.js:10028 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 2108cd9f-9983-41d5-b79a-23dc75cf1010 |
| 2484 | CODE_SMELL | MAJOR | extension/content.js:10238 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | a8aaf3aa-0bc3-45f6-808c-708de037c94f |
| 2485 | CODE_SMELL | MINOR | extension/content.js:11622 | javascript:S7750 | Prefer `.findLast(…)` over `.filter(…).at(-1)`. | 9c3ca7c0-9680-4293-9c24-6b1b45043d96 |
| 2486 | CODE_SMELL | MINOR | extension/content.js:11626 | javascript:S7750 | Prefer `.findLast(…)` over `.filter(…).at(-1)`. | 56c9f31e-0c96-4c4f-abba-b5728ad57561 |
| 2487 | CODE_SMELL | CRITICAL | extension/content.js:11626 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | ee5173e5-1ec8-4857-9955-e6265adea1e1 |
| 2488 | CODE_SMELL | MINOR | extension/content.js:12568 | javascript:S7758 | Prefer `String#codePointAt()` over `String#charCodeAt()`. | e20ddbfd-af36-4305-a6a0-cc093cbf605b |
| 2489 | CODE_SMELL | MINOR | extension/content.js:12586 | javascript:S7750 | Prefer `.findLast(…)` over `.filter(…).at(-1)`. | 7428e6a6-a9e9-43c1-9430-6b363ae5d93a |
| 2490 | CODE_SMELL | MINOR | extension/content.js:12685 | javascript:S7750 | Prefer `.findLast(…)` over `.filter(…).at(-1)`. | c5a37419-0e09-4e01-9251-d239a8c3a0be |
| 2491 | CODE_SMELL | MAJOR | extension/content.js:12727 | javascript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | 7b60597f-6151-4a64-8a7f-04272bae2f19 |
| 2492 | CODE_SMELL | MAJOR | extension/fiber.js:2307 | javascript:S7761 | Prefer `.dataset` over `removeAttribute(…)`. | 84727bc3-37b5-4d65-96c9-46ed358cf2db |
| 2493 | CODE_SMELL | MAJOR | extension/fiber.js:2322 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | 0f81a812-9366-4dd9-b629-a320ff998fe7 |
| 2494 | CODE_SMELL | MAJOR | extension/fiber.js:2636 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 4e10057e-4879-4b9e-83d3-179b242daf40 |
| 2495 | CODE_SMELL | MAJOR | extension/fiber.js:2645 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 10947231-7e19-42ab-a58f-6a475e8aaf24 |
| 2496 | CODE_SMELL | MAJOR | extension/fiber.js:2645 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | d985d48e-ac4f-4dae-9e40-3a5f768de9cb |
| 2497 | CODE_SMELL | MAJOR | src/main/bridge.ts:4220 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | d2e5ad72-52a8-4d0b-adf4-cc26b696a79e |
| 2498 | CODE_SMELL | MAJOR | src/main/bridge.ts:4223 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 0b8b26aa-fe3f-400f-b86e-e09cb135341c |
| 2499 | BUG | CRITICAL | src/main/bridge.ts:8096 | typescript:S2871 | Provide a compare function that depends on "String.localeCompare", to reliably sort elements alphabetically. | 982f4f20-b808-4d2f-8baf-62bff98eaca6 |
| 2500 | CODE_SMELL | MAJOR | src/main/browser.ts:67 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 913a6329-bfe9-488b-9518-14cfc358b0bb |
| 2501 | CODE_SMELL | MAJOR | src/main/chat-models.ts:98 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 9f99be0d-c85a-4462-b21f-37d2900b5d31 |
| 2502 | CODE_SMELL | MINOR | src/main/goal.ts:89 | typescript:S3863 | '../shared/types.js' imported multiple times. | 6953c022-2b6f-4fd9-93cb-032634e05726 |
| 2503 | CODE_SMELL | MAJOR | src/main/goal.ts:1218 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | ed63ce3f-c5d2-4bea-8b0c-5bfcbcb0f87b |
| 2504 | CODE_SMELL | MAJOR | src/main/goal.ts:2049 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | dcfc2e3b-748c-436a-b78a-c89e100fe320 |
| 2505 | CODE_SMELL | MAJOR | src/main/goal.ts:2914 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 3993f996-de1e-4909-94e0-34a77c954e11 |
| 2506 | CODE_SMELL | MAJOR | src/main/goal.ts:2915 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 23c0130f-2f88-4e5c-83e9-f9cebb4c6fc0 |
| 2507 | CODE_SMELL | MAJOR | src/main/ipc.ts:1034 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | bbcda76c-7d23-4de1-a35c-d42d060a662c |
| 2508 | CODE_SMELL | MINOR | src/main/mcp/artifact-download.ts:61 | typescript:S4325 | This assertion is unnecessary since it does not change the type of the expression. | a656a753-2beb-4491-a851-045b3de6bdc0 |
| 2509 | CODE_SMELL | CRITICAL | src/main/mcp/artifact-fetch.ts:90 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | 876b16a5-e137-47b0-8849-b6ad8e4b0126 |
| 2510 | CODE_SMELL | MAJOR | src/main/plugin-refresh.ts:179 | typescript:S4624 | Refactor this code to not use nested template literals. | c421b5a6-5c6e-4379-871e-7dd4a3a22e00 |
| 2511 | CODE_SMELL | MINOR | src/main/session/continuation.ts:858 | typescript:S7735 | Unexpected negated condition. | 2eb2306f-f8f5-4dba-b3df-6cd2a52cecd2 |
| 2512 | CODE_SMELL | MINOR | src/main/session/input-attachments.ts:13 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | 61bedb7c-2131-42d0-9c80-6e974dcb7cf3 |
| 2513 | CODE_SMELL | MINOR | src/main/session/input-attachments.ts:21 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | 3f2e251e-1564-4936-95f6-69cd3b14e8bb |
| 2514 | CODE_SMELL | MAJOR | src/main/session/input-attachments.ts:55 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | b62fe787-c5b6-4075-b15e-b049f525c639 |
| 2515 | CODE_SMELL | MAJOR | src/main/session/input-attachments.ts:59 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 21cacaef-ac03-4b00-9699-bc0adc262e1b |
| 2516 | CODE_SMELL | MINOR | src/main/task-request.ts:31 | typescript:S7737 | Do not use an object literal as default for parameter `limits`. | 63973ba0-ae09-47a2-91e3-d948df71c18e |
| 2517 | CODE_SMELL | MINOR | src/renderer/chat.ts:5085 | typescript:S7764 | Prefer `globalThis` over `window`. | 4a508ac7-5297-406c-8132-e393d8aa496a |
| 2518 | CODE_SMELL | CRITICAL | extension/background.js:1146 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 23 to the 15 allowed. | 1e0cc322-9f1e-4b0c-8ae3-81e05b272ab4 |
| 2519 | CODE_SMELL | MINOR | extension/background.js:1498 | javascript:S7776 | `COMMAND_REASONING_EFFORTS` should be a `Set`, and use `COMMAND_REASONING_EFFORTS.has()` to check existence or non-existence. | 504c5ab8-6213-4189-9074-71dc1e04f8fb |
| 2520 | CODE_SMELL | MAJOR | extension/background.js:3446 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 0bf41643-aa56-4fe4-8ff8-c9ea2d25775b |
| 2521 | CODE_SMELL | MAJOR | extension/background.js:3446 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 885321c5-c05e-49ab-b435-d77f2d924bb6 |
| 2522 | CODE_SMELL | MAJOR | extension/background.js:3446 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | adae32d1-6bc7-4a8f-a32b-3fc064d23820 |
| 2523 | CODE_SMELL | CRITICAL | extension/background.js:3490 | javascript:S3735 | Remove this use of the "void" operator. | 073c0828-1e86-47ed-a871-4851445e4e70 |
| 2524 | CODE_SMELL | MAJOR | extension/background.js:4664 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | f2c2eac9-64d2-4a6d-8596-8cec35fdb381 |
| 2525 | CODE_SMELL | MAJOR | extension/background.js:4665 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | ba529f87-98bf-4801-bd4b-8d2387e85975 |
| 2526 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:812 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | a67533f4-677e-4c82-8eca-0160b14f09b3 |
| 2527 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:813 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | c3d30b50-d35a-4283-9ced-15197765c6cc |
| 2528 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:1025 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | f47f7e02-b3ad-4cbd-bdfb-9e012f7fde34 |
| 2529 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:1670 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | f8e84390-62c6-4f9b-b09a-c593c4c04727 |
| 2530 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:2432 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 8fa37144-243c-4495-a360-d127897ef112 |
| 2531 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:2716 | javascript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | c1019125-1bee-481e-88ed-d4a123d4eb18 |
| 2532 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:2740 | javascript:S7758 | Prefer `String#codePointAt()` over `String#charCodeAt()`. | 0a0dc347-5396-42d2-ad2a-de35b39042ea |
| 2533 | CODE_SMELL | CRITICAL | extension/content.js:1357 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | 1267b309-3af9-401a-895e-d3ce5f99444a |
| 2534 | CODE_SMELL | MAJOR | extension/content.js:1476 | javascript:S2681 | This statement will not be executed in a loop; only the first statement will be. The rest will execute only once. | f33f08c6-5516-4789-8f1e-5f9d5b53e2a4 |
| 2535 | CODE_SMELL | CRITICAL | extension/content.js:4874 | javascript:S3735 | Remove this use of the "void" operator. | 3c766aa1-c37a-49e9-8398-6d77ec9a835f |
| 2536 | CODE_SMELL | CRITICAL | extension/content.js:8018 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 23 to the 15 allowed. | d1211067-1212-4504-9cf8-245e82f37c60 |
| 2537 | CODE_SMELL | MINOR | extension/content.js:12027 | javascript:S7764 | Prefer `globalThis` over `window`. | ee0903c9-f9a8-4981-a1d6-b681aaae69ed |
| 2538 | CODE_SMELL | MINOR | extension/content.js:12148 | javascript:S7764 | Prefer `globalThis` over `window`. | 58c53986-eeb0-4b76-aa56-1f683285636e |
| 2539 | CODE_SMELL | MAJOR | extension/content.js:12767 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 36384ee9-e089-43cc-8dce-c6286a4a0474 |
| 2540 | BUG | CRITICAL | extension/content.js:12767 | javascript:S2871 | Provide a compare function that depends on "String.localeCompare", to reliably sort elements alphabetically. | 835b2bdf-eaca-4153-814d-5a5fde6f8044 |
| 2541 | CODE_SMELL | MAJOR | extension/content.js:12767 | javascript:S4624 | Refactor this code to not use nested template literals. | b9b899ae-0af1-4fe9-8fd1-921b9dbbe37b |
| 2542 | CODE_SMELL | MAJOR | extension/content.js:12976 | javascript:S2681 | This line will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | 0fccfe6c-f8f0-4496-9c18-cf7479fef6e3 |
| 2543 | CODE_SMELL | CRITICAL | extension/usage.js:58 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 39 to the 15 allowed. | 935b5d33-ac15-4186-9fbf-b44e20c9ed2e |
| 2544 | CODE_SMELL | MINOR | extension/usage.js:69 | javascript:S7773 | Prefer `Number.NaN` over `NaN`. | 48a76b79-6d8e-4a35-bc99-345bdccd199d |
| 2545 | CODE_SMELL | MINOR | extension/usage.js:76 | javascript:S7773 | Prefer `Number.NaN` over `NaN`. | 5019378e-1b4d-4bae-88ae-ad88707c960d |
| 2546 | CODE_SMELL | CRITICAL | extension/usage.js:157 | javascript:S3735 | Remove this use of the "void" operator. | b1cade13-944d-4c10-ad92-9facf0ceb5a1 |
| 2547 | CODE_SMELL | MINOR | scripts/verify-composer-context.cjs:15 | javascript:S6594 | Use the "RegExp.exec()" method instead. | 6d27d276-ceb7-4383-8cbd-30e7bcf816d4 |
| 2548 | CODE_SMELL | MAJOR | src/main/agents.ts:1882 | typescript:S1121 | Extract the assignment of "run" from this expression. | 1d61a096-ed98-4257-a013-3dba92b96d12 |
| 2549 | CODE_SMELL | MAJOR | src/main/agents.ts:2286 | typescript:S1121 | Extract the assignment of "run" from this expression. | b3d5bbd9-d125-423d-9481-dd2e90e56117 |
| 2550 | CODE_SMELL | MINOR | src/main/agents.ts:2665 | typescript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | 334292a5-97f9-46e3-a59b-937ae86feac2 |
| 2551 | CODE_SMELL | MAJOR | src/main/agents.ts:2665 | typescript:S2681 | This statement will not be executed in a loop; only the first statement will be. The rest will execute only once. | 85be9335-b9f0-461f-a274-b0dcd41fd357 |
| 2552 | CODE_SMELL | MINOR | src/main/agents.ts:4514 | typescript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | ba7f93c9-d87d-4b82-80d9-2da2ff70551a |
| 2553 | CODE_SMELL | MINOR | src/main/agents.ts:4548 | typescript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | 9454c696-e06f-45d6-9eca-3472cd89d32a |
| 2554 | CODE_SMELL | MINOR | src/main/agents.ts:4552 | typescript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | eaa32cc4-ca80-49cd-965d-86641afd0229 |
| 2555 | CODE_SMELL | MINOR | src/main/agents.ts:5008 | typescript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | 004aa640-a8e0-4e42-b809-32c615dd6840 |
| 2556 | CODE_SMELL | MAJOR | src/main/agents.ts:5027 | typescript:S4624 | Refactor this code to not use nested template literals. | 04c15c60-c33e-4b86-bbea-1f0daa2b27ac |
| 2557 | CODE_SMELL | MINOR | src/main/bridge.ts:16 | typescript:S3863 | '../shared/session.js' imported multiple times. | fd54e572-ac2f-468b-8334-85e2857beee8 |
| 2558 | CODE_SMELL | MINOR | src/main/bridge.ts:1838 | typescript:S7735 | Unexpected negated condition. | a846e411-d143-4f23-a666-31d86978b597 |
| 2559 | CODE_SMELL | MAJOR | src/main/bridge.ts:1838 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | a942d5fd-cdea-401c-a1c0-a06fa79044b9 |
| 2560 | CODE_SMELL | MAJOR | src/main/bridge.ts:1860 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 15605eb8-7c58-4225-9527-82b7a12666b8 |
| 2561 | CODE_SMELL | MINOR | src/main/bridge.ts:1933 | typescript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | a299589e-9e03-461a-9b89-578b4db5c40c |
| 2562 | CODE_SMELL | CRITICAL | src/main/bridge.ts:1955 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | df1f5882-18ba-465c-9e88-58cdcab974f3 |
| 2563 | CODE_SMELL | MAJOR | src/main/bridge.ts:1965 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | efccc438-fa9f-4fa0-a7fe-321932cc1d51 |
| 2564 | CODE_SMELL | MINOR | src/main/bridge.ts:4614 | typescript:S7735 | Unexpected negated condition. | 46b90d5c-7d64-4246-a528-cc4b5ec7482e |
| 2565 | CODE_SMELL | CRITICAL | src/main/bridge.ts:5651 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 25 to the 15 allowed. | b2698262-1c1b-4ca1-bf9f-38c512f4579c |
| 2566 | CODE_SMELL | MAJOR | src/main/bridge.ts:6691 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | bcba51b0-2198-4deb-8e1b-48afe791b2af |
| 2567 | BUG | CRITICAL | src/main/bridge.ts:8098 | typescript:S2871 | Provide a compare function that depends on "String.localeCompare", to reliably sort elements alphabetically. | 009efc51-256b-4169-b6ea-539cb8f9f220 |
| 2568 | BUG | CRITICAL | src/main/bridge.ts:8101 | typescript:S2871 | Provide a compare function that depends on "String.localeCompare", to reliably sort elements alphabetically. | ad5bdc74-86c7-4df1-8250-c21fe708e88c |
| 2569 | BUG | CRITICAL | src/main/bridge.ts:8102 | typescript:S2871 | Provide a compare function that depends on "String.localeCompare", to reliably sort elements alphabetically. | ac92c6d7-b9e9-4199-8aae-a3fdbbdaf1fb |
| 2570 | CODE_SMELL | MAJOR | src/main/bridge.ts:8102 | typescript:S4043 | Move this array "sort" operation to a separate statement or replace it with "toSorted". | f1c45f80-075b-4315-8618-996b69fd4436 |
| 2571 | CODE_SMELL | MINOR | src/main/browser-preferences.ts:8 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | 025496c5-54e7-44f2-a442-e2d40d593938 |
| 2572 | CODE_SMELL | MAJOR | src/main/browser-preferences.ts:33 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 4a555a32-9697-4a50-8f1d-705449f0073f |
| 2573 | CODE_SMELL | MINOR | src/main/browser-wake.ts:41 | typescript:S6551 | 'bytes' may use Object's default stringification format ('[object Object]') when stringified. | 440fb64b-061d-48a2-9b7d-9cb9336cddc3 |
| 2574 | CODE_SMELL | CRITICAL | src/main/browser-wake.ts:49 | typescript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 32970b88-927d-4e84-b6dc-150d50dc46d8 |
| 2575 | CODE_SMELL | CRITICAL | src/main/browser-wake.ts:58 | typescript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 889ff4e3-d4f8-4eb5-8c39-be962201d3fb |
| 2576 | CODE_SMELL | MINOR | src/main/browser.ts:282 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 3985b668-f084-4558-bebc-89e1b9ebb9c7 |
| 2577 | CODE_SMELL | MINOR | src/main/browser.ts:283 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | 0ba2980b-4bc6-4bf1-85fc-b59179adaba0 |
| 2578 | CODE_SMELL | MINOR | src/main/browser.ts:283 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 58db26e4-27ad-4653-91a4-e6ffea088539 |
| 2579 | CODE_SMELL | MINOR | src/main/chat-models.ts:10 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | 651463ff-c1fe-4361-95f8-c5d16a5549fd |
| 2580 | CODE_SMELL | MAJOR | src/main/chat-models.ts:113 | typescript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | a6d04e1c-17a0-4918-a7ec-4cf840816e6d |
| 2581 | CODE_SMELL | MAJOR | src/main/chat-models.ts:157 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | e962664d-5fe6-4982-bb0c-4a54f72e69f8 |
| 2582 | CODE_SMELL | MAJOR | src/main/chat-models.ts:172 | typescript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | 42eff639-ccc9-4d95-a001-b07da545b7d1 |
| 2583 | CODE_SMELL | MAJOR | src/main/chat-models.ts:176 | typescript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | bc9ce89f-61f8-4692-ac00-b0d00a016279 |
| 2584 | CODE_SMELL | MINOR | src/main/goal.ts:51 | typescript:S3863 | '../shared/types.js' imported multiple times. | 180eb669-882d-48ea-91b5-435654a07c14 |
| 2585 | CODE_SMELL | MAJOR | src/main/goal.ts:1483 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | ec283202-e576-4f0f-8c9e-d20b13b294ec |
| 2586 | CODE_SMELL | MAJOR | src/main/goal.ts:1815 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 2a0b667e-6469-416c-83b6-429cbcf7bb3e |
| 2587 | CODE_SMELL | MINOR | src/main/goal.ts:1815 | typescript:S7773 | Prefer `Number.NaN` over `NaN`. | 4e1c336a-1189-4c39-bd92-8d6566fbc174 |
| 2588 | CODE_SMELL | MINOR | src/main/goal.ts:1923 | typescript:S7750 | Prefer `.findLast(…)` over `.filter(…).at(-1)`. | 6ff5d179-b33a-4796-9515-93e16bd7b34c |
| 2589 | CODE_SMELL | MAJOR | src/main/goal.ts:1990 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 8844886d-1639-40c8-8d51-daf09006ceeb |
| 2590 | CODE_SMELL | MAJOR | src/main/goal.ts:2043 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 58ea37ef-48b6-48ff-b1a8-49447d3b58de |
| 2591 | CODE_SMELL | MINOR | src/main/goal.ts:2045 | typescript:S7750 | Prefer `.findLast(…)` over `.filter(…).at(-1)`. | c6529452-61ab-43ec-8a12-fe236caef5d6 |
| 2592 | CODE_SMELL | CRITICAL | src/main/goal.ts:2305 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 24 to the 15 allowed. | af92b72c-d73c-4fb5-8a21-627e51d8b02b |
| 2593 | CODE_SMELL | MAJOR | src/main/goal.ts:2312 | typescript:S6535 | Unnecessary escape character: \[. | 4118fc41-db01-4aeb-b0b4-4fae639ceda2 |
| 2594 | CODE_SMELL | MAJOR | src/main/goal.ts:2312 | typescript:S6535 | Unnecessary escape character: \[. | 9927e1f1-1bfb-4e45-bb90-9b2908a65e4f |
| 2595 | CODE_SMELL | MINOR | src/main/ipc.ts:15 | typescript:S3863 | './session/recorder.js' imported multiple times. | 571a9ba1-8a18-4a89-ad97-76cc86d06cc1 |
| 2596 | CODE_SMELL | MINOR | src/main/ipc.ts:28 | typescript:S3863 | './goal.js' imported multiple times. | 3bb006fd-2e71-4d55-8ef1-1d4847cfd644 |
| 2597 | CODE_SMELL | MINOR | src/main/ipc.ts:31 | typescript:S3863 | './goal.js' imported multiple times. | 9e20a5e2-f859-4c51-842b-b008ba347310 |
| 2598 | CODE_SMELL | MINOR | src/main/ipc.ts:68 | typescript:S3863 | './goal.js' imported multiple times. | 84590cc8-86c4-43e5-8045-12b127adda51 |
| 2599 | CODE_SMELL | MINOR | src/main/ipc.ts:1291 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | de7481c7-040d-4458-a3c2-ec9881a426a4 |
| 2600 | CODE_SMELL | MINOR | src/main/ipc.ts:1305 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | 64b13a7f-2618-4533-98e7-759691b8d631 |
| 2601 | CODE_SMELL | MINOR | src/main/ipc.ts:1308 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | dbb815f0-7c8f-4d28-93fa-24858d74f513 |
| 2602 | CODE_SMELL | MINOR | src/main/ipc.ts:1337 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | 8c359e52-aad8-4cc3-a162-ffbf8c33c187 |
| 2603 | CODE_SMELL | MINOR | src/main/ipc.ts:1341 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | 58aebb94-954c-41f7-8124-7d83c7503797 |
| 2604 | CODE_SMELL | MAJOR | src/main/ipc.ts:1620 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | b17f285b-e3d6-4f0c-8e40-2933eb83c4f3 |
| 2605 | CODE_SMELL | MINOR | src/main/ipc.ts:1690 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | c8f20352-ab4b-4810-8176-7735b5032595 |
| 2606 | CODE_SMELL | MINOR | src/main/ipc.ts:1693 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | b3872ae5-4d2e-4c9e-b55d-938dfa6f068d |
| 2607 | CODE_SMELL | MINOR | src/main/mcp/kernel.ts:1322 | typescript:S7735 | Unexpected negated condition. | 0ada86f7-21a0-4805-a556-f254d95de0ec |
| 2608 | CODE_SMELL | CRITICAL | src/main/mcp/tools-core.ts:1033 | typescript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | c00696be-a541-4caf-ab74-51f3391586f4 |
| 2609 | CODE_SMELL | MAJOR | src/main/mcp/tools-core.ts:1035 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 0f03b613-631c-41ff-9aaf-ef22ff7b8247 |
| 2610 | CODE_SMELL | MAJOR | src/main/mcp/tools-core.ts:1448 | typescript:S4624 | Refactor this code to not use nested template literals. | 4339e9be-5e3d-411e-bdce-42cdd1d1da23 |
| 2611 | CODE_SMELL | MAJOR | src/main/mcp/tools-core.ts:1448 | typescript:S4624 | Refactor this code to not use nested template literals. | 7f25838f-88db-4079-a9a8-a58bdcff9e7c |
| 2612 | CODE_SMELL | MAJOR | src/main/mcp/tools-core.ts:1448 | typescript:S4624 | Refactor this code to not use nested template literals. | d4f5978c-5383-45fb-8517-ebbbcab4ffdd |
| 2613 | CODE_SMELL | MAJOR | src/main/plugin-refresh.ts:62 | typescript:S4624 | Refactor this code to not use nested template literals. | 608d0d3d-4742-4a3e-b4ce-8d5b09246034 |
| 2614 | BUG | CRITICAL | src/main/plugin-refresh.ts:75 | typescript:S2871 | Provide a compare function that depends on "String.localeCompare", to reliably sort elements alphabetically. | 364c3641-3471-4ea7-9b53-f97657482530 |
| 2615 | CODE_SMELL | MAJOR | src/main/plugin-refresh.ts:280 | typescript:S2681 | This statement will not be executed in a loop; only the first statement will be. The rest will execute only once. | 2f6cf66b-f6f2-4b71-b137-9e3cdff37090 |
| 2616 | CODE_SMELL | MAJOR | src/main/session/finish.ts:47 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 70bf5e5c-a661-4b59-9cd9-6bc2a54ef743 |
| 2617 | CODE_SMELL | MAJOR | src/main/session/finish.ts:230 | typescript:S6671 | Expected the Promise rejection reason to be an Error. | b7bba028-9a37-4cab-93b1-0d0edccf1deb |
| 2618 | CODE_SMELL | MINOR | src/main/session/input.ts:33 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | 52f09673-4594-482c-bb7f-354abcbaf2df |
| 2619 | CODE_SMELL | MINOR | src/main/session/input.ts:45 | typescript:S1874 | '(params?: string \| { abort?: boolean \| undefined; version?: "v1" \| "v2" \| "v3" \| "v4" \| "v5" \| "v6" \| "v7" \| "v8" \| undefined; error?: string \| $ZodErrorMap&lt;$ZodIssueInvalidStringFormat&gt; \| undefined; message?: string \| undefined; } \| undefined): ZodString' is deprecated. | 53801f1f-e00f-4dce-8e9d-48979fe5e4d4 |
| 2620 | CODE_SMELL | MINOR | src/main/session/input.ts:825 | typescript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | e5448791-680b-4d86-a99f-7bc9998b760e |
| 2621 | CODE_SMELL | MAJOR | src/main/session/input.ts:1610 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 06f1d6eb-d45d-418a-a729-fe3104a42615 |
| 2622 | CODE_SMELL | MAJOR | src/main/session/input.ts:1639 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 604729cf-930c-4c05-821b-06cac038b9e8 |
| 2623 | CODE_SMELL | MAJOR | src/main/session/input.ts:1643 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 1db273ca-09f4-4de4-a1ea-fb35b65b7797 |
| 2624 | CODE_SMELL | CRITICAL | src/main/session/recorder.ts:279 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 33 to the 15 allowed. | 057d0b0c-878c-45b6-92d8-7f7c1bd37f0b |
| 2625 | CODE_SMELL | MINOR | src/main/session/store.ts:709 | typescript:S7735 | Unexpected negated condition. | 9325ea97-c71d-4b4c-bbfb-406863af8b11 |
| 2626 | CODE_SMELL | MAJOR | src/main/session/store.ts:1076 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 371691b3-2741-4c95-a151-5472efa1bde3 |
| 2627 | CODE_SMELL | CRITICAL | src/main/session/store.ts:2813 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 23 to the 15 allowed. | b5603893-0d7f-4b39-a13c-8f777d4d3e7e |
| 2628 | CODE_SMELL | MINOR | src/main/session/usage.ts:10 | typescript:S1874 | '(params?: unknown): ZodNumber' is deprecated. | 1af54128-c896-4deb-9934-a8b266dda4d8 |
| 2629 | CODE_SMELL | MINOR | src/main/session/usage.ts:10 | typescript:S1874 | '(params?: unknown): ZodNumber' is deprecated. | 99356663-6089-4e31-9176-d94704a80712 |
| 2630 | CODE_SMELL | MINOR | src/main/session/usage.ts:10 | typescript:S1874 | '(params?: unknown): ZodNumber' is deprecated. | a94c50d8-e45b-418f-a0db-f04e3e703a24 |
| 2631 | CODE_SMELL | MINOR | src/main/session/usage.ts:27 | typescript:S1874 | '(params?: unknown): ZodNumber' is deprecated. | 3a47c6cb-6da1-4eb0-8189-d7c550c1e996 |
| 2632 | CODE_SMELL | MAJOR | src/main/task-request.ts:52 | typescript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | 6d6318ff-0163-4b2b-bf66-5f9abf15e19c |
| 2633 | CODE_SMELL | MINOR | src/renderer/browser-preferences.ts:23 | typescript:S7764 | Prefer `globalThis` over `window`. | 112ff61b-402a-49e2-85ca-cb1b5bcbbb9e |
| 2634 | CODE_SMELL | MAJOR | src/renderer/chat-models.ts:73 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 4a61b85b-0f22-4ac3-af5e-a3b0cd028e2c |
| 2635 | CODE_SMELL | MAJOR | src/renderer/chat-models.ts:108 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 34c25726-721c-4ea9-8591-95c1275d7703 |
| 2636 | CODE_SMELL | MINOR | src/renderer/chat-models.ts:489 | typescript:S7764 | Prefer `globalThis` over `window`. | 5d013434-1a46-4e90-91f2-bc75d3fa1e43 |
| 2637 | CODE_SMELL | MINOR | src/renderer/chat.ts:288 | typescript:S7764 | Prefer `globalThis` over `window`. | 2b4a1f94-3bbc-4abc-893d-273b0054f8fd |
| 2638 | CODE_SMELL | MINOR | src/renderer/chat.ts:294 | typescript:S7764 | Prefer `globalThis` over `window`. | 3f542f27-7ab9-4bfd-9017-2b5de15222a3 |
| 2639 | CODE_SMELL | MINOR | src/renderer/chat.ts:3411 | typescript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | 6ce9ad1c-10bf-44ad-9663-7719b288d4ba |
| 2640 | CODE_SMELL | MAJOR | src/renderer/chat.ts:3414 | typescript:S7768 | Prefer `cursor.before(child)` over `parent.insertBefore(child, cursor)`. | 0f7b1cf9-12f7-4c15-a98e-d4dd7f86dc1e |
| 2641 | CODE_SMELL | MINOR | src/renderer/chat.ts:4250 | typescript:S7764 | Prefer `globalThis` over `window`. | 3bb224c9-4561-4398-8834-e1f2e9fea072 |
| 2642 | CODE_SMELL | MINOR | src/renderer/chat.ts:5066 | typescript:S7764 | Prefer `globalThis` over `window`. | 24a7bb04-170d-4606-92dd-af053491ccac |
| 2643 | CODE_SMELL | MINOR | src/renderer/chat.ts:5648 | typescript:S7764 | Prefer `globalThis` over `window`. | 9af915e2-7948-4842-9bff-a15d7a6fb5b7 |
| 2644 | CODE_SMELL | MAJOR | src/renderer/chat.ts:5839 | typescript:S2681 | This statement will not be executed conditionally; only the first statement will be. The rest will execute unconditionally. | 4b488b8c-b366-4458-8482-f8c84fc7b2d3 |
| 2645 | CODE_SMELL | MAJOR | src/renderer/chat.ts:6291 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 5fcd7b4e-fcc7-4bf1-b2a9-734c9fb0fbd5 |
| 2646 | CODE_SMELL | MINOR | src/renderer/context-meter.ts:3 | typescript:S3863 | '../shared/session.js' imported multiple times. | 38e20184-7f79-4a92-96fe-57a21d3e8c2c |
| 2647 | CODE_SMELL | MINOR | src/renderer/context-meter.ts:4 | typescript:S3863 | '../shared/session.js' imported multiple times. | ce4f14ee-5824-40e3-866e-0b84ebe907e0 |
| 2648 | CODE_SMELL | MAJOR | src/renderer/index.html:1025 | Web:S6819 | Use &lt;output&gt; instead of the status role to ensure accessibility across all devices. | f64c29a3-57c9-4f83-82ba-a4a1f34664c1 |
| 2649 | CODE_SMELL | MAJOR | src/renderer/index.html:1281 | Web:S6819 | Use &lt;output&gt; instead of the status role to ensure accessibility across all devices. | 98f8a851-c692-46ed-90fc-e811ff0a920e |
| 2650 | CODE_SMELL | MAJOR | src/renderer/main.ts:320 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | b1f269e1-a43e-4222-bc19-64bcb470ba33 |
| 2651 | CODE_SMELL | MAJOR | src/renderer/styles.css:2324 | css:S4666 | Unexpected duplicate selector "#chatBody", first used at line 2322 | fa6f15bc-5930-4df8-b248-276213f86fd5 |
| 2652 | CODE_SMELL | MAJOR | src/renderer/styles.css:3451 | css:S4666 | Unexpected duplicate selector ".pending-message.is-delivery-error .pending-message-status", first used at line 3450 | f7b627b6-6249-42da-ba8a-b597de2af560 |
| 2653 | CODE_SMELL | MAJOR | src/renderer/styles.css:3490 | css:S4666 | Unexpected duplicate selector ".send-button", first used at line 2378 | 4d4b99bc-7002-4296-ba6a-4036f7262b8b |
| 2654 | CODE_SMELL | MAJOR | src/renderer/styles.css:3509 | css:S4666 | Unexpected duplicate selector ".app &gt; header", first used at line 420 | ba3a2de4-6966-4a7d-891d-0aed7fc3c890 |
| 2655 | CODE_SMELL | MAJOR | src/renderer/styles.css:3526 | css:S4666 | Unexpected duplicate selector ".send-button", first used at line 2378 | 1dea6868-862b-47f4-bc9f-99e85a5a96c2 |
| 2656 | CODE_SMELL | MAJOR | src/renderer/styles.css:3596 | css:S4666 | Unexpected duplicate selector ".model-menu &gt; summary", first used at line 3524 | 1cd41367-6332-422f-a790-2c1469431bf0 |
| 2657 | BUG | CRITICAL | src/renderer/usage.ts:101 | typescript:S2871 | Provide a compare function that depends on "String.localeCompare", to reliably sort elements alphabetically. | 8e12e754-2636-47dc-9eda-f7e249938efa |
| 2658 | CODE_SMELL | MINOR | src/shared/chat-models.ts:4 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | bdc519df-5a91-4e8b-883e-646670ecaa06 |
| 2659 | CODE_SMELL | MINOR | src/shared/chat-models.ts:11 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 49da65e2-f575-4dd2-889b-dec506cfea7b |
| 2660 | CODE_SMELL | CRITICAL | src/shared/task-progress.ts:13 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 22 to the 15 allowed. | 508421e6-c00e-4869-b981-e9e8a270c781 |
| 2661 | CODE_SMELL | MINOR | src/shared/task-progress.ts:19 | typescript:S7758 | Prefer `String#codePointAt()` over `String#charCodeAt()`. | 46fe892f-5c79-43ed-87a3-15ca97718d21 |
| 2662 | CODE_SMELL | MINOR | src/shared/task-progress.ts:27 | typescript:S7773 | Prefer `Number.parseInt` over `parseInt`. | ad1d63b0-8946-46ea-9166-5510634d8058 |
| 2663 | CODE_SMELL | MINOR | src/shared/task-progress.ts:27 | typescript:S7758 | Prefer `String.fromCodePoint()` over `String.fromCharCode()`. | edbf1b41-1bce-4a87-bf4f-749f61024b57 |
| 2664 | CODE_SMELL | CRITICAL | src/shared/task-progress.ts:41 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 33 to the 15 allowed. | e965191d-f9eb-4b88-991c-56eada0ebd23 |
| 2665 | CODE_SMELL | MAJOR | src/shared/task-progress.ts:44 | typescript:S6557 | Use 'String#startsWith' method instead. | a4cb88d0-ab25-4f18-b88b-010fcdddd132 |
| 2666 | CODE_SMELL | MAJOR | src/shared/task-progress.ts:45 | typescript:S2681 | This statement will not be executed in a loop; only the first statement will be. The rest will execute only once. | efb0e750-582a-4f2a-b0ba-ada752598de6 |
| 2667 | CODE_SMELL | MAJOR | src/shared/task-progress.ts:64 | typescript:S6557 | Use 'String#startsWith' method instead. | e9b16dd0-960d-441a-9412-8906e0f7253d |
| 2668 | CODE_SMELL | MAJOR | extension/content.js:5632 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | c7f29542-0b80-482c-ba94-31e07f7a2b39 |
| 2669 | CODE_SMELL | MAJOR | extension/content.js:5864 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 6b386b67-f043-4d2a-951b-0bff18719b7d |
| 2670 | CODE_SMELL | MAJOR | src/main/computer/index.ts:932 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | ea344f38-f2ae-4263-a8b3-bdb7997ef51a |
| 2671 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:364 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 56867362-fd22-4223-b432-5b355c4ff7a5 |
| 2672 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:374 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 3b8a714c-b62c-4fc0-a142-fa520d24b34e |
| 2673 | CODE_SMELL | MINOR | src/main/exec-hints.ts:1508 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | 27b36ba9-6bf0-4a54-baab-91166c26175c |
| 2674 | CODE_SMELL | CRITICAL | src/main/mcp/session-tool.ts:191 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 34 to the 15 allowed. | d2e200bb-8ec8-462f-a212-0761122e205c |
| 2675 | CODE_SMELL | CRITICAL | src/main/mcp/session-tool.ts:332 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | 7ef88076-4328-486e-a40e-687e2a4bae5d |
| 2676 | CODE_SMELL | CRITICAL | src/main/mcp/session-tool.ts:639 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 33 to the 15 allowed. | 3ed29cf6-e132-4a02-9160-fff605e7faf9 |
| 2677 | CODE_SMELL | CRITICAL | src/main/mcp/session-tool.ts:942 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 36 to the 15 allowed. | ea2776f8-dc23-4534-a918-ae019f6c7f37 |
| 2678 | CODE_SMELL | MINOR | src/main/mcp/session-tool.ts:1066 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 10d26d40-3187-4e75-87a7-0bb274c3ed3d |
| 2679 | CODE_SMELL | MAJOR | src/main/mcp/session-tool.ts:1066 | typescript:S6535 | Unnecessary escape character: \[. | 141a5821-06f9-4ac2-88f5-a5917e5c9d5d |
| 2680 | CODE_SMELL | MAJOR | src/main/mcp/tools-core.ts:1004 | typescript:S4624 | Refactor this code to not use nested template literals. | ae6b8929-c2cf-4992-8b13-89dba29cfb07 |
| 2681 | CODE_SMELL | MAJOR | src/main/mcp/tools-core.ts:1005 | typescript:S4624 | Refactor this code to not use nested template literals. | 16ec1511-66b6-4ee2-b136-917702a316c1 |
| 2682 | CODE_SMELL | CRITICAL | src/main/mcp/tools-core.ts:2315 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | 26571e90-543a-4251-af1e-4cd582356415 |
| 2683 | CODE_SMELL | MAJOR | src/main/sandbox.ts:79 | typescript:S4624 | Refactor this code to not use nested template literals. | 26b1b4a8-75c1-4c1e-a67d-2a84242d5c0f |
| 2684 | CODE_SMELL | MAJOR | extension/background.js:2845 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | aed72886-5826-451e-bf5c-149845d1d003 |
| 2685 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:477 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 81f6f8c8-fa82-44ea-ab40-a909025f4e01 |
| 2686 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:524 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 6635ce92-6b40-4cfb-b74c-df8d578d7a3a |
| 2687 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:545 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | 54d3e5ae-d55d-4d09-adeb-5cfa47b78ff5 |
| 2688 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:547 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | c15291ce-a648-4a41-8946-20148d06b52c |
| 2689 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:550 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | bb9e4c63-61d5-4530-a11a-335c5b6275ec |
| 2690 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:551 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 3106382b-fda2-4937-b3b9-472f21f27889 |
| 2691 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:552 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | a2ee19f1-d1d3-490c-9b14-791510ac6e8c |
| 2692 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:554 | javascript:S7755 | Prefer `.at(…)` over `[….length - index]`. | ea7008f1-3c5e-48e2-a514-cbec0ef2b125 |
| 2693 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:731 | javascript:S7735 | Unexpected negated condition. | 76996946-2e96-4c31-90fc-2f82a32ddb52 |
| 2694 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:749 | javascript:S7755 | Prefer `.at(…)` over `[….length - index]`. | db0e5145-5e2b-4a5d-a682-383ce826570c |
| 2695 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:1425 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | d7ad7f52-08f4-4687-bbd0-4a2ba73e76bc |
| 2696 | CODE_SMELL | MINOR | extension/content.js:1737 | javascript:S7765 | Use `.includes()`, rather than `.indexOf()`, when checking for existence. | 963053e0-2d11-4578-ba54-7b16bb354e3e |
| 2697 | CODE_SMELL | MAJOR | src/main/bridge.ts:8412 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | d3ec3343-a38b-4d06-9837-b6da6e2b9d33 |
| 2698 | CODE_SMELL | MINOR | src/main/goal.ts:2280 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | ca40d6ea-8dcc-4978-99e7-e8af10894de6 |
| 2699 | CODE_SMELL | MINOR | src/main/goal.ts:2281 | typescript:S6594 | Use the "RegExp.exec()" method instead. | ca0b14af-f6cb-44b0-a5fb-dbc22fdd507b |
| 2700 | CODE_SMELL | MINOR | src/main/goal.ts:2293 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | eb6135d8-2544-4944-8dfc-d98a63f4a01a |
| 2701 | CODE_SMELL | MAJOR | src/main/session/recorder.ts:1547 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | f25c867c-9645-4f99-a895-b45a3b132cfa |
| 2702 | CODE_SMELL | MAJOR | extension/overlay.css:625 | css:S7924 | Text does not meet the minimal contrast requirement with its background. | 3a32e407-07e8-4a55-b8cb-29bb147d465b |
| 2703 | CODE_SMELL | MINOR | scripts/verify-current-tunnel.mjs:29 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 1bd0ef60-2e6d-419f-b956-f620199af218 |
| 2704 | CODE_SMELL | MAJOR | scripts/verify-current-tunnel.mjs:31 | javascript:S4624 | Refactor this code to not use nested template literals. | 12b8e8fb-5182-4481-8417-77bf2ef0cc37 |
| 2705 | CODE_SMELL | MAJOR | scripts/verify-current-tunnel.mjs:57 | javascript:S7785 | Prefer top-level await over using a promise chain. | 516cef8b-b7a8-4f3c-a8c9-67a1be2cdc1a |
| 2706 | CODE_SMELL | MINOR | src/renderer/chat.ts:3170 | typescript:S7755 | Prefer `.at(…)` over `[….length - index]`. | 167279d8-19be-4a2c-9a33-a1adbef99b6c |
| 2707 | CODE_SMELL | MINOR | src/renderer/chat.ts:3177 | typescript:S7771 | Prefer negative index over length minus index for `splice`. | 7edde636-f33c-4759-a50f-be0e82e43c44 |
| 2708 | CODE_SMELL | MAJOR | src/renderer/chat.ts:3657 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 6ce2ff0a-15c0-4fee-bf50-c69b40bb6bc7 |
| 2709 | CODE_SMELL | MAJOR | extension/content.js:1343 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | f89bd662-b972-4f0f-9bcd-c15492e2c891 |
| 2710 | CODE_SMELL | MAJOR | extension/content.js:5802 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 00e4d25b-3383-44af-aaaa-3c13d6177f43 |
| 2711 | CODE_SMELL | MAJOR | extension/content.js:5802 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | aececc66-c7bf-47b1-af05-da9f7047dff5 |
| 2712 | CODE_SMELL | MAJOR | extension/content.js:5975 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 0574a712-aaf8-4640-b1a3-d8f2e1d97724 |
| 2713 | CODE_SMELL | CRITICAL | extension/content.js:6012 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 34 to the 15 allowed. | a36c39c5-1c02-41b6-b977-5ad4c53a3e67 |
| 2714 | CODE_SMELL | MAJOR | extension/content.js:6024 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 60d6a6a1-17a8-443f-8640-bd02755b214d |
| 2715 | CODE_SMELL | MAJOR | extension/content.js:6058 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 3d1d75ad-afe9-47ba-b356-70e4f244df2c |
| 2716 | CODE_SMELL | MAJOR | extension/content.js:7099 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | fb701d6f-305d-4dd6-8760-7980bba27941 |
| 2717 | CODE_SMELL | MAJOR | extension/content.js:8052 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | fe495011-1c34-469c-b0d3-b37a8b9f805a |
| 2718 | CODE_SMELL | MAJOR | extension/content.js:8519 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 699707ac-468a-418b-b3a2-8038707c9479 |
| 2719 | CODE_SMELL | MAJOR | extension/content.js:10001 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | ad385adc-89f3-4df0-b260-be2659de6a80 |
| 2720 | CODE_SMELL | CRITICAL | extension/content.js:10068 | javascript:S3735 | Remove this use of the "void" operator. | 032c4a94-d61e-45da-9072-49cfbc74d7e2 |
| 2721 | CODE_SMELL | MAJOR | src/main/agents.ts:2997 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 3259ba6a-c2fe-4f78-821d-bbf5a19bae65 |
| 2722 | CODE_SMELL | MINOR | src/main/bridge.ts:219 | typescript:S3863 | './session/continuation.js' imported multiple times. | 4b1289ce-017a-4403-ab50-faceec644626 |
| 2723 | CODE_SMELL | MAJOR | src/main/bridge.ts:6879 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 3f02c12a-3a94-414e-a723-015ee1702fc2 |
| 2724 | CODE_SMELL | MAJOR | src/main/mcp/tools-core.ts:1612 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | d44e4477-4806-4329-9629-8a206ab8848f |
| 2725 | CODE_SMELL | MAJOR | src/main/mcp/tools-core.ts:1615 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | ada7e712-4a7b-40c5-974d-2689a4207c3d |
| 2726 | CODE_SMELL | MAJOR | src/main/mcp/tools-core.ts:1617 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 2d6d89e1-7ac2-4b23-8452-4f611db5a007 |
| 2727 | CODE_SMELL | MAJOR | src/main/mcp/tools-core.ts:1641 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 5c1946d4-504f-4a47-9230-c04b4daea4d5 |
| 2728 | CODE_SMELL | MAJOR | src/main/mcp/tools-core.ts:1642 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 65a5b5a7-5165-43fc-84f2-67f69e158347 |
| 2729 | CODE_SMELL | MAJOR | src/main/codex/unified-exec.ts:1058 | typescript:S4043 | Move this array "sort" operation to a separate statement or replace it with "toSorted". | d4e783f7-8b68-4b78-9455-c4ae7846d715 |
| 2730 | CODE_SMELL | MAJOR | src/main/codex/unified-exec.ts:1059 | typescript:S4043 | Move this array "sort" operation to a separate statement or replace it with "toSorted". | df6a903a-291d-43cf-b2cf-e9380ca0cb5b |
| 2731 | CODE_SMELL | MAJOR | src/main/session/blocked-chats.ts:89 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | dd70a723-39b1-4c23-b03c-5898a73aef01 |
| 2732 | CODE_SMELL | MINOR | src/main/session/correlation.ts:187 | typescript:S4323 | Replace this union type with a type alias. | 51f0d772-2bfc-4707-902d-a435e6bbbee3 |
| 2733 | CODE_SMELL | MINOR | src/main/session/recorder.ts:667 | typescript:S7735 | Unexpected negated condition. | a889e517-5354-490d-80ab-90f2d44fce2c |
| 2734 | CODE_SMELL | MAJOR | src/main/session/recorder.ts:1429 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | a9a95767-50bc-415a-ba16-2c0503b2589f |
| 2735 | CODE_SMELL | MAJOR | src/main/session/recorder.ts:2204 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 5bf4e80d-bbf3-424e-8583-27336a1eaf31 |
| 2736 | CODE_SMELL | MINOR | src/main/session/store.ts:2414 | typescript:S6653 | Use 'Object.hasOwn()' instead of 'Object.prototype.hasOwnProperty.call()'. | 223d5150-5516-464d-a195-f9abb6b66980 |
| 2737 | CODE_SMELL | MAJOR | src/main/session/store.ts:2994 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | c3d00942-3f70-4d6e-9c2f-9b69e52f3dbc |
| 2738 | CODE_SMELL | MAJOR | src/main/tunnel/index.ts:65 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 909cca0a-9d91-4271-927d-679b220f1376 |
| 2739 | CODE_SMELL | CRITICAL | src/main/tunnel/index.ts:507 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 33 to the 15 allowed. | 9501daa4-abad-467d-bb58-50b2b53affd7 |
| 2740 | CODE_SMELL | MAJOR | src/main/tunnel/index.ts:587 | typescript:S4624 | Refactor this code to not use nested template literals. | 29123ce6-2326-4793-a24d-e9016b8485df |
| 2741 | CODE_SMELL | MINOR | src/renderer/chat.ts:1090 | typescript:S7764 | Prefer `globalThis` over `window`. | 7d2804c1-6b57-446d-81d2-f34cd76daeab |
| 2742 | CODE_SMELL | MINOR | src/renderer/chat.ts:1103 | typescript:S7764 | Prefer `globalThis` over `window`. | 2eb48023-f09d-416e-a648-4bcb11405edc |
| 2743 | CODE_SMELL | MINOR | src/renderer/chat.ts:5065 | typescript:S7764 | Prefer `globalThis` over `window`. | 120eccce-d9f2-4fd8-b276-97321f4594e5 |
| 2744 | CODE_SMELL | MAJOR | src/renderer/main.ts:1133 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | e2e1e567-4fe9-4fc2-93c9-e034275edcc6 |
| 2745 | CODE_SMELL | MINOR | src/renderer/main.ts:2314 | typescript:S7764 | Prefer `globalThis` over `window`. | e0fcac9f-40c6-46d8-8139-44d72858c75a |
| 2746 | CODE_SMELL | MINOR | src/renderer/main.ts:2315 | typescript:S7764 | Prefer `globalThis` over `window`. | cca5f40b-cb9e-4a8a-9fff-9860261b79c3 |
| 2747 | CODE_SMELL | MAJOR | src/main/agents.ts:957 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | a017a633-b5e6-4e27-8691-146c764d55f5 |
| 2748 | CODE_SMELL | CRITICAL | src/main/bridge.ts:10367 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 54 to the 15 allowed. | 8ef59817-7be6-47db-a07b-e8dcd4449033 |
| 2749 | BUG | CRITICAL | src/main/session/continuation.ts:591 | typescript:S2871 | Provide a compare function that depends on "String.localeCompare", to reliably sort elements alphabetically. | 03320d0f-1f40-4601-9b94-3fe88f7c2516 |
| 2750 | CODE_SMELL | MAJOR | src/main/session/continuation.ts:1024 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 1c1fa614-2463-4b8f-b701-13946e596522 |
| 2751 | CODE_SMELL | MAJOR | extension/background.js:2840 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 26201e92-1771-4a2c-9af7-60176f814b81 |
| 2752 | CODE_SMELL | MAJOR | extension/background.js:3837 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | f67eb426-6ed3-4ff4-ba5c-ba4764409e82 |
| 2753 | CODE_SMELL | MAJOR | extension/background.js:3941 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 5853d84e-ff0f-4340-b681-a031d2322d1c |
| 2754 | CODE_SMELL | MAJOR | extension/background.js:4566 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | c1f6283c-4362-4906-9476-c72428790c63 |
| 2755 | CODE_SMELL | MINOR | extension/content.js:788 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | d54c51a7-34da-4388-b4c0-d542e49dd0e7 |
| 2756 | CODE_SMELL | CRITICAL | extension/content.js:8129 | javascript:S3735 | Remove this use of the "void" operator. | 72e86184-44c9-4ec2-a0df-4d7a6c9435ef |
| 2757 | CODE_SMELL | MAJOR | extension/content.js:8733 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | f91bda53-44d9-4904-9de6-7d3913029bcc |
| 2758 | CODE_SMELL | MAJOR | extension/content.js:8735 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 38e0d2d3-ef2c-47a4-931d-d74827276415 |
| 2759 | CODE_SMELL | MAJOR | extension/content.js:10043 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | e4f654b9-c2e7-4ef0-9ed8-6a09b6d41197 |
| 2760 | CODE_SMELL | MINOR | src/main/bridge.ts:3989 | typescript:S4325 | This assertion is unnecessary since it does not change the type of the expression. | aa48a0a4-cffd-454f-8020-c93f504bba32 |
| 2761 | CODE_SMELL | MINOR | src/main/bridge.ts:9114 | typescript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | 1aba5b84-32d3-405e-8d1f-aa03c02956b7 |
| 2762 | CODE_SMELL | MAJOR | extension/content.js:7109 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 01799885-63d9-47ab-86e8-3932b49a935e |
| 2763 | CODE_SMELL | MAJOR | extension/content.js:7120 | javascript:S1854 | Remove this useless assignment to variable "running". | 3c732fe4-2bc9-488b-a644-ea21329fa7d3 |
| 2764 | CODE_SMELL | MINOR | extension/content.js:7120 | javascript:S1481 | Remove the declaration of the unused 'running' variable. | 9c08c5a3-cbaa-4343-8f5b-7d08309dbce1 |
| 2765 | CODE_SMELL | MAJOR | extension/content.js:7129 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 12ce94d7-d0f5-4d9f-a014-4e18b615e40a |
| 2766 | CODE_SMELL | MINOR | extension/content.js:7129 | javascript:S7735 | Unexpected negated condition. | b0c829e3-4bda-41cf-9e69-a9808c2df714 |
| 2767 | CODE_SMELL | MAJOR | extension/content.js:7129 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | ec2b3e93-2789-4b61-a287-106e2246bed0 |
| 2768 | CODE_SMELL | MINOR | extension/content.js:7228 | javascript:S7735 | Unexpected negated condition. | 1d3f0841-b210-43fc-88e8-4b323a11c446 |
| 2769 | CODE_SMELL | MAJOR | extension/content.js:7261 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 2ffcfbaa-b010-4a03-8ab2-b060a3dba120 |
| 2770 | CODE_SMELL | MAJOR | extension/content.js:8280 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | c4d98744-cc4e-4afc-9374-2cafe406632d |
| 2771 | CODE_SMELL | MAJOR | extension/content.js:8352 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | 092599f2-a2dd-4104-b190-2408afbb738c |
| 2772 | CODE_SMELL | MAJOR | extension/content.js:8353 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | 21342d6e-8f4d-41f5-bc63-713d349c0cfc |
| 2773 | CODE_SMELL | MINOR | extension/content.js:2620 | javascript:S7744 | The empty object is useless. | 0e03b8aa-4835-4f8a-b8fe-cf5501b0c133 |
| 2774 | CODE_SMELL | MINOR | extension/content.js:2620 | javascript:S7744 | The empty object is useless. | c3e3e292-be48-4701-8e2e-8399c24a2cbd |
| 2775 | CODE_SMELL | MAJOR | extension/content.js:6958 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 8a7e8c4a-e66e-40a9-b435-5fe98c567dd9 |
| 2776 | CODE_SMELL | MINOR | extension/content.js:7142 | javascript:S7735 | Unexpected negated condition. | 76b76537-ed29-4214-9a44-7f421f4a88a9 |
| 2777 | CODE_SMELL | MINOR | extension/content.js:7956 | javascript:S7744 | The empty object is useless. | 6e76558a-aff3-423a-b369-99854d07ac6a |
| 2778 | CODE_SMELL | MINOR | extension/content.js:7956 | javascript:S7744 | The empty object is useless. | 8cf10b46-d9a7-4c76-93df-dddf105b4614 |
| 2779 | CODE_SMELL | MAJOR | extension/content.js:9302 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | de2e14f8-b867-410f-a270-c0898a6cac2b |
| 2780 | CODE_SMELL | MAJOR | extension/content.js:9707 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 13134b3e-1073-4716-b24f-da7013839904 |
| 2781 | CODE_SMELL | MAJOR | extension/background.js:2911 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | e71b7bb9-79d9-47af-9323-e049c0d885b1 |
| 2782 | CODE_SMELL | MINOR | src/main/bridge.ts:4097 | typescript:S7735 | Unexpected negated condition. | 3f36061f-ae1d-46fc-a230-f7c5abbd936e |
| 2783 | CODE_SMELL | MAJOR | src/main/bridge.ts:4097 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 5d527088-7db8-4ca8-9864-222ae2418cd9 |
| 2784 | CODE_SMELL | MINOR | src/main/bridge.ts:4097 | typescript:S7735 | Unexpected negated condition. | c29f4318-be3a-4e7e-a6b0-b8a552779d4f |
| 2785 | CODE_SMELL | MINOR | src/main/bridge.ts:4110 | typescript:S4325 | This assertion is unnecessary since it does not change the type of the expression. | d418077d-f6d7-469d-a670-1f29a578432a |
| 2786 | CODE_SMELL | MINOR | src/main/bridge.ts:4123 | typescript:S4325 | This assertion is unnecessary since it does not change the type of the expression. | 935ae645-6ee9-4013-a533-dbc879542d8f |
| 2787 | CODE_SMELL | MINOR | src/main/bridge.ts:4123 | typescript:S4325 | This assertion is unnecessary since it does not change the type of the expression. | ecb5a00e-7b53-4557-ba69-0ab0ace64240 |
| 2788 | CODE_SMELL | MAJOR | src/main/bridge.ts:4169 | typescript:S4624 | Refactor this code to not use nested template literals. | 5561d8d7-2d7a-4201-8456-9da86d3c2cfc |
| 2789 | BUG | CRITICAL | src/main/bridge.ts:7937 | typescript:S2871 | Provide a compare function that depends on "String.localeCompare", to reliably sort elements alphabetically. | e81e2ac6-ded1-46b8-a88c-7cf71a789794 |
| 2790 | CODE_SMELL | MINOR | src/main/exec-hints.ts:540 | typescript:S7755 | Prefer `.at(…)` over `[….length - index]`. | 25c1a88c-465e-4222-82c9-145345254cf5 |
| 2791 | CODE_SMELL | MINOR | src/main/exec-hints.ts:572 | typescript:S7755 | Prefer `.at(…)` over `[….length - index]`. | dd136305-340a-46b2-8035-0f8826ab80c2 |
| 2792 | CODE_SMELL | MAJOR | src/main/goal.ts:1047 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 862a0d27-7aa3-4d60-936b-6d5ece3d432a |
| 2793 | CODE_SMELL | CRITICAL | src/main/session/continuation.ts:618 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 39 to the 15 allowed. | c6c918ac-7663-4912-8844-8ead9bf78648 |
| 2794 | CODE_SMELL | MINOR | extension/content.js:4271 | javascript:S7735 | Unexpected negated condition. | f02e6c79-7edc-416e-9943-f216c24200f9 |
| 2795 | CODE_SMELL | MAJOR | extension/content.js:4779 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 0b005fa9-9bb1-41f5-a3b9-de63db33aeec |
| 2796 | CODE_SMELL | MAJOR | extension/content.js:7103 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 171c29af-2e12-4f79-97c6-e578a76b8fdc |
| 2797 | CODE_SMELL | MAJOR | extension/content.js:10637 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 69d46a36-5add-41cb-8419-68262ed5944b |
| 2798 | CODE_SMELL | MAJOR | extension/content.js:10652 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 8e480ee9-de38-4d98-ae4f-4eed8b465069 |
| 2799 | CODE_SMELL | MINOR | src/main/bridge.ts:4046 | typescript:S4325 | This assertion is unnecessary since it does not change the type of the expression. | cf47c218-f328-4829-86da-4aefb8980830 |
| 2800 | CODE_SMELL | MAJOR | src/main/bridge.ts:4164 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 072ec33d-3374-4cfb-9c99-1bf33a3f01ad |
| 2801 | CODE_SMELL | MAJOR | src/main/bridge.ts:4165 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | a28ff685-789f-4ea1-b023-820011bcedea |
| 2802 | CODE_SMELL | MAJOR | src/main/bridge.ts:4166 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 568a30cb-917a-40fb-aecf-261f914fb0a7 |
| 2803 | CODE_SMELL | MAJOR | src/main/goal.ts:675 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 99d8b419-4d0c-4540-923f-7a553239df46 |
| 2804 | CODE_SMELL | MAJOR | src/main/goal.ts:706 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 8330d5e0-bbb1-4c7a-9b9a-78f83911c8aa |
| 2805 | CODE_SMELL | MAJOR | src/main/goal.ts:1633 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 5bf5924e-35cc-4450-bdb9-e00c8d739b9f |
| 2806 | CODE_SMELL | MAJOR | src/main/goal.ts:1643 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 9d867d41-cb68-46af-93b7-d4eda0fd308d |
| 2807 | CODE_SMELL | MAJOR | src/main/goal.ts:1936 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | d1dfb446-7433-4233-af16-2ea0b69499fc |
| 2808 | CODE_SMELL | MAJOR | src/main/goal.ts:1939 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 6b3ba2bc-daa1-49e9-a2e6-fd7ab9a60f48 |
| 2809 | CODE_SMELL | MAJOR | src/main/goal.ts:1946 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 57ea7f13-42a3-4faa-9c23-d17e4a0f1bd8 |
| 2810 | CODE_SMELL | MAJOR | src/main/bridge.ts:8854 | typescript:S107 | Function 'noteCallAttribution' has too many parameters (9). Maximum allowed is 7. | 38f04713-1621-4230-95d4-2603e6872d4d |
| 2811 | CODE_SMELL | MAJOR | extension/background.js:4517 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 68fef04f-8889-415a-bf33-1cf78aeb95cf |
| 2812 | CODE_SMELL | MAJOR | extension/content.js:6787 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 85b91fcc-7f74-47b1-8a43-b72e983e06d3 |
| 2813 | CODE_SMELL | MAJOR | extension/content.js:11896 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 60d63778-dbd2-4323-8d3f-5a309cc57922 |
| 2814 | CODE_SMELL | MAJOR | extension/background.js:1197 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 7c3e894d-2d0e-4138-a2f1-13decdfd5bd1 |
| 2815 | CODE_SMELL | MAJOR | extension/content.js:8004 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 60dd6334-41b0-4c45-8db5-3bd494f521b0 |
| 2816 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:2350 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 6a3b364e-74b5-4339-8645-e80551495d21 |
| 2817 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:2353 | javascript:S1874 | The signature '(commandId: string, showUI?: boolean \| undefined, value?: string \| undefined): boolean' of 'document.execCommand' is deprecated. | 3b196f05-4fdd-47f7-b335-18edbe33e5f2 |
| 2818 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:2354 | javascript:S1874 | The signature '(commandId: string, showUI?: boolean \| undefined, value?: string \| undefined): boolean' of 'document.execCommand' is deprecated. | 3f297428-bb5e-4afa-a661-4555ec830fd3 |
| 2819 | CODE_SMELL | MAJOR | extension/content.js:7964 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 4a8c1ceb-6ca7-4ffb-81a7-b6b6c2374bfb |
| 2820 | CODE_SMELL | MAJOR | extension/content.js:9431 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 54081d37-47f6-43d2-b00e-ada374a194da |
| 2821 | CODE_SMELL | MAJOR | extension/content.js:9457 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 79de8f9a-df51-4c54-9d2d-7915efb34ef2 |
| 2822 | CODE_SMELL | MINOR | extension/content.js:9741 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 24a7732d-83a4-49b6-b2ad-e72992ba35f8 |
| 2823 | CODE_SMELL | CRITICAL | extension/content.js:9771 | javascript:S3735 | Remove this use of the "void" operator. | aecd0913-2503-4c4e-a52a-36e2d9add5e2 |
| 2824 | CODE_SMELL | CRITICAL | extension/content.js:9801 | javascript:S3735 | Remove this use of the "void" operator. | 01c556f2-aebe-4359-b7cd-755fade787f3 |
| 2825 | CODE_SMELL | MAJOR | extension/content.js:9813 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 05f2453d-efb5-4a8f-b359-6ca48b89005e |
| 2826 | CODE_SMELL | MAJOR | extension/content.js:9813 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 4d48f3be-59ed-452c-8d4b-6217a758a339 |
| 2827 | CODE_SMELL | MINOR | extension/content.js:9885 | javascript:S7735 | Unexpected negated condition. | 6200cff2-e53e-4863-ab56-62e14685b154 |
| 2828 | CODE_SMELL | MAJOR | extension/content.js:9976 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | b3adaffc-178c-41ff-bac6-5f886d1c91ea |
| 2829 | CODE_SMELL | MAJOR | extension/content.js:10057 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | a8aa3970-f41a-412f-8e57-6c17681b94b0 |
| 2830 | CODE_SMELL | MAJOR | extension/content.js:10058 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | f52a38f3-84cf-43a4-aab9-1d081ed957dc |
| 2831 | CODE_SMELL | MAJOR | extension/content.js:10245 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | be9dbf83-37fe-4dbd-9235-a37dfa1e4dc2 |
| 2832 | CODE_SMELL | CRITICAL | extension/content.js:10276 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 21 to the 15 allowed. | 5cb1e071-897b-4b18-9110-49f3acce3c8f |
| 2833 | CODE_SMELL | MAJOR | extension/content.js:10292 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 15d71b7d-0edf-4896-9f73-ce8b4b2e211a |
| 2834 | CODE_SMELL | MAJOR | extension/content.js:10338 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 939ffac2-64f3-446a-ac37-a6f1714ac0cd |
| 2835 | CODE_SMELL | MAJOR | extension/content.js:10339 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | e719cc71-656a-4d4c-8502-915a61fc08f4 |
| 2836 | CODE_SMELL | MAJOR | extension/content.js:10361 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 001388d0-3391-42cd-932e-dee10d0e81cb |
| 2837 | CODE_SMELL | CRITICAL | extension/content.js:10395 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 18 to the 15 allowed. | 0b627e26-3882-46ab-8224-97ea5278098a |
| 2838 | CODE_SMELL | MAJOR | extension/content.js:10411 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 88f8f571-bfef-4317-9946-fe5a5c3d3d19 |
| 2839 | CODE_SMELL | CRITICAL | extension/content.js:10411 | javascript:S3735 | Remove this use of the "void" operator. | b41441da-2058-4427-8244-ada5d340f827 |
| 2840 | CODE_SMELL | MINOR | extension/content.js:11665 | javascript:S6594 | Use the "RegExp.exec()" method instead. | d8d0f208-f456-46be-9cfd-aff970ebacee |
| 2841 | CODE_SMELL | MAJOR | extension/content.js:11704 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 6a52c27c-e8db-447a-80a9-83859aff07ed |
| 2842 | CODE_SMELL | MAJOR | extension/content.js:11713 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 61536a55-bde1-489f-8525-aea8861d687c |
| 2843 | CODE_SMELL | MAJOR | extension/content.js:11713 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 718c51a0-75e5-4d63-b213-782a9adc6c02 |
| 2844 | CODE_SMELL | MAJOR | extension/content.js:11721 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 0612daef-486a-4d28-b5af-c91eb2006b95 |
| 2845 | CODE_SMELL | MAJOR | extension/content.js:11721 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 8e809db7-5edc-410b-95cf-73443ad8f7b6 |
| 2846 | CODE_SMELL | MAJOR | src/main/bridge.ts:3477 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 477879e7-7981-46bc-9353-4e331a40526f |
| 2847 | CODE_SMELL | MAJOR | src/main/bridge.ts:3483 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | a5bfad61-a6e2-4896-b3c6-4d8ca9eb4280 |
| 2848 | CODE_SMELL | MAJOR | src/main/bridge.ts:3497 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | c7132a65-d90d-426e-ac5d-527970d2d4ee |
| 2849 | CODE_SMELL | MAJOR | src/main/goal.ts:486 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | ec5106ec-6e02-46cc-9525-5da0d4c10813 |
| 2850 | CODE_SMELL | MAJOR | src/main/goal.ts:725 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 59d9adf0-8c10-4c4b-bdad-98dc70ca73a1 |
| 2851 | CODE_SMELL | MINOR | src/main/session/continuation.ts:1626 | typescript:S4325 | This assertion is unnecessary since it does not change the type of the expression. | da1e943f-89fb-41aa-9143-9810a6a27196 |
| 2852 | CODE_SMELL | MINOR | src/main/session/continuation.ts:1628 | typescript:S4325 | This assertion is unnecessary since it does not change the type of the expression. | a950dcec-ecb4-4422-a2bc-e072cda9bfee |
| 2853 | CODE_SMELL | MINOR | src/main/session/continuation.ts:1640 | typescript:S4325 | This assertion is unnecessary since it does not change the type of the expression. | aedfe88f-c449-43c2-ac80-3f6a70e9efdb |
| 2854 | CODE_SMELL | MINOR | src/main/session/continuation.ts:1642 | typescript:S4325 | This assertion is unnecessary since it does not change the type of the expression. | 62b5aa91-4e51-482e-a564-f6184760b27d |
| 2855 | CODE_SMELL | MINOR | src/main/bridge.ts:9147 | typescript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | e6b4ccce-4592-44d7-a7ef-d567c77895f5 |
| 2856 | CODE_SMELL | MAJOR | src/main/mcp/session-tool.ts:302 | typescript:S4624 | Refactor this code to not use nested template literals. | c5f0837c-7570-42e1-afcc-5f61bc67507f |
| 2857 | CODE_SMELL | MAJOR | src/main/mcp/session-tool.ts:813 | typescript:S4624 | Refactor this code to not use nested template literals. | 291d6ba8-8341-4ca6-ae11-44752d25f639 |
| 2858 | CODE_SMELL | CRITICAL | src/main/computer/index.ts:407 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 26 to the 15 allowed. | e02221b4-5767-48de-b083-7d899e4d6580 |
| 2859 | CODE_SMELL | MAJOR | src/main/computer/index.ts:1822 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | e7b6d067-cc12-4dd4-9dc9-cdeb06e4cb85 |
| 2860 | CODE_SMELL | CRITICAL | extension/content.js:10410 | javascript:S3735 | Remove this use of the "void" operator. | 7475305f-24bd-47bc-ae6f-127d842d29d3 |
| 2861 | CODE_SMELL | CRITICAL | extension/content.js:10412 | javascript:S3735 | Remove this use of the "void" operator. | 814cfad6-c25b-4ad9-97fe-41f5f76e0082 |
| 2862 | CODE_SMELL | CRITICAL | src/main/exec-hints.ts:219 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | c0b8ef59-33da-4050-bfa1-3bf9422e05e4 |
| 2863 | CODE_SMELL | MAJOR | src/main/goal.ts:1590 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | c70eb6d7-ed31-4284-a1a6-4889fae55192 |
| 2864 | CODE_SMELL | MAJOR | src/main/mcp/tools-core.ts:1013 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | b5bfdc2f-f356-4481-b2ab-7ce5cc7fa70d |
| 2865 | CODE_SMELL | MAJOR | src/main/computer/index.ts:1988 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 13d83c37-8d54-49ca-ad18-63b38950f881 |
| 2866 | CODE_SMELL | MAJOR | src/main/diagnostics.ts:171 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 88ffc6f5-b7e8-4713-9893-008f6a716df3 |
| 2867 | CODE_SMELL | MAJOR | src/main/diagnostics.ts:166 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 89428aff-8992-4e9d-802b-47110a76e28b |
| 2868 | CODE_SMELL | MAJOR | src/main/diagnostics.ts:167 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 0e73c5e6-d0f7-416a-b9cb-5981cb64ab73 |
| 2869 | CODE_SMELL | MINOR | src/main/computer/index.ts:1127 | typescript:S6551 | '(unavailableValue as Record&lt;string, unknown&gt;)['code'] ?? 'UI_UNAVAILABLE'' will use Object's default stringification format ('[object Object]') when stringified. | 33674d77-c2fa-47f4-a0f3-8b9343b8dbe6 |
| 2870 | CODE_SMELL | MINOR | src/main/computer/index.ts:1128 | typescript:S6551 | '(unavailableValue as Record&lt;string, unknown&gt;)['message'] ?? 'UI controls are unavailable'' will use Object's default stringification format ('[object Object]') when stringified. | 2c337c32-502b-464c-8493-b332e1778fd1 |
| 2871 | CODE_SMELL | MAJOR | scripts/prepare-macos-desktop-helper.mjs:130 | javascript:S7785 | Prefer top-level await over using a promise chain. | cffe2572-460f-4e34-89be-390e23cb9ef5 |
| 2872 | CODE_SMELL | MAJOR | extension/background.js:369 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 78d6d39c-bdf3-41f9-a6e2-a7ae603e4fa7 |
| 2873 | CODE_SMELL | MAJOR | extension/background.js:1231 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 06debebd-881e-44a6-84f4-8a9c65e79664 |
| 2874 | CODE_SMELL | MAJOR | extension/background.js:1234 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 1cbf51af-ebed-4b6a-9f83-cde6f7b04176 |
| 2875 | CODE_SMELL | MAJOR | extension/background.js:1235 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | edafa5c7-8121-4967-ae88-67336c10ad6b |
| 2876 | CODE_SMELL | CRITICAL | extension/background.js:3491 | javascript:S3735 | Remove this use of the "void" operator. | 99af7703-6d09-4ff2-8d55-5f491785e2bf |
| 2877 | CODE_SMELL | MAJOR | extension/background.js:3491 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | f3da5648-90c5-489f-bdce-d6e4d65e9a31 |
| 2878 | CODE_SMELL | MINOR | extension/background.js:4490 | javascript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | a16b1425-d274-480b-b598-0666103f0588 |
| 2879 | CODE_SMELL | MINOR | extension/background.js:4766 | javascript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | 34677ca9-1583-44c4-b5af-20121b5220c5 |
| 2880 | CODE_SMELL | MAJOR | extension/content.js:5329 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 28569e6e-5046-41ce-8828-fe76d6ea833f |
| 2881 | CODE_SMELL | MAJOR | extension/content.js:6402 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 86d7242e-2edc-4697-afbf-d97b02bcc398 |
| 2882 | CODE_SMELL | MAJOR | extension/content.js:9263 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | ed7cbaba-a359-42c4-93f1-be3e36ce9ea7 |
| 2883 | CODE_SMELL | CRITICAL | extension/content.js:10287 | javascript:S3735 | Remove this use of the "void" operator. | b0a5de41-c92a-4474-9651-b904e302abc0 |
| 2884 | CODE_SMELL | CRITICAL | extension/content.js:10291 | javascript:S3735 | Remove this use of the "void" operator. | 47598b19-b568-4fcf-a725-0996f38ccec1 |
| 2885 | CODE_SMELL | MAJOR | extension/content.js:10298 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 39e03705-421f-4ca8-885a-0ca1e125b643 |
| 2886 | CODE_SMELL | CRITICAL | extension/content.js:10300 | javascript:S3735 | Remove this use of the "void" operator. | bdb79b1b-a99e-4ed0-984a-00c55ff6f631 |
| 2887 | CODE_SMELL | MAJOR | extension/content.js:10313 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 75d279b5-78d8-4622-b05d-c8190d628648 |
| 2888 | CODE_SMELL | CRITICAL | extension/content.js:10318 | javascript:S3735 | Remove this use of the "void" operator. | 1c965c2f-d72f-4c68-90bf-c7f3a9722379 |
| 2889 | CODE_SMELL | MINOR | extension/content.js:10985 | javascript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | cc4c61ce-8783-4582-9aaa-d29aa555bd14 |
| 2890 | CODE_SMELL | MAJOR | extension/content.js:11196 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 73415a11-e676-4fe1-9c99-73d111149096 |
| 2891 | CODE_SMELL | MAJOR | extension/content.js:11264 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 335fad77-f489-4647-9429-7c8cd87d65f4 |
| 2892 | CODE_SMELL | MAJOR | extension/popup.js:272 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 92afe6cd-faed-4e96-8344-f588d099fb87 |
| 2893 | CODE_SMELL | MAJOR | extension/popup.js:280 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 089716d4-fbc4-4a10-adc6-84f6aad6aa61 |
| 2894 | CODE_SMELL | MAJOR | extension/popup.js:282 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 1d58b3a6-2ff5-491a-9300-91819c9217e1 |
| 2895 | CODE_SMELL | MAJOR | scripts/check-release-absent.mjs:12 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 2406e08f-cacd-473f-9021-317132845b5b |
| 2896 | CODE_SMELL | MINOR | scripts/check-release-absent.mjs:33 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 8b28b1f9-8a7b-4165-9e9e-03a888620f77 |
| 2897 | CODE_SMELL | MAJOR | scripts/check-release-absent.mjs:35 | javascript:S4624 | Refactor this code to not use nested template literals. | 13a45a3a-af7c-45d9-a9f3-2257ea7acbd4 |
| 2898 | CODE_SMELL | MAJOR | scripts/check-release-absent.mjs:49 | javascript:S7785 | Prefer top-level await over using a promise chain. | ea3ce398-72d8-4ce0-a10c-36a9069554ce |
| 2899 | CODE_SMELL | CRITICAL | scripts/macos-audit-utils.mjs:42 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | 705da3e6-8e3e-4642-8db9-54c0085108c7 |
| 2900 | CODE_SMELL | MINOR | scripts/macos-audit-utils.mjs:48 | javascript:S6594 | Use the "RegExp.exec()" method instead. | 08da65f7-a290-46dc-9759-62bec6d55bd1 |
| 2901 | CODE_SMELL | MINOR | scripts/macos-audit-utils.mjs:56 | javascript:S6594 | Use the "RegExp.exec()" method instead. | 08d60955-6f49-4b3f-8ca3-fe163e9276c2 |
| 2902 | CODE_SMELL | MINOR | scripts/macos-audit-utils.mjs:61 | javascript:S6594 | Use the "RegExp.exec()" method instead. | c18f7cf2-d6a2-472d-a5b4-c9870b4a6693 |
| 2903 | CODE_SMELL | MINOR | scripts/macos-audit-utils.mjs:70 | javascript:S6594 | Use the "RegExp.exec()" method instead. | 4fbb82c7-ab06-4c51-a9b3-25316b953eaf |
| 2904 | CODE_SMELL | MINOR | scripts/macos-audit-utils.mjs:125 | javascript:S6594 | Use the "RegExp.exec()" method instead. | ce416cf5-8407-4b22-ab69-2ed575639cd0 |
| 2905 | CODE_SMELL | MINOR | scripts/packaging-versions.mjs:3 | javascript:S7763 | Use `export…from` to re-export `SUPPORTED_ARCHES`. | d1077598-ca26-4d4a-aa7d-ee78f8d3b0af |
| 2906 | CODE_SMELL | MINOR | scripts/packaging-versions.mjs:3 | javascript:S7763 | Use `export…from` to re-export `SUPPORTED_PLATFORMS`. | f25940e7-871e-4f91-9f9d-828c69c92ed8 |
| 2907 | BUG | CRITICAL | scripts/smoke-packaged-runtime.mjs:157 | javascript:S2871 | Provide a compare function that depends on "String.localeCompare", to reliably sort elements alphabetically. | f4f20fa3-7bba-4e19-9119-360ee37cdf80 |
| 2908 | CODE_SMELL | CRITICAL | src/main/agents.ts:1952 | typescript:S1994 | This loop's stop condition tests "ids.length, ids, planned.length, planned" but the incrementer updates "n". | 9ade4896-0117-4551-a3ee-1fe660c66124 |
| 2909 | CODE_SMELL | MAJOR | src/main/agents.ts:4177 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | e6e099e9-c7a6-4505-abce-6b7c0ef3a806 |
| 2910 | CODE_SMELL | MAJOR | src/main/agents.ts:4282 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | d3bb3965-2b79-407c-96d7-37955c44e7b7 |
| 2911 | CODE_SMELL | MAJOR | src/main/agents.ts:4879 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | d1333a40-4b8b-4adc-9c80-dae1b68ef623 |
| 2912 | CODE_SMELL | MINOR | src/main/codex/shell.ts:122 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | 3488f2b4-8418-4cbe-b610-153a54df75d9 |
| 2913 | CODE_SMELL | MAJOR | src/main/codex/shell.ts:123 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 706f18fa-8ee1-4ae1-a788-d68e7240690e |
| 2914 | CODE_SMELL | MINOR | src/main/env.ts:32 | typescript:S6653 | Use 'Object.hasOwn()' instead of 'Object.prototype.hasOwnProperty.call()'. | ae418a9e-6515-43b7-b1dd-768020e84311 |
| 2915 | CODE_SMELL | MAJOR | src/main/exec-hints.ts:699 | typescript:S4624 | Refactor this code to not use nested template literals. | 0aa190cb-15aa-4409-ba59-873da1e46009 |
| 2916 | CODE_SMELL | MINOR | src/main/exec-hints.ts:699 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | 43128b4e-ab0e-4868-843b-d53fd68722c9 |
| 2917 | CODE_SMELL | MINOR | src/main/exec-hints.ts:699 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 968b42f2-0e95-4802-a313-132f84812947 |
| 2918 | CODE_SMELL | MAJOR | src/main/exec-hints.ts:1495 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 6b939d0c-1ca4-40e9-bd26-3b5ff26f268f |
| 2919 | CODE_SMELL | MINOR | src/main/exec-hints.ts:1523 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | f75559d1-77a9-4fde-8958-012fff4685c8 |
| 2920 | CODE_SMELL | MAJOR | src/main/exec-hints.ts:1586 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | b18618e4-0f6a-4b50-9b57-9ddc33dfb3df |
| 2921 | CODE_SMELL | MINOR | src/main/exec-hints.ts:1593 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | f42a0303-2182-40f7-8e09-14c9adf5a4d9 |
| 2922 | CODE_SMELL | MAJOR | src/main/exec-hints.ts:1596 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | d3a1b0af-d9c6-419e-9587-7525605617b2 |
| 2923 | CODE_SMELL | MAJOR | src/main/goal.ts:876 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 07fb6ccf-fda9-4cd4-ad40-742b162124e6 |
| 2924 | CODE_SMELL | CRITICAL | src/main/goal.ts:2497 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 21 to the 15 allowed. | 84cc3f02-6c21-4458-aac2-94d707a4c9f3 |
| 2925 | CODE_SMELL | MAJOR | src/main/goal.ts:2518 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 0f70fb77-7211-4e1b-878e-7a8ce5608ba6 |
| 2926 | CODE_SMELL | MINOR | src/main/goal.ts:2524 | typescript:S4325 | This assertion is unnecessary since it does not change the type of the expression. | ffec67cf-ef49-4355-af7a-4b3862f3baa9 |
| 2927 | CODE_SMELL | MINOR | src/main/mcp/tools-core.ts:2220 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 5b6944c5-1763-4bad-a38d-348c78282127 |
| 2928 | CODE_SMELL | MAJOR | src/main/sandbox.ts:360 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 3e0f7ec5-ba38-4d6d-9ff8-8201f71dd81b |
| 2929 | CODE_SMELL | MAJOR | src/main/secrets.ts:144 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 4ed0aec2-d21e-40c6-87c4-b0e833f67584 |
| 2930 | CODE_SMELL | CRITICAL | src/main/session/continuation.ts:1298 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 71 to the 15 allowed. | eafaa8ca-cabd-429d-a88b-c1bc3185d485 |
| 2931 | CODE_SMELL | CRITICAL | src/main/session/continuation.ts:1421 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 25 to the 15 allowed. | 4e796502-3718-4b7b-a33b-31748d0c79d4 |
| 2932 | CODE_SMELL | MINOR | src/main/session/handoff.ts:113 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 0fd431f9-9f7c-423c-9f2f-290365786577 |
| 2933 | CODE_SMELL | MINOR | src/main/session/handoff.ts:113 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 9cbff8ea-bff9-4ee4-b28d-be18ad5a02b0 |
| 2934 | CODE_SMELL | MINOR | src/main/session/handoff.ts:113 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | c3c9b99c-95b5-42c4-96a7-39a78c46233e |
| 2935 | CODE_SMELL | MINOR | src/main/session/store.ts:3316 | typescript:S7735 | Unexpected negated condition. | 9eaa70fd-7da4-421b-af45-32832ca6402a |
| 2936 | CODE_SMELL | MAJOR | src/main/tray-image.ts:93 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 8801c184-8a7d-4baf-9826-31c06ff0a1c2 |
| 2937 | CODE_SMELL | MINOR | src/main/tunnel/locate.ts:62 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | 4de2f292-97f8-454d-b3e8-b6b0f31781ed |
| 2938 | CODE_SMELL | MINOR | src/renderer/chat.ts:5042 | typescript:S7735 | Unexpected negated condition. | 712cd433-7440-4510-9996-fec42614a95a |
| 2939 | CODE_SMELL | MINOR | extension/background.js:451 | javascript:S2486 | Handle this exception or don't catch it at all. | ccce354e-fbff-4a96-891a-d8c6cdffe2e8 |
| 2940 | CODE_SMELL | MINOR | extension/background.js:456 | javascript:S7755 | Prefer `.at(…)` over `[….length - index]`. | 944af41f-06ce-46aa-88e0-3b32552369af |
| 2941 | CODE_SMELL | CRITICAL | extension/background.js:566 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 24 to the 15 allowed. | 5fe9a9ca-33da-4f80-8f37-9869f9212077 |
| 2942 | CODE_SMELL | MAJOR | extension/content.js:4926 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 9db85aec-96f9-41a3-8870-4cb7fa96ddd0 |
| 2943 | CODE_SMELL | MAJOR | extension/content.js:4927 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 408cddb8-c6e0-41d9-bfdb-fb8e4afce37b |
| 2944 | CODE_SMELL | MAJOR | extension/content.js:5213 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 126621eb-8df7-4031-955c-307cdbfd5674 |
| 2945 | CODE_SMELL | MINOR | extension/content.js:7469 | javascript:S7764 | Prefer `globalThis` over `window`. | 22bfcd55-f004-4e70-837c-01613014b3e8 |
| 2946 | CODE_SMELL | MINOR | extension/content.js:8506 | javascript:S7764 | Prefer `globalThis` over `window`. | 79663248-5998-46f7-b8d3-8ef484cad04e |
| 2947 | CODE_SMELL | MINOR | extension/content.js:8507 | javascript:S7764 | Prefer `globalThis` over `window`. | e06f403e-bd00-420e-befb-3379938122b2 |
| 2948 | CODE_SMELL | MINOR | extension/content.js:11828 | javascript:S7764 | Prefer `globalThis` over `window`. | 1d0638cb-486f-4a91-9906-07ac600b49c9 |
| 2949 | CODE_SMELL | MAJOR | extension/content.js:13290 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | b52f9096-f365-4898-841c-9cafef5e58bd |
| 2950 | CODE_SMELL | MINOR | extension/fiber.js:929 | javascript:S4138 | Expected a `for-of` loop instead of a `for` loop with this simple iteration. | 82b2f70c-4a2e-4dab-9b91-1e6985ae7618 |
| 2951 | CODE_SMELL | MAJOR | src/main/agents.ts:2801 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 11365170-7d19-451c-b514-e0cb31c0b19d |
| 2952 | CODE_SMELL | MAJOR | src/main/agents.ts:2801 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 68744afc-95d0-42cd-8c03-1840cda62b9f |
| 2953 | CODE_SMELL | MAJOR | src/main/agents.ts:3199 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 63b2107c-4cdb-4123-a8c2-4279ffc5a9ae |
| 2954 | CODE_SMELL | MAJOR | src/main/agents.ts:3210 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 0b2ba566-4cac-44ba-9ec5-7986bbfc892c |
| 2955 | CODE_SMELL | MAJOR | src/main/agents.ts:3448 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 3eab12dc-bbfd-4ad6-97fb-d47670eced82 |
| 2956 | CODE_SMELL | MAJOR | src/main/agents.ts:3504 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 7bf21e5a-e50b-40d4-8402-52a6f7ef7acd |
| 2957 | CODE_SMELL | MAJOR | src/main/agents.ts:3508 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | e9ce0a93-db2b-4d23-8334-373412978c38 |
| 2958 | CODE_SMELL | MAJOR | src/main/agents.ts:3561 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | f086998d-e318-4242-a713-ea61cda8f380 |
| 2959 | CODE_SMELL | MAJOR | src/main/agents.ts:4432 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 739d6959-0e0a-4b43-9994-2b40ee50db7d |
| 2960 | CODE_SMELL | MAJOR | src/main/agents.ts:4827 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | dae1c63a-5bb9-4085-a818-c56a88e5b4be |
| 2961 | CODE_SMELL | MAJOR | src/main/bridge.ts:4528 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | dea84571-c92c-445b-bab5-c0b966e69f30 |
| 2962 | CODE_SMELL | MAJOR | src/main/bridge.ts:5673 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | ffa5ba7e-b0e2-457f-9dc7-0d009ff3c502 |
| 2963 | CODE_SMELL | MAJOR | src/main/bridge.ts:10338 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 79acadf5-f573-47a6-9e0e-b30140cf8268 |
| 2964 | CODE_SMELL | CRITICAL | src/main/bridge.ts:10496 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 29 to the 15 allowed. | 0b5f92a1-42fd-42a6-ae59-b5c2d7934a19 |
| 2965 | CODE_SMELL | CRITICAL | src/main/codex/apply-patch/index.ts:233 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 47 to the 15 allowed. | 568f1381-fca7-415c-b9f1-75440eede46e |
| 2966 | CODE_SMELL | MINOR | src/main/codex/command-batch.ts:24 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | 3996fc0c-2e43-4f60-abf8-d1a19371b2b6 |
| 2967 | CODE_SMELL | MAJOR | src/main/codex/command-batch.ts:24 | typescript:S4624 | Refactor this code to not use nested template literals. | 91d1c9e6-24cb-4204-87d5-b6eee240dadd |
| 2968 | CODE_SMELL | MINOR | src/main/codex/command-batch.ts:24 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | f9438dea-b18f-4061-9117-c3ed2de017c0 |
| 2969 | CODE_SMELL | MAJOR | src/main/codex/command-batch.ts:30 | typescript:S4624 | Refactor this code to not use nested template literals. | 64652d4d-51b4-4e97-a993-35e9a9f4fe89 |
| 2970 | CODE_SMELL | MINOR | src/main/codex/command-batch.ts:70 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | c3fbc014-3bae-4c55-9d62-c747a3f13a1f |
| 2971 | CODE_SMELL | MINOR | src/main/codex/command-batch.ts:73 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | 440b1937-3e5a-43fa-9d6a-e533374d2d1c |
| 2972 | CODE_SMELL | MINOR | src/main/codex/command-batch.ts:181 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | e5b9ab47-d469-4b9a-8e63-2216f08654ac |
| 2973 | CODE_SMELL | MINOR | src/main/codex/command-batch.ts:182 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | d4192a42-c7ab-401c-a173-279710a18f48 |
| 2974 | CODE_SMELL | CRITICAL | src/main/codex/read-backend.ts:240 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 30 to the 15 allowed. | b8d178c6-312d-4d74-b83f-2fbe73430b7e |
| 2975 | CODE_SMELL | MINOR | src/main/computer/index.ts:925 | typescript:S4325 | This assertion is unnecessary since it does not change the type of the expression. | c24e2f25-4981-4366-bdec-d21bd5ebcb53 |
| 2976 | CODE_SMELL | CRITICAL | src/main/computer/index.ts:1502 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 37 to the 15 allowed. | 872a905c-3dd3-42c8-bba3-0e55d819029c |
| 2977 | CODE_SMELL | MINOR | src/main/exec-hints.ts:1549 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | 055d1988-9443-42e6-ac3c-711172dde390 |
| 2978 | CODE_SMELL | MAJOR | src/main/exec-hints.ts:1573 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 5716df5d-ca72-42e5-9576-a01c9872f5ac |
| 2979 | CODE_SMELL | MAJOR | src/main/exec-hints.ts:1575 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | bb9adfac-4a39-40d8-b777-4a4635426b28 |
| 2980 | CODE_SMELL | MINOR | src/main/mcp/tools-core.ts:196 | typescript:S7765 | Use `.includes()`, rather than `.indexOf()`, when checking for existence. | 7242b5ad-8b00-4e02-a5e2-a4278507748f |
| 2981 | CODE_SMELL | MAJOR | src/main/mcp/tools-core.ts:789 | typescript:S4624 | Refactor this code to not use nested template literals. | a98e49ef-d9ab-43e2-9b7f-9ff70f2ece5f |
| 2982 | CODE_SMELL | CRITICAL | src/main/mcp/tools-core.ts:841 | typescript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | de5e67cd-6b13-4294-933f-4e1c67ef24af |
| 2983 | CODE_SMELL | CRITICAL | src/main/mcp/tools-core.ts:845 | typescript:S2004 | Refactor this code to not nest functions more than 4 levels deep. | 04972866-3a18-41e7-b44c-cbbfdf853bc6 |
| 2984 | CODE_SMELL | MINOR | src/main/mcp/tools-core.ts:913 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 99ec8b28-6456-4168-8fd4-8012678ca3e4 |
| 2985 | CODE_SMELL | MINOR | src/main/mcp/tools-core.ts:989 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 6af03052-d4ba-4af1-a67d-c6c71a519754 |
| 2986 | CODE_SMELL | MAJOR | src/main/mcp/tools-core.ts:1635 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 38b2c09f-b7fd-4853-b107-a9831529a374 |
| 2987 | CODE_SMELL | MAJOR | src/main/mcp/tools-core.ts:1635 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 91a3fa5d-fee2-4c6a-b2c0-92ac23a87092 |
| 2988 | CODE_SMELL | MAJOR | src/main/mcp/tools-core.ts:1640 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 9c413a4a-8205-4b0e-ad0e-fbced2e3d134 |
| 2989 | CODE_SMELL | MAJOR | src/main/mcp/tools-core.ts:1645 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | dd2760fc-3a69-46b9-ae0c-7380309118f2 |
| 2990 | CODE_SMELL | CRITICAL | src/main/mcp/tools-core.ts:1836 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 24 to the 15 allowed. | a29d468c-0b5b-4010-9b43-d47d4c8bffa2 |
| 2991 | CODE_SMELL | MAJOR | src/main/mcp/tools-core.ts:1983 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 145679ce-9505-4836-8aa9-7260b6157221 |
| 2992 | CODE_SMELL | MAJOR | src/main/mcp/tools-core.ts:1983 | typescript:S4624 | Refactor this code to not use nested template literals. | 9bad58ef-73cb-479a-97a9-085946074a35 |
| 2993 | CODE_SMELL | MAJOR | src/main/search.ts:178 | typescript:S6535 | Unnecessary escape character: \[. | ac29e606-64a8-437b-a0bb-c656927e750e |
| 2994 | CODE_SMELL | MINOR | src/main/search.ts:178 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | beb872ed-ae39-40cc-b9cf-4f6d8378936f |
| 2995 | CODE_SMELL | MINOR | src/main/search.ts:178 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | e0d14077-5b31-46f4-ba1a-f1975da41a0b |
| 2996 | CODE_SMELL | MAJOR | src/main/search.ts:308 | typescript:S4624 | Refactor this code to not use nested template literals. | 82360b79-c2c1-45a6-a3ce-698f301e6896 |
| 2997 | CODE_SMELL | MAJOR | src/main/search.ts:316 | typescript:S4624 | Refactor this code to not use nested template literals. | b5b29f32-201d-4565-b9bf-93bd90027831 |
| 2998 | CODE_SMELL | CRITICAL | src/main/search.ts:462 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | 6632b4a8-6fa2-4dcf-bf40-0d7bd5d44aff |
| 2999 | CODE_SMELL | MAJOR | src/main/session/store.ts:1669 | typescript:S4043 | Move this array "sort" operation to a separate statement or replace it with "toSorted". | c7d585c0-ed38-47c2-9621-059a450701ba |
| 3000 | CODE_SMELL | MAJOR | src/main/session/store.ts:1720 | typescript:S4043 | Move this array "sort" operation to a separate statement or replace it with "toSorted". | 68c85d0f-946d-4cdc-a787-6e303cfbcdc4 |
| 3001 | CODE_SMELL | MAJOR | src/main/session/store.ts:2450 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | f7ec2f22-5a14-41f8-ad44-7ea6c6bcec05 |
| 3002 | CODE_SMELL | MINOR | src/renderer/chat.ts:1128 | typescript:S7735 | Unexpected negated condition. | 14df471a-77d0-4225-b938-b27cb82dd451 |
| 3003 | CODE_SMELL | MINOR | src/renderer/chat.ts:1697 | typescript:S7764 | Prefer `globalThis` over `window`. | 9dcce046-acb5-4043-9206-8545667545b2 |
| 3004 | CODE_SMELL | MINOR | src/renderer/chat.ts:5046 | typescript:S7735 | Unexpected negated condition. | 28d6b1b1-28e8-44bd-8be2-2dda80b1ac29 |
| 3005 | CODE_SMELL | MAJOR | extension/background.js:1177 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | b60b84c0-88d6-4a57-adcd-6ae8fa25f348 |
| 3006 | CODE_SMELL | MAJOR | extension/background.js:1265 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | c86133ba-6adb-470a-84ee-cf8d390a0ea0 |
| 3007 | CODE_SMELL | MAJOR | extension/content.js:155 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 22e72e65-3a5f-42a0-96f7-ca22e83b3c9f |
| 3008 | CODE_SMELL | MAJOR | extension/content.js:159 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 61f3dc2d-1e04-45a6-ae86-aee6bf6dbd61 |
| 3009 | CODE_SMELL | MAJOR | extension/content.js:2614 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 20dec6eb-cd47-4e97-a40d-972e91a1155b |
| 3010 | CODE_SMELL | MAJOR | extension/content.js:6126 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | a8dada8c-f8d9-4590-806b-e595b73778c6 |
| 3011 | CODE_SMELL | MAJOR | extension/content.js:6139 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | cae60c95-b2ad-460d-a063-b7bb4816e72d |
| 3012 | CODE_SMELL | CRITICAL | extension/content.js:6140 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 33 to the 15 allowed. | 08ce993f-befe-4edb-bc1e-7fdd512a9745 |
| 3013 | CODE_SMELL | MAJOR | extension/content.js:6145 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 4004771d-83cf-49e8-a4ab-9f4da9308371 |
| 3014 | CODE_SMELL | MAJOR | extension/content.js:6152 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 9ba56c9e-ec00-4b51-a4c7-d0e20ddaf7a1 |
| 3015 | CODE_SMELL | MAJOR | extension/content.js:6153 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 4de22db6-569a-444c-b511-53e460c825a6 |
| 3016 | CODE_SMELL | MAJOR | extension/content.js:6158 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 28563f30-22dd-4e2f-8ce6-2c9cf1c8d715 |
| 3017 | CODE_SMELL | MAJOR | extension/content.js:6169 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 7b8295ae-fb10-456d-9a25-bb9521950448 |
| 3018 | CODE_SMELL | MAJOR | extension/content.js:6180 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | d95b405d-f779-41cf-8007-fd84d0a4bcd2 |
| 3019 | CODE_SMELL | MAJOR | extension/content.js:6646 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 163b99b9-aaac-4c09-b956-e35db44433ec |
| 3020 | CODE_SMELL | MINOR | extension/content.js:7326 | javascript:S7735 | Unexpected negated condition. | cb54f0af-80ab-45b1-bd03-0bf736861a82 |
| 3021 | CODE_SMELL | MINOR | extension/content.js:7358 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | e0bbdc31-6ea6-415b-8678-6eb58e4119c3 |
| 3022 | CODE_SMELL | MAJOR | extension/content.js:7887 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | d10e787c-9dfc-4570-9694-be06689c457f |
| 3023 | CODE_SMELL | MAJOR | extension/content.js:7943 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 2e5f965a-ae79-4321-a79a-73c8d6e2645c |
| 3024 | CODE_SMELL | MAJOR | extension/content.js:8072 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 6f4de2d3-dd6d-4c7b-a2cd-451fc02fcdf5 |
| 3025 | CODE_SMELL | MAJOR | extension/content.js:8500 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 0d7b773a-4bcd-478a-9f09-648b457437a0 |
| 3026 | CODE_SMELL | MAJOR | extension/content.js:8500 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 1c18e44d-73cf-4fa6-a7bd-8541fa79b650 |
| 3027 | CODE_SMELL | MAJOR | extension/content.js:9050 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | bfdb4318-10e6-47d8-968b-0b9bede46521 |
| 3028 | CODE_SMELL | MAJOR | extension/overlay.css:1448 | css:S7924 | Text does not meet the minimal contrast requirement with its background. | 856bba44-7bab-492d-ba37-46e0a276d272 |
| 3029 | CODE_SMELL | CRITICAL | src/main/goal.ts:2211 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | a3fe0f93-dd39-402d-a397-9033472ff3cc |
| 3030 | CODE_SMELL | MINOR | src/main/goal.ts:2250 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 1e18a6ed-4f6c-48ec-b56b-e5a939b4c0cf |
| 3031 | CODE_SMELL | MINOR | src/main/goal.ts:2251 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | b08495c0-df79-4986-ada8-e1b29999abfb |
| 3032 | CODE_SMELL | MAJOR | scripts/install-git-hooks.mjs:11 | javascript:S4624 | Refactor this code to not use nested template literals. | b2586b38-e985-4e81-8811-ce0eecd71838 |
| 3033 | CODE_SMELL | MAJOR | scripts/verify-public-history.mjs:28 | javascript:S4624 | Refactor this code to not use nested template literals. | c3bb9172-4ccf-427b-b4c5-542152216bb5 |
| 3034 | CODE_SMELL | MINOR | scripts/verify-public-history.mjs:42 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 88d80940-5b04-481a-b22d-3de1eb7faf18 |
| 3035 | CODE_SMELL | MINOR | scripts/verify-public-history.mjs:190 | javascript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | 62584697-97bb-40a7-a033-964d51d5947f |
| 3036 | CODE_SMELL | MAJOR | extension/background.js:660 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 4b8ecf0e-6d37-4b58-888b-bb8187814862 |
| 3037 | CODE_SMELL | MAJOR | extension/background.js:745 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 97f00314-85b1-4877-bbb3-29114126f132 |
| 3038 | CODE_SMELL | MAJOR | extension/background.js:949 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 663e96cd-ea83-4746-adb5-1151a8785b54 |
| 3039 | CODE_SMELL | CRITICAL | extension/background.js:1010 | javascript:S3735 | Remove this use of the "void" operator. | ffcbab3c-7afe-4878-8b1e-d9ed8d00c03d |
| 3040 | CODE_SMELL | MAJOR | extension/background.js:1028 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 9a2b7a58-cd31-46bd-8645-7fe2e5798043 |
| 3041 | CODE_SMELL | MAJOR | extension/background.js:1281 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 028b3c47-68de-4698-a628-f2764bec5ab7 |
| 3042 | CODE_SMELL | MAJOR | extension/background.js:1317 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 79b80e61-bf81-4c06-89db-c127f3654883 |
| 3043 | CODE_SMELL | MINOR | extension/background.js:1351 | javascript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | 3e5af830-873e-43f6-941f-1b765aa4a905 |
| 3044 | CODE_SMELL | MAJOR | extension/background.js:1360 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | a0ab4027-938d-42bc-9ad7-278c98726ba9 |
| 3045 | CODE_SMELL | MAJOR | extension/background.js:1620 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | b0af3c5b-c711-4a5b-ab65-08c0c4daa234 |
| 3046 | CODE_SMELL | MAJOR | extension/background.js:1629 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | a681b4c7-3778-4b13-b5c8-0d94cae9a739 |
| 3047 | CODE_SMELL | MINOR | extension/background.js:1656 | javascript:S6653 | Use 'Object.hasOwn()' instead of 'Object.prototype.hasOwnProperty.call()'. | 377a59bc-8e97-456f-a385-11520c9eaa68 |
| 3048 | CODE_SMELL | MINOR | extension/background.js:1695 | javascript:S6653 | Use 'Object.hasOwn()' instead of 'Object.prototype.hasOwnProperty.call()'. | ee5240e8-0d94-49a0-ac18-55c76b6fc343 |
| 3049 | CODE_SMELL | MINOR | extension/background.js:1734 | javascript:S6653 | Use 'Object.hasOwn()' instead of 'Object.prototype.hasOwnProperty.call()'. | dfbf1acc-156c-44e0-982f-87bfa8543900 |
| 3050 | CODE_SMELL | MINOR | extension/background.js:1760 | javascript:S6653 | Use 'Object.hasOwn()' instead of 'Object.prototype.hasOwnProperty.call()'. | a5dbb734-1677-4a2d-a595-66b35f0f7b3d |
| 3051 | CODE_SMELL | MINOR | extension/background.js:3117 | javascript:S7765 | Use `.includes()` instead of `.some()` when checking value existence. | 1e3021e3-54b9-4c36-9dfb-2a5b517d6667 |
| 3052 | CODE_SMELL | MINOR | extension/background.js:3145 | javascript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | 284a8f46-fe29-4080-8bdb-19ec34ae8509 |
| 3053 | CODE_SMELL | MAJOR | extension/background.js:3146 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | c83acfa9-dc7d-4c63-b45d-ce3447862bdd |
| 3054 | CODE_SMELL | MAJOR | extension/background.js:3580 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | cebeeeb1-a038-4d67-a1b8-9cacd4a8ed84 |
| 3055 | CODE_SMELL | MINOR | extension/background.js:3607 | javascript:S7770 | arrow function is equivalent to `Number`. Use `Number` directly. | 816f1f8f-0387-482e-b54c-4f03f8804fd4 |
| 3056 | CODE_SMELL | MINOR | extension/background.js:3624 | javascript:S7773 | Prefer `Number.NaN` over `NaN`. | 80b1c63f-4077-4e9a-9dbf-eacc137e39fc |
| 3057 | CODE_SMELL | MAJOR | extension/background.js:3632 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 6831bb8c-9a4b-43b8-9e19-8f24a9c6e98f |
| 3058 | CODE_SMELL | MAJOR | extension/background.js:3658 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 0e6658e7-0724-4c15-b775-296453e46630 |
| 3059 | CODE_SMELL | MINOR | extension/background.js:3663 | javascript:S6653 | Use 'Object.hasOwn()' instead of 'Object.prototype.hasOwnProperty.call()'. | 92d68ee5-4f07-4084-bfa5-6408d25180bd |
| 3060 | CODE_SMELL | MAJOR | extension/background.js:3685 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 21bc2683-1f9c-425a-adad-f95f14a4ab0e |
| 3061 | CODE_SMELL | MAJOR | extension/background.js:3689 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 28728175-bef6-46f9-b950-9e05ff291ca2 |
| 3062 | CODE_SMELL | MAJOR | extension/background.js:4289 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 85b17819-e96c-4683-b30c-71db71a1c891 |
| 3063 | CODE_SMELL | CRITICAL | extension/background.js:4326 | javascript:S3735 | Remove this use of the "void" operator. | 7fbe4fc2-d642-4c19-a1b5-9c539f6e1aaa |
| 3064 | CODE_SMELL | CRITICAL | extension/background.js:4417 | javascript:S3735 | Remove this use of the "void" operator. | 8d6383dc-f47a-4bd9-b891-2966e496420b |
| 3065 | CODE_SMELL | MAJOR | extension/background.js:4829 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 2a67e46f-a4bb-4c1b-b1a2-a8dd13a73e60 |
| 3066 | CODE_SMELL | CRITICAL | extension/background.js:4948 | javascript:S3735 | Remove this use of the "void" operator. | 441d7c1e-f13f-4331-af39-c17c93258af5 |
| 3067 | CODE_SMELL | MAJOR | extension/background.js:4960 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 0883b8d9-0969-4e71-899f-8b64cbc21ea8 |
| 3068 | CODE_SMELL | MAJOR | extension/background.js:4962 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 64c7777f-a553-44bd-916c-23387bc681d7 |
| 3069 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:25 | javascript:S3504 | Unexpected var, use let or const instead. | d546928a-918a-457d-8e89-53947cf32aba |
| 3070 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:67 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 77295ae9-a390-4da2-9e9d-2c4c593c760a |
| 3071 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:252 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | d58d5526-9a6b-4c2b-9031-884c18732957 |
| 3072 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:253 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 950046a8-b4d4-4c80-b69c-05f257ee4a5c |
| 3073 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:317 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | b7f85ea4-03a7-4411-bd31-144c1228d684 |
| 3074 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:344 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | a5bf04c8-d6bf-481d-876d-dba4b33d6185 |
| 3075 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:655 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 001c0aff-16c8-47fd-8fde-da4ae4dcc2e5 |
| 3076 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:655 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 583e6e9e-1d14-4eed-a6d0-9720072dcd68 |
| 3077 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:760 | javascript:S7755 | Prefer `.at(…)` over `[….length - index]`. | 9dec6bbd-c352-4c4f-a80b-f5ff72626cd2 |
| 3078 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:1098 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 6e0961f1-a770-48a7-978e-469e519d5490 |
| 3079 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:1101 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | b6d46dbf-1acb-405f-b10c-68b65beeb366 |
| 3080 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:1111 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 5a17bf45-87a1-4fcd-908d-da76afd61a85 |
| 3081 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:1138 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 37f3fddf-943d-4586-976f-e15a05d72d12 |
| 3082 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:1139 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 44170d32-eeca-4752-a974-8fcf0e17a53d |
| 3083 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:1195 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 73a6a648-7f2f-49ab-8983-9c78af48cf49 |
| 3084 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:1195 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | c2df4b97-8590-4e23-b3ff-4661be238975 |
| 3085 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:1217 | javascript:S7765 | Use `.includes()`, rather than `.indexOf()`, when checking for existence. | ce047ec8-8ba4-4e30-a0b6-33754a5a1c93 |
| 3086 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:1238 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 22 to the 15 allowed. | f31a9342-cb7e-45a6-aed6-54105cac28ab |
| 3087 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:1269 | javascript:S7755 | Prefer `.at(…)` over `[….length - index]`. | 4b4199e9-4407-4970-8b1b-dc3e4f89a255 |
| 3088 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:1295 | javascript:S7765 | Use `.includes()`, rather than `.indexOf()`, when checking for existence. | bfd56854-92b2-4164-b7c2-8411f9ee2ff0 |
| 3089 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:1299 | javascript:S7765 | Use `.includes()`, rather than `.indexOf()`, when checking for existence. | b206c521-5bbf-469f-bc34-7d82f008846c |
| 3090 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:1325 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 660f53fd-e2c0-43c7-a110-0b2da009b5c4 |
| 3091 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:1359 | javascript:S7761 | Prefer `.dataset` over `hasAttribute(…)`. | 71e874e2-59a2-4349-b62a-324d42ddbc7d |
| 3092 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:1360 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | 47d9f4b8-a411-483c-8128-b648e90c7647 |
| 3093 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:1380 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 092d31c7-683b-4895-bd9c-d1defd2a8dfc |
| 3094 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:1380 | javascript:S7761 | Prefer `.dataset` over `hasAttribute(…)`. | 50bf32a3-1ca9-4ad5-97d5-871027840773 |
| 3095 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:1385 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 00cfcb0f-f261-4e7e-8c21-a3942698b54d |
| 3096 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:1386 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | e6bd82c5-4abb-44db-aaa5-9cc15d36784b |
| 3097 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:1387 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 5d3fe6b6-42cf-4a28-af77-135dde3f97a7 |
| 3098 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:1390 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 02f77444-0644-4078-b76c-048ce1a9f123 |
| 3099 | CODE_SMELL | CRITICAL | extension/chatgpt-dom.js:1462 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | 50333e9e-2024-4484-aa13-5099b6214cb0 |
| 3100 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:1467 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 0f7c19ad-775e-48f8-a0ca-9ec102c36787 |
| 3101 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:1489 | javascript:S4030 | Either use this collection's contents or remove the collection. | 6984aeac-b4d8-4426-bfc8-cf88539511b8 |
| 3102 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:1497 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | a87d4ffb-1ebf-4d3e-be76-4b49ce96482f |
| 3103 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:1532 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | a44e2f79-5087-40de-a5ec-6bfc43fa8b86 |
| 3104 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:1532 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | a7ce40ef-beac-4579-923e-057b126f70b4 |
| 3105 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:1547 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | c5db4d7b-6892-440b-977f-3ba565d3d59d |
| 3106 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:1548 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | 584e3209-c47b-4a60-bb66-8b5f68fcabbe |
| 3107 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:1601 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | e434e7ef-52f2-44c0-a389-735936d0fe73 |
| 3108 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:1602 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | b9445d50-95bc-4d00-aa32-818c6d4bafef |
| 3109 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:1604 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | c630c571-7178-4c0b-939f-34d0ee175e08 |
| 3110 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:1630 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | de692c77-8805-4f15-b0ef-aa4fdaa71205 |
| 3111 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:1689 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | d17dcead-ebd0-48dd-a303-9aeda4472707 |
| 3112 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:1691 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 7f65aff3-9bee-4672-895e-059135f2bb84 |
| 3113 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:1729 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | a8de0b70-7f82-4dd4-b756-dac42747af7c |
| 3114 | CODE_SMELL | MINOR | extension/chatgpt-dom.js:1899 | javascript:S7765 | Use `.includes()`, rather than `.indexOf()`, when checking for existence. | 30b99dce-52e7-4c5e-b6d6-4e000ee4c94d |
| 3115 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:1965 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 0d69ecbd-0b9b-44e6-8bed-1e9782cc746a |
| 3116 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:1986 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | b0df4d57-baee-49fc-aa83-a1d424db04a0 |
| 3117 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2247 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | 8d50a7cc-6473-4cd5-8e38-7db24259d6be |
| 3118 | CODE_SMELL | MAJOR | extension/chatgpt-dom.js:2248 | javascript:S7761 | Prefer `.dataset` over `removeAttribute(…)`. | 95357d69-42b5-48f4-8c91-5ef7acdcab88 |
| 3119 | CODE_SMELL | MINOR | extension/content.js:148 | javascript:S6644 | Unnecessary use of boolean literals in conditional expression. | 2664b3ec-f526-4170-85f1-d06e4c253eec |
| 3120 | CODE_SMELL | MAJOR | extension/content.js:178 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | aa887c05-3215-4d4b-b228-565c62f2e9ef |
| 3121 | CODE_SMELL | MINOR | extension/content.js:347 | javascript:S7758 | Prefer `String#codePointAt()` over `String#charCodeAt()`. | 370dec5b-3a46-41e8-9388-57232660ad49 |
| 3122 | CODE_SMELL | MAJOR | extension/content.js:348 | javascript:S3782 | Verify that argument is of correct type: expected 'number' instead of 'number \| undefined'. | be835003-542e-4784-a2c5-ea73c9ddf99e |
| 3123 | CODE_SMELL | MINOR | extension/content.js:468 | javascript:S7764 | Prefer `globalThis` over `window`. | e88525a7-d478-4073-9a4e-543b4f99951b |
| 3124 | CODE_SMELL | MAJOR | extension/content.js:1305 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | ec3a01ff-a8f8-4087-8452-a237cd89edb9 |
| 3125 | CODE_SMELL | MAJOR | extension/content.js:1319 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 13c21d1a-c96c-4253-98af-7bff6e4eaebb |
| 3126 | CODE_SMELL | MAJOR | extension/content.js:1323 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 9441f402-f845-45af-851f-035c0b56c1fd |
| 3127 | CODE_SMELL | MAJOR | extension/content.js:1480 | javascript:S1854 | Remove this useless assignment to variable "flushing". | 9e39050c-2d08-4052-8795-862a57eeacdf |
| 3128 | CODE_SMELL | MAJOR | extension/content.js:1504 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | aa482d25-eb2e-41db-95ce-079d077c9aea |
| 3129 | CODE_SMELL | MAJOR | extension/content.js:1505 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 83dead88-b47b-41b8-8d49-eeb2e7d5d7fb |
| 3130 | CODE_SMELL | MAJOR | extension/content.js:1520 | javascript:S1854 | Remove this useless assignment to variable "flushing". | e14cd849-c0eb-4c54-a234-1c5faebec374 |
| 3131 | CODE_SMELL | MINOR | extension/content.js:2056 | javascript:S7765 | Use `.includes()`, rather than `.indexOf()`, when checking for existence. | 4d3a3d20-a61d-4293-bd4c-bd8263489291 |
| 3132 | CODE_SMELL | MAJOR | extension/content.js:2116 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 669a6cfe-8fa9-4916-9533-ec1339a1b0c3 |
| 3133 | CODE_SMELL | MAJOR | extension/content.js:2232 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 59a9df8a-bd0c-40f2-bd3c-7bd1793d02c2 |
| 3134 | CODE_SMELL | CRITICAL | extension/content.js:2643 | javascript:S3735 | Remove this use of the "void" operator. | 7cceed67-4678-4a77-9a65-cf3bc611038a |
| 3135 | CODE_SMELL | MAJOR | extension/content.js:2825 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | ed98be50-e785-48ea-ba78-e6725da5fd61 |
| 3136 | CODE_SMELL | CRITICAL | extension/content.js:2884 | javascript:S3735 | Remove this use of the "void" operator. | d5452742-b396-408a-bab6-4dfe664d2106 |
| 3137 | CODE_SMELL | CRITICAL | extension/content.js:3055 | javascript:S3735 | Remove this use of the "void" operator. | bd3136ed-d552-421f-a967-2b7db7c943ce |
| 3138 | CODE_SMELL | MAJOR | extension/content.js:3096 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 8db85f6f-83d2-41a4-b93c-22a73ac9eaf5 |
| 3139 | CODE_SMELL | CRITICAL | extension/content.js:3106 | javascript:S3735 | Remove this use of the "void" operator. | 376f6ef5-0a49-4369-b3b6-007dc306a497 |
| 3140 | CODE_SMELL | MAJOR | extension/content.js:3217 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | bf67dcdf-836c-4c5c-b810-fc06f499dbe1 |
| 3141 | CODE_SMELL | MAJOR | extension/content.js:3218 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 1716c303-a063-4809-b5d0-e5d8eb7a729a |
| 3142 | CODE_SMELL | MAJOR | extension/content.js:3224 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 3f7079e8-af92-4cc7-bda0-83ae227dbfdd |
| 3143 | CODE_SMELL | MAJOR | extension/content.js:3226 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 6524d1c7-b427-4db5-8bbc-004e1eccf4ba |
| 3144 | CODE_SMELL | MINOR | extension/content.js:3384 | javascript:S1481 | Remove unused function 'labelText'. | e0f4ab0f-445f-40d3-9f23-3ee9f844254c |
| 3145 | CODE_SMELL | INFO | extension/content.js:3396 | javascript:S1135 | Complete the task associated to this "TODO" comment. | 8e547fbc-b5b8-4298-bdb4-b3af853e34ba |
| 3146 | CODE_SMELL | MAJOR | extension/content.js:3447 | javascript:S5843 | Simplify this regular expression to reduce its complexity from 23 to the 20 allowed. | 7ae32a4a-ac12-424b-b196-e41aaabed150 |
| 3147 | CODE_SMELL | MINOR | extension/content.js:3604 | javascript:S7773 | Prefer `Number.isFinite` over `isFinite`. | b9005aa8-aae4-4b64-9c70-ef4292d7d4bb |
| 3148 | CODE_SMELL | MINOR | extension/content.js:3627 | javascript:S7773 | Prefer `Number.isFinite` over `isFinite`. | 4c98282a-afdc-4011-a34c-ddbdd1ccdf8e |
| 3149 | CODE_SMELL | MAJOR | extension/content.js:4076 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 4fbf94e2-c4a9-43e8-9a73-1e4af719a57a |
| 3150 | CODE_SMELL | MAJOR | extension/content.js:4076 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | ba35a1f5-3b60-4c10-a99c-bd679d0172d0 |
| 3151 | CODE_SMELL | CRITICAL | extension/content.js:4125 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 25 to the 15 allowed. | 249cd9b7-4b23-40e4-a053-915efe41a595 |
| 3152 | CODE_SMELL | MAJOR | extension/content.js:4137 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 72e7fadc-71da-480d-b35e-ddf328b42255 |
| 3153 | CODE_SMELL | MAJOR | extension/content.js:4138 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 5503bcef-ec78-40f6-b343-7389352a565d |
| 3154 | CODE_SMELL | MAJOR | extension/content.js:4165 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 02300b27-560a-4076-ab83-d74710862d8a |
| 3155 | CODE_SMELL | MAJOR | extension/content.js:4189 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | dd0ebd8a-3743-4d96-b6c7-702d59dbaf02 |
| 3156 | CODE_SMELL | MAJOR | extension/content.js:4281 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | e6b91116-9b8c-4136-8bcd-da7f91247fa4 |
| 3157 | CODE_SMELL | MAJOR | extension/content.js:4487 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 7db83a45-0ace-4d04-adf5-6ba4218cf970 |
| 3158 | CODE_SMELL | MAJOR | extension/content.js:4578 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 138aa618-4915-4563-8505-ad6442cbd1f1 |
| 3159 | CODE_SMELL | MAJOR | extension/content.js:4760 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 4043f1ba-39a9-495f-b75b-e83aaca321a4 |
| 3160 | CODE_SMELL | MAJOR | extension/content.js:5060 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | b40cea42-0589-4daa-b5f9-f7f6770efb5a |
| 3161 | CODE_SMELL | MAJOR | extension/content.js:5060 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | e2aaa15c-0ae2-40c8-913c-49d01a02cd2d |
| 3162 | CODE_SMELL | MINOR | extension/content.js:5113 | javascript:S7771 | Prefer negative index over length minus index for `slice`. | 51119d12-a9d3-4d6d-9026-cb564bb84ae2 |
| 3163 | CODE_SMELL | MAJOR | extension/content.js:5121 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 9f458419-bb6b-442a-9bf1-c3dac2631ee7 |
| 3164 | CODE_SMELL | MAJOR | extension/content.js:5209 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 9f5e5693-dc58-474b-b467-5e36b9640a2a |
| 3165 | CODE_SMELL | CRITICAL | extension/content.js:5250 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 27 to the 15 allowed. | 6e2e7a3d-d573-45f7-a10f-b652e1d102c8 |
| 3166 | CODE_SMELL | MAJOR | extension/content.js:5256 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | e02ec502-2774-4544-9596-8446ab0810a0 |
| 3167 | CODE_SMELL | MAJOR | extension/content.js:5261 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | f95e983c-2796-4352-b7e8-ca5c2526a352 |
| 3168 | CODE_SMELL | MAJOR | extension/content.js:5280 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 7b977a34-b431-4012-bbeb-111fe1c9cf68 |
| 3169 | CODE_SMELL | MINOR | extension/content.js:5315 | javascript:S1481 | Remove unused function 'entryHasWebsiteKey'. | d10e0bb5-e3f3-46d6-9cf5-a2c27da48bc3 |
| 3170 | CODE_SMELL | CRITICAL | extension/content.js:5410 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 22 to the 15 allowed. | 2a4a294f-a18e-4af0-a60d-a74b73775fc4 |
| 3171 | CODE_SMELL | MAJOR | extension/content.js:5415 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 9ca7430c-49c5-4d49-a1b7-31258bca81be |
| 3172 | CODE_SMELL | MAJOR | extension/content.js:5417 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 14089ebf-bca1-465a-8b3d-c64adafd2c21 |
| 3173 | CODE_SMELL | MAJOR | extension/content.js:5418 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | b2a40f91-cc64-43e1-9f7a-7aa2b80f46d0 |
| 3174 | CODE_SMELL | MAJOR | extension/content.js:5530 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 4509d1f6-da0b-4801-a229-b6cb71c50cc3 |
| 3175 | CODE_SMELL | MAJOR | extension/content.js:5800 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | a3000b08-72c0-4be3-9b05-fe2e3c423b2d |
| 3176 | CODE_SMELL | MAJOR | extension/content.js:5818 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 1df255d2-18f7-4485-8c00-345ea597e989 |
| 3177 | CODE_SMELL | MINOR | extension/content.js:5831 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 145b3f6e-bacf-4252-b44b-3b31e2325992 |
| 3178 | CODE_SMELL | MINOR | extension/content.js:6431 | javascript:S7735 | Unexpected negated condition. | 197629d2-78f1-4445-8753-be5d0ca5ccaa |
| 3179 | CODE_SMELL | MAJOR | extension/content.js:6431 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 30e173fd-e7ad-480f-90b8-df7ed34cec23 |
| 3180 | CODE_SMELL | MAJOR | extension/content.js:6695 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | e04df15b-6ec1-4864-89b2-bf2b985c87ee |
| 3181 | CODE_SMELL | MAJOR | extension/content.js:6737 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 5b60857f-6d16-4016-9457-e1e86d15b8eb |
| 3182 | CODE_SMELL | MAJOR | extension/content.js:6738 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | f158b547-9aff-4075-8290-3d4c1415c15f |
| 3183 | CODE_SMELL | MAJOR | extension/content.js:6767 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 7efdbffa-0c77-4cf6-9efe-2bc59f30a45d |
| 3184 | CODE_SMELL | MAJOR | extension/content.js:6777 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 74551b07-23a1-4eca-9f84-19f3c0338929 |
| 3185 | CODE_SMELL | MAJOR | extension/content.js:6835 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 07c22915-3695-4c27-9a34-d32f1d1431a5 |
| 3186 | CODE_SMELL | MAJOR | extension/content.js:6893 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | c397ba73-2ce6-4f1a-a62d-c2f70f5083d0 |
| 3187 | CODE_SMELL | MAJOR | extension/content.js:6897 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 7758eb10-8623-4f85-8200-9706ca77ad32 |
| 3188 | CODE_SMELL | MAJOR | extension/content.js:6899 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | f6f02521-7f87-44ae-9e0b-54828dbc39ff |
| 3189 | CODE_SMELL | CRITICAL | extension/content.js:6907 | javascript:S3735 | Remove this use of the "void" operator. | 4e7e4f9d-c375-4e12-9b66-898c6d56c350 |
| 3190 | CODE_SMELL | MAJOR | extension/content.js:6965 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 925983b9-d165-4361-be49-608903ef59e9 |
| 3191 | CODE_SMELL | MAJOR | extension/content.js:7006 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 61f58742-d8d5-4d49-bc11-71ed4cd622cd |
| 3192 | CODE_SMELL | MAJOR | extension/content.js:7014 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 2f6ffcc3-0faa-4c2d-9747-0e21462a6bb9 |
| 3193 | CODE_SMELL | MAJOR | extension/content.js:7110 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 3eb3cf9f-aa36-48b8-8f03-2f3d5f809433 |
| 3194 | CODE_SMELL | MAJOR | extension/content.js:7386 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | dfe80674-83f3-48bd-a46c-5f4d386f6f64 |
| 3195 | CODE_SMELL | MAJOR | extension/content.js:7407 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | d6c4a2e4-ceb4-4c66-a8fc-0b5b038b3d81 |
| 3196 | CODE_SMELL | MAJOR | extension/content.js:7436 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | 421b8ea3-d2ba-4b4d-8c56-587a7bb7cb4d |
| 3197 | CODE_SMELL | MAJOR | extension/content.js:7451 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 13f2ad69-07b5-48a7-baec-f54244be1949 |
| 3198 | CODE_SMELL | MAJOR | extension/content.js:7460 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | ee04281c-d229-42c4-ad98-288348241935 |
| 3199 | CODE_SMELL | MAJOR | extension/content.js:7502 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | ed4c06b1-edf1-4613-b567-f43adbc1a25c |
| 3200 | CODE_SMELL | MAJOR | extension/content.js:7504 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | b7cac934-fdb5-4b4c-9956-5071ac0d8a9d |
| 3201 | CODE_SMELL | MAJOR | extension/content.js:7507 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | fa9c1b15-f37a-4c3d-9d54-4c9fb91db0f1 |
| 3202 | CODE_SMELL | MAJOR | extension/content.js:7509 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | b4c96452-100d-4443-acf3-2f5168fb6bff |
| 3203 | CODE_SMELL | CRITICAL | extension/content.js:7710 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 18 to the 15 allowed. | 032aafa9-3b4b-415d-994a-556bcf76fa02 |
| 3204 | CODE_SMELL | MAJOR | extension/content.js:7716 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 623bb91c-3bf9-41cf-a242-2012bab12a29 |
| 3205 | CODE_SMELL | MAJOR | extension/content.js:7717 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 7afde8a1-9f67-4d4b-9bfb-d0badbd7145c |
| 3206 | CODE_SMELL | MAJOR | extension/content.js:7770 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | b17b0c45-6b5b-4b06-ab11-d30645cadfb9 |
| 3207 | CODE_SMELL | CRITICAL | extension/content.js:7776 | javascript:S3735 | Remove this use of the "void" operator. | 0cb426b6-b281-4255-a989-e57d2ab8f51e |
| 3208 | CODE_SMELL | MAJOR | extension/content.js:7814 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | d972e03d-d99e-4236-8d27-d5f4c565dfb2 |
| 3209 | CODE_SMELL | MINOR | extension/content.js:7816 | javascript:S7744 | The empty object is useless. | 700681a8-2a77-4f4b-a92f-b5329b2a0d47 |
| 3210 | CODE_SMELL | CRITICAL | extension/content.js:8117 | javascript:S3735 | Remove this use of the "void" operator. | a281b9c6-6cf4-4b19-80c9-5a10e370747a |
| 3211 | CODE_SMELL | MAJOR | extension/content.js:8118 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 074dd29e-9352-492e-a78f-fa09c18df844 |
| 3212 | CODE_SMELL | CRITICAL | extension/content.js:8118 | javascript:S3735 | Remove this use of the "void" operator. | 7ec273af-9007-4d73-a9a9-7976acd9d577 |
| 3213 | CODE_SMELL | MAJOR | extension/content.js:8212 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | ecf20a9a-9dfa-4d8b-908f-3dacf80275b4 |
| 3214 | CODE_SMELL | MAJOR | extension/content.js:8486 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 780e41d7-bb59-4827-8266-cc04ee3dffc5 |
| 3215 | CODE_SMELL | MAJOR | extension/content.js:8511 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | c5def178-712a-4e8a-8edf-73418dce457e |
| 3216 | CODE_SMELL | MINOR | extension/content.js:8513 | javascript:S1481 | Remove the declaration of the unused 'busy' variable. | 176a9be2-a367-4289-90e0-f529762129da |
| 3217 | CODE_SMELL | MAJOR | extension/content.js:8513 | javascript:S1854 | Remove this useless assignment to variable "busy". | 963e978f-c380-466e-8c78-05c84127e6ae |
| 3218 | CODE_SMELL | MAJOR | extension/content.js:8543 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | fee76784-dc8f-45f4-a493-c75b40ca25b1 |
| 3219 | CODE_SMELL | MAJOR | extension/content.js:8546 | javascript:S7761 | Prefer `.dataset` over `setAttribute(…)`. | 333ccf3b-4b6f-4253-99bf-17723dd3fa3e |
| 3220 | CODE_SMELL | MAJOR | extension/content.js:8707 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | bb69e791-ae80-4c35-86f6-01a79742753a |
| 3221 | CODE_SMELL | MAJOR | extension/content.js:8850 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 5049f367-baba-488b-810d-372fe9b1a500 |
| 3222 | CODE_SMELL | MAJOR | extension/content.js:8928 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | dfb06f2f-79a9-42b0-994a-3150dbe7eb7d |
| 3223 | CODE_SMELL | MAJOR | extension/content.js:9108 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | e64f9248-40a3-4177-bf15-d96cca17b686 |
| 3224 | CODE_SMELL | MAJOR | extension/content.js:9109 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 512b5628-c537-4f47-ac2e-84a8be1bd60d |
| 3225 | CODE_SMELL | MAJOR | extension/content.js:9168 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 56283223-8a26-4b7b-a320-b260de56faf0 |
| 3226 | CODE_SMELL | MAJOR | extension/content.js:9182 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 17190617-68a7-400b-bbf4-d029e719d057 |
| 3227 | CODE_SMELL | MAJOR | extension/content.js:9410 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 359fd851-2a4b-4e08-a162-af3dac999ab7 |
| 3228 | CODE_SMELL | MAJOR | extension/content.js:9700 | javascript:S4144 | Update this function so that its implementation is not identical to the one on line 9225. | a6b67d16-ec13-4e5c-bdfc-419669528361 |
| 3229 | CODE_SMELL | MAJOR | extension/content.js:10517 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 3f7026e5-6dbc-446b-a4e0-12ccc1db1e68 |
| 3230 | CODE_SMELL | MAJOR | extension/content.js:10564 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 5ffa8456-75ea-47c6-96d1-6367d6afaaa7 |
| 3231 | CODE_SMELL | MAJOR | extension/content.js:10803 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 2ad93420-76c2-4fd9-9072-4394b7c7bf60 |
| 3232 | CODE_SMELL | MAJOR | extension/content.js:10846 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 12458705-1d03-43cf-9563-a92583bbbee6 |
| 3233 | CODE_SMELL | MAJOR | extension/content.js:10846 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | b2c3e272-7cc4-48c1-94de-9613683cf4df |
| 3234 | CODE_SMELL | CRITICAL | extension/content.js:11312 | javascript:S3735 | Remove this use of the "void" operator. | f8d5a095-efbe-4148-8e88-f99f6fa208a5 |
| 3235 | CODE_SMELL | MAJOR | extension/content.js:11401 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | f1064813-4fbd-4d10-9f7f-b76def5462d2 |
| 3236 | CODE_SMELL | MINOR | extension/content.js:11646 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 117bc509-fcf8-4bb5-9619-e700a6b0bbf1 |
| 3237 | CODE_SMELL | CRITICAL | extension/content.js:11819 | javascript:S3735 | Remove this use of the "void" operator. | 13c1f222-e818-4e38-9713-53e96ac90013 |
| 3238 | CODE_SMELL | MAJOR | extension/content.js:11953 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | bd37ac25-05f0-41dc-bed4-3101b61b09b9 |
| 3239 | CODE_SMELL | MAJOR | extension/content.js:11964 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 2a8a251d-a8c8-4010-a6f4-0a5be2d1cd16 |
| 3240 | CODE_SMELL | MAJOR | extension/content.js:12985 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 3da2cb10-463e-4dc0-9317-2f642b62d6ca |
| 3241 | CODE_SMELL | MAJOR | extension/content.js:13160 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 293f39bd-a7f1-4c3d-8517-f753b174c287 |
| 3242 | CODE_SMELL | MINOR | extension/fiber.js:154 | javascript:S4138 | Expected a `for-of` loop instead of a `for` loop with this simple iteration. | c559a345-b9f3-4406-a238-a6bb0d0b30bb |
| 3243 | CODE_SMELL | MINOR | extension/fiber.js:160 | javascript:S7758 | Prefer `String#codePointAt()` over `String#charCodeAt()`. | 28b910c3-811e-4437-a15b-4330a83cb94c |
| 3244 | CODE_SMELL | MINOR | extension/fiber.js:177 | javascript:S7764 | Prefer `globalThis` over `window`. | 45cbc31f-ff35-4d36-b14d-f31ae2426935 |
| 3245 | CODE_SMELL | MAJOR | extension/fiber.js:432 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | f8066d23-54f4-48b8-9a20-be17c6234d8b |
| 3246 | CODE_SMELL | CRITICAL | extension/fiber.js:450 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 21 to the 15 allowed. | 3872a7f1-facb-456d-8d14-6afe7a830f7e |
| 3247 | CODE_SMELL | CRITICAL | extension/fiber.js:496 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | 7cd74053-531d-4b5d-8cbe-c12cbcb22a31 |
| 3248 | CODE_SMELL | MINOR | extension/fiber.js:501 | javascript:S4138 | Expected a `for-of` loop instead of a `for` loop with this simple iteration. | 5f915186-5dc0-4a6e-8a75-fc9b3229f119 |
| 3249 | CODE_SMELL | MINOR | extension/fiber.js:518 | javascript:S7773 | Prefer `Number.NaN` over `NaN`. | 9f5ae231-8224-444c-aa48-3d15317aac60 |
| 3250 | CODE_SMELL | MAJOR | extension/fiber.js:575 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | e82649fc-48fd-4b89-8076-ea8f5e4f95f5 |
| 3251 | CODE_SMELL | MAJOR | extension/fiber.js:672 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 0c472f5c-737a-478c-9f33-b3e6aec2ef9b |
| 3252 | CODE_SMELL | MAJOR | extension/fiber.js:834 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | a51a2ee2-e3b9-4262-999f-115c93b82687 |
| 3253 | CODE_SMELL | MINOR | extension/fiber.js:846 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 5aba60f0-ec94-4b43-9100-fe959366c9b1 |
| 3254 | CODE_SMELL | MINOR | extension/fiber.js:846 | javascript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 79feac87-ddca-4936-a855-5d2e8c5e7b1f |
| 3255 | CODE_SMELL | MAJOR | extension/fiber.js:932 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 9ad77142-2dab-4e0c-9c6b-2d0606ac8267 |
| 3256 | CODE_SMELL | MAJOR | extension/fiber.js:945 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 7f30f8a0-e307-4d0c-8a0a-00c211e4e59d |
| 3257 | CODE_SMELL | MAJOR | extension/fiber.js:946 | javascript:S7761 | Prefer `.dataset` over `getAttribute(…)`. | a58166e1-2a0c-4b50-943f-efcbe3f50897 |
| 3258 | CODE_SMELL | MINOR | extension/fiber.js:959 | javascript:S4138 | Expected a `for-of` loop instead of a `for` loop with this simple iteration. | 958bc196-fb80-472b-8400-ae5cf18273db |
| 3259 | CODE_SMELL | MINOR | extension/fiber.js:974 | javascript:S4138 | Expected a `for-of` loop instead of a `for` loop with this simple iteration. | 08053fc3-7bf8-4d38-9a1b-18d181246c3e |
| 3260 | CODE_SMELL | MINOR | extension/fiber.js:982 | javascript:S4138 | Expected a `for-of` loop instead of a `for` loop with this simple iteration. | 8d865bf5-bb71-4c0c-b242-ff3f422f3871 |
| 3261 | CODE_SMELL | MINOR | extension/fiber.js:988 | javascript:S4138 | Expected a `for-of` loop instead of a `for` loop with this simple iteration. | 8576eec9-fc65-46de-b0ec-aaea7dd57747 |
| 3262 | CODE_SMELL | MAJOR | extension/fiber.js:992 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | cfa1480b-ec5f-489c-b618-8de96f4f9742 |
| 3263 | CODE_SMELL | MINOR | extension/fiber.js:1002 | javascript:S4138 | Expected a `for-of` loop instead of a `for` loop with this simple iteration. | 2af87e24-c4e4-4767-9737-bcb312f5041f |
| 3264 | CODE_SMELL | MINOR | extension/fiber.js:1013 | javascript:S4138 | Expected a `for-of` loop instead of a `for` loop with this simple iteration. | 60feb1d9-3436-4a28-8961-8d08aaa337ce |
| 3265 | CODE_SMELL | MINOR | extension/fiber.js:1124 | javascript:S4138 | Expected a `for-of` loop instead of a `for` loop with this simple iteration. | 268ba84e-d30d-4591-b46c-2bb7c416d6f2 |
| 3266 | CODE_SMELL | MAJOR | extension/fiber.js:1126 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 45bc9255-ad32-46ca-b74b-b8ff98cf0264 |
| 3267 | CODE_SMELL | MINOR | extension/fiber.js:1132 | javascript:S4138 | Expected a `for-of` loop instead of a `for` loop with this simple iteration. | f0ac2768-ae52-412b-b83c-94e00b81d800 |
| 3268 | CODE_SMELL | MAJOR | extension/fiber.js:1139 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | f8e0e37d-fa68-417d-9a01-466f2f7e63f3 |
| 3269 | CODE_SMELL | MAJOR | extension/fiber.js:1140 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 3fd9c8cf-f9c6-45a5-b7be-99f42dc84c2e |
| 3270 | CODE_SMELL | MAJOR | extension/fiber.js:1140 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 50cd21fb-e532-4eb0-83de-cd808173c457 |
| 3271 | CODE_SMELL | MAJOR | extension/fiber.js:1141 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 85e74b4c-76bd-41c9-9e94-3ae688b25d8e |
| 3272 | CODE_SMELL | MINOR | extension/fiber.js:1165 | javascript:S4138 | Expected a `for-of` loop instead of a `for` loop with this simple iteration. | 68b8b483-846a-4d74-9fc0-5dc8d7aaebfa |
| 3273 | CODE_SMELL | MINOR | extension/fiber.js:1181 | javascript:S4138 | Expected a `for-of` loop instead of a `for` loop with this simple iteration. | 8e8f9845-d78c-4b49-b465-54ca59d56e68 |
| 3274 | CODE_SMELL | MAJOR | extension/fiber.js:1209 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | ae0e1716-f953-4ee1-b3a9-630a080e9e5a |
| 3275 | CODE_SMELL | MAJOR | extension/fiber.js:1211 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 6098f813-50ba-4b57-817e-6514052a7f65 |
| 3276 | CODE_SMELL | MAJOR | extension/fiber.js:1211 | javascript:S6557 | Use 'String#startsWith' method instead. | d6731834-b08b-4c0f-9eec-f488d2159eac |
| 3277 | CODE_SMELL | MAJOR | extension/fiber.js:1214 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 4680e113-0d32-4325-8158-b2f366be7417 |
| 3278 | CODE_SMELL | MAJOR | extension/fiber.js:1303 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 3f1e088c-60be-4103-a816-0ba465bec73e |
| 3279 | CODE_SMELL | MINOR | extension/fiber.js:1364 | javascript:S4138 | Expected a `for-of` loop instead of a `for` loop with this simple iteration. | 3fd9be5d-3621-4be4-b25d-3fbb5c1b7a90 |
| 3280 | CODE_SMELL | MINOR | extension/fiber.js:1601 | javascript:S4138 | Expected a `for-of` loop instead of a `for` loop with this simple iteration. | c15615b8-b400-4025-b86d-90552c40edf6 |
| 3281 | CODE_SMELL | MINOR | extension/fiber.js:2057 | javascript:S7755 | Prefer `.at(…)` over `[….length - index]`. | 0f68185c-afa8-418f-ab6c-de28cdaf5862 |
| 3282 | CODE_SMELL | MAJOR | extension/fiber.js:2058 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 64770c30-b769-468b-9b6f-204906e93062 |
| 3283 | CODE_SMELL | MINOR | extension/fiber.js:2157 | javascript:S4138 | Expected a `for-of` loop instead of a `for` loop with this simple iteration. | dd59dd22-45c5-4f35-b1cd-ccb9a65b4a9e |
| 3284 | CODE_SMELL | MAJOR | extension/fiber.js:2230 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 80631865-1751-4fee-953f-e7b217bae38d |
| 3285 | CODE_SMELL | MAJOR | extension/overlay.css:476 | css:S4666 | Unexpected duplicate selector ".clf-tip", first used at line 436 | 8287d721-b53d-46d4-a1e2-8773e29a8970 |
| 3286 | CODE_SMELL | MAJOR | extension/overlay.css:570 | css:S4666 | Unexpected duplicate selector ".clf-compact-btn", first used at line 506 | dc29e8ee-7169-4547-8351-09cc70b1d514 |
| 3287 | CODE_SMELL | MAJOR | extension/overlay.css:824 | css:S4666 | Unexpected duplicate selector ".clf-stream-progress", first used at line 800 | f3fe4c9c-5799-41c2-b06e-2b17e90ec130 |
| 3288 | CODE_SMELL | MAJOR | extension/overlay.css:840 | css:S4666 | Unexpected duplicate selector ".clf-stream-progress .clf-stream-icon", first used at line 804 | 84346b47-68c1-46d9-9f99-9a12a4ac6442 |
| 3289 | CODE_SMELL | MAJOR | extension/overlay.css:1100 | css:S4666 | Unexpected duplicate selector ".clf-menu", first used at line 1086 | 59f3f98f-b06d-4cd2-b4f0-84e2dd4fc070 |
| 3290 | CODE_SMELL | MAJOR | extension/popup.css:90 | css:S4666 | Unexpected duplicate selector "*", first used at line 45 | cfe180e0-bce9-4115-b49d-eb922d137121 |
| 3291 | CODE_SMELL | MAJOR | extension/popup.js:83 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 9aecf2bf-cfa9-49f2-8da2-cbdece756556 |
| 3292 | CODE_SMELL | MAJOR | extension/popup.js:84 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 5b0a7010-da58-4e00-ba5a-639adb79553c |
| 3293 | CODE_SMELL | MAJOR | extension/popup.js:89 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | b359eaf8-0dec-4643-b0c2-56a9def2c8a5 |
| 3294 | CODE_SMELL | MAJOR | extension/popup.js:106 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 7ff3d6f1-0298-496b-9186-b71f0fdd39a7 |
| 3295 | CODE_SMELL | MAJOR | extension/popup.js:241 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 6c84593e-3923-456e-9064-a6e3f099ffd9 |
| 3296 | CODE_SMELL | MAJOR | extension/popup.js:242 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 059e2dc4-e180-4476-b9c4-d32c90ae8a9a |
| 3297 | CODE_SMELL | MAJOR | extension/popup.js:247 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 5a0089c5-c84e-4722-9797-50e0a74c79d7 |
| 3298 | CODE_SMELL | MAJOR | extension/popup.js:250 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | d355c31f-b8bf-4a82-a5d6-209f08ae28ae |
| 3299 | CODE_SMELL | MINOR | extension/popup.js:255 | javascript:S7735 | Unexpected negated condition. | 957c6eda-74c5-4db5-a9e1-c131c94bb618 |
| 3300 | CODE_SMELL | MAJOR | extension/popup.js:270 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 9b39ba5f-5ca8-4a36-b53c-462be3861acd |
| 3301 | CODE_SMELL | MAJOR | extension/popup.js:271 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 6c14e2f5-de3d-4f1c-8980-5828db082c11 |
| 3302 | CODE_SMELL | MAJOR | extension/popup.js:273 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | ea556526-6fb2-46b6-8d91-3a9b910db71e |
| 3303 | CODE_SMELL | MAJOR | extension/popup.js:284 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | c80a7e1d-b1ec-4a3f-a594-51913897c9cf |
| 3304 | CODE_SMELL | MAJOR | extension/popup.js:311 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | bc8e8b83-a4d9-40a9-b219-dac5064925a0 |
| 3305 | CODE_SMELL | MAJOR | extension/popup.js:312 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 14d603fa-f6cd-4c2c-b65a-50cab8eb0cb6 |
| 3306 | CODE_SMELL | MAJOR | extension/popup.js:323 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 6feda473-4ab0-4bdf-8a76-e4d4e562fd05 |
| 3307 | CODE_SMELL | MAJOR | extension/popup.js:340 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | c9e2fafb-6a03-4f17-8f7b-1737296030d8 |
| 3308 | CODE_SMELL | MAJOR | extension/popup.js:366 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 51ab9873-acc4-4a4d-b018-1e1cb4c4a1f3 |
| 3309 | CODE_SMELL | MAJOR | extension/popup.js:375 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 523092ea-e07d-4529-b20b-eb34ae1a5680 |
| 3310 | CODE_SMELL | MAJOR | extension/popup.js:394 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 862d9589-d6fe-42ef-a3da-54539fbf7782 |
| 3311 | CODE_SMELL | MAJOR | extension/popup.js:395 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | e27ee3ea-ab15-42b4-9487-0539bfdf17fa |
| 3312 | CODE_SMELL | MAJOR | extension/popup.js:404 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | ffa4e849-e85c-4de0-b792-466cef072591 |
| 3313 | CODE_SMELL | MAJOR | extension/popup.js:412 | javascript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | b83d5d45-b1c8-4846-b566-37571b06445f |
| 3314 | CODE_SMELL | MAJOR | extension/popup.js:432 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | 4a34cac4-0ed7-405f-8461-6924499f92ac |
| 3315 | CODE_SMELL | MINOR | extension/popup.js:432 | javascript:S7735 | Unexpected negated condition. | 852df952-2723-46bd-be8f-cd5f35bdf707 |
| 3316 | CODE_SMELL | MAJOR | extension/popup.js:432 | javascript:S3358 | Extract this nested ternary operation into an independent statement. | ca368c56-e10d-4fd9-96b2-77e4de21d81e |
| 3317 | CODE_SMELL | MAJOR | scripts/fetch-ripgrep.mjs:87 | javascript:S7785 | Prefer top-level await over using a promise chain. | 53d17491-79f7-47ed-a821-bdaef2a55c10 |
| 3318 | CODE_SMELL | MAJOR | scripts/fetch-tunnel-client.mjs:94 | javascript:S7785 | Prefer top-level await over using a promise chain. | f850f8f0-d9fe-4862-91d9-9f308952feb0 |
| 3319 | CODE_SMELL | CRITICAL | scripts/make-icon.mjs:42 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 31 to the 15 allowed. | 18c18c5d-067a-4cd8-adda-ba005a42d5da |
| 3320 | CODE_SMELL | CRITICAL | scripts/make-icon.mjs:110 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 30 to the 15 allowed. | 078e83c0-0bb3-4e0f-ad8b-f24ba10e90cb |
| 3321 | CODE_SMELL | CRITICAL | scripts/make-icon.mjs:189 | javascript:S3776 | Refactor this function to reduce its Cognitive Complexity from 46 to the 15 allowed. | 2c14bd42-bd2e-4261-83fc-1f1e11ce6112 |
| 3322 | CODE_SMELL | MAJOR | scripts/prepare-packaging-native.mjs:181 | javascript:S7785 | Prefer top-level await over using a promise chain. | 50656656-a0d2-43f7-8192-82ad6ad78194 |
| 3323 | CODE_SMELL | MINOR | src/main/agents.ts:460 | typescript:S6606 | Prefer using nullish coalescing operator (`??=`) instead of an assignment expression, as it is simpler to read. | 339eacfb-f85a-4e56-a618-3fd5e03276d3 |
| 3324 | CODE_SMELL | MAJOR | src/main/agents.ts:1864 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 84e9fb97-4fbe-40a9-8113-f0be4aca85ac |
| 3325 | CODE_SMELL | MAJOR | src/main/agents.ts:3034 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | facda23e-5eec-4d2b-bf4e-c1c18172b89c |
| 3326 | CODE_SMELL | MAJOR | src/main/agents.ts:3954 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 822a94f8-be38-47e6-bca5-c6ea6ae32d15 |
| 3327 | CODE_SMELL | MAJOR | src/main/agents.ts:3957 | typescript:S4624 | Refactor this code to not use nested template literals. | 8670dbfc-80b8-4ba0-af2d-c18ddd362e46 |
| 3328 | CODE_SMELL | MINOR | src/main/agents.ts:4497 | typescript:S6551 | 'taken' will use Object's default stringification format ('[object Object]') when stringified. | c4bd36b0-ce4d-4511-b105-dc3078d6b4da |
| 3329 | CODE_SMELL | MAJOR | src/main/agents.ts:4673 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | c297e6e8-5147-48e6-8317-e6413ad70ae2 |
| 3330 | CODE_SMELL | MINOR | src/main/bridge.ts:136 | typescript:S3863 | './session/store.js' imported multiple times. | 8df10e06-c58f-4932-950d-980e76dda0eb |
| 3331 | CODE_SMELL | MINOR | src/main/bridge.ts:218 | typescript:S3863 | './session/continuation.js' imported multiple times. | 410877ed-e972-47ea-92ca-c60ac920ad35 |
| 3332 | CODE_SMELL | MINOR | src/main/bridge.ts:1149 | typescript:S7773 | Prefer `Number.NaN` over `NaN`. | a6457de3-3593-43c3-ab48-0bdf02cba490 |
| 3333 | CODE_SMELL | MAJOR | src/main/bridge.ts:3653 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 50ba5a4f-956e-4c5a-bcb8-5345bd25667a |
| 3334 | CODE_SMELL | MINOR | src/main/bridge.ts:4044 | typescript:S4325 | This assertion is unnecessary since it does not change the type of the expression. | 5807812a-2e56-4e19-a2d4-63350d7f58d9 |
| 3335 | CODE_SMELL | MINOR | src/main/bridge.ts:4045 | typescript:S4325 | This assertion is unnecessary since it does not change the type of the expression. | 535b22fb-36bb-44dd-ae4e-bfea16b07b41 |
| 3336 | CODE_SMELL | MINOR | src/main/bridge.ts:4640 | typescript:S7735 | Unexpected negated condition. | ed77b9e9-fa90-459d-a290-f20b55c33fbf |
| 3337 | CODE_SMELL | MAJOR | src/main/bridge.ts:5892 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | e61aaaf6-bf5e-46d2-83cd-ec4e2e12ac0d |
| 3338 | CODE_SMELL | MAJOR | src/main/bridge.ts:5894 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | b62f94fa-5ea0-49bd-a640-3d4220e0c8fc |
| 3339 | CODE_SMELL | MAJOR | src/main/bridge.ts:5896 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | bb5560a8-2f35-467f-b865-533d7ab5647b |
| 3340 | CODE_SMELL | MAJOR | src/main/bridge.ts:9968 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 43452eab-06bf-46ca-ba79-590c654f9cd1 |
| 3341 | CODE_SMELL | MINOR | src/main/bridge.ts:10087 | typescript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | 3a1225e5-c7d3-45b5-b06b-6aa710f5c912 |
| 3342 | CODE_SMELL | MINOR | src/main/codex/apply-patch/file-update.ts:40 | typescript:S7735 | Unexpected negated condition. | 3e257256-a8b5-45bf-9cfa-8274ee02e251 |
| 3343 | CODE_SMELL | CRITICAL | src/main/codex/apply-patch/file-update.ts:117 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 41 to the 15 allowed. | c485da65-c44c-4f1d-a99f-f6bd463e0e76 |
| 3344 | CODE_SMELL | MINOR | src/main/codex/apply-patch/file-update.ts:163 | typescript:S7771 | Prefer negative index over length minus index for `slice`. | c05a746f-abc2-4f5a-ad7b-ecf7fee46161 |
| 3345 | CODE_SMELL | MINOR | src/main/codex/apply-patch/file-update.ts:164 | typescript:S7771 | Prefer negative index over length minus index for `slice`. | d3dd0de0-8d25-4157-b694-40028c9fb345 |
| 3346 | CODE_SMELL | CRITICAL | src/main/codex/apply-patch/index.ts:579 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 33 to the 15 allowed. | 1261b4a5-557c-40d1-af76-a51042be9472 |
| 3347 | CODE_SMELL | CRITICAL | src/main/codex/apply-patch/invocation.ts:117 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | 21a8540f-6b5f-4e88-b0d8-1b96350e1d1e |
| 3348 | CODE_SMELL | MINOR | src/main/codex/apply-patch/invocation.ts:128 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | fc03bbdc-e2b6-4401-b9cd-8731d02d77e1 |
| 3349 | CODE_SMELL | MINOR | src/main/codex/apply-patch/parser.ts:116 | typescript:S7771 | Prefer negative index over length minus index for `slice`. | a447213b-3ebb-4846-9f8b-437a157b0fdc |
| 3350 | CODE_SMELL | MAJOR | src/main/codex/apply-patch/streaming-parser.ts:48 | typescript:S2933 | Member 'hunks' is never reassigned; mark it as `readonly`. | dae02a91-1b19-4b5d-9804-e557be42b920 |
| 3351 | CODE_SMELL | MAJOR | src/main/codex/apply-patch/streaming-parser.ts:98 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 9077d5e3-ed25-4db2-bd11-9f9d4f22e6d7 |
| 3352 | CODE_SMELL | MAJOR | src/main/codex/apply-patch/streaming-parser.ts:107 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | ee50d7a8-9c7c-4a6d-b9bf-36a6ce63b121 |
| 3353 | CODE_SMELL | CRITICAL | src/main/codex/apply-patch/streaming-parser.ts:164 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | 20dbfbf3-a85b-4472-995f-563317e39146 |
| 3354 | CODE_SMELL | MAJOR | src/main/codex/apply-patch/streaming-parser.ts:181 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | d5383821-1309-4e1b-96f7-5195ee94be47 |
| 3355 | CODE_SMELL | MAJOR | src/main/codex/apply-patch/streaming-parser.ts:187 | typescript:S1871 | This case's code block is the same as the block for the case on line 174. | 96569b46-a7a5-4353-9896-624ec8b0c6c0 |
| 3356 | CODE_SMELL | MAJOR | src/main/codex/apply-patch/streaming-parser.ts:196 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 8c9e8c2b-eec9-4da2-86af-151fa7a34694 |
| 3357 | CODE_SMELL | MAJOR | src/main/codex/apply-patch/streaming-parser.ts:226 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 7d674dde-f364-478f-be37-99876a2f5fbb |
| 3358 | CODE_SMELL | MINOR | src/main/codex/apply-patch/text-file.ts:48 | typescript:S7758 | Prefer `String#codePointAt()` over `String#charCodeAt()`. | 4b88ce79-e1a9-427e-8efe-35d9aaeceb38 |
| 3359 | CODE_SMELL | MINOR | src/main/codex/apply-patch/text-file.ts:49 | typescript:S7758 | Prefer `String#codePointAt()` over `String#charCodeAt()`. | 49b13213-9e69-4371-bc35-bd0cc392b0f1 |
| 3360 | CODE_SMELL | MINOR | src/main/codex/exec-output.ts:59 | typescript:S7778 | Do not call `Array#push()` multiple times. | 0b8f8ddd-afab-49bc-b510-f07b8268ba56 |
| 3361 | CODE_SMELL | MINOR | src/main/codex/exec-output.ts:64 | typescript:S7778 | Do not call `Array#push()` multiple times. | 0e63af25-de32-4f86-8cc1-b01af2ee16aa |
| 3362 | CODE_SMELL | CRITICAL | src/main/codex/filesystem.ts:338 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 78 to the 15 allowed. | 6d6bb4bd-15c3-4d18-b7b7-4e7e5cd4ac7d |
| 3363 | CODE_SMELL | MAJOR | src/main/codex/filesystem.ts:378 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 4bb2f5f9-8b26-4e98-bed6-0f4f0e0bfcbb |
| 3364 | CODE_SMELL | MAJOR | src/main/codex/head-tail-buffer.ts:14 | typescript:S2933 | Member 'head' is never reassigned; mark it as `readonly`. | 6c5ad8b9-cecc-4f83-9b6c-f9e89c7648d1 |
| 3365 | CODE_SMELL | MINOR | src/main/codex/read-backend.ts:92 | typescript:S7758 | Prefer `String#codePointAt()` over `String#charCodeAt()`. | 3af3f040-4d17-4447-ac68-400375f52ddd |
| 3366 | CODE_SMELL | CRITICAL | src/main/codex/read-backend.ts:100 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 19 to the 15 allowed. | a3e47f51-abf1-46e1-9096-60f22ccabb8e |
| 3367 | CODE_SMELL | MINOR | src/main/codex/read-backend.ts:117 | typescript:S7755 | Prefer `.at(…)` over `[….length - index]`. | 5055474e-cb9e-4ecb-b9de-17942af044a6 |
| 3368 | CODE_SMELL | MAJOR | src/main/codex/read-backend.ts:138 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 32e4fbe4-a188-45d5-be27-cfd7d0f19a6d |
| 3369 | CODE_SMELL | MINOR | src/main/codex/read-backend.ts:171 | typescript:S7735 | Unexpected negated condition. | 31b5a332-4676-4678-a4dc-08bf1b2c46d0 |
| 3370 | CODE_SMELL | MAJOR | src/main/codex/read-backend.ts:189 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 621ec284-c4fc-4b2a-b23a-e19b96896716 |
| 3371 | CODE_SMELL | MINOR | src/main/codex/shell.ts:77 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 869b10a8-703c-4e51-a4dd-bc28274dd311 |
| 3372 | CODE_SMELL | MINOR | src/main/codex/shell.ts:88 | typescript:S6644 | Unnecessary use of conditional expression for default assignment. | 47da39b5-ee7a-47f6-af24-cc5cc566c8d4 |
| 3373 | CODE_SMELL | MINOR | src/main/codex/shell.ts:127 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | 80acde1c-2d06-485c-84f3-3a1389563618 |
| 3374 | CODE_SMELL | MINOR | src/main/codex/shell.ts:284 | typescript:S7776 | `POWERSHELL_FLAGS` should be a `Set`, and use `POWERSHELL_FLAGS.has()` to check existence or non-existence. | 3cda918b-325b-43ae-a3da-56acc286eb06 |
| 3375 | CODE_SMELL | MINOR | src/main/codex/shell.ts:327 | typescript:S7771 | Prefer negative index over length minus index for `slice`. | 371c1ae8-4fc0-4c44-8c2e-386d5157d559 |
| 3376 | CODE_SMELL | MINOR | src/main/codex/shell.ts:344 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 7d69afae-bf83-45f0-b23a-5964ca763042 |
| 3377 | CODE_SMELL | MINOR | src/main/codex/shell.ts:344 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | 85689abe-66f4-479c-9616-64ecafc9b510 |
| 3378 | CODE_SMELL | MINOR | src/main/codex/truncate.ts:25 | typescript:S7758 | Prefer `String#codePointAt()` over `String#charCodeAt()`. | 6dcc90e2-e0b7-46cf-a25f-e4054187f394 |
| 3379 | CODE_SMELL | MAJOR | src/main/codex/truncate.ts:53 | typescript:S2301 | Provide multiple methods instead of using "useTokens" to determine which action to take. | 0ff9bb7b-fefd-4ee0-b29a-4fd2b455583c |
| 3380 | CODE_SMELL | MINOR | src/main/codex/unified-exec-constants.ts:23 | typescript:S7758 | Prefer `String.fromCodePoint()` over `String.fromCharCode()`. | 22a4feec-7fc6-4af1-be53-a94371453ef2 |
| 3381 | CODE_SMELL | MAJOR | src/main/codex/unified-exec.ts:132 | typescript:S2933 | Member 'waiters' is never reassigned; mark it as `readonly`. | 0e6c5ba8-a192-45d2-a8c3-6693d7420692 |
| 3382 | CODE_SMELL | MINOR | src/main/codex/unified-exec.ts:255 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 4a413cea-66c3-4e44-9b41-d493aa126e99 |
| 3383 | CODE_SMELL | MINOR | src/main/codex/unified-exec.ts:255 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | a3d82afc-5273-4fca-ba97-965529c261c9 |
| 3384 | CODE_SMELL | CRITICAL | src/main/codex/unified-exec.ts:317 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 23 to the 15 allowed. | be1f775c-9521-415b-ad8c-b183b4f7ef45 |
| 3385 | CODE_SMELL | MINOR | src/main/codex/unified-exec.ts:630 | typescript:S7778 | Do not call `Array#push()` multiple times. | 3ede496c-d219-46f6-91b4-32e3f47c5902 |
| 3386 | CODE_SMELL | MAJOR | src/main/codex/unified-exec.ts:811 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 8415d4a7-4bc4-4589-8b5e-0ea2df731f5b |
| 3387 | CODE_SMELL | MAJOR | src/main/codex/unified-exec.ts:925 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 4c72d6d2-c0b0-407b-bfe4-d25cee91fb49 |
| 3388 | CODE_SMELL | MINOR | src/main/codex/unified-exec.ts:931 | typescript:S7735 | Unexpected negated condition. | 0ada8e56-99a5-49e0-8f70-0b971c19d663 |
| 3389 | CODE_SMELL | MAJOR | src/main/codex/unified-exec.ts:1134 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 6538937e-7c3e-42cd-afe1-24193cc3cf0a |
| 3390 | CODE_SMELL | MINOR | src/main/computer/index.ts:768 | typescript:S7747 | `Promise.allSettled(…)` accepts iterable as argument, it's unnecessary to convert to an array. | e97abd16-ec71-44c3-b404-53d47ae575b3 |
| 3391 | CODE_SMELL | MINOR | src/main/computer/index.ts:784 | typescript:S7747 | `Promise.allSettled(…)` accepts iterable as argument, it's unnecessary to convert to an array. | 9b1847eb-61f5-4f3d-9fdf-32dfc85d2675 |
| 3392 | CODE_SMELL | MINOR | src/main/computer/index.ts:899 | typescript:S4325 | This assertion is unnecessary since it does not change the type of the expression. | dcec0aa4-14f7-4a7e-9043-e94bbaac5905 |
| 3393 | CODE_SMELL | CRITICAL | src/main/computer/index.ts:1168 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 18 to the 15 allowed. | 12284aa4-8674-4770-bbdd-906863396e2e |
| 3394 | CODE_SMELL | CRITICAL | src/main/config.ts:222 | typescript:S1994 | This loop's stop condition tests "RESERVED_ROOT_NAMES, candidate, used, candidate" but the incrementer updates "suffix". | ea9bb601-046c-4839-be2d-d4d3c4baf63d |
| 3395 | CODE_SMELL | MINOR | src/main/config.ts:705 | typescript:S7735 | Unexpected negated condition. | dce39545-ebd5-4874-8433-84da131afe83 |
| 3396 | CODE_SMELL | MINOR | src/main/config.ts:724 | typescript:S7735 | Unexpected negated condition. | 54796e90-2a6b-4594-9c4b-1a7cb4221151 |
| 3397 | CODE_SMELL | MAJOR | src/main/connection.ts:260 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 700ecced-b9dd-491c-9b67-778a04b649de |
| 3398 | CODE_SMELL | MAJOR | src/main/diagnostics.ts:228 | typescript:S4624 | Refactor this code to not use nested template literals. | fc922492-6608-4c88-89b6-b2ec7de92b32 |
| 3399 | CODE_SMELL | MAJOR | src/main/diagnostics.ts:314 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 098dbc2e-9ad8-4559-90d8-2720f3a598ce |
| 3400 | CODE_SMELL | MAJOR | src/main/diagnostics.ts:314 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 91ea24ec-f4aa-4798-a64e-e44a941c2d9a |
| 3401 | CODE_SMELL | MINOR | src/main/diagnostics.ts:345 | typescript:S7735 | Unexpected negated condition. | bd37648e-09f5-4e79-aa3c-76baf82d5f81 |
| 3402 | CODE_SMELL | MAJOR | src/main/diagnostics.ts:361 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 4b62eae7-b156-4814-a952-ba1be66fb551 |
| 3403 | CODE_SMELL | MAJOR | src/main/diagnostics.ts:375 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 0309e8de-320a-4ef3-9af5-2476ed6b5a75 |
| 3404 | CODE_SMELL | MAJOR | src/main/diagnostics.ts:413 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | ad4fd881-17b9-4906-adbe-fb5a82e5fdf8 |
| 3405 | CODE_SMELL | MAJOR | src/main/diagnostics.ts:414 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 7d6cde03-2f07-4d22-8cd0-7fdb0bdc1691 |
| 3406 | CODE_SMELL | MINOR | src/main/diffstat.ts:33 | typescript:S7755 | Prefer `.at(…)` over `[….length - index]`. | d14211fe-b95e-41df-b857-3707ddea8821 |
| 3407 | CODE_SMELL | CRITICAL | src/main/diffstat.ts:65 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | 37fdb508-e636-4496-b4b1-e48e59275ae4 |
| 3408 | CODE_SMELL | MINOR | src/main/env.ts:114 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 8953be9a-717e-4f0b-bed0-35b59b84071d |
| 3409 | CODE_SMELL | MINOR | src/main/env.ts:155 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | 39f37013-bf2a-47b9-af19-6e4afee8e8c0 |
| 3410 | CODE_SMELL | MINOR | src/main/env.ts:156 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | ec9a35a3-d612-4b9b-9ba5-b23af2b51855 |
| 3411 | CODE_SMELL | MINOR | src/main/env.ts:162 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | 2987b94c-7c47-4f12-a9da-ac43e7f2e54b |
| 3412 | CODE_SMELL | MINOR | src/main/env.ts:162 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | fded0d94-668e-4e0e-ac95-da73aa5f4523 |
| 3413 | CODE_SMELL | MINOR | src/main/exec-hints.ts:158 | typescript:S4323 | Replace this union type with a type alias. | faad54cd-8b11-447d-817e-943d54f797e7 |
| 3414 | CODE_SMELL | MINOR | src/main/exec-hints.ts:425 | typescript:S7755 | Prefer `.at(…)` over `[….length - index]`. | 85516323-ae53-4aea-8968-8af28c37d24a |
| 3415 | CODE_SMELL | MINOR | src/main/exec-hints.ts:507 | typescript:S7755 | Prefer `.at(…)` over `[….length - index]`. | 1d82c777-6f91-4734-88d1-d1af0492d927 |
| 3416 | CODE_SMELL | CRITICAL | src/main/exec-hints.ts:753 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | 7137c705-5305-4d7a-af1b-c21e2b40985e |
| 3417 | CODE_SMELL | MINOR | src/main/exec-hints.ts:820 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | 028c3a69-f2f0-4012-868a-ff6de83b1453 |
| 3418 | CODE_SMELL | MINOR | src/main/exec-hints.ts:846 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | 6f4b06c7-4699-422d-a365-0624932b2cc2 |
| 3419 | CODE_SMELL | CRITICAL | src/main/exec-hints.ts:889 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 34 to the 15 allowed. | ad52e18e-7526-45bc-8d19-794bacb90405 |
| 3420 | CODE_SMELL | CRITICAL | src/main/exec-hints.ts:942 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 41 to the 15 allowed. | a6bf6070-ef3f-4bbd-a004-7bc688fd3b1a |
| 3421 | CODE_SMELL | MAJOR | src/main/exec-hints.ts:988 | typescript:S5869 | Remove duplicates in this character class. | b37db262-5f09-4f36-9360-5310633bded3 |
| 3422 | CODE_SMELL | MAJOR | src/main/exec-hints.ts:1135 | typescript:S6535 | Unnecessary escape character: \[. | 6d5dae26-91af-4de6-be6e-1d0c9834d71a |
| 3423 | CODE_SMELL | MINOR | src/main/exec-hints.ts:1145 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 3be62985-9cb3-4f4a-adce-f8332f3a4d5a |
| 3424 | CODE_SMELL | MINOR | src/main/exec-hints.ts:1238 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 492e1549-25dd-41af-b5ba-0e5881f67342 |
| 3425 | CODE_SMELL | MINOR | src/main/exec-hints.ts:1238 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | dfc8a2ca-5cfc-4beb-8edd-ce84fc010a2e |
| 3426 | CODE_SMELL | MINOR | src/main/exec-hints.ts:1239 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 006a0c99-44ac-4354-b4c8-aad51ec35979 |
| 3427 | CODE_SMELL | MINOR | src/main/exec-hints.ts:1239 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | 57f1b861-274c-40d5-8778-9d82bb502ac0 |
| 3428 | CODE_SMELL | MINOR | src/main/exec-hints.ts:1240 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 36b2fdab-65c1-43a7-8ed1-a782cf8d02f8 |
| 3429 | CODE_SMELL | MINOR | src/main/exec-hints.ts:1240 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | bc98b83b-4b9c-4831-8dd9-2a2df1215b0f |
| 3430 | BUG | CRITICAL | src/main/exec-hints.ts:1249 | typescript:S2871 | Provide a compare function that depends on "String.localeCompare", to reliably sort elements alphabetically. | 27136233-f65d-45d5-91e2-6e3e2b72b6bc |
| 3431 | CODE_SMELL | CRITICAL | src/main/exec-hints.ts:1261 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 36 to the 15 allowed. | f771b3f8-df78-4552-b166-d83c8d69d3da |
| 3432 | CODE_SMELL | MAJOR | src/main/exec-hints.ts:1325 | typescript:S4624 | Refactor this code to not use nested template literals. | f9672944-f66d-4acc-a86b-e119d243f67c |
| 3433 | CODE_SMELL | MAJOR | src/main/exec-hints.ts:1326 | typescript:S4624 | Refactor this code to not use nested template literals. | 95ac5fa7-eef9-44c2-8904-ee376925bd78 |
| 3434 | CODE_SMELL | CRITICAL | src/main/exec-hints.ts:1392 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | a15a4e05-8cc2-4e03-90e0-060666b24108 |
| 3435 | CODE_SMELL | MAJOR | src/main/exec-hints.ts:1611 | typescript:S4624 | Refactor this code to not use nested template literals. | dd5a76ab-cbe2-484d-bd95-d9edeb43c88d |
| 3436 | CODE_SMELL | MINOR | src/main/exec.ts:81 | typescript:S6353 | Use concise character class syntax '\w' instead of '[A-Za-z0-9_]'. | f1870de3-e4d5-40e0-a3df-1049d01c0b58 |
| 3437 | CODE_SMELL | MINOR | src/main/exec.ts:131 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | 7e96d0dc-8c58-4dba-b702-71bb6edb757e |
| 3438 | CODE_SMELL | MINOR | src/main/exec.ts:138 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | 7ae8fb67-117b-48ff-8184-a9de1d6cb323 |
| 3439 | CODE_SMELL | MINOR | src/main/exec.ts:380 | typescript:S7758 | Prefer `String.fromCodePoint()` over `String.fromCharCode()`. | c445e347-bc89-46ff-8fd2-a398a8a9304f |
| 3440 | CODE_SMELL | MINOR | src/main/exec.ts:380 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | f0c9a8d3-f274-45a2-8417-7fbf1a7dc213 |
| 3441 | CODE_SMELL | MINOR | src/main/exec.ts:381 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | d5e60c59-12d1-4cda-8375-8e495da8bcbd |
| 3442 | CODE_SMELL | MINOR | src/main/exec.ts:382 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 07f53202-e1ee-4d92-8aef-0af52f0bdb4b |
| 3443 | CODE_SMELL | MINOR | src/main/exec.ts:383 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 7735c116-24fb-4eae-8125-240cdfca9099 |
| 3444 | CODE_SMELL | MINOR | src/main/exec.ts:384 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 17b8c9d5-f7e2-4827-833b-049daac609c0 |
| 3445 | CODE_SMELL | MINOR | src/main/exec.ts:385 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 9cbd61f3-6220-495c-8390-62cba84d75d4 |
| 3446 | CODE_SMELL | MINOR | src/main/fsops.ts:112 | typescript:S7758 | Prefer `String#codePointAt()` over `String#charCodeAt()`. | c16c89a1-eba2-48a2-b7a9-29a70cbb2f38 |
| 3447 | CODE_SMELL | MINOR | src/main/fsops.ts:196 | typescript:S7735 | Unexpected negated condition. | 2ec88983-674b-435e-ba72-722b947a5548 |
| 3448 | CODE_SMELL | CRITICAL | src/main/fsops.ts:210 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | bad27fff-ccfb-4b7c-bfcd-79234410202e |
| 3449 | CODE_SMELL | MINOR | src/main/fsops.ts:278 | typescript:S7755 | Prefer `.at(…)` over `[….length - index]`. | 5813a699-a4bb-4a9d-8650-170bbe92bdda |
| 3450 | CODE_SMELL | MINOR | src/main/fsops.ts:324 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 9926d4b5-990c-476e-8eda-3cfc900188fe |
| 3451 | CODE_SMELL | MINOR | src/main/fsops.ts:332 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | b3047a8d-62a8-4833-b2a2-f6b638fb70cd |
| 3452 | CODE_SMELL | MINOR | src/main/fsops.ts:332 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | e0bea1cb-cb53-4f59-94bb-f61782fa0a09 |
| 3453 | CODE_SMELL | MAJOR | src/main/fsops.ts:363 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 739cf1fd-33a5-4434-a076-eef38b88b650 |
| 3454 | CODE_SMELL | MINOR | src/main/fsops.ts:401 | typescript:S7755 | Prefer `.at(…)` over `[….length - index]`. | 96a295cc-1c93-4a31-b99a-ac50b3568a08 |
| 3455 | CODE_SMELL | CRITICAL | src/main/fsops.ts:438 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 23 to the 15 allowed. | 3ab5b54b-5d69-421c-9177-be93b7e71e5c |
| 3456 | CODE_SMELL | MINOR | src/main/fsops.ts:450 | typescript:S7735 | Unexpected negated condition. | b061e284-80fe-45cf-947d-2e0e63608221 |
| 3457 | CODE_SMELL | MAJOR | src/main/fsops.ts:471 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | b48694d4-2847-49f2-a775-da4913b4e17a |
| 3458 | CODE_SMELL | CRITICAL | src/main/fsops.ts:582 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 38 to the 15 allowed. | 56d05d4a-e000-499f-aa1e-e5a8109fc744 |
| 3459 | CODE_SMELL | MAJOR | src/main/goal.ts:1325 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 5dca01fc-0e5b-46bf-b075-81fc2805c981 |
| 3460 | CODE_SMELL | MAJOR | src/main/goal.ts:2168 | typescript:S4624 | Refactor this code to not use nested template literals. | 398f1d1e-efd4-4ccd-b28f-081c5c445db6 |
| 3461 | CODE_SMELL | CRITICAL | src/main/goal.ts:2367 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 25 to the 15 allowed. | 48a7579f-85c6-4efa-adff-09cd18e7613a |
| 3462 | CODE_SMELL | MAJOR | src/main/goal.ts:2388 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 433ee31b-8b9f-438e-8335-67b6bdcf102f |
| 3463 | CODE_SMELL | MAJOR | src/main/goal.ts:2388 | typescript:S2589 | This always evaluates to truthy. Consider refactoring this code. | fca64394-1ad1-4c7e-a6a4-73439ef0121d |
| 3464 | CODE_SMELL | MINOR | src/main/goal.ts:2393 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 72302fc9-f11e-428d-8823-1dd2739ab805 |
| 3465 | CODE_SMELL | MAJOR | src/main/goal.ts:2398 | typescript:S4624 | Refactor this code to not use nested template literals. | 1d79189a-c409-4789-a520-4a149a491c64 |
| 3466 | CODE_SMELL | MAJOR | src/main/goal.ts:2481 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 223a5928-d2d7-4ede-9a6e-0dfc23b6ae01 |
| 3467 | CODE_SMELL | MINOR | src/main/goal.ts:2592 | typescript:S7735 | Unexpected negated condition. | a3fb9666-a5bd-4260-9b35-6af8651d84e4 |
| 3468 | CODE_SMELL | MINOR | src/main/goal.ts:2727 | typescript:S7758 | Prefer `String#codePointAt()` over `String#charCodeAt()`. | 2c248d7c-5f2c-4119-8ee6-9e317afedcc8 |
| 3469 | CODE_SMELL | MINOR | src/main/goal.ts:2759 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 2ae944da-9722-4c0b-be5a-6a606246b89e |
| 3470 | CODE_SMELL | MINOR | src/main/goal.ts:2764 | typescript:S6353 | Use concise character class syntax '\d' instead of '[0-9]'. | 29da8092-ff61-4cfd-a3c8-53b8c6a2eea8 |
| 3471 | CODE_SMELL | MINOR | src/main/goal.ts:2764 | typescript:S6353 | Use concise character class syntax '\d' instead of '[0-9]'. | 67d4f0e5-3a44-4a11-bbec-967b87c8a938 |
| 3472 | CODE_SMELL | MAJOR | src/main/goal.ts:2776 | typescript:S5843 | Simplify this regular expression to reduce its complexity from 25 to the 20 allowed. | a98ede25-636b-4e55-9657-3689c39f401c |
| 3473 | CODE_SMELL | MINOR | src/main/goal.ts:2791 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 199ad4fa-2126-4bd2-a67b-e900613535f3 |
| 3474 | CODE_SMELL | MAJOR | src/main/goal.ts:2918 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 022ed46b-65d3-4268-9dd2-f606900f3704 |
| 3475 | CODE_SMELL | MINOR | src/main/ipc.ts:117 | typescript:S3863 | './session/store.js' imported multiple times. | 66ea4bee-6067-4117-b385-b670080ef22e |
| 3476 | CODE_SMELL | MAJOR | src/main/ipc.ts:537 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 095b770e-f212-4293-a4be-e4ed58b7ca16 |
| 3477 | CODE_SMELL | MAJOR | src/main/ipc.ts:540 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 195257e8-e7b9-4e24-b855-6f3da665b00f |
| 3478 | CODE_SMELL | MINOR | src/main/logger.ts:183 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 1109755a-62d3-468f-b94e-a189efd6c07a |
| 3479 | CODE_SMELL | MINOR | src/main/logger.ts:184 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 71efba14-5d3c-4851-a4c3-64dbbffd29ec |
| 3480 | CODE_SMELL | MINOR | src/main/logger.ts:185 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 1e767043-a0f5-439a-85c3-e76f351ae9e5 |
| 3481 | CODE_SMELL | MAJOR | src/main/mcp/kernel.ts:383 | typescript:S4624 | Refactor this code to not use nested template literals. | b9482ee5-24ac-4679-9147-eec3f159b206 |
| 3482 | CODE_SMELL | CRITICAL | src/main/mcp/kernel.ts:473 | typescript:S3735 | Remove this use of the "void" operator. | ed6cfd7b-3adb-4994-853a-0ccab3b18e1c |
| 3483 | CODE_SMELL | MAJOR | src/main/mcp/kernel.ts:687 | typescript:S107 | Async function 'dispatchTracked' has too many parameters (8). Maximum allowed is 7. | 6c0f09aa-9719-48c9-b038-888d9d97a2a3 |
| 3484 | CODE_SMELL | CRITICAL | src/main/mcp/kernel.ts:1589 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed. | 4bc6619c-c47e-43b2-bb60-184e6c96129d |
| 3485 | CODE_SMELL | MINOR | src/main/mcp/server.ts:295 | typescript:S6606 | Prefer using nullish coalescing operator (`??=`) instead of an assignment expression, as it is simpler to read. | 9728fa0f-7415-44b7-a94c-d344d8482564 |
| 3486 | CODE_SMELL | MAJOR | src/main/mcp/server.ts:380 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | d377cf13-2826-4fe8-a616-9cb5522bc947 |
| 3487 | CODE_SMELL | MAJOR | src/main/mcp/server.ts:384 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 4d4b9164-10eb-4ba2-b99c-05bf174cf590 |
| 3488 | CODE_SMELL | MINOR | src/main/mcp/session-tool.ts:212 | typescript:S7735 | Unexpected negated condition. | 0fc051d9-db04-4577-b579-048455578483 |
| 3489 | CODE_SMELL | MAJOR | src/main/mcp/session-tool.ts:244 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 6077ace1-a30d-447b-ae9d-626d0453eb98 |
| 3490 | CODE_SMELL | CRITICAL | src/main/mcp/session-tool.ts:466 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 29 to the 15 allowed. | 8237fb72-f730-442b-a329-b7086849eb47 |
| 3491 | CODE_SMELL | MAJOR | src/main/mcp/session-tool.ts:527 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 51ad4fdb-199a-4bd9-b971-3fb9a3002076 |
| 3492 | CODE_SMELL | MAJOR | src/main/mcp/session-tool.ts:530 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 8881f27d-8518-4690-be02-014a81b12159 |
| 3493 | CODE_SMELL | CRITICAL | src/main/mcp/session-tool.ts:570 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 28 to the 15 allowed. | c2b68500-33fa-4263-89f1-d90ef0ce759c |
| 3494 | CODE_SMELL | MAJOR | src/main/mcp/session-tool.ts:619 | typescript:S4624 | Refactor this code to not use nested template literals. | 4581e7ab-5769-47f3-bb82-19f88a6c4e14 |
| 3495 | CODE_SMELL | MAJOR | src/main/mcp/session-tool.ts:706 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 93ae670b-bd16-479c-b0df-d3940aff6af0 |
| 3496 | CODE_SMELL | MAJOR | src/main/mcp/session-tool.ts:736 | typescript:S4624 | Refactor this code to not use nested template literals. | 2edcc064-7a79-499a-b30a-928ec7419505 |
| 3497 | CODE_SMELL | MINOR | src/main/mcp/session-tool.ts:1098 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | d4be949b-e684-4d07-9436-29eb693946f0 |
| 3498 | CODE_SMELL | MINOR | src/main/mcp/session-tool.ts:1113 | typescript:S7758 | Prefer `String#codePointAt()` over `String#charCodeAt()`. | 8fcc2191-e10d-418a-a306-107a19dc5a6b |
| 3499 | CODE_SMELL | CRITICAL | src/main/mcp/tools-core.ts:614 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 30 to the 15 allowed. | 88ef5918-81fa-432e-818b-e797017ef8aa |
| 3500 | CODE_SMELL | MAJOR | src/main/mcp/tools-core.ts:990 | typescript:S4624 | Refactor this code to not use nested template literals. | cf6fbd0c-e493-466e-b6c8-185a7f3d9ca5 |
| 3501 | CODE_SMELL | MAJOR | src/main/mcp/tools-core.ts:1705 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 1b200b1e-1212-4df2-9799-1b984bfbb1c7 |
| 3502 | CODE_SMELL | CRITICAL | src/main/mcp/tools-core.ts:2009 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 17 to the 15 allowed. | 80f373a6-d178-455f-bc8f-09b234434620 |
| 3503 | CODE_SMELL | MAJOR | src/main/mcp/tools-core.ts:2377 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | f2c3ea55-d761-4daf-8fcf-7ecb6a78a0fe |
| 3504 | CODE_SMELL | MAJOR | src/main/mcp/tools-core.ts:2388 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | ffacd39a-9199-4987-9ac6-407d18987076 |
| 3505 | CODE_SMELL | MAJOR | src/main/mcp/tools-core.ts:2479 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 1eaf0ecd-75ef-4a11-b5f9-419e80053b20 |
| 3506 | CODE_SMELL | MAJOR | src/main/mcp/tools-core.ts:2482 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 59c402f3-063b-49a7-8d1f-d9cd4dbcfd44 |
| 3507 | CODE_SMELL | MAJOR | src/main/mcp/tools-core.ts:2487 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | b1d2b1d7-4c34-4280-b2c0-6f49388e9540 |
| 3508 | CODE_SMELL | MAJOR | src/main/mcp/tools-core.ts:2491 | typescript:S4624 | Refactor this code to not use nested template literals. | 7d0543f6-6f67-4951-87e4-820a5d336609 |
| 3509 | CODE_SMELL | MINOR | src/main/mcp/tools-core.ts:2535 | typescript:S7763 | Use `export…from` to re-export `ToolResult`. | 9c0889e3-f5d2-4ac3-8439-ccb1569cd908 |
| 3510 | CODE_SMELL | MINOR | src/main/mcp/tools.ts:84 | typescript:S7763 | Use `export…from` to re-export `toVirtualPath`. | 2bbf2714-77f0-4606-b8ef-1d412e99da23 |
| 3511 | CODE_SMELL | MINOR | src/main/mcp/tools.ts:85 | typescript:S7763 | Use `export…from` to re-export `ToolContext`. | 535353b6-0c34-46ee-8792-8f8a67fbd280 |
| 3512 | CODE_SMELL | MINOR | src/main/ripgrep.ts:29 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 7cbca9c1-b74e-4c25-a4e5-2511e15ab794 |
| 3513 | CODE_SMELL | MINOR | src/main/sandbox.ts:88 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 0fca05ea-0754-4de9-8978-3fd62b22f4bd |
| 3514 | CODE_SMELL | MINOR | src/main/sandbox.ts:89 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | d999d451-0494-428a-a0f8-a0b7caa1b477 |
| 3515 | CODE_SMELL | MAJOR | src/main/search.ts:101 | typescript:S4782 | Consider removing 'undefined' type or '?' specifier, one of them is redundant. | 9a336440-d2f7-41e9-9716-e5b051d8d70c |
| 3516 | CODE_SMELL | MINOR | src/main/search.ts:131 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | 076ddb34-5a12-4e0d-a643-0e1841689217 |
| 3517 | CODE_SMELL | MINOR | src/main/search.ts:131 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 72576d1a-55dd-4023-a7b6-e5e172bb61f4 |
| 3518 | CODE_SMELL | MINOR | src/main/search.ts:274 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | c0b62cc1-4f8c-44f2-9433-6c66b9c45724 |
| 3519 | CODE_SMELL | MINOR | src/main/search.ts:280 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | ba364802-38c2-471e-9009-792bbadd564b |
| 3520 | CODE_SMELL | MINOR | src/main/search.ts:280 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | c38fd9f2-e418-42d5-b6ed-f1ee3f3a237e |
| 3521 | CODE_SMELL | MINOR | src/main/search.ts:319 | typescript:S6606 | Prefer using nullish coalescing operator (`??=`) instead of an assignment expression, as it is simpler to read. | a9a2395f-53f5-49ef-ae88-16e1b849e0c7 |
| 3522 | CODE_SMELL | CRITICAL | src/main/search.ts:325 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 56 to the 15 allowed. | 668b8447-5c68-4b15-bf50-2a7a67e6f1ae |
| 3523 | CODE_SMELL | MINOR | src/main/search.ts:498 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | f6f388e1-487b-43ce-9982-bb6454daac21 |
| 3524 | CODE_SMELL | MINOR | src/main/search.ts:514 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | f574b0f3-2d58-4689-b74e-e2de606c0f25 |
| 3525 | CODE_SMELL | CRITICAL | src/main/search.ts:532 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 24 to the 15 allowed. | 317ffde8-f877-4d20-b984-c0af2b6abe36 |
| 3526 | CODE_SMELL | MINOR | src/main/session/continuation.ts:511 | typescript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | 5c6cb89f-df4e-44fc-be11-c94cff88ee66 |
| 3527 | CODE_SMELL | MAJOR | src/main/session/continuation.ts:1576 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 9d713667-4e7e-47d8-9940-2d57395a0b46 |
| 3528 | CODE_SMELL | MAJOR | src/main/session/continuation.ts:1717 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 4327c14a-db8c-4848-9826-0c075c5a633d |
| 3529 | CODE_SMELL | MINOR | src/main/session/correlation.ts:92 | typescript:S4325 | This assertion is unnecessary since it does not change the type of the expression. | 3fb9a4e1-c59e-4715-8edb-0fcc91fe38d8 |
| 3530 | CODE_SMELL | MINOR | src/main/session/correlation.ts:419 | typescript:S7747 | `for…of` can iterate over iterable, it's unnecessary to convert to an array. | 205592a0-611b-4319-932a-6bd1547ba1b7 |
| 3531 | CODE_SMELL | MAJOR | src/main/session/recorder.ts:367 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 008cb09e-0c76-4c41-8711-b058a7830d22 |
| 3532 | CODE_SMELL | MAJOR | src/main/session/recorder.ts:410 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 49a75fa3-f743-4ac0-a591-e832e6344ed9 |
| 3533 | CODE_SMELL | MINOR | src/main/session/recorder.ts:575 | typescript:S7735 | Unexpected negated condition. | f22aed22-3c7d-4368-84ac-108b66c893cd |
| 3534 | CODE_SMELL | CRITICAL | src/main/session/recorder.ts:851 | typescript:S3735 | Remove this use of the "void" operator. | 6a64d1b5-2c56-4b01-90bf-d3f78e1b1e72 |
| 3535 | CODE_SMELL | CRITICAL | src/main/session/recorder.ts:852 | typescript:S3735 | Remove this use of the "void" operator. | 2777274c-d4f0-4c13-b90d-c2e14a886ce5 |
| 3536 | CODE_SMELL | CRITICAL | src/main/session/recorder.ts:862 | typescript:S3735 | Remove this use of the "void" operator. | 2e0d11eb-9088-40b9-8458-abbf7822328e |
| 3537 | CODE_SMELL | CRITICAL | src/main/session/recorder.ts:863 | typescript:S3735 | Remove this use of the "void" operator. | a0bf1e16-cfd8-426a-a229-ee37cb762af2 |
| 3538 | CODE_SMELL | CRITICAL | src/main/session/recorder.ts:864 | typescript:S3735 | Remove this use of the "void" operator. | 9d5762a4-4e28-4dc6-b5b3-1b3718441996 |
| 3539 | CODE_SMELL | MINOR | src/main/session/recorder.ts:1088 | typescript:S4325 | This assertion is unnecessary since it does not change the type of the expression. | 47a7a027-d034-44a4-8e1a-2d875c730589 |
| 3540 | CODE_SMELL | MINOR | src/main/session/recorder.ts:1091 | typescript:S4325 | This assertion is unnecessary since it does not change the type of the expression. | abb444f8-2cf8-4313-b8b8-964ca0302c04 |
| 3541 | CODE_SMELL | MINOR | src/main/session/recorder.ts:1104 | typescript:S4325 | This assertion is unnecessary since it does not change the type of the expression. | 3be632bd-6871-4980-8926-597c253f45ad |
| 3542 | CODE_SMELL | MAJOR | src/main/session/recorder.ts:1693 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | f5f41c3e-f9ad-4f50-8670-3357049d1506 |
| 3543 | CODE_SMELL | MAJOR | src/main/session/recorder.ts:1930 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 021456e1-ea1e-49d9-9ffa-9fa5f54a21a8 |
| 3544 | CODE_SMELL | MINOR | src/main/session/recorder.ts:2773 | typescript:S7763 | Use `export…from` to re-export `SessionEvent`. | 00148513-a529-409b-96c7-680c6af03f10 |
| 3545 | CODE_SMELL | MINOR | src/main/session/recorder.ts:2773 | typescript:S7763 | Use `export…from` to re-export `SessionSummary`. | 767906e8-bd7e-46ae-88aa-18cbe9f5b9a3 |
| 3546 | CODE_SMELL | MINOR | src/main/session/store.ts:134 | typescript:S4325 | This assertion is unnecessary since it does not change the type of the expression. | 548e363d-a11a-4fd5-93d5-24fa18f5be89 |
| 3547 | CODE_SMELL | MAJOR | src/main/session/store.ts:1371 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | e8d6c613-36d1-4950-9c1a-55d58dd8e6c2 |
| 3548 | CODE_SMELL | MINOR | src/main/session/store.ts:1435 | typescript:S7735 | Unexpected negated condition. | 6cc48840-ba5b-42f5-b9b5-6e2da6d28036 |
| 3549 | CODE_SMELL | MAJOR | src/main/session/store.ts:3398 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 62d75fb9-1999-43b9-9037-05f4b0eb2310 |
| 3550 | CODE_SMELL | MAJOR | src/main/session/store.ts:3400 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 1d80a79e-6eea-4a10-bd72-21b6604c9d72 |
| 3551 | CODE_SMELL | MINOR | src/main/session/summarize.ts:91 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | f0c1ba62-04c8-4e41-a473-e3d33c7ce781 |
| 3552 | CODE_SMELL | MAJOR | src/main/session/summarize.ts:239 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 914f10b1-2394-47f3-90fe-98b43763e0c6 |
| 3553 | CODE_SMELL | MINOR | src/main/session/summarize.ts:258 | typescript:S7770 | arrow function is equivalent to `String`. Use `String` directly. | b3c3c6de-c19b-4aaf-8e32-ef1620a8897e |
| 3554 | CODE_SMELL | MAJOR | src/main/session/summarize.ts:265 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 2bf52f1b-6dbe-4aa7-83ff-034266aae12a |
| 3555 | CODE_SMELL | MAJOR | src/main/session/summarize.ts:265 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | a9b89308-3074-4b35-8580-e745aa6b8ece |
| 3556 | CODE_SMELL | MAJOR | src/main/session/summarize.ts:270 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | bbfac927-e291-4adc-94e7-2b3c0b56eda2 |
| 3557 | CODE_SMELL | MAJOR | src/main/session/summarize.ts:278 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | a6350ba1-f6e7-4b80-8892-80a7ebb324fc |
| 3558 | CODE_SMELL | MINOR | src/main/session/summarize.ts:290 | typescript:S7735 | Unexpected negated condition. | fd71dbd3-e049-4b5b-81b5-a0e2b33ed3b6 |
| 3559 | CODE_SMELL | MAJOR | src/main/session/summarize.ts:291 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 33712278-9526-432d-b828-992bbfc04a71 |
| 3560 | CODE_SMELL | MAJOR | src/main/session/summarize.ts:292 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | e9ba98e5-aeb7-4cfa-9577-e45ff7048740 |
| 3561 | CODE_SMELL | MAJOR | src/main/session/summarize.ts:315 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 3149f1b5-6a94-434e-abb2-2744868e3014 |
| 3562 | CODE_SMELL | MAJOR | src/main/session/summarize.ts:317 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 62593896-8a0c-495b-be60-c2fc05791d82 |
| 3563 | CODE_SMELL | MAJOR | src/main/session/summarize.ts:321 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | b3f44490-d6ed-4137-be2f-483f53870416 |
| 3564 | CODE_SMELL | MAJOR | src/main/session/summarize.ts:321 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | bd9d0c35-21eb-457e-b3dc-7f49b08836b6 |
| 3565 | CODE_SMELL | MAJOR | src/main/session/summarize.ts:345 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 3abecf4a-bdda-419c-8fef-923d36d642c6 |
| 3566 | CODE_SMELL | MAJOR | src/main/session/summarize.ts:346 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 3eb9523f-b630-418d-8c93-b7aef3ce80b7 |
| 3567 | CODE_SMELL | MAJOR | src/main/session/summarize.ts:349 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | f4f9145e-103d-4a02-a2c7-f8d2b20d7bda |
| 3568 | CODE_SMELL | MAJOR | src/main/session/summarize.ts:351 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | cbb83477-38dc-4617-96b6-ba7698b3e9b6 |
| 3569 | CODE_SMELL | MAJOR | src/main/session/summarize.ts:362 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 1b43bcfe-c3db-436a-94ca-b9bb9be825f8 |
| 3570 | CODE_SMELL | MAJOR | src/main/session/summarize.ts:364 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | ce3b54de-2493-41b7-bdf7-6c2a286704c1 |
| 3571 | CODE_SMELL | MINOR | src/main/session/summarize.ts:383 | typescript:S7735 | Unexpected negated condition. | 73c5b7d7-9833-464a-a901-60c18808d8a5 |
| 3572 | CODE_SMELL | MINOR | src/main/session/summarize.ts:391 | typescript:S7735 | Unexpected negated condition. | b2c01433-ff53-432a-9311-61394d906dec |
| 3573 | CODE_SMELL | MINOR | src/main/session/summarize.ts:398 | typescript:S7735 | Unexpected negated condition. | e04c4cba-df68-469c-b83e-7a947f8ffce4 |
| 3574 | CODE_SMELL | MINOR | src/main/session/summarize.ts:479 | typescript:S7735 | Unexpected negated condition. | 1e244e9f-c4da-4aeb-a55f-68c2d70c71be |
| 3575 | CODE_SMELL | MAJOR | src/main/session/summarize.ts:489 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 4ddeb6bf-fbe7-400a-a076-50bf6913df6c |
| 3576 | CODE_SMELL | MINOR | src/main/session/summarize.ts:492 | typescript:S7735 | Unexpected negated condition. | 8f779f20-4dab-428a-9ece-4fbcc8c5099e |
| 3577 | CODE_SMELL | MINOR | src/main/session/summarize.ts:523 | typescript:S7735 | Unexpected negated condition. | 352dd857-e484-44db-889a-234beac750cf |
| 3578 | CODE_SMELL | MINOR | src/main/text-match.ts:14 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 7c6573a2-7e59-455f-ad60-33c891142a0b |
| 3579 | CODE_SMELL | MINOR | src/main/text-match.ts:138 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | e9760023-0c59-4504-bf5c-fcbc3936dfde |
| 3580 | CODE_SMELL | MINOR | src/main/text-match.ts:170 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 4ae3a674-6820-44d3-8191-667a6386123e |
| 3581 | CODE_SMELL | MINOR | src/main/toolchain.ts:58 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | 6dc6224b-6ca4-4740-846a-3b129ecf1024 |
| 3582 | CODE_SMELL | MINOR | src/main/toolchain.ts:59 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | c07075b5-7a2b-493c-abd0-edf7c384b659 |
| 3583 | CODE_SMELL | MINOR | src/main/toolchain.ts:87 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | d0280321-c250-4c50-a089-9d05adc483fa |
| 3584 | CODE_SMELL | MINOR | src/main/toolchain.ts:92 | typescript:S7780 | `String.raw` should be used to avoid escaping `\`. | 86406396-32c3-4c92-af77-899a9188ac7f |
| 3585 | CODE_SMELL | CRITICAL | src/main/toolchain.ts:124 | typescript:S3776 | Refactor this function to reduce its Cognitive Complexity from 20 to the 15 allowed. | 62bb59c3-3265-4bf9-83e9-90b55ae195d8 |
| 3586 | CODE_SMELL | MAJOR | src/main/toolchain.ts:134 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 0a150752-a804-470a-88f0-606f8b65209a |
| 3587 | CODE_SMELL | MAJOR | src/main/toolchain.ts:134 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 6789aec1-7039-4bdf-ab3d-d7bdc830b2cd |
| 3588 | CODE_SMELL | MAJOR | src/main/toolchain.ts:137 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | f60ecd62-7adf-4739-aeed-960a80046a4b |
| 3589 | CODE_SMELL | MAJOR | src/main/tunnel/health.ts:56 | typescript:S6557 | Use 'String#startsWith' method instead. | 3d0803bb-f85c-4ed3-a38d-11bbec2cc40b |
| 3590 | CODE_SMELL | MAJOR | src/main/tunnel/health.ts:56 | typescript:S6557 | Use 'String#startsWith' method instead. | fa3e80f1-e515-4e17-8c18-ee15e21b024f |
| 3591 | CODE_SMELL | MAJOR | src/main/tunnel/health.ts:111 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 856eb31f-0078-4547-8ed9-d3430be40a3c |
| 3592 | CODE_SMELL | MAJOR | src/main/tunnel/health.ts:111 | typescript:S4624 | Refactor this code to not use nested template literals. | 8640a3ec-209b-4c62-8fec-05f3a3896303 |
| 3593 | CODE_SMELL | MINOR | src/main/tunnel/index.ts:571 | typescript:S6551 | 'event['level'] ?? ''' will use Object's default stringification format ('[object Object]') when stringified. | 79848e8f-beaa-4c80-92eb-682eb8ec592b |
| 3594 | CODE_SMELL | MINOR | src/main/tunnel/index.ts:572 | typescript:S6551 | 'event['msg'] ?? 'tunnel-client event'' will use Object's default stringification format ('[object Object]') when stringified. | 714d8bf8-fe6e-442b-a7ff-8d0e53cccfda |
| 3595 | CODE_SMELL | MINOR | src/main/tunnel/index.ts:582 | typescript:S6551 | 'event['error']' will use Object's default stringification format ('[object Object]') when stringified. | 443f99cb-242f-48f3-9f09-4dfbbd4c89cb |
| 3596 | CODE_SMELL | MINOR | src/main/tunnel/locate.ts:47 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 494b282c-0ffb-4548-b696-8b334d7dee75 |
| 3597 | CODE_SMELL | MINOR | src/preload/index.ts:38 | typescript:S3863 | '../shared/session.js' imported multiple times. | ddffb0ad-a6ad-45d1-b862-3a3770f97778 |
| 3598 | CODE_SMELL | MINOR | src/renderer/chat.ts:85 | typescript:S7764 | Prefer `globalThis` over `window`. | 0dd71bfe-a5f4-4394-96f7-21b09500e3b4 |
| 3599 | BUG | CRITICAL | src/renderer/chat.ts:3004 | typescript:S2871 | Provide a compare function that depends on "String.localeCompare", to reliably sort elements alphabetically. | f0a70331-5bc7-4492-b86d-3675497d45b5 |
| 3600 | CODE_SMELL | MAJOR | src/renderer/chat.ts:4255 | typescript:S4624 | Refactor this code to not use nested template literals. | 85dc47b1-f847-4e1b-a9ee-07451536aa4b |
| 3601 | CODE_SMELL | MAJOR | src/renderer/chat.ts:4377 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 6ac83e3c-7594-4aa1-8ad5-c16935eb270e |
| 3602 | CODE_SMELL | MAJOR | src/renderer/chat.ts:4403 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 63784c76-ae5c-4c22-9137-1947d9ac4847 |
| 3603 | CODE_SMELL | MINOR | src/renderer/dom.ts:133 | typescript:S7764 | Prefer `globalThis` over `window`. | df7614dd-bb7c-4e00-953b-e3543c2e7cef |
| 3604 | CODE_SMELL | MINOR | src/renderer/dom.ts:134 | typescript:S7764 | Prefer `globalThis` over `window`. | 5626c6b4-7e5a-43e8-b256-74a355cbcd34 |
| 3605 | CODE_SMELL | MINOR | src/renderer/main.ts:60 | typescript:S7764 | Prefer `globalThis` over `window`. | 8d12cf02-3a43-4cbd-818e-f637dbe879dc |
| 3606 | CODE_SMELL | MINOR | src/renderer/main.ts:1851 | typescript:S7778 | Do not call `Array#push()` multiple times. | 1cc225aa-0337-4449-9854-209bd0745ffd |
| 3607 | CODE_SMELL | MAJOR | src/renderer/main.ts:1909 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 58e874d2-1fce-4025-a29d-2e0b465b38f0 |
| 3608 | CODE_SMELL | MINOR | src/renderer/main.ts:1942 | typescript:S7764 | Prefer `globalThis` over `window`. | 4816c9e2-d7d6-4ea6-81f8-6cf303a62e2b |
| 3609 | CODE_SMELL | MAJOR | src/renderer/main.ts:2259 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 1053e75f-5ea0-475a-a8d8-e72e73c709f4 |
| 3610 | CODE_SMELL | MAJOR | src/renderer/main.ts:2266 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 37176760-c311-4031-be37-95eba98bdd76 |
| 3611 | CODE_SMELL | MAJOR | src/renderer/main.ts:2266 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 6d2cd8a8-67b9-4fff-bf1e-548a9550e757 |
| 3612 | CODE_SMELL | MAJOR | src/shared/chronology.ts:300 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | 19f82b11-fd19-4234-83e0-27a23ac3688c |
| 3613 | CODE_SMELL | MAJOR | src/shared/chronology.ts:300 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | b9842a95-f090-4898-8f19-ac1f23c636bc |
| 3614 | CODE_SMELL | MINOR | src/shared/session.ts:588 | typescript:S7781 | Prefer `String#replaceAll()` over `String#replace()`. | 845ce7d1-57d1-425a-b545-576c21cc57e0 |
| 3615 | CODE_SMELL | MAJOR | src/shared/session.ts:1186 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | 7457a82e-36d6-49b2-87a0-39a0a973b6d7 |
| 3616 | CODE_SMELL | MAJOR | src/shared/session.ts:1188 | typescript:S6582 | Prefer using an optional chain expression instead, as it's more concise and easier to read. | f2080088-cead-48d9-9013-0f28d1485829 |
| 3617 | CODE_SMELL | MAJOR | src/shared/session.ts:1212 | typescript:S3358 | Extract this nested ternary operation into an independent statement. | b2423cda-2e1f-403b-a510-4c91b8bc561b |

## 安全熱點（獨立於一般問題）

- 總數：93
- [目前分支安全熱點頁](http://localhost:32769/security_hotspots?id=chat-on-steroids&branch=merge%2Fupstream-ad8f02dc-20261007)
- 明細未取得：Sonar API api/hotspots/search failed (HTTP 403). 不可據此判定沒有熱點；可使用已授權登入的 UI 補充。

Quality Gate OK、零未解決問題或零漏洞，皆不代表所有安全熱點已人工審查。
