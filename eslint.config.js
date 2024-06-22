import stylistic from "@stylistic/eslint-plugin";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import jest from "eslint-plugin-jest";
import jsonc from "eslint-plugin-jsonc";
import jsonParser from "jsonc-eslint-parser";
import JsRuleset from "./project/js.config.js";
import TsRuleset from "./project/ts.config.js";
import JsoncRuleset from "./project/jsonc.config.js";
import JsonRuleset from "./project/json.config.js";

const FILES = {
  js: [
    "project/**/*.config.js",
    "*.config.js",
  ],
  ts: ["src/**/*.ts"],
  jest: ["src/**/*.spec.ts"],
  jsonc: ["tsconfig.json"],
  json: ["package.json"],
};
const RULESET = {
  js: JsRuleset,
  ts: TsRuleset,
  get jest() {
    return [
      ...RULESET.ts,
      jest.configs["flat/recommended"].rules,
    ];
  },
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
    get jest() {
      return {
        ...OPTIONS.plugins.ts,
        jest,
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
    get jest() {
      return {
        ...OPTIONS.languageOptions.ts,
        globals: { "jest/globals": true },
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
    base: {
      noInlineConfig: true,
      reportUnusedDisableDirectives: "error",
    },
    get js() {
      return OPTIONS
        .linterOptions
        .base;
    },
    get ts() {
      return OPTIONS
        .linterOptions
        .base;
    },
    get jest() {
      return OPTIONS
        .linterOptions
        .base;
    },
    get jsonc() {
      return OPTIONS
        .linterOptions
        .base;
    },
    get json() {
      return OPTIONS
        .linterOptions
        .base;
    },
  },
  processor: {
    base: {},
    get js() {
      return OPTIONS
        .processor
        .base;
    },
    get ts() {
      return OPTIONS
        .processor
        .base;
    },
    get jest() {
      return OPTIONS
        .processor
        .base;
    },
    get jsonc() {
      return OPTIONS
        .processor
        .base;
    },
    get json() {
      return OPTIONS
        .processor
        .base;
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
          languageOptions: OPTIONS
            .languageOptions[
              language
            ],
          linterOptions: OPTIONS
            .linterOptions[
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
  "jest",
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
