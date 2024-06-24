import { OFF } from "../State.js";

const TsDisableExt = {

  // DISABLE ESLint -- TS Extensions (STEP 1/2)
  // [ Reference: https://typescript-eslint.io/rules/?=extension-xdeprecated#rules ]
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
  "no-return-await": OFF, // DEPRECATED -- @typescript-eslint/return-await
  "no-shadow": OFF,
  "no-throw-literal": OFF, // @typescript-eslint/only-throw-error
  "no-unused-expressions": OFF,
  "no-unused-vars": OFF,
  "no-use-before-define": OFF,
  "no-useless-constructor": OFF,
  "prefer-destructuring": OFF,
  "prefer-promise-reject-errors": OFF,
  "require-await": OFF,
};

export default TsDisableExt;
