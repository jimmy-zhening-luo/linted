import { Ruleset } from "@eslinted/core";
import JsonRuleset from "./JsonRuleset.js";
import JsoncOverride from "./rules/jsonc/JsoncOverride.js";

const JsoncRuleset = new Ruleset(
  "jsonc",
  ...JsonRuleset.ruleset,
  JsoncOverride,
);

export default JsoncRuleset;
