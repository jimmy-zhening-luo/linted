import html from "@html-eslint/eslint-plugin";
import { Strings, type RuleEntry } from "../index.js";

const { Id: { Recommended } } = Strings;

export default [
  Recommended,
  (html.configs["flat/recommended"] as Record<"rules", RuleEntry.Object>).rules, // Remove shared config once manually configured
] as const satisfies RuleEntry;
