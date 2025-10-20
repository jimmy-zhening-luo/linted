// DOC: https://typescript-eslint.io/packages/parser/#configuration
export default {
  plugins: ["ts"] as const,
  languageOptions: {
    parser: "ts" as const,
  },
  parserOptions: {
    // disallowAutomaticSingleRunInference: false /* @default false */,
    // cacheLifetime: { glob: 30 } /* { glob: "Infinity" (never) | number | @default 30 seconds } */,
    ecmaFeatures: {
      // jsx: false /* @default false */,
      globalReturn: true /* @default false */,
    },
    // ecmaVersion: "latest" /* number | @default latest" */,
    // emitDecoratorMetadata: true /* boolean | @default undefined (inherits tsconfig, which has @default false) */,
    // experimentalDecorators: true /* boolean | @default undefined (inherits tsconfig, which has @default false) */,
    // extraFileExtensions: [] /* string[] | @default [] (none) | BUG: https://typescript-eslint.io/troubleshooting/typed-linting/performance/#changes-to-extrafileextensions-with-projectservice */,
    // isolatedDeclarations: true /* boolean | @default undefined (inherits tsconfig, which has @default false) */,
    // jsDocParsingMode: "all" /* type-info | @default(if `parserOptions.project` is set): all | @default none */,
    // jsxFragmentName: null /* string | @default null | INFO: if `parserOptions.project` is set, this will automatically be detected from the compiler. */,
    // jsxPragma: "React" /* null | string (e.g. "preact") | @default "React" | INFO: if `parserOptions.project` is set, this will automatically be detected from the compiler. */,
    // lib: ["es2018"] /* string[] | @default ["es2018"] | INFO: if `parserOptions.project` is set, this will automatically be detected from the compiler. */,
    projectService: true /* ProjectServiceOptions | true | @default false */,
    // INFO: `parserOptions.projectService` is the modern replacement for the deprecated `parserOptions.project`:
    // - https://typescript-eslint.io/blog/project-service/
    // - https://typescript-eslint.io/packages/parser/#projectserviceoptions
    // - https://typescript-eslint.io/getting-started/typed-linting/
    // - https://typescript-eslint.io/troubleshooting/typed-linting/
    warnOnUnsupportedTypeScriptVersion: false /* preference due to nuisance | @default true */,
    extraFileExtensions: [".svelte"] /* BUG: Needed to avoid performance issues in Svelte/TS projects: https://typescript-eslint.io/troubleshooting/typed-linting/performance/#changes-to-extrafileextensions-with-projectservice */,
  },
};
