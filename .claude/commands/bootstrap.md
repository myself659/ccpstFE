---
argument-hint: <module-name>
description: Scaffold a new module following this project's conventions
---

Scaffold a new module named **$ARGUMENTS**.

Look at an existing module under `src/` first and match its shape:

1. Create the module directory and entry file
2. Add the matching test file (see the testing rule in `.claude/rules/testing.md`)
3. Wire it up wherever modules get registered (check `src/services` or the
   relevant index file for the pattern)
4. Don't invent a new file layout — copy the closest existing example
