import {
  enable,
  ERROR,
  AlwaysMultiline,
  Always,
  Last,
  Never,
  Strict,
  Consistent,
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
    ] /* https://eslint.org/docs/latest/rules/array-bracket-newline */,
    "array-bracket-spacing": [
      ERROR,
      Never,
      {
        singleValue: false,
        objectsInArrays: false,
        arraysInArrays: false,
      },
    ] /* https://eslint.org/docs/latest/rules/array-bracket-spacing */,
    "array-element-newline": [
      ERROR,
      Consistent,
    ] /* https://eslint.org/docs/latest/rules/array-element-newline */,
    "brace-style": [
      ERROR,
      "stroustrup",
      {
        allowSingleLine: true,
      },
    ] /* https://eslint.org/docs/latest/rules/brace-style */,
    "comma-dangle": [
      ERROR,
      AlwaysMultiline,
    ] /* https://eslint.org/docs/latest/rules/comma-dangle */,
    "comma-spacing": [
      ERROR,
      {
        before: false,
        after: true,
      },
    ] /* https://eslint.org/docs/latest/rules/comma-spacing */,
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
    ] /* https://eslint.org/docs/latest/rules/comma-style */,
    "eol-last": [
      ERROR,
      Always,
    ] /* https://eslint.org/docs/latest/rules/eol-last */,
    "key-spacing": [
      ERROR,
      {
        beforeColon: false,
        afterColon: true,
        mode: Strict,
      },
    ] /* https://eslint.org/docs/latest/rules/key-spacing */,
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
    ] /* https://eslint.org/docs/latest/rules/indent */,
    "no-mixed-spaces-and-tabs": ERROR /* https://eslint.org/docs/latest/rules/no-mixed-spaces-and-tabs */,
    "no-multi-spaces": [
      ERROR,
      {
        ignoreEOLComments: false,
        exceptions: {
          Property: false,
          ImportAttributes: false,
        },
      },
    ] /* https://eslint.org/docs/latest/rules/no-multi-spaces */,
    "no-multiple-empty-lines": [
      ERROR,
      {
        max: 1,
        maxEOF: 1,
        maxBOF: 0,
      },
    ] /* https://eslint.org/docs/latest/rules/no-multiple-empty-lines */,
    "no-tabs": [
      ERROR,
      {
        allowIndentationTabs: false,
      },
    ] /* https://eslint.org/docs/latest/rules/no-tabs */,
    "no-trailing-spaces": [
      ERROR,
      {
        skipBlankLines: false,
        ignoreComments: false,
      },
    ] /* https://eslint.org/docs/latest/rules/no-trailing-spaces */,
    "no-whitespace-before-property": ERROR /* https://eslint.org/docs/latest/rules/no-whitespace-before-property */,
    "object-curly-newline": [
      ERROR,
      {
        consistent: true,
      },
    ] /* https://eslint.org/docs/latest/rules/object-curly-newline */,
    "object-curly-spacing": [
      ERROR,
      Always,
      {
        arraysInObjects: true,
        objectsInObjects: true,
      },
    ] /* https://eslint.org/docs/latest/rules/object-curly-spacing */,
    "object-property-newline": [
      ERROR,
      {
        allowAllPropertiesOnSameLine: true,
      },
    ] /* https://eslint.org/docs/latest/rules/object-property-newline */,
  },
] as const;
