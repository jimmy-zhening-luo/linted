const [OFF] = ["off"] as const;
const Json5DisableConflict: IRules = {

  // Recommended by JSON base config:
  // https://github.com/ota-meshi/eslint-plugin-jsonc/blob/master/lib/configs/flat/base.ts
  strict: OFF, // ESLint Core
  "no-unused-expressions": OFF, // ESLint Core
  "no-unused-vars": OFF, // ESLint Core
};

export default Json5DisableConflict;
