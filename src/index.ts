import core from "@eslinted/core";
import defaults from "./defaults.js";
import parsers from "./parsers.js";
import plugins from "./plugins.js";
import rulesets from "./rulesets.js";
import type { Scopes } from "@eslinted/core";
import type { Rule } from "@eslinted/core";

export default function (
  includes: Partial<typeof defaults> = {},
  override: Partial<Record<`override${Capitalize<Scopes>}`, Rule["rules"]>> = {},
) {
  try {
    const overridenRulesets: typeof rulesets = {
      js: rulesets.js.override(override.overrideJs),
      ts: rulesets.ts.override(override.overrideTs),
      svelte: rulesets.svelte.override(override.overrideSvelte),
      html: rulesets.html.override(override.overrideHtml),
      json: rulesets.json.override(override.overrideJson),
      jsonc: rulesets.jsonc.override(override.overrideJsonc),
      yml: rulesets.yml.override(override.overrideYml),
    };

    return core(
      plugins,
      parsers,
      defaults,
      includes,
      overridenRulesets,
    );
  }
  catch (e) {
    throw new Error(
      `linted(): Caught exception.`,
      { cause: e },
    );
  }
}
