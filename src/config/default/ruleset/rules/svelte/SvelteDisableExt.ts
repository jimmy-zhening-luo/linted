import Rule from "../Rule.js";
import { OFF } from "../State.js";

const SvelteDisableExt = new Rule(
  "disable-ext",
  {

    // DISABLE ESLint: Svelte extensions
    // http://sveltejs.github.io/eslint-plugin-svelte/rules/#extension-rules
    "no-inner-declarations": OFF, // also disabled in SvelteDisableConflictJs per Svelte base config

    // "@stylistic/no-trailing-spaces": OFF,

  },
);

export default SvelteDisableExt;
