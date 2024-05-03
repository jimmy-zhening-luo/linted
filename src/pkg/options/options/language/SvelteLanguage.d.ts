declare type SvelteLanguage = {
  parser: TsLanguage["parser"];
  parserOptions: TsLanguage["parserOptions"] & Record<"extraFileExtensions", [".svelte"]>;
  overrides: [
    {
      files: IFiles;
      parser: SvelteParser;
      parserOptions: {
        parser: TsParser;
      };
    },
  ];
};
