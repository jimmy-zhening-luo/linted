import BaseOptions from "./base/BaseOptions.js";

export default class JsonOptions extends BaseOptions<
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
        files,
        plugins,
        linterOptions: {
          noInlineConfig: true,
          reportUnusedDisableDirectives: true,
        },
        languageOptions: { parser },
      },
    );
  }
}
