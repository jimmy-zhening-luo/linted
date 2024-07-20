import { Ruleset } from "@eslinted/core";
import StylisticEnable from "./rules/js/StylisticEnable.js";
import JsEnable from "./rules/js/JsEnable.js";

const JsRuleset = new Ruleset(
  "js",
  StylisticEnable,
  JsEnable,
);

export default JsRuleset;
