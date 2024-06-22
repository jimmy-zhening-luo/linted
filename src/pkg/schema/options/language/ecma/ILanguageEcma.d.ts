declare type ILanguageEcma<
  EcmaVersion,
> = EcmaVersion extends number
  ? Record<
    "ecmaVersion"
    ,
    EcmaVersion
  >
  : literalful<
    EcmaVersion
  > extends never
    ? {}
    : EcmaVersion extends
    | "latest"
    | `${number}`
    | `ES${number}`
    | `es${number}`
      ? Record<
        "ecmaVersion"
        ,
        EcmaVersion
      >
      : {};
