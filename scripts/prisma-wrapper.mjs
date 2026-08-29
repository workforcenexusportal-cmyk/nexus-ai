import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const prisma = require("prisma");
const run = prisma.run ?? prisma.default?.run;
if (typeof run !== "function") throw new Error("Prisma CLI runner unavailable; use the Prisma CLI from the official package installation.");
await run(process.argv.slice(2));
