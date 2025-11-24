import "chai/register-should.js";
import { scopes } from "../../scope";

describe(
  "Scopes",
  () => {
    describe(
      "shape",
      () => {
        it(
          "is a non-empty array",
          () => {
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
      () => {
        it(
          "are unique",
          () => {
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
      () => {
        it(
          "`jsoncc` > `jsonc` > `json`",
          () => {
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
          () => {
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
          () => {
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
