export default {
  plugins: ["svelte"] as const,
  languageOptions: {
    parser: "svelte" as const,
  },
  parserOptions: {
    parser: "ts" as const,
    // extraFileExtensions: [".svelte"] /* inherits TS, needed for performance reasons: BUG: https://typescript-eslint.io/troubleshooting/typed-linting/performance/#changes-to-extrafileextensions-with-projectservice */,
  },
  processor: "svelte/svelte",
};
