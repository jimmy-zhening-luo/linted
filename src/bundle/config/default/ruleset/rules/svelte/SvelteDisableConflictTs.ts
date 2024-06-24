import Rules from "../Rules.js";
import { OFF } from "../State.js";

const SvelteDisableConflictTs = new Rules(
  "disable-conflict-ts",
  { "@typescript-eslint/no-unused-vars": OFF },
);

export default SvelteDisableConflictTs;
