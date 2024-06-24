import StylisticEnable from "./rules/stylistic/StylisticEnable.js";
import JsEnable from "./rules/js/JsEnable.js";

const JsRuleset: IRules[] = [
  StylisticEnable,
  JsEnable,
];

export default JsRuleset;
