import type RuleEntry from "./entries/entry.js";
import TsRuleset from "./Ts.js";
import DisableJS from "./entries/svelte/DisableJS.js";
import DisableTS from "./entries/svelte/DisableTS.js";
import DisableX from "./entries/svelte/DisableX.js";
import EnableX from "./entries/svelte/EnableX.js";
import Enable from "./entries/svelte/Enable.js";

export default [
  ...TsRuleset,
  DisableJS,
  DisableTS,
  DisableX,
  EnableX,
  Enable,
] as const satisfies readonly RuleEntry[];
