declare type IOLanguageParserOptions<
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
