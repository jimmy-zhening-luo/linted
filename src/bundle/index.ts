import stylistic from "@stylistic/eslint-plugin";
import ts from "@typescript-eslint/eslint-plugin";
import svelte from "eslint-plugin-svelte";
import html from "@html-eslint/eslint-plugin";
import jest from "eslint-plugin-jest";
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
  HtmlOption,
  JestOption,
  JsoncOption,
  JsonOption,
  YmlOption,
} from "./config/default/Options.js";
import {
  JsRuleset,
  TsRuleset,
  SvelteRuleset,
  HtmlRuleset,
  JestRuleset,
  JsoncRuleset,
  JsonRuleset,
  YmlRuleset,
} from "./config/default/Rulesets.js";

const scopes = [
  "js",
  "ts",
  "svelte",
  "html",
  "jest",
  "jsonc",
  "json",
  "yml",
] as const;

declare type Scopes = typeof scopes[number];

const OptionsConstructor = {
  js: JsOption,
  ts: TsOption,
  svelte: SvelteOption,
  html: HtmlOption,
  jest: JestOption,
  jsonc: JsoncOption,
  json: JsonOption,
  yml: YmlOption,
} as const satisfies Record<
  Scopes
  ,
  unknown
>;
const Rulesets: {
  [S in Scopes]: Ruleset<
    S
  >
} = {
  js: JsRuleset,
  ts: TsRuleset,
  svelte: SvelteRuleset,
  html: HtmlRuleset,
  jest: JestRuleset,
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
  html: { "@html-eslint": html },
  jest: {
    "@stylistic": stylistic,
    "@typescript-eslint": ts,
    jest,
  },
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
    [S in keyof typeof OptionsConstructor]: InstanceType<typeof OptionsConstructor[S]>
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
        IRule
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
          html: Rulesets
            .html
            .override(
              override
                .overrideHtml,
            ),
          jest: Rulesets
            .jest
            .override(
              override
                .overrideJest,
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

  public get configs(): Array<
    & IRules
    & InstanceType<
      typeof OptionsConstructor[
        Scopes
      ]
    >[
      "body"
    ]
  > {
    return scopes
      .map(
        scope =>
          this
            .getLanguageConfigs(
              scope,
            ),
      )
      .flat();
  }

  protected getLanguageConfigs<
    S extends Scopes,
  >(
    scope: S,
  ): Array<
    & IRules
    & InstanceType<
      typeof OptionsConstructor[
        S
      ]
    >[
      "body"
    ]
  > {
    const {
      options,
      rulesets,
    } = this;
    const option = options[
      scope
    ];
    const ruleset = rulesets[
      scope
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
