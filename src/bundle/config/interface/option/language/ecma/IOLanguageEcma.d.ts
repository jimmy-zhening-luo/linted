declare type IOLanguageEcma<
  Ecma,
> = Ecma extends
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
    Ecma
  >
  : {};
