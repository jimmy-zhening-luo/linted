declare type IPlugin<A extends PluginAlias, B extends IPluginBody<Preset>, Preset extends string> = Record<A, B>;
