import Options from "./options/Options.js";

export default class JsOptions extends Options<
  JsPlugin,
  Record<string, unknown>
> {
  constructor(
    plugins: StylisticPlugin & JsPlugin,
    ...files: string[]
  ) {
    super(
      plugins,
      {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      files,
    );
  }
}
