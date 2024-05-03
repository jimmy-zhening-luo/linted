// PLUGINS
import stylistic from "@stylistic/eslint-plugin";
import ts from "@typescript-eslint/eslint-plugin";
import svelte from "eslint-plugin-svelte";
import tsParser from "@typescript-eslint/parser";
import svelteParser from "svelte-eslint-parser";
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
    svelte: ["src/**/*.svelte"],
  },
  plugins: {
    js: { "@stylistic": stylistic },
    get ts() {
      return {
        ...OPTIONS.plugins.js,
        "@typescript-eslint": ts,
      };
    },
    get svelte() {
      return {
        ...OPTIONS.plugins.ts,
        svelte,
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
    get svelte() {
      return OPTIONS.linterOptions.ts;
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
    get svelte() {
      return {
        ...OPTIONS.languageOptions.js,
        parser: OPTIONS.languageOptions.ts.parser,
        parserOptions: {
          ...OPTIONS.languageOptions.ts.parserOptions,
          extraFileExtensions: [".svelte"],
        },
        overrides: [
          {
            files: OPTIONS.files.svelte,
            parser: svelteParser,
            parserOptions: { parser: OPTIONS.languageOptions.ts.parser },
          },
        ],
      };
    },
  },
};
const RULESET = {
  js: [
    rulesJTsStylistic,
    rulesJs,
  ],
  get ts() {
    return [
      ...RULESET.js,
      rulesTsDisableCompiler,
      rulesTsDisableExtend,
      rulesTsEnableExtend,
      rulesTsEnable,
    ];
  },
  get svelte() {
    return [
      ...RULESET.ts,
      svelte.configs["flat/recommended"],
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
        };
      },
    );
}

export default [
  ...flattenRuleset("js"),
  ...flattenRuleset("ts"),
];
