import Ruleset from "./base/Ruleset.js";
import TsRuleset from "./TsRuleset.js";
import SvelteDisableConflictJs from "./rules/svelte/SvelteDisableConflictJs.js";
import SvelteDisableConflictTs from "./rules/svelte/SvelteDisableConflictTs.js";
import SvelteDisableExt from "./rules/svelte/SvelteDisableExt.js";
import SvelteEnableExt from "./rules/svelte/SvelteEnableExt.js";
import SvelteEnable from "./rules/svelte/SvelteEnable.js";

const SvelteRuleset = new Ruleset(
  "svelte",
  ...TsRuleset
    .ruleset,
  SvelteDisableConflictJs,
  SvelteDisableConflictTs,
  SvelteDisableExt,
  SvelteEnableExt,
  SvelteEnable,
);

export default SvelteRuleset;
