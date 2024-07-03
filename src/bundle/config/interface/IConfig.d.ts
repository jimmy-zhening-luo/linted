declare type IConfig = {
  rules: IRule;
  files: string[];
  name: `linted/scope:${string}`;
  linterOptions: {
    noInlineConfig: true;
    reportUnusedDisableDirectives: "error";
  };
  languageOptions: {
    sourceType?:
      | "module"
      | "script"
    ;
    ecmaVersion?: "latest";
    globals?: Record<
      string
      ,
      true
    >;
    parser?: unknown;
    parserOptions?: Record<
      string
      ,
      unknown
    >;
  };
  plugins: Record<
    Plugins
    ,
    Record<
      "configs"
      ,
      unknown
    >
  >;
  processor?: string;
};
