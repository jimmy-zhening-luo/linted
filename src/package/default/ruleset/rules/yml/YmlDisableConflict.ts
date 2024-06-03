const [OFF] = ["off"] as const;
const YmlDisableConflict: IRules = {

  // Recommended by YAML base config:
  // https://github.com/ota-meshi/eslint-plugin-yml/blob/master/src/configs/flat/base.ts
  "no-irregular-whitespace": OFF, // ESLint Core
  "no-unused-vars": OFF, // ESLint Core
  "@stylistic/spaced-comment": OFF,
};

export default YmlDisableConflict;
