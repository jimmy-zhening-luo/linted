import type { Boundary } from "@eslinted/core";
import StylisticEnable from "./objects/js/StylisticEnable.js";
import JsEnable from "./objects/js/JsEnable.js";

export default [
  StylisticEnable,
  JsEnable,
] as const satisfies readonly Boundary.Input.Rules.Preset.Entry[];
