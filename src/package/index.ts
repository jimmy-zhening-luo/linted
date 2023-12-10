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
    files: {
      ts: string[];
      js: string[];
    },
    plugins: {
      stylistic: ConstructorParameters<typeof JsConfigOptions>[0];
      js: ConstructorParameters<typeof JsConfigOptions>[1];
      ts: ConstructorParameters<typeof TsConfigOptions>[2];
    },
    parser: unknown,
  ) {
    this.options = {
      js: new JsConfigOptions(
        plugins.stylistic,
        plugins.js,
        ...files.js,
      ),
      ts: new TsConfigOptions(
        plugins.stylistic,
        plugins.js,
        plugins.ts,
        parser,
        ...files.ts,
      ),
    };
    this.rules = {
      presets: {
        stylistic: {
          shared: this.options.js.config.plugins["@stylistic"].configs["disable-legacy"].rules,
        },
        functional: {
          js: this.options.js.config.plugins["@eslint/js"].configs.recommended.rules,
          ts: this.options.ts.config.plugins["@typescript-eslint"].configs["eslint-recommended"].rules,
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
        this.rules.presets.functional[language],
        this.rules.presets.stylistic.shared,
        ...Object.values(this.rules.overrides[language]),
      ]
        .map(
          ruleSet => ({
            ...this.options[language].config,
            rules: ruleSet,
          }),
        ),
    ];
  }
}
