import StylisticRules from "./rules/jts/stylistic/StylisticRules.js";
import JsRules from "./rules/jts/js/JsRules.js";

const JsRuleset: IRules[] = [
  StylisticRules,
  JsRules,
];

export default JsRuleset;
