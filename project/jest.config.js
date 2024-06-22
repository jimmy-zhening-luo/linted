import TsRuleset from "./ts.config.js";
import JestEnable from "./jest/jest.enable.config.js";

const JestRuleset = [
  ...TsRuleset,
  JestEnable,
];

export default JestRuleset;
