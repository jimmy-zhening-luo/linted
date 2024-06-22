declare type ILanguageGlobals<
  Globals extends Record<
    string
    ,
    true
  >,
> = {} extends Globals
  ? {}
  : Record<
    "globals"
    ,
    Globals
  >;
