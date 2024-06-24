import Ruleset from "./base/Ruleset.js";
import TsRuleset from "./TsRuleset.js";

const JestRuleset = new Ruleset(
  "jest",
  ...TsRuleset
    .ruleset,
);

export default JestRuleset;
