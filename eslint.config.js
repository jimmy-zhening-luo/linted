import js from "./eslint.js.config.js";
import ts from "./eslint.ts.config.js";
import stylisticPlugin from "@stylistic/eslint-plugin";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";

const RULESET = {
  js,
  ts,
};
const OPTIONS = {
  files: {
    js: ["*.config.js"],
    ts: ["src/**/*.ts"],
  },
  plugins: {
    js: { "@stylistic": stylisticPlugin },
    get ts() {
      return {
        ...OPTIONS.plugins.js,
        "@typescript-eslint": tsPlugin,
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
