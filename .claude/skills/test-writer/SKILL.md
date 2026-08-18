---
name: test-writer
description: Writes unit tests for a given file or function, following this project's testing conventions. Use when the user asks for tests to be added or a function is under-tested.
---

Write tests for the target file, following `.claude/rules/testing.md`.

1. Read the target file fully before writing anything
2. Cover: the happy path, each documented edge case, and at least one
   failure/error path
3. Match the existing test file's structure if one already exists for a
   sibling module — don't introduce a new testing style
4. Run the new tests before reporting done; don't hand back untested tests
