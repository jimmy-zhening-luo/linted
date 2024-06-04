import BaseOptions from "./base/BaseOptions.js";

export default class MdOptions extends BaseOptions<
  & PrettierPlugin
  & MdPlugin
  ,
  MdProcessor
> {
  constructor(
    plugins:
      & StylisticPlugin
      & PrettierPlugin
      & MdPlugin,
    ...files: string[]
  ) {
    super(
      {
        processor: "markdown/markdown",
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
