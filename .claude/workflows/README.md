# Dynamic workflows

Not in the original cheat sheet this template is based on — added because
it's the current, documented mechanism for the thing that infographic's
"Agent Team Patterns" section was gesturing at (fan-out, map-reduce,
pipelines across many subagents).

A workflow is a script the Claude Code runtime executes to spawn and
coordinate many subagents for a repeatable job — audit every file for the
same issue, migrate N files in parallel, research a topic across many
sources, and similar fan-out/fan-in jobs.

You don't hand-write these here. The normal flow is:

1. Describe the job in a session ("audit every route in src/api for missing
   auth checks")
2. Approve the plan Claude proposes
3. Save it for reuse from `/workflows` once it runs the way you want

Saved workflows land in this folder as `<name>.js` and become a `/<name>`
command. Nothing is pre-populated here on purpose — treat this as the spot
your own saved workflows will show up, not a template to hand-edit.
