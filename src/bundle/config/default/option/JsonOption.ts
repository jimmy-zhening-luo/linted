import Option from "./base/Option.js";

export default class JsonOption extends Option<
  "json"
  ,
  JsonPlugin
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
    plugins: JsonOption["body"]["plugins"],
    parser: JsonOption["body"]["languageOptions"]["parser"],
    ...files: string[]
  ) {
    super(
      {
        name: "linted/scope:json",
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
