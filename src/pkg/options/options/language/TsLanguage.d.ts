declare type TsLanguage<Parser = unknown> = {
  parser: Parser;
  parserOptions: EcmaLanguage & Record<"project", true>;
};
