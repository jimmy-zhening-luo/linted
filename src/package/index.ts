import plugin from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";
import JsOptions from "./default/options/JsOptions.js";
import TsOptions from "./default/options/TsOptions.js";
import SvelteOptions from "./default/options/SvelteOptions.js";
import JsRuleset from "./default/ruleset/JsRuleset.js";
import TsJsRuleset from "./default/ruleset/TsJsRuleset.js";
import SvelteTsJsRuleset from "./default/ruleset/SvelteTsJsRuleset.js";

export default class Lint {
  protected readonly options: Languages;
  protected readonly rulesets: Rulesets;

  constructor(
    stylistic: unknown,
    files: {
      js?: string[];
      ts?: string[];
      svelte?: string[];
    } = {
      js: [],
      ts: [],
      svelte: [],
    },
    {
      overrideJs = {},
      overrideTs = {},
      overrideSvelte = {},
    }: {
      overrideJs?: IRules;
      overrideTs?: IRules;
      overrideSvelte?: IRules;
    } = {},
    svelte?: {
      plugin: unknown;
      parser: unknown;
    },
  ) {
    try {
      this
        .options = {
          js: new JsOptions(
            { "@stylistic": stylistic },
            ...files
              .js
              ?? [],
          ),
          ts: new TsOptions(
            {
              "@stylistic": stylistic,
              "@typescript-eslint": plugin,
            },
            parser,
            ...files
              .ts
              ?? [],
          ),
          ...typeof svelte === "undefined"
            ? {}
            : {
                svelte: new SvelteOptions(
                  {
                    "@stylistic": stylistic,
                    "@typescript-eslint": plugin,
                    svelte: svelte
                      .plugin,
                  },
                  parser,
                  svelte
                    .parser,
                  "svelte/svelte",
                  ...files
                    .svelte
                    ?? [],
                ),
              },
        };
      this
        .rulesets = {
          js: [
            ...JsRuleset,
            overrideJs,
          ],
          ts: [
            ...TsJsRuleset,
            overrideTs,
          ],
          ...typeof svelte === "undefined"
            ? {}
            : {
                svelte: [
                  ((svelte.plugin as { configs: { "flat/all": [{ rules: IRules }, { rules: IRules }, { rules: IRules }] } }).configs["flat/all"][1] as { rules: IRules })
                    .rules,
                  ((svelte.plugin as { configs: { "flat/all": [{ rules: IRules }, { rules: IRules }, { rules: IRules }] } }).configs["flat/all"][2] as { rules: IRules })
                    .rules,
                  ...SvelteTsJsRuleset,
                  overrideSvelte,
                ],
              },
        };
    }
    catch (e) {
      throw new Error(
        `Lint: ctor`,
        { cause: e },
      );
    }
  }

  public get configs(): Array<
    LanguageConfig<
      Language
    >
  > {
    return [
      ...this
        .getLanguageConfigs(
          "js",
        ),
      ...this
        .getLanguageConfigs(
          "ts",
        ),
      ...this
        .getLanguageConfigs(
          "svelte",
        ),
    ];
  }

  protected getLanguageConfigs<
    L extends Language,
  >(
    language: L,
  ): Array<
      LanguageConfig<
        L
      >
    > {
    const {
      rulesets,
      options,
    } = this;

    return [
      ...language in options
        && language in rulesets
          ? (
              rulesets[
                language
              ] as RulesetIndex[
                L
              ]
            )
              .map(
                rules => {
                  return {
                    ...(
                      options[
                        language
                      ] as LanguageIndex[
                        L
                      ]
                    )
                      .config,
                    rules,
                  };
                },
              )
          : [],
    ];
  }
}
