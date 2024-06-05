declare type IOptions<
  Plugin,
  LanguageOptions,
  Processor,
> = literalful<
  Processor
> extends never
  ? (
    & IFiles
    & LinterOptions
    & IPlugins<
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
