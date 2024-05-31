import stylistic from "@stylistic/eslint-plugin";
import plugin from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";
import js from "./project/lint/js.config.js";
import ts from "./project/lint/ts.config.js";

const RULESET = {
  js,
  ts,
};
const OPTIONS = {
  files: {
    js: [
      "project/lint/**/*.config.js",
      "*.config.js",
    ],
    ts: ["src/**/*.ts"],
  },
  plugins: {
    js: { "@stylistic": stylistic },
    get ts() {
      return {
        ...OPTIONS.plugins.js,
        "@typescript-eslint": plugin,
      };
    },
  },
  linterOptions: {
    js: {
      noInlineConfig: true,
      reportUnusedDisableDirectives: true,
    },
    get ts() {
      return { ...OPTIONS.linterOptions.js };
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
        parser,
        parserOptions: {
          ...OPTIONS.languageOptions.js,
          project: "tsconfig.json",
        },
      };
    },
  },
  processor: {
    js: {},
    ts: {},
  },
};

function flat(language) {
  return RULESET[language]
    .map(
      rules => {
        return {
          files: OPTIONS.files[language],
          plugins: OPTIONS.plugins[language],
          linterOptions: OPTIONS.linterOptions[language],
          languageOptions: OPTIONS.languageOptions[language],
          rules,
          ...OPTIONS.processor[language],
        };
      },
    );
}

export default [
  ...flat("js"),
  ...flat("ts"),
];
