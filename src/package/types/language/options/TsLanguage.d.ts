declare type TsLanguage = {
  parser: TsParser;
  parserOptions:
    & EcmaLanguage
    & Record<
      "project"
      ,
      "tsconfig.json"
    >
  ;
};
