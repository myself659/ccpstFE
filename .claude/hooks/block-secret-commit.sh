#!/usr/bin/env bash
# PreToolUse hook, matched on the Bash tool (see .claude/settings.json).
# Fires before every Bash call; here we only act when the command is a git
# commit, and block it if the staged diff looks like it contains a secret.
#
# There's no separate "pre-commit" hook event in Claude Code — this is what
# that pattern looks like in practice: a PreToolUse hook that inspects the
# command and only acts on the subset it cares about.

set -euo pipefail

input="$(cat)"
command="$(echo "$input" | jq -r '.tool_input.command // empty')"

if [[ "$command" != *"git commit"* ]]; then
  exit 0  # not a commit — nothing to check
fi

if git diff --cached | grep -Eiq '(api[_-]?key|secret|password|token)\s*[:=]\s*["'"'"'][A-Za-z0-9_\-]{12,}'; then
  echo "Blocked: staged diff looks like it contains a secret. Unstage it or move it to .env." >&2
  exit 2  # exit code 2 on PreToolUse blocks the tool call
fi

exit 0
