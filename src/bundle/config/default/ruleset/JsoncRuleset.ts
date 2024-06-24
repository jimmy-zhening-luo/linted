import Ruleset from "./base/Ruleset.js";
import JsoncEnableExt from "./rules/jsonc/JsoncEnableExt.js";
import JsoncEnable from "./rules/jsonc/JsoncEnable.js";

const JsoncRuleset = new Ruleset(
  "jsonc",
  JsoncEnableExt,
  JsoncEnable,
);

export default JsoncRuleset;
