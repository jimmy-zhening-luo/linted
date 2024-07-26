import type { Boundary } from "@eslinted/core";
import HtmlRecommended from "./objects/html/HtmlRecommended.js";
import HtmlEnable from "./objects/html/HtmlEnable.js";

export default [
  HtmlRecommended,
  HtmlEnable,
] as const satisfies readonly Boundary.Input.Rules.Preset.Entry[];
