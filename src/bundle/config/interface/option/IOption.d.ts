declare type IOption<
  ScopedName,
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
    ScopedName
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
