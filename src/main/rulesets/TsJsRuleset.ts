import JsRuleset from "./JsRuleset.js";
import TsDisableCompilerRules from "./rules/jts/ts/TsDisableCompilerRules.js";
import TsDisableExtendRules from "./rules/jts/ts/TsDisableExtendRules.js";
import TsEnableExtendRules from "./rules/jts/ts/TsEnableExtendRules.js";
import TsEnableRules from "./rules/jts/ts/TsEnableRules.js";

const TsJsRuleset: IRules[] = [
  ...JsRuleset,
  TsDisableCompilerRules,
  TsDisableExtendRules,
  TsEnableExtendRules,
  TsEnableRules,
];

export default TsJsRuleset;
