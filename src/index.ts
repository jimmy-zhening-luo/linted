import type { Input } from "@eslinted/core";
import core from "@eslinted/core";
import imports from "./imports";
import settings from "./settings";
import files from "./files";
import ignores from "./ignores";
import globalIgnores from "./ignores/global";
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
        settings,
        globals: {
          ignores: {
            ignores: globalIgnores,
          },
          extend: {},

        },
        files: {
          files,
          includes,
        },
        ignores: {
          ignores,
          extend: {},
        },
        rules: {
          rules,
          overrides,
        },
      },
    );
  }
  catch (e) { throw new Error(`linted(): `, { cause: e }); }
}
