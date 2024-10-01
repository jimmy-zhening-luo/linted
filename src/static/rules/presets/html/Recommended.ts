import html from "@html-eslint/eslint-plugin";
import { Strings, type RuleEntry } from "../index.js";

const { Id: { Recommended } } = Strings;

// Remove shared config once manually configured
export default [Recommended, (html.configs["flat/recommended"] as Record<"rules", RuleEntry.Object>).rules] as const satisfies RuleEntry;
