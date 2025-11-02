import type { JSONLanguageOptions } from "@eslint/json";

export default {
  languageOptions: {
    allowTrailingCommas: true /* INFO: https://github.com/eslint/json?tab=readme-ov-file#allowing-trailing-commas-in-jsonc */,
  } satisfies JSONLanguageOptions,
  language: "json/jsonc" /* INFO: `languageOptions.allowTrailingCommas` is only available on language `json/jsonc` */,
};
