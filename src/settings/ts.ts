import type { ParserOptions } from "@typescript-eslint/types";

// DOC: https://typescript-eslint.io/packages/parser/#configuration

type TsParserOptions = ParserOptions & {
  disallowAutomaticSingleRunInference?: boolean;
};

export default {
  languageOptions: {
    parser: "ts" as const,
  },
  parserOptions: {
    ecmaFeatures: {
      // jsx: false /* @default false */,
      globalReturn: true /* @default false */,
    },
    projectService: true /* ProjectServiceOptions | true | @default false */,
    // INFO: `parserOptions.projectService` is the modern replacement for the deprecated `parserOptions.project`:
    // - https://typescript-eslint.io/blog/project-service/
    // - https://typescript-eslint.io/packages/parser/#projectserviceoptions
    // - https://typescript-eslint.io/getting-started/typed-linting/
    // - https://typescript-eslint.io/troubleshooting/typed-linting/
    warnOnUnsupportedTypeScriptVersion: false /* preference due to nuisance | @default true */,
    extraFileExtensions: [".svelte"] /* BUG: Needed to avoid performance issues in Svelte/TS projects: https://typescript-eslint.io/troubleshooting/typed-linting/performance/#changes-to-extrafileextensions-with-projectservice */,
  } satisfies TsParserOptions,
};
