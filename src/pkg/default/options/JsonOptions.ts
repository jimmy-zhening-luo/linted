import BaseOptions from "./base/BaseOptions.js";

export default class JsonOptions extends BaseOptions<
  "json"
  ,
  JsonPlugin
  ,
  JsonLanguage
> {
  constructor(
    plugins: JsonOptions["body"]["plugins"],
    parser: JsonOptions["body"]["languageOptions"]["parser"],
    ...files: string[]
  ) {
    super(
      {
        name: "jimbolint/json",
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
