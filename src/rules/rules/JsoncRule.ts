import type { Input } from "@eslinted/core";
import JsonRuleset from "./JsonRule.js";
import JsoncOverride from "./objects/jsonc/JsoncOverride.js";

export default [
  ...JsonRuleset,
  JsoncOverride,
] as const satisfies readonly Input.Rules.Entry[];
