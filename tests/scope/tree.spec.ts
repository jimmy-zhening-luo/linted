import "chai/register-should.js";
import { tree } from "../../scope/tree";

const nodes = tree.map(([scope]) => scope);

describe(
  "Tree",
  () => {
    describe(
      "shape",
      () => {
        it(
          "is an array",
          () => {
            tree
              .should.be
              .an("array");
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
          () => {
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
      () => {
        it(
          "`jsoncc` < [`jsonc`]?",
          () => {
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
          "`svelte` < `ts`",
          () => {
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
          () => {
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
