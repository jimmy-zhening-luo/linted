declare type LinterSettings<
  TS extends boolean = false,
> = LinterOptions & {
  plugins: TS extends true
    ? StylisticPlugin & JsPlugin & TsPlugin
    : StylisticPlugin & JsPlugin;
  languageOptions: TS extends true
    ? EcmaLanguage & TsLanguage
    : EcmaLanguage;
};
