---
argument-hint: <staging|production>
description: Build and deploy to the given environment
---

Deploy to **$ARGUMENTS**.

1. Run the full test suite; stop here if anything fails
2. Run the build
3. Run `node scripts/deploy.mjs $ARGUMENTS` (or `npm run deploy -- $ARGUMENTS`)
4. Confirm the deploy succeeded (check the health endpoint / deploy log)
5. Report what shipped, in one or two lines
