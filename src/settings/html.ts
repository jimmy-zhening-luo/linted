export default {
  plugins: ["html"] as const,
  languageOptions: {
    parser: "html" as const,
  },
  parserOptions: {
    // templateEngineSyntax: {} /* INFO: https://html-eslint.org/docs/integrating-template-engine */,
    frontmatter: true /* @default: false | INFO: https://html-eslint.org/docs/integrating-template-engine#skip-frontmatter */,
  },
  language: "html/html",
};
