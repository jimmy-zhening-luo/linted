import jest from "eslint-plugin-jest";
import Rule from "../Rule.js";

const JestRecommended = new Rule(
  "enable",
  jest
    .configs["flat/recommended"]
    .rules,
);

export default JestRecommended;
