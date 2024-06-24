import Option from "./base/Option.js";

export default class YmlOption extends Option<
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
    plugins: YmlOption["body"]["plugins"],
    parser: YmlOption["body"]["languageOptions"]["parser"],
    ...files: string[]
  ) {
    super(
      {
        name: "linted/scope:yml",
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
