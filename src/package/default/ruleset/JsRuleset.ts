import StylisticRules from "./rules/stylistic/StylisticRules.js";
import JsRules from "./rules/js/JsRules.js";

const JsRuleset: IRules[] = [
  StylisticRules,
  JsRules,
];

export default JsRuleset;
