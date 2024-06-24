import JsRuleset from "./js.config.js";
import TsDisableCompile from "./ts/ts.disable.compile.config.js";
import TsDisableExt from "./ts/ts.disable.ext.config.js";
import TsEnableExt from "./ts/ts.enable.ext.config.js";
import TsEnable from "./ts/ts.enable.config.js";

const TsRuleset = [
  ...JsRuleset,
  TsDisableCompile,
  TsDisableExt,
  TsEnableExt,
  TsEnable,
];

export default TsRuleset;
