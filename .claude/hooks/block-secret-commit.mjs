#!/usr/bin/env node
// PreToolUse hook, matched on the Bash tool (see .claude/settings.json).
// Fires before every Bash call; here we only act when the command is a git
// commit, and block it if the staged diff looks like it contains a secret.
//
// There's no separate "pre-commit" hook event in Claude Code — this is what
// that pattern looks like in practice: a PreToolUse hook that inspects the
// command and only acts on the subset it cares about.
//
// Written in Node (not bash) so it runs identically on Windows, macOS and
// Linux, and so it needs no `jq` on PATH to parse the hook payload.

import { execFileSync } from "node:child_process";

const SECRET_RE =
  /(api[_-]?key|secret|password|token)\s*[:=]\s*["'][A-Za-z0-9_-]{12,}/i;

const raw = await new Promise((resolve) => {
  let buf = "";
  process.stdin.setEncoding("utf8");
  process.stdin.on("data", (chunk) => (buf += chunk));
  process.stdin.on("end", () => resolve(buf));
  process.stdin.on("error", () => resolve(""));
});

let command = "";
try {
  command = JSON.parse(raw || "{}")?.tool_input?.command ?? "";
} catch {
  process.exit(0); // unparseable payload — don't block the user
}

if (!command.includes("git commit")) {
  process.exit(0); // not a commit — nothing to check
}

let staged = "";
try {
  staged = execFileSync("git", ["diff", "--cached"], {
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
} catch {
  process.exit(0); // not a repo / git unavailable — fail open
}

if (SECRET_RE.test(staged)) {
  console.error(
    "Blocked: staged diff looks like it contains a secret. Unstage it or move it to .env.",
  );
  process.exit(2); // exit code 2 on PreToolUse blocks the tool call
}

process.exit(0);
