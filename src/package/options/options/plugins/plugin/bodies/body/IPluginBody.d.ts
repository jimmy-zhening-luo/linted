declare type IPluginBody<Preset extends string> = Record<"configs", Record<literalful<Preset>, { rules: IRules }>>;
