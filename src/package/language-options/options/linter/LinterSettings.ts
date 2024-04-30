import type IRuleSet from "../../../language-rulesets/rulesets/ruleset/IRuleSet.js";

type StylisticPlugin = { configs: { "disable-legacy": { rules: IRuleSet } } };
type JSLintPlugin = { configs: { recommended: { rules: IRuleSet } } };
type TSLintPlugin = { configs: { "eslint-recommended": { rules: IRuleSet } } };
type BasePlugins = {
  "@stylistic": StylisticPlugin;
  "@eslint/js": JSLintPlugin;
};
type BaseLanguageOptions = {
  ecmaVersion: 2022;
  sourceType: "module";
};

export default interface LinterSettings<
  TS extends boolean = false,
> {
  linterOptions: {
    noInlineConfig: true;
    reportUnusedDisableDirectives: true;
  };
  plugins: TS extends true
    ? (
        BasePlugins & {
          "@typescript-eslint": TSLintPlugin;
        }
      )
    : BasePlugins;
  languageOptions: TS extends true
    ? (
        BaseLanguageOptions & {
          parser: unknown;
          parserOptions: {
            ecmaVersion: "es2022";
            sourceType: "module";
            project: true;
          };
        }
      )
    : BaseLanguageOptions;
}
