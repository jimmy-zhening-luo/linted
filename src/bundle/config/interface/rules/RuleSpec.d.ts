declare type RuleSpec = Record<
  string
  ,
  | RuleSeverity
  | [
    RuleSeverity,
    ...unknown[],
  ]
>;
