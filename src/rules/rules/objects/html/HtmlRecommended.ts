import html from "@html-eslint/eslint-plugin";
import type { Boundary } from "@eslinted/core";
import { Recommended } from "../id.js";

export default [
  Recommended,
  (html.configs["flat/recommended"] as Record<"rules", Boundary.Input.Rules.Preset.Entry.Object>).rules, // Remove shared config once manually configured
] as const satisfies Boundary.Input.Rules.Preset.Entry;
