import type { Input } from "@eslinted/core";
import core from "@eslinted/core";
import imports from "./imports";
import files from "./files";
import scopedIgnores from "./ignores";
import globalIgnores from "./ignores/global";
import rules from "./rules";

export default function ({
  globals: {
    ecmaVersion = 2023,
    sourceType = "module",
    noInlineConfig = true,
    reportUnusedDisableDirectives = "error",
    inherit = true,
    ignores = [],
  },
  includes,
  overrides,
}: {
  globals: {
    inherit: boolean;
    ignores: string[];
  } & Required<Input["settings"]>;
} & Pick<Input["files"], "includes"> & Pick<Input["rules"], "overrides">) {
  try {
    return core(
      {
        plugins: imports.plugins,
        parsers: imports.parsers,
        settings: {
          ecmaVersion,
          sourceType,
          noInlineConfig,
          reportUnusedDisableDirectives,
        },
        globals: {
          ignores: {
            ignores: globalIgnores,
          },
          extend: {
            ignores,
            inherit,
          },
        },
        files: {
          files,
          includes,
        },
        ignores: {
          ignores: scopedIgnores,
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
