declare type ILanguageEcma<
  EcmaVersion,
> = EcmaVersion extends
| number
| "latest"
| `${
  number
}`
| `ES${
  number
}`
| `es${
  number
}`
  ? Record<
    "ecmaVersion"
    ,
    EcmaVersion
  >
  : {};
