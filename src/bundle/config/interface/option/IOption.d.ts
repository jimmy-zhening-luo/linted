declare type IOption<
  Name,
  NoInlineConfig,
  ReportUnusedDisableDirectives,
  Plugins,
  EcmaVersion,
  SourceType,
  Parser,
  ParserOptions,
  Globals,
  Processor,
> =
  & IFiles
  & IOName<
    Name
  >
  & IOLinter<
    NoInlineConfig
    ,
    ReportUnusedDisableDirectives
  >
  & IOPlugins<
    Plugins
  >
  & IOLanguage<
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
  & IOProcessor<
    Processor
  >
;
