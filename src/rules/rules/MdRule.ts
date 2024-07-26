import type { Boundary } from "@eslinted/core";
import MdEnable from "./objects/md/MdEnable.js";

export default [MdEnable] as const satisfies readonly Boundary.Input.Rules.Preset.Entry[];
