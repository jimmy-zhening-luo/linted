export default abstract class Options<
  TS extends boolean = false,
> implements IOptions<
  TS extends true ? JsPlugin & TsPlugin : JsPlugin,
  TS extends true ? TsLanguage : Record<string, never>
> {
  public readonly files: string[];
  public readonly linterOptions: {
    noInlineConfig: true;
    reportUnusedDisableDirectives: true; };
  public readonly plugins: IOptions<
    TS extends true ? JsPlugin & TsPlugin : JsPlugin,
    TS extends true ? TsLanguage : Record<string, never>
  >["plugins"];
  public readonly languageOptions: IOptions<
    TS extends true ? JsPlugin & TsPlugin : JsPlugin,
    TS extends true ? TsLanguage : Record<string, never>
  >["languageOptions"];

  constructor(
    stylisticPlugin: StylisticPluginBody,
    jsLintPlugin: JsPluginBody,
    tsLintPlugin: TS extends true ? TsPluginBody : null,
    tsLintParser: TS extends true ? TsLanguage["parser"] : null,
    ...files: string[]
  ) {
    this.files = files;
    this.linterOptions = {
      noInlineConfig: true,
      reportUnusedDisableDirectives: true,
    };
    this.plugins = this.setPlugins(
      stylisticPlugin,
      jsLintPlugin,
      tsLintPlugin,
    );
    this.languageOptions = this.setLanguageOptions(
      tsLintParser,
    );
  }

  public get config(): IOptions<
    TS extends true ? JsPlugin & TsPlugin : JsPlugin,
    TS extends true ? TsLanguage : Record<string, never>
  > {
    return {
      files: this.files,
      linterOptions: this.linterOptions,
      plugins: this.plugins,
      languageOptions: this.languageOptions,
    };
  }

  protected setPlugins(
    stylisticPlugin: StylisticPluginBody,
    jsLintPlugin: JsPluginBody,
    tsLintPlugin: TS extends true ? TsPluginBody : null,
  ): IOptions<
      TS extends true ? JsPlugin & TsPlugin : JsPlugin,
      TS extends true ? TsLanguage : Record<string, never>
    >["plugins"] {
    const basePlugins: StylisticPlugin & JsPlugin = {
      "@stylistic": stylisticPlugin,
      "@eslint/js": jsLintPlugin,
    };

    return this.setTsPlugin(
      tsLintPlugin,
      basePlugins,
    );
  }

  protected setLanguageOptions(
    tsLintParser: ConstructorParameters<typeof Options<TS>>[3],
  ): IOptions<
      TS extends true ? JsPlugin & TsPlugin : JsPlugin,
      TS extends true ? TsLanguage : Record<string, never>
    >["languageOptions"] {
    const baseLanguageOptions: EcmaLanguage = {
      ecmaVersion: "latest",
      sourceType: "module",
    };

    return this.setTsParser(
      tsLintParser,
      baseLanguageOptions,
    );
  }

  protected abstract setTsPlugin(
    tsLintPlugin: TS extends true ? TsPluginBody : null,
    basePlugins: StylisticPlugin & JsPlugin
  ): IOptions<
    TS extends true ? JsPlugin & TsPlugin : JsPlugin,
    TS extends true ? TsLanguage : Record<string, never>
  >["plugins"];

  protected abstract setTsParser(
    tsLintParser: unknown,
    baseLanguageOptions: EcmaLanguage
  ): IOptions<
    TS extends true ? JsPlugin & TsPlugin : JsPlugin,
    TS extends true ? TsLanguage : Record<string, never>
  >["languageOptions"];
}
