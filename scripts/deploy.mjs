#!/usr/bin/env node
// Usage: node scripts/deploy.mjs <staging|production>
import { spawnSync } from "node:child_process";

const isWin = process.platform === "win32";
const target = process.argv[2];

if (!["staging", "production"].includes(target)) {
  console.error("Usage: node scripts/deploy.mjs <staging|production>");
  process.exit(1);
}

console.log("==> Building");
const build = spawnSync("npm", ["run", "build"], { stdio: "inherit", shell: isWin });
if (build.status !== 0) process.exit(build.status ?? 1);

console.log(`==> Deploying to ${target}`);
// Replace with your real deploy command, e.g.:
//   spawnSync("flyctl", ["deploy", "--app", `myapp-${target}`], {...})
//   spawnSync("aws", ["ecs", "update-service", "--force-new-deployment", ...], {...})
console.log("(placeholder — wire up your actual deploy command here)");
