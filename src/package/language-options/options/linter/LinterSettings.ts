type StylisticPlugin = { configs: { "disable-legacy": { rules: IRules } } };
type JSLintPlugin = { configs: { recommended: { rules: IRules } } };
type TSLintPlugin = { configs: { "eslint-recommended": { rules: IRules } } };
type BasePlugins = {
  "@stylistic": StylisticPlugin;
  "@eslint/js": JSLintPlugin;
};
type BaseLanguageOptions = {
  ecmaVersion: 2022;
  sourceType: "module";
};

export default interface LinterSettings<
  TS extends boolean = false,
> {
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
}
