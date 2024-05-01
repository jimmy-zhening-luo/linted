import JsConfigOptions from "./language-options/JsConfigOptions.js";
import TsConfigOptions from "./language-options/TsConfigOptions.js";
import JsRules from "./language-rulesets/JsRules.js";
import TsRules from "./language-rulesets/TsRules.js";

type Language = "js" | "ts";
type Config<
  TS extends boolean,
  ConfigOptions extends TS extends true ? TsConfigOptions : JsConfigOptions,
> = ConfigOptions["config"] & {
  rules: IRules;
};

export default class Configs {
  protected readonly options: {
    js: JsConfigOptions;
    ts: TsConfigOptions;
  };
  protected readonly rules: Record<"presets" | "moduleOverrides" | "userOverrides", Record<Language, IRules[]>>;

  constructor(
    stylisticPlugin: ConstructorParameters<typeof JsConfigOptions>[0],
    jsPlugin: ConstructorParameters<typeof JsConfigOptions>[1],
    tsPlugin: ConstructorParameters<typeof TsConfigOptions>[2],
    tsParser: ConstructorParameters<typeof TsConfigOptions>[3],
    jsFiles: string[],
    tsFiles: string[],
    jsOverrides: IRules = {},
    tsOverrides: IRules = {},
  ) {
    this.options = {
      js: new JsConfigOptions(
        stylisticPlugin,
        jsPlugin,
        ...jsFiles,
      ),
      ts: new TsConfigOptions(
        stylisticPlugin,
        jsPlugin,
        tsPlugin,
        tsParser,
        ...tsFiles,
      ),
    };
    this.rules = {
      presets: {
        js: [{ ...this.options.js.config.plugins["@eslint/js"].configs.recommended.rules }],
        ts: [{ ...this.options.ts.config.plugins["@typescript-eslint"].configs["eslint-recommended"].rules }],
      },
      moduleOverrides: {
        js: JsRules,
        ts: TsRules,
      },
      userOverrides: {
        js: [jsOverrides],
        ts: [tsOverrides],
      },
    };
  }

  public get configs(): Array<
    Config<boolean, JsConfigOptions | TsConfigOptions>
  > {
    return [
      ...this.getLanguageConfigs<"js">("js"),
      ...this.getLanguageConfigs<"ts">("ts"),
    ];
  }

  protected getLanguageConfigs<L extends Language>(
    language: L,
  ): Array<Config<boolean, JsConfigOptions | TsConfigOptions>> {
    return [
      ...[
        ...this.rules.presets[language],
        ...this.rules.moduleOverrides[language],
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
