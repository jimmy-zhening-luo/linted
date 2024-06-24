import Option from "./base/Option.js";

export default class JsoncOption extends Option<
  "jsonc"
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
    plugins: JsoncOption["body"]["plugins"],
    parser: JsoncOption["body"]["languageOptions"]["parser"],
    ...files: string[]
  ) {
    super(
      {
        name: "linted/scope:jsonc",
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
