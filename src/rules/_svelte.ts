import TsRuleset from "./_ts.js";
import DisableJS from "./svelte/disable_js.js";
import DisableTS from "./svelte/disable_ts.js";
import DisableX from "./svelte/disable_x.js";
import EnableX from "./svelte/enable_x.js";
import Enable from "./svelte/_enable.js";

export default [
  ...TsRuleset,
  DisableJS,
  DisableTS,
  DisableX,
  EnableX,
  Enable,
] as const;
