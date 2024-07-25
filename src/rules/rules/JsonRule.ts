import type { Input } from "@eslinted/core";
import JsonEnableX from "./objects/json/JsonEnableX.js";
import JsonEnable from "./objects/json/JsonEnable.js";

export default [
  JsonEnableX,
  JsonEnable,
] as const satisfies readonly Input.Rules.Entry[];
