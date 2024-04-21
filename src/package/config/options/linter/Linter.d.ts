import type Plugins from "./plugins/Plugins.js";
import type Parser from "./parser/Parser.js";

export default interface Linter<
  P extends null | Plugins = null,
  A extends null | Parser = null,
> {
  linterOptions: {
    noInlineConfig: true;
    reportUnusedDisableDirectives: true;
  };
  plugins: null extends P ? Record<string, never> : P;
  languageOptions: {
    ecmaVersion: number;
    sourceType: string;
  } & null extends A
    ? object
    : A;
}
