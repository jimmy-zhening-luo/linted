export default abstract class AbstractOptions<
  Plugs = {},
  LangOpts = {},
  Pro extends string = "",
> {
  public readonly config: IOptions<Plugs, LangOpts, Pro>;

  constructor(
    opts: Omit<IOptions<Plugs, LangOpts, Pro>, "linterOptions">,
  ) {
    this.config = {
      linterOptions: {
        noInlineConfig: true,
        reportUnusedDisableDirectives: true,
      },
      ...opts,
    };
  }
}
