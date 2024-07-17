declare type IOLanguage<
  Ecma extends number | IOLanguageEcma.Ecma,
  Source extends IOLanguageSource.Source,
  UseParser extends boolean,
  ParserOptions extends object,
  GlobalTypes extends string,
> = {
  languageOptions:
    & IOLanguageEcma<Ecma>
    & IOLanguageSource<Source>
    & IOLanguageGlobals<GlobalTypes>
    & IOLanguageParser<UseParser>
    & IOLanguageParserOptions<ParserOptions>
  ;
};
