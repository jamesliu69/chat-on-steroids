# MCP instance identity repair — 2026-09-13

## Problem

A Raspberry Pi Core connector (`CosPi`) and a Windows Core connector (`CosWin`) could publish the same MCP `serverInfo.name` (`chat-on-steroids-core`). ChatGPT caches connector metadata by that server identity, so two different computers could reuse or overwrite one another's cached tool metadata. The observed failure was a Core schema that advertised tools such as `read`, while the live Pi catalog did not match the cached snapshot; discovery also briefly surfaced Windows Desktop tools under the Pi connector.

The Pi listener and OpenAI tunnel were healthy during reproduction. The Pi tunnel health channel reported `ok`, and the local MCP listener answered normally. The failure therefore occurred at connector metadata identity, before tool dispatch.

## Repair

OpenAI tunnel mode now scopes every MCP surface's `serverInfo.name` with the non-secret Core tunnel UUID, frozen when the local MCP endpoint starts. Core, Desktop, and Plugins still retain their distinct base names, but separate computers no longer share one cache identity. Manual/cloudflared endpoints retain the existing base names.

The Core tunnel identity is passed from `connection.ts` into `startMcpServer()`. `server.ts` freezes the resulting per-surface names for that endpoint lifetime, and `tools.ts` publishes the supplied server name in MCP initialize responses. `surfaces.ts` owns validation/formatting of the instance-scoped name.

## Regression coverage

- `test/connection.test.ts` verifies that an OpenAI Core tunnel id is passed into the MCP endpoint identity scope.
- `test/mcp.test.ts` verifies that every MCP surface returns an instance-scoped `serverInfo.name` when a scope is supplied.
- The existing unscoped identity test remains the neighboring negative case and verifies that endpoints without an instance scope keep the base surface names.

## Validation

- TDD red phase: both new regression tests failed before the production change for the expected missing behavior.
- TDD green phase: both new regression tests passed after the repair.
- Focused boundary suite: `190 passed`, `15 skipped` across `connection`, `mcp`, `server-runtime`, and `mcp-tool-declarations`.
- `npm run typecheck`: passed.
- `npm run verify`: passed. Main Vitest run: `4084 passed`, `132 skipped` across `162 passed` test files; isolated `mcp-shutdown`: `2 passed`.
- `npm run build`: passed with the repository's existing Vite dynamic-import warnings only.
- `git diff --check`: passed.

## Deployment note

The source and production bundle are repaired. A currently running headless server must be restarted before its MCP initialize response uses the new instance-scoped identity. After restart, ChatGPT must reconnect/refresh the installed Pi connector once so it discards the previously cached conflicting metadata.
