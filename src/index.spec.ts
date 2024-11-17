import { expect } from "chai";
import linted from ".";
import { ignores } from "@eslinted/defaults";

const configs = linted(),
numScopes = Object.keys(ignores).length - 1;

describe("Linted", function () {
  describe("shape", function () {
    it("is function", function () {
      expect(linted)
        .a("function");
    });
  });
  describe("output", function () {
    it("is array", function () {
      expect(configs)
        .an("array");
    });
    it(`has length >= settings + plugins + * + ${numScopes} scopes) = ${3 + numScopes}  [Actual: ${configs.length}]`, function () {
      expect(configs)
        .has.lengthOf.at.least(3 + numScopes);
    });
  });
});
