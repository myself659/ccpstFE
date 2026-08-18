#!/usr/bin/env node
// Cheap, deterministic pre-checks a model shouldn't have to eyeball by hand.
// The skill folds this output into its review instead of re-deriving it.
//
// Node rather than bash: the original used grep/awk pipelines, which are not
// available in a default Windows shell.

import { execFileSync } from "node:child_process";

const git = (args) =>
  execFileSync("git", args, { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });

const section = (title, lines) => {
  console.log(`## ${title}`);
  console.log(lines.length ? lines.join("\n") : "(none)");
  console.log();
};

let names, diff;
try {
  names = git(["diff", "--name-only"]);
  diff = git(["diff", "-U0"]);
} catch (err) {
  console.error(`git failed: ${err.message}`);
  process.exit(1);
}

const added = diff
  .split(/\r?\n/)
  .filter((l) => l.startsWith("+") && !l.startsWith("+++"));

section("Files changed", names.split(/\r?\n/).filter(Boolean));
section(
  "TODO/FIXME left in the diff",
  added.filter((l) => /\b(TODO|FIXME)\b/.test(l)),
);
section(
  "Lines over 120 chars in the diff",
  added.filter((l) => l.length > 121),
);
