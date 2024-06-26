import Ruleset from "./base/Ruleset.js";
import TsRuleset from "./TsRuleset.js";
import JestRecommended from "./rules/jest/JestRecommended.js";

const JestRuleset = new Ruleset(
  "jest",
  ...TsRuleset
    .ruleset,
  JestRecommended,
);

export default JestRuleset;
