declare type StylisticPlugin = { configs: { "disable-legacy": { rules: IRules } } };
declare type JSLintPlugin = { configs: { recommended: { rules: IRules } } };
declare type TSLintPlugin = { configs: { "strict-type-checked": { rules: IRules } } };
declare type BasePlugins = {
  "@stylistic": StylisticPlugin;
  "@eslint/js": JSLintPlugin;
};
declare type BaseLanguageOptions = {
  ecmaVersion: 2022;
  sourceType: "module";
};

declare type LinterSettings<
  TS extends boolean = false,
> = {
  linterOptions: {
    noInlineConfig: true;
    reportUnusedDisableDirectives: true;
  };
  plugins: TS extends true
    ? (
        BasePlugins & {
          "@typescript-eslint": TSLintPlugin;
        }
      )
    : BasePlugins;
  languageOptions: TS extends true
    ? (
        BaseLanguageOptions & {
          parser: unknown;
          parserOptions: {
            ecmaVersion: "es2022";
            sourceType: "module";
            project: true;
          };
        }
      )
    : BaseLanguageOptions;
};
