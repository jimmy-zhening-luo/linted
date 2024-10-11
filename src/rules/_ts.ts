import Js from "./_js.js";
import DisableCompiler from "./ts/disable_compiler.js";
import DisableX from "./ts/disable_x.js";
import EnableX from "./ts/enable_x.js";
import Enable from "./ts/_enable.js";

export default [
  ...Js,
  DisableCompiler,
  DisableX,
  EnableX,
  Enable,
] as const;
