import json from "./json.js";
import override from "./jsonc/override.js";

export default [...json, override] as const;
