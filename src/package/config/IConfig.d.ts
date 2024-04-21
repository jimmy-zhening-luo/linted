import type { IOption } from "./options/IOption.js";
import type Plugins from "./options/linter/plugins/Plugins.js";
import type Parser from "./options/linter/parser/Parser.js";
import type Rules from "./rules/Rules.js";

export type IConfig<
  P extends null | Plugins = null,
  A extends null | Parser = null,
> = IOption<P, A> & Rules;
