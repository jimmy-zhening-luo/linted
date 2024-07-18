declare type IOLanguageGlobals<GlobalTypes extends string> = literalful<GlobalTypes> extends never
  ? object
  : { globals: Record<literalful<GlobalTypes>, true> };
