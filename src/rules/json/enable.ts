import { enable, level } from "../../_strings";

const { ERROR } = level;

export default [
  enable,
  {
    // https://github.com/eslint/json?tab=readme-ov-file#rules
    "json/no-duplicate-keys": ERROR,
    "json/no-empty-keys": ERROR,
    "json/no-unsafe-values": ERROR,
  },
] as const;
