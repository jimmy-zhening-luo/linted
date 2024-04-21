import type { Config } from "../config/Config.js";
import type { Plugin } from "../config/props/plugins/Plugin.js";
import type Ruleset from "../config/rules/ruleset/Ruleset.js";

import type { StylisticPlugin } from "./plugins/StylisticPlugin.js";
import BaseRuleset from "./rules/BaseRuleset.js";

export default class BaseConfig<
  Parser extends null | object,
  ParserO extends Record<string, unknown>,
  PPre extends string,
  PH extends string,
> implements Config<Parser, ParserO, PPre, PH> {
  public readonly linterOptions: {
    noInlineConfig: true;
    reportUnusedDisableDirectives: true;
  };
  public readonly files: string[];
  public readonly rules: Ruleset;
  public readonly plugins: Config<Parser, ParserO, PPre, PH>["plugins"];
  public readonly languageOptions: Config<Parser, ParserO, PPre, PH>["languageOptions"];

  constructor(
    stylisticPlugin: StylisticPlugin,
    extension: { [handle in PH]: Plugin<PPre> },
    parser: Parser,
    parserOptions: ParserO,
    files: string[] = [],
    rules: Ruleset = {},
  ) {
    this.linterOptions = {
      noInlineConfig: true,
      reportUnusedDisableDirectives: true,
    };
    this.plugins = extension === null
      ? { "@stylistic": stylisticPlugin }
      : {
          "@stylistic": stylisticPlugin,
          extensionH,
        };
    this.languageOptions = {
      ecmaVersion: 2022,
      sourceType: "module",
      parserOptions,
      ...parser === null
        ? {}
        : { parser },
    };
    this.rules = {
      ...BaseRuleset,
      ...rules,
    };
    this.files = [
      ...files,
    ];
  }

  public get config(): Config<A> {
    return {
      files: this.files,
      linterOptions: this.linterOptions,
      plugins: this.plugins,
      languageOptions: this.languageOptions,
      rules: this.rules,
    };
  }
}
