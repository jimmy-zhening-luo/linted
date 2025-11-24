import "chai/register-should.js";
import { scopes } from "../../scope";

describe(
  "Scopes",
  function () {
    describe(
      "shape",
      function () {
        it(
          "is a non-empty array",
          function () {
            scopes
              .should.be
              .an("array")
              .not.empty;
          },
        );
      },
    );
    describe(
      "members",
      function () {
        it(
          "are unique",
          function () {
            scopes
              .length
              .should
              .equal(
                new Set(scopes)
                  .size,
              );
          },
        );
      },
    );
    describe(
      "order",
      function () {
        it(
          "`jsoncc` > `jsonc` > `json`",
          function () {
            scopes
              .should
              .include
              .members(
                [
                  "jsoncc",
                  "jsonc",
                  "json",
                ],
              );
            scopes
              .indexOf("jsoncc")
              .should.be
              .greaterThan(
                scopes
                  .indexOf("jsonc"),
              );
            scopes
              .indexOf("jsonc")
              .should.be
              .greaterThan(
                scopes
                  .indexOf("json"),
              );
          },
        );
        it(
          "`svelte` > `ts`",
          function () {
            scopes
              .should
              .include
              .members(
                [
                  "svelte",
                  "ts",
                ],
              );
            scopes
              .indexOf("svelte")
              .should.be
              .greaterThan(
                scopes
                  .indexOf("ts"),
              );
          },
        );
        it(
          "`ts` > `js`",
          function () {
            scopes
              .should
              .include
              .members(
                [
                  "ts",
                  "js",
                ],
              );
            scopes
              .indexOf("ts")
              .should.be
              .greaterThan(
                scopes
                  .indexOf("js"),
              );
          },
        );
      },
    );
  },
);
