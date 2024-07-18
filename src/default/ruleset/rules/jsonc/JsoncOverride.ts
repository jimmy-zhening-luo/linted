import Rule from "../Rule.js";
import {
  ERROR,
  OFF,
  ALWAYS_MULTILINE,
} from "../State.js";
import { Override } from "../Id.js";

const JsoncOverride = new Rule(
  Override,
  {

    // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/#jsonc-rules
    "jsonc/no-comments": OFF, // comments are allowed in JSONC
    "jsonc/comma-dangle": [
      ERROR,
      ALWAYS_MULTILINE, // trailing commas are allowed in JSONC
    ],
  },
);

export default JsoncOverride;
