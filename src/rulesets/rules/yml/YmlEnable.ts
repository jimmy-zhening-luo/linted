import { Rule } from "@eslinted/core";
import {
  ERROR,
  OFF,
  NEVER,
  ALWAYS,
  DOUBLE,
} from "../state.js";
import { Enable } from "../id.js";

const YmlEnable = new Rule(
  Enable,
  {

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
    "yml/key-name-casing": OFF,
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
        prefer: DOUBLE,
        avoidEscape: true,
      },
    ],
    "yml/require-string-key": ERROR,
    "yml/sort-keys": OFF,
    "yml/sort-sequence-values": OFF,
    "yml/vue-custom-block/no-parsing-error": ERROR,
  },
);

export default YmlEnable;
