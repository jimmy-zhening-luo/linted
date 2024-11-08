import {
  enable,
  ERROR,
  AlwaysMultiline,
  Always,
  Last,
  Never,
  Strict,
} from "../../_strings";

export default [
  enable,
  {
    // https://eslint.org/docs/latest/rules/#deprecated
    "array-bracket-newline": [
      ERROR,
      {
        multiline: true,
        minItems: null,
      },
    ],
    "array-bracket-spacing": [
      ERROR,
      Never,
      {
        singleValue: false,
        objectsInArrays: false,
        arraysInArrays: false,
      },
    ],
    "array-element-newline": [
      ERROR,
      {
        ArrayExpression: {
          consistent: true,
          multiline: true,
          minItems: 4,
        },
        ArrayPattern: {
          consistent: true,
          multiline: true,
          minItems: 4,
        },
      },
    ],
    "brace-style": [
      ERROR,
      "stroustrup",
      {
        allowSingleLine: true,
      },
    ],
    "comma-dangle": [ERROR, AlwaysMultiline],
    "comma-spacing": [
      ERROR,
      {
        before: false,
        after: true,
      },
    ],
    "comma-style": [
      ERROR,
      Last,
      {
        exceptions: {
          ArrayExpression: false,
          ArrayPattern: false,
          ArrowFunctionExpression: false,
          CallExpression: false,
          FunctionDeclaration: false,
          FunctionExpression: false,
          ImportDeclaration: false,
          ObjectExpression: false,
          ObjectPattern: false,
          VariableDeclaration: false,
          NewExpression: false,
        },
      },
    ],
    "eol-last": [ERROR, Always],
    "key-spacing": [
      ERROR,
      {
        beforeColon: false,
        afterColon: true,
        mode: Strict,
      },
    ],
    indent: [
      ERROR,
      2,
      {
        ignoredNodes: [],
        SwitchCase: 1,
        VariableDeclarator: { "var": 0, let: 0, "const": 0 },
        outerIIFEBody: 0,
        MemberExpression: 1,
        FunctionDeclaration: { parameters: 1, body: 1 },
        FunctionExpression: { parameters: 1, body: 1 },
        StaticBlock: { body: 1 },
        CallExpression: { arguments: 1 },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        offsetTernaryExpressions: true,
        ignoreComments: false,
      },
    ],
    "no-mixed-spaces-and-tabs": ERROR,
    "no-multi-spaces": [
      ERROR,
      {
        ignoreEOLComments: false,
        exceptions: {
          Property: false,
          ImportAttributes: false,
        },
        includeTabs: true,
      },
    ],
    "no-multiple-empty-lines": [
      ERROR,
      {
        max: 1,
        maxEOF: 1,
        maxBOF: 0,
      },
    ],
    "no-tabs": [
      ERROR,
      {
        allowIndentationTabs: false,
      },
    ],
    "no-trailing-spaces": [
      ERROR,
      {
        skipBlankLines: false,
        ignoreComments: false,
      },
    ],
    "no-whitespace-before-property": ERROR,
    "object-curly-newline": [
      ERROR,
      {
        ObjectExpression: {
          consistent: true,
          multiline: true,
          minProperties: 4,
        },
        ObjectPattern: {
          consistent: true,
          multiline: true,
          minProperties: 4,
        },
        ImportDeclaration: {
          consistent: true,
          multiline: true,
          minProperties: 4,
        },
        ExportDeclaration: {
          consistent: true,
          multiline: true,
          minProperties: 4,
        },
      },
    ],
    "object-curly-spacing": [
      ERROR,
      Always,
      {
        arraysInObjects: true,
        objectsInObjects: true,
      },
    ],
    "object-property-newline": [
      ERROR,
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],
    "spaced-comment": [ERROR, Always],
  },
] as const;
