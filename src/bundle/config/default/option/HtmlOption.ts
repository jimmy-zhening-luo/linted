import Option from "./base/Option.js";

export default class HtmlOption extends Option<
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
    plugins: HtmlOption["body"]["plugins"],
    parser: HtmlOption["body"]["languageOptions"]["parser"],
    ...files: string[]
  ) {
    super(
      {
        name: "linted/scope:html",
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
