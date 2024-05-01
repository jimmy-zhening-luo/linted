import Options from "./options/Options.js";

export default class JsOptions extends Options {
  constructor(
    stylistic: ConstructorParameters<typeof Options<false>>[0],
    jsLint: ConstructorParameters<typeof Options<false>>[1],
    ...files: string[]
  ) {
    super(
      stylistic,
      jsLint,
      null,
      null,
      ...files,
    );
  }

  protected setTsPlugin(
    tsLintPlugin: null,
    basePlugins: Options["plugins"],
  ): Options["plugins"] {
    tsLintPlugin = tsLintPlugin;

    return { ...basePlugins };
  }

  protected setTsParser(
    tsParser: null,
    baseLanguageOptions: Options["languageOptions"],
  ): Options["languageOptions"] {
    tsParser = tsParser;

    return baseLanguageOptions;
  }
}
