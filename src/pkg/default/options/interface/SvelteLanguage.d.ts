declare type SvelteLanguage = {
  parser: unknown;
  parserOptions:
    & TsLanguage[
      "parserOptions"
    ]
    & {
      extraFileExtensions: [
        ".svelte",
      ];
      parser: TsLanguage[
        "parser"
      ];
    }
  ;
};
