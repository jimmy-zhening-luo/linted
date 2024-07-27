import core, { type Boundary } from "@eslinted/core";
import { plugins, parsers } from "./imports/index.js";
import { base, preset } from "./statics/index.js";

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
