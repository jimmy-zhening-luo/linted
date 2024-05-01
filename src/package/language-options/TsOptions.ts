import Options from "./options/Options.js";

export default class TsOptions extends Options<true> {
  protected setTsPlugin(
    tsLintPlugin: ConstructorParameters<typeof Options<true>>[2],
    basePlugins: Options["plugins"],
  ): Options<true>["plugins"] {
    return {
      ...basePlugins,
      "@typescript-eslint": tsLintPlugin,
    };
  }

  protected setTsParser(
    tsParser: ConstructorParameters<typeof Options<true>>[3],
    baseLanguageOptions: Options["languageOptions"],
  ): Options<true>["languageOptions"] {
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
