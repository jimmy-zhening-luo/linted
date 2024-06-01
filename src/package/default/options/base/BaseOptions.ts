export default abstract class BaseOptions<
  Plugin,
  Processor,
  Language = {},
> {
  public readonly config: IOptions<
    Plugin
    ,
    Processor
    ,
    Language
  >;

  constructor(
    opts: BaseOptions<
      Plugin
      ,
      Processor
      ,
      Language
    >[
      "config"
    ],
  ) {
    this
      .config = opts;
  }
}
