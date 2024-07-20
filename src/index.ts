import core from "@eslinted/core";
import files from "./files.js";
import parsers from "./parsers.js";
import plugins from "./plugins.js";
import rulesets from "./rulesets.js";
import type { Scopes } from "./scopes.js";

export default function (
  scope: Partial<typeof files> = {},
  override: Particord<`override${Capitalize<Scopes>}`, IRule> = {},
): IConfig[] {
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
    const combinedFiles = {
      js: [
        ...files.js,
        ...scope.js ?? [],
      ],
      ts: [
        ...files.ts,
        ...scope.ts ?? [],
      ],
      svelte: [
        ...files.svelte,
        ...scope.svelte ?? [],
      ],
      html: [
        ...files.html,
        ...scope.html ?? [],
      ],
      json: [
        ...files.json,
        ...scope.json ?? [],
      ],
      jsonc: [
        ...files.jsonc,
        ...scope.jsonc ?? [],
      ],
      yml: [
        ...files.yml,
        ...scope.yml ?? [],
      ],
    };

    return core(
      plugins,
      parsers,
      combinedFiles,
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
