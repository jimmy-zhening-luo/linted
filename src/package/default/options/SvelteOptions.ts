import BaseOptions from "./base/BaseOptions.js";

export default class SvelteOptions extends BaseOptions<
  & SveltePlugin
  & TsPlugin
  ,
  "svelte/svelte"
  ,
  SvelteLanguage
> {
  constructor(
    plugins:
      & StylisticPlugin
      & SveltePlugin
      & TsPlugin,
    tsParser: unknown,
    svelteParser: unknown,
    processor: SvelteProcessor,
    ...files: string[]
  ) {
    super(
      {
        processor,
        files,
        plugins,
        linterOptions: {
          noInlineConfig: true,
          reportUnusedDisableDirectives: true,
        },
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
