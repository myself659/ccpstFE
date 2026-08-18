# my-plugin (local dev)

A plugin is a self-contained, distributable bundle of skills, agents,
hooks, and MCP/LSP servers — the unit you'd share across repos or publish
to a marketplace. This is different from `.claude/skills/` and
`.claude/agents/` at the project root, which are already auto-loaded for
this project alone and don't need any of this packaging.

**Correction from the original cheat sheet:** the manifest is
`.claude-plugin/plugin.json` inside the plugin's own directory — there's no
project-wide `plugins/manifest.json`. `name` is the only required field.

## Try it locally

```bash
claude --plugin-dir .claude/plugins/my-plugin
```

## Make it load automatically

Local dev plugins aren't auto-discovered from `.claude/plugins/` — that's
just this template's convention for where to build one before it's ready.
Two real paths to auto-loading, once it is:

- Move it under `.claude/skills/my-plugin/` (keeping the same
  `.claude-plugin/plugin.json`) — that's what Claude Code calls a
  "skills-directory plugin," and it loads with no install step
- Publish it to a marketplace and `claude plugin install` it like any other
  plugin

Full reference: https://code.claude.com/docs/en/plugins-reference
