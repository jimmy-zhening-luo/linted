declare type IPlugins<
  Plugins,
> = Plugins extends Record<
  string
  ,
  unknown
>
  ? {} extends Plugins
      ? {}
      : Record<
        "plugins"
        ,
        Plugins
      >
  : {};
