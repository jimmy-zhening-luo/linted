import type RuleEntry from "./index.js";
import EnableStylistic from "./js/EnableStylistic.js";
import Enable from "./js/Enable.js";

export default [EnableStylistic, Enable] as const satisfies readonly RuleEntry[];
