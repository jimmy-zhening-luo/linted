import html from "@html-eslint/eslint-plugin";
import Rule from "../Rule.js";

const HtmlRecommended = new Rule(
  "enable",
  (
    html
      .configs["flat/recommended"] as Record<
      "rules"
      ,
      IRule
    >
  )
    .rules,
);

export default HtmlRecommended;
