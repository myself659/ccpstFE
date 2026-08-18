#!/usr/bin/env bash
# Usage: ./scripts/deploy.sh <staging|production>
set -euo pipefail

TARGET="${1:?Usage: deploy.sh <staging|production>}"

echo "==> Building"
npm run build

echo "==> Deploying to $TARGET"
# Replace with your real deploy command, e.g.:
#   flyctl deploy --app "myapp-$TARGET"
#   aws ecs update-service --cluster ... --service ... --force-new-deployment
echo "(placeholder — wire up your actual deploy command here)"
