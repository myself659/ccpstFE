# ccpst — Claude Code Project Structure Template

A starter layout for a Claude Code–enabled project: CLAUDE.md, skills,
subagents, hooks, MCP, and a plugin skeleton, plus a generic `src/` so the
whole thing runs as a real (if empty) project. Copy this directory, rename
it, delete what you don't need.

Cross-checked against the current Claude Code docs
(https://code.claude.com/docs/en/claude-directory) rather than built from
the reference image alone — see **Corrections** below for what changed.

## Layout

```
CLAUDE.md              Project memory, loaded every session
.mcp.json              Team-shared MCP servers (project root, not .claude/)
.env.example            Copy to .env — never commit .env itself
.worktreeinclude        Gitignored files to copy into new git worktrees
.claude/
  settings.json          Permissions + hooks, committed
  settings.local.json     Your personal overrides, gitignored
  rules/                  Topic-scoped instructions split out of CLAUDE.md
  commands/               Flat /name prompts (still supported)
  skills/<name>/SKILL.md  Preferred mechanism going forward — same /name
                          invocation, plus you can bundle scripts/refs/assets
  agents/*.md             Subagents — own context window, own tool access
  hooks/                  Scripts referenced from settings.json
  workflows/              Where your saved dynamic workflows land
  plugins/my-plugin/      A plugin skeleton, for when you want to package
                          skills/agents/hooks as one distributable unit
src/, tests/, docs/, scripts/    Generic example app — swap for your stack
```

## Getting started

1. `npm i -g @anthropic-ai/claude-code`
2. `cd` into your copy of this template, run `claude`
3. Fill in the `[placeholders]` in `CLAUDE.md`
4. Copy `.env.example` → `.env`
5. Adjust `.claude/commands/` and `.claude/skills/` to match what you
   actually need — the four of each here are illustrative, not required
6. `/init` any time you want Claude to regenerate CLAUDE.md from the
   codebase as it exists then

## Corrections from the reference image

If you've seen the "Claude Code Project Structure" cheat sheet this is
based on, a few things there don't match the current product:

- **Subagents are `.md`, not `.yml`.** `.claude/agents/*.md`, YAML
  frontmatter (`name`, `description`, `tools`) plus a system prompt as the
  body — same shape as a skill, not a separate config format.
- **Plugin manifests are `.claude-plugin/plugin.json`** inside each
  plugin's own directory, not a project-wide `plugins/manifest.json`.
  See `.claude/plugins/my-plugin/README.md`.
- **There's no separate "PreCommit" hook event.** The real event list is
  PreToolUse, PostToolUse, SessionStart, SessionEnd, Notification, and
  others — a "gate before commit" is a `PreToolUse` hook matched on the
  Bash tool that checks whether the command is a `git commit`. See
  `.claude/hooks/block-secret-commit.sh`.
- **CLAUDE.md guidance is ~200 lines now, not 500.** Longer files still
  load, but adherence can drop. `.claude/rules/` (optionally scoped to
  matching files via `paths:` frontmatter) is the current answer to
  "this file is getting long" — two examples are already split out here.
- Two mechanisms that didn't exist when that image was made and are worth
  knowing about: `.claude/rules/` (above) and `.claude/workflows/` —
  scripts that fan a job out across many subagents, normally authored by
  asking Claude for one and saving it via `/workflows` rather than
  hand-written.

Everything else — MCP config shape, skill/command frontmatter, hook
config format, agent-team terminology — matched and is reproduced as-is.

## Adapting the stack

`src/`, `package.json`, and `tsconfig.json` here are a generic
TypeScript/Node example so the template is runnable out of the box — the
part of this template that's specific to a stack is also the smallest part
of it. Swap it for whatever you're actually building:

- **Rust:** delete `src/`, `package.json`, `tsconfig.json`; add
  `Cargo.toml` + `src/main.rs`; update the commands in `CLAUDE.md` and
  `scripts/`. Everything under `.claude/` is stack-agnostic as-is.
- **Python, Go, etc.:** same idea — only the app skeleton and the commands
  referenced in `CLAUDE.md`/`scripts/` are TS-specific.

## Reference

- Explore the full `.claude/` file reference:
  https://code.claude.com/docs/en/claude-directory
- Hooks: https://code.claude.com/docs/en/hooks
- Skills: https://code.claude.com/docs/en/skills
- Subagents: https://code.claude.com/docs/en/sub-agents
- Plugins: https://code.claude.com/docs/en/plugins-reference
- Agent teams: https://code.claude.com/docs/en/agent-teams
