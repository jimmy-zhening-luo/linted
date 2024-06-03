const [
  ERROR,
  OFF,
] = [
  "error",
  "off",
] as const;
const [
  ALWAYS,
  NEVER,
] = [
  "always",
  "never",
] as const;
const YmlEnable: IRules = {

  // YAML Only
  // https://ota-meshi.github.io/eslint-plugin-yml/rules/#yaml-rules
  "yml/block-mapping-colon-indicator-newline": [
    ERROR,
    NEVER,
  ],
  "yml/block-mapping-question-indicator-newline": [
    ERROR,
    NEVER,
  ],
  "yml/block-mapping": [
    ERROR,
    {
      singleline: NEVER,
      multiline: ALWAYS,
    },
  ],
  "yml/block-sequence-hyphen-indicator-newline": [
    ERROR,
    NEVER,
    {
      nestedHyphen: ALWAYS,
      blockMapping: NEVER,
    },
  ],
  "yml/block-sequence": [
    ERROR,
    {
      singleline: ALWAYS,
      multiline: ALWAYS,
    },
  ],
  "yml/file-extension": OFF,
  "yml/indent": [
    ERROR,
    2,
    {
      indentBlockSequences: true,
      indicatorValueIndent: 2,
    },
  ],
  "yml/key-name-casing": [
    ERROR,
    {
      camelCase: true,
      PascalCase: false,
      SCREAMING_SNAKE_CASE: false,
      "kebab-case": true,
      snake_case: false,
    },
  ],
  "yml/no-empty-document": ERROR,
  "yml/no-empty-key": ERROR,
  "yml/no-empty-mapping-value": ERROR,
  "yml/no-empty-sequence-entry": ERROR,
  "yml/no-tab-indent": ERROR,
  "yml/no-trailing-zeros": ERROR,
  "yml/plain-scalar": [
    ERROR,
    ALWAYS,
  ],
  "yml/quotes": [
    ERROR,
    {
      prefer: "double",
      avoidEscape: true,
    },
  ],
  "yml/require-string-key": ERROR,
  "yml/sort-keys": OFF,
  "yml/sort-sequence-values": OFF,
  "yml/vue-custom-block/no-parsing-error": ERROR,
};

export default YmlEnable;
