import { id, level } from "../_strings.js";

const
{ enable } = id,
{ ERROR } = level;

export default [
  enable,
  {
    // Rules 1-50 supported by this shit plugin: https://gitlab.com/pawelbbdrozd/eslint-plugin-markdownlint/-/tree/main/lib/rules?ref_type=heads
    // Rules 1-56 supported by this good plugin: https://github.com/DavidAnson/markdownlint/blob/main/doc/md001.md
    "markdownlint/md003": [ERROR, { style: "atx" }],
  },
] as const;
