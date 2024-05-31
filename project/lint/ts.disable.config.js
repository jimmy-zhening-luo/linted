const O = "off";

export default [

  // handled by TS compiler
  {
    "constructor-super": O,
    "no-const-assign": O,
    "no-dupe-args": O,
    "no-dupe-class-members": O,
    "no-dupe-keys": O,
    "no-func-assign": O,
    "no-obj-calls": O,
    "no-setter-return": O,
    "no-this-before-super": O,
    "no-undef": O,
    "no-unreachable": O,
    "no-unsafe-negation": O,
    "consistent-return": O,
    "no-redeclare": O,
  },

  // extended by TSlint
  {
    "class-methods-use-this": O,
    "consistent-return": O,
    "default-param-last": O,
    "dot-notation": O,
    "init-declarations": O,
    "max-params": O,
    "no-array-constructor": O,
    "no-dupe-class-members": O,
    "no-empty-function": O,
    "no-implied-eval": O,
    "no-invalid-this": O,
    "no-loop-func": O,
    "no-loss-of-precision": O,
    "no-magic-numbers": O,
    "no-redeclare": O,
    "no-restricted-imports": O,
    "no-return-await": O, // DEPRECATED -- @typescript-eslint/return-await
    "no-shadow": O,
    "no-throw-literal": O, // @typescript-eslint/only-throw-error
    "no-unused-expressions": O,
    "no-unused-vars": O,
    "no-use-before-define": O,
    "no-useless-constructor": O,
    "prefer-destructuring": O,
    "prefer-promise-reject-errors": O,
    "require-await": O,
  },
];
