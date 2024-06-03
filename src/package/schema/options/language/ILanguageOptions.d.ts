declare type ILanguageOptions<
  LanguageOptions,
> = Record<
  "languageOptions"
  ,
  & EcmaLanguage
  & LanguageOptions
>;
