import { Strings, type RuleEntry } from "../index.js";

const { Id: { DisableX }, Level: { OFF } } = Strings;

export default [
  DisableX,
  {

    // https://typescript-eslint.io/rules/?=extension-xdeprecated#rules ]
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
    "no-magic-numbers": OFF,
    "no-redeclare": OFF,
    "no-restricted-imports": OFF,
    "no-shadow": OFF,
    "no-throw-literal": OFF, /* @typescript-eslint/only-throw-error */
    "no-unused-expressions": OFF,
    "no-unused-vars": OFF,
    "no-use-before-define": OFF,
    "no-useless-constructor": OFF,
    "prefer-destructuring": OFF,
    "prefer-promise-reject-errors": OFF,
    "require-await": OFF,
  },
] as const satisfies RuleEntry;
