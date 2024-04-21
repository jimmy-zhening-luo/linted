export type Language<
  Parser extends null | object,
  ParserO extends Record<string, unknown>,
> = Parser extends NonNullable<Parser> ?
    {
      ecmaVersion: number;
      sourceType: string;
      parser: Parser;
      parserOptions: ParserO;
    }
  : {
      ecmaVersion: number;
      sourceType: string;
      parserOptions: ParserO;
    };
