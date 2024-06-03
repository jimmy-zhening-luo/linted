import Json5DisableConflict from "./rules/json5/Json5DisableConflict.js";
import Json5DisableExtend from "./rules/json5/Json5DisableExtend.js";
import Json5EnableExtend from "./rules/json5/Json5EnableExtend.js";
import Json5Enable from "./rules/json5/Json5Enable.js";

const Json5Ruleset: IRules[] = [
  Json5DisableConflict,
  Json5DisableExtend,
  Json5EnableExtend,
  Json5Enable,
];

export default Json5Ruleset;
