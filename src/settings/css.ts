import type { CSSLanguageOptions } from "@eslint/css";

// DOC: https://github.com/eslint/css?tab=readme-ov-file#languages
export default {
  languageOptions: {
    tolerant: false,
  } satisfies CSSLanguageOptions,
  language: "css/css",
};
