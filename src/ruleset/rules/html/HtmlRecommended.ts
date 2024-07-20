import html from "@html-eslint/eslint-plugin";
import { Rule } from "@eslinted/core";
import { Recommended } from "../id.js";

const HtmlRecommended = new Rule(
  Recommended,
  (html.configs["flat/recommended"] as Record<"rules", IRule>).rules, // Remove shared config once manually configured
);

export default HtmlRecommended;
