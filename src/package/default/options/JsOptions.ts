import AbstractOptions from "./abstract/AbstractOptions.js";

export default class JsOptions extends AbstractOptions {
  constructor(
    plugins: StylisticPlugin & {},
    ...files: string[]
  ) {
    super(
      {
        processor: null,
        files,
        plugins,
        languageOptions: {
          ecmaVersion: "latest",
          sourceType: "module",
        },
      },
    );
  }
}
