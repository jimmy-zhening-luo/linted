import type RuleEntry from "./entries/index.js";
import EnableX from "./entries/json/EnableX.js";
import Enable from "./entries/json/Enable.js";

export default [
  EnableX,
  Enable,
] as const satisfies readonly RuleEntry[];
