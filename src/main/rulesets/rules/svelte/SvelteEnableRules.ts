const ERROR = "error";
const SvelteEnableRules: IRules = {
  "svelte/block-lang": [
    ERROR,
    {
      enforceScriptPresent: true,
      enforceStylePresent: false,
      script: ["ts"],
    },
  ],
};

export default SvelteEnableRules;
