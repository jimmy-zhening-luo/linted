import type { Input } from "@eslinted/core";
import TsRuleset from "./TsRule.js";
import SvelteDisableJS from "./objects/svelte/SvelteDisableJS.js";
import SvelteDisableTS from "./objects/svelte/SvelteDisableTS.js";
import SvelteDisableX from "./objects/svelte/SvelteDisableX.js";
import SvelteEnableX from "./objects/svelte/SvelteEnableX.js";
import SvelteEnable from "./objects/svelte/SvelteEnable.js";

export default [
  ...TsRuleset,
  SvelteDisableJS,
  SvelteDisableTS,
  SvelteDisableX,
  SvelteEnableX,
  SvelteEnable,
] as const satisfies readonly Input.Rules.Entry[];
