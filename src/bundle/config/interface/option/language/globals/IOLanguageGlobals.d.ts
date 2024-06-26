declare type IOLanguageGlobals<
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
