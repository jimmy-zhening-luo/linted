const [OFF] = ["off"] as const;
const YmlDisableExtend: IRules = {

  // Extension - DISABLE ESLint base (mostly -> Stylistic) rules
  // https://ota-meshi.github.io/eslint-plugin-yml/rules/#extension-rules
  "no-irregular-whitespace": OFF, // ESLint core - also disabled in YmlDisableConflict
  "@stylistic/object-curly-newline": OFF,
  "@stylistic/object-curly-spacing": OFF,
  "@stylistic/array-bracket-newline": OFF,
  "@stylistic/array-bracket-spacing": OFF,
  "@stylistic/key-spacing": OFF,
  "@stylistic/no-multiple-empty-lines": OFF,
  "@stylistic/spaced-comment": OFF, // also disabled in YmlDisableConflict
};

export default YmlDisableExtend;
