import type RuleEntry from "../entry.js";
import { Enable } from "../id.js";

export default [
  Enable,
  {},
] as const satisfies RuleEntry;
