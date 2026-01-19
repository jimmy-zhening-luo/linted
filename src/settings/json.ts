import type { JSONLanguageOptions } from "@eslint/json";

export default {
  languageOptions: {
    allowTrailingCommas: true,
  } satisfies JSONLanguageOptions,
  language: "json/jsonc",
};
