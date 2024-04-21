import type Linter from "./linter/Linter.js";
import type { Language } from "./language/Language.js";
import type { Plugins } from "./plugins/Plugins.js";

export default interface Props<
  Parser extends null | object,
  ParserO extends Record<string, unknown>,
  PPre extends string,
  PH extends string,
> {
  linterOptions: Linter;
  languageOptions: Language<Parser, ParserO>;
  plugins: Plugins<PPre, PH>;
}
