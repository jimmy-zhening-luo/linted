import type IRuleSets from "./rulesets/IRuleSets.js";
import SharedRuleSets from "./SharedRuleSets.js";

const TsRuleSets: IRuleSets = {
  // Shared (Stylistic overrides)
  ...SharedRuleSets,

  // TS Overrides: TSLint Plugin: Extensions of ESLint base rules
  // [ Reference: https://typescript-eslint.io/rules/?=extension-xformatting-xdeprecated#rules ]
  // Step 1/2: Disable ESLint base rules
  functionalOverride_JsExtension_DisableBase: {
    // Maybe: https://typescript-eslint.io/rules/class-methods-use-this/
    "init-declarations": "off",
    "no-array-constructor": "off",
    "no-implied-eval": "off",
    "no-loop-func": "off",
    "no-loss-of-precision": "off",
    "no-magic-numbers": "off",
    "no-throw-literal": "off",
    "no-unused-expressions": "off",
    "no-unused-vars": "off",
    "no-useless-constructor": "off",
    "require-await": "off",
    "return-await": "off",
  },

  // Step 2/2: Enable ESLint extended rules for TypeScript
  functionalOverride_JsExtension_EnableExtended: {
    // Maybe: https://typescript-eslint.io/rules/class-methods-use-this/
    "@typescript-eslint/init-declarations": "error",
    "@typescript-eslint/no-array-constructor": "error",
    "@typescript-eslint/no-implied-eval": "error",
    "@typescript-eslint/no-loop-func": "error",
    "@typescript-eslint/no-loss-of-precision": "error",
    "@typescript-eslint/no-throw-literal": "error",
    "@typescript-eslint/no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/require-await": "error",
    "@typescript-eslint/return-await": [
      "error",
      "in-try-catch",
    ],
  },

  // TS Overrides: TSLint Plugin: Rules without analogs in ESLint
  // [ Reference: https://typescript-eslint.io/rules/?=xextension-xformatting-xdeprecated#rules ]
  functionalOverride_TsOnly: {
    "@typescript-eslint/array-type": [
      "error",
      {
        "default": "array-simple",
        readonly: "array-simple",
      },
    ],
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/ban-ts-comment": "error",
    "@typescript-eslint/ban-tslint-comment": "error",
    "@typescript-eslint/ban-types": "error",
    "@typescript-eslint/class-literal-property-style": "error",
    "@typescript-eslint/consistent-generic-constructors": [
      "error",
      "type-annotation",
    ],
    "@typescript-eslint/consistent-type-assertions": [
      "error",
      {
        assertionStyle: "as",
        objectLiteralTypeAssertions: "never",
      },
    ],
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        accessibility: "explicit",
        overrides: {
          properties: "explicit",
          constructors: "no-public",
          accessors: "explicit",
          methods: "explicit",
          parameterProperties: "off",
        },
      },
    ],
    "@typescript-eslint/explicit-module-boundary-types": [
      "error",
      {
        allowArgumentsExplicitlyTypedAsAny: false,
        allowDirectConstAssertionInArrowFunctions: false,
        allowedNames: [],
        allowHigherOrderFunctions: false,
        allowTypedFunctionExpressions: false,
      },
    ],
    "@typescript-eslint/member-ordering": [
      "error",
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
    "@typescript-eslint/method-signature-style": "error",

    // TODO: @typescript-eslint/naming-convention
    "@typescript-eslint/no-base-to-string": "error",
    "@typescript-eslint/no-confusing-non-null-assertion": "error",
    "@typescript-eslint/no-confusing-void-expression": "error",
    "@typescript-eslint/no-duplicate-enum-values": "error",
    "@typescript-eslint/no-duplicate-type-constituents": "error",
    "@typescript-eslint/no-dynamic-delete": "error",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-extra-non-null-assertion": "error",
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/no-import-type-side-effects": "error",
    "@typescript-eslint/no-invalid-void-type": "error",
    "@typescript-eslint/no-meaningless-void-operator": "error",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-misused-promises": "error",
    "@typescript-eslint/no-mixed-enums": "error",
    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
    "@typescript-eslint/no-redundant-type-constituents": "error",
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/no-this-alias": "error",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
    "@typescript-eslint/no-unnecessary-condition": "error",
    "@typescript-eslint/no-unnecessary-qualifier": "error",
    "@typescript-eslint/no-unnecessary-type-arguments": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/no-unnecessary-type-constraint": "error",
    "@typescript-eslint/no-unsafe-argument": "error",
    "@typescript-eslint/no-unsafe-assignment": "error",
    "@typescript-eslint/no-unsafe-call": "error",
    "@typescript-eslint/no-unsafe-declaration-merging": "error",
    "@typescript-eslint/no-unsafe-enum-comparison": "error",
    "@typescript-eslint/no-unsafe-member-access": "error",
    "@typescript-eslint/no-unsafe-return": "error",
    "@typescript-eslint/no-unsafe-unary-minus": "error",
    "@typescript-eslint/no-useless-empty-export": "error",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/non-nullable-type-assertion-style": "error",
    "@typescript-eslint/parameter-properties": "error",
    "@typescript-eslint/prefer-as-const": "error",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-includes": "error",
    "@typescript-eslint/prefer-literal-enum-member": "error",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/prefer-nullish-coalescing": "error",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/prefer-readonly": "error",

    // maybe: prefer-readonly-parameter-types
    "@typescript-eslint/prefer-reduce-type-parameter": "error",
    "@typescript-eslint/prefer-regexp-exec": "error",
    "@typescript-eslint/prefer-return-this-type": "error",
    "@typescript-eslint/prefer-string-starts-ends-with": "error",
    "@typescript-eslint/prefer-ts-expect-error": "error",
    "@typescript-eslint/promise-function-async": "error",
    "@typescript-eslint/require-array-sort-compare": "error",
    "@typescript-eslint/restrict-plus-operands": "error",
    "@typescript-eslint/restrict-template-expressions": "error",
    "@typescript-eslint/strict-boolean-expressions": "error",
    "@typescript-eslint/switch-exhaustiveness-check": "error",
    "@typescript-eslint/triple-slash-reference": "error",
    "@typescript-eslint/unbound-method": "error",
  },
};

export default TsRuleSets;
