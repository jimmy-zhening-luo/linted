declare const parser: unique symbol;
declare type IParser<L extends string> = literalful<L> extends never
  ? never
  : L & { [parser]: L };
