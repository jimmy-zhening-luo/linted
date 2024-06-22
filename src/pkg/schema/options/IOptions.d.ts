declare type IOptions<
  Name,
  LinterOptions,
  Plugin,
  LanguageOptions,
  Processor,
> =
  & IName<Name>
  & IFiles
  & ILinterOptions<
    LinterOptions
  >
  & IPlugins<
    Plugin
  >
  & ILanguageOptions<
    LanguageOptions
  >
  & IProcessor<
    Processor
  >
;
