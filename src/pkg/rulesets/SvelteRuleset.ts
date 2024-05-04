import SvelteDisableTsRules from "./rules/svelte/SvelteDisableTsRules.js";
import SvelteEnableRules from "./rules/svelte/SvelteEnableRules.js";

const SvelteRuleset: IRules[] = [
  SvelteDisableTsRules,
  SvelteEnableRules,
];

export default SvelteRuleset;
