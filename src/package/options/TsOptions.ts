import Options from "./options/Options.js";

export default class TsOptions extends Options<
  JsPlugin & TsPlugin,
  TsLanguage
> {
  constructor(
    stylistic: StylisticPluginBody,
    jsLint: JsPluginBody,
    tsLint: TsPluginBody,
    parser: TsLanguage["parser"],
    ...files: string[]
  ) {
    super(
      {
        "@stylistic": stylistic,
        "@eslint/js": jsLint,
        "@typescript-eslint": tsLint,
      },
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
