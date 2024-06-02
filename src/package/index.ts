import plugin from "@stylistic/eslint-plugin";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";
import JsOptions from "./default/options/JsOptions.js";
import TsOptions from "./default/options/TsOptions.js";
import SvelteOptions from "./default/options/SvelteOptions.js";
import JsRuleset from "./default/ruleset/JsRuleset.js";
import TsRuleset from "./default/ruleset/TsRuleset.js";
import SvelteRuleset from "./default/ruleset/SvelteRuleset.js";

declare type Languages = {
  js: JsOptions;
  ts: TsOptions;
  svelte?: SvelteOptions;
};

declare type LanguageIndex = Required<
  Languages
>;

declare type LanguageConfig<
  L extends Language,
> =
  & LanguageIndex[
    L
  ][
    "config"
  ]
  & Record<
    "rules"
    ,
    IRules
  >
;

declare type Rulesets =
  & Record<
    RequiredLanguage
    ,
    IRules[]
  >
  & Partial<
    Record<
      OptionalLanguage
      ,
      IRules[]
    >
  >
;

declare type RulesetIndex = Required<
  Rulesets
>;

export default class Lint {
  protected readonly options: Languages;
  protected readonly rulesets: Rulesets;

  constructor(

    //  stylistic: unknown,
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
            { "@stylistic": plugin },
            ...files
              .js
              ?? [],
          ),
          ts: new TsOptions(
            {
              "@stylistic": plugin,
              "@typescript-eslint": tsPlugin,
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
                    "@stylistic": plugin,
                    "@typescript-eslint": tsPlugin,
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
            ...TsRuleset,
            overrideTs,
          ],
          ...typeof svelte === "undefined"
            ? {}
            : {
                svelte: [
                  ...SvelteRuleset,
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
