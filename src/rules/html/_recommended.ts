import { id } from "../_strings.js";
import html from "@html-eslint/eslint-plugin";

const { recommended } = id;

// Remove shared config once manually configured
export default [recommended, (html.configs["flat/recommended"] as Record<"rules", Record<string, "off">>).rules] as const;
