const [ERROR] = ["error"] as const;
const [
  ALWAYS,
  NEVER,
] = [
  "always",
  "never",
] as const;
const Json5EnableExtend: IRules = {

  // Extension - ENABLE
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/#extension-rules
  "jsonc/array-bracket-newline": [
    ERROR,
    {
      multiline: true,
      minItems: null,
    },
  ],
  "jsonc/array-bracket-spacing": [
    ERROR,
    NEVER,
    {
      singleValue: false,
      objectsInArrays: false,
      arraysInArrays: false,
    },
  ],
  "jsonc/array-element-newline": [
    ERROR,
    {
      mutiline: true,
      minItems: 2,
    },
  ],
  "jsonc/comma-dangle": [
    ERROR,
    "always-multiline",
  ],
  "jsonc/comma-style": [
    ERROR,
    "last",
  ],
  "jsonc/indent": [
    ERROR,
    2,
  ],
  "jsonc/key-spacing": [
    ERROR,
    {
      beforeColon: false,
      afterColon: true,
      mode: "strict",
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
      multiline: true,
      minProperties: 2,
      consistent: true,
    },
  ],
  "jsonc/object-curly-spacing": [
    ERROR,
    ALWAYS,
    {
      arraysInObjects: true,
      objectsInObjects: true,
    },
  ],
  "jsonc/object-property-newline": [
    ERROR,
    { allowAllPropertiesOnSameLine: false },
  ],
  "jsonc/quote-props": [
    ERROR,
    ALWAYS,
  ],
  "jsonc/quotes": [
    ERROR,
    "double",
    { avoidEscape: false },
  ],
  "jsonc/space-unary-ops": ERROR,
};

export default Json5EnableExtend;
