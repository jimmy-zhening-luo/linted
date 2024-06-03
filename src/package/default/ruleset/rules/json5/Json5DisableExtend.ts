const [OFF] = ["off"] as const;
const Json5DisableExtend: IRules = {

  // Extension - DISABLE ESLint base (mostly -> Stylistic) rules
  // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/#extension-rules
  "@stylistic/array-bracket-newline": OFF,
  "@stylistic/array-bracket-spacing": OFF,
  "@stylistic/array-element-newline": OFF,
  "@stylistic/comma-dangle": OFF,
  "@stylistic/comma-style": OFF,
  "@stylistic/indent": OFF,
  "@stylistic/key-spacing": OFF,
  "no-dupe-keys": OFF, // ESLint Core
  "@stylistic/no-floating-decimal": OFF,
  "no-irregular-whitespace": OFF, // ESLint Core
  "no-multi-str": OFF, // ESLint Core
  "no-octal-escape": OFF, // ESLint Core
  "no-octal": OFF, // ESLint Core
  "no-sparse-arrays": OFF, // ESLint Core
  "no-useless-escape": OFF, // ESLint Core
  "@stylistic/object-curly-newline": OFF,
  "@stylistic/object-curly-spacing": OFF,
  "@stylistic/object-property-newline": OFF,
  "@stylistic/quote-props": OFF,
  "@stylistic/quotes": OFF,
  "@stylistic/space-unary-ops": OFF,
};

export default Json5DisableExtend;
