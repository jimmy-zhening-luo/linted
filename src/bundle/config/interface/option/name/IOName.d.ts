declare type IOName<Name extends string> = literalful<Name> extends never
  ? never
  : { name: literalful<Name> };
