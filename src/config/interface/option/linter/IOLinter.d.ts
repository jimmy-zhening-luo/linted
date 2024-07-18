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
    reportUnusedDisableDirectives: [ReportUnused] extends [boolean]
      ? True<ReportUnused> extends never
        ? false
        : True<ReportUnused>
      : [ReportUnused] extends [string]
          ? literalful<ReportUnused> extends never
            ? false
            : literalful<ReportUnused> extends IOLinter.States
              ? literalful<ReportUnused>
              : false
          : false;
  };
};

declare namespace IOLinter {
  export type States =
    | "error"
    | "warn"
    | "off";
}
