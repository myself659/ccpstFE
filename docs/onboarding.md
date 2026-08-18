# Onboarding

## First hour

1. `npm install`
2. Copy `.env.example` to `.env` and fill in real values
3. `npm run dev` — confirm it starts
4. `npm test` — confirm the suite passes on a clean checkout
5. Read `CLAUDE.md` and skim `.claude/rules/` — that's the project's
   working agreement, for you and for Claude

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
