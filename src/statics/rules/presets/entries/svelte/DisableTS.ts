import type RuleEntry from "../entry.js";
import { OFF } from "../level.js";

export default [
  "disable-ts",
  {
    "no-unused-vars": OFF, // ESLint Core
    "@typescript-eslint/no-unused-vars": OFF, // TS Extension
  },
] as const satisfies RuleEntry;
