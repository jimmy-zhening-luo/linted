import type { ParserOptions } from "@html-eslint/parser";

export default {
  languageOptions: {
    parser: "html",
    parserOptions: {
      frontmatter: true,
    } satisfies ParserOptions,
  },
  language: "html/html",
};
