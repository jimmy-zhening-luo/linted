import core, { type Boundary } from "@eslinted/core";
import plugins from "./plugins/Plugins.js";
import parsers from "./parsers/Parsers.js";
import base from "./files/Base.js";
import preset from "./rules/Preset.js";

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
