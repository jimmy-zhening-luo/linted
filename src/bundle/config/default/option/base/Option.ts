export default class Option<
  Scope extends string,
  Plugins,
  Parser = false,
  ParserOptions = {},
  Globals = never,
  Processor = never,
  SourceType = "module",
  EcmaVersion = "latest",
  LinterOptions = {},
> {
  constructor(
    public readonly body: IOption<
      `linted/scope:${
        literalful<
          Scope
        >
      }`
      ,
      LinterOptions
      ,
      literalful<
        Plugins
      >
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
