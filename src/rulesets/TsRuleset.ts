import { Ruleset } from "@eslinted/core";
import JsRuleset from "./JsRuleset.js";
import TsDisableCompiler from "./rules/ts/TsDisableCompiler.js";
import TsDisableX from "./rules/ts/TsDisableX.js";
import TsEnableX from "./rules/ts/TsEnableX.js";
import TsEnable from "./rules/ts/TsEnable.js";

const TsRuleset = new Ruleset(
  "ts",
  ...JsRuleset.ruleset,
  TsDisableCompiler,
  TsDisableX,
  TsEnableX,
  TsEnable,
);

export default TsRuleset;
