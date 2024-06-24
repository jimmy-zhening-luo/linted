declare type ILinterOptions<
  LinterOptions,
> = Record<
  "linterOptions"
  ,
  LinterOptions extends {
    noInlineConfig: boolean;
    reportUnusedDisableDirectives:
      | "error"
      | "warn"
      | "off"
      | boolean
    ;
  }
    ? LinterOptions
    : {
        noInlineConfig: true;
        reportUnusedDisableDirectives: "error";
      }
>;
