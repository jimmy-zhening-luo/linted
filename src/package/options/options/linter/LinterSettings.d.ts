declare type LinterSettings<
  TS extends boolean = false,
> = {
  linterOptions: {
    noInlineConfig: true;
    reportUnusedDisableDirectives: true;
  };
  plugins: TS extends true
    ? StylisticPlugin & JsPlugin & TsPlugin
    : StylisticPlugin & JsPlugin;
  languageOptions: TS extends true
    ? EcmaLanguage & TsLanguage
    : EcmaLanguage;
};
