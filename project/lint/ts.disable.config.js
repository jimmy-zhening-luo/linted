const OFF = "off";

export default [

  // handled by TS compiler
  {
    "constructor-super": OFF,
    "no-const-assign": OFF,
    "no-dupe-args": OFF,
    "no-dupe-class-members": OFF,
    "no-dupe-keys": OFF,
    "no-func-assign": OFF,
    "no-obj-calls": OFF,
    "no-setter-return": OFF,
    "no-this-before-super": OFF,
    "no-undef": OFF,
    "no-unreachable": OFF,
    "no-unsafe-negation": OFF,
    "consistent-return": OFF,
    "no-redeclare": OFF,
  },

  // extended by TSlint
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
  },
];
