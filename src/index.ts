import core, { type Core } from "@eslinted/core";

export type { Core };

import imports from "./imports.js";
import files from "./files.js";
import rules from "./rules.js";

export default function (
  includes: Core.Input.Files.Includes = {},
  overrides: Core.Input.Rules.Overrides = {},
) {
  try {
    return core(
      imports.plugins,
      imports.parsers,
      { files, includes },
      { rules, overrides },
    );
  }
  catch (e) { throw new Error(`linted(): `, { cause: e }); }
}
