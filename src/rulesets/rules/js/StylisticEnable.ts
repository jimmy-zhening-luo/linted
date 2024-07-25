import type { Input } from "@eslinted/core";
import {
  ERROR,
  OFF,
  NEVER,
  ALWAYS,
  ALWAYS_MULTILINE,
  AS_NEEDED,
  STRICT,
  ALL,
  STAR,
  LAST,
  BEFORE,
  AFTER,
  BELOW,
  BESIDE,
  INSIDE,
  DOUBLE,
} from "../state.js";

export default [
  "stylistic",
  {

    // https://eslint.style/rules
    "@stylistic/array-bracket-newline": [
      ERROR,
      {
        multiline: true,
        minItems: null,
      },
    ],
    "@stylistic/array-bracket-spacing": [
      ERROR,
      NEVER,
      {
        singleValue: false,
        objectsInArrays: false,
        arraysInArrays: false,
      },
    ],
    "@stylistic/array-element-newline": [
      ERROR,
      {
        ArrayExpression: {
          consistent: true,
          multiline: true,
          minItems: 3,
        },
        ArrayPattern: {
          consistent: true,
          multiline: true,
          minItems: 4,
        },
      },
    ],
    "@stylistic/arrow-parens": [
      ERROR,
      AS_NEEDED,
      { requireForBlockBody: false },
    ],
    "@stylistic/arrow-spacing": [
      ERROR,
      {
        before: true,
        after: true,
      },
    ],
    "@stylistic/block-spacing": [
      ERROR,
      ALWAYS,
    ],
    "@stylistic/brace-style": [
      ERROR,
      "stroustrup",
      { allowSingleLine: true },
    ],
    "@stylistic/comma-dangle": [
      ERROR,
      ALWAYS_MULTILINE,
    ],
    "@stylistic/comma-spacing": [
      ERROR,
      {
        before: false,
        after: true,
      },
    ],
    "@stylistic/comma-style": [
      ERROR,
      LAST,
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
    "@stylistic/computed-property-spacing": [
      ERROR,
      NEVER,
      { enforceForClassMembers: true },
    ],
    "@stylistic/dot-location": [
      ERROR,
      "property",
    ],
    "@stylistic/eol-last": [
      ERROR,
      ALWAYS,
    ],
    "@stylistic/function-call-argument-newline": [
      ERROR,
      ALWAYS,
    ],
    "@stylistic/function-call-spacing": [
      ERROR,
      NEVER,
    ],

    "@stylistic/function-paren-newline": [
      ERROR,
      "multiline-arguments", // BUG: https://github.com/eslint-stylistic/eslint-stylistic/issues/290
    ],
    "@stylistic/generator-star-spacing": [
      ERROR,
      {
        before: true,
        after: false,
      },
    ],
    "@stylistic/implicit-arrow-linebreak": [
      ERROR,
      BESIDE,
    ],
    "@stylistic/indent": [
      ERROR,
      2,
      {
        ignoredNodes: [],
        SwitchCase: 1,
        VariableDeclarator: {
          "var": 0,
          let: 0,
          "const": 0,
        },
        outerIIFEBody: 0,
        MemberExpression: 1,
        FunctionDeclaration: {
          parameters: 1,
          body: 1,
        },
        FunctionExpression: {
          parameters: 1,
          body: 1,
        },
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
    "@stylistic/indent-binary-ops": [
      ERROR,
      2,
    ],
    "@stylistic/key-spacing": [
      ERROR,
      {
        beforeColon: false,
        afterColon: true,
        mode: STRICT,
      },
    ],
    "@stylistic/keyword-spacing": [
      ERROR,
      {
        before: true,
        after: true,
        overrides: {},
      },
    ],
    "@stylistic/line-comment-position": OFF,
    "@stylistic/lines-around-comment": [
      ERROR,
      {
        beforeBlockComment: true,
        afterBlockComment: false,
        beforeLineComment: true,
        afterLineComment: false,
        allowBlockStart: true,
        allowBlockEnd: true,
        allowObjectStart: true,
        allowObjectEnd: true,
        allowArrayStart: true,
        allowArrayEnd: true,
        allowClassStart: true,
        allowClassEnd: true,
        applyDefaultIgnorePatterns: true,
        afterHashbangComment: false,

        // TS-only
        allowEnumEnd: false,
        allowEnumStart: false,
        allowInterfaceEnd: false,
        allowInterfaceStart: false,
        allowModuleEnd: false,
        allowModuleStart: false,
        allowTypeEnd: false,
        allowTypeStart: false,
      },
    ],
    "@stylistic/lines-between-class-members": [
      ERROR,
      {
        enforce: [
          {
            blankLine: NEVER,
            prev: "field",
            next: "field",
          },
          {
            blankLine: ALWAYS,
            prev: "field",
            next: "method",
          },
          {
            blankLine: ALWAYS,
            prev: "method",
            next: STAR,
          },
        ],
      },
      {
        exceptAfterSingleLine: false,

        // TS-only
        exceptAfterOverload: true,
      },
    ],
    "@stylistic/max-len": [
      ERROR,
      {
        code: 150,
        tabWidth: 2,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    "@stylistic/max-statements-per-line": [
      ERROR,
      { max: 1 },
    ],
    "@stylistic/member-delimiter-style": [
      ERROR,
      {
        multiline: {
          delimiter: "semi",
          requireLast: true,
        },
        singleline: {
          delimiter: "semi",
          requireLast: false,
        },
        multilineDetection: "brackets",
      },
    ],
    "@stylistic/multiline-comment-style": OFF,
    "@stylistic/multiline-ternary": [
      ERROR,
      ALWAYS_MULTILINE,
    ],
    "@stylistic/new-parens": [
      ERROR,
      NEVER,
    ],
    "@stylistic/newline-per-chained-call": [
      ERROR,
      { ignoreChainWithDepth: 2 },
    ],
    "@stylistic/no-confusing-arrow": OFF,
    "@stylistic/no-extra-parens": [
      ERROR,
      ALL,
      {
        conditionalAssign: true,
        returnAssign: true,
        nestedBinaryExpressions: true,
        ternaryOperandBinaryExpressions: true,
        enforceForArrowConditionals: true,
        enforceForSequenceExpressions: true,
        enforceForNewInMemberExpressions: true,
        enforceForFunctionPrototypeMethods: true,
      },
    ],
    "@stylistic/no-extra-semi": ERROR,
    "@stylistic/no-floating-decimal": ERROR,
    "@stylistic/no-mixed-operators": OFF,
    "@stylistic/no-mixed-spaces-and-tabs": ERROR,
    "@stylistic/no-multi-spaces": [
      ERROR,
      {
        ignoreEOLComments: false,
        exceptions: { Property: false },
        includeTabs: true,
      },
    ],
    "@stylistic/no-multiple-empty-lines": [
      ERROR,
      {
        max: 1,
        maxEOF: 1,
        maxBOF: 0,
      },
    ],
    "@stylistic/no-tabs": [
      ERROR,
      { allowIndentationTabs: false },
    ],
    "@stylistic/no-trailing-spaces": [
      ERROR,
      {
        skipBlankLines: false,
        ignoreComments: false,
      },
    ],
    "@stylistic/no-whitespace-before-property": ERROR,
    "@stylistic/nonblock-statement-body-position": [
      ERROR,
      BELOW,
      {
        overrides: {
          "if": BELOW,
          "else": BELOW,
          "while": BELOW,
          "do": BELOW,
          "for": BELOW,
        },
      },
    ],
    "@stylistic/object-curly-newline": [
      ERROR,
      {
        ObjectExpression: {
          multiline: true,
          minProperties: 3,
          consistent: true,
        },
        ObjectPattern: {
          multiline: true,
          minProperties: 3,
          consistent: true,
        },
        ImportDeclaration: {
          multiline: true,
          minProperties: 3,
          consistent: true,
        },
        ExportDeclaration: {
          multiline: true,
          minProperties: 3,
          consistent: true,
        },
      },
    ],
    "@stylistic/object-curly-spacing": [
      ERROR,
      ALWAYS,
      {
        arraysInObjects: true,
        objectsInObjects: true,
      },
    ],
    "@stylistic/object-property-newline": [
      ERROR,
      { allowAllPropertiesOnSameLine: true },
    ],
    "@stylistic/one-var-declaration-per-line": [
      ERROR,
      ALWAYS,
    ],
    "@stylistic/operator-linebreak": [
      ERROR,
      BEFORE,
      { overrides: { "=": AFTER } },
    ],
    "@stylistic/padded-blocks": [
      ERROR,
      {
        blocks: NEVER,
        classes: NEVER,
        switches: NEVER,
      },
      { allowSingleLineBlocks: true },
    ],
    "@stylistic/padding-line-between-statements": [
      ERROR,
      {
        blankLine: ALWAYS,
        prev: "directive",
        next: STAR,
      },
      {
        blankLine: NEVER,
        prev: "directive",
        next: "directive",
      },
      {
        blankLine: ALWAYS,
        prev: [
          "import",
          "cjs-import",
        ],
        next: STAR,
      },
      {
        blankLine: NEVER,
        prev: [
          "import",
          "cjs-import",
        ],
        next: [
          "import",
          "cjs-import",
        ],
      },
      {
        blankLine: ALWAYS,
        prev: [
          "class",
          "interface",
          "try",
          "for",
          "if",
          "do",
          "while",
          "switch",
          "block",
          "block-like",
          "iife",
          "empty",
          "debugger",
          "with",
        ],
        next: STAR,
      },
      {
        blankLine: ALWAYS,
        prev: "case",
        next: STAR,
      },
      {
        blankLine: ALWAYS,
        prev: "case",
        next: [
          "case",
          "default",
        ],
      },
      {
        blankLine: ALWAYS,
        prev: "default",
        next: STAR,
      },
      {
        blankLine: ALWAYS,
        prev: "type",
        next: STAR,
      },
      {
        blankLine: NEVER,
        prev: "type",
        next: "type",
      },
      {
        blankLine: ALWAYS,
        prev: "function",
        next: STAR,
      },
      {
        blankLine: ALWAYS,
        prev: "function-overload",
        next: STAR,
      },
      {
        blankLine: NEVER,
        prev: "function-overload",
        next: "function-overload",
      },
      {
        blankLine: NEVER,
        prev: "function-overload",
        next: "function",
      },
      {
        blankLine: ALWAYS,
        prev: [
          "const",
          "let",
          "var",
        ],
        next: STAR,
      },
      {
        blankLine: NEVER,
        prev: [
          "const",
          "let",
          "var",
        ],
        next: [
          "const",
          "let",
          "var",
        ],
      },
      {
        blankLine: ALWAYS,
        prev: "expression",
        next: STAR,
      },
      {
        blankLine: NEVER,
        prev: "expression",
        next: "expression",
      },
      {
        blankLine: ALWAYS,
        prev: STAR,
        next: [
          "throw",
          "return",
          "break",
          "continue",
        ],
      },
      {
        blankLine: ALWAYS,
        prev: STAR,
        next: [
          "export",
          "cjs-export",
        ],
      },
      {
        blankLine: NEVER,
        prev: [
          "export",
          "cjs-export",
        ],
        next: [
          "export",
          "cjs-export",
        ],
      },
    ],
    "@stylistic/quote-props": [
      ERROR,
      AS_NEEDED,
      {
        keywords: true,
        unnecessary: true,
        numbers: false,
      },
    ],
    "@stylistic/quotes": [
      ERROR,
      DOUBLE,
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    "@stylistic/rest-spread-spacing": [
      ERROR,
      NEVER,
    ],
    "@stylistic/semi": [
      ERROR,
      ALWAYS,
      {
        omitLastInOneLineBlock: false,
        omitLastInOneLineClassBody: false,
      },
    ],
    "@stylistic/semi-spacing": [
      ERROR,
      {
        before: false,
        after: true,
      },
    ],
    "@stylistic/semi-style": [
      ERROR,
      LAST,
    ],
    "@stylistic/space-before-blocks": [
      ERROR,
      {
        functions: ALWAYS,
        keywords: ALWAYS,
        classes: ALWAYS,
      },
    ],
    "@stylistic/space-before-function-paren": [
      ERROR,
      {
        anonymous: ALWAYS,
        named: NEVER,
        asyncArrow: ALWAYS,
      },
    ],
    "@stylistic/space-in-parens": [
      ERROR,
      NEVER,
    ],
    "@stylistic/space-infix-ops": [
      ERROR,
      { int32Hint: true },
    ],
    "@stylistic/space-unary-ops": [
      ERROR,
      {
        words: true,
        nonwords: false,
        overrides: {},
      },
    ],
    "@stylistic/spaced-comment": [
      ERROR,
      ALWAYS,
    ],
    "@stylistic/switch-colon-spacing": [
      ERROR,
      {
        after: true,
        before: false,
      },
    ],
    "@stylistic/template-curly-spacing": [
      ERROR,
      NEVER,
    ],
    "@stylistic/template-tag-spacing": [
      ERROR,
      NEVER,
    ],
    "@stylistic/type-annotation-spacing": [
      ERROR,
      {
        before: false,
        after: true,
      },
    ],
    "@stylistic/type-generic-spacing": ERROR,
    "@stylistic/type-named-tuple-spacing": ERROR,
    "@stylistic/wrap-iife": [
      ERROR,
      INSIDE,
      { functionPrototypeMethods: true },
    ],
    "@stylistic/wrap-regex": ERROR,
    "@stylistic/yield-star-spacing": [
      ERROR,
      {
        before: false,
        after: true,
      },
    ],
  },
] as const satisfies Input.RuleRecord;
