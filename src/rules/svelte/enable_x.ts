import { enable_x, level, state } from "../../.strings.js";

const
{ ERROR, OFF } = level,
{ Allow, Both } = state;

export default [
  enable_x,
  {
    // http://sveltejs.github.io/eslint-plugin-svelte/rules/#extension-rules
    "svelte/no-inner-declarations": [
      ERROR,
      Both,
      {
        blockScopedFunctions: Allow,
      },
    ] /* Same options as in JsEnable */,
    "svelte/no-trailing-spaces": OFF /* Only applies to HTML comments, which I don't intend to use: http://sveltejs.github.io/eslint-plugin-svelte/rules/no-trailing-spaces/ */,
  },
] as const;
