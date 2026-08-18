---
name: code-review
description: Reviews code changes for correctness, security, and maintainability. Use when the user asks for a review of a diff, PR, or recent changes.
---

Review the current changes (`git diff` if nothing more specific is given).

Work through `references/checklist.md` in this skill's directory — read it
before writing findings, don't rely on memory of what it says.

For anything programmatically checkable (unused deps, obvious lint issues),
run `scripts/quick-scan.sh` first and fold its output into the review instead
of re-deriving it by eye.

Report findings grouped by severity (blocking / should-fix / nit), each with
a concrete suggested fix, not just a description of the problem.
