import type { Core } from "@eslinted/core";
import core from "@eslinted/core";
import imports from "./imports";
import files from "./files";
import rules from "./rules";

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
