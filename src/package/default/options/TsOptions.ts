import AbstractOptions from "./abstract/AbstractOptions.js";

export default class TsOptions extends AbstractOptions<
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
            project: "tsconfig.json",
          },
        },
      },
    );
  }
}
