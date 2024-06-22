export default abstract class BaseOptions<
  Name extends string,
  Plugins,
  Parser = false,
  ParserOptions = {},
  Globals = {},
  Processor = "",
  SourceType = "module",
  EcmaVersion = "latest",
> {
  constructor(
    public readonly body: IOptions<
      `jimbolint/${literalful<Name>}`
      ,
      {
        noInlineConfig: true;
        reportUnusedDisableDirectives: "error";
      }
      ,
      Plugins
      ,
      EcmaVersion
      ,
      SourceType
      ,
      Parser
      ,
      ParserOptions
      ,
      Globals
      ,
      Processor
    >,
  ) {}
}
