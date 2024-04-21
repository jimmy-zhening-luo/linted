import type Linter from "./linter/Linter.js";
import type Plugins from "./linter/plugins/Plugins.js";
import type Parser from "./linter/parser/Parser.js";
import type Files from "./files/Files.js";

export type IOption<
  P extends null | Plugins = null,
  A extends null | Parser = null,
> = Linter<P, A> & Files;
