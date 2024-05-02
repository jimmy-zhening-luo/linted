export default abstract class Options<
  Plugins,
  Language,
> implements IOptions<
  Plugins,
  Language
> {
  public readonly linterOptions: LinterOptions;

  constructor(
    public readonly plugins: IOptions<Plugins, Language>["plugins"],
    public readonly languageOptions: IOptions<Plugins, Language>["languageOptions"],
    public readonly files: IFiles,
  ) {
    this.linterOptions = {
      noInlineConfig: true,
      reportUnusedDisableDirectives: true,
    };
  }

  public get config(): IOptions<Plugins, Language> {
    return {
      files: this.files,
      linterOptions: this.linterOptions,
      plugins: this.plugins,
      languageOptions: this.languageOptions,
    };
  }
}
