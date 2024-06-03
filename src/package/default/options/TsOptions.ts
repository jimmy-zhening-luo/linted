import BaseOptions from "./base/BaseOptions.js";
import type JsOptions from "./JsOptions.js";

export default class TsOptions extends BaseOptions<
  TsPlugin
  ,
  ""
  ,
  & JsOptions["body"]["languageOptions"]
  & TsLanguage
> {
  constructor(
    plugins:
      & StylisticPlugin
      & TsPlugin,
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
