import { id, level } from "../_strings.js";

const
{ disable_x } = id,
{ OFF } = level;

// http://sveltejs.github.io/eslint-plugin-svelte/rules/#extension-rules
export default [disable_x, { "no-inner-declarations": OFF /* also disabled in SvelteDisableConflictJs per Svelte base config */ }] as const;
