import { expect } from "chai";
import core from "./";

describe("Core", function () {
  describe("shape", function () {
    it("is function", function () {
      expect(core)
        .a("function");
    });
  });
});
