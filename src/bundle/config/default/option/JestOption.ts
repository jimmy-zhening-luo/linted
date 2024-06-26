import Option from "./base/Option.js";
import type TsOption from "./TsOption.js";

export default class JestOption extends Option<
  "jest"
  ,
  | "jest"
  | keyof TsOption["body"]["plugins"]
  ,
  true
  ,
  & TsOption["body"]["languageOptions"]["parserOptions"]
  ,
  "jest/globals"
> {
  constructor(
    plugins: JestOption["body"]["plugins"],
    parser: JestOption["body"]["languageOptions"]["parser"],
    ...files: string[]
  ) {
    super(
      {
        name: "linted/scope:jest",
        files,
        plugins,
        linterOptions: {
          noInlineConfig: true,
          reportUnusedDisableDirectives: "error",
        },
        languageOptions: {
          globals: { "jest/globals": true },
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
