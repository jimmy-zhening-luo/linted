import JsoncEnableExtend from "./rules/jsonc/JsoncEnableExtend.js";
import JsoncEnable from "./rules/jsonc/JsoncEnable.js";

const JsoncRuleset: IRules[] = [
  JsoncEnableExtend,
  JsoncEnable,
];

export default JsoncRuleset;
