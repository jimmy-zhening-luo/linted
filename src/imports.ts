import type { Core } from "@eslinted/core";
import plugins from "./imports/plugins.js";
import parsers from "./imports/parsers.js";

export default {
  plugins,
  parsers,
} as const satisfies { plugins: Core.Input.Plugins } & { parsers: Core.Input.Parsers };