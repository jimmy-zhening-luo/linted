import type RuleEntry from "../entry.js";
import { OFF } from "../level.js";

export default [
  "disable-ts",
  { "@typescript-eslint/no-unused-vars": OFF },
] as const satisfies RuleEntry;
