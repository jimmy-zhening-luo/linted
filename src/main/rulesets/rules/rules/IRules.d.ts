declare type IRules = Record<
  string,
  (
    | RuleSeverity
    | [RuleSeverity, ...unknown[]]
  )
>;
