import Ruleset from "./base/Ruleset.js";
import YmlEnableExt from "./rules/yml/YmlEnableExt.js";
import YmlEnable from "./rules/yml/YmlEnable.js";

const YmlRuleset = new Ruleset(
  "yml",
  YmlEnableExt,
  YmlEnable,
);

export default YmlRuleset;
