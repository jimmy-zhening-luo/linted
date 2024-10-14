import type { Core } from "../index";
import plugins from "./plugins";
import parsers from "./parsers";

export default {
  plugins,
  parsers,
} as const satisfies { plugins: Core.Input.Plugins } & { parsers: Core.Input.Parsers };
