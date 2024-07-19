import Ruleset from "./base/Ruleset.js";
import TsRuleset from "./TsRuleset.js";
import SvelteDisableJS from "./rules/svelte/SvelteDisableJS.js";
import SvelteDisableTS from "./rules/svelte/SvelteDisableTS.js";
import SvelteDisableX from "./rules/svelte/SvelteDisableX.js";
import SvelteEnableX from "./rules/svelte/SvelteEnableX.js";
import SvelteEnable from "./rules/svelte/SvelteEnable.js";

const SvelteRuleset = new Ruleset(
  "svelte",
  ...TsRuleset.ruleset,
  SvelteDisableJS,
  SvelteDisableTS,
  SvelteDisableX,
  SvelteEnableX,
  SvelteEnable,
);

export default SvelteRuleset;
