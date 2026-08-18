---
paths:
  - "**/*.test.ts"
  - "**/*.test.tsx"
---

# Testing rules

Loaded only when Claude is reading or writing a test file — kept out of
CLAUDE.md so it doesn't cost context on every other task.

- Use descriptive test names: "should [expected] when [condition]"
- Mock external services, never internal modules
- Clean up side effects in `afterEach`
- One assertion focus per test; prefer several small tests over one large one
