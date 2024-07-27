import mocha from "eslint-plugin-mocha";
import type RuleEntry from "../entry.js";
import { Recommended } from "../id.js";

export default [
  Recommended,
  (mocha.configs.flat.recommended as Record<"rules", RuleEntry.Object>).rules, // Remove shared config once manually configured
] as const satisfies RuleEntry;
