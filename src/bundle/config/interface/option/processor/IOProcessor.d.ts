declare type IOProcessor<
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
