declare type ILanguageOptions<
  EcmaVersion,
  SourceType,
  Parser,
  ParserOptions,
  Globals,
> = Record<
  "languageOptions"
  ,
  & ILanguageEcma<
    EcmaVersion
  >
  & ILanguageSource<
    SourceType
  >
  & ILanguageGlobals<
    Globals
  >
  & ILanguageParser<
    Parser
  >
  & ILanguageParserOptions<
    ParserOptions
  >
>
;
