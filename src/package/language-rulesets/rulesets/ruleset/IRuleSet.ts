import type { Severity } from "./values/index.js";

export default interface IRuleSet {
  [key: string]: Severity | [
    Severity,
    ...unknown[],
  ];
}
