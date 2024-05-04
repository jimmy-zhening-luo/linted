declare type IPlugin<
  Alias extends string,
  Plugin extends IPluginBody<
    Extract<
      keyof Plugin["configs"],
      string
    >
  >,
> = literalful<Alias> extends never
  ? never
  : Record<
    Alias,
    Plugin
  >;
