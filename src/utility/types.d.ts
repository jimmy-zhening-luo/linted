// literal
declare type literal<S extends string> = string extends S
  ? never
  : S;

declare type literalful<S extends string> = literal<S> extends ""
  ? never
  : literal<S>;

// nullable
declare type Nullable<T> = null | NonNullable<T>;
