import type RuleEntry from "./index.js";
import Json from "./Json.js";
import OverrideJson from "./jsonc/OverrideJson.js";

export default [...Json, OverrideJson] as const satisfies readonly RuleEntry[];
