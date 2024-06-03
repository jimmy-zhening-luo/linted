declare type IOptions<
  Plugin,
  Processor,
  LanguageOptions = {},
> = literalful<
  Processor
> extends never
  ? (
    & IFiles
    & LinterOptions
    & IPlugins<
      & StylisticPlugin
      & Plugin
    >
    & ILanguageOptions<
      LanguageOptions
    >
    )
  : (
    & IFiles
    & LinterOptions
    & IPlugins<
      & StylisticPlugin
      & Plugin
    >
    & ILanguageOptions<
      LanguageOptions
    >
    & IProcessor<
      Processor
    >
    )
;
