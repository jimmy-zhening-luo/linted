import BaseOptions from "./base/BaseOptions.js";

export default class JsOptions extends BaseOptions<
  "js"
  ,
  StylisticPlugin
> {
  constructor(
    plugins: JsOptions["body"]["plugins"],
    ...files: string[]
  ) {
    super(
      {
        name: "jimbolint/js",
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
