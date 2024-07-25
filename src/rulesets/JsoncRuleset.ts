import type { Input } from "@eslinted/core";
import JsonRuleset from "./JsonRuleset.js";
import JsoncOverride from "./rules/jsonc/JsoncOverride.js";

export default [
  ...JsonRuleset,
  JsoncOverride,
] as const satisfies readonly Input.RuleRecord[];
