import type { Input } from "@eslinted/core";
import HtmlRecommended from "./objects/html/HtmlRecommended.js";
import HtmlEnable from "./objects/html/HtmlEnable.js";

export default [
  HtmlRecommended,
  HtmlEnable,
] as const satisfies readonly Input.Rules.Entry[];
