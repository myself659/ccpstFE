#!/usr/bin/env node
// Usage: node scripts/seed-db.mjs
console.log(`==> Seeding database at ${process.env.DATABASE_URL ?? "$DATABASE_URL (unset)"}`);
// Replace with your real seed command, e.g.:
//   spawnSync("npx", ["prisma", "db", "seed"], { stdio: "inherit", shell: process.platform === "win32" })
//   spawnSync("psql", [process.env.DATABASE_URL, "-f", "seed.sql"], { stdio: "inherit" })
console.log("(placeholder — wire up your actual seed command here)");
