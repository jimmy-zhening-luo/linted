declare type IOProcessor<ProcessorId extends string> = literalful<ProcessorId> extends never
  ? object
  : { processor: literalful<ProcessorId> };
