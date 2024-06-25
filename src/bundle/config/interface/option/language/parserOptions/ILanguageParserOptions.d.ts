declare type ILanguageParserOptions<
  ParserOptions,
> = ParserOptions extends Record<
  string
  ,
  unknown
>
  ? keyof ParserOptions extends never
    ? {}
    : Record<
      "parserOptions"
      ,
      ParserOptions
    >
  : {};
