import JsoncRuleset from "./JsoncRuleset.js";
import JsonEnable from "./rules/json/JsonEnable.js";

const JsonRuleset: IRules[] = [
  ...JsoncRuleset,
  JsonEnable,
];

export default JsonRuleset;
