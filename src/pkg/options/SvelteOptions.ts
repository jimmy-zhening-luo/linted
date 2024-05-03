import Options from "./options/Options.js";

export default class SvelteOptions extends Options<
  SveltePlugin & TsPlugin,
  SvelteLanguage
> {
  constructor(
    plugins: StylisticPlugin & SveltePlugin & TsPlugin,
    tsParser: TsParser,
    svelteParser: SvelteParser,
    ...files: string[]
  ) {
    super(
      plugins,
      {
        ecmaVersion: "latest",
        sourceType: "module",
        parser: tsParser,
        parserOptions: {
          ecmaVersion: "latest",
          sourceType: "module",
          project: true,
          extraFileExtensions: [".svelte"],
        },
        overrides: [
          {
            files,
            parser: svelteParser,
            parserOptions: { parser: tsParser },
          },
        ],
      },
      files,
    );
  }
}
