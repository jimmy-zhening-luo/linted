import ConfigOptions from "./options/ConfigOptions.js";

export default class TsConfigOptions extends ConfigOptions<true> {
  protected setTsPlugin(
    tsLintPlugin: ConstructorParameters<typeof ConfigOptions<true>>[2],
    basePlugins: ConfigOptions["plugins"],
  ): ConfigOptions<true>["plugins"] {
    return {
      ...basePlugins,
      "@typescript-eslint": tsLintPlugin,
    };
  }

  protected setTsParser(
    tsParser: ConstructorParameters<typeof ConfigOptions<true>>[3],
    baseLanguageOptions: ConfigOptions["languageOptions"],
  ): ConfigOptions<true>["languageOptions"] {
    tsParser = tsParser;

    return {
      ...baseLanguageOptions,
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "es2022",
        sourceType: "module",
        project: true,
      },
    };
  }
}
