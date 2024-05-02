declare type IPlugin<A extends PluginAlias, B extends IPluginBody<Extract<keyof B["configs"], string>>> = Record<A, B>;
