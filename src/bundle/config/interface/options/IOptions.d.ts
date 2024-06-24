declare type IOptions<
  Name,
  LinterOptions,
  Plugins,
  EcmaVersion,
  SourceType,
  Parser,
  ParserOptions,
  Globals,
  Processor,
> =
  & IFiles
  & IName<
    Name
  >
  & ILinterOptions<
    LinterOptions
  >
  & IPlugins<
    Plugins
  >
  & ILanguageOptions<
    EcmaVersion
    ,
    SourceType
    ,
    Parser
    ,
    ParserOptions
    ,
    Globals
  >
  & IProcessor<
    Processor
  >
;
