import JsOptions from "./options/JsOptions.js";
import TsOptions from "./options/TsOptions.js";
import SvelteOptions from "./options/SvelteOptions.js";
import JsRuleset from "./rulesets/JsRuleset.js";
import TsRuleset from "./rulesets/TsRuleset.js";
import SvelteRuleset from "./rulesets/SvelteRuleset.js";

declare type RequiredLanguage = "js" | "ts";
declare type OptionalLanguage = "svelte";
declare type Language = RequiredLanguage | OptionalLanguage;
declare type MyOptions = {
  js: JsOptions;
  ts: TsOptions;
  svelte: SvelteOptions;
};
declare type MyNullableOptions = Record<RequiredLanguage, MyOptions[RequiredLanguage]>
& Record<OptionalLanguage, null | MyOptions[OptionalLanguage]>;
declare type Config<
  L extends Language,
> = MyOptions[L]["config"] & {
  rules: IRules;
};
declare type ReturnedConfig<L extends Language> = Omit<Config<L>, "processor"> & Partial<Pick<Config<L>, "processor">>;

export type BadSveltePlugin<Config> = [Config, Config, Config];
export default class Configs {
  protected readonly options: MyNullableOptions;
  protected readonly rulesets: Record<Language, IRules[]>;

  constructor(
    js: {
      stylistic: StylisticPluginBody;
      files: string[];
    },
    ts: {
      ts: TsPluginBody;
      parser: TsParser;
      files: string[];
    },
    {
      overrideJs = null,
      overrideTs = null,
      overrideSvelte = null,
    }: {
      overrideJs?: null | IRules;
      overrideTs?: null | IRules;
      overrideSvelte?: null | IRules;
    } = {},
    svelte: null | {
      svelte: SveltePluginBody;
      parser: SvelteParser;
      files: string[];
    } = null,
  ) {
    this.options = {
      js: new JsOptions(
        { "@stylistic": js.stylistic },
        ...js.files,
      ),
      ts: new TsOptions(
        {
          "@stylistic": js.stylistic,
          "@typescript-eslint": ts.ts,
        },
        ts.parser,
        ...ts.files,
      ),
      svelte: svelte === null
        ? null
        : new SvelteOptions(
          {
            "@stylistic": js.stylistic,
            "@typescript-eslint": ts.ts,
            svelte: svelte.svelte,
          },
          ts.parser,
          svelte.parser,
          "svelte/svelte" as SvelteProcessor,
          ...svelte.files,
        ),
    };
    this.rulesets = {
      js: [
        ...JsRuleset,
        ...overrideJs === null
          ? []
          : [overrideJs],
      ],
      ts: [
        ...TsRuleset,
        ...overrideTs === null
          ? []
          : [overrideTs],
      ],
      svelte: [
        ...TsRuleset,
        ...svelte === null
          ? []
          : [
              this.badSvelte(svelte.svelte.configs["flat/all"])[1].rules,
              this.badSvelte(svelte.svelte.configs["flat/all"])[2].rules,
            ],
        ...SvelteRuleset,
        ...overrideTs === null
          ? []
          : [overrideTs],
        ...overrideSvelte === null
          ? []
          : [overrideSvelte],
      ],
    };
  }

  public get configs(): Array<
    ReturnedConfig<Language>
  > {
    return [
      ...this.getLanguageConfigs<"js">("js"),
      ...this.getLanguageConfigs<"ts">("ts"),
      ...this.getLanguageConfigs<"svelte">("svelte"),
    ].map(
      (config: Config<Language>): ReturnedConfig<Language> =>
        config.processor === null
          ? {
              rules: config.rules,
              files: config.files,
              languageOptions: config.languageOptions,
              linterOptions: config.linterOptions,
              plugins: config.plugins,
            }
          : config,
    );
  }

  protected badSvelte<Config>(input: Config): BadSveltePlugin<Config> {
    return input as [Config, Config, Config];
  }

  protected getLanguageConfigs<L extends Language>(
    language: L,
  ): Array<Config<L>> {
    const opt: MyNullableOptions[L] = this.options[language];

    return opt === null
      ? []
      : [
          ...this.rulesets[language]
            .map(
              (rules: IRules): Config<L> => {
                return {
                  ...opt.config,
                  rules,
                };
              },
            ),
        ];
  }
}
