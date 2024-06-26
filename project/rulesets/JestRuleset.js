import TsRuleset from "./TsRuleset.js";
import JestEnable from "./rules/jest/JestEnable.js";

const JestRuleset = [
  ...TsRuleset,
  JestEnable,
];

export default JestRuleset;
