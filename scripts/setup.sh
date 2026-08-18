#!/usr/bin/env bash
set -euo pipefail
echo "==> Installing dependencies"
npm install
echo "==> Copying .env.example -> .env (if missing)"
[ -f .env ] || cp .env.example .env
echo "==> Done. Fill in real values in .env before running the app."
