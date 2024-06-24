import BaseOptions from "./base/BaseOptions.js";

export default class YmlOptions extends BaseOptions<
  "yml"
  ,
  YmlPlugin
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
    plugins: YmlOptions["body"]["plugins"],
    parser: YmlOptions["body"]["languageOptions"]["parser"],
    ...files: string[]
  ) {
    super(
      {
        name: "jimbolint/yml",
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
