import BaseOptions from "./base/BaseOptions.js";

export default class MdOptions extends BaseOptions<
  PrettierPlugin,
  ""
> {
  constructor(
    plugins:
      & StylisticPlugin
      & PrettierPlugin,
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
        languageOptions: {},
      },
    );
  }
}
