const ERROR = "error";
const OFF = "off";

export default {

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
    "never",
    {
      singleValue: false,
      objectsInArrays: false,
      arraysInArrays: false,
    },
  ],
  "@stylistic/array-element-newline": [
    ERROR,
    {
      ArrayExpression: "always",
      ArrayPattern: "always",
    },
  ],
  "@stylistic/arrow-parens": [
    ERROR,
    "as-needed",
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
    "always",
  ],
  "@stylistic/brace-style": [
    ERROR,
    "stroustrup",
    { allowSingleLine: true },
  ],
  "@stylistic/comma-dangle": [
    ERROR,
    "always-multiline",
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
    "last",
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
    "never",
    { enforceForClassMembers: true },
  ],
  "@stylistic/dot-location": [
    ERROR,
    "property",
  ],
  "@stylistic/eol-last": [
    ERROR,
    "always",
  ],
  "@stylistic/function-call-argument-newline": [
    ERROR,
    "always",
  ],
  "@stylistic/function-call-spacing": [
    ERROR,
    "never",
  ],

  // Useless rule. See issue with my comment: https://github.com/eslint-community/eslint-stylistic/issues/290
  "@stylistic/function-paren-newline": [
    ERROR,
    "multiline-arguments",
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
    "below",
  ],
  "@stylistic/indent": [
    ERROR,
    2,
    {
      ignoredNodes: [],
      SwitchCase: 1,
      VariableDeclarator: {
        "var": "first",
        let: "first",
        "const": "first",
      },
      outerIIFEBody: 1,
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
      mode: "strict",
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
          blankLine: "never",
          prev: "field",
          next: "field",
        },
        {
          blankLine: "always",
          prev: "field",
          next: "method",
        },
        {
          blankLine: "always",
          prev: "method",
          next: "*",
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
      code: 120,
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
  "@stylistic/multiline-ternary": [
    ERROR,
    "always",
  ],
  "@stylistic/new-parens": [
    ERROR,
    "always",
  ],
  "@stylistic/newline-per-chained-call": [
    ERROR,
    { ignoreChainWithDepth: 1 },
  ],
  "@stylistic/no-confusing-arrow": OFF,
  "@stylistic/no-extra-parens": [
    ERROR,
    "all",
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
    "below",
    {
      overrides: {
        "if": "below",
        "else": "below",
        "while": "below",
        "do": "below",
        "for": "below",
      },
    },
  ],
  "@stylistic/object-curly-newline": [
    ERROR,
    {
      ObjectExpression: {
        multiline: true,
        minProperties: 2,
        consistent: false,
      },
      ObjectPattern: {
        multiline: true,
        minProperties: 2,
        consistent: false,
      },
      ImportDeclaration: {
        multiline: true,
        minProperties: 2,
        consistent: false,
      },
      ExportDeclaration: {
        multiline: true,
        minProperties: 2,
        consistent: false,
      },
    },
  ],
  "@stylistic/object-curly-spacing": [
    ERROR,
    "always",
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
    "always",
  ],
  "@stylistic/operator-linebreak": [
    ERROR,
    "before",
    {
      overrides: {
        "=": "after",
        "?": "before",
        ":": "before",
      },
    },
  ],
  "@stylistic/padded-blocks": [
    ERROR,
    {
      blocks: "never",
      classes: "never",
      switches: "never",
    },
    { allowSingleLineBlocks: true },
  ],
  "@stylistic/padding-line-between-statements": [
    ERROR,
    {
      blankLine: "always",
      prev: "directive",
      next: "*",
    },
    {
      blankLine: "never",
      prev: "directive",
      next: "directive",
    },
    {
      blankLine: "always",
      prev: [
        "import",
        "cjs-import",
      ],
      next: "*",
    },
    {
      blankLine: "never",
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
      blankLine: "always",
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
      next: "*",
    },
    {
      blankLine: "always",
      prev: "case",
      next: "*",
    },
    {
      blankLine: "always",
      prev: "case",
      next: [
        "case",
        "default",
      ],
    },
    {
      blankLine: "always",
      prev: "default",
      next: "*",
    },
    {
      blankLine: "always",
      prev: "type",
      next: "*",
    },
    {
      blankLine: "never",
      prev: "type",
      next: "type",
    },
    {
      blankLine: "always",
      prev: "function",
      next: "*",
    },
    {
      blankLine: "always",
      prev: "function-overload",
      next: "*",
    },
    {
      blankLine: "never",
      prev: "function-overload",
      next: "function-overload",
    },
    {
      blankLine: "never",
      prev: "function-overload",
      next: "function",
    },
    {
      blankLine: "always",
      prev: [
        "const",
        "let",
        "var",
      ],
      next: "*",
    },
    {
      blankLine: "never",
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
      blankLine: "always",
      prev: "expression",
      next: "*",
    },
    {
      blankLine: "never",
      prev: "expression",
      next: "expression",
    },
    {
      blankLine: "always",
      prev: "*",
      next: [
        "throw",
        "return",
        "break",
        "continue",
      ],
    },
    {
      blankLine: "always",
      prev: "*",
      next: [
        "export",
        "cjs-export",
      ],
    },
    {
      blankLine: "never",
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
    "as-needed",
    {
      keywords: true,
      unnecessary: true,
      numbers: false,
    },
  ],
  "@stylistic/quotes": [
    ERROR,
    "double",
    {
      avoidEscape: true,
      allowTemplateLiterals: true,
    },
  ],
  "@stylistic/rest-spread-spacing": [
    ERROR,
    "never",
  ],
  "@stylistic/semi": [
    ERROR,
    "always",
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
    "last",
  ],
  "@stylistic/space-before-blocks": [
    ERROR,
    {
      functions: "always",
      keywords: "always",
      classes: "always",
    },
  ],
  "@stylistic/space-before-function-paren": [
    ERROR,
    {
      anonymous: "always",
      named: "never",
      asyncArrow: "always",
    },
  ],
  "@stylistic/space-in-parens": [
    ERROR,
    "never",
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
    "always",
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
    "never",
  ],
  "@stylistic/template-tag-spacing": [
    ERROR,
    "never",
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
    "inside",
    { functionPrototypeMethods: true },
  ],
  "@stylistic/wrap-regex": ERROR,
  "@stylistic/yield-star-spacing": [
    ERROR,
    {
      before: true,
      after: false,
    },
  ],
};
