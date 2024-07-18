import Rule from "../Rule.js";
import { OFF } from "../State.js";

const HtmlEnable = new Rule(
  "enable",
  { "@html-eslint/require-title": OFF },
);

export default HtmlEnable;
