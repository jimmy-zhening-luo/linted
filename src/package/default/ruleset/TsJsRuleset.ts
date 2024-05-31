import JsRuleset from "./JsRuleset.js";
import TsDisableCompilerRules from "./rules/ts/TsDisableCompilerRules.js";
import TsDisableExtendRules from "./rules/ts/TsDisableExtendRules.js";
import TsEnableExtendRules from "./rules/ts/TsEnableExtendRules.js";
import TsEnableRules from "./rules/ts/TsEnableRules.js";

const TsJsRuleset: IRules[] = [
  ...JsRuleset,
  TsDisableCompilerRules,
  TsDisableExtendRules,
  TsEnableExtendRules,
  TsEnableRules,
];

export default TsJsRuleset;
