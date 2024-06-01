export default abstract class AbstractOptions<
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
    opts: AbstractOptions<
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
