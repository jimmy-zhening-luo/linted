declare type ILanguageParserOptions<
  ParserOptions,
> = ParserOptions extends Record<
  string
  ,
  unknown
>
  ? {} extends ParserOptions
      ? {}
      : Record<
        "parserOptions"
        ,
        ParserOptions
      >
  : {};
