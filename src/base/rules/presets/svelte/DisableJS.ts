import { Strings, type RuleEntry } from "../index.js";

const { Level: { OFF } } = Strings;

// Recommended by Svelte base config:
// http://github.com/sveltejs/eslint-plugin-svelte/tree/main/src/configs/flat
export default ["disable-js", { "no-inner-declarations": OFF /* ESLint Core */, "no-self-assign": OFF /* ESLint Core */ }] as const satisfies RuleEntry;
