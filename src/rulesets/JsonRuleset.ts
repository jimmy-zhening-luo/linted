import type { Input } from "@eslinted/core";
import JsonEnableX from "./rules/json/JsonEnableX.js";
import JsonEnable from "./rules/json/JsonEnable.js";

export default [
  JsonEnableX,
  JsonEnable,
] as const satisfies readonly Input.RuleRecord[];
