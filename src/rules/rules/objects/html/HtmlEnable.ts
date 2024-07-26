import type { Boundary } from "@eslinted/core";
import { OFF } from "../level.js";
import { Enable } from "../id.js";

export default [
  Enable,
  { "@html-eslint/require-title": OFF },
] as const satisfies Boundary.Input.Rules.Preset.Entry;
