import type { Input } from "@eslinted/core";
import core from "@eslinted/core";
import imports from "./imports";
import files from "./files";
import rules from "./rules";

export default function (
  includes: Input["files"]["includes"] = {},
  overrides: Input["rules"]["overrides"] = {},
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
