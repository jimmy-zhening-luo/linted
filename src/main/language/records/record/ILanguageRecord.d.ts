declare type ILanguageRecord<
  L extends string,
  T = string,
> = literalful<L> extends never
  ? never
  : Record<L, T>;
