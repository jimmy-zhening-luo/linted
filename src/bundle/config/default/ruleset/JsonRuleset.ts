import Ruleset from "./base/Ruleset.js";
import JsoncRuleset from "./JsoncRuleset.js";
import JsonUnsupport from "./rules/json/JsonUnsupport.js";

const JsonRuleset = new Ruleset(
  "json",
  ...JsoncRuleset
    .ruleset,
  JsonUnsupport,
);

export default JsonRuleset;
