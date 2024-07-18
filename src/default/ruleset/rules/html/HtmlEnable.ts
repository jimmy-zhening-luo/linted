import Rule from "../Rule.js";
import { OFF } from "../State.js";
import { Enable } from "../Id.js";

const HtmlEnable = new Rule(
  Enable,
  { "@html-eslint/require-title": OFF },
);

export default HtmlEnable;
