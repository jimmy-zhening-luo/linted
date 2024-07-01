import Ruleset from "./base/Ruleset.js";
import JsonRuleset from "./JsonRuleset.js";
import JsoncOverride from "./rules/jsonc/JsoncOverride.js";

const JsoncRuleset = new Ruleset(
  "jsonc",
  ...JsonRuleset
    .ruleset,
  JsoncOverride,
);

export default JsoncRuleset;
