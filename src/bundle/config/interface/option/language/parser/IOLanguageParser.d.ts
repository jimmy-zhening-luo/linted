declare type IOLanguageParser<
  Parser,
> = Parser extends true
  ? Record<
    "parser"
    ,
    unknown
  >
  : {};
