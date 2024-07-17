declare type IOLanguageParser<UseParser extends boolean> = True<UseParser> extends never
  ? object
  : { parser: unknown };
