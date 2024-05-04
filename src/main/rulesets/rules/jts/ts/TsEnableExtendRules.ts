const E = "error";
const OOOFF = "off";
const TsEnableExtendRules: IRules = {

  // ENABLE TS Extensions (STEP 2/2)
  // [ Reference: https://typescript-eslint.io/rules/?=extension-xdeprecated#rules ]
  "@typescript-eslint/class-methods-use-this": OOOFF, // preference -- eslint:OFF
  "@typescript-eslint/consistent-return": OOOFF, // tsconfig: noImplicitReturns
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
  "@typescript-eslint/max-params": OOOFF, // preference
  "@typescript-eslint/no-array-constructor": E,
  "@typescript-eslint/no-dupe-class-members": OOOFF, // tsc
  "@typescript-eslint/no-empty-function": [
    E,
    {
      allow: [
        "constructors",
        "private-constructors",
        "protected-constructors",
        "decoratedFunctions",
      ],
    }, // functions, arrowFunctions, generatorFunctions, methods, generatorMethods, getters, setters, constructors, asyncFunctions, asyncMethods; TS-ONLY: private-constructors, protected-constructors, decoratedFunctions, overrideMethods
  ],
  "@typescript-eslint/no-implied-eval": E,
  "@typescript-eslint/no-invalid-this": OOOFF, // tsconfig: { strict, noImplicitThis }
  "@typescript-eslint/no-loop-func": E,
  "@typescript-eslint/no-loss-of-precision": E,
  "@typescript-eslint/no-magic-numbers": [
    OOOFF,
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
  "@typescript-eslint/no-redeclare": OOOFF, // tsc (let, const, -var)
  "@typescript-eslint/no-restricted-imports": OOOFF, // preference
  "@typescript-eslint/no-shadow": OOOFF, // investigate
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
      ignoreTypeReferences: true,
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
        array: false,
        object: false,
      },
    },
    {
      enforceForRenamedProperties: false,
      enforceForDeclarationWithTypeAnnotation: false,
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
};

export default TsEnableExtendRules;
