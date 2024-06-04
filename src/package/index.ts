import stylistic from "@stylistic/eslint-plugin";
import prettier from "eslint-plugin-prettier";
import plugin from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";
import svelte from "eslint-plugin-svelte";
import svelteParser from "svelte-eslint-parser";
import jsonc from "eslint-plugin-jsonc";
import jsoncParser from "jsonc-eslint-parser";
import yml from "eslint-plugin-yml";
import ymlParser from "yaml-eslint-parser";
import markdown from "eslint-plugin-markdown";
import {
  JsOptions,
  TsOptions,
  SvelteOptions,
  JsonOptions,
  YmlOptions,
  MdOptions,
} from "./default/Options.js";
import {
  JsRuleset,
  TsRuleset,
  SvelteRuleset,
  JsonRuleset,
  JsoncRuleset,
  Json5Ruleset,
  YmlRuleset,
  MdRuleset,
} from "./default/Ruleset.js";

declare type Options = {
  js: JsOptions;
  ts: TsOptions;
  svelte: SvelteOptions;
  json: JsonOptions;
  jsonc: JsonOptions;
  json5: JsonOptions;
  yml: YmlOptions;
  md: MdOptions;
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
      overrideMd = {},
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
      const jsonPlugins = {
        ...jsPlugins,
        jsonc,
      };
      const formatterPlugins = {
        ...jsPlugins,
        prettier: prettier as unknown,
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
            parser,
            svelteParser,
            ...files
              .svelte
              ?? [],
          ),
          json: new JsonOptions(
            jsonPlugins,
            jsoncParser,
            ...files
              .json
              ?? [],
          ),
          jsonc: new JsonOptions(
            jsonPlugins,
            jsoncParser,
            ...files
              .jsonc
              ?? [],
          ),
          json5: new JsonOptions(
            jsonPlugins,
            jsoncParser,
            ...files
              .json5
              ?? [],
          ),
          yml: new YmlOptions(
            {
              ...jsPlugins,
              yml,
            },
            ymlParser,
            ...files
              .yml
              ?? [],
          ),
          md: new MdOptions(
            {
              ...formatterPlugins,
              markdown,
            },
            ...files
              .md
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
          json: [
            ...JsonRuleset,
            overrideJson,
          ],
          jsonc: [
            ...JsoncRuleset,
            overrideJsonc,
          ],
          json5: [
            ...Json5Ruleset,
            overrideJson5,
          ],
          yml: [
            ...YmlRuleset,
            overrideYml,
          ],
          md: [
            ...MdRuleset,
            overrideMd,
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
      "json",
      "jsonc",
      "json5",
      "yml",
      "md",
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
