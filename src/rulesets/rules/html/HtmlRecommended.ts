import html from "@html-eslint/eslint-plugin";
import type { Input } from "@eslinted/core";
import { Recommended } from "../id.js";

export default [
  Recommended,
  (html.configs["flat/recommended"] as Record<"rules", Input.RuleRecord[1]>).rules, // Remove shared config once manually configured
] as const satisfies Input.RuleRecord;
