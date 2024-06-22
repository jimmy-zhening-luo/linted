import BaseOptions from "./base/BaseOptions.js";
import type TsOptions from "./TsOptions.js";

export default class JestOptions extends BaseOptions<
  & TsOptions["body"]["plugins"]
  & JestPlugin
  ,
  & TsOptions["body"]["languageOptions"]
  & JestLanguage
> {
  constructor(
    plugins: JestOptions["body"]["plugins"],
    parser: JestOptions["body"]["languageOptions"]["parser"],
    ...files: string[]
  ) {
    super(
      {
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
