declare type JsPlugin = IPlugin<"@eslint/js", JsPluginBody>;

declare type ShouldBeTrue = (JsPlugin & StylisticPlugin) extends IPlugin<PluginAlias, IPluginBody<string>>
  ? true : false;
