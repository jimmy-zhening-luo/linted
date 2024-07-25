import type { Input } from "@eslinted/core";
import YmlEnableX from "./rules/yml/YmlEnableX.js";
import YmlEnable from "./rules/yml/YmlEnable.js";

export default [
  YmlEnableX,
  YmlEnable,
] as const satisfies readonly Input.RuleRecord[];
