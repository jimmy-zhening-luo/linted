import { Strings, type RuleEntry } from "../index.js";

const { Level: { OFF } } = Strings;

export default [
  "disable-compiler",
  {
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
] as const satisfies RuleEntry;
