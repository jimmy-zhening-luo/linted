import JsoncRuleset from "./JsoncRuleset.js";
import JsonUnsupport from "./rules/json/JsonUnsupport.js";

const JsonRuleset = [
  ...JsoncRuleset,
  JsonUnsupport,
];

export default JsonRuleset;
