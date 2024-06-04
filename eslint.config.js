import stylistic from "@stylistic/eslint-plugin";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import jsonc from "eslint-plugin-jsonc";
import jsonParser from "jsonc-eslint-parser";
import JsRuleset from "./project/lint/js.config.js";
import TsRuleset from "./project/lint/ts.config.js";
import JsoncRuleset from "./project/lint/jsonc.config.js";
import JsonRuleset from "./project/lint/json.config.js";

const FILES = {
  js: [
    "project/lint/**/*.config.js",
    "*.config.js",
  ],
  ts: ["src/**/*.ts"],
  jsonc: ["tsconfig.json"],
  json: ["package.json"],
};
const RULESET = {
  js: JsRuleset,
  ts: TsRuleset,
  jsonc: JsoncRuleset,
  json: JsonRuleset,
};
const OPTIONS = {
  plugins: {
    js: { "@stylistic": stylistic },
    get ts() {
      return {
        ...OPTIONS.plugins.js,
        "@typescript-eslint": ts,
      };
    },
    jsonc: { jsonc },
    get json() {
      return OPTIONS
        .plugins
        .jsonc;
    },
  },
  languageOptions: {
    js: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    get ts() {
      return {
        ...OPTIONS.languageOptions.js,
        parser: tsParser,
        parserOptions: {
          ...OPTIONS.languageOptions.js,
          project: "tsconfig.json",
        },
      };
    },
    jsonc: { parser: jsonParser },
    get json() {
      return OPTIONS
        .languageOptions
        .jsonc;
    },
  },
  linterOptions: {
    js: {
      noInlineConfig: true,
      reportUnusedDisableDirectives: true,
    },
    get ts() {
      return OPTIONS
        .linterOptions
        .js;
    },
    get jsonc() {
      return OPTIONS
        .linterOptions
        .js;
    },
    get json() {
      return OPTIONS
        .linterOptions
        .js;
    },
  },
  processor: {
    js: {},
    get ts() {
      return OPTIONS
        .processor
        .js;
    },
    get jsonc() {
      return OPTIONS
        .processor
        .js;
    },
    get json() {
      return OPTIONS
        .processor
        .js;
    },
  },
};

function flat(
  language,
) {
  return RULESET[
    language
  ]
    .map(
      rules => {
        return {
          rules,
          files: FILES[
            language
          ],
          plugins: OPTIONS
            .plugins[
              language
            ],
          linterOptions: OPTIONS
            .linterOptions[
              language
            ],
          languageOptions: OPTIONS
            .languageOptions[
              language
            ],
          ...OPTIONS
            .processor[
              language
            ],
        };
      },
    );
}

const flatConfig = [
  "js",
  "ts",
  "jsonc",
  "json",
]
  .map(
    language =>
      flat(
        language,
      ),
  )
  .flat();

export default flatConfig;
