import core, { type Input } from "@eslinted/core";
import plugins from "./plugins/plugins.js";
import parsers from "./parsers/parsers.js";
import base from "./files/base.js";
import rules from "./rules/rules.js";

export default function (
  includes: Partial<typeof base> = {},
  overrides: Input.Overrides = {},
) {
  try {
    return core(
      plugins,
      parsers,
      base,
      includes,
      rules,
      overrides,
    );
  }
  catch (e) {
    throw new Error(
      `linted(): Caught exception.`,
      { cause: e },
    );
  }
}
