declare type IOName<
  Name,
> = literalful<
  Name
> extends never
  ? never
  : Record<
    "name"
    ,
    Name
  >;
