import { enable_x, level, state } from "../../.strings";

const
{ ERROR } = level,
{ Never, Always, Strict } = state;

export default [
  enable_x,
  {
    // https://ota-meshi.github.io/eslint-plugin-yml/rules/#extension-rules
    "yml/flow-mapping-curly-newline": [
      ERROR,
      {
        consistent: false,
        multiline: true,
        minProperties: 2,
      },
    ],
    "yml/flow-mapping-curly-spacing": [
      ERROR,
      Always,
      {
        arraysInObjects: true,
        objectsInObjects: true,
      },
    ],
    "yml/flow-sequence-bracket-newline": [
      ERROR,
      {
        multiline: true,
        minItems: null,
      },
    ],
    "yml/flow-sequence-bracket-spacing": [
      ERROR,
      Never,
      {
        singleValue: false,
        objectsInArrays: false,
        arraysInArrays: false,
      },
    ],
    "yml/key-spacing": [
      ERROR,
      {
        beforeColon: false,
        afterColon: true,
        mode: Strict,
      },
    ],
    "yml/no-irregular-whitespace": [
      ERROR,
      {
        skipQuotedScalars: true,
        skipComments: false,
      },
    ],
    "yml/no-multiple-empty-lines": [
      ERROR,
      {
        max: 1,
        maxEOF: 1,
        maxBOF: 0,
      },
    ],
    "yml/spaced-comment": [ERROR, Always],
  },
] as const;
