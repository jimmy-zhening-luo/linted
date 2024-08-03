import type RuleEntry from "./index.js";
import EnableX from "./json/EnableX.js";
import Enable from "./json/Enable.js";

export default [
  EnableX,
  Enable,
] as const satisfies readonly RuleEntry[];
