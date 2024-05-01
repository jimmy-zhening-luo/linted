import JsOptions from "./options/JsOptions.js";
import TsOptions from "./options/TsOptions.js";
import JsRules from "./rules/JsRules.js";
import TsRules from "./rules/TsRules.js";

declare type Language = "js" | "ts";
declare type Config<
  TS extends boolean,
  ConfigOptions extends TS extends true ? TsOptions : JsOptions,
> = ConfigOptions["config"] & {
  rules: IRules;
};

export default class Configs {
  protected readonly options: {
    js: JsOptions;
    ts: TsOptions;
  };
  protected readonly rules: Record<"presets" | "moduleOverrides" | "userOverrides", Record<Language, IRules[]>>;

  constructor(
    stylisticPlugin: StylisticPlugin,
    jsPlugin: JsPlugin,
    tsPlugin: TsPlugin,
    tsParser: ConstructorParameters<typeof TsOptions>[3],
    jsFiles: string[],
    tsFiles: string[],
    jsOverrides: IRules = {},
    tsOverrides: IRules = {},
  ) {
    this.options = {
      js: new JsOptions(
        stylisticPlugin,
        jsPlugin,
        ...jsFiles,
      ),
      ts: new TsOptions(
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
        ts: [{ ...this.options.ts.config.plugins["@typescript-eslint"].configs["strict-type-checked"].rules }],
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
    Config<boolean, JsOptions | TsOptions>
  > {
    return [
      ...this.getLanguageConfigs<"js">("js"),
      ...this.getLanguageConfigs<"ts">("ts"),
    ];
  }

  protected getLanguageConfigs<L extends Language>(
    language: L,
  ): Array<Config<boolean, JsOptions | TsOptions>> {
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
