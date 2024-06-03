import YmlDisableConflict from "./rules/yml/YmlDisableConflict.js";
import YmlDisableExtend from "./rules/yml/YmlDisableExtend.js";
import YmlEnableExtend from "./rules/yml/YmlEnableExtend.js";
import YmlEnable from "./rules/yml/YmlEnable.js";

const YmlRuleset: IRules[] = [
  YmlDisableConflict,
  YmlDisableExtend,
  YmlEnableExtend,
  YmlEnable,
];

export default YmlRuleset;
