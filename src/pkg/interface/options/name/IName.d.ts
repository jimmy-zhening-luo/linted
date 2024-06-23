declare type IName<
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
