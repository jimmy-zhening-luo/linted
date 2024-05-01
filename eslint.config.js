// PLUGINS
import stylistic from "@stylistic/eslint-plugin";
import jsLint from "@eslint/js";
import tsLint from "@typescript-eslint/eslint-plugin";
import tsLintParser from "@typescript-eslint/parser";
import stylisticBaseRules from "./stylistic.base.config.js";

const OPTIONS = {
  files: {
    js: [
      "eslint.config.js",
      "stylistic.base.config.js",
    ],
    ts: ["src/**/*.ts"],
  },
  plugins: {
    js: {
      "@eslint/js": jsLint,
      "@stylistic": stylistic,
    },
    get ts() {
      return {
        ...OPTIONS.plugins.js,
        "@typescript-eslint": tsLint,
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
        parser: tsLintParser,
        parserOptions: {
          ecmaVersion: "latest",
          sourceType: "module",
          project: true,
        },
      };
    },
  },
};
const RULESETS = {
  js: [
    { ...jsLint.configs.recommended.rules },
    { ...stylisticBaseRules },
  ],
  ts: [
    { ...tsLint.configs["strict-type-checked"].rules },
    { ...stylisticBaseRules },
  ],
};

function _flattenRuleSets(
  language,
) {
  return RULESETS[language]
    .map(
      ruleset =>
        (
          {
            files: OPTIONS.files[language],
            plugins: OPTIONS.plugins[language],
            linterOptions: OPTIONS.linterOptions[language],
            languageOptions: OPTIONS.languageOptions[language],
            rules: { ...ruleset },
          }
        ),
    );
}

export default [
  ..._flattenRuleSets("js"),
  ..._flattenRuleSets("ts"),
];
