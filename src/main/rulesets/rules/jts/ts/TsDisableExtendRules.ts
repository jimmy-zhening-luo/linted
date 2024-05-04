const OOOFF = "off";
const TsDisableExtendRules: IRules = {

  // DISABLE ESLint -- TS Extensions (STEP 1/2)
  // [ Reference: https://typescript-eslint.io/rules/?=extension-xdeprecated#rules ]
  "class-methods-use-this": OOOFF,
  "consistent-return": OOOFF,
  "default-param-last": OOOFF,
  "dot-notation": OOOFF,
  "init-declarations": OOOFF,
  "max-params": OOOFF,
  "no-array-constructor": OOOFF,
  "no-dupe-class-members": OOOFF,
  "no-empty-function": OOOFF,
  "no-implied-eval": OOOFF,
  "no-invalid-this": OOOFF,
  "no-loop-func": OOOFF,
  "no-loss-of-precision": OOOFF,
  "no-magic-numbers": OOOFF,
  "no-redeclare": OOOFF,
  "no-restricted-imports": OOOFF,
  "no-return-await": OOOFF, // DEPRECATED -- @typescript-eslint/return-await
  "no-shadow": OOOFF,
  "no-throw-literal": OOOFF, // @typescript-eslint/only-throw-error
  "no-unused-expressions": OOOFF,
  "no-unused-vars": OOOFF,
  "no-use-before-define": OOOFF,
  "no-useless-constructor": OOOFF,
  "prefer-destructuring": OOOFF,
  "prefer-promise-reject-errors": OOOFF,
  "require-await": OOOFF,
};

export default TsDisableExtendRules;
