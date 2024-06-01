declare type Languages = {
  js: JsOptions;
  ts: TsOptions;
  svelte?: SvelteOptions;
};

declare type LanguageIndex = Required<
  Languages
>;

declare type LanguageConfig<
  L extends Language,
> =
  & LanguageIndex[
    L
  ][
    "config"
  ]
  & Record<
    "rules"
    ,
    IRules
  >
;

declare type Rulesets =
  & Record<
    RequiredLanguage
    ,
    IRules[]
  >
  & Partial<
    Record<
      OptionalLanguage
      ,
      IRules[]
    >
  >
;

declare type RulesetIndex = Required<
  Rulesets
>;
