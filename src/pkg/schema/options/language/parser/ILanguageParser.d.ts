declare type ILanguageParser<
  Parser,
> = Parser extends false
  ? {}
  : Parser extends true
    ? Record<
      "parser"
      ,
      unknown
    >
    : {};
