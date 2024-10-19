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
      {
        plugins: imports.plugins,
        parsers: imports.parsers,
        files: { files, includes },
        rules: { rules, overrides },
      },
    );
  }
  catch (e) { throw new Error(`linted(): `, { cause: e }); }
}
