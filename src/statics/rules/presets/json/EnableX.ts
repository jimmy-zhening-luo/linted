import { Strings, type RuleEntry } from "../index.js";

const {
  Id: { EnableX },
  Level: { ERROR },
  State: {
    NEVER,
    ALWAYS,
    CONSISTENT,
    STRICT,
    LAST,
    DOUBLE,
  },
} = Strings;

export default [
  EnableX,
  {
    // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/#extension-rules
    "jsonc/array-bracket-newline": [ERROR, CONSISTENT],
    "jsonc/array-bracket-spacing": [ERROR, NEVER, { singleValue: false, objectsInArrays: false, arraysInArrays: false }],
    "jsonc/array-element-newline": [ERROR, ALWAYS],
    "jsonc/comma-dangle": [ERROR, NEVER], /* // trailing commas are NOT allowed in JSON */
    "jsonc/comma-style": [ERROR, LAST],
    "jsonc/indent": [ERROR, 2],
    "jsonc/key-spacing": [ERROR, { beforeColon: false, afterColon: true, mode: STRICT }],
    "jsonc/no-dupe-keys": ERROR,
    "jsonc/no-floating-decimal": ERROR,
    "jsonc/no-irregular-whitespace": [
      ERROR,
      {
        skipStrings: true,
        skipComments: true,
        skipRegExps: true,
        skipTemplates: true,
        skipJSXText: true,
      },
    ],
    "jsonc/no-multi-str": ERROR,
    "jsonc/no-octal-escape": ERROR,
    "jsonc/no-octal": ERROR,
    "jsonc/no-sparse-arrays": ERROR,
    "jsonc/no-useless-escape": ERROR,
    "jsonc/object-curly-newline": [ERROR, { consistent: true, multiline: true, minProperties: 2 }],
    "jsonc/object-curly-spacing": [ERROR, ALWAYS, { arraysInObjects: true, objectsInObjects: true }],
    "jsonc/object-property-newline": [ERROR, { allowAllPropertiesOnSameLine: false }],
    "jsonc/quote-props": [ERROR, ALWAYS],
    "jsonc/quotes": [ERROR, DOUBLE, { avoidEscape: false }],
    "jsonc/space-unary-ops": ERROR,
  },
] as const satisfies RuleEntry;
