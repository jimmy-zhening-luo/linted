import { enable, level } from "../../_strings";

const { ERROR, OFF } = level;

export default [
  enable,
  {
    // https://github.com/eslint/json?tab=readme-ov-file#rules
    "json/no-duplicate-keys": ERROR,
    "json/no-empty-keys": OFF,
  },
] as const;
