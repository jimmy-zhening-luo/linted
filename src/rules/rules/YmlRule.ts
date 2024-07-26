import type { Boundary } from "@eslinted/core";
import YmlEnableX from "./objects/yml/YmlEnableX.js";
import YmlEnable from "./objects/yml/YmlEnable.js";

export default [
  YmlEnableX,
  YmlEnable,
] as const satisfies readonly Boundary.Input.Rules.Preset.Entry[];
