import type { Input } from "@eslinted/core";
import TsRuleset from "./TsRuleset.js";
import SvelteDisableJS from "./rules/svelte/SvelteDisableJS.js";
import SvelteDisableTS from "./rules/svelte/SvelteDisableTS.js";
import SvelteDisableX from "./rules/svelte/SvelteDisableX.js";
import SvelteEnableX from "./rules/svelte/SvelteEnableX.js";
import SvelteEnable from "./rules/svelte/SvelteEnable.js";

export default [
  ...TsRuleset,
  SvelteDisableJS,
  SvelteDisableTS,
  SvelteDisableX,
  SvelteEnableX,
  SvelteEnable,
] as const satisfies readonly Input.RuleRecord[];
