declare type Processor<P extends string> = Record<
  "processor",
  IProcessor<P>
>;
