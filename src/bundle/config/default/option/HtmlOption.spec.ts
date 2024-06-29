import HtmlOption from "./HtmlOption.js";

const FakePlugin = { cool: "beans" };
const FakeParser = { parse: "me" };

describe(
  "HtmlOption",
  () => {
    it(
      "is instantiable",
      () => {
        expect(
          new HtmlOption(
            { "@html-eslint": FakePlugin },
            FakeParser,
            "src/**/*.html",
          ).body.files[0],
        )
          .toBe(
            "src/**/*.html",
          );
      },
    );
  },
);
