declare type ILanguageGlobals<
  Globals,
> = Globals extends Record<
  string
  ,
  true
>
  ? {} extends Globals
      ? {}
      : Record<
        "globals"
        ,
        Globals
      >
  : {};
