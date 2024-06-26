declare type IOLanguageSource<
  Source,
> = Source extends
| "module"
| "script"
| "commonjs"
  ? Record<
    "sourceType"
    ,
    Source
  >
  : {};
