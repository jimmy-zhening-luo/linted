declare type IOption<
  Name extends string,
  NoInline extends boolean,
  ReportUnused extends boolean | IOLinter.States,
  PluginId extends string,
  Ecma extends number | IOLanguageEcma.Ecma,
  Source extends IOLanguageSource.Source,
  UseParser extends boolean,
  ParserOptions extends object,
  GlobalTypes extends string,
  ProcessorId extends string,
> =
  & IFiles
  & IOName<Name>
  & IOLinter<NoInline, ReportUnused>
  & IOPlugins<PluginId>
  & IOLanguage<
    Ecma,
    Source,
    UseParser,
    ParserOptions,
    GlobalTypes
  >
  & IOProcessor<ProcessorId>
;
