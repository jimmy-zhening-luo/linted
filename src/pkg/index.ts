import {
  JsOptions,
  TsOptions,
  SvelteOptions,
  JestOptions,
  HtmlOptions,
  JsonOptions,
  YmlOptions,
} from "./default/Options.js";
import {
  JsRuleset,
  TsRuleset,
  SvelteRuleset,
  JestRuleset,
  HtmlRuleset,
  JsoncRuleset,
  JsonRuleset,
  YmlRuleset,
} from "./default/Ruleset.js";
import stylistic from "@stylistic/eslint-plugin";
import ts from "@typescript-eslint/eslint-plugin";
import svelte from "eslint-plugin-svelte";
import jest from "eslint-plugin-jest";
import html from "@html-eslint/eslint-plugin";
import jsonc from "eslint-plugin-jsonc";
import yml from "eslint-plugin-yml";
import tsParser from "@typescript-eslint/parser";
import svelteParser from "svelte-eslint-parser";
import htmlParser from "@html-eslint/parser";
import jsoncParser from "jsonc-eslint-parser";
import ymlParser from "yaml-eslint-parser";

const languages = [
  "js",
  "ts",
  "svelte",
  "jest",
  "html",
  "jsonc",
  "json5",
  "json",
  "yml",
] as const;

declare type Language = typeof languages[number];

const OptionsConstructor = {
  js: JsOptions,
  ts: TsOptions,
  svelte: SvelteOptions,
  jest: JestOptions,
  html: HtmlOptions,
  jsonc: JsonOptions,
  json5: JsonOptions,
  json: JsonOptions,
  yml: YmlOptions,
} as const;
const DefaultRulesets: Record<
  Language
  ,
  IRules[]
> = {
  js: JsRuleset,
  ts: TsRuleset,
  svelte: SvelteRuleset,
  jest: JestRuleset,
  html: HtmlRuleset,
  jsonc: JsoncRuleset,
  json5: JsoncRuleset,
  json: JsonRuleset,
  yml: YmlRuleset,
};
const Plugin = {
  js: { "@stylistic": stylistic },
  ts: {
    "@stylistic": stylistic,
    "@typescript-eslint": ts,
  },
  svelte: {
    "@stylistic": stylistic,
    "@typescript-eslint": ts,
    svelte,
  },
  jest: {
    "@stylistic": stylistic,
    "@typescript-eslint": ts,
    jest,
  },
  html: { "@html-eslint": html },
  jsonc: { jsonc },
  json5: { jsonc },
  json: { jsonc },
  yml: { yml },
} as const;
const Parser = {
  ts: tsParser,
  svelte: svelteParser,
  html: htmlParser,
  jest: tsParser,
  jsonc: jsoncParser,
  json5: jsoncParser,
  json: jsoncParser,
  yml: ymlParser,
} as const;

export default class {
  protected readonly options: Lint
    .Property
    .Options;
  protected readonly rulesets: Lint
    .Property
    .Rulesets;

  constructor(
    files: Lint
      .Parameter
      .Files = {},
    override: Lint
      .Parameter
      .Override = {},
  ) {
    try {
      this
        .options = {
          js: new OptionsConstructor
            .js(
              Plugin
                .js,
              ...files
                .js
                ?? [],
            ),
          ts: new OptionsConstructor
            .ts(
              Plugin
                .ts,
              Parser
                .ts,
              ...files
                .ts
                ?? [],
            ),
          svelte: new OptionsConstructor
            .svelte(
              Plugin
                .svelte,
              Parser
                .svelte,
              Parser
                .ts,
              ...files
                .svelte
                ?? [],
            ),
          jest: new OptionsConstructor
            .jest(
              Plugin
                .jest,
              Parser
                .jest,
              ...files
                .jest
                ?? [],
            ),
          html: new OptionsConstructor
            .html(
              Plugin
                .html,
              Parser
                .html,
              ...files
                .html
                ?? [],
            ),
          jsonc: new OptionsConstructor
            .jsonc(
              Plugin
                .jsonc,
              Parser
                .jsonc,
              ...files
                .jsonc
                ?? [],
            ),
          json5: new OptionsConstructor
            .json5(
              Plugin
                .json5,
              Parser
                .json5,
              ...files
                .json5
                ?? [],
            ),
          json: new OptionsConstructor
            .json(
              Plugin
                .json,
              Parser
                .json,
              ...files
                .json
                ?? [],
            ),
          yml: new OptionsConstructor
            .yml(
              Plugin
                .yml,
              Parser
                .yml,
              ...files
                .yml
                ?? [],
            ),
        };
      this
        .rulesets = {
          js: [
            ...DefaultRulesets
              .js,
            override
              .overrideJs
              ?? {},
          ],
          ts: [
            ...DefaultRulesets
              .ts,
            override
              .overrideTs
              ?? {},
          ],
          svelte: [
            ...DefaultRulesets
              .svelte,
            override
              .overrideSvelte
              ?? {},
          ],
          jest: [
            ...DefaultRulesets
              .jest,
            override
              .overrideJest
              ?? {},
          ],
          html: [
            // Remove after tuning: @html-eslint shared config
            (
              Plugin
                .html["@html-eslint"]
                .configs["flat/recommended"] as Record<
                "rules"
                ,
                IRules
              >
            )
              .rules,
            ...DefaultRulesets
              .html,
            override
              .overrideHtml
              ?? {},
          ],
          jsonc: [
            ...DefaultRulesets
              .jsonc,
            override
              .overrideJsonc
              ?? {},
          ],
          json5: [
            ...DefaultRulesets
              .json5,
            override
              .overrideJson5
              ?? {},
          ],
          json: [
            ...DefaultRulesets
              .json,
            override
              .overrideJson
              ?? {},
          ],
          yml: [
            ...DefaultRulesets
              .yml,
            override
              .overrideYml
              ?? {},
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

  public get configs(): Lint.Output.FlatConfigs<
    Language
  > {
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
    L extends Language,
  >(
    language: L,
  ): Lint.Output.FlatConfigs<
      L
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

declare namespace Lint {
  namespace Property {
    type Options = Options.AllLanguages<
      typeof OptionsConstructor
    > extends false
      ? never
      : {
          [L in keyof typeof OptionsConstructor]: InstanceType<
            typeof OptionsConstructor[
              L
            ]
          >
        };

    namespace Options {
      type AllLanguages<
        OP,
      > = OP extends Record<
        Language
        ,
        unknown
      >
        ? Exclude<
          keyof OP
          ,
          Language
        > extends never
          ? true
          : false
        : false;
    }

    type Rulesets = typeof DefaultRulesets;
  }

  namespace Parameter {
    type Files = Partial<
      Record<
        Language
        ,
        string[]
      >
    >;
    type Override = Partial<
      Record<
        `override${
          Capitalize<
            Language
          >
        }`
        ,
        IRules
      >
    >;
  }

  namespace Output {
    type FlatConfigs<
      L extends Language,
    > = Array<
      FlatConfigs.Config<
        L
      >
    >;

    namespace FlatConfigs {
      type Config<
        L extends Language,
      > =
        & Record<
          "rules"
          ,
          IRules
        >
        & Property.Options[
          L
        ][
          "body"
        ];
    }
  }
}
