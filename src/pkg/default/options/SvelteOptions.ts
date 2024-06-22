import BaseOptions from "./base/BaseOptions.js";
import type TsOptions from "./TsOptions.js";

export default class SvelteOptions extends BaseOptions<
  & TsOptions["body"]["plugins"]
  & SveltePlugin
  ,
  & TsOptions["body"]["languageOptions"]
  & SvelteLanguage
  ,
  SvelteProcessor
> {
  constructor(
    plugins: SvelteOptions["body"]["plugins"],
    svelteParser: SvelteOptions["body"]["languageOptions"]["parser"],
    tsParser: SvelteOptions["body"]["languageOptions"]["parserOptions"]["parser"],
    ...files: string[]
  ) {
    super(
      {
        processor: "svelte/svelte",
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
