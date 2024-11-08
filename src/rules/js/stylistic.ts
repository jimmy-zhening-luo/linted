import {
  stylistic,
  ERROR,
  OFF,
  Never,
  Always,
  AlwaysMultiline,
  Consistent,
  AsNeeded,
  Strict,
  All,
  Star,
  Last,
  Before,
  After,
  Below,
  Beside,
  Inside,
  Double,
} from "../../_strings";

export default [
  stylistic,
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
      Never,
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
          minItems: 4,
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
      AsNeeded,
      {
        requireForBlockBody: false,
      },
    ],
    "@stylistic/arrow-spacing": [
      ERROR,
      {
        before: true,
        after: true,
      },
    ],
    "@stylistic/block-spacing": [ERROR, Always],
    "@stylistic/brace-style": [
      ERROR,
      "stroustrup",
      {
        allowSingleLine: true,
      },
    ],
    "@stylistic/comma-dangle": [ERROR, AlwaysMultiline],
    "@stylistic/comma-spacing": [
      ERROR,
      {
        before: false,
        after: true,
      },
    ],
    "@stylistic/comma-style": [
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
    "@stylistic/computed-property-spacing": [
      ERROR,
      Never,
      {
        enforceForClassMembers: true,
      },
    ],
    "@stylistic/dot-location": [ERROR, "property"],
    "@stylistic/eol-last": [ERROR, Always],
    "@stylistic/function-call-argument-newline": [ERROR, Consistent],
    "@stylistic/function-call-spacing": [ERROR, Never],

    "@stylistic/function-paren-newline": [ERROR, "multiline-arguments"] /* BUG: https://github.com/eslint-stylistic/eslint-stylistic/issues/290 */,
    "@stylistic/generator-star-spacing": [
      ERROR,
      {
        before: true,
        after: false,
      },
    ],
    "@stylistic/implicit-arrow-linebreak": [ERROR, Beside],
    "@stylistic/indent": [
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
    "@stylistic/indent-binary-ops": [ERROR, 2],
    "@stylistic/key-spacing": [
      ERROR,
      {
        beforeColon: false,
        afterColon: true,
        mode: Strict,
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
        beforeBlockComment: false,
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
        allowEnumEnd: true,
        allowEnumStart: true,
        allowInterfaceEnd: true,
        allowInterfaceStart: true,
        allowModuleEnd: true,
        allowModuleStart: true,
        allowTypeEnd: true,
        allowTypeStart: true,
      },
    ],
    "@stylistic/lines-between-class-members": [
      ERROR,
      {
        enforce: [
          { prev: "field", next: "field", blankLine: Never },
          { prev: "field", next: "method", blankLine: Always },
          { prev: "method", next: Star, blankLine: Always },
        ],
      },
      {
        exceptAfterSingleLine: false,
        exceptAfterOverload: true /* TS-only */,
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
      {
        max: 1,
      },
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
    "@stylistic/multiline-ternary": [ERROR, AlwaysMultiline],
    "@stylistic/new-parens": [OFF, Never],
    "@stylistic/newline-per-chained-call": [
      ERROR,
      {
        ignoreChainWithDepth: 2,
      },
    ],
    "@stylistic/no-confusing-arrow": OFF,
    "@stylistic/no-extra-parens": [
      ERROR,
      All,
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
        exceptions: {
          Property: false,
          ImportAttributes: false,
        },
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
      {
        allowIndentationTabs: false,
      },
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
      Below,
      {
        overrides: {
          "if": Below,
          "else": Below,
          "while": Below,
          "do": Below,
          "for": Below,
        },
      },
    ],
    "@stylistic/object-curly-newline": [
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
    "@stylistic/object-curly-spacing": [
      ERROR,
      Always,
      {
        arraysInObjects: true,
        objectsInObjects: true,
      },
    ],
    "@stylistic/object-property-newline": [
      ERROR,
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],
    "@stylistic/one-var-declaration-per-line": [ERROR, Always],
    "@stylistic/operator-linebreak": [
      ERROR,
      Before,
      {
        overrides: {
          "=": After,
        },
      },
    ],
    "@stylistic/padded-blocks": [
      ERROR,
      {
        blocks: Never,
        classes: Never,
        switches: Never,
      },
      {
        allowSingleLineBlocks: true,
      },
    ],
    "@stylistic/padding-line-between-statements": [
      ERROR,
      {
        prev: "directive",
        next: Star,
        blankLine: Always,
      },
      {
        prev: "directive",
        next: "directive",
        blankLine: Never,
      },
      {
        prev: ["import", "cjs-import"],
        next: Star,
        blankLine: Always,
      },
      {
        prev: ["import", "cjs-import"],
        next: ["import", "cjs-import"],
        blankLine: Never,
      },
      {
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
        next: Star,
        blankLine: Always,
      },
      {
        prev: "case",
        next: Star,
        blankLine: Always,
      },
      {
        prev: "case",
        next: ["case", "default"],
        blankLine: Always,
      },
      {
        prev: "default",
        next: Star,
        blankLine: Always,
      },
      {
        prev: "type",
        next: Star,
        blankLine: Always,
      },
      {
        prev: "type",
        next: "type",
        blankLine: Never,
      },
      {
        prev: "function",
        next: Star,
        blankLine: Always,
      },
      {
        prev: "function-overload",
        next: Star,
        blankLine: Always,
      },
      {
        prev: "function-overload",
        next: "function-overload",
        blankLine: Never,
      },
      {
        prev: "function-overload",
        next: "function",
        blankLine: Never,
      },
      {
        prev: ["const", "let", "var"],
        next: Star,
        blankLine: Always,
      },
      {
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
        blankLine: Never,
      },
      {
        prev: "expression",
        next: Star,
        blankLine: Always,
      },
      {
        prev: "expression",
        next: "expression",
        blankLine: Never,
      },
      {
        prev: Star,
        next: [
          "throw",
          "return",
          "break",
          "continue",
        ],
        blankLine: Always,
      },
      {
        prev: Star,
        next: ["export", "cjs-export"],
        blankLine: Always,
      },
      {
        prev: ["export", "cjs-export"],
        next: ["export", "cjs-export"],
        blankLine: Never,
      },
    ],
    "@stylistic/quote-props": [
      ERROR,
      AsNeeded,
      {
        keywords: true,
        unnecessary: true,
        numbers: false,
      },
    ],
    "@stylistic/quotes": [
      ERROR,
      Double,
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    "@stylistic/rest-spread-spacing": [ERROR, Never],
    "@stylistic/semi": [
      ERROR,
      Always,
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
    "@stylistic/semi-style": [ERROR, Last],
    "@stylistic/space-before-blocks": [
      ERROR,
      {
        functions: Always,
        keywords: Always,
        classes: Always,
      },
    ],
    "@stylistic/space-before-function-paren": [
      ERROR,
      {
        anonymous: Always,
        named: Never,
        asyncArrow: Always,
      },
    ],
    "@stylistic/space-in-parens": [ERROR, Never],
    "@stylistic/space-infix-ops": [
      ERROR,
      {
        int32Hint: true,
      },
    ],
    "@stylistic/space-unary-ops": [
      ERROR,
      {
        words: true,
        nonwords: false,
        overrides: {},
      },
    ],
    "@stylistic/spaced-comment": [ERROR, Always],
    "@stylistic/switch-colon-spacing": [
      ERROR,
      {
        after: true,
        before: false,
      },
    ],
    "@stylistic/template-curly-spacing": [ERROR, Never],
    "@stylistic/template-tag-spacing": [ERROR, Never],
    "@stylistic/type-annotation-spacing": [
      ERROR,
      {
        before: true,
        after: true,
        overrides: {
          colon: {
            before: false,
            after: true,
          },
        },
      } /* non-overriden rule affects all type annotations (arrows, "as" keyword, "satisfies" keyword) except colons */,
    ],
    "@stylistic/type-generic-spacing": ERROR,
    "@stylistic/type-named-tuple-spacing": ERROR,
    "@stylistic/wrap-iife": [
      ERROR,
      Inside,
      {
        functionPrototypeMethods: true,
      },
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
] as const;
