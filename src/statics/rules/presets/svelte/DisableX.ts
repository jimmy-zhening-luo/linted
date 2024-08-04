import { Strings, type RuleEntry } from "../index.js";

const { Id: { DisableX }, Level: { OFF } } = Strings;

// http://sveltejs.github.io/eslint-plugin-svelte/rules/#extension-rules
export default [DisableX, { "no-inner-declarations": OFF /* also disabled in SvelteDisableConflictJs per Svelte base config */ }] as const satisfies RuleEntry;
