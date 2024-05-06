const OOOFF = "off";

export default [

  // handled by TS compiler
  {
    "constructor-super": OOOFF,
    "no-const-assign": OOOFF,
    "no-dupe-args": OOOFF,
    "no-dupe-class-members": OOOFF,
    "no-dupe-keys": OOOFF,
    "no-func-assign": OOOFF,
    "no-obj-calls": OOOFF,
    "no-setter-return": OOOFF,
    "no-this-before-super": OOOFF,
    "no-undef": OOOFF,
    "no-unreachable": OOOFF,
    "no-unsafe-negation": OOOFF,
    "consistent-return": OOOFF,
    "no-redeclare": OOOFF,
  },

  // extended by TSlint
  {
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
  },
];
