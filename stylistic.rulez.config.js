export default {
  "@stylistic/array-bracket-newline": [
    "error",
    {
      multiline: true,
      minItems: null,
    },
  ],
  "@stylistic/array-bracket-spacing": [
    "error",
    "never",
    {
      singleValue: false,
      objectsInArrays: false,
      arraysInArrays: false,
    },
  ],
  "@stylistic/array-element-newline": [
    "error",
    {
      ArrayExpression: "always",
      ArrayPattern: "always",
    },
  ],
  "@stylistic/arrow-parens": [
    "error",
    "as-needed",
    { requireForBlockBody: false },
  ],
  "@stylistic/arrow-spacing": [
    "error",
    {
      before: true,
      after: true,
    },
  ],
  "@stylistic/block-spacing": [
    "error",
    "always",
  ],
  "@stylistic/brace-style": [
    "error",
    "stroustrup",
    { allowSingleLine: true },
  ],
  "@stylistic/comma-dangle": [
    "error",
    "always-multiline",
  ],
  "@stylistic/comma-spacing": [
    "error",
    {
      before: false,
      after: true,
    },
  ],
  "@stylistic/comma-style": [
    "error",
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
    "error",
    "never",
    { enforceForClassMembers: true },
  ],
  "@stylistic/dot-location": [
    "error",
    "property",
  ],
  "@stylistic/eol-last": [
    "error",
    "always",
  ],
  "@stylistic/function-call-argument-newline": [
    "error",
    "always",
  ],
  "@stylistic/function-call-spacing": [
    "error",
    "never",
  ],
  "@stylistic/function-paren-newline": [
    "error",
    "multiline-arguments",
  ],
  "@stylistic/generator-star-spacing": [
    "error",
    {
      before: true,
      after: false,
    },
  ],
  "@stylistic/implicit-arrow-linebreak": [
    "error",
    "below",
  ],
  "@stylistic/indent": [
    "error",
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
    "error",
    2,
  ],
  "@stylistic/key-spacing": [
    "error",
    {
      beforeColon: false,
      afterColon: true,
      mode: "strict",
    },
  ],
  "@stylistic/keyword-spacing": [
    "error",
    {
      before: true,
      after: true,
      overrides: {},
    },
  ],
  "@stylistic/lines-around-comment": [
    "error",
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
    "error",
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
          next: "method",
        },
        {
          blankLine: "always",
          prev: "method",
          next: "field",
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
    "error",
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
    "error",
    { max: 1 },
  ],
  "@stylistic/member-delimiter-style": [
    "error",
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
    "error",
    "always",
  ],
  "@stylistic/new-parens": [
    "error",
    "always",
  ],
  "@stylistic/newline-per-chained-call": [
    "error",
    { ignoreChainWithDepth: 1 },
  ],
  "@stylistic/no-confusing-arrow": "off",
  "@stylistic/no-extra-parens": [
    "error",
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
  "@stylistic/no-extra-semi": "error",
  "@stylistic/no-floating-decimal": "error",
  "@stylistic/no-mixed-operators": "off",
  "@stylistic/no-mixed-spaces-and-tabs": "error",
  "@stylistic/no-multi-spaces": [
    "error",
    {
      ignoreEOLComments: false,
      exceptions: { Property: false },
      includeTabs: true,
    },
  ],
  "@stylistic/no-multiple-empty-lines": [
    "error",
    {
      max: 1,
      maxEOF: 1,
      maxBOF: 0,
    },
  ],
  "@stylistic/no-tabs": [
    "error",
    { allowIndentationTabs: false },
  ],
  "@stylistic/no-trailing-spaces": [
    "error",
    {
      skipBlankLines: false,
      ignoreComments: false,
    },
  ],
  "@stylistic/no-whitespace-before-property": "error",
  "@stylistic/nonblock-statement-body-position": [
    "error",
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
    "error",
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
    "error",
    "always",
    {
      arraysInObjects: true,
      objectsInObjects: true,
    },
  ],
  "@stylistic/object-property-newline": [
    "error",
    { allowAllPropertiesOnSameLine: true },
  ],
  "@stylistic/one-var-declaration-per-line": [
    "error",
    "always",
  ],
  "@stylistic/operator-linebreak": [
    "error",
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
    "error",
    {
      blocks: "never",
      classes: "never",
      switches: "never",
    },
    { allowSingleLineBlocks: true },
  ],
  "@stylistic/padding-line-between-statements": [
    "error",
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
    "error",
    "as-needed",
    {
      keywords: true,
      unnecessary: true,
      numbers: false,
    },
  ],
  "@stylistic/quotes": [
    "error",
    "double",
    {
      avoidEscape: true,
      allowTemplateLiterals: true,
    },
  ],
  "@stylistic/rest-spread-spacing": [
    "error",
    "never",
  ],
  "@stylistic/semi": [
    "error",
    "always",
    {
      omitLastInOneLineBlock: false,
      omitLastInOneLineClassBody: false,
    },
  ],
  "@stylistic/semi-spacing": [
    "error",
    {
      before: false,
      after: true,
    },
  ],
  "@stylistic/semi-style": [
    "error",
    "last",
  ],
  "@stylistic/space-before-blocks": [
    "error",
    {
      functions: "always",
      keywords: "always",
      classes: "always",
    },
  ],
  "@stylistic/space-before-function-paren": [
    "error",
    {
      anonymous: "always",
      named: "never",
      asyncArrow: "always",
    },
  ],
  "@stylistic/space-in-parens": [
    "error",
    "never",
  ],
  "@stylistic/space-infix-ops": [
    "error",
    { int32Hint: true },
  ],
  "@stylistic/space-unary-ops": [
    "error",
    {
      words: true,
      nonwords: false,
      overrides: {},
    },
  ],
  "@stylistic/spaced-comment": [
    "error",
    "always",
  ],
  "@stylistic/switch-colon-spacing": [
    "error",
    {
      after: true,
      before: false,
    },
  ],
  "@stylistic/template-curly-spacing": [
    "error",
    "never",
  ],
  "@stylistic/template-tag-spacing": [
    "error",
    "never",
  ],
  "@stylistic/type-annotation-spacing": [
    "error",
    {
      before: false,
      after: true,
    },
  ],
  "@stylistic/type-generic-spacing": "error",
  "@stylistic/type-named-tuple-spacing": "error",
  "@stylistic/wrap-iife": [
    "error",
    "inside",
    { functionPrototypeMethods: true },
  ],
  "@stylistic/wrap-regex": "error",
  "@stylistic/yield-star-spacing": [
    "error",
    {
      before: true,
      after: false,
    },
  ],
};
