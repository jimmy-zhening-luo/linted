// PLUGINS
import stylistic from "@stylistic/eslint-plugin";
import jsLint from "@eslint/js";
import tsLint from "@typescript-eslint/eslint-plugin";
import tsLintParser from "@typescript-eslint/parser";

// STYLISTIC BASE RULES (both JS and TS)
import stylisticBaseRules from "./stylistic.base.config.js";

const files = {
  js: [
    "eslint.config.js",
    "stylistic.base.config.js",
  ],
  ts: [
    "src/**/*.ts",
  ],
};

// CONFIG OPTIONS
const ConfigOptions = {
  files,
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
  },
};

// RULESETS
const RuleSets = {
  js: {
    functionalPreset: { ...jsLint.configs.recommended.rules },
    stylisticPreset: { ...stylistic.configs["disable-legacy"].rules },
    stylisticOverride: { ...stylisticBaseRules },
  },
  ts: {
    functionalPreset: { ...tsLint.configs["strict-type-checked"].rules },
    stylisticPreset: { ...stylistic.configs["disable-legacy"].rules },
    stylisticOverride: {
      ...stylisticBaseRules,
      "@stylistic/member-delimiter-style": "error",
      "@stylistic/type-annotation-spacing": "error",
    },
  },
};

function _flattenRuleSets(
  language,
) {
  return [
    ...Object.values(RuleSets[language])
      .filter(ruleset => Object.keys(ruleset).length > 0)
      .map(
        ruleset => (
          {
            files: ConfigOptions.files[language],
            plugins: ConfigOptions.plugins[language],
            linterOptions: ConfigOptions.linterOptions[language],
            languageOptions: ConfigOptions.languageOptions[language],
            rules: { ...ruleset },
          }
        ),
      ),
  ];
}

export default [
  ..._flattenRuleSets("js"),
  ..._flattenRuleSets("ts"),
];
