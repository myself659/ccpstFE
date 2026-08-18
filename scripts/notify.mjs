#!/usr/bin/env node
// Referenced by the Notification hook in .claude/settings.json.
//
// The message is read from the CLAUDE_NOTIFICATION environment variable
// rather than from an argument: `"$CLAUDE_NOTIFICATION"` is not expanded by
// cmd.exe, so passing it positionally only works on POSIX shells.
//
// Replace the console.log with a real webhook call, e.g.:
//   await fetch(process.env.SLACK_WEBHOOK_URL, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ text: message }),
//   });

const message = process.env.CLAUDE_NOTIFICATION ?? process.argv[2] ?? "";

console.log(`[notify] ${message}`);
