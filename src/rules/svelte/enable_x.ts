import { id, level, state } from "../_strings.js";

const
{ enable_x } = id,
{ ERROR, OFF } = level,
{ Allow, Both } = state;

// http://sveltejs.github.io/eslint-plugin-svelte/rules/#extension-rules
export default [enable_x, { "svelte/no-inner-declarations": [ERROR, Both, { blockScopedFunctions: Allow }] /* Same options as in JsEnable */, "svelte/no-trailing-spaces": OFF /* Only applies to HTML comments, which I don't intend to use: http://sveltejs.github.io/eslint-plugin-svelte/rules/no-trailing-spaces/ */ }] as const;
