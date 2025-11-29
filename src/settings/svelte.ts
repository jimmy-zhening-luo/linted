export default {
  languageOptions: {
    parser: "svelte",
    parserOptions: {
      parser: "ts",
    // extraFileExtensions: [".svelte"] /* inherits TS, needed for performance reasons: BUG: https://typescript-eslint.io/troubleshooting/typed-linting/performance/#changes-to-extrafileextensions-with-projectservice */,
    },
  },
  processor: "svelte/svelte",
};
