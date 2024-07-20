import { Ruleset } from "@eslinted/core";
import MdEnable from "./rules/md/MdEnable.js";

const MdRuleset = new Ruleset(
  "md",
  MdEnable,
);

export default MdRuleset;
