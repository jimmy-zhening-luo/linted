import Rules from "../Rules.js";
import { OFF } from "../State.js";

const TsDisableCompiler = new Rules(
  "disable-compiler",
  {

    // ESLint DISABLE (TSC)
    "constructor-super": OFF,
    "no-const-assign": OFF,
    "no-dupe-args": OFF,
    "no-dupe-class-members": OFF,
    "no-dupe-keys": OFF,
    "no-func-assign": OFF,
    "no-obj-calls": OFF,
    "no-setter-return": OFF,
    "no-this-before-super": OFF,
    "no-undef": OFF,
    "no-unreachable": OFF,
    "no-unsafe-negation": OFF,
    "consistent-return": OFF,
    "no-redeclare": OFF,
  },
);

export default TsDisableCompiler;
