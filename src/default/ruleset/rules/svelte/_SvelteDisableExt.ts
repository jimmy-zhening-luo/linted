import Rule from "../Rule.js";
import { OFF } from "../State.js";
import { DisableEXT } from "../Id.js";

const SvelteDisableExt = new Rule(
  DisableEXT,
  {

    // http://sveltejs.github.io/eslint-plugin-svelte/rules/#extension-rules
    "no-inner-declarations": OFF, // also disabled in SvelteDisableConflictJs per Svelte base config

    // "@stylistic/no-trailing-spaces": OFF,

  },
);

export default SvelteDisableExt;
