import BaseOptions from "./base/BaseOptions.js";

export default class HtmlOptions extends BaseOptions<
  HtmlPlugin
  ,
  HtmlLanguage
> {
  constructor(
    plugins: HtmlOptions["body"]["plugins"],
    parser: HtmlOptions["body"]["languageOptions"]["parser"],
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
        languageOptions: { parser },
      },
    );
  }
}
