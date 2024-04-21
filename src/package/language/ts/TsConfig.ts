import { Config } from "../../config/Config.js";

import { TsPlugin } from "../plugins/TsPlugin.js";

export default class TsConfig extends IConfig<> {
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
