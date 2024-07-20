import { Rule } from "@eslinted/core";
import { OFF } from "../state.js";
import { DisableX } from "../id.js";

const SvelteDisableX = new Rule(
  DisableX,
  {

    // http://sveltejs.github.io/eslint-plugin-svelte/rules/#extension-rules
    "no-inner-declarations": OFF, // also disabled in SvelteDisableConflictJs per Svelte base config

    // "@stylistic/no-trailing-spaces": OFF,

  },
);

export default SvelteDisableX;
