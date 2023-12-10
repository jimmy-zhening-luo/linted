import ConfigOptions from "./options/ConfigOptions.js";

export default class JsConfigOptions extends ConfigOptions {
  constructor(
    stylistic: ConstructorParameters<typeof ConfigOptions<false>>[0],
    jsLint: ConstructorParameters<typeof ConfigOptions<false>>[1],
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
    basePlugins: ConfigOptions["plugins"],
  ): ConfigOptions["plugins"] {
    tsLintPlugin = tsLintPlugin;

    return { ...basePlugins };
  }

  protected setTsParser(
    tsParser: null,
    baseLanguageOptions: ConfigOptions["languageOptions"],
  ): ConfigOptions["languageOptions"] {
    tsParser = tsParser;

    return baseLanguageOptions;
  }
}
