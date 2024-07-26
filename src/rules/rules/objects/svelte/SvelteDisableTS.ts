import type { Boundary } from "@eslinted/core";
import { OFF } from "../level.js";

export default [
  "disable-ts",
  { "@typescript-eslint/no-unused-vars": OFF },
] as const satisfies Boundary.Input.Rules.Preset.Entry;
