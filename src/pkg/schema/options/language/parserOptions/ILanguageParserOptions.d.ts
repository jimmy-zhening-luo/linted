declare type ILanguageParserOptions<
  ParserOptions,
> = {} extends ParserOptions
  ? {}
  : Record<
    "parserOptions"
    ,
    ParserOptions
  >;
