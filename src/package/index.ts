import JsConfigOptions from "./language-options/JsConfigOptions.js";
import TsConfigOptions from "./language-options/TsConfigOptions.js";
import JsRuleSets from "./language-rulesets/JsRuleSets.js";
import TsRuleSets from "./language-rulesets/TsRuleSets.js";
import type IRuleSet from "./language-rulesets/rulesets/ruleset/IRuleSet.js";

type Config<
  TS extends boolean,
  ConfigOptions extends TS extends true ? TsConfigOptions : JsConfigOptions,
> = ConfigOptions["config"] & {
  rules: IRuleSet;
};

export default class Configs {
  protected readonly options: {
    js: JsConfigOptions;
    ts: TsConfigOptions;
  };
  protected readonly rules: {
    presets: {
      stylistic: {
        shared: IRuleSet;
      };
      functional: {
        js: IRuleSet;
        ts: IRuleSet;
      };
    };
    overrides: {
      js: typeof JsRuleSets;
      ts: typeof TsRuleSets;
    };
  };

  constructor(
    stylisticPlugin: ConstructorParameters<typeof JsConfigOptions>[0],
    jsPlugin: ConstructorParameters<typeof JsConfigOptions>[1],
    tsPlugin: ConstructorParameters<typeof TsConfigOptions>[2],
    tsParser: ConstructorParameters<typeof TsConfigOptions>[3],
    jsFiles: string[],
    tsFiles: string[],
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
        stylistic: {
          shared: { ...this.options.js.config.plugins["@stylistic"].configs["disable-legacy"].rules },
        },
        functional: {
          js: { ...this.options.js.config.plugins["@eslint/js"].configs.recommended.rules },
          ts: { ...this.options.ts.config.plugins["@typescript-eslint"].configs["eslint-recommended"].rules },
        },
      },
      overrides: {
        js: JsRuleSets,
        ts: TsRuleSets,
      },
    };
  }

  public get configs(): Array<
  Config<boolean, JsConfigOptions | TsConfigOptions>
  > {
    return [
      ...this.getLanguageConfigs("js"),
      ...this.getLanguageConfigs("ts"),
    ];
  }

  protected getLanguageConfigs(
    language: "js" | "ts",
  ): Array<Config<boolean, JsConfigOptions | TsConfigOptions>> {
    return [
      ...[
        { ...this.rules.presets.functional[language] },
        { ...this.rules.presets.stylistic.shared },
        ...Object.values(this.rules.overrides[language]),
      ]
        .map(
          ruleSet => ({
            ...this.options[language].config,
            rules: { ...ruleSet },
          }),
        ),
    ];
  }
}
