import type RuleEntry from "./entries/entry.js";
import Enable from "./entries/md/Enable.js";

export default [Enable] as const satisfies readonly RuleEntry[];
