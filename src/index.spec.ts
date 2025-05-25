import "chai/register-should.js";
import linted from ".";

const configs = linted();

describe(
  "linted",
  function () {
    describe(
      "shape",
      function () {
        it(
          "is a function",
          function () {
            linted
              .should.be
              .a("function");
          },
        );
      },
    );
    describe(
      "output",
      function () {
        it(
          "is a non-empty array",
          function () {
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
