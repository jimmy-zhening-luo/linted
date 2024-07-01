import Ruleset from "./base/Ruleset.js";
import JsonEnableExt from "./rules/json/JsonEnableExt.js";
import JsonEnable from "./rules/json/JsonEnable.js";

const JsonRuleset = new Ruleset(
  "json",
  JsonEnableExt,
  JsonEnable,
);

export default JsonRuleset;
