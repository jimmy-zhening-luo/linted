declare type IProcessor<
  P,
> = literalful<
  P
> extends never
  ? {}
  : Record<
    "processor"
    ,
    P
  >;
