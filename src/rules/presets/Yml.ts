import type RuleEntry from "./entries/entry.js";
import EnableX from "./entries/yml/EnableX.js";
import Enable from "./entries/yml/Enable.js";

export default [
  EnableX,
  Enable,
] as const satisfies readonly RuleEntry[];
