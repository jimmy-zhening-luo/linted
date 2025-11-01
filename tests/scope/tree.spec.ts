import "chai/register-should.js";
import { tree } from "../../scope/tree";

const nodes = tree.map(([scope]) => scope);

describe(
  "Tree",
  function () {
    describe(
      "shape",
      function () {
        it(
          "is an array",
          function () {
            tree
              .should.be
              .an("array");
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
            tree
              .length
              .should
              .equal(
                new Set(nodes)
                  .size,
              );
          },
        );
        it(
          "omit `js`",
          function () {
            nodes
              .should
              .not.include
              .members(["js"]);
          },
        );
      },
    );
    describe(
      "order",
      function () {
        it(
          "`jsoncc` < [`jsonc`]?",
          function () {
            nodes
              .should
              .include
              .members(["jsoncc"]);
            nodes
              .indexOf("jsoncc")
              .should.be
              .lessThan(
                nodes.indexOf("jsonc") * tree.length,
              );
          },
        );
        it(
          "`mocha` < `ts`",
          function () {
            nodes
              .should
              .include
              .members(
                [
                  "mocha",
                  "ts",
                ],
              );
            nodes
              .indexOf("mocha")
              .should.be
              .lessThan(
                nodes
                  .indexOf("ts"),
              );
          },
        );
        it(
          "`svelte` < `ts`",
          function () {
            nodes
              .should
              .include
              .members(
                [
                  "svelte",
                  "ts",
                ],
              );
            nodes
              .indexOf("svelte")
              .should.be
              .lessThan(
                nodes
                  .indexOf("ts"),
              );
          },
        );
        it(
          "`ts` is last",
          function () {
            nodes
              .should
              .include
              .members(["ts"]);
            nodes
              .indexOf("ts")
              .should
              .equal(tree.length - 1);
          },
        );
      },
    );
  },
);
