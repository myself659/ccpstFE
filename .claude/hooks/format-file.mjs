#!/usr/bin/env node
// PostToolUse hook for Edit|Write (see .claude/settings.json).
//
// Replaces the POSIX-only pipeline
//   jq -r '.tool_input.file_path' | xargs npx prettier --write --ignore-unknown
// which needs `jq` on PATH and breaks on Windows paths containing spaces.

import { spawnSync } from "node:child_process";

const raw = await new Promise((resolve) => {
  let buf = "";
  process.stdin.setEncoding("utf8");
  process.stdin.on("data", (chunk) => (buf += chunk));
  process.stdin.on("end", () => resolve(buf));
  process.stdin.on("error", () => resolve(""));
});

let filePath = "";
try {
  filePath = JSON.parse(raw || "{}")?.tool_input?.file_path ?? "";
} catch {
  process.exit(0);
}

if (!filePath) process.exit(0);

// shell: true is required on Windows so the `npx.cmd` shim resolves.
spawnSync("npx", ["prettier", "--write", "--ignore-unknown", filePath], {
  stdio: "ignore",
  shell: process.platform === "win32",
});

// Never fail the tool call just because prettier is missing or unhappy.
process.exit(0);
