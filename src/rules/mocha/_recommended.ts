import { id } from "../_strings.js";
import mocha from "eslint-plugin-mocha";

const { recommended } = id;

// Remove shared config once manually configured
export default [recommended, (mocha.configs.flat.recommended as Record<"rules", Record<string, "off">>).rules] as const;
