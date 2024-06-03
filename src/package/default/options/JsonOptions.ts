import BaseOptions from "./base/BaseOptions.js";

export default class JsonOptions extends BaseOptions<
  JsonPlugin
  ,
  ""
  ,
  JsonLanguage
> {
  constructor(
    plugins:
      & StylisticPlugin
      & JsonPlugin,
    parser: unknown,
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
          parser,
        },
      },
    );
  }
}
