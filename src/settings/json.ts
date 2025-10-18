export default {
  plugins: [
    "json",
    "jsonc",
  ] as const,
  languageOptions: {
    allowTrailingCommas: true /* INFO: https://github.com/eslint/json?tab=readme-ov-file#allowing-trailing-commas-in-jsonc */,
  },
  language: "json/jsonc" /* INFO: `languageOptions.allowTrailingCommas` is only available on language `json/jsonc` */,
};
