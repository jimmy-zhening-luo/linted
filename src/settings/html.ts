import type { ParserOptions } from "@html-eslint/parser";

export default {
  languageOptions: {
    parser: "html",
    parserOptions: {
      frontmatter: true /* @default: false | INFO: https://html-eslint.org/docs/integrating-template-engine#skip-frontmatter */,
    } satisfies ParserOptions,
  },
  language: "html/html",
};
