import Ruleset from "./base/Ruleset.js";
import JsRuleset from "./JsRuleset.js";
import TsDisableCompiler from "./rules/ts/TsDisableCompiler.js";
import TsDisableExt from "./rules/ts/TsDisableEXT.js";
import TsEnableExt from "./rules/ts/TsEnableEXT.js";
import TsEnable from "./rules/ts/TsEnable.js";

const TsRuleset = new Ruleset(
  "ts",
  ...JsRuleset.ruleset,
  TsDisableCompiler,
  TsDisableExt,
  TsEnableExt,
  TsEnable,
);

export default TsRuleset;
