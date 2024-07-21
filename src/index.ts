import core from "@eslinted/core";
import defaults from "./defaults.js";
import parsers from "./parsers.js";
import plugins from "./plugins.js";
import rulesets from "./rulesets.js";
import type { Scopes } from "@eslinted/core";
import type { Rule } from "@eslinted/core";

export default function (
  includes: Partial<typeof defaults> = {},
  overrides: Partial<Record<Scopes, Rule["rules"]>> = {},
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
