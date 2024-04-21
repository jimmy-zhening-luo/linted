import type { vSeverity } from "./values/Severity.js";

export default interface Ruleset {
  [rule: string]: vSeverity | [
    vSeverity,
    ...unknown[],
  ];
}
