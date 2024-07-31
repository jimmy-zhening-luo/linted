import type RuleEntry from "./entries/index.js";
import Js from "./Js.js";
import DisableCompiler from "./entries/ts/DisableCompiler.js";
import DisableX from "./entries/ts/DisableX.js";
import EnableX from "./entries/ts/EnableX.js";
import Enable from "./entries/ts/Enable.js";

export default [
  ...Js,
  DisableCompiler,
  DisableX,
  EnableX,
  Enable,
] as const satisfies readonly RuleEntry[];
