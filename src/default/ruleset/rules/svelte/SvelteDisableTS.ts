import Rule from "../Rule.js";
import { OFF } from "../State.js";

const SvelteDisableConflictTs = new Rule(
  "disable-ts",
  { "@typescript-eslint/no-unused-vars": OFF },
);

export default SvelteDisableConflictTs;
