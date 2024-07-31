import type RuleEntry from "./entries/index.js";
import Enable from "./entries/md/Enable.js";

export default [Enable] as const satisfies readonly RuleEntry[];
