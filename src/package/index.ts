import stylistic from "@stylistic/eslint-plugin";
import plugin from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";
import sveltePlugin from "eslint-plugin-svelte";
import svelteParser from "svelte-eslint-parser";
import JsOptions from "./default/options/JsOptions.js";
import TsOptions from "./default/options/TsOptions.js";
import SvelteOptions from "./default/options/SvelteOptions.js";
import JsRuleset from "./default/ruleset/JsRuleset.js";
import TsRuleset from "./default/ruleset/TsRuleset.js";
import SvelteRuleset from "./default/ruleset/SvelteRuleset.js";

type Languages = {
  js: JsOptions;
  ts: TsOptions;
  svelte: SvelteOptions;
};
type LanguageIndex = Required<
  Languages
>;
type LanguageConfig<
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
type Rulesets = Record<
  Language
  ,
  IRules[]
>;

export default class Lint {
  protected readonly options: Languages;
  protected readonly rulesets: Rulesets;

  constructor(
    files: {
      js?: string[];
      ts?: string[];
      svelte?: string[];
    } = {},
    {
      overrideJs = {},
      overrideTs = {},
      overrideSvelte = {},
    }: {
      overrideJs?: IRules;
      overrideTs?: IRules;
      overrideSvelte?: IRules;
    } = {},
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
          svelte: new SvelteOptions(
            {
              "@stylistic": stylistic,
              "@typescript-eslint": plugin,
              svelte: sveltePlugin,
            },
            parser,
            svelteParser,
            "svelte/svelte",
            ...files
              .svelte
              ?? [],
          ),
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
          svelte: [
            ...SvelteRuleset,
            overrideSvelte,
          ],
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
      options,
      rulesets,
    } = this;
    const option = options[
      language
    ];
    const ruleset = rulesets[
      language
    ];

    return typeof option === "undefined"
      || option
        .config
        .files
        .length < 1
      ? []
      : ruleset
        .map(
          rules => {
            return {
              rules,
              ...option
                .config,
            };
          },
        );
  }
}
