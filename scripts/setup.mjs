#!/usr/bin/env node
// Usage: node scripts/setup.mjs
import { copyFileSync, existsSync } from "node:fs";
import { spawnSync } from "node:child_process";

const isWin = process.platform === "win32";

console.log("==> Installing dependencies");
const install = spawnSync("npm", ["install"], { stdio: "inherit", shell: isWin });
if (install.status !== 0) process.exit(install.status ?? 1);

console.log("==> Copying .env.example -> .env (if missing)");
if (!existsSync(".env")) copyFileSync(".env.example", ".env");

console.log("==> Done. Fill in real values in .env before running the app.");
