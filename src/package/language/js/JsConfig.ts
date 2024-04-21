import BaseConfig from "../../base/BaseConfig.js";
import type { JsPlugin } from "./plugins/JsPlugin.js";
import type LintParser from "../../config/options/linter/language/LanguageParser.js";

interface JsPlugins { "@eslint/js": JsPlugin }

export default class JsConfig<
  P extends BaseConfig<P>["plugins"],
  A extends null | LintParser = null,
> extends BaseConfig<
    P & JsPlugins,
    A
  > {
  constructor(
    stylistic: BaseConfig["plugins"]["@stylistic"],
    js: JsPlugin,
    plugins: P,
    parser: A,
    files: string[] = [],
    rules: BaseConfig["rules"] = {},
  ) {
    super(
      stylistic,
      {
        "@eslint/js": js,
        ...plugins,
      },
      parser,
      files,
      rules,
    );
  }
}
