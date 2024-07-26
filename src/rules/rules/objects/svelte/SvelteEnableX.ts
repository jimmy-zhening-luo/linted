import type { Boundary } from "@eslinted/core";
import { ERROR, OFF } from "../level.js";
import {
  BOTH,
} from "../state.js";
import { EnableX } from "../id.js";

export default [
  EnableX,
  {

    // http://sveltejs.github.io/eslint-plugin-svelte/rules/#extension-rules
    "svelte/no-inner-declarations": [
      ERROR,
      BOTH,
    ], /* Same options as in JsEnable */
    "svelte/no-trailing-spaces": OFF, /* Only applies to HTML comments, which I don't intend to use: http://sveltejs.github.io/eslint-plugin-svelte/rules/no-trailing-spaces/ */
  },
] as const satisfies Boundary.Input.Rules.Preset.Entry;
