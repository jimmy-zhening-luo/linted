import type { Scopes } from "./config/default/_scopes.js";
import scopes from "./config/default/_scopes.js";
import files from "./config/default/_files.js";
import Rulesets from "./config/default/_rulesets.js";
import OptionsConstructor from "./config/default/_options.js";
import stylistic from "@stylistic/eslint-plugin";
import ts from "@typescript-eslint/eslint-plugin";
import svelte from "eslint-plugin-svelte";
import html from "@html-eslint/eslint-plugin";
import jest from "eslint-plugin-jest";
import jsonc from "eslint-plugin-jsonc";
import yml from "eslint-plugin-yml";

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
  json: { jsonc },
  jsonc: { jsonc },
  yml: { yml },
} satisfies Record<
  Scopes
  ,
  unknown
>;

import tsParser from "@typescript-eslint/parser";
import svelteParser from "svelte-eslint-parser";
import htmlParser from "@html-eslint/parser";
import jsoncParser from "jsonc-eslint-parser";
import ymlParser from "yaml-eslint-parser";

const Parser = {
  ts: tsParser,
  svelte: svelteParser,
  html: htmlParser,
  jest: tsParser,
  json: jsoncParser,
  jsonc: jsoncParser,
  yml: ymlParser,
} satisfies Partial<
  Record<
    Scopes
    ,
    unknown
  >
>;

declare type Options = {
  [S in Scopes]: InstanceType<
    typeof OptionsConstructor[S]
  >["body"]
};

export default function (
  scope: Partial<
    Record<
      Scopes
      ,
      string[]
    >
  > = {},
  override: Partial<
    Record<
      `override${
        Capitalize<Scopes>
      }`
      ,
      IRule
    >
  > = {},
): Array<
  & IRules
  & Options[Scopes]
  > {
  try {
    const options: Options = {
      js: new OptionsConstructor
        .js(
          Plugin
            .js,
          ...files
            .js,
          ...scope
            .js
            ?? [],
        )
        .body,
      ts: new OptionsConstructor
        .ts(
          Plugin
            .ts,
          Parser
            .ts,
          ...files
            .ts,
          ...scope
            .ts
            ?? [],
        )
        .body,
      svelte: new OptionsConstructor
        .svelte(
          Plugin
            .svelte,
          Parser
            .svelte,
          Parser
            .ts,
          ...files
            .svelte,
          ...scope
            .svelte
            ?? [],
        )
        .body,
      html: new OptionsConstructor
        .html(
          Plugin
            .html,
          Parser
            .html,
          ...files
            .html,
          ...scope
            .html
            ?? [],
        )
        .body,
      jest: new OptionsConstructor
        .jest(
          Plugin
            .jest,
          Parser
            .jest,
          ...files
            .jest,
          ...scope
            .jest
            ?? [],
        )
        .body,
      json: new OptionsConstructor
        .json(
          Plugin
            .json,
          Parser
            .json,
          ...files
            .json,
          ...scope
            .json
            ?? [],
        )
        .body,
      jsonc: new OptionsConstructor
        .jsonc(
          Plugin
            .jsonc,
          Parser
            .jsonc,
          ...files
            .jsonc,
          ...scope
            .jsonc
            ?? [],
        )
        .body,
      yml: new OptionsConstructor
        .yml(
          Plugin
            .yml,
          Parser
            .yml,
          ...files
            .yml,
          ...scope
            .yml
            ?? [],
        )
        .body,
    };
    const rulesets: typeof Rulesets = {
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
      json: Rulesets
        .json
        .override(
          override
            .overrideJson,
        ),
      jsonc: Rulesets
        .jsonc
        .override(
          override
            .overrideJsonc,
        ),
      yml: Rulesets
        .yml
        .override(
          override
            .overrideYml,
        ),
    };

    return scopes
      .map(
        scope =>
          options[scope].files.length > 0
            ? rulesets[scope].flat.map(
              rules => {
                return {
                  rules,
                  ...options[scope],
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
