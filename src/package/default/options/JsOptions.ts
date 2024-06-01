import AbstractOptions from "./abstract/AbstractOptions.js";

export default class JsOptions extends AbstractOptions<
  {},
  ""
> {
  constructor(
    plugins: StylisticPlugin,
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
        languageOptions: {
          ecmaVersion: "latest",
          sourceType: "module",
        },
      },
    );
  }
}
