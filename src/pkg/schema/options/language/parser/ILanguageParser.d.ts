declare type ILanguageParser<
  Parser,
> = Parser extends false
  ? {}
  : Record<
    "parser"
    ,
    unknown
  >;
