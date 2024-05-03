import Options from "./options/Options.js";

export default class JsOptions extends Options<
  {},
  Record<string, unknown>
> {
  constructor(
    plugins: StylisticPlugin & {},
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
