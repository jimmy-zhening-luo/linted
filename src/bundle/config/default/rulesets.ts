import type { Scopes } from "./scopes.js";
import type Ruleset from "./ruleset/base/Ruleset.js";
import JsRuleset from "./ruleset/JsRuleset.js";
import TsRuleset from "./ruleset/TsRuleset.js";
import SvelteRuleset from "./ruleset/SvelteRuleset.js";
import HtmlRuleset from "./ruleset/HtmlRuleset.js";
import JsonRuleset from "./ruleset/JsonRuleset.js";
import JsoncRuleset from "./ruleset/JsoncRuleset.js";
import YmlRuleset from "./ruleset/YmlRuleset.js";

export default {
  js: JsRuleset,
  ts: TsRuleset,
  svelte: SvelteRuleset,
  html: HtmlRuleset,
  json: JsonRuleset,
  jsonc: JsoncRuleset,
  yml: YmlRuleset,
} satisfies { [S in Scopes]: Ruleset<S> };
