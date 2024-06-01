import TsRuleset from "./TsRuleset.js";
import SvelteDisableConflictJs from "./rules/svelte/SvelteDisableConflictJs.js";
import SvelteDisableConflictTs from "./rules/svelte/SvelteDisableConflictTs.js";
import SvelteDisableExtend from "./rules/svelte/SvelteDisableExtend.js";
import SvelteEnableExtend from "./rules/svelte/SvelteEnableExtend.js";
import SvelteEnable from "./rules/svelte/SvelteEnable.js";

const SvelteRuleset: IRules[] = [
  ...TsRuleset,
  SvelteDisableConflictJs,
  SvelteDisableConflictTs,
  SvelteDisableExtend,
  SvelteEnableExtend,
  SvelteEnable,
];

export default SvelteRuleset;
