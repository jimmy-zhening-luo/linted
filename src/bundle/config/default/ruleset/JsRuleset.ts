import Ruleset from "./base/Ruleset.js";
import StylisticEnable from "./rules/stylistic/StylisticEnable.js";
import JsEnable from "./rules/js/JsEnable.js";

const JsRuleset = new Ruleset(
  "js",
  StylisticEnable,
  JsEnable,
);

export default JsRuleset;
