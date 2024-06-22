import BaseOptions from "./base/BaseOptions.js";

export default class YmlOptions extends BaseOptions<
  YmlPlugin
  ,
  YmlLanguage
> {
  constructor(
    plugins: YmlOptions["body"]["plugins"],
    parser: YmlOptions["body"]["languageOptions"]["parser"],
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
