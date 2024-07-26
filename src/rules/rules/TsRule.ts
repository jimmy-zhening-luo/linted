import type { Boundary } from "@eslinted/core";
import JsRuleset from "./JsRule.js";
import TsDisableCompiler from "./objects/ts/TsDisableCompiler.js";
import TsDisableX from "./objects/ts/TsDisableX.js";
import TsEnableX from "./objects/ts/TsEnableX.js";
import TsEnable from "./objects/ts/TsEnable.js";

export default [
  ...JsRuleset,
  TsDisableCompiler,
  TsDisableX,
  TsEnableX,
  TsEnable,
] as const satisfies readonly Boundary.Input.Rules.Preset.Entry[];
