import { recommended } from "../../_strings";
import html from "@html-eslint/eslint-plugin";

// REMOVE shared config once manually configured
export default [
  recommended,
  (html.configs["flat/recommended"] as Record<"rules", Record<string, "off">>)
    .rules,
] as const;
