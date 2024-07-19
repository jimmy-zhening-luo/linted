import Ruleset from "./base/Ruleset.js";
import TsRuleset from "./TsRuleset.js";
import SvelteDisableJS from "./rules/svelte/SvelteDisableJS.js";
import SvelteDisableTS from "./rules/svelte/SvelteDisableTS.js";
import SvelteDisableExt from "./rules/svelte/SvelteDisableEXT.js";
import SvelteEnableExt from "./rules/svelte/SvelteEnableEXT.js";
import SvelteEnable from "./rules/svelte/SvelteEnable.js";

const SvelteRuleset = new Ruleset(
  "svelte",
  ...TsRuleset.ruleset,
  SvelteDisableJS,
  SvelteDisableTS,
  SvelteDisableExt,
  SvelteEnableExt,
  SvelteEnable,
);

export default SvelteRuleset;
