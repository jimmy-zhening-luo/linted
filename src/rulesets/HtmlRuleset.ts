import type { Input } from "@eslinted/core";
import HtmlRecommended from "./rules/html/HtmlRecommended.js";
import HtmlEnable from "./rules/html/HtmlEnable.js";

export default [
  HtmlRecommended,
  HtmlEnable,
] as const satisfies readonly Input.RuleRecord[];
