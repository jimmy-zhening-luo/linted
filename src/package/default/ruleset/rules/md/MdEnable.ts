const [ERROR] = ["error"] as const;
const MdEnable: IRules = {

  // https://github.com/prettier/eslint-plugin-prettier?tab=readme-ov-file#options
  // will this work without a parser?
  "prettier/prettier": [
    ERROR,
    { // https://prettier.io/docs/en/options.html
      parser: "markdown", // https://prettier.io/docs/en/options.html#parser
      printWidth: 240,
      tabWidth: 2,
      tabs: false,
      semi: true,
      singleQuote: false,
      quoteProps: "as-needed",
      jsxSingleQuote: false,
      trailingComma: "all",
      bracketSpacing: true,
      bracketSameLine: false,
      arrowParens: "avoid",
    },
  ],
};

export default MdEnable;
