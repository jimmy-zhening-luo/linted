import type { Input } from "@eslinted/core";
import core from "@eslinted/core";
import { settings } from "./settings";
import imports from "./imports";
import files from "./files";
import ignores from "./ignores";
import rules from "./rules";

export default function (extensions: Input["extensions"]) {
  try {
    return core(
      {
        imports,
        defaults: {
          settings,
          files,
          ignores,
          rules,
        },
        extensions,
      },
    );
  }
  catch (e) { throw new Error(`linted(): `, { cause: e }); }
}
