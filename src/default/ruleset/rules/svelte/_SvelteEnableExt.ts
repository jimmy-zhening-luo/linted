import Rule from "../Rule.js";
import {
  ERROR,
  OFF,
  BOTH,
} from "../State.js";
import { EnableEXT } from "../Id.js";

const SvelteEnableExt = new Rule(
  EnableEXT,
  {

    // http://sveltejs.github.io/eslint-plugin-svelte/rules/#extension-rules
    "svelte/no-inner-declarations": [
      ERROR,
      BOTH,
    ], /* Same options as in JsEnable */
    "svelte/no-trailing-spaces": OFF, /* Only applies to HTML comments, which I don't intend to use: http://sveltejs.github.io/eslint-plugin-svelte/rules/no-trailing-spaces/ */
  },
);

export default SvelteEnableExt;
