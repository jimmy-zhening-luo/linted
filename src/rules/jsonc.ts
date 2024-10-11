import Json from "./json.js";
import OverrideJson from "./jsonc/override.js";

export default [...Json, OverrideJson] as const;
