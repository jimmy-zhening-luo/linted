import JsRuleset from "./JsRuleset.js";
import TsDisableCompile from "./rules/ts/TsDisableCompiler.js";
import TsDisableExt from "./rules/ts/TsDisableExt.js";
import TsEnableExt from "./rules/ts/TsEnableExt.js";
import TsEnable from "./rules/ts/TsEnable.js";

const TsRuleset = [
  ...JsRuleset,
  TsDisableCompile,
  TsDisableExt,
  TsEnableExt,
  TsEnable,
];

export default TsRuleset;
