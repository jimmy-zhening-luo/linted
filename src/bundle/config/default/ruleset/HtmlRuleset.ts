import Ruleset from "./base/Ruleset.js";
import HtmlRecommended from "./rules/html/HtmlRecommended.js";
import HtmlEnable from "./rules/html/HtmlEnable.js";

const HtmlRuleset = new Ruleset(
  "html",
  HtmlRecommended,
  HtmlEnable,
);

export default HtmlRuleset;
