import Js from "./js.js";
import DisableCompiler from "./ts/disable.js";
import DisableX from "./ts/disable_x.js";
import EnableX from "./ts/enable_x.js";
import Enable from "./ts/enable.js";

export default [
  ...Js,
  DisableCompiler,
  DisableX,
  EnableX,
  Enable,
] as const;
