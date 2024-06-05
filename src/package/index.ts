import stylistic from "@stylistic/eslint-plugin";
import plugin from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";
import svelte from "eslint-plugin-svelte";
import svelteParser from "svelte-eslint-parser";
import jsonc from "eslint-plugin-jsonc";
import jsoncParser from "jsonc-eslint-parser";
import yml from "eslint-plugin-yml";
import ymlParser from "yaml-eslint-parser";
import {
  JsOptions,
  TsOptions,
  SvelteOptions,
  JsonOptions,
  YmlOptions,
} from "./default/Options.js";
import {
  JsRuleset,
  TsRuleset,
  SvelteRuleset,
  JsoncRuleset,
  JsonRuleset,
  YmlRuleset,
} from "./default/Ruleset.js";

declare type Options = {
  js: JsOptions;
  ts: TsOptions;
  svelte: SvelteOptions;
  jsonc: JsonOptions;
  json5: JsonOptions;
  json: JsonOptions;
  yml: YmlOptions;
};

declare type Languages = keyof Options;

declare type Config<
  Language extends Languages,
> =
  & Options[
    Language
  ][
    "body"
  ]
  & Record<
    "rules"
    ,
    IRules
  >
;

declare type Rulesets = Record<
  Languages
  ,
  IRules[]
>;

declare type Overrides = `override${
  Capitalize<
    Languages
  >
}`;

export default class Lint {
  protected readonly options: Options;
  protected readonly rulesets: Rulesets;

  constructor(
    files: Partial<
      Record<
        Languages
        ,
        string[]
      >
    > = {},
    {
      overrideJs = {},
      overrideTs = {},
      overrideSvelte = {},
      overrideJson = {},
      overrideJsonc = {},
      overrideJson5 = {},
      overrideYml = {},
    }: Partial<
      Record<
        Overrides
        ,
        IRules
      >
    > = {},
  ) {
    try {
      const jsPlugins = { "@stylistic": stylistic };
      const tsPlugins = {
        ...jsPlugins,
        "@typescript-eslint": plugin,
      };

      this
        .options = {
          js: new JsOptions(
            jsPlugins,
            ...files
              .js
              ?? [],
          ),
          ts: new TsOptions(
            tsPlugins,
            parser,
            ...files
              .ts
              ?? [],
          ),
          svelte: new SvelteOptions(
            {
              ...tsPlugins,
              svelte,
            },
            svelteParser,
            parser,
            ...files
              .svelte
              ?? [],
          ),
          jsonc: new JsonOptions(
            { jsonc },
            jsoncParser,
            ...files
              .jsonc
              ?? [],
          ),
          json5: new JsonOptions(
            { jsonc },
            jsoncParser,
            ...files
              .json5
              ?? [],
          ),
          json: new JsonOptions(
            { jsonc },
            jsoncParser,
            ...files
              .json
              ?? [],
          ),
          yml: new YmlOptions(
            { yml },
            ymlParser,
            ...files
              .yml
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
          jsonc: [
            ...JsoncRuleset,
            overrideJsonc,
          ],
          json5: [
            ...JsoncRuleset,
            overrideJson5,
          ],
          json: [
            ...JsonRuleset,
            overrideJson,
          ],
          yml: [
            ...YmlRuleset,
            overrideYml,
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
    Config<
      Languages
    >
  > {
    const languages = [
      "js",
      "ts",
      "svelte",
      "jsonc",
      "json5",
      "json",
      "yml",
    ] as const;

    return languages
      .map(
        language =>
          this
            .getLanguageConfigs(
              language,
            ),
      )
      .flat();
  }

  protected getLanguageConfigs<
    Language extends Languages,
  >(
    language: Language,
  ): Array<
      Config<
        Language
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
        .body
        .files
        .length < 1
      ? []
      : ruleset
        .map(
          rules => {
            return {
              rules,
              ...option
                .body,
            };
          },
        );
  }
}
