import Options from "./options/Options.js";

export default class SvelteOptions extends Options<
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
            project: true,
            extraFileExtensions: [".svelte"],
            parser: tsParser,
          },
        },
      },
    );
  }
}
