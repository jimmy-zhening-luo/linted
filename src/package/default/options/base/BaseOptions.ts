export default abstract class BaseOptions<
  Plugin,
  Processor,
  LanguageOptions = {},
> {
  constructor(
    public readonly body: IOptions<
      Plugin
      ,
      Processor
      ,
      LanguageOptions
    >,
  ) {}
}
