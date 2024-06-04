import BaseOptions from "./base/BaseOptions.js";

export default class JsOptions extends BaseOptions<
  {},
  "",
  JsLanguage
> {
  constructor(
    plugins: StylisticPlugin,
    ...files: string[]
  ) {
    super(
      {
        files,
        plugins,
        linterOptions: {
          noInlineConfig: true,
          reportUnusedDisableDirectives: true,
        },
        languageOptions: {
          ecmaVersion: "latest",
          sourceType: "module",
        },
      },
    );
  }
}
