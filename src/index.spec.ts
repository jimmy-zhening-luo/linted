import { expect } from "chai";
import linted from ".";

const configs = linted();

describe("Linted", function () {
  describe("shape", function () {
    it("is a function", function () {
      expect(linted)
        .a("function");
    });
  });
  describe("output", function () {
    it("is an array", function () {
      expect(configs)
        .an("array");
    });
    it("non-empty", function () {
      expect(configs)
        .lengthOf.above(1);
    });
  });
});
