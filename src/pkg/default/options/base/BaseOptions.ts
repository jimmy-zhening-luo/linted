export default abstract class BaseOptions<
  Name extends string,
  Plugins,
  Parser = false,
  ParserOptions = {},
  Globals = {},
  Processor = "",
  SourceType = "module",
  EcmaVersion = "latest",
  LinterOptions = {},
> {
  constructor(
    public readonly body: IOptions<
      `jimbolint/${literalful<
        Name
      >}`
      ,
      LinterOptions
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
