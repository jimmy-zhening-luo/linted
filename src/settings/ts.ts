import type { ParserOptions } from "@typescript-eslint/types";

// DOC: https://typescript-eslint.io/packages/parser/#configuration

type TsParserOptions = ParserOptions & {
  disallowAutomaticSingleRunInference?: boolean;
};

export default {
  languageOptions: {
    parser: "ts",
    parserOptions: {
      ecmaFeatures: {
        globalReturn: true,
      },
      projectService: true,
      warnOnUnsupportedTypeScriptVersion: false,
      extraFileExtensions: [".svelte"] /* BUG: Needed to avoid performance issues in Svelte/TS projects: https://typescript-eslint.io/troubleshooting/typed-linting/performance/#changes-to-extrafileextensions-with-projectservice */,
    } satisfies TsParserOptions,
  },

};
