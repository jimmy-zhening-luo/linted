declare type ILanguageParser<
  Parser,
> = Parser extends true
  ? Record<
    "parser"
    ,
    unknown
  >
  : {};
