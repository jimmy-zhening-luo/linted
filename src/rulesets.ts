import JsRuleset from "./rulesets/JsRuleset.js";
import TsRuleset from "./rulesets/TsRuleset.js";
import SvelteRuleset from "./rulesets/SvelteRuleset.js";
import HtmlRuleset from "./rulesets/HtmlRuleset.js";
import JsonRuleset from "./rulesets/JsonRuleset.js";
import JsoncRuleset from "./rulesets/JsoncRuleset.js";
import YmlRuleset from "./rulesets/YmlRuleset.js";

const rulesets = {
  js: JsRuleset,
  ts: TsRuleset,
  svelte: SvelteRuleset,
  html: HtmlRuleset,
  json: JsonRuleset,
  jsonc: JsoncRuleset,
  yml: YmlRuleset,
} as const;

export default rulesets;
