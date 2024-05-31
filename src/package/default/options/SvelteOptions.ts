import AbstractOptions from "./abstract/AbstractOptions.js";

export default class SvelteOptions extends AbstractOptions<
  SveltePlugin & TsPlugin,
  SvelteLanguage,
  "svelte/svelte"
> {
  constructor(
    plugins: StylisticPlugin & SveltePlugin & TsPlugin,
    tsParser: TsParser,
    svelteParser: SvelteParser,
    processor: SvelteProcessor,
    ...files: string[]
  ) {
    super(
      {
        processor,
        files,
        plugins,
        languageOptions: {
          ecmaVersion: "latest",
          sourceType: "module",
          parser: svelteParser,
          parserOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            project: "tsconfig.json",
            extraFileExtensions: [".svelte"],
            parser: tsParser,
          },
        },
      },
    );
  }
}
