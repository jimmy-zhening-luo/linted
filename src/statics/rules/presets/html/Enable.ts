import { Strings, type RuleEntry } from "../index.js";

const { Id: { Enable }, Level: { ERROR, OFF } } = Strings;

export default [
  Enable,
  {
    "@html-eslint/require-title": OFF,
    "@html-eslint/element-newline": [ERROR, { skip: ["head"] }],
  },
] as const satisfies RuleEntry;
