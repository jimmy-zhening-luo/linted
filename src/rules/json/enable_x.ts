import {
  enable_x,
  ERROR,
  OFF,
} from "../../_strings";

export default [
  enable_x,
  {
    // https://github.com/eslint/json?tab=readme-ov-file#rules
    "json/no-duplicate-keys": ERROR,
    "json/no-empty-keys": OFF,
  },
] as const;
