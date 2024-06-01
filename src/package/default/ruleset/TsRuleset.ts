import JsRuleset from "./JsRuleset.js";
import TsDisableCompiler from "./rules/ts/TsDisableCompiler.js";
import TsDisableExtend from "./rules/ts/TsDisableExtend.js";
import TsEnableExtend from "./rules/ts/TsEnableExtend.js";
import TsEnable from "./rules/ts/TsEnable.js";

const TsRuleset: IRules[] = [
  ...JsRuleset,
  TsDisableCompiler,
  TsDisableExtend,
  TsEnableExtend,
  TsEnable,
];

export default TsRuleset;
