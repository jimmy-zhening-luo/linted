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
import type Ruleset from "./config/default/ruleset/base/Ruleset.js";
import {
  JsOption,
  TsOption,
  SvelteOption,
  JestOption,
  HtmlOption,
  JsoncOption,
  JsonOption,
  YmlOption,
} from "./config/default/Options.js";
import {
  JsRuleset,
  TsRuleset,
  SvelteRuleset,
  JestRuleset,
  HtmlRuleset,
  JsoncRuleset,
  JsonRuleset,
  YmlRuleset,
} from "./config/default/Rulesets.js";

const scopes = [
  "js",
  "ts",
  "svelte",
  "jest",
  "html",
  "jsonc",
  "json",
  "yml",
] as const;

declare type Scopes = typeof scopes[number];

const OptionsConstructor = {
  js: JsOption,
  ts: TsOption,
  svelte: SvelteOption,
  jest: JestOption,
  html: HtmlOption,
  jsonc: JsoncOption,
  json: JsonOption,
  yml: YmlOption,
} as const satisfies Record<
  Scopes
  ,
  unknown
>;
const Rulesets: {
  [L in Scopes]: Ruleset<
    L
  >
} = {
  js: JsRuleset,
  ts: TsRuleset,
  svelte: SvelteRuleset,
  jest: JestRuleset,
  html: HtmlRuleset,
  jsonc: JsoncRuleset,
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
  json: { jsonc },
  yml: { yml },
} satisfies Record<
  Scopes
  ,
  unknown
>;
const Parser = {
  ts: tsParser,
  svelte: svelteParser,
  html: htmlParser,
  jest: tsParser,
  jsonc: jsoncParser,
  json: jsoncParser,
  yml: ymlParser,
} satisfies Partial<
  Record<
    Scopes
    ,
    unknown
  >
>;

export default class {
  protected readonly options: {
    [L in keyof typeof OptionsConstructor]: InstanceType<typeof OptionsConstructor[L]>
  };
  protected readonly rulesets: typeof Rulesets;

  constructor(
    files: Partial<
      Record<
        Scopes
        ,
        string[]
      >
    > = {},
    override: Partial<
      Record<
      `override${
        Capitalize<
          Scopes
        >
      }`
        ,
        RuleSpec
      >
    > = {},
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
          js: Rulesets
            .js
            .override(
              override
                .overrideJs,
            ),
          ts: Rulesets
            .ts
            .override(
              override
                .overrideTs,
            ),
          svelte: Rulesets
            .svelte
            .override(
              override
                .overrideSvelte,
            ),
          jest: Rulesets
            .jest
            .override(

              // Remove after tuning: jest shared config
              Plugin
                .jest
                .jest
                .configs["flat/recommended"]
                .rules,
              override
                .overrideJest,
            ),
          html: Rulesets
            .html
            .override(

              // Remove after tuning: @html-eslint shared config
              (
                Plugin
                  .html["@html-eslint"]
                  .configs["flat/recommended"] as Record<
                  "rules"
                  ,
                  RuleSpec
                >
              )
                .rules,
              override
                .overrideHtml,
            ),
          jsonc: Rulesets
            .jsonc
            .override(
              override
                .overrideJsonc,
            ),
          json: Rulesets
            .json
            .override(
              override
                .overrideJson,
            ),
          yml: Rulesets
            .yml
            .override(
              override
                .overrideYml,
            ),
        };
    }
    catch (e) {
      throw new Error(
        `Lint: ctor`,
        { cause: e },
      );
    }
  }

  public get configs(): Class.Output.FlatConfigs<
    Scopes
  > {
    return scopes
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
    Scope extends Scopes,
  >(
    language: Scope,
  ): Class.Output.FlatConfigs<
      Scope
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

    return option
      .body
      .files
      .length < 1
      ? []
      : ruleset
        .flat
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

declare namespace Class {
  namespace Output {
    type FlatConfigs<
      L extends Scopes,
    > = Array<
      FlatConfigs.Config<
        L
      >
    >;

    namespace FlatConfigs {
      type Config<
        L extends Scopes,
      > =
        & Record<
          "rules"
          ,
          RuleSpec
        >
        & {
          [L in keyof typeof OptionsConstructor]: InstanceType<typeof OptionsConstructor[L]>
        }[
          L
        ][
          "body"
        ];
    }
  }
}
