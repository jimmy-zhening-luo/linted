// PLUGINS
import stylistic from "@stylistic/eslint-plugin";
import jsLint from "@eslint/js";
import tsLint from "@typescript-eslint/eslint-plugin";
import tsLintParser from "@typescript-eslint/parser";
import stylisticBaseRules from "./stylistic.base.config.js";

const ConfigOptions = {
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
  },
  linterOptions: {
    js: {
      noInlineConfig: true,
      reportUnusedDisableDirectives: true,
    },
  },
  languageOptions: {
    js: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
};

ConfigOptions.plugins.ts = {
  ...ConfigOptions.plugins.js,
  "@typescript-eslint": tsLint,
};
ConfigOptions.linterOptions.ts = ConfigOptions.linterOptions.js;
ConfigOptions.languageOptions.ts = {
  ...ConfigOptions.languageOptions.js,
  parser: tsLintParser,
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: true,
    tsconfigRootDir: import.meta.dirname,
  },
};

const RuleSets = {
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
  return RuleSets[language]
    .map(
      ruleset =>
        (
          {
            files: ConfigOptions.files[language],
            plugins: ConfigOptions.plugins[language],
            linterOptions: ConfigOptions.linterOptions[language],
            languageOptions: ConfigOptions.languageOptions[language],
            rules: { ...ruleset },
          }
        ),
    );
}

export default [
  ..._flattenRuleSets("js"),
  ..._flattenRuleSets("ts"),
];
