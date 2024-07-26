import type RuleEntry from "./entries/entry.js";
import EnableStylistic from "./entries/js/EnableStylistic.js";
import Enable from "./entries/js/Enable.js";

export default [
  EnableStylistic,
  Enable,
] as const satisfies readonly RuleEntry[];
