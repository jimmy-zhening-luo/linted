export default abstract class BaseOptions<
  Name extends string,
  Plugin,
  LanguageOptions = {},
  Processor = "",
> {
  constructor(
    public readonly body: IOptions<
      `jimbolint/${literalful<Name>}`
      ,
      EsLinter
      ,
      Plugin
      ,
      LanguageOptions
      ,
      Processor
    >,
  ) {}
}
