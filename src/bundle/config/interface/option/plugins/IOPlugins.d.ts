declare type IOPlugins<
  Plugins,
> = literalful<
  Plugins
> extends never
  ? never
  : Record<
    "plugins"
    ,
    Record<
      Plugins
      ,
      unknown
    >
  >;
