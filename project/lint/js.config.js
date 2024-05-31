import stylistic from "./stylistic.config.js";

const ERROR = "error";
const O = "off";

export default [

  // Stylistic
  stylistic,

  // Vanilla ESLint
  {
    "array-callback-return": [
      ERROR,
      {
        allowImplicit: false,
        checkForEach: true,
        allowVoid: true,
      },
    ],
    "constructor-super": ERROR, // tsc
    "for-direction": ERROR,
    "getter-return": [
      ERROR,
      { allowImplicit: false },
    ], // tsc
    "no-async-promise-executor": ERROR,
    "no-await-in-loop": ERROR,
    "no-class-assign": ERROR,
    "no-compare-neg-zero": ERROR,
    "no-cond-assign": [
      ERROR,
      "always",
    ],
    "no-const-assign": ERROR, // tsc
    "no-constant-binary-expression": ERROR,
    "no-constant-condition": [
      ERROR,
      { checkLoops: true },
    ],
    "no-constructor-return": ERROR,
    "no-control-regex": ERROR,
    "no-debugger": ERROR,
    "no-dupe-args": ERROR, // tsc
    "no-dupe-class-members": ERROR, // tsc -- TSLint:OFF: tsc
    "no-dupe-else-if": ERROR,
    "no-dupe-keys": ERROR, // tsc
    "no-duplicate-case": ERROR,
    "no-duplicate-imports": O, // buggy, breaks separation of TS type-only imports from value imports
    "no-empty-character-class": ERROR,
    "no-empty-pattern": [
      ERROR,
      { allowObjectPatternsAsParameters: true },
    ],
    "no-ex-assign": ERROR,
    "no-fallthrough": O, // buggy
    "no-func-assign": ERROR, // tsc
    "no-import-assign": ERROR, // tsc (except Object.assign())
    "no-inner-declarations": [
      ERROR,
      "both",
    ],
    "no-invalid-regexp": [
      ERROR,
      { allowConstructorFlags: [] },
    ],
    "no-irregular-whitespace": [
      ERROR,
      {
        skipStrings: true,
        skipComments: true,
        skipRegExps: true,
        skipTemplates: true,
        skipJSXText: true,
      },
    ],
    "no-loss-of-precision": ERROR, // TSLint
    "no-misleading-character-class": ERROR,
    "no-new-native-nonconstructor": ERROR,
    "no-obj-calls": ERROR, // tsc
    "no-promise-executor-return": [
      ERROR,
      { allowVoid: true },
    ],
    "no-prototype-builtins": ERROR,
    "no-self-assign": [
      ERROR,
      { props: true },
    ],
    "no-self-compare": ERROR,
    "no-setter-return": ERROR, // tsc
    "no-sparse-arrays": ERROR,
    "no-template-curly-in-string": ERROR,
    "no-this-before-super": ERROR, // tsc
    "no-undef": ERROR, // tsc
    "no-unexpected-multiline": ERROR,
    "no-unmodified-loop-condition": ERROR,
    "no-unreachable": ERROR, // tsc
    "no-unreachable-loop": [
      ERROR,
      { ignore: [] }, // WhileStatement, DoWhileStatement, ForStatement, ForInStatement, ForOfStatement
    ],
    "no-unsafe-finally": ERROR,
    "no-unsafe-negation": [
      ERROR,
      { enforceForOrderingRelations: true },
    ], // tsc
    "no-unsafe-optional-chaining": [
      ERROR,
      { disallowArithmeticOperators: true },
    ],
    "no-unused-private-class-members": ERROR,
    "no-unused-vars": [
      ERROR,
      {
        vars: "all",
        args: "all",
        caughtErrors: "all",
        ignoreRestSiblings: false,
      },
    ], // TSLint
    "no-use-before-define": [
      ERROR,
      {
        functions: true,
        classes: true,
        variables: true,
        allowNamedExports: false,
      },
    ], // TSLint
    "no-useless-backreference": ERROR,
    "require-atomic-updates": [
      ERROR,
      { allowProperties: false },
    ],
    "use-isnan": [
      ERROR,
      {
        enforceForSwitchCase: true,
        enforceForIndexOf: true,
      },
    ],
    "valid-typeof": [
      ERROR,
      { requireStringLiterals: true },
    ],
    "accessor-pairs": [
      ERROR,
      {
        setWithoutGet: true,
        getWithoutSet: false,
        enforceForClassMembers: true,
      },
    ],
    "arrow-body-style": [
      ERROR,
      "as-needed",
      { requireReturnForObjectLiteral: true },
    ],
    "block-scoped-var": ERROR,
    camelcase: O, // preference
    "capitalized-comments": O, // preference
    "class-methods-use-this": O, // preference -- TSLint
    complexity: O, // preference
    "consistent-return": [
      ERROR,
      { treatUndefinedAsUnspecified: false },
    ], // tsc -- TSLint:OFF: tsconfig: noImplicitReturns
    "consistent-this": [ERROR],
    curly: [
      ERROR,
      "multi",
    ],
    "default-case": O, // preference: don't care
    "default-case-last": ERROR,
    "default-param-last": ERROR, // TSLint
    "dot-notation": [
      ERROR,
      { allowKeywords: true },
    ], // TSLint
    eqeqeq: [
      ERROR,
      "always",
    ],
    "func-name-matching": O, // preference
    "func-names": O, // preference
    "func-style": O, // preference
    "grouped-accessor-pairs": O, // preference -- buggy behavior (requires adjacency, not as described in documentation)
    "guard-for-in": ERROR,
    "id-denylist": O, // preference
    "id-length": O, // preference
    "id-match": O, // preference
    "init-declarations": [
      ERROR,
      "always",
    ], // TSLint
    "logical-assignment-operators": [
      ERROR,
      "always",
      { enforceForIfStatements: true },
    ],
    "max-classes-per-file": O, // preference
    "max-depth": O, // preference
    "max-lines": O, // preference
    "max-lines-per-function": O, // preference
    "max-nested-callbacks": O, // preference
    "max-params": O, // preference -- TSLint:OFF: preference
    "max-statements": O, // preference
    "multiline-comment-style": O, // preference
    "new-cap": O, // preference -- breaks Scriptable
    "no-alert": ERROR,
    "no-array-constructor": ERROR, // TSLint
    "no-bitwise": [
      ERROR,
      {
        allow: [],
        int32Hint: true,
      },
    ],
    "no-caller": ERROR,
    "no-case-declarations": ERROR,
    "no-console": O, // preference -- breaks Node.js
    "no-continue": ERROR,
    "no-delete-var": ERROR,
    "no-div-regex": ERROR,
    "no-else-return": O, // preference
    "no-empty": [
      ERROR,
      { allowEmptyCatch: false },
    ],
    "no-empty-function": [
      ERROR,
      { allow: ["constructors"] }, /**  functions, arrowFunctions, generatorFunctions, methods, generatorMethods, getters, setters, constructors, asyncFunctions, asyncMethods; TS-ONLY: private-constructors, protected-constructors, decoratedFunctions, overrideMethods  */
    ], // TSLint
    "no-empty-static-block": ERROR,
    "no-eq-null": ERROR,
    "no-eval": [
      ERROR,
      { allowIndirect: false },
    ],
    "no-extend-native": [
      ERROR,
      { exceptions: [] },
    ],
    "no-extra-bind": ERROR,
    "no-extra-boolean-cast": [
      ERROR,
      { enforceForLogicalOperands: true },
    ],
    "no-extra-label": ERROR,
    "no-global-assign": [
      ERROR,
      { exceptions: [] },
    ],
    "no-implicit-coercion": [
      ERROR,
      {
        "boolean": true,
        number: true,
        string: true,
        disallowTemplateShorthand: true,
        allow: [], /**  "~" | "!!" | "+" | "- -" | "-" | "*"  */
      },
    ],
    "no-implicit-globals": O, // investigate (breaks Scriptable? breaks Sveltekit?)
    "no-implied-eval": ERROR, // TSLint
    "no-inline-comments": O, // preference
    "no-invalid-this": [
      ERROR,
      { capIsConstructor: false },
    ], // TSLint:OFF: tsconfig: { strict, noImplicitThis }
    "no-iterator": ERROR,
    "no-label-var": ERROR,
    "no-lone-blocks": ERROR,
    "no-lonely-if": O, // preference
    "no-loop-func": ERROR, // TSLint
    "no-magic-numbers": [
      O,
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
      ERROR,
      { ignoreNonDeclaration: false },
    ],
    "no-multi-str": ERROR,
    "no-negated-condition": O, // preference
    "no-nested-ternary": O, // preference
    "no-new": ERROR,
    "no-new-func": ERROR,
    "no-new-wrappers": ERROR,
    "no-nonoctal-decimal-escape": ERROR,
    "no-object-constructor": ERROR,
    "no-octal": ERROR,
    "no-octal-escape": ERROR,
    "no-param-reassign": [
      ERROR,
      {
        props: true,
        ignorePropertyModificationsFor: [],
        ignorePropertyModificationsForRegex: [],
      },
    ],
    "no-plusplus": [
      ERROR,
      { allowForLoopAfterthoughts: true },
    ],
    "no-proto": ERROR,
    "no-redeclare": [
      ERROR,
      { builtinGlobals: true },
    ], // tsc -- TSLint:OFF: tsc (let, const, -var)
    "no-regex-spaces": O, // preference
    "no-restricted-exports": O, // preference
    "no-restricted-globals": O, // preference
    "no-restricted-imports": O, // preference -- TSLint:OFF: preference
    "no-restricted-properties": O, // preference
    "no-restricted-syntax": O, // preference
    "no-return-assign": [
      ERROR,
      "always", // "always" | "except-parens" (disallow assignments unless enclosed in parens)
    ],
    "no-script-url": ERROR,
    "no-sequences": [
      ERROR,
      { allowInParentheses: true },
    ],
    "no-shadow": O, // investigate -- TSLint:OFF: investigate
    "no-shadow-restricted-names": ERROR,
    "no-ternary": O, // preference
    "no-throw-literal": ERROR, // TSLint
    "no-undef-init": ERROR,
    "no-undefined": O, // investigate (breaks Scriptable? breaks Sveltekit?)
    "no-underscore-dangle": O, // preference
    "no-unneeded-ternary": [
      ERROR,
      { defaultAssignment: false },
    ],
    "no-unused-expressions": [
      ERROR,
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
        enforceForJSX: false,
      },
    ], // TSLint
    "no-unused-labels": ERROR,
    "no-useless-call": ERROR,
    "no-useless-catch": ERROR,
    "no-useless-computed-key": [
      ERROR,
      { enforceForClassMembers: true },
    ],
    "no-useless-concat": ERROR,
    "no-useless-constructor": ERROR, // TSLint
    "no-useless-escape": ERROR,
    "no-useless-rename": [
      ERROR,
      {
        ignoreImport: false,
        ignoreExport: false,
        ignoreDestructuring: false,
      },
    ],
    "no-useless-return": ERROR,
    "no-var": ERROR,
    "no-void": [
      ERROR,
      { allowAsStatement: true },
    ],
    "no-warning-comments": O, // preference
    "no-with": ERROR,
    "object-shorthand": [
      ERROR,
      "always",
      {
        avoidQuotes: true,
        ignoreConstructors: false,
        avoidExplicitReturnArrows: false,
      },
    ],
    "one-var": [
      ERROR,
      {
        "var": "never",
        let: "never",
        "const": "never",
        separateRequires: true,
      },
    ],
    "operator-assignment": [
      ERROR,
      "always",
    ],
    "prefer-arrow-callback": [
      ERROR,
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],
    "prefer-const": [
      ERROR,
      {
        destructuring: "all",
        ignoreReadBeforeAssign: false,
      },
    ],
    "prefer-destructuring": [
      ERROR,
      {
        VariableDeclarator: {
          array: true,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
      { enforceForRenamedProperties: true },
    ], // TSLint
    "prefer-exponentiation-operator": ERROR,
    "prefer-named-capture-group": ERROR,
    "prefer-numeric-literals": ERROR,
    "prefer-object-has-own": ERROR,
    "prefer-object-spread": ERROR,
    "prefer-promise-reject-errors": [
      ERROR,
      { allowEmptyReject: false },
    ],
    "prefer-regex-literals": [
      ERROR,
      { disallowRedundantWrapping: true },
    ], // TSLint
    "prefer-rest-params": ERROR,
    "prefer-spread": ERROR,
    "prefer-template": ERROR,
    radix: [
      ERROR,
      "as-needed",
    ],
    "require-await": ERROR, // TSLint
    "require-unicode-regexp": ERROR,
    "require-yield": ERROR,
    "sort-imports": O, // preference
    "sort-keys": O, // preference
    "sort-vars": O, // preference
    strict: O, // preference
    "symbol-description": O, // preference
    "vars-on-top": ERROR,
    yoda: [
      ERROR,
      "never",
      {
        exceptRange: false,
        onlyEquality: false,
      },
    ],
    "line-comment-position": O, // preference
    "unicode-bom": O, // preference: don't care
  },
];
