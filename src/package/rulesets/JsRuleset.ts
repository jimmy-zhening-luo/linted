import StylisticRules from "./rules/StylisticRules.js";
import JsRules from "./rules/JsRules.js";

const JsRuleset: IRules[] = [
  StylisticRules,
  JsRules,
];

export default JsRuleset;
