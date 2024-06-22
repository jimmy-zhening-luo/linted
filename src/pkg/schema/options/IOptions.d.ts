declare type IOptions<
  Name,
  LinterOptions,
  Plugins,
  Ecma,
  Source,
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
    Ecma
    ,
    Source
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
