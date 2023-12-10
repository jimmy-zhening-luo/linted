import type LinterSettings from "./linter/LinterSettings.js";
import type { FilesToLint } from "./files/FilesToLint.js";

type ECMA_VERSION_2022 = 2022;
const ECMA_VERSION_2022: ECMA_VERSION_2022 = 2022;

type IConfigOptions<TS extends boolean = false> = LinterSettings<TS> & {
  files: FilesToLint;
};

export default abstract class ConfigOptions<
  TS extends boolean = false,
> implements IConfigOptions<TS> {
  public readonly files: FilesToLint;
  public readonly linterOptions: {
    noInlineConfig: true;
    reportUnusedDisableDirectives: true; };
  public readonly plugins: IConfigOptions<TS>["plugins"];
  public readonly languageOptions: IConfigOptions<TS>["languageOptions"];

  constructor(
    stylisticPlugin: IConfigOptions["plugins"]["@stylistic"],
    jsLintPlugin: IConfigOptions["plugins"]["@eslint/js"],
    tsLintPlugin: TS extends true ? IConfigOptions<true>["plugins"]["@typescript-eslint"] : null,
    tsLintParser: TS extends true ? IConfigOptions<true>["languageOptions"]["parser"] : null,
    ...files: FilesToLint
  ) {
    this.files = files;
    this.linterOptions = {
      noInlineConfig: true,
      reportUnusedDisableDirectives: true,
    };
    this.plugins = this.setPlugins(
      stylisticPlugin,
      jsLintPlugin,
      tsLintPlugin,
    );
    this.languageOptions = this.setLanguageOptions(
      tsLintParser,
    );
  }

  public get config(): IConfigOptions<TS> {
    return {
      files: this.files,
      linterOptions: this.linterOptions,
      plugins: this.plugins,
      languageOptions: this.languageOptions,
    };
  }

  protected setPlugins(
    stylisticPlugin: ConstructorParameters<typeof ConfigOptions<TS>>[0],
    jsLintPlugin: ConstructorParameters<typeof ConfigOptions<TS>>[1],
    tsLintPlugin: ConstructorParameters<typeof ConfigOptions<TS>>[2],
  ): IConfigOptions<TS>["plugins"] {
    const basePlugins: IConfigOptions["plugins"] = {
      "@stylistic": stylisticPlugin,
      "@eslint/js": jsLintPlugin,
    };

    return this.setTsPlugin(
      tsLintPlugin,
      basePlugins,
    );
  }

  protected setLanguageOptions(
    tsLintParser: ConstructorParameters<typeof ConfigOptions<TS>>[3],
  ): IConfigOptions<TS>["languageOptions"] {
    const baseLanguageOptions: IConfigOptions["languageOptions"] = {
      ecmaVersion: ECMA_VERSION_2022,
      sourceType: "module",
    };

    return this.setTsParser(
      tsLintParser,
      baseLanguageOptions,
    );
  }

  protected abstract setTsPlugin(
    tsLintPlugin: TS extends true ? IConfigOptions<true>["plugins"]["@typescript-eslint"] : null,
    basePlugins: IConfigOptions["plugins"]
  ): IConfigOptions<TS>["plugins"];

  protected abstract setTsParser(
    tsLintParser: unknown,
    baseLanguageOptions: IConfigOptions["languageOptions"]
  ): IConfigOptions<TS>["languageOptions"];
}
