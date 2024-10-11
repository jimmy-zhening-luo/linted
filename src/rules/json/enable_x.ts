import { enable_x, level, state } from "../_strings.js";

const
{ ERROR } = level,
{
  Never,
  Always,
  Consistent,
  Strict,
  Last,
  Double,
} = state;

export default [
  enable_x,
  {
    // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/#extension-rules
    "jsonc/array-bracket-newline": [ERROR, Consistent],
    "jsonc/array-bracket-spacing": [
      ERROR,
      Never,
      {
        singleValue: false,
        objectsInArrays: false,
        arraysInArrays: false,
      },
    ],
    "jsonc/array-element-newline": [ERROR, Always],
    "jsonc/comma-dangle": [ERROR, Never] /* trailing commas are NOT allowed in JSON */,
    "jsonc/comma-style": [ERROR, Last],
    "jsonc/indent": [ERROR, 2],
    "jsonc/key-spacing": [
      ERROR,
      {
        beforeColon: false,
        afterColon: true,
        mode: Strict,
      },
    ],
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
    "jsonc/object-curly-newline": [
      ERROR,
      {
        consistent: true,
        multiline: true,
        minProperties: 2,
      },
    ],
    "jsonc/object-curly-spacing": [
      ERROR,
      Always,
      {
        arraysInObjects: true,
        objectsInObjects: true,
      },
    ],
    "jsonc/object-property-newline": [
      ERROR,
      {
        allowAllPropertiesOnSameLine: false,
      },
    ],
    "jsonc/quote-props": [ERROR, Always],
    "jsonc/quotes": [
      ERROR,
      Double,
      {
        avoidEscape: false,
      },
    ],
    "jsonc/space-unary-ops": ERROR,
  },
] as const;
