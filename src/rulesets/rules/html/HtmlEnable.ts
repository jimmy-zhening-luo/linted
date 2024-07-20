import { Rule } from "@eslinted/core";
import { OFF } from "../state.js";
import { Enable } from "../id.js";

const HtmlEnable = new Rule(
  Enable,
  { "@html-eslint/require-title": OFF },
);

export default HtmlEnable;
