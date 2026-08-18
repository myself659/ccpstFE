#!/usr/bin/env bash
# Referenced by the Notification hook in .claude/settings.json.
# Replace with a real webhook call, e.g.:
#   curl -s -X POST "$SLACK_WEBHOOK_URL" -H 'Content-type: application/json' \
#     -d "{\"text\": \"$1\"}"
echo "[notify] $1"
