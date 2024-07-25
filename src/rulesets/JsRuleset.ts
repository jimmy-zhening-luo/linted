import type { Input } from "@eslinted/core";
import StylisticEnable from "./rules/js/StylisticEnable.js";
import JsEnable from "./rules/js/JsEnable.js";

export default [
  StylisticEnable,
  JsEnable,
] as const satisfies readonly Input.RuleRecord[];
