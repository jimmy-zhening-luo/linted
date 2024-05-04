declare const processor: unique symbol;
declare type IProcessor<Processor extends string> = literalful<Processor> extends never
  ? null
  : Processor & { [processor]: Processor };
