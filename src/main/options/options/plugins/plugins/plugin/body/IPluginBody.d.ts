declare type IPluginBody<Preconfig extends string> = literalful<Preconfig> extends never
  ? never
  : Record<
    "configs",
    Record<
      Preconfig,
      Record<
        "rules",
        IRules
      >
    >
  >;
