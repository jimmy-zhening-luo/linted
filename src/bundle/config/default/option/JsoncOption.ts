import Option from "./base/Option.js";

export default class JsoncOption extends Option<
  "jsonc",
  "jsonc",
  true,
  never,
  never,
  never,
  never,
  never
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
