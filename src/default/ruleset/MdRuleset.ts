import Ruleset from "./base/Ruleset.js";
import MdEnable from "./rules/md/MdEnable.js";

const MdRuleset = new Ruleset(
  "md",
  MdEnable,
);

export default MdRuleset;
