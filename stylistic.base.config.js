export default {
  "@stylistic/array-bracket-newline": [
    "error",
    "consistent",
  ],
  "@stylistic/array-bracket-spacing": [
    "error",
    "always",
    {
      singleValue: false,
      objectsInArrays: false,
      arraysInArrays: false,
    },
  ],
  "@stylistic/array-element-newline": [
    "error",
    "consistent",
  ],
  "@stylistic/arrow-parens": [
    "error",
    "as-needed",
  ],
  "@stylistic/arrow-spacing": "error",
  "@stylistic/block-spacing": "error",
  "@stylistic/brace-style": [
    "error",
    "stroustrup",
    {
      allowSingleLine: true,
    },
  ],
  "@stylistic/comma-dangle": [
    "error",
    "always-multiline",
  ],
  "@stylistic/comma-spacing": "error",
  "@stylistic/comma-style": [
    "error",
    "last",
    {
      exceptions: {},
    },
  ],
  "@stylistic/computed-property-spacing": [
    "error",
    "never",
    {
      enforceForClassMembers: true,
    },
  ],
  "@stylistic/dot-location": [
    "error",
    "property",
  ],
  "@stylistic/eol-last": "error",
  "@stylistic/function-call-argument-newline": [
    "error",
    "consistent",
  ],
  "@stylistic/function-call-spacing": "error",
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
  // https://eslint.style/rules/default/indent
  "@stylistic/indent": [
    "error",
    2,
    {
      flatTernaryExpressions: false,
      offsetTernaryExpressions: true,
    },
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
      beforeLineComment: false,
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
          next: "*",
        },
      ],
    },
    {
      exceptAfterSingleLine: false,
    },
  ],
  "@stylistic/max-len": [
    "error",
    {
      code: 80,
      tabWidth: 2,
      ignoreComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,

    },
  ],
  "@stylistic/max-statements-per-line": [
    "error",
    {
      max: 1,
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
    {
      ignoreChainWithDepth: 1,
    },
  ],
  "@stylistic/no-extra-parens": "error",
  "@stylistic/no-extra-semi": "error",
  "@stylistic/no-floating-decimal": "error",
  "@stylistic/no-mixed-spaces-and-tabs": "error",
  "@stylistic/no-multi-spaces": "error",
  "@stylistic/no-multiple-empty-lines": [
    "error",
    {
      max: 1,
      maxEOF: 1,
      maxBOF: 0,
    },
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
    "any",
  ],
  "@stylistic/object-curly-newline": [
    "error",
    {
      ObjectExpression: {
        multiline: true,
        minProperties: 2,
        consistent: true,
      },
      ObjectPattern: {
        multiline: true,
        minProperties: 2,
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
    "error",
    "always",
    {
      arraysInObjects: true,
      objectsInObjects: true,
    },
  ],
  "@stylistic/object-property-newline": [
    "error",
    {
      allowAllPropertiesOnSameLine: false,
    },
  ],
  "@stylistic/operator-linebreak": [
    "error",
    "before",
  ],
  "@stylistic/padded-blocks": [
    "error",
    "never",
    {
      allowSingleLineBlocks: true,
    },
  ],
  // https://eslint.style/rules/default/padding-line-between-statements
  "@stylistic/padding-line-between-statements": [
    "error",
    {
      blankLine: "always",
      prev: [
        "class",
        "for",
        "while",
        "try",
        "block",
      ],
      next: "*",
    },
    {
      blankLine: "always",
      prev: "*",
      next: [
        "return",
        "break",
        "continue",
      ],
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
      blankLine: "any",
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
      prev: ["import"],
      next: "*",
    },
    {
      blankLine: "any",
      prev: ["import"],
      next: ["import"],
    },
    {
      blankLine: "always",
      prev: "*",
      next: ["export"],
    },
    {
      blankLine: "any",
      prev: ["export"],
      next: ["export"],
    },
    {
      blankLine: "always",
      prev: "directive",
      next: "*",
    },
    {
      blankLine: "any",
      prev: "directive",
      next: "directive",
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
  "@stylistic/semi-spacing": "error",
  "@stylistic/semi-style": "error",
  "@stylistic/space-before-blocks": "error",
  "@stylistic/space-before-function-paren": [
    "error",
    {
      anonymous: "always",
      named: "never",
      asyncArrow: "always",
    },
  ],
  "@stylistic/space-in-parens": "error",
  "@stylistic/space-infix-ops": [
    "error",
    {
      int32Hint: true,
    },
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
  "@stylistic/switch-colon-spacing": "error",
  "@stylistic/template-tag-spacing": [
    "error",
    "always",
  ],
  "@stylistic/wrap-iife": [
    "error",
    "inside",
    {
      functionPrototypeMethods: true,
    },
  ],
  "@stylistic/wrap-regex": "error",
  "@stylistic/yield-star-spacing": "error",
};
