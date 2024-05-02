import Options from "./options/Options.js";

export default class TsOptions extends Options<
  JsPlugin & TsPlugin,
  TsLanguage
> {
  constructor(
    plugins: StylisticPlugin & JsPlugin & TsPlugin,
    parser: TsLanguage["parser"],
    ...files: string[]
  ) {
    super(
      plugins,
      {
        ecmaVersion: "latest",
        sourceType: "module",
        parser,
        parserOptions: {
          ecmaVersion: "latest",
          sourceType: "module",
          project: true,
        },
      },
      files,
    );
  }
}
