const E = "error";
const OOOFF = "off";
const TsEnableRules: IRules = {

  // ENABLE TSLint (TypeScript ONLY)
  // [ Reference: https://typescript-eslint.io/rules/?=xextension-xdeprecated#rules ]
  "@typescript-eslint/adjacent-overload-signatures": OOOFF,
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
  "@typescript-eslint/ban-types": OOOFF,
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
  "@typescript-eslint/explicit-function-return-type": [
    E,
    {
      allowExpressions: false,
      allowTypedFunctionExpressions: false,
      allowHigherOrderFunctions: false,
      allowDirectConstAssertionInArrowFunctions: false,
      allowConciseArrowFunctionExpressionsStartingWithVoid: true,
      allowFunctionsWithoutTypeParameters: false,
      allowedNames: [],
      allowIIFEs: false,
    },
  ],
  "@typescript-eslint/explicit-member-accessibility": [
    E,
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
  "@typescript-eslint/method-signature-style": [
    E,
    "property",
  ],
  "@typescript-eslint/naming-convention": OOOFF,
  "@typescript-eslint/no-array-delete": E,
  "@typescript-eslint/no-base-to-string": [
    E,
    {
      ignoredTypeNames: [
        "Error",
        "RegExp",
        "URL",
        "URLSearchParams",
      ],
    },
  ],
  "@typescript-eslint/no-confusing-non-null-assertion": E,
  "@typescript-eslint/no-confusing-void-expression": [
    E,
    {
      ignoreArrowShorthand: true,
      ignoreVoidOperator: true,
    },
  ],
  "@typescript-eslint/no-duplicate-enum-values": E,
  "@typescript-eslint/no-duplicate-type-constituents": [
    E,
    {
      ignoreIntersections: false,
      ignoreUnions: false,
    },
  ],
  "@typescript-eslint/no-dynamic-delete": E,
  "@typescript-eslint/no-empty-interface": [
    E,
    { allowSingleExtends: true },
  ],
  "@typescript-eslint/no-explicit-any": [
    E,
    {
      fixToUnknown: false,
      ignoreRestArgs: false,
    },
  ],
  "@typescript-eslint/no-extra-non-null-assertion": E,
  "@typescript-eslint/no-extraneous-class": [
    E,
    {
      allowConstructorOnly: false,
      allowEmpty: true,
      allowStaticOnly: false,
      allowWithDecorator: false,
    },
  ],
  "@typescript-eslint/no-floating-promises": [
    E,
    {
      ignoreVoid: true,
      ignoreIIFE: false,
    },
  ],
  "@typescript-eslint/no-for-in-array": E,
  "@typescript-eslint/no-import-type-side-effects": E,
  "@typescript-eslint/no-inferrable-types": OOOFF,
  "@typescript-eslint/no-invalid-void-type": [
    E,
    {
      allowInGenericTypeArguments: true,
      allowAsThisParameter: false,
    },
  ],
  "@typescript-eslint/no-meaningless-void-operator": [
    E,
    { checkNever: true },
  ],
  "@typescript-eslint/no-misused-new": E,
  "@typescript-eslint/no-misused-promises": [
    E,
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
  "@typescript-eslint/no-mixed-enums": E,
  "@typescript-eslint/no-namespace": OOOFF,
  "@typescript-eslint/no-non-null-asserted-nullish-coalescing": E,
  "@typescript-eslint/no-non-null-asserted-optional-chain": E,
  "@typescript-eslint/no-non-null-assertion": E,
  "@typescript-eslint/no-redundant-type-constituents": E,
  "@typescript-eslint/no-require-imports": [
    E,
    { allow: [] },
  ],
  "@typescript-eslint/no-this-alias": [
    E,
    {
      allowDestructuring: true,
      allowedNames: [],
    },
  ],
  "@typescript-eslint/no-unnecessary-boolean-literal-compare": [
    E,
    {
      allowComparingNullableBooleansToTrue: true,
      allowComparingNullableBooleansToFalse: true,
    },
  ],
  "@typescript-eslint/no-unnecessary-condition": [
    E,
    {
      allowConstantLoopConditions: false,
      allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
    },
  ],
  "@typescript-eslint/no-unnecessary-qualifier": E,
  "@typescript-eslint/no-unnecessary-type-arguments": E,
  "@typescript-eslint/no-unnecessary-type-assertion": [
    E,
    { typesToIgnore: [] },
  ],
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
  "@typescript-eslint/no-useless-template-literals": E,
  "@typescript-eslint/no-var-requires": [
    E,
    { allow: [] },
  ],
  "@typescript-eslint/non-nullable-type-assertion-style": E,
  "@typescript-eslint/parameter-properties": [
    E,
    { prefer: "parameter-property" /**  "parameter-property" | "class-property"  */ },
  ],
  "@typescript-eslint/prefer-as-const": E,
  "@typescript-eslint/prefer-enum-initializers": E,
  "@typescript-eslint/prefer-find": E,
  "@typescript-eslint/prefer-for-of": E,
  "@typescript-eslint/prefer-function-type": E,
  "@typescript-eslint/prefer-includes": E,
  "@typescript-eslint/prefer-literal-enum-member": [
    E,
    { allowBitwiseExpressions: false },
  ],
  "@typescript-eslint/prefer-namespace-keyword": E,
  "@typescript-eslint/prefer-nullish-coalescing": [
    E,
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
  ], // requires tsconfig: strictNullChecks
  "@typescript-eslint/prefer-optional-chain": [
    E,
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
    E,
    { onlyInlineLambdas: false },
  ],
  "@typescript-eslint/prefer-readonly-parameter-types": OOOFF, // investigate
  "@typescript-eslint/prefer-reduce-type-parameter": E,
  "@typescript-eslint/prefer-regexp-exec": E,
  "@typescript-eslint/prefer-return-this-type": E,
  "@typescript-eslint/prefer-string-starts-ends-with": [
    E,
    { allowSingleElementEquality: "never" },
  ],
  "@typescript-eslint/prefer-ts-expect-error": E,
  "@typescript-eslint/promise-function-async": [
    E,
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
    E,
    { ignoreStringArrays: true },
  ],
  "@typescript-eslint/restrict-plus-operands": [
    E,
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
    E,
    {
      allowAny: true,
      allowArray: true,
      allowBoolean: true,
      allowNullish: true,
      allowNumber: true,
      allowNever: false,
      allowRegExp: false,
    }, // investigate: make stricter
  ],
  "@typescript-eslint/sort-type-constituents": OOOFF, // investigate
  "@typescript-eslint/strict-boolean-expressions": [
    E,
    {
      allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
      allowAny: false,
      allowNumber: false,
      allowString: false,
      allowNullableBoolean: false,
      allowNullableEnum: false,
      allowNullableNumber: false,
      allowNullableObject: false,
      allowNullableString: false,
    },
  ], // requires tsconfig: strictNullChecks
  "@typescript-eslint/switch-exhaustiveness-check": [
    E,
    {
      allowDefaultCaseForExhaustiveSwitch: false,
      requireDefaultForNonUnion: true,
    },
  ],
  "@typescript-eslint/triple-slash-reference": [
    E,
    {
      lib: "never", /** always | never */
      path: "never", /** always | never */
      types: "never", /** always | never | prefer-import */
    },
  ],
  "@typescript-eslint/typedef": OOOFF, // tsconfig: { noImplicitAny, strictPropertyInitialization }
  "@typescript-eslint/unbound-method": [
    E,
    { ignoreStatic: false },
  ],
  "@typescript-eslint/unified-signatures": [
    E,
    { ignoreDifferentlyNamedParameters: false },
  ],
  "@typescript-eslint/use-unknown-in-catch-callback-variable": E,
};

export default TsEnableRules;
