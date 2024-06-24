import Rules from "../Rules.js";
import {
  ERROR,
  OFF,
} from "../State.js";

const SvelteEnableExt = new Rules(
  "enable-ext",
  {

    // ENABLE Svelte extensions of ESLint
    // http://sveltejs.github.io/eslint-plugin-svelte/rules/#extension-rules

    // Same options as in JsEnable
    "svelte/no-inner-declarations": [
      ERROR,
      "both",
    ],

    // Only applies to HTML comments, which I don't intend to use.
    // http://sveltejs.github.io/eslint-plugin-svelte/rules/no-trailing-spaces/
    "svelte/no-trailing-spaces": OFF,

  /*
  "svelte/no-trailing-spaces": [
    ERROR,
    {
      skipBlankLines: false,
      ignoreComments: false,
    },
  ],
  */
  },
);

export default SvelteEnableExt;
