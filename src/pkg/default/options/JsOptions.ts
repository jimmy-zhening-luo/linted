import BaseOptions from "./base/BaseOptions.js";

export default class JsOptions extends BaseOptions<
  StylisticPlugin,
  JsLanguage
> {
  constructor(
    plugins: JsOptions["body"]["plugins"],
    ...files: string[]
  ) {
    super(
      {
        files,
        plugins,
        linterOptions: {
          noInlineConfig: true,
          reportUnusedDisableDirectives: "error",
        },
        languageOptions: {
          ecmaVersion: "latest",
          sourceType: "module",
        },
      },
    );
  }
}
