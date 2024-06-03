declare type TsLanguage = {
  parser: unknown;
  parserOptions:
    & EcmaLanguage
    & Record<
      "project"
      ,
      "tsconfig.json"
    >
  ;
};
