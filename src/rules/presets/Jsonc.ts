import type RuleEntry from "./entries/entry.js";
import Json from "./Json.js";
import OverrideJson from "./entries/jsonc/OverrideJson.js";

export default [
  ...Json,
  OverrideJson,
] as const satisfies readonly RuleEntry[];
