declare type IOptions<
  Plugs = {},
  LangOpts = {},
  Pro extends string = "",
> = IFiles
& LinterOptions
& Plugins<StylisticPlugin & Plugs>
& LanguageOptions<LangOpts>
& Processor<Pro>;
