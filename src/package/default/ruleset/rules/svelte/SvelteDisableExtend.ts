const OFF = "off";
const SvelteDisableExtend: IRules = {

  // DISABLE ESLint: Svelte extensions
  // http://sveltejs.github.io/eslint-plugin-svelte/rules/#extension-rules
  "no-inner-declarations": OFF, // also disabled in SvelteDisableConflictJs per Svelte base config

  // "no-trailing-spaces": OFF, // DEPRECATED
  // replaced by stylistic rule... unsure if both can be used:
  // "@stylistic/no-trailing-spaces": OFF,

};

export default SvelteDisableExtend;
