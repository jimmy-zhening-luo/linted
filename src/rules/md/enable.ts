import { enable, level } from "../_strings.js";

const { ERROR } = level;

export default [
  enable,
  {
    "markdownlint/md003": [
      ERROR,
      {
        style: "atx",
      },
    ],
  },
] as const;
