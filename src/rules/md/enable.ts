import { enable, level } from "../../.strings.js";

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
