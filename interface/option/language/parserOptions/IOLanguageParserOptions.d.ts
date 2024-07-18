declare type IOLanguageParserOptions<ParserOptions extends object> = Interface<ParserOptions> extends never
  ? object
  : Keys<ParserOptions> extends never
    ? object
    : { parserOptions: Interface<ParserOptions> };
