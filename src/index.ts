import core, { type Boundary } from "@eslinted/core";
import plugins from "./plugins/plugins.js";
import parsers from "./parsers/parsers.js";
import base from "./files/base.js";
import preset from "./rules/rules.js";

export default function (
  includes: Boundary.Input.Files.Includes = {},
  overrides: Boundary.Input.Rules.Overrides = {},
) {
  try {
    return core(
      plugins,
      parsers,
      {
        base,
        includes,
      },
      {
        preset,
        overrides,
      },
    );
  }
  catch (e) {
    throw new Error(
      `linted(): Caught exception.`,
      { cause: e },
    );
  }
}
