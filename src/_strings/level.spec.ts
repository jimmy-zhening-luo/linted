import { expect } from "chai";
import * as level from "./level";

describe("Strings:Level", function () {
  describe("shape", function () {
    it("is module", function () {
      expect(level)
        .a("module");
    });
  });
  describe("count", function () {
    it("is 3", function () {
      expect(Object.keys(level))
        .lengthOf(3);
    });
  });
  describe("unique count", function () {
    it("is 3", function () {
      expect(new Map(Object.entries(level)))
        .lengthOf(3);
    });
  });
  describe("values", function () {
    it("are: error, warn, off", function () {
      expect(new Map(Object.entries(level)))
        .includes("error")
        .and.includes("warn")
        .and.includes("off");
    });
  });
});
