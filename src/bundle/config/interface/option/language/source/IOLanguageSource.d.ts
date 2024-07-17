declare type IOLanguageSource<Source extends IOLanguageSource.Source> = literalful<Source> extends never
  ? object
  : literalful<Source> extends IOLanguageSource.Source
    ? { sourceType: literalful<Source> }
    : object;

declare namespace IOLanguageSource {
  export type Source =
    | "module"
    | "script"
    | "commonjs";
}
