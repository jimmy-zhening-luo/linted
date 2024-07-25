import core from "@eslinted/core";
import defaults from "./defaults.js";
import parsers from "./parsers.js";
import plugins from "./plugins.js";
import rulesets from "./rulesets.js";
import type { Scope } from "@eslinted/core";
import type { Input } from "@eslinted/core";

export default function (
  includes: Partial<typeof defaults> = {},
  overrides: Partial<Record<Scope, Input.RuleRecord[1]>> = {},
) {
  try {
    return core(
      plugins,
      parsers,
      defaults,
      includes,
      rulesets,
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
