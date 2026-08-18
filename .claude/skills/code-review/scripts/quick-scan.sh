#!/usr/bin/env bash
# Cheap, deterministic pre-checks a model shouldn't have to eyeball by hand.
# The skill folds this output into its review instead of re-deriving it.
set -euo pipefail

echo "## Files changed"
git diff --name-only

echo
echo "## TODO/FIXME left in the diff"
git diff -U0 | grep -E '^\+.*\b(TODO|FIXME)\b' || echo "(none)"

echo
echo "## Lines over 120 chars in the diff"
git diff -U0 | grep -E '^\+' | grep -v '^+++' | awk 'length($0) > 121' || echo "(none)"
