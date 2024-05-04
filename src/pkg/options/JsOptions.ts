import Options from "./options/Options.js";

export default class JsOptions extends Options {
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
