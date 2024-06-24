import Rules from "../Rules.js";
import { OFF } from "../State.js";

const HtmlEnable = new Rules(
  "enable",
  { "@html-eslint/require-title": OFF },
);

export default HtmlEnable;
