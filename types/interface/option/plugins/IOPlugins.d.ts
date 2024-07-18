declare type IOPlugins<PluginId extends string> = literalful<PluginId> extends never
  ? never
  : { plugins: Record<literalful<PluginId>, { configs: unknown }> };
