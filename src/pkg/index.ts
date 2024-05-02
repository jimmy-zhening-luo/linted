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
    stylisticPlugin: StylisticPluginBody,
    jsPlugin: JsPluginBody,
    tsPlugin: TsPluginBody,
    tsParser: ConstructorParameters<typeof TsOptions>[3],
    jsFiles: string[],
    tsFiles: string[],
    jsOverrides: IRules = {},
    tsOverrides: IRules = {},
  ) {
    this.options = {
      js: new JsOptions(
        {
          "@stylistic": stylisticPlugin,
          "@eslint/js": jsPlugin,
        },
        ...jsFiles,
      ),
      ts: new TsOptions(
        {
          "@stylistic": stylisticPlugin,
          "@eslint/js": jsPlugin,
          "@typescript-eslint": tsPlugin,
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
          rules =>
            ({
              ...this.options[language].config,
              rules,
            }),
        ),
    ];
  }
}
