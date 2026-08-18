#!/usr/bin/env node
// SessionStart hook (see .claude/settings.json).
// Replaces `echo 'Session started. Branch:' $(git branch --show-current)`,
// whose $(...) substitution does not work in cmd.exe on Windows.

import { execFileSync } from "node:child_process";

let branch = "(not a git repo)";
try {
  branch = execFileSync("git", ["branch", "--show-current"], {
    encoding: "utf8",
  }).trim();
} catch {
  /* leave the fallback */
}

console.log(`Session started. Branch: ${branch || "(detached HEAD)"}`);
