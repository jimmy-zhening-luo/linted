import type RuleEntry from "./entries/entry.js";
import Recommended from "./entries/mocha/Recommended.js";
import Enable from "./entries/html/Enable.js";

export default [
  Recommended,
  Enable,
] as const satisfies readonly RuleEntry[];
