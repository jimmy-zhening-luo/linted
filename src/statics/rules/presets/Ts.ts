import type RuleEntry from "./index.js";
import Js from "./Js.js";
import DisableCompiler from "./ts/DisableCompiler.js";
import DisableX from "./ts/DisableX.js";
import EnableX from "./ts/EnableX.js";
import Enable from "./ts/Enable.js";

export default [
  ...Js,
  DisableCompiler,
  DisableX,
  EnableX,
  Enable,
] as const satisfies readonly RuleEntry[];
