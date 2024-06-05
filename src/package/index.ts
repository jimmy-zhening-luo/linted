import {
  JsOptions,
  TsOptions,
  SvelteOptions,
  HtmlOptions,
  JsonOptions,
  YmlOptions,
} from "./default/Options.js";
import {
  JsRuleset,
  TsRuleset,
  SvelteRuleset,
  HtmlRuleset,
  JsoncRuleset,
  JsonRuleset,
  YmlRuleset,
} from "./default/Ruleset.js";
import stylistic from "@stylistic/eslint-plugin";
import ts from "@typescript-eslint/eslint-plugin";
import svelte from "eslint-plugin-svelte";
import html from "@html-eslint/eslint-plugin";
import jsonc from "eslint-plugin-jsonc";
import yml from "eslint-plugin-yml";
import tsParser from "@typescript-eslint/parser";
import svelteParser from "svelte-eslint-parser";
import htmlParser from "@html-eslint/parser";
import jsoncParser from "jsonc-eslint-parser";
import ymlParser from "yaml-eslint-parser";

declare type Language = keyof typeof OptionsConstructor;

const OptionsConstructor = {
  js: JsOptions,
  ts: TsOptions,
  svelte: SvelteOptions,
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

  public get configs(): Lint.FlatConfigs<
    Language
  > {
    const languages = [
      "js",
      "ts",
      "svelte",
      "html",
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
    L extends Language,
  >(
    language: L,
  ): Lint.FlatConfigs<
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
  export namespace Property {
    export type Options = Record<
      Language
      ,
      InstanceType<
      typeof OptionsConstructor[
        Language
      ]
      >
    >;
    export type Rulesets = typeof DefaultRulesets;
  }
  export namespace Parameter {
    export type Files = Partial<
      Record<
        Language
        ,
        string[]
      >
    >;
    export type Override = Partial<
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
  export type FlatConfigs<
    L extends Language,
  > = Array<
    FlatConfigs.Config<
      L
    >
  >;
  export namespace FlatConfigs {
    export type Config<
      L extends Language,
    > =
      & Record<
        "rules"
        ,
        IRules
      >
      & Property
        .Options[
          L
        ][
          "body"
        ];
  }
}
