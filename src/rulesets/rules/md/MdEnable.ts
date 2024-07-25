import type { Input } from "@eslinted/core";
import {
  ERROR,
  OFF,
} from "../state.js";
import { Enable } from "../id.js";

export default [
  Enable,
  {

    // https://github.com/DavidAnson/markdownlint/blob/main/doc/md001.md
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
      { style: "___" },
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
    "markdownlint/md055": [
      ERROR,
      { style: "leading_and_trailing" },
    ],
  },
] as const satisfies Input.RuleRecord;
