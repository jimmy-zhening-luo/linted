// DOC: https://typescript-eslint.io/packages/parser/#configuration
export default {
  plugins: ["@typescript-eslint"] as const,
  languageOptions: {
    parser: "ts" as const,
  },
  parserOptions: {
    // INFO: `parserOptions.projectService` is the modern replacement for the deprecated `parserOptions.project`:
    // - https://typescript-eslint.io/blog/project-service/
    // - https://typescript-eslint.io/getting-started/typed-linting/
    // - https://typescript-eslint.io/troubleshooting/typed-linting/

    // disallowAutomaticSingleRunInference: false /* @default: false */,
    // cacheLifetime: { glob: 30 } /* { glob: "Infinity" (never) | number | @default: 30 seconds } */,
    ecmaFeatures: {
      // jsx: false /* @default: false */,
      globalReturn: true /* @default: false */,
    },
    ecmaVersion: 2023 /* number | @default: latest" */,
    emitDecoratorMetadata: false /* boolean | @default: undefined (inherits tsconfig, which has @default: false) */,
    experimentalDecorators: false /* boolean | @default: undefined (inherits tsconfig, which has @default: false) */,
    // extraFileExtensions: [] /* string[] | @default: [] (none) | BUG: https://typescript-eslint.io/troubleshooting/typed-linting/performance/#changes-to-extrafileextensions-with-projectservice */,
    isolatedDeclarations: false /* boolean | @default: undefined (inherits tsconfig, which has @default: false) */,
    // jsDocParsingMode: "all" /* type-info | @default(if `parserOptions.project` is set): all | @default: none */,
    // jsxFragmentName: null /* string | @default: null | INFO: if `parserOptions.project` is set, this will automatically be detected from the compiler. */,
    // jsxPragma: "React" /* null | string (e.g. "preact") | @default: "React" | INFO: if `parserOptions.project` is set, this will automatically be detected from the compiler. */,
    // lib: ["es2018"] /* string[] | @default: ["es2018"] | INFO: if `parserOptions.project` is set, this will automatically be detected from the compiler. */,
    projectService: true /* ProjectServiceOptions (INFO: https://typescript-eslint.io/packages/parser/#projectserviceoptions) | true | @default: false */,
    warnOnUnsupportedTypeScriptVersion: false /* preference due to nuisance | @default: true */,
  },
};
