declare type IPlugin<T extends string> = Record<"configs", Record<literalful<T>, { rules: IRules }>>;
