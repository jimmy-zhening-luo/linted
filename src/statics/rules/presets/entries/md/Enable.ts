import { Strings, type RuleEntry } from "../index.js";

const { Id: { Enable }, Level: { ERROR, OFF } } = Strings;

export default [
  Enable,
  {

    // Rules 1-50 supported by this shit plugin: https://gitlab.com/pawelbbdrozd/eslint-plugin-markdownlint/-/tree/main/lib/rules?ref_type=heads
    // Rules 1-56 supported by this good plugin: https://github.com/DavidAnson/markdownlint/blob/main/doc/md001.md
    "markdownlint/md003": [
      ERROR,
      { style: "atx" },
    ],
    "markdownlint/md004": [
      ERROR,
      { style: "dash" },
    ],
    "markdownlint/md009": [
      ERROR,
      { br_spaces: 0 },
    ],
    "markdownlint/md010": [
      ERROR,
      { spaces_per_tab: 2 },
    ],
    "markdownlint/md013": OFF,
    "markdownlint/md029": [
      ERROR,
      { style: "one" },
    ],
    "markdownlint/md033": [
      ERROR,
      {
        allowed_elements: [
          "details",
          "summary",
        ],
      },
    ],
    "markdownlint/md035": [
      ERROR,
      { style: "---" },
    ],
    "markdownlint/md046": [
      ERROR,
      { style: "fenced" },
    ],
    "markdownlint/md048": [
      ERROR,
      { style: "backtick" },
    ],
    "markdownlint/md049": [
      ERROR,
      { style: "underscore" },
    ],
    "markdownlint/md050": [
      ERROR,
      { style: "underscore" },
    ],
  },
] as const satisfies RuleEntry;
