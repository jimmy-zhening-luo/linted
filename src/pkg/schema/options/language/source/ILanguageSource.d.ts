declare type ILanguageSource<
  SourceType,
> = literalful<
  SourceType
> extends never
  ? {}
  : SourceType extends
  | "module"
  | "script"
  | "commonjs"
    ? Record<
      "sourceType"
      ,
      SourceType
    >
    : {};
