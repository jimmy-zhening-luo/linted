declare type SvelteLanguage = {
  parser: SvelteParser;
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
