---
argument-hint: [base-branch]
description: Review the current diff against a base branch
---

!`git diff $ARGUMENTS...HEAD`

Review the diff above as a senior engineer would:

1. Correctness — logic errors, edge cases, off-by-ones, null/undefined handling
2. Security — injection, auth gaps, secrets, unvalidated input
3. Maintainability — naming, duplication, complexity
4. Tests — is new behavior covered? Are the tests actually meaningful?

Every finding needs a concrete fix, not just a description of the problem.
