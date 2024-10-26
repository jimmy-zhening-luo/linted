import {
  enable,
  ERROR,
  WARN,
  OFF,
} from "../../_strings";

export default [
  enable,
  {
    // https://github.com/lo1tuma/eslint-plugin-mocha/tree/main?tab=readme-ov-file#rules
    "mocha/consistent-spacing-between-blocks": OFF,
    "mocha/handle-done-callback": [
      ERROR,
      {
        ignoreSkipped: false,
      },
    ],
    "mocha/max-top-level-suites": [
      ERROR,
      {
        limit: 1,
      },
    ],
    "mocha/no-async-describe": ERROR,
    "mocha/no-empty-description": ERROR,
    "mocha/no-exclusive-tests": ERROR,
    "mocha/no-exports": ERROR,
    "mocha/no-global-tests": ERROR,
    "mocha/no-hooks-for-single-case": OFF,
    "mocha/no-hooks": OFF,
    "mocha/no-identical-title": ERROR,
    "mocha/no-mocha-arrows": ERROR,
    "mocha/no-nested-tests": ERROR,
    "mocha/no-pending-tests": WARN,
    "mocha/no-return-and-callback": ERROR,
    "mocha/no-return-from-async": ERROR,
    "mocha/no-setup-in-describe": ERROR,
    "mocha/no-sibling-hooks": ERROR,
    "mocha/no-skipped-tests": ERROR,
    "mocha/no-synchronous-tests": OFF,
    "mocha/no-top-level-hooks": ERROR,
    "mocha/prefer-arrow-callback": [
      ERROR,
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ] /* MUST match ../js/enable.ts */,
    "mocha/valid-suite-description": OFF,
    "mocha/valid-test-description": OFF,
  },
] as const;
