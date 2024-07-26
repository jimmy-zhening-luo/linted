import type RuleEntry from "../entry.js";
import { OFF } from "../level.js";
import { Enable } from "../id.js";

export default [
  Enable,
  { "@html-eslint/require-title": OFF },
] as const satisfies RuleEntry;
