declare type ILanguageGlobals<
  Globals,
> = literalful<
  Globals
> extends never
  ? {}
  : Record<
    "globals"
    ,
    Record<
      Globals
      ,
      true
    >
  >;
