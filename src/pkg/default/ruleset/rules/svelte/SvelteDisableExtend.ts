const [OFF] = ["off"] as const;
const SvelteDisableExtend: IRules = {

  // DISABLE ESLint: Svelte extensions
  // http://sveltejs.github.io/eslint-plugin-svelte/rules/#extension-rules
  "no-inner-declarations": OFF, // also disabled in SvelteDisableConflictJs per Svelte base config

  // "@stylistic/no-trailing-spaces": OFF,

};

export default SvelteDisableExtend;
