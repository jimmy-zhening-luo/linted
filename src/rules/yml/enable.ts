import { enable, level, state } from "../../_strings";

const
{ ERROR, OFF } = level,
{ Never, Always, Double } = state;

export default [
  enable,
  {
    // https://ota-meshi.github.io/eslint-plugin-yml/rules/#yaml-rules
    "yml/block-mapping-colon-indicator-newline": [ERROR, Never],
    "yml/block-mapping-question-indicator-newline": [ERROR, Never],
    "yml/block-mapping": [
      ERROR,
      {
        singleline: Never,
        multiline: Always,
      },
    ],
    "yml/block-sequence-hyphen-indicator-newline": [
      ERROR,
      Never,
      {
        nestedHyphen: Always,
        blockMapping: Never,
      },
    ],
    "yml/block-sequence": [
      ERROR,
      {
        singleline: Always,
        multiline: Always,
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
    "yml/key-name-casing": OFF,
    "yml/no-empty-document": ERROR,
    "yml/no-empty-key": ERROR,
    "yml/no-empty-mapping-value": ERROR,
    "yml/no-empty-sequence-entry": ERROR,
    "yml/no-tab-indent": ERROR,
    "yml/no-trailing-zeros": ERROR,
    "yml/plain-scalar": [ERROR, Always],
    "yml/quotes": [
      ERROR,
      {
        prefer: Double,
        avoidEscape: true,
      },
    ],
    "yml/require-string-key": ERROR,
    "yml/sort-keys": OFF,
    "yml/sort-sequence-values": OFF,
    "yml/vue-custom-block/no-parsing-error": ERROR,
  },
] as const;
