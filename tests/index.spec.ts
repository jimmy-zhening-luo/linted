import "chai/register-should.js";
import linted from "..";

const configs = linted();

describe(
  "linted",
  () => {
    describe(
      "shape",
      () => {
        it(
          "is a function",
          () => {
            linted
              .should.be
              .a("function");
          },
        );
      },
    );
    describe(
      "output",
      () => {
        it(
          "is a non-empty array",
          () => {
            configs
              .should.be
              .an("array")
              .not.empty;
          },
        );
      },
    );
  },
);
