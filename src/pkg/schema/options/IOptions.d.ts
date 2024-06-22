declare type IOptions<
  LinterOptions,
  Plugin,
  LanguageOptions,
  Processor,
> = literalful<
  Processor
> extends never
  ? (
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
    )
  : (
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
    )
;
