import Option from "./base/Option.js";
import type JsOption from "./JsOption.js";

export default class TsOption extends Option<
  "ts",
  | "@typescript-eslint"
  | keyof JsOption["body"]["plugins"]
  ,
  true,
  & JsOption["body"]["languageOptions"]
  & { project: "tsconfig.json" }
> {
  constructor(
    plugins: TsOption["body"]["plugins"],
    parser: unknown,
    ...files: string[]
  ) {
    super(
      {
        name: "linted/scope:ts",
        files,
        plugins,
        linterOptions: {
          noInlineConfig: true,
          reportUnusedDisableDirectives: "error",
        },
        languageOptions: {
          ecmaVersion: "latest",
          sourceType: "module",
          parser,
          parserOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            project: "tsconfig.json",
          },
        },
      },
    );
  }
}
