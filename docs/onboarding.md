# Onboarding

## First hour

1. `npm install`
2. Copy `.env.example` to `.env` and fill in real values
   (or just run `npm run setup`, which does both)
3. `npm run dev` — confirm it starts
4. `npm test` — confirm the suite passes on a clean checkout
5. Read `CLAUDE.md` and skim `.claude/rules/` — that's the project's
   working agreement, for you and for Claude

## Windows

Everything here runs on Windows without WSL, Git Bash, or `jq`:

- Hooks and helper scripts are `.mjs`, invoked as `node ./path/to/script.mjs`
  from `.claude/settings.json` — no shebang or `chmod +x` involved
- The Notification hook reads `CLAUDE_NOTIFICATION` from the environment
  rather than as an argument, because `cmd.exe` doesn't expand `$VAR`
- `.gitattributes` normalizes line endings to LF in the repo, so Windows
  checkouts don't produce whole-file diffs for teammates on macOS/Linux
- Node 18+ is the only prerequisite (`node -v` to check)

If you add your own hook or script, write it in Node too — a `.sh` file will
fail on a native Windows shell.

## Working with Claude Code in this repo

- `/review`, `/deploy`, `/test-all`, `/bootstrap` are the project's slash
  commands — see `.claude/commands/`
- Skills in `.claude/skills/` activate automatically when the task matches;
  you don't need to remember to invoke them
- `/init` regenerates a starting `CLAUDE.md` by reading the codebase, if
  you ever need to rebuild it from scratch
- Long session getting sluggish or the context meter climbing? `/compact`
  summarizes and keeps going; `/clear` starts clean when you're switching
  tasks entirely. Claude Code also auto-compacts before you hit the hard
  limit, so neither is usually urgent — they're for when you want to do it
  on your own terms
- `/cost` shows what a session has spent; `--resume` replays a past session
