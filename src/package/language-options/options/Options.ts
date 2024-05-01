type IOptions<TS extends boolean = false> = LinterSettings<TS> & {
  files: string[];
};

export default abstract class Options<
  TS extends boolean = false,
> implements IOptions<TS> {
  public readonly files: string[];
  public readonly linterOptions: {
    noInlineConfig: true;
    reportUnusedDisableDirectives: true; };
  public readonly plugins: IOptions<TS>["plugins"];
  public readonly languageOptions: IOptions<TS>["languageOptions"];

  constructor(
    stylisticPlugin: IOptions["plugins"]["@stylistic"],
    jsLintPlugin: IOptions["plugins"]["@eslint/js"],
    tsLintPlugin: TS extends true ? IOptions<true>["plugins"]["@typescript-eslint"] : null,
    tsLintParser: TS extends true ? IOptions<true>["languageOptions"]["parser"] : null,
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

  public get config(): IOptions<TS> {
    return {
      files: this.files,
      linterOptions: this.linterOptions,
      plugins: this.plugins,
      languageOptions: this.languageOptions,
    };
  }

  protected setPlugins(
    stylisticPlugin: ConstructorParameters<typeof Options<TS>>[0],
    jsLintPlugin: ConstructorParameters<typeof Options<TS>>[1],
    tsLintPlugin: ConstructorParameters<typeof Options<TS>>[2],
  ): IOptions<TS>["plugins"] {
    const basePlugins: IOptions["plugins"] = {
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
  ): IOptions<TS>["languageOptions"] {
    const baseLanguageOptions: IOptions["languageOptions"] = {
      ecmaVersion: 2022,
      sourceType: "module",
    };

    return this.setTsParser(
      tsLintParser,
      baseLanguageOptions,
    );
  }

  protected abstract setTsPlugin(
    tsLintPlugin: TS extends true ? IOptions<true>["plugins"]["@typescript-eslint"] : null,
    basePlugins: IOptions["plugins"]
  ): IOptions<TS>["plugins"];

  protected abstract setTsParser(
    tsLintParser: unknown,
    baseLanguageOptions: IOptions["languageOptions"]
  ): IOptions<TS>["languageOptions"];
}
