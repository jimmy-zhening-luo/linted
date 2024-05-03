declare const parser: unique symbol;
declare type Parser<L extends string> = literalful<L> extends never
  ? never
  : L & { [parser]: L };
