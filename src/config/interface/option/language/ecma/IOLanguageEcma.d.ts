declare type IOLanguageEcma<Ecma extends number | IOLanguageEcma.Ecma> = [Ecma] extends [number]
  ? Numbered<Ecma> extends never
    ? object
    : { ecmaVersion: Numbered<Ecma> }

  : [Ecma] extends [string]
      ? literalful<Ecma> extends never
        ? object
        : literalful<Ecma> extends IOLanguageEcma.Ecma
          ? { ecmaVersion: literalful<Ecma> }
          : object
      : object;

declare namespace IOLanguageEcma {
  export type Ecma =
    | `${number}`
    | `ES${number}`
    | `es${number}`
    | "latest";
}
