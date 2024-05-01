declare type BasePlugins = StylisticPlugin & JsPlugin;
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
        BasePlugins & TsPlugin
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
