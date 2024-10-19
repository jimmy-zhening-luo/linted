import { disable, OFF } from "../../_strings";

export default [
  disable,
  {
    // http://sveltejs.github.io/eslint-plugin-svelte/rules/#extension-rules
    "no-inner-declarations": OFF /* also disabled in SvelteDisableConflictJs per Svelte base config */,
  },
] as const;
