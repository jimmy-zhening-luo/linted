import type { Boundary } from "@eslinted/core";
import { OFF } from "../level.js";

export default [
  "disable-js",
  {

    // Recommended by Svelte base config:
    // http://github.com/sveltejs/eslint-plugin-svelte/tree/main/src/configs/flat
    "no-inner-declarations": OFF, // ESLint Core
    "no-self-assign": OFF, // ESLint Core
  },
] as const satisfies Boundary.Input.Rules.Preset.Entry;
