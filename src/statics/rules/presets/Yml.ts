import type RuleEntry from "./index.js";
import EnableX from "./yml/EnableX.js";
import Enable from "./yml/Enable.js";

export default [
  EnableX,
  Enable,
] as const satisfies readonly RuleEntry[];
