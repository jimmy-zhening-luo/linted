declare type Language =
  | RequiredLanguage
  | OptionalLanguage
;

declare type RequiredLanguage =
  | "js"
  | "ts"
;

declare type OptionalLanguage =
  | "svelte"
;
