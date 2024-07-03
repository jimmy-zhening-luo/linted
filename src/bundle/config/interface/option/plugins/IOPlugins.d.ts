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
      Record<
        "configs"
        ,
        unknown
      >
    >
  >;
