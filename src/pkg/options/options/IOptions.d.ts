declare type IOptions<
  Plugins,
  Lang,
> = {
  linterOptions: LinterOptions;
  plugins: StylisticPlugin & Plugins;
  languageOptions: EcmaLanguage & Lang;
  files: IFiles;
};
