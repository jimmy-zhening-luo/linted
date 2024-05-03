import JsOptions from "./options/JsOptions.js";
import TsOptions from "./options/TsOptions.js";
import JsRuleset from "./rulesets/JsRuleset.js";
import TsRuleset from "./rulesets/TsRuleset.js";

declare type Language = "js" | "ts";
declare type Config<
  L extends Language,
> = Configs["options"][L]["config"] & {
  rules: IRules;
};

export default class Configs {
  protected readonly options: {
    js: JsOptions;
    ts: TsOptions;
  };
  protected readonly rules: Record<"module" | "userOverrides", Record<Language, IRules[]>>;

  constructor(
    stylistic: StylisticPluginBody,
    ts: TsPluginBody,
    tsParser: TsParser,
    jsFiles: string[],
    tsFiles: string[],
    jsOverrides: IRules = {},
    tsOverrides: IRules = {},
  ) {
    this.options = {
      js: new JsOptions(
        { "@stylistic": stylistic },
        ...jsFiles,
      ),
      ts: new TsOptions(
        {
          "@stylistic": stylistic,
          "@typescript-eslint": ts,
        },
        tsParser,
        ...tsFiles,
      ),
    };
    this.rules = {
      module: {
        js: JsRuleset,
        ts: TsRuleset,
      },
      userOverrides: {
        js: [jsOverrides],
        ts: [tsOverrides],
      },
    };
  }

  public get configs(): Array<
    Config<Language>
  > {
    return [
      ...this.getLanguageConfigs<"js">("js"),
      ...this.getLanguageConfigs<"ts">("ts"),
    ];
  }

  protected getLanguageConfigs<L extends Language>(
    language: L,
  ): Array<Config<L>> {
    return [
      ...[
        ...this.rules.module[language],
        ...this.rules.userOverrides[language],
      ]
        .map(
          (rules: IRules): Config<L> =>
            ({
              ...this.options[language].config,
              rules,
            }),
        ),
    ];
  }
}
