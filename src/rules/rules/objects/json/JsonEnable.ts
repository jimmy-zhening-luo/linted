import type { Boundary } from "@eslinted/core";
import { ERROR, OFF } from "../level.js";
import {
} from "../state.js";
import { Enable } from "../id.js";

export default [
  Enable,
  {

    // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/#jsonc-rules
    "jsonc/auto": OFF,
    "jsonc/key-name-casing": OFF,
    "jsonc/no-bigint-literals": ERROR,
    "jsonc/no-binary-expression": ERROR,
    "jsonc/no-binary-numeric-literals": ERROR,
    "jsonc/no-comments": ERROR, // comments are NOT allowed in JSON
    "jsonc/no-escape-sequence-in-identifier": ERROR,
    "jsonc/no-hexadecimal-numeric-literals": ERROR,
    "jsonc/no-infinity": ERROR,
    "jsonc/no-nan": ERROR,
    "jsonc/no-number-props": ERROR,
    "jsonc/no-numeric-separators": ERROR,
    "jsonc/no-octal-numeric-literals": ERROR,
    "jsonc/no-parenthesized": ERROR,
    "jsonc/no-plus-sign": ERROR,
    "jsonc/no-regexp-literals": ERROR,
    "jsonc/no-template-literals": ERROR,
    "jsonc/no-undefined-value": ERROR,
    "jsonc/no-unicode-codepoint-escapes": ERROR,
    "jsonc/sort-array-values": OFF,
    "jsonc/sort-keys": OFF,
    "jsonc/valid-json-number": ERROR,
    "jsonc/vue-custom-block/no-parsing-error": ERROR,
  },
] as const satisfies Boundary.Input.Rules.Preset.Entry;
