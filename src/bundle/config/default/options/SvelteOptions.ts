import BaseOptions from "./base/BaseOptions.js";
import type TsOptions from "./TsOptions.js";

export default class SvelteOptions extends BaseOptions<
  "svelte"
  ,
  & TsOptions["body"]["plugins"]
  & SveltePlugin
  ,
  true
  ,
  & TsOptions["body"]["languageOptions"]["parserOptions"]
  & Record<
    "parser"
    ,
    unknown
  >
  & Record<
    "extraFileExtensions"
    ,
    [".svelte"]
  >
  ,
  {}
  ,
  "svelte/svelte"
> {
  constructor(
    plugins: SvelteOptions["body"]["plugins"],
    svelteParser: SvelteOptions["body"]["languageOptions"]["parser"],
    tsParser: SvelteOptions["body"]["languageOptions"]["parserOptions"]["parser"],
    ...files: string[]
  ) {
    super(
      {
        name: "jimbolint/svelte",
        processor: "svelte/svelte",
        files,
        plugins,
        linterOptions: {
          noInlineConfig: true,
          reportUnusedDisableDirectives: "error",
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
