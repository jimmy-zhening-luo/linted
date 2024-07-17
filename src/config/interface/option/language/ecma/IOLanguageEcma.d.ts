declare type IOLanguageEcma<Ecma extends number | IOLanguageEcma.Ecma> = Numbered<Ecma> extends never
  ? literalful<Ecma> extends never
    ? object
    : literalful<Ecma> extends IOLanguageEcma.Ecma
      ? { ecmaVersion: literalful<Ecma> }
      : object
  : { ecmaVersion: Numbered<Ecma> };

declare namespace IOLanguageEcma {
  export type Ecma =
    | `${number}`
    | `ES${number}`
    | `es${number}`
    | "latest";
}
