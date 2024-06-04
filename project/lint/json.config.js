import JsoncRuleset from "./jsonc.config.js";
import JsonUnsupported from "./json/json.unsupported.config.js";

const JsonRuleset = [
  ...JsoncRuleset,
  JsonUnsupported,
];

export default JsonRuleset;
