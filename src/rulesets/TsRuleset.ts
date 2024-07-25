import type { Input } from "@eslinted/core";
import JsRuleset from "./JsRuleset.js";
import TsDisableCompiler from "./rules/ts/TsDisableCompiler.js";
import TsDisableX from "./rules/ts/TsDisableX.js";
import TsEnableX from "./rules/ts/TsEnableX.js";
import TsEnable from "./rules/ts/TsEnable.js";

export default [
  ...JsRuleset,
  TsDisableCompiler,
  TsDisableX,
  TsEnableX,
  TsEnable,
] as const satisfies readonly Input.RuleRecord[];
