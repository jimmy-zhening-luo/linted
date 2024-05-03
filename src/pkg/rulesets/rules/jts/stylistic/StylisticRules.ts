const E = "error";
const OFF = "off";
const StylisticRules: IRules = {

  // https://eslint.style/rules
  "@stylistic/array-bracket-newline": [
    E,
    {
      multiline: true,
      minItems: null,
    },
  ],
  "@stylistic/array-bracket-spacing": [
    E,
    "never",
    {
      singleValue: false,
      objectsInArrays: false,
      arraysInArrays: false,
    },
  ],
  "@stylistic/array-element-newline": [
    E,
    {
      ArrayExpression: "always",
      ArrayPattern: "always",
    },
  ],
  "@stylistic/arrow-parens": [
    E,
    "as-needed",
    { requireForBlockBody: false },
  ],
  "@stylistic/arrow-spacing": [
    E,
    {
      before: true,
      after: true,
    },
  ],
  "@stylistic/block-spacing": [
    E,
    "always",
  ],
  "@stylistic/brace-style": [
    E,
    "stroustrup",
    { allowSingleLine: true },
  ],
  "@stylistic/comma-dangle": [
    E,
    "always-multiline",
  ],
  "@stylistic/comma-spacing": [
    E,
    {
      before: false,
      after: true,
    },
  ],
  "@stylistic/comma-style": [
    E,
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
    E,
    "never",
    { enforceForClassMembers: true },
  ],
  "@stylistic/dot-location": [
    E,
    "property",
  ],
  "@stylistic/eol-last": [
    E,
    "always",
  ],
  "@stylistic/function-call-argument-newline": [
    E,
    "always",
  ],
  "@stylistic/function-call-spacing": [
    E,
    "never",
  ],

  // Useless rule. See issue with my comment: https://github.com/eslint-community/eslint-stylistic/issues/290
  "@stylistic/function-paren-newline": [
    E,
    "multiline-arguments",
  ],
  "@stylistic/generator-star-spacing": [
    E,
    {
      before: true,
      after: false,
    },
  ],
  "@stylistic/implicit-arrow-linebreak": [
    E,
    "below",
  ],
  "@stylistic/indent": [
    E,
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
    E,
    2,
  ],
  "@stylistic/key-spacing": [
    E,
    {
      beforeColon: false,
      afterColon: true,
      mode: "strict",
    },
  ],
  "@stylistic/keyword-spacing": [
    E,
    {
      before: true,
      after: true,
      overrides: {},
    },
  ],
  "@stylistic/lines-around-comment": [
    E,
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
    E,
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
    E,
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
    E,
    { max: 1 },
  ],
  "@stylistic/member-delimiter-style": [
    E,
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
    E,
    "always",
  ],
  "@stylistic/new-parens": [
    E,
    "always",
  ],
  "@stylistic/newline-per-chained-call": [
    E,
    { ignoreChainWithDepth: 1 },
  ],
  "@stylistic/no-confusing-arrow": OFF,
  "@stylistic/no-extra-parens": [
    E,
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
  "@stylistic/no-extra-semi": E,
  "@stylistic/no-floating-decimal": E,
  "@stylistic/no-mixed-operators": OFF,
  "@stylistic/no-mixed-spaces-and-tabs": E,
  "@stylistic/no-multi-spaces": [
    E,
    {
      ignoreEOLComments: false,
      exceptions: { Property: false },
      includeTabs: true,
    },
  ],
  "@stylistic/no-multiple-empty-lines": [
    E,
    {
      max: 1,
      maxEOF: 1,
      maxBOF: 0,
    },
  ],
  "@stylistic/no-tabs": [
    E,
    { allowIndentationTabs: false },
  ],
  "@stylistic/no-trailing-spaces": [
    E,
    {
      skipBlankLines: false,
      ignoreComments: false,
    },
  ],
  "@stylistic/no-whitespace-before-property": E,
  "@stylistic/nonblock-statement-body-position": [
    E,
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
    E,
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
    E,
    "always",
    {
      arraysInObjects: true,
      objectsInObjects: true,
    },
  ],
  "@stylistic/object-property-newline": [
    E,
    { allowAllPropertiesOnSameLine: true },
  ],
  "@stylistic/one-var-declaration-per-line": [
    E,
    "always",
  ],
  "@stylistic/operator-linebreak": [
    E,
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
    E,
    {
      blocks: "never",
      classes: "never",
      switches: "never",
    },
    { allowSingleLineBlocks: true },
  ],
  "@stylistic/padding-line-between-statements": [
    E,
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
    E,
    "as-needed",
    {
      keywords: true,
      unnecessary: true,
      numbers: false,
    },
  ],
  "@stylistic/quotes": [
    E,
    "double",
    {
      avoidEscape: true,
      allowTemplateLiterals: true,
    },
  ],
  "@stylistic/rest-spread-spacing": [
    E,
    "never",
  ],
  "@stylistic/semi": [
    E,
    "always",
    {
      omitLastInOneLineBlock: false,
      omitLastInOneLineClassBody: false,
    },
  ],
  "@stylistic/semi-spacing": [
    E,
    {
      before: false,
      after: true,
    },
  ],
  "@stylistic/semi-style": [
    E,
    "last",
  ],
  "@stylistic/space-before-blocks": [
    E,
    {
      functions: "always",
      keywords: "always",
      classes: "always",
    },
  ],
  "@stylistic/space-before-function-paren": [
    E,
    {
      anonymous: "always",
      named: "never",
      asyncArrow: "always",
    },
  ],
  "@stylistic/space-in-parens": [
    E,
    "never",
  ],
  "@stylistic/space-infix-ops": [
    E,
    { int32Hint: true },
  ],
  "@stylistic/space-unary-ops": [
    E,
    {
      words: true,
      nonwords: false,
      overrides: {},
    },
  ],
  "@stylistic/spaced-comment": [
    E,
    "always",
  ],
  "@stylistic/switch-colon-spacing": [
    E,
    {
      after: true,
      before: false,
    },
  ],
  "@stylistic/template-curly-spacing": [
    E,
    "never",
  ],
  "@stylistic/template-tag-spacing": [
    E,
    "never",
  ],
  "@stylistic/type-annotation-spacing": [
    E,
    {
      before: false,
      after: true,
    },
  ],
  "@stylistic/type-generic-spacing": E,
  "@stylistic/type-named-tuple-spacing": E,
  "@stylistic/wrap-iife": [
    E,
    "inside",
    { functionPrototypeMethods: true },
  ],
  "@stylistic/wrap-regex": E,
  "@stylistic/yield-star-spacing": [
    E,
    {
      before: true,
      after: false,
    },
  ],
};

export default StylisticRules;
