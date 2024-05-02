const E = "error";
const OOOFF = "off";
const JsRules: IRules = {

  // Problems
  // [ https://eslint.org/docs/latest/rules/#possible-problems ]
  "array-callback-return": [
    E,
    {
      allowImplicit: false,
      checkForEach: true,
      allowVoid: true,
    },
  ],
  "constructor-super": E, // tsc
  "for-direction": E,
  "getter-return": [
    E,
    { allowImplicit: false },
  ], // tsc
  "no-async-promise-executor": E,
  "no-await-in-loop": E,
  "no-class-assign": E,
  "no-compare-neg-zero": E,
  "no-cond-assign": [
    E,
    "always",
  ],
  "no-const-assign": E, // tsc
  "no-constant-binary-expression": E,
  "no-constant-condition": [
    E,
    { checkLoops: true },
  ],
  "no-constructor-return": E,
  "no-control-regex": E,
  "no-debugger": E,
  "no-dupe-args": E, // tsc
  "no-dupe-class-members": E, // tsc -- TSLint:OFF: tsc
  "no-dupe-else-if": E,
  "no-dupe-keys": E, // tsc
  "no-duplicate-case": E,
  "no-duplicate-imports": [
    E,
    { includeExports: true },
  ],
  "no-empty-character-class": E,
  "no-empty-pattern": [
    E,
    { allowObjectPatternsAsParameters: true },
  ],
  "no-ex-assign": E,
  "no-fallthrough": OOOFF, // buggy
  "no-func-assign": E, // tsc
  "no-import-assign": E, // tsc (except Object.assign())
  "no-inner-declarations": [
    E,
    "both",
  ],
  "no-invalid-regexp": [
    E,
    { allowConstructorFlags: [] },
  ],
  "no-irregular-whitespace": [
    E,
    {
      skipStrings: true,
      skipComments: true,
      skipRegExps: true,
      skipTemplates: true,
      skipJSXText: true,
    },
  ],
  "no-loss-of-precision": E, // TSLint
  "no-misleading-character-class": E,
  "no-new-native-nonconstructor": E,
  "no-obj-calls": E, // tsc
  "no-promise-executor-return": [
    E,
    { allowVoid: true },
  ],
  "no-prototype-builtins": E,
  "no-self-assign": [
    E,
    { props: true },
  ],
  "no-self-compare": E,
  "no-setter-return": E, // tsc
  "no-sparse-arrays": E,
  "no-template-curly-in-string": E,
  "no-this-before-super": E, // tsc
  "no-undef": E, // tsc
  "no-unexpected-multiline": E,
  "no-unmodified-loop-condition": E,
  "no-unreachable": E, // tsc
  "no-unreachable-loop": [
    E,
    { ignore: [] }, // WhileStatement, DoWhileStatement, ForStatement, ForInStatement, ForOfStatement
  ],
  "no-unsafe-finally": E,
  "no-unsafe-negation": [
    E,
    { enforceForOrderingRelations: true },
  ], // tsc
  "no-unsafe-optional-chaining": [
    E,
    { disallowArithmeticOperators: true },
  ],
  "no-unused-private-class-members": E,
  "no-unused-vars": [
    E,
    {
      vars: "all",
      args: "all",
      caughtErrors: "all",
      ignoreRestSiblings: false,
    },
  ], // TSLint
  "no-use-before-define": [
    E,
    {
      functions: true,
      classes: true,
      variables: true,
      allowNamedExports: false,
    },
  ], // TSLint
  "no-useless-backreference": E,
  "require-atomic-updates": [
    E,
    { allowProperties: false },
  ],
  "use-isnan": [
    E,
    {
      enforceForSwitchCase: true,
      enforceForIndexOf: true,
    },
  ],
  "valid-typeof": [
    E,
    { requireStringLiterals: true },
  ],

  // Suggestions
  // [ https://eslint.org/docs/latest/rules/#suggestions ]
  "accessor-pairs": [
    E,
    {
      setWithoutGet: true,
      getWithoutSet: false,
      enforceForClassMembers: true,
    },
  ],
  "arrow-body-style": [
    E,
    "as-needed",
    { requireReturnForObjectLiteral: true },
  ],
  "block-scoped-var": E,
  camelcase: OOOFF, // preference
  "capitalized-comments": OOOFF, // preference
  "class-methods-use-this": OOOFF, // preference -- TSLint
  complexity: OOOFF, // preference
  "consistent-return": [
    E,
    { treatUndefinedAsUnspecified: false },
  ], // TSLint:OFF: tsconfig: noImplicitReturns
  "consistent-this": [E],
  curly: [
    E,
    "multi",
  ],
  "default-case": OOOFF, // preference: don't care
  "default-case-last": E,
  "default-param-last": E, // TSLint
  "dot-notation": [
    E,
    { allowKeywords: true },
  ], // TSLint
  eqeqeq: [
    E,
    "always",
  ],
  "func-name-matching": OOOFF, // preference
  "func-names": OOOFF, // preference
  "func-style": OOOFF, // preference
  "grouped-accessor-pairs": [
    E,
    "getBeforeSet",
  ],
  "guard-for-in": E,
  "id-denylist": OOOFF, // preference
  "id-length": OOOFF, // preference
  "id-match": OOOFF, // preference
  "init-declarations": [
    E,
    "always",
  ], // TSLint
  "logical-assignment-operators": [
    E,
    "always",
    { enforceForIfStatements: true },
  ],
  "max-classes-per-file": OOOFF, // preference
  "max-depth": OOOFF, // preference
  "max-lines": OOOFF, // preference
  "max-lines-per-function": OOOFF, // preference
  "max-nested-callbacks": OOOFF, // preference
  "max-params": OOOFF, // preference -- TSLint:OFF: preference
  "max-statements": OOOFF, // preference
  "multiline-comment-style": OOOFF, // preference
  "new-cap": OOOFF, // preference -- breaks Scriptable
  "no-alert": E,
  "no-array-constructor": E, // TSLint
  "no-bitwise": [
    E,
    {
      allow: [],
      int32Hint: true,
    },
  ],
  "no-caller": E,
  "no-case-declarations": E,
  "no-console": OOOFF, // preference -- breaks Node.js
  "no-continue": E,
  "no-delete-var": E,
  "no-div-regex": E,
  "no-else-return": OOOFF, // preference
  "no-empty": [
    E,
    { allowEmptyCatch: false },
  ],
  "no-empty-function": [
    E,
    { allow: ["constructors"] }, /**  functions, arrowFunctions, generatorFunctions, methods, generatorMethods, getters, setters, constructors, asyncFunctions, asyncMethods; TS-ONLY: private-constructors, protected-constructors, decoratedFunctions, overrideMethods  */
  ], // TSLint
  "no-empty-static-block": E,
  "no-eq-null": E,
  "no-eval": [
    E,
    { allowIndirect: false },
  ],
  "no-extend-native": [
    E,
    { exceptions: [] },
  ],
  "no-extra-bind": E,
  "no-extra-boolean-cast": [
    E,
    { enforceForLogicalOperands: true },
  ],
  "no-extra-label": E,
  "no-global-assign": [
    E,
    { exceptions: [] },
  ],
  "no-implicit-coercion": [
    E,
    {
      "boolean": true,
      number: true,
      string: true,
      disallowTemplateShorthand: true,
      allow: [], /**  "~" | "!!" | "+" | "- -" | "-" | "*"  */
    },
  ],
  "no-implicit-globals": OOOFF, // investigate (breaks Scriptable? breaks Sveltekit?)
  "no-implied-eval": E, // TSLint
  "no-inline-comments": OOOFF, // preference
  "no-invalid-this": [
    E,
    { capIsConstructor: false },
  ], // TSLint:OFF: tsconfig: { strict, noImplicitThis }
  "no-iterator": E,
  "no-label-var": E,
  "no-lone-blocks": E,
  "no-lonely-if": OOOFF, // preference
  "no-loop-func": E, // TSLint
  "no-magic-numbers": [
    E,
    {
      ignore: [],
      ignoreArrayIndexes: true,
      ignoreDefaultValues: true,
      ignoreClassFieldInitialValues: true,
      enforceConst: true,
      detectObjects: false,
    },
  ], // TSLint
  "no-multi-assign": [
    E,
    { ignoreNonDeclaration: false },
  ],
  "no-multi-str": E,
  "no-negated-condition": OOOFF, // preference
  "no-nested-ternary": OOOFF, // preference
  "no-new": E,
  "no-new-func": E,
  "no-new-wrappers": E,
  "no-nonoctal-decimal-escape": E,
  "no-object-constructor": E,
  "no-octal": E,
  "no-octal-escape": E,
  "no-param-reassign": [
    E,
    {
      props: true,
      ignorePropertyModificationsFor: [],
      ignorePropertyModificationsForRegex: [],
    },
  ],
  "no-plusplus": [
    E,
    { allowForLoopAfterthoughts: true },
  ],
  "no-proto": E,
  "no-redeclare": [
    E,
    { builtinGlobals: true },
  ], // TSLint:OFF: tsc (let, const, -var)
  "no-regex-spaces": OOOFF, // preference
  "no-restricted-exports": OOOFF, // preference
  "no-restricted-globals": OOOFF, // preference
  "no-restricted-imports": OOOFF, // preference -- TSLint:OFF: preference
  "no-restricted-properties": OOOFF, // preference
  "no-restricted-syntax": OOOFF, // preference
  "no-return-assign": [
    E,
    "always", // "always" | "except-parens" (disallow assignments unless enclosed in parens)
  ],
  "no-script-url": E,
  "no-sequences": [
    E,
    { allowInParentheses: true },
  ],
  "no-shadow": OOOFF, // investigate -- TSLint:OFF: investigate
  "no-shadow-restricted-names": E,
  "no-ternary": OOOFF, // preference
  "no-throw-literal": E, // TSLint
  "no-undef-init": E,
  "no-undefined": OOOFF, // investigate (breaks Scriptable? breaks Sveltekit?)
  "no-underscore-dangle": OOOFF, // preference
  "no-unneeded-ternary": [
    E,
    { defaultAssignment: false },
  ],
  "no-unused-expressions": [
    E,
    {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: true,
      enforceForJSX: false,
    },
  ], // TSLint
  "no-unused-labels": E,
  "no-useless-call": E,
  "no-useless-catch": E,
  "no-useless-computed-key": [
    E,
    { enforceForClassMembers: true },
  ],
  "no-useless-concat": E,
  "no-useless-constructor": E, // TSLint
  "no-useless-escape": E,
  "no-useless-rename": [
    E,
    {
      ignoreImport: false,
      ignoreExport: false,
      ignoreDestructuring: false,
    },
  ],
  "no-useless-return": E,
  "no-var": E,
  "no-void": [
    E,
    { allowAsStatement: true },
  ],
  "no-warning-comments": OOOFF, // preference
  "no-with": E,
  "object-shorthand": [
    E,
    "always",
    {
      avoidQuotes: true,
      ignoreConstructors: false,
      avoidExplicitReturnArrows: false,
    },
  ],
  "one-var": [
    E,
    {
      "var": "never",
      let: "never",
      "const": "never",
      separateRequires: true,
    },
  ],
  "operator-assignment": [
    E,
    "always",
  ],
  "prefer-arrow-callback": [
    E,
    {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    },
  ],
  "prefer-const": [
    E,
    {
      destructuring: "all",
      ignoreReadBeforeAssign: false,
    },
  ],
  "prefer-destructuring": [
    E,
    {
      VariableDeclarator: {
        array: true,
        object: true,
      },
      AssignmentExpression: {
        array: true,
        object: true,
      },
    },
    { enforceForRenamedProperties: true },
  ], // TSLint
  "prefer-exponentiation-operator": E,
  "prefer-named-capture-group": E,
  "prefer-numeric-literals": E,
  "prefer-object-has-own": E,
  "prefer-object-spread": E,
  "prefer-promise-reject-errors": [
    E,
    { allowEmptyReject: false },
  ],
  "prefer-regex-literals": [
    E,
    { disallowRedundantWrapping: true },
  ], // TSLint
  "prefer-rest-params": E,
  "prefer-spread": E,
  "prefer-template": E,
  radix: [
    E,
    "as-needed",
  ],
  "require-await": E, // TSLint
  "require-unicode-regexp": E,
  "require-yield": E,
  "sort-imports": OOOFF, // preference
  "sort-keys": OOOFF, // preference
  "sort-vars": OOOFF, // preference
  strict: OOOFF, // preference
  "symbol-description": OOOFF, // preference
  "vars-on-top": E,
  yoda: [
    E,
    "never",
    {
      exceptRange: false,
      onlyEquality: false,
    },
  ],

  // Layout & Formatting
  // [ https://eslint.org/docs/latest/rules/#layout--formatting ]
  "line-comment-position": OOOFF, // preference
  "unicode-bom": OOOFF, // preference: don't care
};

export default JsRules;
