import JsRuleset from "./ruleset/JsRuleset.js";
import TsRuleset from "./ruleset/TsRuleset.js";
import SvelteRuleset from "./ruleset/SvelteRuleset.js";
import HtmlRuleset from "./ruleset/HtmlRuleset.js";
import JsonRuleset from "./ruleset/JsonRuleset.js";
import JsoncRuleset from "./ruleset/JsoncRuleset.js";
import YmlRuleset from "./ruleset/YmlRuleset.js";

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
