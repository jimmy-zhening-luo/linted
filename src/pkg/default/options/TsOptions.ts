import BaseOptions from "./base/BaseOptions.js";
import type JsOptions from "./JsOptions.js";

export default class TsOptions extends BaseOptions<
  & JsOptions["body"]["plugins"]
  & TsPlugin
  ,
  & JsOptions["body"]["languageOptions"]
  & TsLanguage
> {
  constructor(
    plugins: TsOptions["body"]["plugins"],
    parser: TsOptions["body"]["languageOptions"]["parser"],
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
