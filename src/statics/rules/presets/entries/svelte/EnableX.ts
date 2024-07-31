import type RuleEntry from "../entry.js";
import { ERROR, OFF } from "../level.js";
import {
  ALLOW,
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
      { blockScopedFunctions: ALLOW },
    ], /* Same options as in JsEnable */
    "svelte/no-trailing-spaces": OFF, /* Only applies to HTML comments, which I don't intend to use: http://sveltejs.github.io/eslint-plugin-svelte/rules/no-trailing-spaces/ */
  },
] as const satisfies RuleEntry;
