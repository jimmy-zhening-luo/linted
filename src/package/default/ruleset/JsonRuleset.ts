import JsoncRuleset from "./JsoncRuleset.js";
import JsonUnsupported from "./rules/json/JsonUnsupported.js";

const JsonRuleset: IRules[] = [
  ...JsoncRuleset,
  JsonUnsupported,
];

export default JsonRuleset;
