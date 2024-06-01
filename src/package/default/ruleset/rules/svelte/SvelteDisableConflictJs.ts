const OFF = "off";
const SvelteDisableConflictJs: IRules = {

  // Recommended by Svelte base config:
  // http://github.com/sveltejs/eslint-plugin-svelte/tree/main/src/configs/flat
  "no-inner-declarations": OFF,
  "no-self-assign": OFF,
};

export default SvelteDisableConflictJs;
