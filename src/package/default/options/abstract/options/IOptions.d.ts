declare type IOptions<
  Plugin,
  Processor,
  Language = {},
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
    & LanguageOptions<
      Language
    >
    )
  : (
    & IFiles
    & LinterOptions
    & IPlugins<
      & StylisticPlugin
      & Plugin
    >
    & LanguageOptions<
      Language
    >
    & IProcessor<
      Processor
    >
    )
;
