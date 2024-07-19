import Rule from "../Rule.js";
import { OFF } from "../state.js";
import { Enable } from "../id.js";

const HtmlEnable = new Rule(
  Enable,
  { "@html-eslint/require-title": OFF },
);

export default HtmlEnable;
