declare type IOLinter<
  NoInlineConfig,
  ReportUnusedDisableDirectives,
> = Record<
  "linterOptions"
  ,
  {
    noInlineConfig: never extends NoInlineConfig
      ? true
      : NoInlineConfig extends false
        ? false
        : true
    ;
    reportUnusedDisableDirectives: never extends ReportUnusedDisableDirectives
      ? "error"
      : ReportUnusedDisableDirectives extends
      | "error"
      | "warn"
      | "off"
      | boolean
        ? ReportUnusedDisableDirectives
        : "error"
    ;
  }
>;
