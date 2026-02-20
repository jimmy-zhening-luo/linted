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
      extraFileExtensions: [".svelte"],
    } satisfies TsParserOptions,
  },
};
