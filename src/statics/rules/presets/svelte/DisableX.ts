import { Strings, type RuleEntry } from "../index.js";

const { Id: { DisableX }, Level: { OFF } } = Strings;

export default [
  DisableX,
  {

    // http://sveltejs.github.io/eslint-plugin-svelte/rules/#extension-rules
    "no-inner-declarations": OFF, // also disabled in SvelteDisableConflictJs per Svelte base config

    // "@stylistic/no-trailing-spaces": OFF,

  },
] as const satisfies RuleEntry;
