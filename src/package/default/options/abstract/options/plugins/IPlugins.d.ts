declare type IPlugins<
  Plugin,
> = Record<
  "plugins"
  ,
  & StylisticPlugin
  & Plugin
>;
