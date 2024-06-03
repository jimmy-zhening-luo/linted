const [OFF] = ["off"] as const;
const YmlDisableExtend: IRules = {

  // Extension - DISABLE ESLint base (mostly -> Stylistic) rules
  // https://ota-meshi.github.io/eslint-plugin-yml/rules/#extension-rules
  "@stylistic/object-curly-newline": OFF,
  "@stylistic/object-curly-spacing": OFF,
  "@stylistic/array-bracket-newline": OFF,
  "@stylistic/array-bracket-spacing": OFF,
  "@stylistic/key-spacing": OFF,
  "no-irregular-whitespace": OFF, // ESLint Core - also disabled in YmlDisableConflict
  "@stylistic/no-multiple-empty-lines": OFF,
  "@stylistic/spaced-comment": OFF, // also disabled in YmlDisableConflict
};

export default YmlDisableExtend;
