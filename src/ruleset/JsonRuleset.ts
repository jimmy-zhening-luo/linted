import { Ruleset } from "@eslinted/core";
import JsonEnableX from "./rules/json/JsonEnableX.js";
import JsonEnable from "./rules/json/JsonEnable.js";

const JsonRuleset = new Ruleset(
  "json",
  JsonEnableX,
  JsonEnable,
);

export default JsonRuleset;
