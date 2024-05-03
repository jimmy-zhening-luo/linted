// PLUGINS
import pluginStylistic from "@stylistic/eslint-plugin";
import pluginTs from "@typescript-eslint/eslint-plugin";
import parserTs from "@typescript-eslint/parser";
import rulesJTsStylistic from "./stylistic.base.config.js";
import rulesJs from "./eslint.js.config.js";
import rulesTsDisableCompiler from "./eslint.ts.disable.compiler.config.js";
import rulesTsDisableExtend from "./eslint.ts.disable.extend.config.js";
import rulesTsEnableExtend from "./eslint.ts.enable.extend.config.js";
import rulesTsEnable from "./eslint.ts.enable.tsonly.config.js";

const OPTIONS = {
  files: {
    js: [
      "stylistic.base.config.js",
      "eslint.ts.enable.tsonly.config.js",
      "eslint.ts.enable.extend.config.js",
      "eslint.ts.disable.extend.config.js",
      "eslint.ts.disable.compiler.config.js",
      "eslint.js.config.js",
      "eslint.config.js",
    ],
    ts: ["src/**/*.ts"],
  },
  plugins: {
    js: { "@stylistic": pluginStylistic },
    get ts() {
      return {
        ...OPTIONS.plugins.js,
        "@typescript-eslint": pluginTs,
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
        parser: parserTs,
        parserOptions: {
          ...OPTIONS.languageOptions.js,
          project: true,
        },
      };
    },
  },
};
const RULESETS = {
  js: [
    { ...rulesJs },
    { ...rulesJTsStylistic },
  ],
  ts: [
    { ...rulesTsDisableCompiler },
    { ...rulesTsDisableExtend },
    { ...rulesTsEnableExtend },
    { ...rulesTsEnable },
    { ...rulesJTsStylistic },
  ],
};

function _flattenRuleSets(
  language,
) {
  return RULESETS[language]
    .map(
      ruleset => {
        return {
          files: OPTIONS.files[language],
          plugins: OPTIONS.plugins[language],
          linterOptions: OPTIONS.linterOptions[language],
          languageOptions: OPTIONS.languageOptions[language],
          rules: { ...ruleset },
        };
      },
    );
}

export default [
  ..._flattenRuleSets("js"),
  ..._flattenRuleSets("ts"),
];
