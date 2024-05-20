import TsJsRuleset from "./TsJsRuleset.js";
import SvelteDisableTsRules from "./rules/svelte/SvelteDisableTsRules.js";
import SvelteEnableRules from "./rules/svelte/SvelteEnableRules.js";

const SvelteTsJsRuleset: IRules[] = [
  ...TsJsRuleset,
  SvelteDisableTsRules,
  SvelteEnableRules,
];

export default SvelteTsJsRuleset;
