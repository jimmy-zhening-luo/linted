import { Strings, type RuleEntry } from "../index.js";

const {
  Id: { EnableX },
  Level: { ERROR, OFF },
  State: {
    ALLOW,
    BOTH,
  },
} = Strings;

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
