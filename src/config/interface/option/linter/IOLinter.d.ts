declare type IOLinter<
  NoInline extends boolean,
  ReportUnused extends
  | boolean
  | IOLinter.States,
> = {
  linterOptions: {
    noInlineConfig: True<NoInline> extends never
      ? false
      : True<NoInline>;
    reportUnusedDisableDirectives: True<ReportUnused> extends never
      ? literalful<ReportUnused> extends never
        ? false
        : literalful<ReportUnused> extends IOLinter.States
          ? literalful<ReportUnused>
          : false
      : True<ReportUnused>;
  };
};

declare namespace IOLinter {
  export type States =
    | "error"
    | "warn"
    | "off";
}