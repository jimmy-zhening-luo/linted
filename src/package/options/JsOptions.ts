import Options from "./options/Options.js";

export default class JsOptions extends Options<
  JsPlugin,
  Record<string, unknown>
> {
  constructor(
    stylistic: StylisticPluginBody,
    jsLint: JsPluginBody,
    ...files: string[]
  ) {
    super(
      {
        "@stylistic": stylistic,
        "@eslint/js": jsLint,
      },
      {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      files,
    );
  }
}
