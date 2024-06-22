declare type IProcessor<
  Processor,
> = literalful<
  Processor
> extends never
  ? {}
  : Record<
    "processor"
    ,
    Processor
  >;
