declare type IOLanguage<
  EcmaVersion,
  SourceType,
  Parser,
  ParserOptions,
  Globals,
> = Record<
  "languageOptions"
  ,
  & IOLanguageEcma<
    EcmaVersion
  >
  & IOLanguageSource<
    SourceType
  >
  & IOLanguageGlobals<
    Globals
  >
  & IOLanguageParser<
    Parser
  >
  & IOLanguageParserOptions<
    ParserOptions
  >
>;
