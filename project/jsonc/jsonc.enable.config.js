import {
  ERROR,
  OFF,
} from "../State.js";

const JsoncEnable = {

  // JSONC Only
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/#jsonc-rules
  "jsonc/auto": OFF,

  /*
  // OK I just don't think this rule is very useful
  "jsonc/key-name-casing": [
    ERROR,
    {
      camelCase: true,
      PascalCase: false,
      SCREAMING_SNAKE_CASE: false,
      "kebab-case": false,
      snake_case: true,
      ignores: [
        "^([a-z]+:)+[a-z]+$", // npm scripts, e.g. lint:src
        "^@{0,1}([a-z-]+\\/)*[a-z-]+$", // npm packages, e.g. @typescript-eslint/parser (slightly overpermissive, allows `-` at beginning & end of nodes)
        "^\\*$", // wildcard, e.g. *
        "^\\/$", // root, e.g. /
      ],
    },
  ],
  */
  "jsonc/key-name-casing": OFF,
  "jsonc/no-bigint-literals": ERROR,
  "jsonc/no-binary-expression": ERROR,
  "jsonc/no-binary-numeric-literals": ERROR,
  "jsonc/no-comments": OFF, // override in JSON
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
};

export default JsoncEnable;
