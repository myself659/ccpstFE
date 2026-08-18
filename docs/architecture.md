# Architecture

> Fill this in as the real architecture emerges — don't let it drift from
> the code. Link from CLAUDE.md rather than duplicating any of this there.

## Overview

[One paragraph: what this system does and its main components.]

## Modules

| Module | Responsibility | Depends on |
|---|---|---|
| `src/services` | [ ] | [ ] |
| `src/components` | [ ] | [ ] |

## Data flow

[Diagram or description of how a request moves through the system.]

## Key decisions

Log decisions here as they're made, newest first — this is your ADR log in
miniature. Each entry: what was decided, what else was considered, why.

- [YYYY-MM-DD] [Decision] — [why, what alternatives were rejected]

## Coordinating multiple agents on this codebase

Not in the original cheat sheet, but worth a note: once `.claude/agents/`
holds more than one or two subagents, most teams end up reaching for one of
a few recurring shapes when they wire them together as an
[agent team](https://code.claude.com/docs/en/agent-teams) — these aren't
official Claude Code terms, just common ways people describe the pattern
they're using:

- **Dispatcher** — one agent breaks work up and hands pieces to others
- **Pipeline** — a fixed sequence, each agent's output feeding the next
- **Fan-out / fan-in** — the same task run in parallel across many inputs,
  merged at the end (this is what `.claude/workflows/` is for)
- **Parallel review** — several agents look at the same thing independently
  (e.g. `code-reviewer` + `security-auditor` on one diff) and their findings
  get reconciled

Worth naming here mainly because it's easy to reach for agent teams before
you need them — a single subagent invoked explicitly covers most cases; the
patterns above are for when you're coordinating several regularly enough
that leaving the shape implicit starts costing you.
