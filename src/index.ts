import core from "@eslinted/core";
import files from "./files.js";
import parsers from "./parsers.js";
import plugins from "./plugins.js";
import rulesets from "./rulesets.js";
import type { Scopes } from "@eslinted/core";
import type { Rule } from "@eslinted/core";

export default function (
  includes: Partial<typeof files> = {},
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

    for (const scope in files)
      files[scope] = [
        ...files[scope],
        ...includes[scope],
      ];

    return core(
      plugins,
      parsers,
      files,
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
