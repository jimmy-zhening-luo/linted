declare type LanguageOptions<
  Opts,
> = Record<
  "languageOptions"
  ,
  & EcmaLanguage
  & Opts
>;
