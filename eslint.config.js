// PLUGINS
import stylistic from "@stylistic/eslint-plugin";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import rulesStylistic from "./stylistic.config.js";
import rulesJs from "./eslint.js.config.js";
import rulesTs from "./eslint.ts.config.js";

const OPTIONS = {
  files: {
    js: ["*.config.js"],
    ts: ["src/**/*.ts"],
  },
  plugins: {
    js: { "@stylistic": stylistic },
    get ts() {
      return {
        ...OPTIONS.plugins.js,
        "@typescript-eslint": ts,
      };
    },
  },
  linterOptions: {
    js: {
      noInlineConfig: true,
      reportUnusedDisableDirectives: true,
    },
    get ts() {
      return OPTIONS.linterOptions.js;
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
          project: true,
        },
      };
    },
  },
  processor: {
    js: {},
    ts: {},
  },
};
const RULESET = {
  js: [
    ...rulesStylistic,
    ...rulesJs,
  ],
  get ts() {
    return [
      ...RULESET.js,
      ...rulesTs,
    ];
  },
};

function flattenRuleset(
  lang,
) {
  return RULESET[lang]
    .map(
      rules => {
        return {
          files: OPTIONS.files[lang],
          plugins: OPTIONS.plugins[lang],
          linterOptions: OPTIONS.linterOptions[lang],
          languageOptions: OPTIONS.languageOptions[lang],
          rules,
          ...OPTIONS.processor[lang],
        };
      },
    );
}

export default [
  ...flattenRuleset("js"),
  ...flattenRuleset("ts"),
];
