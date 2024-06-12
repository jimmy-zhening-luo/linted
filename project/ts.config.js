import JsRuleset from "./js.config.js";
import TsDisableCompile from "./ts/ts.disable.compile.config.js";
import TsDisableExtend from "./ts/ts.disable.extend.config.js";
import TsEnableExtend from "./ts/ts.enable.extend.config.js";
import TsEnable from "./ts/ts.enable.config.js";

const TsRuleset = [
  ...JsRuleset,
  TsDisableCompile,
  TsDisableExtend,
  TsEnableExtend,
  TsEnable,
];

export default TsRuleset;
