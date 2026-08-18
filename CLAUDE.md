# my-project

> Scaffolded from **ccpst** (Claude Code Project Structure Template). Replace
> every `[bracketed placeholder]` below, then delete this line.

## Stack

- [Language/runtime — e.g. TypeScript 5.x on Node 20]
- [Framework — e.g. Next.js 15 / Express / Fastify]
- [Database & ORM — e.g. Postgres 16 via Prisma]
- [Deployment target — e.g. Docker on Fly.io / ECS]

## Commands

- Install: `[npm install]`
- Dev server: `[npm run dev]`
- Build: `[npm run build]`
- Test (full suite): `[npm test]`
- Test (single file): `[npm test -- path/to/file.test.ts]`
- Lint: `[npm run lint]`

## Conventions

- [Export style — e.g. named exports only, no default exports]
- [File layout rule — e.g. one component per file, colocated styles]
- [Error-handling pattern — e.g. typed `Result<T, E>`, never throw across module boundaries]
- [Naming conventions for files, branches, DB tables, etc.]

## Testing

- [Where tests live relative to source — e.g. `foo.ts` -> `foo.test.ts` alongside it]
- [What must be covered before a PR merges]
- [Mocking policy — e.g. mock external services, never internal modules]

## Git workflow

- [Branch naming — e.g. `type/short-description`]
- [Commit format — e.g. Conventional Commits]
- [PR requirements — required reviews, CI checks, merge strategy]

## Security & compliance

- Secrets live in `.env` (see `.env.example`) and are read from environment
  variables — never hardcoded, never committed.
- [Auth requirements, regulated-data handling, dependency-approval process]

---

**Keep this file lean.** Claude Code loads it into every session as guidance,
not enforcement — it's read, not compiled. The current guidance is to target
well under ~200 lines; longer files still load in full but can reduce how
closely the instructions are followed. When something only matters for
certain files, or this file starts growing, split it into
`.claude/rules/<topic>.md` instead (optionally scoped to matching files with
`paths:` frontmatter). See `.claude/rules/` for two examples already split
out of this file. Run `/memory` to open and edit this file from inside a
session.
