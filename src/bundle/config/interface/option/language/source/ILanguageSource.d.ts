declare type ILanguageSource<
  SourceType,
> = SourceType extends
| "module"
| "script"
| "commonjs"
  ? Record<
    "sourceType"
    ,
    SourceType
  >
  : {};
