import type RuleEntry from "./index.js";
import TsRuleset from "./Ts.js";
import DisableJS from "./svelte/DisableJS.js";
import DisableTS from "./svelte/DisableTS.js";
import DisableX from "./svelte/DisableX.js";
import EnableX from "./svelte/EnableX.js";
import Enable from "./svelte/Enable.js";

export default [
  ...TsRuleset,
  DisableJS,
  DisableTS,
  DisableX,
  EnableX,
  Enable,
] as const satisfies readonly RuleEntry[];
