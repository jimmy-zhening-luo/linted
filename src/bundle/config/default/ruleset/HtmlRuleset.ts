import Ruleset from "./base/Ruleset.js";
import HtmlEnable from "./rules/html/HtmlEnable.js";

const HtmlRuleset = new Ruleset(
  "html",
  HtmlEnable,
);

export default HtmlRuleset;
