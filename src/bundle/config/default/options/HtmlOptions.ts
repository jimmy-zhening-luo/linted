import BaseOptions from "./base/BaseOptions.js";

export default class HtmlOptions extends BaseOptions<
  "html"
  ,
  HtmlPlugin
  ,
  true
  ,
  {}
  ,
  {}
  ,
  ""
  ,
  ""
  ,
  ""
> {
  constructor(
    plugins: HtmlOptions["body"]["plugins"],
    parser: HtmlOptions["body"]["languageOptions"]["parser"],
    ...files: string[]
  ) {
    super(
      {
        name: "jimbolint/html",
        files,
        plugins,
        linterOptions: {
          noInlineConfig: true,
          reportUnusedDisableDirectives: "error",
        },
        languageOptions: { parser },
      },
    );
  }
}
