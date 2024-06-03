import BaseOptions from "./base/BaseOptions.js";

export default class YmlOptions extends BaseOptions<
  YmlPlugin
  ,
  ""
  ,
  YmlLanguage
> {
  constructor(
    plugins:
      & StylisticPlugin
      & YmlPlugin,
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
