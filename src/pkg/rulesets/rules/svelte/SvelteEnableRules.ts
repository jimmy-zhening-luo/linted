const E = "error";
const SvelteEnableRules: IRules = {
  "svelte/block-lang": [
    E,
    {
      enforceScriptPresent: true,
      enforceStylePresent: false,
      script: ["ts"],
    },
  ],
};

export default SvelteEnableRules;
