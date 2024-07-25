import type { Input } from "@eslinted/core";
import { OFF } from "../state.js";

export default [
  "disable-js",
  {

    // Recommended by Svelte base config:
    // http://github.com/sveltejs/eslint-plugin-svelte/tree/main/src/configs/flat
    "no-inner-declarations": OFF, // ESLint Core
    "no-self-assign": OFF, // ESLint Core
  },
] as const satisfies Input.RuleRecord;
