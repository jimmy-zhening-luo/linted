import type { Scopes } from "./config/default/scopes.js";
import scopes from "./config/default/scopes.js";
import files from "./config/default/files.js";
import rulesets from "./config/default/rulesets.js";
import options from "./config/default/options.js";
import plugins from "./config/default/plugins.js";
import parsers from "./config/default/parsers.js";

export default function (
  scope: Partial<
    typeof files
  > = {},
  override: Partial<
    Record<
      `override${
        Capitalize<
          Scopes
        >
      }`
      ,
      IRule
    >
  > = {},
): IConfig[] {
  try {
    const instantiatedOptions: {
      [S in Scopes]: InstanceType<
        typeof options[S]
      >["body"]
    } = {
      js: new options
        .js(
          plugins
            .js,
          ...files
            .js,
          ...scope
            .js
            ?? [],
        )
        .body,
      ts: new options
        .ts(
          plugins
            .ts,
          parsers
            .ts,
          ...files
            .ts,
          ...scope
            .ts
            ?? [],
        )
        .body,
      svelte: new options
        .svelte(
          plugins
            .svelte,
          parsers
            .svelte,
          parsers
            .ts,
          ...files
            .svelte,
          ...scope
            .svelte
            ?? [],
        )
        .body,
      html: new options
        .html(
          plugins
            .html,
          parsers
            .html,
          ...files
            .html,
          ...scope
            .html
            ?? [],
        )
        .body,
      jest: new options
        .jest(
          plugins
            .jest,
          parsers
            .jest,
          ...files
            .jest,
          ...scope
            .jest
            ?? [],
        )
        .body,
      json: new options
        .json(
          plugins
            .json,
          parsers
            .json,
          ...files
            .json,
          ...scope
            .json
            ?? [],
        )
        .body,
      jsonc: new options
        .jsonc(
          plugins
            .jsonc,
          parsers
            .jsonc,
          ...files
            .jsonc,
          ...scope
            .jsonc
            ?? [],
        )
        .body,
      yml: new options
        .yml(
          plugins
            .yml,
          parsers
            .yml,
          ...files
            .yml,
          ...scope
            .yml
            ?? [],
        )
        .body,
    };
    const overridenRulesets: typeof rulesets = {
      js: rulesets
        .js
        .override(
          override
            .overrideJs,
        ),
      ts: rulesets
        .ts
        .override(
          override
            .overrideTs,
        ),
      svelte: rulesets
        .svelte
        .override(
          override
            .overrideSvelte,
        ),
      html: rulesets
        .html
        .override(
          override
            .overrideHtml,
        ),
      jest: rulesets
        .jest
        .override(
          override
            .overrideJest,
        ),
      json: rulesets
        .json
        .override(
          override
            .overrideJson,
        ),
      jsonc: rulesets
        .jsonc
        .override(
          override
            .overrideJsonc,
        ),
      yml: rulesets
        .yml
        .override(
          override
            .overrideYml,
        ),
    };

    return scopes
      .map(
        scope =>
          instantiatedOptions[scope].files.length > 0
            ? overridenRulesets[scope].flat.map(
              rules => {
                return {
                  rules,
                  ...instantiatedOptions[scope],
                };
              },
            )
            : [],
      )
      .flat();
  }
  catch (e) {
    throw new Error(
      `linted(): Caught exception.`,
      { cause: e },
    );
  }
}
