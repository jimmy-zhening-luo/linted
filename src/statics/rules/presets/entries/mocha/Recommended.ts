import mocha from "eslint-plugin-mocha";
import { Strings, type RuleEntry } from "../index.js";

const { Id: { Recommended } } = Strings;

export default [
  Recommended,
  (mocha.configs.flat.recommended as Record<"rules", RuleEntry.Object>).rules, // Remove shared config once manually configured
] as const satisfies RuleEntry;
