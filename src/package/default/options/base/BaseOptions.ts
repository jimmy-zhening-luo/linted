export default abstract class BaseOptions<
  Plugin,
  LanguageOptions = {},
  Processor = "",
> {
  constructor(
    public readonly body: IOptions<
      Plugin
      ,
      LanguageOptions
      ,
      Processor
    >,
  ) {}
}
