declare type IPlugin<
  A extends string,
  B extends IPluginBody<
    Extract<
      keyof B["configs"],
      string
    >
  >,
> = PluginAlias<A> extends never
  ? never
  : Record<A, B>;
