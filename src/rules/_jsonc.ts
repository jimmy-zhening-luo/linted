import Json from "./_json.js";
import OverrideJson from "./jsonc/override.js";

export default [...Json, OverrideJson] as const;
