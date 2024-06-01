declare type LinterOptions = Record<
  "linterOptions"
  ,
  Record<
    | "noInlineConfig"
    | "reportUnusedDisableDirectives"
    ,
    true
  >
>;
