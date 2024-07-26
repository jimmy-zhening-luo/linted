import html from "@html-eslint/eslint-plugin";
import type RuleEntry from "../entry.js";
import { Recommended } from "../id.js";

export default [
  Recommended,
  (html.configs["flat/recommended"] as Record<"rules", RuleEntry.Object>).rules, // Remove shared config once manually configured
] as const satisfies RuleEntry;
