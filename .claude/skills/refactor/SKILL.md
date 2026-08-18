---
name: refactor
description: Suggests and applies refactors that improve structure without changing behavior. Use when the user asks to clean up, simplify, or restructure existing code.
---

Refactor the target scope with these constraints:

1. Behavior must not change — if you're not sure, add a test first that
   pins the current behavior, then refactor
2. One kind of change per commit-sized step (extract function, rename,
   move file) — don't mix them
3. Prefer deleting code over adding abstraction; only introduce a new
   abstraction if it's used in at least two places today
4. Run the test suite after each step, not just at the end
