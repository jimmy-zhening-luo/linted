import type RuleEntry from "../entry.js";
import { ERROR, OFF } from "../level.js";
import {
  NEVER,
} from "../state.js";
import { Enable } from "../id.js";

export default [
  Enable,
  {

    // https://typescript-eslint.io/rules/?=xextension-xdeprecated#rules ]
    "@typescript-eslint/adjacent-overload-signatures": OFF,
    "@typescript-eslint/array-type": [
      ERROR,
      {
        "default": "array",
        readonly: "array",
      },
    ],
    "@typescript-eslint/await-thenable": ERROR,
    "@typescript-eslint/ban-ts-comment": [
      ERROR,
      {
        "ts-check": false,
        "ts-expect-error": true,
        "ts-ignore": true,
        "ts-nocheck": true,
        minimumDescriptionLength: 10,
      },
    ],
    "@typescript-eslint/ban-tslint-comment": ERROR,
    "@typescript-eslint/class-literal-property-style": [
      ERROR,
      "fields",
    ],
    "@typescript-eslint/consistent-generic-constructors": [
      ERROR,
      "constructor",
    ],
    "@typescript-eslint/consistent-indexed-object-style": [
      ERROR,
      "record",
    ],
    "@typescript-eslint/consistent-type-assertions": [
      ERROR,
      {
        assertionStyle: "as",
        objectLiteralTypeAssertions: NEVER,
      },
    ],
    "@typescript-eslint/consistent-type-definitions": OFF,
    "@typescript-eslint/consistent-type-exports": [
      ERROR,
      { fixMixedExportsWithInlineTypeSpecifier: false },
    ],
    "@typescript-eslint/consistent-type-imports": [
      ERROR,
      {
        disallowTypeAnnotations: true,
        fixStyle: "separate-type-imports",
        prefer: "type-imports",
      },
    ],
    "@typescript-eslint/explicit-function-return-type": OFF,
    "@typescript-eslint/explicit-member-accessibility": [
      ERROR,
      {
        accessibility: "explicit",
        ignoredMethodNames: [],
        overrides: {
          properties: "explicit",
          constructors: "no-public",
          accessors: "explicit",
          methods: "explicit",
          parameterProperties: "explicit",
        },
      },
    ],
    "@typescript-eslint/explicit-module-boundary-types": OFF,
    "@typescript-eslint/member-ordering": [
      ERROR,
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
    "@typescript-eslint/method-signature-style": [
      ERROR,
      "property",
    ],
    "@typescript-eslint/naming-convention": OFF,
    "@typescript-eslint/no-array-delete": ERROR,
    "@typescript-eslint/no-base-to-string": [
      ERROR,
      {
        ignoredTypeNames: [
          "Error",
          "RegExp",
          "URL",
          "URLSearchParams",
        ],
      },
    ],
    "@typescript-eslint/no-confusing-non-null-assertion": ERROR,
    "@typescript-eslint/no-confusing-void-expression": [
      ERROR,
      {
        ignoreArrowShorthand: true,
        ignoreVoidOperator: true,
      },
    ],
    "@typescript-eslint/no-duplicate-enum-values": ERROR,
    "@typescript-eslint/no-duplicate-type-constituents": [
      ERROR,
      {
        ignoreIntersections: false,
        ignoreUnions: false,
      },
    ],
    "@typescript-eslint/no-dynamic-delete": ERROR,
    "@typescript-eslint/no-empty-object-type": [
      ERROR,
      {
        allowInterfaces: NEVER,
        allowObjectTypes: NEVER,

        // allowWithName: /regex/,
      },
    ],
    "@typescript-eslint/no-explicit-any": [
      ERROR,
      {
        fixToUnknown: true,
        ignoreRestArgs: false,
      },
    ],
    "@typescript-eslint/no-extra-non-null-assertion": ERROR,
    "@typescript-eslint/no-extraneous-class": [
      ERROR,
      {
        allowConstructorOnly: false,
        allowEmpty: true,
        allowStaticOnly: false,
        allowWithDecorator: false,
      },
    ],
    "@typescript-eslint/no-floating-promises": [
      ERROR,
      {
        checkThenables: true,
        ignoreVoid: true,
        ignoreIIFE: false,
      },
    ],
    "@typescript-eslint/no-for-in-array": ERROR,
    "@typescript-eslint/no-import-type-side-effects": ERROR,
    "@typescript-eslint/no-inferrable-types": [
      ERROR,
      {
        ignoreParameters: false,
        ignoreProperties: false,
      },
    ],
    "@typescript-eslint/no-invalid-void-type": [
      ERROR,
      {
        allowInGenericTypeArguments: true,
        allowAsThisParameter: false,
      },
    ],
    "@typescript-eslint/no-meaningless-void-operator": [
      ERROR,
      { checkNever: true },
    ],
    "@typescript-eslint/no-misused-new": ERROR,
    "@typescript-eslint/no-misused-promises": [
      ERROR,
      {
        checksConditionals: true,
        checksSpreads: true,
        checksVoidReturn: {
          arguments: true,
          attributes: true,
          properties: true,
          returns: true,
          variables: true,
        },
      },
    ],
    "@typescript-eslint/no-mixed-enums": ERROR,
    "@typescript-eslint/no-namespace": OFF,
    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": ERROR,
    "@typescript-eslint/no-non-null-asserted-optional-chain": ERROR,
    "@typescript-eslint/no-non-null-assertion": ERROR,
    "@typescript-eslint/no-redundant-type-constituents": ERROR,
    "@typescript-eslint/no-restricted-types": OFF, /* preference - no shared custom types across all projects that I wish to ban*/
    "@typescript-eslint/no-require-imports": [
      ERROR,
      { allow: [] },
    ],
    "@typescript-eslint/no-this-alias": [
      ERROR,
      {
        allowDestructuring: true,
        allowedNames: [],
      },
    ],
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": [
      ERROR,
      {
        allowComparingNullableBooleansToTrue: true,
        allowComparingNullableBooleansToFalse: true,
      },
    ],
    "@typescript-eslint/no-unnecessary-condition": [
      ERROR,
      {
        allowConstantLoopConditions: false,
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
      },
    ],
    "@typescript-eslint/no-unnecessary-qualifier": ERROR,
    "@typescript-eslint/no-unnecessary-template-expression": ERROR,
    "@typescript-eslint/no-unnecessary-type-arguments": ERROR,
    "@typescript-eslint/no-unnecessary-type-assertion": [
      ERROR,
      { typesToIgnore: [] },
    ],
    "@typescript-eslint/no-unnecessary-type-constraint": ERROR,
    "@typescript-eslint/no-unnecessary-type-parameters": ERROR,
    "@typescript-eslint/no-unsafe-argument": ERROR,
    "@typescript-eslint/no-unsafe-assignment": ERROR,
    "@typescript-eslint/no-unsafe-call": ERROR,
    "@typescript-eslint/no-unsafe-declaration-merging": ERROR,
    "@typescript-eslint/no-unsafe-enum-comparison": ERROR,
    "@typescript-eslint/no-unsafe-function-type": ERROR,
    "@typescript-eslint/no-unsafe-member-access": ERROR,
    "@typescript-eslint/no-unsafe-return": ERROR,
    "@typescript-eslint/no-unsafe-unary-minus": ERROR,
    "@typescript-eslint/no-useless-empty-export": ERROR,
    "@typescript-eslint/no-wrapper-object-types": ERROR,
    "@typescript-eslint/no-var-requires": OFF,
    "@typescript-eslint/non-nullable-type-assertion-style": OFF,
    "@typescript-eslint/parameter-properties": [
      ERROR,
      { prefer: "parameter-property" /*  "parameter-property" | "class-property"  */ },
    ],
    "@typescript-eslint/prefer-as-const": ERROR,
    "@typescript-eslint/prefer-enum-initializers": ERROR,
    "@typescript-eslint/prefer-find": ERROR,
    "@typescript-eslint/prefer-for-of": ERROR,
    "@typescript-eslint/prefer-function-type": ERROR,
    "@typescript-eslint/prefer-includes": ERROR,
    "@typescript-eslint/prefer-literal-enum-member": [
      ERROR,
      { allowBitwiseExpressions: false },
    ],
    "@typescript-eslint/prefer-namespace-keyword": ERROR,
    "@typescript-eslint/prefer-nullish-coalescing": [
      ERROR,
      {
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
        ignoreConditionalTests: false,
        ignoreTernaryTests: false,
        ignoreMixedLogicalExpressions: false,
        ignorePrimitives: {
          bigint: false,
          "boolean": false,
          number: false,
          string: false,
        },
      },
    ], /* requires tsconfig: strictNullChecks */
    "@typescript-eslint/prefer-optional-chain": [
      ERROR,
      {
        allowPotentiallyUnsafeFixesThatModifyTheReturnTypeIKnowWhatImDoing: false,
        checkAny: true,
        checkBigInt: true,
        checkBoolean: true,
        checkNumber: true,
        checkString: true,
        checkUnknown: true,
        requireNullish: false,
      },
    ],
    "@typescript-eslint/prefer-readonly": [
      ERROR,
      { onlyInlineLambdas: false },
    ],
    "@typescript-eslint/prefer-readonly-parameter-types": OFF, /* preference - WAY too restrictive */
    "@typescript-eslint/prefer-reduce-type-parameter": ERROR,
    "@typescript-eslint/prefer-regexp-exec": ERROR,
    "@typescript-eslint/prefer-return-this-type": ERROR,
    "@typescript-eslint/prefer-string-starts-ends-with": [
      ERROR,
      { allowSingleElementEquality: NEVER },
    ],
    "@typescript-eslint/prefer-ts-expect-error": ERROR,
    "@typescript-eslint/promise-function-async": [
      ERROR,
      {
        allowAny: false,
        allowedPromiseNames: [],
        checkArrowFunctions: true,
        checkFunctionDeclarations: true,
        checkFunctionExpressions: true,
        checkMethodDeclarations: true,
      },
    ],
    "@typescript-eslint/require-array-sort-compare": [
      ERROR,
      { ignoreStringArrays: true },
    ],
    "@typescript-eslint/restrict-plus-operands": [
      ERROR,
      {
        allowAny: false,
        allowBoolean: false,
        allowNullish: false,
        allowNumberAndString: false,
        allowRegExp: false,
        skipCompoundAssignments: false,
      },
    ],
    "@typescript-eslint/restrict-template-expressions": [
      ERROR,
      {
        allowAny: true,
        allowArray: true,
        allowBoolean: true,
        allowNullish: false,
        allowNumber: true,
        allowNever: false,
        allowRegExp: false,
      }, /* investigate: make stricter */
    ],
    "@typescript-eslint/return-await": [
      ERROR,
      "in-try-catch",
    ], /* BUG: doc incorrectly states that this extends the DEPRECATED (since 8.46) no-return-await: https://typescript-eslint.io/rules/return-await */
    "@typescript-eslint/strict-boolean-expressions": [
      ERROR,
      {
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
        allowAny: false,
        allowNumber: true,
        allowString: false,
        allowNullableBoolean: false,
        allowNullableEnum: false,
        allowNullableNumber: false,
        allowNullableObject: false,
        allowNullableString: false,
      },
    ], /* requires tsconfig: strictNullChecks */
    "@typescript-eslint/switch-exhaustiveness-check": [
      ERROR,
      {
        allowDefaultCaseForExhaustiveSwitch: false,
        requireDefaultForNonUnion: true,
      },
    ],
    "@typescript-eslint/triple-slash-reference": [
      ERROR,
      {
        lib: NEVER, /** always | never */
        path: NEVER, /** always | never */
        types: NEVER, /** always | never | prefer-import */
      },
    ],
    "@typescript-eslint/typedef": OFF, /* tsconfig: { noImplicitAny, strictPropertyInitialization } */
    "@typescript-eslint/unbound-method": [
      ERROR,
      { ignoreStatic: false },
    ],
    "@typescript-eslint/unified-signatures": [
      ERROR,
      { ignoreDifferentlyNamedParameters: false },
    ],
    "@typescript-eslint/use-unknown-in-catch-callback-variable": ERROR,
  },
] as const satisfies RuleEntry;
