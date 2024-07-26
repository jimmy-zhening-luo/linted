import type { Boundary } from "@eslinted/core";
import { ERROR, OFF } from "../level.js";
import {
  ALWAYS_MULTILINE,
} from "../state.js";
import { Override } from "../id.js";

export default [
  Override,
  {

    // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/#jsonc-rules
    "jsonc/no-comments": OFF, // comments are allowed in JSONC
    "jsonc/comma-dangle": [
      ERROR,
      ALWAYS_MULTILINE, // trailing commas are allowed in JSONC
    ],
  },
] as const satisfies Boundary.Input.Rules.Preset.Entry;
