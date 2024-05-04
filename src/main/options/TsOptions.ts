import Options from "./options/Options.js";

export default class TsOptions extends Options<
  TsPlugin,
  TsLanguage
> {
  constructor(
    plugins: StylisticPlugin & TsPlugin,
    parser: TsParser,
    ...files: string[]
  ) {
    super(
      {
        processor: null,
        files,
        plugins,
        languageOptions: {
          ecmaVersion: "latest",
          sourceType: "module",
          parser,
          parserOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            project: true,
          },
        },
      },
    );
  }
}
