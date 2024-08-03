import type RuleEntry from "./index.js";
import Recommended from "./mocha/Recommended.js";
import Enable from "./html/Enable.js";

export default [
  Recommended,
  Enable,
] as const satisfies readonly RuleEntry[];
