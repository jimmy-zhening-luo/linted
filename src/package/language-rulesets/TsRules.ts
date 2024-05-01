import SharedRules from "./SharedRules.js";

const E = "error";
const OFF = "off";
const TsRules: IRules[] = [
  ...SharedRules,

  // https://typescript-eslint.io/rules/?=xdeprecated#rules

  // ESLint Extensions (2-STEP)
  //   Step 1: Disable ESLint base rules
  // [ Reference: https://typescript-eslint.io/rules/?=extension-xdeprecated#rules ]
  {
    "class-methods-use-this": OFF,
    "consistent-return": OFF,
    "default-param-last": OFF,
    "dot-notation": OFF,
    "init-declarations": OFF,
    "max-params": OFF,
    "no-array-constructor": OFF,
    "no-dupe-class-members": OFF,
    "no-empty-function": OFF,
    "no-implied-eval": OFF,
    "no-invalid-this": OFF,
    "no-loop-func": OFF,
    "no-loss-of-precision": OFF,
    "no-magic-numbers": OFF,
    "no-redeclare": OFF,
    "no-restricted-imports": OFF,
    "no-return-await": OFF, // @typescript-eslint/return-await
    "no-shadow": OFF, // TBD
    "no-throw-literal": OFF, // @typescript-eslint/only-throw-error
    "no-unused-expressions": OFF,
    "no-unused-vars": OFF,
    "no-use-before-define": OFF,
    "no-useless-constructor": OFF,
    "prefer-destructuring": OFF,
    "prefer-promise-reject-errors": OFF,
    "require-await": OFF,
  },

  // ESLint Extensions (2-STEP)
  //   Step 2: Enable ESLint extended rules for TypeScript
  // [ Reference: https://typescript-eslint.io/rules/?=extension-xdeprecated#rules ]
  {
    "@typescript-eslint/class-methods-use-this": OFF,
    "@typescript-eslint/consistent-return": OFF,
    "@typescript-eslint/default-param-last": E,
    "@typescript-eslint/dot-notation": [
      E,
      {
        allowKeywords: true,

        // TS-only
        allowPrivateClassPropertyAccess: true,
        allowProtectedClassPropertyAccess: true,
        allowIndexSignaturePropertyAccess: true,
      },
    ],
    "@typescript-eslint/init-declarations": [
      E,
      "always",
    ],
    "@typescript-eslint/max-params": OFF,
    "@typescript-eslint/no-array-constructor": E,
    "@typescript-eslint/no-dupe-class-members": OFF,
    "@typescript-eslint/no-empty-function": OFF,
    "@typescript-eslint/no-implied-eval": E,
    "@typescript-eslint/no-invalid-this": OFF,
    "@typescript-eslint/no-loop-func": E,
    "@typescript-eslint/no-loss-of-precision": E,
    "@typescript-eslint/no-magic-numbers": [
      E,
      {
        ignore: [],
        ignoreArrayIndexes: true,
        ignoreDefaultValues: true,
        ignoreClassFieldInitialValues: true,
        enforceConst: true,
        detectObjects: false,

        // TS-only
        ignoreEnums: true,
        ignoreNumericLiteralTypes: true,
        ignoreReadonlyClassProperties: true,
        ignoreTypeIndexes: true,
      },
    ],
    "@typescript-eslint/no-redeclare": OFF,
    "@typescript-eslint/no-restricted-imports": OFF,
    "@typescript-eslint/no-shadow": OFF, // TBD
    "@typescript-eslint/no-unused-expressions": [
      E,
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
        enforceForJSX: false,
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      E,
      {
        vars: "all",
        args: "all",
        caughtErrors: "all",
        ignoreRestSiblings: false,
        ignoreClassWithStaticInitBlock: false,
      },
    ],
    "@typescript-eslint/no-use-before-define": [
      E,
      {
        functions: true,
        classes: true,
        variables: true,
        allowNamedExports: false,
        enums: true,
        typedefs: true, // questionable
        ignoreTypeReferences: false, // questionable
      },
    ],
    "@typescript-eslint/no-useless-constructor": E,
    "@typescript-eslint/only-throw-error": [
      E,
      {
        allowThrowingAny: false,
        allowThrowingUnknown: false,
      },
    ],
    "@typescript-eslint/prefer-destructuring": [
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
      {
        enforceForRenamedProperties: true,
        enforceForDeclarationWithTypeAnnotation: true,
      },
    ],
    "@typescript-eslint/prefer-promise-reject-errors": [
      E,
      { allowEmptyReject: false },
    ],
    "@typescript-eslint/require-await": E,
    "@typescript-eslint/return-await": [
      E,
      "in-try-catch",
    ],
  },

  // @typescript-eslint ONLY
  // [ Reference: https://typescript-eslint.io/rules/?=xextension-xdeprecated#rules ]
  {
    "@typescript-eslint/adjacent-overload-signatures": E,
    "@typescript-eslint/array-type": [
      E,
      {
        "default": "array-simple",
        readonly: "array",
      },
    ],
    "@typescript-eslint/await-thenable": E,
    "@typescript-eslint/ban-ts-comment": [
      E,
      {
        "ts-check": true,
        "ts-expect-error": true,
        "ts-ignore": true,
        "ts-nocheck": true,
        minimumDescriptionLength: 10,
      },
    ],
    "@typescript-eslint/ban-tslint-comment": E,
    "@typescript-eslint/ban-types": OFF,
    "@typescript-eslint/class-literal-property-style": [
      E,
      "fields",
    ],
    "@typescript-eslint/consistent-generic-constructors": [
      E,
      "type-annotation",
    ],
    "@typescript-eslint/consistent-indexed-object-style": [
      E,
      "record",
    ],
    "@typescript-eslint/consistent-type-assertions": [
      E,
      {
        assertionStyle: "as",
        objectLiteralTypeAssertions: "never",
      },
    ],
    "@typescript-eslint/consistent-type-definitions": [
      E,
      "type",
    ],
    "@typescript-eslint/consistent-type-exports": [
      E,
      { fixMixedExportsWithInlineTypeSpecifier: false },
    ],
    "@typescript-eslint/consistent-type-imports": [
      E,
      {
        disallowTypeAnnotations: true,
        fixStyle: "separate-type-imports",
        prefer: "type-imports",
      },
    ],

    // 4/30 - left off here
    "@typescript-eslint/explicit-function-return-type": E,
    "@typescript-eslint/explicit-member-accessibility": [
      E,
      {
        accessibility: "explicit",
        overrides: {
          properties: "explicit",
          constructors: "no-public",
          accessors: "explicit",
          methods: "explicit",
          parameterProperties: OFF,
        },
      },
    ],
    "@typescript-eslint/explicit-module-boundary-types": [
      E,
      {
        allowArgumentsExplicitlyTypedAsAny: false,
        allowDirectConstAssertionInArrowFunctions: false,
        allowedNames: [],
        allowHigherOrderFunctions: false,
        allowTypedFunctionExpressions: false,
      },
    ],
    "@typescript-eslint/member-ordering": [
      E,
      {
        "default": {
          memberTypes: [
            // Index signature
            "signature",
            "call-signature",

            // Fields
            "public-static-field",
            "protected-static-field",
            "private-static-field",
            "#private-static-field",

            "public-decorated-field",
            "protected-decorated-field",
            "private-decorated-field",

            "public-instance-field",
            "protected-instance-field",
            "private-instance-field",
            "#private-instance-field",

            "public-abstract-field",
            "protected-abstract-field",

            "public-field",
            "protected-field",
            "private-field",
            "#private-field",

            "static-field",
            "instance-field",
            "abstract-field",

            "decorated-field",

            "field",

            // Static initialization
            "static-initialization",

            // Constructors
            "public-constructor",
            "protected-constructor",
            "private-constructor",

            "constructor",

            // Accessors
            "public-static-accessor",
            "protected-static-accessor",
            "private-static-accessor",
            "#private-static-accessor",

            "public-decorated-accessor",
            "protected-decorated-accessor",
            "private-decorated-accessor",

            "public-instance-accessor",
            "protected-instance-accessor",
            "private-instance-accessor",
            "#private-instance-accessor",

            "public-abstract-accessor",
            "protected-abstract-accessor",

            "public-accessor",
            "protected-accessor",
            "private-accessor",
            "#private-accessor",

            "static-accessor",
            "instance-accessor",
            "abstract-accessor",

            "decorated-accessor",

            "accessor",

            // Getters
            "public-static-get",
            "protected-static-get",
            "private-static-get",
            "#private-static-get",

            "public-decorated-get",
            "protected-decorated-get",
            "private-decorated-get",

            "public-instance-get",
            "protected-instance-get",
            "private-instance-get",
            "#private-instance-get",

            "public-abstract-get",
            "protected-abstract-get",

            "public-get",
            "protected-get",
            "private-get",
            "#private-get",

            "static-get",
            "instance-get",
            "abstract-get",

            "decorated-get",

            "get",

            // Setters
            "public-static-set",
            "protected-static-set",
            "private-static-set",
            "#private-static-set",

            "public-decorated-set",
            "protected-decorated-set",
            "private-decorated-set",

            "public-instance-set",
            "protected-instance-set",
            "private-instance-set",
            "#private-instance-set",

            "public-abstract-set",
            "protected-abstract-set",

            "public-set",
            "protected-set",
            "private-set",
            "#private-set",

            "static-set",
            "instance-set",
            "abstract-set",

            "decorated-set",

            "set",

            // Methods
            "public-static-method",
            "protected-static-method",
            "private-static-method",
            "#private-static-method",

            "public-decorated-method",
            "protected-decorated-method",
            "private-decorated-method",

            "public-instance-method",
            "protected-instance-method",
            "private-instance-method",
            "#private-instance-method",

            "public-abstract-method",
            "protected-abstract-method",

            "public-method",
            "protected-method",
            "private-method",
            "#private-method",

            "static-method",
            "instance-method",
            "abstract-method",

            "decorated-method",

            "method",
          ],
          optionalityOrder: "required-first",
          order: "as-written",
        },

      },
    ],
    "@typescript-eslint/method-signature-style": E,

    // TODO: @typescript-eslint/naming-convention
    "@typescript-eslint/no-base-to-string": E,
    "@typescript-eslint/no-confusing-non-null-assertion": E,
    "@typescript-eslint/no-confusing-void-expression": E,
    "@typescript-eslint/no-duplicate-enum-values": E,
    "@typescript-eslint/no-duplicate-type-constituents": E,
    "@typescript-eslint/no-dynamic-delete": E,
    "@typescript-eslint/no-empty-interface": E,
    "@typescript-eslint/no-extra-non-null-assertion": E,
    "@typescript-eslint/no-floating-promises": E,
    "@typescript-eslint/no-for-in-array": E,
    "@typescript-eslint/no-import-type-side-effects": E,
    "@typescript-eslint/no-invalid-void-type": E,
    "@typescript-eslint/no-meaningless-void-operator": E,
    "@typescript-eslint/no-misused-new": E,
    "@typescript-eslint/no-misused-promises": E,
    "@typescript-eslint/no-mixed-enums": E,
    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": E,
    "@typescript-eslint/no-non-null-asserted-optional-chain": E,
    "@typescript-eslint/no-redundant-type-constituents": E,
    "@typescript-eslint/no-require-imports": E,
    "@typescript-eslint/no-this-alias": E,
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": E,
    "@typescript-eslint/no-unnecessary-condition": E,
    "@typescript-eslint/no-unnecessary-qualifier": E,
    "@typescript-eslint/no-unnecessary-type-arguments": E,
    "@typescript-eslint/no-unnecessary-type-assertion": E,
    "@typescript-eslint/no-unnecessary-type-constraint": E,
    "@typescript-eslint/no-unsafe-argument": E,
    "@typescript-eslint/no-unsafe-assignment": E,
    "@typescript-eslint/no-unsafe-call": E,
    "@typescript-eslint/no-unsafe-declaration-merging": E,
    "@typescript-eslint/no-unsafe-enum-comparison": E,
    "@typescript-eslint/no-unsafe-member-access": E,
    "@typescript-eslint/no-unsafe-return": E,
    "@typescript-eslint/no-unsafe-unary-minus": E,
    "@typescript-eslint/no-useless-empty-export": E,
    "@typescript-eslint/no-var-requires": E,
    "@typescript-eslint/non-nullable-type-assertion-style": E,
    "@typescript-eslint/parameter-properties": E,
    "@typescript-eslint/prefer-as-const": E,
    "@typescript-eslint/prefer-for-of": E,
    "@typescript-eslint/prefer-function-type": E,
    "@typescript-eslint/prefer-includes": E,
    "@typescript-eslint/prefer-literal-enum-member": E,
    "@typescript-eslint/prefer-namespace-keyword": E,
    "@typescript-eslint/prefer-nullish-coalescing": E,
    "@typescript-eslint/prefer-optional-chain": E,
    "@typescript-eslint/prefer-readonly": E,

    // maybe: prefer-readonly-parameter-types
    "@typescript-eslint/prefer-reduce-type-parameter": E,
    "@typescript-eslint/prefer-regexp-exec": E,
    "@typescript-eslint/prefer-return-this-type": E,
    "@typescript-eslint/prefer-string-starts-ends-with": E,
    "@typescript-eslint/prefer-ts-expect-error": E,
    "@typescript-eslint/promise-function-async": E,
    "@typescript-eslint/require-array-sort-compare": E,
    "@typescript-eslint/restrict-plus-operands": E,
    "@typescript-eslint/restrict-template-expressions": E,
    "@typescript-eslint/strict-boolean-expressions": E,
    "@typescript-eslint/switch-exhaustiveness-check": E,
    "@typescript-eslint/triple-slash-reference": E,
    "@typescript-eslint/unbound-method": E,
  },
];

export default TsRules;
