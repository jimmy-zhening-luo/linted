import JsOptions from "./default/options/JsOptions.js";
import TsOptions from "./default/options/TsOptions.js";
import SvelteOptions from "./default/options/SvelteOptions.js";
import JsRuleset from "./default/ruleset/JsRuleset.js";
import TsJsRuleset from "./default/ruleset/TsJsRuleset.js";
import SvelteTsJsRuleset from "./default/ruleset/SvelteTsJsRuleset.js";

declare type OPTIONS = {
  js: JsOptions;
  ts: TsOptions;
  svelte: SvelteOptions;
};
declare type _RequiredLanguage =
  | "js"
  | "ts"
;
declare type _OptionalLanguage =
  | "svelte"
;
declare type _Language =
  | _RequiredLanguage
  | _OptionalLanguage
;
declare type NullableOPTIONS = Record<_RequiredLanguage, OPTIONS[_RequiredLanguage]>
& Record<_OptionalLanguage, Nullable<OPTIONS[_OptionalLanguage]>>;
declare type Config<L extends _Language> = OPTIONS[L]["config"] & Record<"rules", IRules>;
declare type StrictConfig<L extends _Language> = Omit<Config<L>, "processor"> & Partial<Pick<Config<L>, "processor">>;
declare type BadSveltePlugin<Config> = [Config, Config, Config];

export default class Configs {
  protected readonly options: NullableOPTIONS;
  protected readonly rulesets: Record<_Language, IRules[]>;

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
      overrideJs = {},
      overrideTs = {},
      overrideSvelte = {},
    }: {
      overrideJs?: IRules;
      overrideTs?: IRules;
      overrideSvelte?: IRules;
    } = {},
    svelte: Nullable<{
      svelte: SveltePluginBody;
      parser: SvelteParser;
      files: string[];
    }> = null,
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
        overrideJs,
      ],
      ts: [
        ...TsJsRuleset,
        overrideTs,
      ],
      svelte: svelte === null
        ? []
        : [
            this.badSvelte(svelte.svelte.configs["flat/all"])[1].rules,
            this.badSvelte(svelte.svelte.configs["flat/all"])[2].rules,
            ...SvelteTsJsRuleset,
            overrideSvelte,
          ],
    };
  }

  public get configs(): Array<StrictConfig<_Language>> {
    return [
      ...this.getLanguageConfigs<"js">("js"),
      ...this.getLanguageConfigs<"ts">("ts"),
      ...this.getLanguageConfigs<"svelte">("svelte"),
    ].map(
      (config: Config<_Language>): StrictConfig<_Language> =>
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

  protected getLanguageConfigs<L extends _Language>(language: L): Array<Config<L>> {
    const opt: NullableOPTIONS[L] = this.options[language];

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
