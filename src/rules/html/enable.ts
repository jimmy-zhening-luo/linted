import { enable, level } from "../../.strings";

const { ERROR, OFF } = level;

export default [
  enable,
  {
    "@html-eslint/require-title": OFF,
    "@html-eslint/element-newline": [
      ERROR,
      {
        skip: ["head"],
      },
    ],
  },
] as const;
