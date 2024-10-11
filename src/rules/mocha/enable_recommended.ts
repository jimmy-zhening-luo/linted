import { recommended } from "../_strings.js";
import mocha from "eslint-plugin-mocha";

// REMOVE shared config once manually configured
export default [
  recommended,
  (mocha.configs.flat.recommended as Record<"rules", Record<string, "off">>)
    .rules,
] as const;
