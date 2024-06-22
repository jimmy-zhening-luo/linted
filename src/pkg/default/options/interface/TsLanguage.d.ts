declare type TsLanguage = {
  parser: unknown;
  parserOptions:
    & JsLanguage
    & Record<
      "project"
      ,
      "tsconfig.json"
    >
  ;
};
